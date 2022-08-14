const express = require('express');
const abc = require('../introduction/intro')
const logs = require('../logger/logger')
//const cal =require('../util/helper')
const format = require('../validator/formatter')
let loDash = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
  res.send('my code successfully Run!!!')
  console.log('My batch is plutionum')
  abc.printName()

  logs.welcome()

  cal.printDate()
  format.trimString()
  //cde.date
  let array = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'septmber', 'october', 'november', 'december',]
  let result1 = loDash.chunk(array, 3)
  console.log(result1)

  //next 
  let arr2 = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
  let result2 = loDash.tail(arr2, 9)
  console.log(result2)

  //next 
  let arr3 = [1, 1, 2, 2, 3]
  let result3 = loDash.union(arr3)
  console.log(result3)

  //next 
  let arr4 = [["horror", "TheShining"], ["drama", "Titanic"], ["fantasy", "PansLabyrinth"]];
  let result4 = {}
  result4 = loDash.fromPairs(arr4, 1)
  console.log(result4)


  //  cal.TodayDay()
  //////////////1///
}) //router.get('/movies)
router.get('/movies', function (req, res) {
  let movies1 = ["shole", "rang de basanti", "dil mange", "trinage"]
  res.send(movies1)
})
//////2 second wala problem
router.get('/movies/:indexNumber', function (req, res) {
  let movies1 = ['rang de basanti', 'The shining', 'Lord of the ring', 'superman begins']
  let index = req.params.indexNumber;
  console.log(movies1[index])

  res.send(movies1[index])



})
///3 third wala problem
router.get('/movies/:indexNumber', function (req, res) {

  let moviesName = ['rang de bananti', 'The shining', 'Lord of the rings', 'superman begins']
  let index = req.params.indexNumber;
  if (index > moviesName.length) {
    return res.send("movies length is greater than the movie")
  } else {
    res.send(moviesName[index])
  }
})
///forth wala 
router.get('/films', function (req, res) {//student detail api he
  let moviesName = [{ "id": 1, "name": "The shining" }, { "id": 2, "name": "incendies" },
  { "id": 3, "name": "Rang de Basanati" }, { "id": 4, "name": "Finding Nemo" }]
  res.send(moviesName)

})
///fifth wala 
router.get('/films/:indexNumber', function (req, res) {
  let filmName = [{
    "id": 1,
    "names": "The Shining"
  }, {
    "id": 2,
    "names": "Incendies"
  }, {
    "id": 3,
    "names": "Rang de Basanti"
  }, {
    "id": 4,
    "names": "Finding Nemo"
  }]

  if (indexs > filmName.length) {
    return res.send("no movie exist with this id")
  } else {
    console.log(req.params)
    console.log(indexs)
    res.send(movieName[indexs])

  }
})




// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr = [1, 2, 3, 5, 6, 7]

  let total = 0;
  for (var i in arr) {
    total += arr[i];
  }

  let lastDigit = arr.pop()
  let consecutiveSum = lastDigit * (lastDigit + 1) / 2
  let missingNumber = consecutiveSum - total

  res.send({ data: missingNumber });
});


// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr = [1, 2, 3, 5, 6, 7]

  let total = 0;
  for (var i in arr) {
    total += arr[i];
  }

  let lastDigit = arr.pop()
  let consecutiveSum = lastDigit * (lastDigit + 1) / 2
  let missingNumber = consecutiveSum - total

  res.send({ data: missingNumber });
});






// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr = [33, 34, 35, 37, 38]
  let len = arr.length

  let total = 0;
  for (var i in arr) {
    total += arr[i];
  }

  let firstDigit = arr[0]
  let lastDigit = arr.pop()
  let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
  let missingNumber = consecutiveSum - total

  res.send({ data: missingNumber });

});
//postWrite a POST /players api that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data
//REST apis
//POST request 
let players = [{
  "name": "manish",
  "dob": "1/1/1995",
  "gender": "male",
  "city": "jalandhar",
  "sports":
    [
      "swimming"
    ]
},
{
  "name": "gopal",
  "dob": "1/5/1996",
  "gender": "male",
  "city": "delhi",
  "sports":
    [
      "football"
    ]
},
{
  "name": "lockes",
  "dob": "5/7/1999",
  "gender": "male",
  "city": "UP",
  "sports":
    [
      "busketball"
    ]

}
]





router.post('/players', function(req, res){

    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeted = false //flag

    for(let i=0; i < players.length; i++){
        if(players[i].name == newPlayersName){
            isNameRepeted = true;
            break;
        }
    }
        if (isNameRepeted){
            res.send("Player is already exist")
        }
        else{
            players.push(newPlayer)
            res.send(players)
        }
    //res.send( { data : players , status : true} )
      
      })












module.exports = router;
//adding this comment for no reasoN
let persons = [
  {
    name : "PK",
    age : 10,
    votingstatus : false
  },
  {
      name : "Sk",
      age : 20,
      votingstatus : false
  },
  {
      name : "AA",
      age : 70,
      votingstatus : false
  },
  {
      name : "SC",
      age : 5,
      votingstatus : false
  },
  {
      name : "HQ",
      age : 40,
      votingstatus : false
  }
]
router.post("/persons", function(req,res){

let votingAge = req.query.votingAge

let result = []
let  flag = false
var id 
for(let i =0; i<persons.length;i++){
   id = persons[i]
   if(id.age>=18  && votingAge >=18){
      id.votingstatus=true
          result.push(id) 
  }
}
  return  res.send({ data : result , status : true})
})






