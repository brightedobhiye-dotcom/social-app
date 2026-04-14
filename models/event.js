const mongoose = require('mongoose')
const Schema = mongoose.Schema

// GeoJSON Point schema
const pointSchema = new Schema({
    type: { type: String, enum: ['Point'], required: true, default: 'Point' },
    coordinates: { type: [Number], // [longitude, latitude]
        required: true
    }
})

const eventSchema = new Schema({
    title: String, //e.g Saturday Morning Coffe & Code
    description: String,
    organizer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', // must match your user model name
        required: true
    }, // user that created the event
    location: { type: pointSchema, required: true },
    address: String,  // 09057675129
    date: Date, // Date of the event
    duration: Number, // e.g minutes
    capacity: Number, // max no. of attendees allowed
    category: { type: String, enum: ['Social', 'Tech', 'Fitness'] },
    status: { type: String, enum: ['upcoming', 'ongoing', 'completed', 'cancelled'] },
    attendeesCount: { type: Number, default: 0 }
}, { timestamps: true, collection: 'events' })

// Important for $near queries
eventSchema.index({ location: '2dsphere' })

const model = mongoose.model('Event', eventSchema)
module.exports = model