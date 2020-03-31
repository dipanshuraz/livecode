const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  return done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    return done(err, user)
  })

})

passport.use(new LocalStrategy({ usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) {
        return done(err)
      } if (!user) {
        return done(null, false, {
          message: 'Incorrect Username & Password'
        })
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect Username & Password'
        })
      }
      return done(null, user)
    })
  }
))