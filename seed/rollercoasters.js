const db = require('../db')
const { Rollercoaster } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rollercoasters = [
    {
      Name: 'Anaconda',
      Manufacturer: 'Arrow Dynamics',
      Speed: '50 mph',
      Height: '128 ft',
      Length: '2,700 ft',
      Inversions: '4',
      Duration: '1:50',
      Image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/anaconda-banner.jpg',
      HeightRequirement: 48
    },
    {
      Name: 'Flight of Fear',
      Manufacturer: 'Premier Rides',
      Speed: '54 mph',
      Height: '74.2 ft',
      Length: '2,705 ft',
      Inversions: '4',
      Duration: '2:24',
      Image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/flight-of-fear-banner.jpg',
      HeightRequirement: 54
    },
    {
      Name: 'Intimidator 305',
      Manufacturer: 'Intamin Amusement Rides',
      Speed: '90 mph',
      Height: '305 ft',
      Length: '5,100 ft',
      Inversions: '0',
      Duration: '3:00',
      Image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/intimidator-305-banner.jpg',
      HeightRequirement: 54
    },
    {
      Name: 'Twisted Timbers',
      Manufacturer: 'Rocky Mountain Construction',
      Speed: '54 mph',
      Height: '111 ft',
      Length: '3,361 ft',
      Inversions: '3',
      Duration: '2:00',
      Image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/twisted-timbers-banner.jpg',
      HeightRequirement: 48
    }
  ]
  await Rollercoaster.insertMany(rollercoasters)
  console.log('Added some rollercoasters!')
}

const run = async () => {
  await main()
  db.close()
}

run()
