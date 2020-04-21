
const SQS = require('aws-sdk/clients/sqs')

async function sendMessages (messages, queueUrl) {
  for (const message of messages) {
    await new SQS().sendMessage({
      MessageBody: JSON.stringify(message),
      QueueUrl: queueUrl
    }).promise()
  }
}

module.exports = sendMessages
