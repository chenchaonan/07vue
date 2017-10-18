/**
 * Created by SONG on 2017/10/17.
 */
let express = require('express');
let router = express.Router();
let {read} = require('../util');

router.get('/hot',function (req,res) {
  let keyword = req.query.keyword;
  let query = {};
  if(keyword){
    query['$or'] = [{
        title:new RegExp(keyword)
    }];
  read(function (fruits) {
    let fruit = fruits.forEach((item,index)=>{
        if(item.title.test(query)){
          res.json(fruit)
        }
    })
  })
  }else {
    read(function (fruits) {
      let NewFruits = fruits.reverse().slice(0,8);
      res.json(NewFruits)
    });
  }


});
module.exports = router;
