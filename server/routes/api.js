var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mdteam:Discovery123@ds155684.mlab.com:55684/music-discovery') //database access
var ObjectId = mongojs.ObjectId;

//Get All Tasks
router.get('/artists', function(req, res, next){
    db.artists.find(function(error, artists){
        if(error){
            res.send(error);
        }
        res.json(artists);
    });
});

//Get Single Artist
router.get('/artist/:id', function(req, res, next){
    db.artists.findOne({_id: ObjectId(req.params.id)}, function(error, artist){
        if(error){
            res.send(error);
        }
        res.json(artist);
    })
});

//Save Task
router.post('/artist', function(req, res, next){
    var artist = req.body;
    if(!artist.name){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } 
    else {
        db.artists.save(artist, function(error, artist){
            if (error){
                res.send(error);
            }   
            res.json(artist);
        });
    }
});

//Delete Task
router.delete('/task/:id', function(req, res, next){
    db.artists.remove({_id: ObjectId(req.params.id)}, function(error, artist){
        if(error){
            res.send(error);
        }
        res.json(artist);
    })
});

//Update Task
router.put('/task/:id', function(req, res, next){
    var artist = req.body;
    var updArtist = {};

    if (artist.name){
        updArtist.name = artist.name;
    }

    if (!updArtist){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.artists.update({_id: ObjectId(req.params.id)}, function(error, artist){
            if(error){
                res.send(error);
            }
            res.json(artist);
        });
    }
});

module.exports = router;