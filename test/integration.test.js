const axios = require('axios')
axios.defaults.adapter = require('axios/lib/adapters/http')

const createQueue = require('./lib/create-queue')

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

  beforeAll(async () => {
    const queueConfig = {
      name: 'calculation-out',
      endpoint: 'http://elasticmq:9324',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
    }
    await createQueue('calculation-out', queueConfig)
  })
  
  test('handler unit test', async () => {
    const result = await axios({
      method: 'post',
      url: 'http://lambda:9001/2015-03-31/functions/calculate/invocations',
      data: sampleEvent
    })
    console.log(result.data)
    expect(result.data).toEqual(true)
  })
})
