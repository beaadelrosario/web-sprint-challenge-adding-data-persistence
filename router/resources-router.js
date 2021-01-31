const express = require('express')

const db = require('./db-helper') //CHANGE321

const router = express.Router()

router.get('/', (req, res) => {
  db.find("resources")
  .then((resources) => {
    if (resources.length) {
      res.status(200).json(resources);
    } else {
      res
        .status(404)
        .json({ message: "There are no resource on the server" });
    }
  })
  .catch((err) => {
    res.status(500).json({ message: err });
  });
})

router.post('/', (req, res) => {
  db.add(req.body, "resources")
  .then(response => {
    res.status(200).json(response)
  }
  )
  .catch((err) => {
    res.status(500).json({ message: err });
  });
})

module.exports = router;