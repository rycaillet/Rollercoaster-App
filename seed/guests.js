const db = require('../db')
const { guestSchema } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const guests = [
    {
      name: 'Jessie James',
      age: 32,
      height: `5ft, 5in`
    },
    {
      name: 'Tony Allen',
      age: 16,
      height: `4ft, 8in`
    },
    {
      name: 'Cindy Lou',
      age: 8,
      height: `3ft, 2in`
    },
    {
      name: 'Charles Rickenbocker',
      age: 83,
      height: `5ft, 0in`
    }
  ]

  await guestSchema.insertMany(guests)
  console.log('Created some guests')
}
const run = async () => {
  await main()
  db.close()
}

run()
