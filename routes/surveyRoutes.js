const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const template = require('../services/templates/survey');

const Survey = mongoose.model('surveys');

module.exports = app => {
  /* Make sure user is logged in and has enough credits. */
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    /* Send an email using Sendgrid */
    const mailer = new Mailer(survey, template(survey));
    mailer.send();
  });
};
