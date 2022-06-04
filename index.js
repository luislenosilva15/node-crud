const express = require('express')
const app = express()
const port = 8080
var cors = require('cors')

app.use(cors())

const users = [
    {
        id: 1,
        name: 'mariane vieira',
        age: 30
    },

    {
        id: 2,
        name: 'luis silva',
        age: 30
    },

    {
        id: 3,
        name: 'caroline feijo',
        age: 30
    },
]

app.get('/users', (req, res) => {

    res.json(users)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
