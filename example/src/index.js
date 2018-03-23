import msgData from './messages.yml'
import MessageFormat from 'messageformat/lib/get'
const messages = new MessageFormat(msgData)

function component() {
  const element = document.createElement('div')
  const message = messages.get(['errors', 'messages', 'wrong_length'], { count: 42 })
  element.innerHTML = messages.get(['errors', 'format'], {
    attribute: 'Your message',
    message
  })
  return element
}

console.log('messages', messages.get([]))
document.body.appendChild(component())
