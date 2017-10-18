/**
 * Created by SONG on 2017/10/17.
 */
let express = require('express');
let router = express.Router();
let {checkLogin} = require('../util/auth');
let {readCars,writeCars} = require('../util')
router.get('/add',checkLogin,function (req,res) {
  let car = req.body;
  readCars(function (cars) {
    let oldCar = cars.find(item=>item.bookName==car.bookName);
    if(oldCar){
      car.id = req.session.user.id;
     car.count = parseInt(car.count)+1;
     cars.push(car);
     writeCars(cars)

    }else {
      car.id = cars.length>0?cars[car.length-1]['id']+1:1;
      car._id = req.session.user.id;
      car.count = 1;
      cars.push(car);
      writeCars(cars,function () {
        res.json({})
      })
    }


  })

});
router.get('/delete:id',function (req,res) {
  let id = req.params.id;
  readCars(function (cars) {
     cars = cars.filter(car=>car.id!=id);
     writeCars(cars,function () {
       res.json({})
     })
  })
});

module.exports = router;
