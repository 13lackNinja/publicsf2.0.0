// Dummy response from Ticketfly using the propertiess I care about

import cooldjImage from './images/cooldj.jpg'

const eventResponse = {
  'events': [
    {
      'featured': true,
      'published': true,
      'name': null,
      'headlinersName': 'Lovestrukk (Nico Stojan & Holmar), Okaxy, Geju & Betelgeize',
      'image': cooldjImage,
      'supportsName': null,
      'startDate': new Date('2018-12-03 13:40:33'),
      'promoterName': 'Public Works, On&On + Below Radar',
      'additionalInfo': 'Post Playa Shenanigans',
      'ticketPurchaseURL': 'https://ticketfly.com',
      'ticketPrice': '$15-20',
    }
  ]
}

export default eventResponse;
