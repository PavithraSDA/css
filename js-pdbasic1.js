function print(){
    console.log("I am here")
}

function addNumber(a,b){
    return (a+b)
}

function countCharInString(a){
    console.log("The String is:" + a + " and its length is: " + a.length)
}

countCharInString("I am pavithra") //Count String

function printPerson(){
    let person = {
        name: 'Pavi',
        age: '30',
        phone: '123'
    }
    console.log("The Person Name is:" + person.name)
    console.log("The Person Age is:" + person.age)
    console.log("The Person Phone# is:" + person.phone)

    console.log("The Person Phone# is:" + person.phone + " The Person Name is:" + person.name + " The Person Age is:" + person.age)
}

printPerson() //Print Person details


