const express = require('express')
const app = express()

app.use(express.static("public"))

//biar bisa baca postdata
app.use(express.urlencoded({ extended: true })) 

// biar bisa ngirim json
app.use(express.json())

app.set('view engine', 'ejs')
// semua url kena middleware
// app.use(logger)

// cuma pakai middleware di route ini
app.get('/', logger, logger, (req, res) => {
    console.log('here')

    // respon view
    // res.render('index', { text: 'world' })

    // respon download
    // res.download("server.js")
    
    // respon json
    // res.json({
    //     message: "Error"
    // })

    // respon status dan send, bisa pakai json juga
    // res.status(500).send('Hi')
    
    // respon teks
    res.send('Hi')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(2000)