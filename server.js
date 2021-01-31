const express = require('express')
const helmet = require("helmet");
const resourcesRouter= require('./router/resources-router') 
const projectsRouter= require('./router/projects-router')
const tasksRouter= require('./router/tasks-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/projects', projectsRouter) 
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
  res.status(200).json({ Victor_Frankenstein: 'It LIVEEEESSSSSSS' })
})


module.exports = server;