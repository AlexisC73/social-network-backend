import mysql from 'mysql'

class Database {
  connection: mysql.Connection

  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || '',
      password: process.env.DB_PASSWORD || '',
      user: process.env.DB_USER || 'root',
    })
  }

  query = async (query, params = []) => {
    return new Promise((resolve, reject) => {
      this.connection.query(query, params, async (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}

const db = new Database()

export = db
