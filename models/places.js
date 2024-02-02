const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350' },
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future']
  }  
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)







//module.exports = [{
//  name: 'H-Thai-ML',
  //city: 'Seattle',
  //state: 'WA',
  //cuisines: 'Thai, Pan-Asian',
  //pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg',
  //creditName: 'Jason Leung',
  //credit: 'https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA#:~:text=Photo%20by-,Jason%20Leung,-on%20Unsplash'
//}, {
 // name: 'Coding Cat Cafe',
 // city: 'Phoenix',
 // state: 'AZ',
 // cuisines: 'Coffee, Bakery',
 // pic: '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg',
 // creditName: 'Jay Wennington',
 // credit: 'https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA#:~:text=Photo%20by-,Jay%20Wennington,-on%20Unsplash'
//}]
