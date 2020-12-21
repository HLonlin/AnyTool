// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let url = event.url;
  return await rq(url)
  .then(function(res){
    return res;
  })
  .catch(function(err){
    return '请求失败' + err;
  });
}