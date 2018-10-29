/**
 *Author: TaiGuangYin
 *Date: 2018
 *Description:
 */
var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

if(env == 'production'){
    console.log('当前环境为生产环境');
    module.exports = require('./config-pro');
}else{
    console.log('当前环境为开发环境');
    module.exports = require('./config-dev');
}
