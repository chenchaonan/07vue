/**
 * Created by SONG on 2017/10/17.
 */
let fs = require('fs');
function read(callback) {
  fs.readFile('./warehouse/fruits.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function write(data,callback) {
  fs.writeFile('./warehouse/fruits.json',JSON.stringify(data),callback)
}
function readUsers(callback) {
  fs.readFile('./warehouse/users.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback ([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function writeUsers(callback) {
  fs.writeFile('./warehouse/users.json','utf-8',JSON.stringify('data'),callback)
}
function readCars(callback) {
  fs.readFile('./warehouse/cars.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function writeCars(callback) {
  fs.writeFile('./warehouse/cars.json','utf-8',JSON.stringify('data'),callback)
}
module.exports = {
  read,
  write,
  readUsers,
  writeUsers,
  readCars,
  writeCars
};
