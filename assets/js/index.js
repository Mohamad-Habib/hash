// const accounts01 = [['admin01','123'],['admin02','234'],['admin03','345']]
const accounts02 = {admin01:"123", admin02:"234", admin03:"345"}
let p1 = {name:"ahmad", age:30, state:"beirut"}
let admin = prompt("enter your username")
let users = {
    user01:{name:"ahmad",
            age:"33",
            state:"beirut"
           },
    user02:{name:"ali",
           age:"67",
           state:"beirut"
          },
    user03:{name:"mohamed",
          age:"89",
          state:"beirut"
         },
    user04:{name:"mouad",
         age:"12",
         state:"beirut"
        }                 
}
function main(){
    if(admin in accounts02){
        console.log(`welcome ${admin} your pass is: ${accounts02[admin]}`)
    }else{
        console.log("you are not registred")
    }
}
main()
getAge()
function getAge(){
    let name = prompt("enter your name")
    if (users.name == name){
        console.log(`${users.name} is ${users.age} years old`)
    }else {
        console.log("wrong name")
    }
}
// console.log(Object.keys(users))