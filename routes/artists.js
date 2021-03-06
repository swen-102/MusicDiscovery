var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mdteam:Discovery123@ds155684.mlab.com:55684/music-discovery');
const Artist = require('../models/artist');
const config = require('../config/database');

// Get All Artists
router.get('/artists', function(req, res, next){
    db.artists.find(function(err, artists){
        if(err){
            res.send(err);
        }
        res.json(artists);
    });
});

// Get Single Artist from Search
router.get('/artist/:id', function(req, res, next){
    db.artists.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, artist){
        if(err){
            res.send(err);
        }
        res.json(artist);
    });
});

//Save Artist
router.post('/new-artist', (req, res, next) => {
    let newArtist = new Artist({
        name: req.body.name,
        bio: req.body.bio,
        genre: req.body.genre,
        albums: req.body.albums
    });

    Artist.addArtist(newArtist, (err, artist) => {
        if(err){
            res.json({success: false, msg:'Failed to add'+artist});
        } else {
            res.json({success: true, msg:'Added '+artist})
        }
    });
});

// Delete Artist
router.delete('/artist/:id', function(req, res, next){
    db.artists.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, artist){
        if(err){
            res.send(err);
        }
        res.json(artist);
    });
});

// Update Artist
router.put('/artist/:id', function(req, res, next){
    var artist = req.body;
    var updArtist = {};
    
    if(artist.name){
        updArtist.name = artist.name;
    }
    
    if(!updArtist){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.artists.update({_id: mongojs.ObjectId(req.params.id)},updArtist, {}, function(err, artist){
        if(err){
            res.send(err);
        }
        res.json(artist);
    });
    }
});

module.exports = router;