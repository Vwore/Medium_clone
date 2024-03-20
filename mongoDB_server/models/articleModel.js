const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Number, ref: 'User', required: true },
    author: { type: String, required: true },
    topic: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    minutesToRead: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

  })

  module.exports = mongoose.model('Article',articleSchema)