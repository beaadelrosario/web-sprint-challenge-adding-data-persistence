const db = require('../data/db-config')
// const projects = require('./projects-helper');
// const router = express.Router();

function find() {
  return db('projects') //CHANGE321
}

function add(project) { //CHANGE321
  return( 
    db('projects') //CHANGE321
    .insert(project) //CHANGE321
    .then( id => {
      return findById(id[0])
    })
  )
}

function findById(id) {
  return db('projects').where({ id }).first() //CHANGE321
}

function update(changes, id) {
  return db('projects') //CHANGE321
    .update(changes)
    .where({ id })
    .then( () => {
      return findById(id)
    })
}

function remove(id) {
  let removed
    findById(id).then(rez => removed=rez)
  return db('projects') //CHANGE321
    .where({ id })
    .del()
    .then(() => {
      return removed
    })
}

module.exports ={
  find,
  findById,
  add,
  update,
  remove
}