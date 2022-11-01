const db = require('../db')
const { Rollercoaster } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rollercoasters = [
    {
      name: 'Anaconda',
      manufacturer: 'Arrow Dynamics',
      speed: '50 mph',
      height: '128 ft',
      length: '2,700 ft',
      inversions: '4',
      duration: '1:50',
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/anaconda-banner.jpg',
      heightRequirement: '4ft'
    },
    {
      name: 'Flight of Fear',
      manufacturer: 'Premier Rides',
      speed: '54 mph',
      height: '74.2 ft',
      length: '2,705 ft',
      inversions: '4',
      duration: '2:24',
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/flight-of-fear-banner.jpg',
      heightRequirement: '4ft, 5in'
    },
    {
      name: 'Intimidator 305',
      manufacturer: 'Intamin Amusement Rides',
      speed: '90 mph',
      height: '305 ft',
      length: '5,100 ft',
      inversions: '0',
      duration: '3:00',
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/intimidator-305-banner.jpg',
      heightRequirement: '4ft, 5in'
    },
    {
      name: 'Twisted Timbers',
      manufacturer: 'Rocky Mountain Construction',
      speed: '54 mph',
      height: '111 ft',
      length: '3,361 ft',
      inversions: '3',
      duration: '2:00',
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kd-en-us/poi/v2/twisted-timbers-banner.jpg',
      heightRequirement: '4ft'
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
