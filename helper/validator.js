const { check } = require("express-validator");

const registerValidator = [
    check('mobile_number', 'Mobile number must be 10 digits').isLength({
        max: 10,
        min: 10
    }),
    check('password', 'Password must contain min 8 character(min[1 number, 1 speciel character, 1 word]').isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    })
]

const passwordValidator = [
    check('password', 'Password must contain min 8 character(min[1 number, 1 speciel character, 1 word]').isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    })
]

const sms_resendOTP_Validator = [
    check('mobile_number', 'Mobile number must be 10 digits').isLength({
        max: 10,
        min: 10
    }),
]

const otpValidator = [
    check('otp', 'OTP is only 4 digits').isLength({
        max: 4,
        min: 4
    })
]

const loginValidator = [
    check('mobile_number', 'Mobile number must be 10 digits').isLength({
        max: 10,
        min: 10
    }),
]

module.exports = {
    registerValidator,
    passwordValidator,
    loginValidator,
    otpValidator,
    sms_resendOTP_Validator
}