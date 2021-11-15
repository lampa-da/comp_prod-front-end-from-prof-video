const express = require('express')
const path = require('path')
// const faker = require('faker')

// console.log(faker.company.companyName())

const app = express()

// app.use('/src', express.static(path.join(__dirname, 'src')) )
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')) )
app.use('/dist', express.static(path.join(__dirname, 'dist')) )

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

const port =process.env.PORT || 3001;

app.listen(port, ()=> console.log(`listen on port ${port}`))