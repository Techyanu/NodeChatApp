const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while (!name)

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }


    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()


    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

socket.on('message', (msg) => {

    // console.log(msg);
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}


























// const socket = io()

// let username;
// let textarea = document.querySelector('#textarea');
// let messagearea = document.querySelector('.message_area')
// do {
//     username = prompt('please enter your name:')
// } while (!username)

// textarea.addEventListener('keyup', (e) => {
//     if (e.key === 'enter') {
//         sendMessage(e.target.value)
//     }
// })

// function sendMessage(message) {
//     let msg = {
//         user: username,
//         message: message
//     }

//     appendMessage(msg, 'outgoing')

// }

// function appendMessage(msg, type) {
//     let mainDiv = document.createElement('div')
//     let className = type
//     mainDiv.classList.add(className, 'message')

//     let markup =
//         `<h4> ${user} </h4>
//          <p>${msg.message}</p>
//         `
//     mainDiv.innerHTML = markup
//     message_area.appendChild(mainDiv)
// }