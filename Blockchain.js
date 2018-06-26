const Datastore = require('nedb')

const Block = require('./Block')

const blockchainFilePath = 'blockchain.db'
const latestHashFilePath = 'latestHash.db'

class Blockchain {
  constructor() {
    this.db = {}
    this.latestHash = ''
  }

  async connect() {
    try {
      this.db = this.connectDB()
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }

  connectDB() {
    const db = {}
    db.blockchain = new Datastore({
      filename: blockchainFilePath,
      autoload: true,
    })
    db.blockchain = new Datastore({
      filename: latestHashFilePath,
      autoload: true,
    })
    return db
  }
}
