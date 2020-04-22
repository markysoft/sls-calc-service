const parseSqsEvent = require('../../lib/parse-sqs-event')

const sampleEvent = {
  Records: [
    {
      messageId: '19dd0b57-b21e-4ac1-bd88-01bbb068cb78',
      receiptHandle: 'MessageReceiptHandle',
      body: '{"amount": 5}',
      attributes: [{}],
      messageAttributes: {},
      md5OfBody: '7b270e59b47ff90a553787216d55d91d',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:eu-west-1:123456789012:MyQueue',
      awsRegion: 'eu-west-1'
    }
  ]
}
describe('parse sqs event', () => {
  test('returns record body as json', () => {
    const messages = parseSqsEvent(sampleEvent)
    expect(messages.length).toEqual(1)
    expect(messages[0].amount).toEqual(5)
  })
})
