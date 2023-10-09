const logDiv = document.getElementById('logs');
const calcDiv = document.getElementById('calculator');
const entryDiv = document.getElementById('entry');

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

function setMacros(weight, height, age, activity, goal){
    let weightKg = weight/2.20462;
    let heightCm = height*2.54;
    let BMR = (10*weightKg) + (6.25*heightCm) - (5*age) + 5;
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
    document.getElementById('carbgoal').innerHTML = Math.floor(carb);
    document.getElementById('proteingoal').innerHTML = Math.floor(protein);
    document.getElementById('fatgoal').innerHTML = Math.floor(fat);
}

function log(foodName, foodCarb, foodProtein, foodFat){
    document.getElementById('carb').innerHTML += foodCarb;
    document.getElementById('protein').innerHTML += foodProtein;
    document.getElementById('fat').innerHTML += foodFat;
}
document.getElementById('calcdata').addEventListener('submit', function(e){
    e.preventDefault();
    let weight = e.target.elements.weight.value;
    let height = e.target.elements.height.value;
    let age = e.target.elements.age.value;
    let activity = e.target.elements.activity.value;
    let goal = e.target.elements.goal.value;
    setMacros(weight, height, age, activity, goal);
});

document.getElementById('logdata').addEventListener('submit', function(e){
    e.preventDefault();
    let foodName = e.target.elements.foodName.value;
    let foodCarb = e.target.elements.foodCarb.value;
    let foodProtein = e.target.elements.foodProtein.Value;
    let foodFat = e.target.elements.foodFat.value;

});