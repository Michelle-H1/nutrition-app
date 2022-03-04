window.onload = function(){
    $("calculate").onclick = function(){calculateNutrition();}
   // $("calculate").onclick = function(){showInfo();}
   $('reset').onclick = function(){ResetTextfields();}
}


var $ = function(id){
    return document.getElementById(id);
}
var ResetTextfields = function() {
    $("age").value = " ";
    $("weight").value = " ";
    $("height").value = " ";
    $("displayInfo").style.display = "none";
}
//need to make function to check if dropdown is female than pregnant option is avaiable
/*
check if dropdown if female
var femaleCheckbox = function() {
    var isFemale = $("female").checked;
    $("pregnant").disable = !isFemale;
}
*/
//global variables



var calculateMaleCommon = function(){
    $("water").innerHTML = "2.5L";
    $("fibre").innerHTML = "38g";
}
var calculateWomenCommon = function(){
    $("water").innerHTML = "2L";
    $("fibre").innerHTML = "25g";
}

var calculateNutrition = function(){
    //values
    var age = $("age").value;
    var weight = $("weight").value;
    var height = $("height").value;
    age = parseFloat(age);
    weight = parseFloat(weight);
    height = parseFloat(height);
    //hide or show nutrition
    var x = $("displayInfo");
    //common variables
    var bmi  = weight/(height/100 * (height/100));
    var protein = weight * 0.83;
    //different variables
    var bmrM = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    var bmrF = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
   
    // tdee = bmrM * ActivityLevel
    var sedentary_Activity = 1.2;
    var lightly_Active = 1.375;
    var moderately_Active = 1.55;
    var heavily_Active = 1.725;
    var athlete_Activity = 1.9;
    
    //hides nutrition until calculate button clicked
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    //checks if inputs are numbers and outputs alert if they aren't
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age < 18)
        alert("You must enter a numerical value and be over the age of 18 to use this app");
        //need to get if no value or over 18
    //male and sedentary
    else if($('gender').value == "male" && $("activity").selectedIndex == 0){
        calculateMaleCommon();
        var tdee = bmrM * sedentary_Activity;  
        $("bmr").innerHTML = bmrM;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
        $('protein').innerHTML = Math.floor(protein.toFixed(0))+"g";


    }
    //male and Lightly active
    else if($('gender').value == "male" && $("activity").selectedIndex == 1){
        var tdee = bmrM * lightly_Active;
        $("bmr").innerHTML = bmrM;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
    }
    //male and Moderately active
    else if($('gender').value == "male" && $("activity").selectedIndex == 2){   
        var tdee = bmrM * moderately_Active;
        $("bmr").innerHTML = bmrM;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
    }
    //male and Heavily active
    else if($('gender').value == "male" && $("activity").selectedIndex == 3){
        var tdee = bmrM * heavily_Active;
        $("bmr").innerHTML = bmrM;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
    }
    //male and athlete
    else if($('gender').value == "male" && $("activity").selectedIndex == 4){
        var tdee = bmrM * athlete_Activity;
        $("bmr").innerHTML = bmrM;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
    }
    //BMI colour change
    //underweight
    if(bmi < 18){
        $("bmi").innerHTML = "<span style='color: blue;'>"+bmi.toFixed(1)+"</span>";
    }
    //healthy weight
    if(bmi > 18 && bmi < 25){
        $("bmi").innerHTML = "<span class = 'bg-green-600 border-red-500' style='color: lawngreen; border: green'>"+bmi.toFixed(1)+"</span>";
    }
    //overweight
    if(bmi > 25 & bmi < 30){
        $("bmi").innerHTML = "<span style='color: gold;'>"+bmi.toFixed(1)+"</span>";
    }
    //obese
    if(bmi > 30 & bmi < 35){
        $("bmi").innerHTML = "<span style='color: orange;'>"+bmi.toFixed(1)+"</span>";
    }
    //morbidly obese
    if(bmi > 35){
        $("bmi").innerHTML = "<span style='color: red;'>"+bmi.toFixed(1)+"</span>";
    }
    
    //female 
    //if female and under 58 and sedentary
    //if female and under 58 and Lightly active
    //if female and under 58 and Moderately active
    //if female and under 58 and Heavily active
    //if female and under 58 and Athlete

    //if female and over 58 and sedentary
    //if female and over 58 and Lightly active
    //if female and over 58 and Moderately active
    //if female and over 58 and Heavily active
    //if female and over 58 and Athlete

     //if female and pregnant and sedentary
     //if female and pregnant and lightly active
     //if female and pregnant and moderately active
     //if female and pregnant and heavily active
     //if female and pregnant and athlete

     //five different outcomes for male and 15 for women 

    else if($('gender').value == "female"){
        // need to make pregnant checkbox enabled for women under 58;
        $("pregnant").disabled = false;
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
        $("bmr").innerHTML = bmrF;
    }
    else{
        $("resultText").innerHTML = ("error");
    }

}

