let fs =require('fs');

module.exports= function read(title , path){
   
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
				 note=data.filter(el=> {if(el.title==title) return el })
				 if(note.length!=0){
				 console.log("Note found.")
				 console.log("--")
				 console.log(`Title: ${note[0].title}`)
				 console.log(`Body: ${note[0].body}`)
				}else{
				 	 console.log("Note not found.")
				 }
				}
				})
				}
			   }

