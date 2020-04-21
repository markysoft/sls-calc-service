const addVatField = require('../../lib/add-vat-field')

describe('add vat field', () => {
  test('should add vat as separate field', () => {
    const result = addVatField({ amount: 100 })
    expect(result.amount).toEqual(100)
    expect(result.vat).toEqual(20)
  })
})
