

function  printDate(){
let dob = new Date()
console.log(dob.getDate()) 
printmonth()
}

function  printmonth(){
  let  dob =  new Date()
  console.log(dob.getMonth()) 
  printBatchinfo()
}

  function  printBatchinfo(){
    let dob = new Date()
    console.log(" i am gajendra singh and ") 
    }
    module.exports.printDate = printDate
