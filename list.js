let fs =require('fs');

	module.exports= function list(path){
   fs.readFile(path,"utf8",function(error,fileContent){
	if (error) 
		{console.log(error)}
	else 
	{data=JSON.parse(fileContent);
	console.log(`Printing: ${data.length} note(s) .` );
	data.map(el=>{console.log()
		console.log(`Title: ${el.title}`)
		console.log(`Body: ${el.body}`)	}
		)}
	})
	}

