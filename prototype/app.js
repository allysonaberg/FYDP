const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))






//START
app.listen(process.env.PORT || 3000, () => {
	console.log(listening on port 3000)
})