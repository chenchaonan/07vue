/**
 * Created by SONG on 2017/10/17.
 */
exports.checkNotLogin = function (req,res) {
  if(req.session.user){
    res.redirect('/')
  }else {
    next()
  }
};
exports.checkLogin = function (req,res) {
  if(req.session.user){
    next()
  }else {
    res.redirect('/api/user/signin')
  }
}
