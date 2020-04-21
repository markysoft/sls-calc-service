const parseSqsEvents = require('./lib/parse-sqs-event')
const getQueueUrlFromContext = require('./lib/get-queue-url-from-context')
const updateMessage = require('./lib/update-message')
const sendMessages = require('./lib/send-messages')

module.exports.calculate = async (event, ctx) => {
  const updatedMessages = parseSqsEvents(event).map(updateMessage)
  if (ctx){
    await sendMessages(updatedMessages, getQueueUrlFromContext(ctx))
  }
  return true
}

