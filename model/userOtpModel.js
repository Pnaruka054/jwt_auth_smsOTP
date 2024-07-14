const mongoose = require('mongoose')

const OTP_Schema = new mongoose.Schema({
    otp: { type: Number, require: true },
    mobile_number: { type: String, require: true },
    timeStamps: {
        type: Date,
        required: true,
        get: (time) => time.getTime(),
        set: (timeS) => new Date(timeS)
    }
})

const otp_data = mongoose.model('otp_Data', OTP_Schema)

module.exports = otp_data