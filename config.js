'use strict'

//require('dotenv').config();

module.exports = {
  mailer: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: 'ivecode.codersadhu@gmail.com',
      pass: 'Ravi@12345'
    }
  },
  dbConnstring: "mongodb+srv://admin:123@livecode-bowrk.mongodb.net/test?retryWrites=true&w=majority",
  sessionKey: 'HelloLiveCode'

}

//'mongodb://127.0.0.1:27017/livecode',