const Task = require('../models/Task');
const mongoose = require('mongoose');
module.exports = {
    index: (req, res) => {
        Task.find({}).then(articles => {
            res.render('task/index', {'tasks': articles});
		})
    },
	createGet: (req, res) => {
        res.render('task/create');
	},
	createPost: (req, res) => {
        let bodyArg = req.body;
		let taskCreate = {
			title:bodyArg.title,
			comments:bodyArg.comments
		};
		if(!taskCreate.comments|| !taskCreate.title){
            res.redirect('/');
            return;
		}
		else{
            Task.create(taskCreate);
            res.redirect('/')
		}

	},
	deleteGet: (req, res) => {
		Task.findById(req.params.id).then(task => {
			if(!task){
				res.redirect('/');
				return;
			}
            res.render('task/delete',task);
		})


	},
	deletePost: (req, res) => {
        Task.findByIdAndRemove(req.params.id).then(task => {
            if (!task) {
                res.redirect('/');
            }
        })
     res.redirect('/');

	}
};