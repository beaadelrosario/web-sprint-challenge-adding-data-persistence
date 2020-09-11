const express = require('express')
const helmet = require("helmet");
const resourcesRouter= require('./router/resources-router') //CHANGE321
const projectsRouter= require('./router/projects-router') //CHANGE321

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/projects', projectsRouter) //CHANGE321
server.use('/api/resources', resourcesRouter) //CHANGE321

server.get('/', (req, res) => {
  res.status(200).json({ Victor_Frankenstein: 'It LIVEEEESSSSSSS' })
})

// server.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ message: "Something went wrong!" });
// });

module.exports = server;