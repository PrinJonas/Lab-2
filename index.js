let button1 = document.getElementById('addButton')
let button2 = document.getElementById('removeButton')
let paragraph = document.createElement('p')
let text = document.createTextNode('This is a student')

button1.addEventListener('click', function () {
  paragraph.appendChild(text)
  document.body.appendChild(paragraph)
}, false)

button2.addEventListener('click', function () {
  paragraph.removeChild(text)
}, false)
