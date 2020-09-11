const db = require('../data/db-config')

function find() {
  return db('resources') //CHANGE321
}

function add(resource) { //CHANGE321
  return( 
    db('resources') //CHANGE321
    .insert(resource) //CHANGE321
    .then( id => {
      return findById(id[0])
    })
  )
}

function findById(id) {
  return db('resources').where({ id }).first() //CHANGE321
}

function update(changes, id) {
  return db('resources') //CHANGE321
    .update(changes)
    .where({ id })
    .then( () => {
      return findById(id)
    })
}

function remove(id) {
  let removed
    findById(id).then(rez => removed=rez)
  return db('resources') //CHANGE321
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