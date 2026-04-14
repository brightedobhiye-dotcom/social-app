const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attendSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    status: { type: String, enum: [ 'going', 'maybe', 'declined'] }
}, { timestamps: true, collection: 'attendance'})

const model = mongoose.model('Attendance', attendSchema)
module.exports = model