import messages from './messages.yml'
const { format, messages: errors } = messages.en.errors

function component() {
  const element = document.createElement('div')
  element.innerHTML = format({
    attribute: 'Your message',
    message: errors.wrong_length({ count: 42 })
  })
  return element
}

console.log('messages', messages)
document.body.appendChild(component())
