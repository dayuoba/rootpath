var path=process.argv[1];
var modulepath=path.split('/');
var pathes=[];
for (var i = 0; i <modulepath.length-1; i++) {
	pathes.push(modulepath[i]);
};
rootdir=pathes.join('/')+'/';
module.exports=rootdir;