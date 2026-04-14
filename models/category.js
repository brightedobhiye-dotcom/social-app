const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: String, // e.g., 'Tech', 'Social', 'Fitness'
    description: String,
    icon: String, // Could be a URL to an icon image, or an emoji string
    colorCode: String // Hex code (e.g., '#FF5733') for styling tags in the UI
}, { timestamps: true, collection: 'categories' })

const Category = mongoose.model('Category', categorySchema)
module.exports = Category