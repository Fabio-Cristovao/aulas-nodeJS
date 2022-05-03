const express = require('express');
const router = express.Router();
const database = require('../src/database');
router.use(express.json());
router.use(express.urlencoded({
   extended: true
}));

router.get('/', (req, res) => {

   console.log(req.body)
   database.query('SELECT * FROM contacts',
      (err, rows, fields) => {
         if (err) throw err;
         console.log(rows)
         res.render('../views/index', { rows })
      });
})

router.get('/add', (req, res) => {
   res.render('../views/addContact');
});

router.post('/add', (req, res) => {
   console.log(req.body)

   const { name, lastName, email } = req.body;
   const sql = `INSERT INTO contacts (firstName, lastName, emailAddress) VALUES ("${name}", "${lastName}", "${email}")`;
   database.query(sql, function (err, result) {
      if (err) throw err;
      console.log('success',);
      res.redirect('/');
   });
})


router.get('/contact/:id', (req, res) => {
   console.log(req.params);
   const { id } = req.params;
   const contact = database.query(`SELECT * FROM contacts WHERE id = ${id}`,
      (err, rows, fields) => {
         if (err) throw err;
         console.log(contact)

         if (!contact) {
            return res.status(404).json({
               code: 404,
               message: 'Product not found'
            });
         }
         res.render('../views/contactDetails', { rows })
      });
});

router.get('/:id', (req, res) => {
   const { id } = req.params;
   newContacts = database.query(`SELECT * FROM contacts WHERE id != ${id}`,
      (err, rows, fields) => {
         if (err) throw err;
         console.log(rows);
      })
   res.render('../views/index.hbs', { newContacts })
})


module.exports = router;
