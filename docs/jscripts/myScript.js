window.onload = function () {
    $("calculate").onclick = function () { calculateNutrition(); }
    $('reset').onclick = function () { ResetTextfields(); }
    femaleCheckbox();
   
}

var $ = function (id) {
    return document.getElementById(id);
}
var ResetTextfields = function () {
    $("age").value = " ";
    $("weight").value = " ";
    $("height").value = " ";
    $("displayInfo").style.display = "none";
}
/*Hamburger Menu*/
function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"; 

    } else {
        x.className = x.className.replace(" w3-show", "");        
    }
}
var femaleCheckbox = function(){
    if($("gender").selectedIndex == 0){
        $("pregnant").disabled = true;
    }
    else{
        $("pregnant").disabled = false;
    }
}

//pregnant values
var calculatePregnant = function(){
    $("vitC").innerHTML = "105 mg";
    $("vitA").innerHTML = "700 &#181g";
    $("folate").innerHTML = "600 &#181g";

}

//Common Male Values
var calculateMaleCommon = function () {
    $("water").innerHTML = "2.5L";
    $("fibre").innerHTML = "38g";
    $("vitD").innerHTML = "15 &#181g";
    $("vitC").innerHTML = "110 mg";
    $("vitA").innerHTML = "750 &#181g";
    $("folate").innerHTML = "330 &#181g";
    $("iron").innerHTML = "11 mg";
    $("magnesium").innerHTML = "350 mg";
    $("calcium").innerHTML = "860 mg";
    $("zinc").innerHTML = "14 mg";

}
//Common Female Values
var calculateFemaleCommon = function () {
    $("water").innerHTML = "2L";
    $("fibre").innerHTML = "25g";
    $("vitD").innerHTML = "15 &#181g";
    $("magnesium").innerHTML = "300 mg";
    $("calcium").innerHTML = "860 mg";
    $("zinc").innerHTML = "11 mg";
    $("folate").innerHTML = "330 &#181g";
    $("vitA").innerHTML = "650 &#181g";
    $("vitC").innerHTML = "95 mg";
}

var calculateNutrition = function () {
    //if weight is in pounds convert to kg
    if($("weightType").selectedIndex == 1){
        var weight = $("weight").value/2.2046;
    }
    //if weight is in cm
    else if($("weightType").selectedIndex == 0){
        var weight = $("weight").value;
    }
    //if height is in inches convert to cm
    if($("heightType").selectedIndex == 1){
        var height = $("height").value / 0.393701;
    }
    //if height is in cm
    else if($("heightType").selectedIndex == 0){
        var height = $("height").value;
    }
    var age = $("age").value; 
    age = parseInt(age);
    weight = parseFloat(weight);
    height = parseFloat(height);

    //hide or show nutrition
    var x = $("displayInfo");

    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }

    //common variables
    //check bmi with brackets
    var bmi = weight / (height / 100 * (height / 100));
    var protein = weight * 0.83;

    //different variables
    var bmrM = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
    var bmrF = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);

    // tdee = bmrM * ActivityLevel
    var sedentary_Activity = 1.2;
    var lightly_Active = 1.375;
    var moderately_Active = 1.55;
    var heavily_Active = 1.725;
    var athlete_Activity = 1.9;

    var calcInfo = function(){
        if ($('gender').value == "male") {
            $('bmrInfo').innerHTML = "Your Basal Metabolic Rate is <b>"+bmrM.toFixed(0)+"</b>. This is the minimum amount of calories required for your body to function correctly.";
            $('vitPara').innerHTML = "As a man, your calories, water and protein intake are generally higher than women. It is especially important to get enough calcium, vitamin D and zinc. For more information on recommended dietary intakes, please visit the European Food Safety Authority's <a href='https://multimedia.efsa.europa.eu/drvs/index.htm'>website.</a>";
        }
        if ($('gender').value == "female"){
            $('bmrInfo').innerHTML = "Your Basal Metabolic Rate is <b>"+bmrF.toFixed(0)+"</b>. This is the minimum amount of calories required for your body to function correctly.";
            $('vitPara').innerHTML = "As a women, your calories, water and protein intake are generally lower than men. It is important to get enough calcium, vitamin D and iron, especially if menstruating. For more information on recommended dietary intakes, please visit the European Food Safety Authority's <a href='https://multimedia.efsa.europa.eu/drvs/index.htm'>website.</a>"
        }
        if ($("pregnant").checked == true){
            $('vitPara').innerHTML = "As a women, your calories, water and protein intake are generally lower than men. During pregnancy, it is important to get enough folic acid, vitamin D and calcium, follow the <a href='https://www.nhs.uk/pregnancy/keeping-well/vitamins-supplements-and-nutrition/'>link</a> for more information. There also are a number of foods you should <a href='https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/'>avoid</a>. You should also ignore any BMI calculations as they won't be accurate. For more information on general dietary recomendations, please visit the European Food Safety Authority's <a href='https://multimedia.efsa.europa.eu/drvs/index.htm'>website.</a>"
        }
        if ($('gender').value == "female" && $('age').value > 59) {
            $('bmrInfo').innerHTML = "Your Basal Metabolic Rate is <b>"+bmrF.toFixed(0)+"</b>. This is the minimum amount of calories required for your body to function correctly.";
            $('vitPara').innerHTML = "As a women, your calories, water and protein intake are generally lower than men. It is important to get enough calcium, magnesium and vitamin D.  If you are menopausal, you do not need as much iron as during menstration. For more information on recommended dietary intakes, please visit the European Food Safety Authority's <a href='https://multimedia.efsa.europa.eu/drvs/index.htm'>website.</a>"
        }
    }

    var calcBmi = function(){
        
        if(bmi < 18.5)
        {
            $("bmiInfo").innerHTML ="You are in the <span style='color: DarkBlue;'><b>underweight</b></span> category as your BMI is <b>"+bmi.toFixed(1)+"</b>. This could mean you are not consuming enough calories.";
            $("bmi").style.borderColor = "darkTurquoise";
            $("bmi").innerHTML = "<span style='color: darkTurquoise;'>" + bmi.toFixed(1) + "</span>";
            $("arrow").style.marginLeft  = ((2.5 / 18.5) * bmi) + "%";
           
        }
        if(bmi >= 18.5 && bmi <= 24.9)
        {
            $("bmiInfo").innerHTML = "You are in the the <span style='color: green;'><b>healthy</b></span> category as your BMI is <b>"+bmi.toFixed(1)+"</b>. You should try to mantain your weight within this range.";
            $("bmi").style.borderColor = "lawngreen";
            $("bmi").innerHTML = "<span style='color: lawngreen;'>" + bmi.toFixed(1) + "</span>";
            if (bmi >= 18.5 && bmi < 20){
                $("arrow").style.marginLeft  = 3 + "%";
            }
            else if (bmi >= 20 && bmi <= 22){
                $("arrow").style.marginLeft  = 20 + "%";
            }
            else if (bmi > 23 && bmi <= 24.9){
                $("arrow").style.marginLeft  = 37 + "%";
            }
           
        }
        if(bmi > 25 && bmi <= 29.9)
        {
            $("bmiInfo").innerHTML = "You are in the <span style='color: #FF9800;'><b>overweight</b></span> category as your BMI is <b>"+bmi.toFixed(1)+"</b>. This could mean you are over consuming calories.";
            $("bmi").style.borderColor = "#FF9800";
            $("bmi").innerHTML = "<span style='color: #FF9800;'>" + bmi.toFixed(1) + "</span>";
            if (bmi >= 25 && bmi < 26){
                $("arrow").style.marginLeft  = 40 + "%";
            }
            else if (bmi >= 27 && bmi <= 28){
                $("arrow").style.marginLeft  = 58 + "%";
            }
            else if (bmi > 28 && bmi <= 29.9){
                $("arrow").style.marginLeft  = 75 + "%";
            }
        }
        if(bmi > 30 && bmi <= 39.9)
        {
            $("bmiInfo").innerHTML = "You are in the <span style='color: red;'><b>obese</b></span> category as your BMI is <b>"+bmi.toFixed(1)+"</b>. This could mean you are over consuming calories.";
            $("bmi").style.borderColor = "red";
            $("bmi").innerHTML = "<span style='color: red;'>" + bmi.toFixed(1) + "</span>";
            if (bmi >= 30 && bmi < 33){
                $("arrow").style.marginLeft  = 77 + "%";
            }
            else if (bmi >= 33 && bmi <= 36){
                $("arrow").style.marginLeft  = 87 + "%";
            }
            else if (bmi > 36 && bmi <= 39.9){
                $("arrow").style.marginLeft  = 97 + "%";
            }
        }
        if(bmi >= 40)
        {
            $("bmiInfo").innerHTML = "You are in the <span style='color: darkred;'><b>morbidly obese</b></span> category as your BMI is <b>"+bmi.toFixed(1)+"</b>. This could mean you are over consuming calories.";
            $("bmi").style.borderColor = "red";
            $("bmi").innerHTML = "<span style='color: red;'>" + bmi.toFixed(1) + "</span>";
            $("arrow").style.marginLeft  = 99 + "%";
        }
    }
    //checks if inputs are numbers and outputs alert if they aren't
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age < 18)
    {
        alert("1) You must enter valid numerical values in all fields.\n2) You must be over the age of 18 to use this app");
        x.style.display = "none";
    }
  
    //male and sedentary
    if ($('gender').value == "male" && $("activity").selectedIndex == 0) {
        var tdee = bmrM * sedentary_Activity;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateMaleCommon();
        calcBmi();
        calcInfo();

    }
    //male and Lightly active
    if ($('gender').value == "male" && $("activity").selectedIndex == 1) {
        var tdee = bmrM * lightly_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateMaleCommon();
        calcBmi();
        calcInfo();

    }
    //male and Moderately active
    if ($('gender').value == "male" && $("activity").selectedIndex == 2) {
        var tdee = bmrM * moderately_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateMaleCommon();
        calcBmi();
        calcInfo();

    }
    //male and Heavily active
    if ($('gender').value == "male" && $("activity").selectedIndex == 3) {
        var tdee = bmrM * heavily_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateMaleCommon();
        calcBmi();
        calcInfo();

    }
    //male and athlete
    if ($('gender').value == "male" && $("activity").selectedIndex == 4) {
        var tdee = bmrM * athlete_Activity;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateMaleCommon();
        calcBmi();
        calcInfo();

    }
    //female
    //female and sedentary
    if ($('gender').value == "female" && $("activity").selectedIndex == 0) {
        var tdee = bmrF * sedentary_Activity;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateFemaleCommon();
        calcBmi();
        calcInfo();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
        if($("pregnant").checked == true){
            calculatePregnant();
            calcBmi();
            $("bmr").innerHTML = bmrF.toFixed(0);
            var tdee = (bmrF * sedentary_Activity) + 300;
            $("tdee").innerHTML = tdee.toFixed(0);
            $('calories').innerHTML = tdee.toFixed(0)

        }
    }
    //female and Lightly active
    if ($('gender').value == "female" && $("activity").selectedIndex == 1) {
        var tdee = bmrF * lightly_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateFemaleCommon();
        calcBmi();
        calcInfo();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
        if($("pregnant").checked == true){
            calculatePregnant();
            calcBmi();
            
            $("bmr").innerHTML = bmrF.toFixed(0);
            var tdee = (bmrF * lightly_Active) + 300;
            $("tdee").innerHTML = tdee.toFixed(0);
            $('calories').innerHTML = tdee.toFixed(0)
        }

    }
    //female and Moderately active
    if ($('gender').value == "female" && $("activity").selectedIndex == 2) {
        var tdee = bmrF * moderately_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateFemaleCommon();
        calcBmi();
        calcInfo();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
        if($("pregnant").checked == true){
            calculatePregnant();
            calcBmi();
            calcInfo();
            $("bmr").innerHTML = bmrF.toFixed(0);
            var tdee = (bmrF * moderately_Active) + 300;
            $("tdee").innerHTML = tdee.toFixed(0);
            $('calories').innerHTML = tdee.toFixed(0)
        }
    }
    //female and Heavily active
    if ($('gender').value == "female" && $("activity").selectedIndex == 3) {
        var tdee = bmrF * heavily_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateFemaleCommon();
        calcBmi();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
        if($("pregnant").checked == true){
            calculatePregnant();
            calcInfo();
            $("bmr").innerHTML = bmrF.toFixed(0);
            var tdee = (bmrF * heavily_Active) + 300;
            $("tdee").innerHTML = tdee.toFixed(0);
            $('calories').innerHTML = tdee.toFixed(0)
        }
    }
    //female and athlete
    if ($('gender').value == "female" && $("activity").selectedIndex == 4) {
        var tdee = bmrF * athlete_Activity;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        $('tdeeInfo').innerHTML = "Your Total Daily Expenditure is <b>"+tdee.toFixed(0)+"</b>. This is the amount of calories you need to consume to maintain your current weight.";
        calculateFemaleCommon();
        calcBmi();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
        if($("pregnant").checked == true){
            calculatePregnant();
            calcInfo();
            $("bmr").innerHTML = bmrF.toFixed(0);
            var tdee = (bmrF * athlete_Activity) + 300;
            $("tdee").innerHTML = tdee.toFixed(0);
            $('calories').innerHTML = tdee.toFixed(0)
        }
    }
}

