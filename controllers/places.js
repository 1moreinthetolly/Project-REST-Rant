const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.render('places/new')
  const placeId = req.params.id
  res.send(`Displaying details for place with ID ${placeId}`)
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg',
        creditName: 'Jason Leung',
        credit: 'https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA#:~:text=Photo%20by-,Jason%20Leung,-on%20Unsplash'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg',
        creditName: 'Jay Wennington',
        credit: 'https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA#:~:text=Photo%20by-,Jay%20Wennington,-on%20Unsplash'
      }]
      
    res.render('places/index', {places})
})


module.exports = router