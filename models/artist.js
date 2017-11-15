const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const config = require('../config/database');

// Artist Schema
const ArtistSchema = mongoose.Schema({
    name: {
        type: String
    },
    bio: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

const Artist = module.exports = mongoose.model('Artist', ArtistSchema);

module.exports.addArtist = function(newArtist, callback){
    newArtist.save(callback);
}