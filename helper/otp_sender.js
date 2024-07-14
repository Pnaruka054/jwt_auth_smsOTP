require('dotenv').config()

const sendOTP = async (to, message, response) => {
    try {
        const mobile_number = "+91" + to
        const accountSid = process.env.ACCOUNTSID;
        const authToken = process.env.AUTHTOKEN;
        const client = require('twilio')(accountSid, authToken);
        client.messages.create({
            body: message,
            to: mobile_number,
            from: process.env.FROM_MOBILE_NUMBER
        })
            .then(verification => console.log(verification.sid));
        response()
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendOTP