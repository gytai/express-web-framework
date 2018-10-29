/**
 *Author: TaiGuangYin
 *Date: 2018
 *Description: 日志帮助类
 *
 *********使用例子***********
 logger.log('hello');
 logger.trace('hello', 'world');
 logger.debug('hello %s',  'world', 123);
 logger.info('hello %s %d',  'world', 123, {foo:'bar'});
 logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});
 logger.error('hello %s %d %j', 'world', 123, {foo:'bar'}, [1, 2, 3, 4], Object);
 *********使用例子***********
 *
 */
var console = require('tracer').colorConsole();
var file = require('tracer').dailyfile({root:'.', maxLogFiles: 10, allLogsFileName: 'foodEva'});

exports.console = console;
exports.file = file;
