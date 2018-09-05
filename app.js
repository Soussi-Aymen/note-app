let fs =require('fs');
const path="./data.json";

function grab(flag){
	var index= process.argv.indexOf(flag)
 	return  (index ===-1) ? null : process.argv[index+1];
}

function grabtitle(){
	return (grab("-t")) ? grab("-t") : grab("--title")
}

function grabbody(){
	return (grab("-b")) ? grab("-b") : grab("--body")
}

let command=process.argv[2]
let title=grabtitle();
let body= grabbody();

switch(command){

	case "list":
				let list= require("./list")
 				list(path)
 				break;
				
    case "add":
				
				let add=require("./add")
				add(title,body,path)
				break;

	case "remove":
				let remove=require("./remove")
				remove(title,path)
				break;

	case "read":
				let read=require("./read")
				read(title,path)
				break;
				}
