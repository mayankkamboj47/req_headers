function getinfo(req){
var ip = req.connection.remoteAddress;
var lang = req.headers['accept-language'];
console.log('IP address is:',ip);
var os_reg = /\(([\w\W]+?)\)/;
console.log('User-Agent',req.headers['user-agent']);
var agent = os_reg.exec(req.headers['user-agent'])[1];
return {ip:ip,lang:lang,platform:agent};
}
module.exports = getinfo;
