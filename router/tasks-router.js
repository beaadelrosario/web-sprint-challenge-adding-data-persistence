const express = require('express')

const db = require('./db-helper')

const router = express.Router()

router.get('/', (req, res) => {
  db.findTaskList()
  .then((tasks) => {
    res.status(200).json(tasks);
  })
  .catch((err) => {
    res.status(500).json({ message: err });
  });
})

router.post('/', (req, res) => {
  db.add(req.body, "tasks")
  .then(response => {
    res.status(200).json(response)
  }
  )
  .catch((err) => {
    res.status(500).json({ message: err });
  });
})

module.exports = router;