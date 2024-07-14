const mongoose = require('mongoose')

const OTP_Schema = new mongoose.Schema({
    otp: { type: Number, require: true },
    mobile_number: { type: String, require: true }
})

const otp_data = mongoose.model('otp_Data', OTP_Schema)

module.exports = otp_data