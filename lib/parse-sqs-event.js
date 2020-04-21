function parseSqsEvent (event) {
  return event.Records.map(r => parseSqsBody(r))
}
function parseSqsBody (record) {
  const body = record && record.body
  return body ? JSON.parse(body) : undefined
}

module.exports = parseSqsEvent
