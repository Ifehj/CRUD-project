const express = require('express')
const app = express()
const UsersRoute = require("../routes/Users")
const PORT = 5000

app.use(express.json());

app.use('/Users', UsersRoute)

app.listen(PORT, (req, res) => {
	app.get("./introduction", (req, res) => {
        res.json(`server is running on port ${PORT}`)
    })
})

