const ffmpeg = require("fluent-ffmpeg")

const proc = new ffmpeg();

proc.addInput("/root/Desktop/films/spider/spider.mp4")
.on('start', function(ffmpegCommand) {
    console.log(ffmpegCommand)
})
.on('progress', function(data) {
    console.log(data)
})
.on('end', function(x) {
    console.log(x)
})
.on('error', function(error) {
    console.error(error)
})
.addInputOption(['-ss 00:1:17','-t 1'])
.outputOptions("-f mjpeg")
.output("op.jpeg")

proc.run()
