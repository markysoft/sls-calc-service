function enrichMessage(message){
  return { ...message, double: message.amount * 2  }
}

module.exports = enrichMessage
