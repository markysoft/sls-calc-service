function getQueueUrlFromContext(ctx){
  const region = ctx.invokedFunctionArn.split(':')[3]
  const accountId = ctx.invokedFunctionArn.split(':')[4]
  const queueName = process.env.QUEUE_NAME
  return `https://sqs.${region}.amazonaws.com/${accountId}/${queueName}`
}

module.exports = getQueueUrlFromContext
