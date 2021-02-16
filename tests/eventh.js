const events=require("events")
const conn=require("../pg_models/connection.js").client 
var em = new events.EventEmitter();

//Subscribe for FirstEvent
// em.on('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
limit =20;
function sample(data) {
    console.log('First subscriber: ' + data);
}
for(let i=0;i<limit;i++){
    em.on(i, sample);
}

for(let i=0;i<20;i++){
    em.emit(i,200);
}

for(let i=0;i<limit;i++){
    em.removeListener(i, sample);
}

for(let i=0;i<limit+10;i++){
    em.on(i, sample);
}
