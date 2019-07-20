const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partitals')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Duc Anh'

  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Duc Anh'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helptext: 'This is some helpful text',
    title: 'help',
    name: 'Duc Anh'
  })
})


app.get('/weather', (req, res) => {
  res.send([{
    location: 'vietnam',
    template: '20%'
  },
  {
    location: 'china',
    template: '20%'
  }])
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Duc Anh',
    errorMessage: 'Help article not Found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Duc Anh',
    errorMessage: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})