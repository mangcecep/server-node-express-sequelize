const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')
const studentRoute = require('./routes/student.route')

app.use(express.json())

const corsOption = {
    origin: ["http://localhost:3000"]
}

app.use('/service/student', cors(corsOption), studentRoute)

app.get('/', (req, res) => {
    res.send({
        message: "server is running"
    })
})

app.listen(PORT, () => console.log(`SERVER RUNNING ${PORT}`))