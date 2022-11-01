const db = require('../db')
const { Guests } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const guests = [
    {
      name: 'Jessie James',
      age: 32,
      height: `5ft, 5in`,
      image:
        'https://d5c1j5k5drfk7.cloudfront.net/wp-content/uploads/2020/03/ScottDettman_Avenica2-copy-750x450.jpg'
    },
    {
      name: 'Tony Allen',
      age: 16,
      height: `4ft, 8in`,
      image: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX2506712.jpg'
    },
    {
      name: 'Cindy Lou',
      age: 8,
      height: `3ft, 2in`,
      image:
        'https://t3.ftcdn.net/jpg/02/87/09/22/360_F_287092239_aI0vGMxSbF4xnlBcHmEzuTOzvlCnklYA.jpg'
    },
    {
      name: 'Charles Rickenbocker',
      age: 83,
      height: `5ft, 0in`,
      image:
        'https://i.pinimg.com/originals/87/b4/c0/87b4c0c8d9cd828fe24f07416ee82472.jpg'
    }
  ]

  await Guests.insertMany(guests)
  console.log('Created some guests')
}
const run = async () => {
  await main()
  db.close()
}

run()
