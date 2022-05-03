require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();

app.use(express.json());

const User = require('./models/user')

app.post('/register', async (req, res) => {

   // login starts here

   try {

      // get user input

      const { firstName, lastName, email, password } = req.body;

      // validate user user input

      if (!(email && password && firstName && lastName)) {
      }

      res.status(400).send('All input is required');

      // check if user exists
      // validate if user existe in out database

      const oldUser = await User.findOne({ email });

      if (oldUser) {
         return res.status(409).send('User Already Exist. Please Login')
      }

      //encrypt user password

      encryptedUserPassword = await bcrypt.hash(password, 10);

      // create user in our database
      const user = await User.create({
         first_name: firstName, lastName,
         last_name: lastName,
         email: email.toLowerCase(),
         password: encryptedUserPassword,
      });

      // Create a token

      // create token

      const token = jwt.sign(
         { user_id: user_id, email },
         process.env.TOKEN_KEY,
         {
            expiresIn: '5h',
         }
      );

      // save user token

      user.token = token;

      //return new user

      res.status(201).json(user);

   } catch (err) {
      console.error(err);
   }

   // register logic end here

});

app.post('/login', (req, res) => {
});




// login logic goes on haere;

module.exports = app;




