const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected Bro...')
    socket.on('message', (msg) => {
        // console.log(msg);
        socket.broadcast.emit('message', msg)
    })

})







// const { Socket } = require("dgram")
// const express = require("express")
// const app = express()
// const http = require('http').createServer(app)

// const PORT = process.env.PORT || 3000

// http.listen(PORT, () => {
//     console.log(`listing on port ${PORT}`)
// })

// app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })


// //socket
// const io = require("socket.io")(http)
// io.on('connection', (socket) => {
//     console.log("connected Bro ...")
// })