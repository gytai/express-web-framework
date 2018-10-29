/**
 *Author: TaiGuangYin
 *Date: 2018
 *Description: mail helper
 */
const nodemailer = require('nodemailer');
var AppConfig = require('../config');

let transporter = nodemailer.createTransport({
    host: AppConfig.EMAIL.host,
    //service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    //port: 465, // SMTP 端口
    //secureConnection: true, // 使用了 SSL
    auth: {
        user: AppConfig.EMAIL.email,
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: AppConfig.EMAIL.password,
    }
});

function sendMail(to,subject,text) {
    let mailOptions = {
        from: '"We are INcredible"<' + AppConfig.EMAIL.email + '>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        // 发送text或者html格式
         text: text, // plain text body
        //html: '<b>Hello world?</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
}

function sendMailByHtml(to,subject,html) {
    let mailOptions = {
        from: '"We are INcredible"<' + AppConfig.EMAIL.email + '>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        // 发送text或者html格式
        //text: text, // plain text body
        html: html
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
}

/**
 * @return {string}
 */
function SignEndContent(){
    return 'Dear colleague,<br>' +
        '<br>' +
        'We note that you have logged in to www.ivp.com.sg for the first time.<br>' +
        '<br>' +
        'If you did not do so, please inform us by submitting a query via <a href="mailto:enquiry@IVP.com.sg">enquiry@IVP.com.sg</a><br>' +
        '<br>' +
        'Thank you.<br>' +
        '<br>' +
        'The INcredible Team<br>' +
        '*This is an automated email. Please do not reply.';
}

/**
 * @return {string}
 */
function CommitEndContent(code,name,dept,cate){
    return 'Dear colleague,<br>' +
        '<br>' +
        'We have received your nomination. Thank you. We now know that this colleague of ours has been INcredible at exemplifying the IVP!<br>' +
        '<br>' +
        'Staff ID: '+code+'<br>' +
        'Name: '+name+'<br>' +
        'Department: '+dept+'<br>' +
        'Nomination Category: '+cate+'<br>' +
        '<br>' +
        'Click here to view your submission or to nominate another INcredible colleague.<br>' +
        '<br>' +
        'If you did not make this nomination, please inform us by submitting a query via  <a href="mailto:enquiry@IVP.com.sg">enquiry@IVP.com.sg</a>.<br>' +
        '<br>' +
        'Thank you.<br>' +
        '<br>' +
        'The INcredible Team<br>' +
        '*This is an automated email. Please do not reply.';
}

/**
 * @return {string}
 */
function NominatedContent(msg){
    return 'Dear colleague,<br>' +
        '<br>' +
        'Congratulations! A colleague told us that you have been IN with [name of attribute].<br>' +
        '<br>' +
        'From: Name of staff<br>' +
        '<br>' +
        +msg+'<br>' +
        '<br>' +
        'Know colleagues who are INcredible? Nominate them now!';
}

/**
 * @return {string}
 */
function ForgotPasswordContent(link){
    return 'Dear colleague,<br>' +
        '<br>' +
        'You have just requested for a password reset.<br>' +
        '<br>' +
        'Please click [here] or copy and paste the link below in your browser to perform the reset.<br>' +
        '<br>' +
        '<a href="'+ link +'">'+link +'</a><br>' +
        '<br>' +
        'If you did not request to reset your password, please inform us by submitting a query via  <a href="mailto:enquiry@IVP.com.sg">enquiry@IVP.com.sg</a>.<br>' +
        '<br>' +
        'Thank you.<br>' +
        '<br>' +
        'The INcredible Team<br>' +
        '*This is an automated email. Please do not reply.';
}

/**
 * @return {string}
 */
function FinishQuizContent(){
    return 'Dear colleague,<br>' +
        '<br>' +
        'Congratulations! You have successfully completed the Income Value Proposition (IVP) Quiz.You have just won for yourself the following prize.<br>' +
        '<br>' +
        'DETAILS<br>' +
        '<br>' +
        'VISUAL<br>' +
        '<br>' +
        'TERMS<br>' +
        '<br>' +
        'Want to win more prizes? Nominate other colleagues whom you think have been INcredible in exemplifying the IVP and you stand to win $300 worth of CapitaVouchers.<br>' +
        '<br>' +
        'Know colleagues who are INcredible? Nominate them now!<br>' +
        '<br>' +
        'The INcredible Team<br>' +
        '*This is an automated email. Please do not reply.';
}

exports.sendMail = sendMail;
exports.sendMailByHtml = sendMailByHtml;
exports.SignEndContent = SignEndContent;
exports.CommitEndContent = CommitEndContent;
exports.NominatedContent = NominatedContent;
exports.ForgotPasswordContent = ForgotPasswordContent;
exports.FinishQuizContent = FinishQuizContent;
