#https://coffeescript-cookbook.github.io/chapters/arrays/filtering-arrays


name = "Scott"
person = true
age = 33
###
funciton always returns last line
###
yell = (a) ->
    alert name
    alert a

yell(25)

# is            ===
# isnt          !==
# not           !
#and            &&
#or             ||
#true,yes,on    true
#false,no,off   false
#@              this
#of             in
#in             in

###
conditional operator
###

yell(age) if person
yell(age) unless person
if person then yell(age)
yell("age is greated than 33") if age > 33


###
existentsial operator
###
if gender?
    gender = "MALE"

degree = ""

if degree?
    degree = "B.TECH"


###
arrays and objects
###

foodArray = ["rice", "veggie", "chicken"]

employee = {
    name: name
    age: age
    welcomeMsg: ->
        "Hi #{age}"
    perviousOrg: perviousOrg
    currentOrg: currentOrg
    techStack: {
        frontEnd: ["JavaScript", "CoffeeScrtp"]
        backEnd: ["C#", "Asp.Net Core"]
    }
}


###
loop
###
for food in foodArray
    if food isnt "rice" then console.log(food)


for emp in employee
    console.log(emp.name)

###
splats
###


###
array slicing
###

firstThreeFood = foodArray[0..2]
rest = foodArray[3..]
foodCpy = foodArray[..]


