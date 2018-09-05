let fs =require('fs');

module.exports= function add(title ,body, path){
   
                if(!title && !body)
                 {
				console.log("Options:")
				console.log("--help Show help                      [boolean]")
				console.log("--title, -t Title of note             [required]")
				console.log("--body, -b Body of note               [required]")
				console.log()
				console.log("Missing required arguments: tilte,body")
			 

			}else if(!title ){

				console.log("Options:")
				console.log("--help Show help                      [boolean]")
				console.log("--title, -t Title of note             [required]")
				console.log()
				console.log("Missing required argument: tilte")
			

			}else if(!body ){
				console.log("Options:")
				console.log("--help Show help                      [boolean]")
			    console.log("--body, -b Body of note               [required]")
				console.log()
				console.log("Missing required argument: body")
			

			}else{ 

			   fs.readFile(path,"utf8",function(error,fileContent){
				if (error) 
					{console.log(error)}
				else 
				{data=JSON.parse(fileContent);
				data.push({title:title,body:body})
				let newdata=JSON.stringify(data)
				fs.writeFile(path,newdata,"utf8",function(error,fileContent){
				if (error) 
					{console.log(error)}
				else {
					console.log("Note created." )
					console.log("--")
					console.log(`Title: ${title}`)
					console.log(`Body: ${body}`)
					}

					}
					)}
				})
				}
			   }

