function addVatField (message) {
  return { ...message, vat: message.amount * 0.2 }
}

module.exports = addVatField
