var express = require("express");
var router = express.Router();
var nodemailer = require('nodemailer')
var config = require('../config')
var transporter = nodemailer.createTransport(config.mailer)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "LiveCode" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "LiveCode | About" });
});

router
  .route("/contact")
  .get((req, res, next) => {
    res.render("contact", { title: "LiveCode | About" });
  })
  .post((req, res, next) => {
    req.checkBody("name", "Empty Name").notEmpty();
    req.checkBody("email", "Invalid Email").isEmail();
    req.checkBody("message", "Empty Message").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      res.render("contact", {
        title: "LiveCode | About",
        name: req.body.name,
        email: req.body.email,
        message: req.body.email,
        errorMessages: errors
      });
    } else {

      var mailOptions = {
        from: 'LiveCode <no-reply@livecode.com>',
        to: 'dipanshuraz2@gmail.com',
        subject: 'You got a new mail',
        text: `${req.body.message} sender name : ${req.body.name} sender email :
         ${req.body.email}`
      }
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error)
        else {
          res.render("thank", { title: "LiveCode | About" });
        }
      })

    }
  });



module.exports = router;
