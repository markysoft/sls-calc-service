const parseSqsEvents = require('./lib/parse-sqs-event')
const addVatField = require('./lib/add-vat-field')
const sendMessages = require('./lib/send-messages')

module.exports.calculate = async (event) => {
  try {
    const updatedMessages = parseSqsEvents(event).map(addVatField)
    await sendMessages(updatedMessages, process.env.QUEUE_URL)
    return true
  } catch (ex) {
    console.error('error encountered', ex)
    return false
  }
}
