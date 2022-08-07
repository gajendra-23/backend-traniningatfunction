function trimString(){
    let myName ="gajendra singh"
    console.log(myName.trim())  
    lowerString()  
}

function lowerString(){
    console.log("GAJENDRA SINGH".toLocaleLowerCase())
upperString()
} 

function upperString(){
    console.log("gajendra singh".toUpperCase())

}
    
    
module.exports.trimString=trimString 