function countChar(str){
    console.log('The # of chars in the string ' + str +' is ' + str.length)
}

countChar("Hello World")

function largestNum(a,b){
    if (a>b)
        console.log("The largest number is " + a )
    else
     console.log("The largest number is " + b )
}

largestNum(100,200)

function betweenNum(a){

    if((a > 5000 & a < 9999))
         console.log("The number is between 5000 and 9999 true ")
    else
    console.log("The number is between 5000 and 9999 false ")
}
betweenNum(5500)
function cubeRoot(a) {
    console.log('The cuberoot of the '+a+ ' is '+a*a*a)

}

cubeRoot(5)
function inchesToFeet(z){
console.log('Inches to Feet '+ z  + '   ' + z/12)
}

inchesToFeet(12)

function degreesToFarenheit(d){
    console.log('DegreesToFarenheit' +d +" "+(d*9/5)+32)

}
degreesToFarenheit(32)

function kgToPounds(k){
    console.log('Kgs To Pounds' +k +"  "+k*2.205)

}
kgToPounds(74.5)

function compareString(a,b){
  let x=a.length
  let y=b.length
if (x>y)
console.log('The length of '+a+' bigger than ' +b)
else 
console.log('The length of ' +b+' bigger than ' +a)


}
compareString('pavithra','advik')

const state1 = {

    "State":"Pennsylvania",
    "Capitol":"Harrisburg",
    "Governer":"Tom wolf",
    "Place to visit":"lancaster,Hersey",
    "Largest city":"Philadelphia",
    "Population":"13,011844",
    "web":"www.pa.gov",
    "Income rank":"23"
        }

console.log(JSON.stringify(state1))

const state2 ={
    "State":"Newyork",
    "Capitol":"Albany",
    "Governer":"Kathy Hochul",
    "Place to visit":"Statue of liberty,Empire state",
    "Largest city":"Newyork",
    "Population":"8,804,190",
    "web":"www.nyc.com",
    "Income rank":"50"
}
console.log(JSON.stringify(state2))

const state3 ={
    "State":"Newjersy",
    "Capitol":"Trenton",
    "Governer":"Phil Murphy",
    "Place to visit":"Atlantic city,cape may",
    "Largest city":"Newark",
    "Population":"9,288,994",
    "web":"www.nj.gov",
    "Income rank":"3"
}
 console.log(JSON.stringify(state3))

 const state4={
    "State":"Texas",
    "Capitol":"Austin",
    "Governer":"Gerg Abbott",
    "Place to visit":"space center houston,big bend national park",
    "Largest city":"Houston",
    "Population":"29,145,505",
    "web":"www.texas.gov",
    "Income rank":"22"
 }

 console.log(JSON.stringify(state4))

 const state5={
    "State":"Virginia",
    "Capitol":"Richmond",
    "Governer":"Glen Youngkin",
    "Place to visit":"Shenandoah Ntional park,Richmond",
    "Largest city":"Virginia beach",
    "Population":"8,654,542",
    "web":"www.virginia.gov",
    "Income rank":"10"

 }

 console.log(JSON.stringify(state5))

 const state6 ={
    "State":"Ohio",
    "Capitol":"Coloumbus",
    "Governer":"Mike Dewine",
    "Place to visit":"Cleveland,cincinnati",
    "Largest city":"coloumbus",
    "Population":"11,780,017",
    "web":"www.ohio.gov",
    "Income rank":"34"
 }
 console.log(JSON.stringify(state6))

 const state7 ={
    "State":"Tennessee",
    "Capitol":"Nashville",
    "Governer":"Bill Lee",
    "Place to visit":"Memphis,Galtinburg",
    "Largest city":"Nashville",
    "Population":"6,916,897",
    "web":"www.tn.gov",
    "Income rank":"34"
 }

 console.log(JSON.stringify(state7))

 const state8 ={
    "State":"Maryland",
    "Capitol":"Annapolis",
    "Governer":"Lary Hogan",
    "Place to visit":"Baltimore",
    "Largest city":"Bltimore",
    "Population":"6,177,224",
    "web":"www.maryland.gov",
    "Income rank":"1"
 }
 console.log(JSON.stringify(state8))

 const state9 ={
    "State":"Maine",
    "Capitol":"Augusta",
    "Governer":"Janet mills",
    "Place to visit":"portland",
    "Largest city":"portland",
    "Population":"1,362,359",
    "web":"www.maine.gov",
    "Income rank":"35"
 }

 console.log(JSON.stringify(state9))

 const state10 ={
    "State":"Delaware",
    "Capitol":"Dover",
    "Governer":"John Carney",
    "Place to visit":"Mahalaxmi Temple",
    "Largest city":"Wilmington",
    "Population":"1,003,384",
    "web":"www.delaware.gov",
    "Income rank":"16"
 }

 console.log(JSON.stringify(state10))

 const cricket ={
    "TeamName":"India",
    "PlayersCount":"12",
    "Captain":"Kohli",
    "MatchesPlayedTillDate":"1000",
    "MatchesWon":"750",

 }
 console.log(JSON.stringify(cricket))