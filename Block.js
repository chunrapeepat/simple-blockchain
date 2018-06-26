class Block {
  constructor(timestamp, data, hash, prevBlockHash) {
    this.timestamp = timestamp
    this.data = data
    this.hash = hash
    this.prevBlockHash = prevBlockHash
  }

  setHash() {
    const data = this.timestamp + this.data + this.prevBlockHash
    this.hash = Hash.sha256(data)
  }
}
