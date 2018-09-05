let fs =require('fs');

module.exports= function remove(title , path){
   
            if(!title ){

				console.log("Options:")
				console.log("--help Show help                      [boolean]")
				console.log("--title, -t Title of note             [required]")
				console.log()
				console.log("Missing required argument: tilte")
			
			}else{ 

			   fs.readFile(path,"utf8",function(error,fileContent){
				if (error) 
					{console.log(error)}
				else 
				{data=JSON.parse(fileContent);
				let newdata=JSON.stringify(data.filter(el=>{ if(el.title!=title) return el}))
				fs.writeFile(path,newdata,"utf8",function(error,fileContent){
				if (error) 
					{console.log(error)}
				else {
					console.log("Note was removed." )
					
					}

					}
					)}
				})
				}
			   }

