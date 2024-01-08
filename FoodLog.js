const logDiv = document.getElementById('logs');
const calcDiv = document.getElementById('calculator');
const entryDiv = document.getElementById('entry');
const carbNum = document.getElementById('carb');
const carbGoalNum = document.getElementById('carbgoal');
const proteinNum = document.getElementById('protein');
const proteinGoalNum = document.getElementById('proteingoal');
const fatNum = document.getElementById('fat');
const fatGoalNum = document.getElementById('fatgoal');
let userName = "Oscar";

var userInfo ={
    Oscar:{
        carb: 0,
        protein: 0,
        fat: 0,
        goalCarb: 0,
        goalProtein: 0,
        goalFat: 0
    }
};

function updateNum(){
    carbNum.innerHTML = userInfo[userName].carb;
    carbGoalNum.innerHTML = userInfo[userName].goalCarb;
    proteinNum.innerHTML = userInfo[userName].protein;
    proteinGoalNum.innerHTML = userInfo[userName].goalProtein;
    fatNum.innerHTML = userInfo[userName].fat;
    fatGoalNum.innerHTML = userInfo[userName].goalFat;
}
function calculatorClick (){
    if(calcDiv.className != 'hidden') {
        calcDiv.className = 'hidden';
        logDiv.className = 'log-container'
        return;
    }
    logDiv.className = 'hidden';
    entryDiv.className = 'hidden';
    calcDiv.className = 'calc-container';
}

function entryClick (){
    if(entryDiv.className != 'hidden'){
        entryDiv.className = 'hidden';
        logDiv.className = 'log-container';
        return;
    }
    logDiv.className = 'hidden';
    calcDiv.className = 'hidden';
    entryDiv.className = 'entry-container';
}

function setMacros(weight, height, age, activity, goal, gender){
    let weightKg = weight/2.20462;
    let heightCm = height*2.54;
    let BMR = gender === 'male'? 88.362+(13.397*weightKg)+(4.799*heightCm)-(5.677)*age:447.593+(9.247*weightKg)+(3.098*heightCm)-(4.330)*age;
    let TDEE = 0;
    switch(activity){
        case 'sedentary':
            TDEE=BMR*1.2;
            break;
        case 'light':
            TDEE=BMR*1.375;
            break;
        case 'moderate':
            TDEE=BMR*1.55;
            break;
        case 'very':
            TDEE=BMR*1.725;
            break;
        case 'extra':
            TDEE=BMR*1.9;
            break;
    }
    switch(goal){
        case 'maintain':
            TDEE = TDEE;
            break;
        case 'lose':
            TDEE = TDEE-500;
            break;
        case 'gain':
            TDEE = TDEE+500;
            break;
    }
    let carb = (TDEE*.40)/4;
    let protein = (TDEE*.30)/4;
    let fat = (TDEE*.30)/9;
    console.log(TDEE);
    userInfo[userName].goalCarb= Math.floor(carb);
    userInfo[userName].goalProtein = Math.floor(protein);
    userInfo[userName].goalFat = Math.floor(fat);
    updateNum();
}

function log(foodName, foodCarb, foodProtein, foodFat){
    userInfo[userName].carb += Number(foodCarb);
    userInfo[userName].protein += Number(foodProtein);
    userInfo[userName].fat += Number(foodFat);
    updateNum();
}

updateNum();
document.getElementById('calcdata').addEventListener('submit', function(e){
    e.preventDefault();
    let weight = e.target.elements.weight.value;
    let height = e.target.elements.height.value;
    let age = e.target.elements.age.value;
    let activity = e.target.elements.activity.value;
    let goal = e.target.elements.goal.value;
    let gender = e.target.elements.sex.value;
    setMacros(weight, height, age, activity, goal, gender);
});

document.getElementById('logdata').addEventListener('submit', function(e){
    e.preventDefault();
    let foodName = e.target.elements.foodName.value;
    let foodCarb = e.target.elements.foodCarb.value;
    let foodProtein = e.target.elements.foodProtein.value;
    let foodFat = e.target.elements.foodFat.value;
    log(foodName, foodCarb, foodProtein, foodFat);

});