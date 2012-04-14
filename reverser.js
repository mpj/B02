module.exports = function(str) {
	var out = ""
	for (var i=0;i<str.length;i++) 
		out += str.substring(str.length-i-1,str.length-i)
	return out;
}
