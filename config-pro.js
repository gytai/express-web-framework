/**
 *Author: TaiGuangYin
 *Date: 2018
 *Description: 正式环境配置文件
 */
const REDIS = {
    host: "127.0.0.1",
    port: "6379",
    ttl: 60 * 60 * 12
};

const MYSQLDB = {
    database:"webFramework",
    username:"root",
    password:"root",
    host:"localhost",
    //支持的数据库类型'mysql'|'sqlite'|'postgres'|'mssql'
    dialect:"mysql"
};

exports.REDIS = REDIS;
exports.MYSQLDB = MYSQLDB;
