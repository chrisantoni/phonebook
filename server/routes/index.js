const express = require('express');
const router = express.Router();
const models = require('../models')

router.get('/', function(req, res, next) {
  res.json({welcome: "phonebook react RESTful API"})
});

router.get('/api/phonebooks',function(req,res,next){
  models.Phonebook.findAll({}).then((phonebooks)=>{
    res.json(phonebooks)
  })
})

router.get('/api/phonebooks/:id',function(req,res){
  models.Phonebook.find({where:{id:req.params.id}}).then((phonebook)=>{
      res.json(phonebook)
  })
})

router.post('/api/phonebooks',function(req,res){
  models.Phonebook.create({
    id:Date.now(),
    name:req.body.name,
    phone:req.body.phone
  }).then((phonebook)=>{
    res.json(phonebook)
  })
})

router.put('/api/phonebooks/:id',function(req,res){
  models.Phonebook.find({
    where:{
      id:req.params.id
    }
  }).then((phonebook)=>{
    if(phonebook){
      phonebook.updateAttributes({
        name:req.body.name,
        phone:req.body.phone
      }).then((phonebookUpdated)=>{
        res.json(phonebookUpdated)
      })
    }else{
      res.json({message : `data not found with id ${req.params.id}`})
    }
  })
})

router.delete('/api/phonebooks/:id',function(req,res){
  models.Phonebook.destroy({
    where:{
      id:req.params.id
    }
  }).then((phonebook)=>{
    res.json(phonebook)
  })
})


module.exports = router;
