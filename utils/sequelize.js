/**
 *Author: TaiGuangYin
 *Date: 2017
 *Description:数据库操作基础类
 */
const Sequelize = require('sequelize');
const DB = require('../config').MYSQLDB;
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
}

const sequelizeInstance = new Sequelize(DB.database, DB.username, DB.password, {
    host: DB.host,
    dialect: DB.dialect,
    //连接池设置
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define:{
        paranoid: true,
        underscored: true
    },
    operatorsAliases,
    //logging: false,
    timezone: '+08:00' //东八时区
});

sequelizeInstance
    .authenticate()
    .then(() => {
        console.log('数据库连接成功.');
    })
    .catch(err => {
        console.error('数据库连接失败:', err);
    });



exports.sequelizeInstance = sequelizeInstance;
