var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(8001);

socket.on('error', function(err){
	console.log("error",err)
});
module.exports=socket;