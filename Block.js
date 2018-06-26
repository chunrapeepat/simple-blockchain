class Block {
  constructor(timestamp, data, hash, prevBlockHash) {
    this.timestamp = timestamp
    this.data = data
    this.hash = hash
    this.prevBlockHash = prevBlockHash
  }
}
