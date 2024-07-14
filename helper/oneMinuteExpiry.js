
let oneMinuteExpiry = async (otpTime) => {
    const c_datetime = new Date()
    let defferenceValue = (otpTime - c_datetime) / 1000
    defferenceValue /= 60

    if (Math.abs(defferenceValue) > 1) {
        return true
    }
    return false
}

module.exports = oneMinuteExpiry