const BankService = require('./bank')
const AuthService = require('./auth')
const UserService = require('./user')
const EmailService = require('./email')
const { CreateSenderNodemailer, CreateSenderSendGrid } = require('./email-sendler')

module.exports = {
    BankService,
    AuthService,
    UserService,
    EmailService,
    CreateSenderNodemailer,
    CreateSenderSendGrid
}

