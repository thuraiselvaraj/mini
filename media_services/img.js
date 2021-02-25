const ffmpeg = require("fluent-ffmpeg")
const proc = new ffmpeg();
proc.addInput("/root/Desktop/miniProj/media_services/high.jpg")
.on('start', function(ffmpegCommand) {
    console.log(ffmpegCommand)
})
.on('progress', function(data){
    console.log(data)
})
.on('end', function(x){
    console.log(x)
})
.on('error', function(error){
    console.error(error)
})
.outputOptions("-s 1270x720")
.output("op22.jpg")
proc.run()