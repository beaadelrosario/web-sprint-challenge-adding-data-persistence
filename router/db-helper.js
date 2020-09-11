const db = require('../data/db-config')

function find(table) {
  return db(table) 
};

function add(object, table) { 
  return db(table) 
    .insert(object) 
    .then( id => {
      return findById(id[0], table)
    })
};

function findById(id, table) {
  return db(table).where({ id }).first()
};

function findTaskList() {
  return db("tasks")
  .join("projects", "tasks.project_id", "projects.id")
  .select(
    "projects.project_name", 
    "projects.description", 
    "tasks.description as task", 
    "tasks.completed?")
  .orderBy("projects.project_name")
};

module.exports ={
  find,
  add,
  findTaskList
};