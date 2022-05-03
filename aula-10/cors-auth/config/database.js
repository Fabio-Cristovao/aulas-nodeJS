const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
   mongoose
      .connect(MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // useCreateIndex: false,
         // useFindAndModify: false,
      })
      .then(() => {
         console.log('connected to database')
      })
      .catch((err) => {
         console.log('database connection failed');
         console.error(err);
         process.exit(1);
      });
};

