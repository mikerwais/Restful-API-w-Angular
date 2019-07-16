const mongoose = require("mongoose");
const task = mongoose.model("task");

module.exports = {
    
    index: function(req, res){
        task.find({}, function(err, tsk){
            if(err){
                res.json(err);
            }
            else{
                res.json(tsk);
            }
        })
    },
    retrieve: function(req, res){
        task.findOne({_id:req.params.id},function(err, tsk){
            if(err)
                res.json(err);
            else
                res.json(tsk);
        })
    },
    create: function(req, res){
        task.create(req.body, function(err, tsk){
            if(err){
                res.json(err);
            }
            else{
                res.json(tsk);
            }
        })
    },
    update: function(req, res){
        task.findOneAndUpdate({_id:req.params.id}, req.body, function(err, tsk){
            if(err)
                res.json(err);
            else
                res.json(tsk);
        })
    },
    remove: function(req, res){
        task.remove({_id:req.params.id},function(err, tsk){
            if(err)
                res.json(err);
            else
                res.json(tsk);
        })
    },


};