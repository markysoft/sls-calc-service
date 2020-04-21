const handler = require('../handler')

const sampleEvent = {
  Records: [
    {
      messageId: '19dd0b57-b21e-4ac1-bd88-01bbb068cb78',
      receiptHandle: 'MessageReceiptHandle',
      body: "{\"amount\": 5}",
      attributes: [{}],
      messageAttributes: {},
      md5OfBody: '7b270e59b47ff90a553787216d55d91d',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:us-east-1:123456789012:MyQueue',
      awsRegion: 'us-east-1'
    }
  ]
}
describe('test handler', () => {

  test('handler unit test', async () => {
    const result = await handler.calculate(sampleEvent)
    expect(result).toEqual(true)
  })
})
