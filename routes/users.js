const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({
            firstname: req.body.firstname
        })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        res.render('users/new', { firstname: req.body.firstname })
    }
    // console.log(req.body.firstname)
    // res.send('Hi')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`)
    })

// router.get('/:id', (req, res) => {
//     res.send(`get user with id ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`update user with id ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`delete user with id ${req.params.id}`)
// })

// simple middleware by params
const users = [{ name: 'dion' }, { name: 'sally' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router