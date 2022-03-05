window.onload = function () {
    $("calculate").onclick = function () { calculateNutrition(); }
    // $("calculate").onclick = function(){showInfo();}
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
//need to make function to check if dropdown is female than pregnant option is avaiable

//check if dropdown if female
var femaleCheckbox = function () {
    if ($("gender").selectedIndex == 1) {
        $("pregnant").disabled = false;
    }
    if ($("gender").selectedIndex == 0) {
        $("pregnant").disabled = true;
    }

    //var isFemale = $("female").checked;
    // $("pregnant").disable = !isFemale;
}

//pregnant values
/*
$("vitC").innerHTML = "105 mg";
$("vitA").innerHTML = "700 &#181g";
$("folate").innerHTML = "600 &#181g";
*/

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
var calculateFemaleCommon = function () {
    $("water").innerHTML = "2L";
    $("fibre").innerHTML = "25g";
    $("vitD").innerHTML = "15 &#181g";
    $("vitC").innerHTML = "95 mg";
    $("vitA").innerHTML = "650 &#181g";
    $("folate").innerHTML = "330 &#181g";
    //iron
    $("magnesium").innerHTML = "300 mg";
    $("calcium").innerHTML = "860 mg";
    $("zinc").innerHTML = "11 mg";
}
//iron dif if over 58

var calculateNutrition = function () {
    var age = $("age").value;
    var weight = $("weight").value;
    var height = $("height").value;
    age = parseFloat(age);
    weight = parseFloat(weight);
    height = parseFloat(height);

    //hide or show nutrition
    var x = $("displayInfo");

    //common variables
    var bmi = weight / (height / 100 * (height / 100));
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
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    //checks if inputs are numbers and outputs alert if they aren't
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age < 18)
        alert("You must enter a numerical value and be over the age of 18 to use this app");
    //need to get if no value or over 18
    //male and sedentary
    if ($('gender').value == "male" && $("activity").selectedIndex == 0) {
        var tdee = bmrM * sedentary_Activity;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0)
        $('protein').innerHTML = Math.floor(protein.toFixed(0)) + "g";
        calculateMaleCommon();
    }
    //male and Lightly active
    if ($('gender').value == "male" && $("activity").selectedIndex == 1) {
        var tdee = bmrM * lightly_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateMaleCommon();
    }
    //male and Moderately active
    if ($('gender').value == "male" && $("activity").selectedIndex == 2) {
        var tdee = bmrM * moderately_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateMaleCommon();
    }
    //male and Heavily active
    if ($('gender').value == "male" && $("activity").selectedIndex == 3) {
        var tdee = bmrM * heavily_Active;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateMaleCommon();
    }
    //male and athlete
    if ($('gender').value == "male" && $("activity").selectedIndex == 4) {
        var tdee = bmrM * athlete_Activity;
        $("bmr").innerHTML = bmrM.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateMaleCommon();
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
        calculateFemaleCommon();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
    }
    //female and Lightly active
    if ($('gender').value == "female" && $("activity").selectedIndex == 1) {
        var tdee = bmrF * lightly_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateFemaleCommon();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
    }
    //female and Moderately active
    if ($('gender').value == "female" && $("activity").selectedIndex == 2) {
        var tdee = bmrF * moderately_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateFemaleCommon();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
    }
    //female and Heavily active
    if ($('gender').value == "female" && $("activity").selectedIndex == 3) {
        var tdee = bmrF * heavily_Active;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateFemaleCommon();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
    }
    //female and athlete
    if ($('gender').value == "female" && $("activity").selectedIndex == 4) {
        var tdee = bmrF * athlete_Activity;
        $("bmr").innerHTML = bmrF.toFixed(0);
        $("tdee").innerHTML = tdee.toFixed(0);
        $("bmi").innerHTML = bmi.toFixed(1);
        $('calories').innerHTML = tdee.toFixed(0);
        calculateFemaleCommon();
        if ($("age").value <= 59) {
            $("iron").innerHTML = "16 mg";
        }
        else {
            $("iron").innerHTML = "11 mg";
        }
    }
    //BMI colour change
    //underweight
    if (bmi < 18) {
        $("bmi").style.borderColor = "aqua";
        $("bmi").innerHTML = "<span style='color: aqua;'>" + bmi.toFixed(1) + "</span>";
    }
    //healthy weight
    if (bmi > 18 && bmi < 25) {
        $("bmi").style.borderColor = "lawngreen";
        $("bmi").innerHTML = "<span style='color: lawngreen;'>" + bmi.toFixed(1) + "</span>";
    }
    //overweight
    if (bmi > 25 & bmi < 30) {
        $("bmi").style.borderColor = "gold";
        $("bmi").innerHTML = "<span style='color: gold;'>" + bmi.toFixed(1) + "</span>";
    }
    //obese
    if (bmi > 30 & bmi < 35) {
        $("bmi").style.borderColor = "orange";
        $("bmi").innerHTML = "<span style='color: orange;'>" + bmi.toFixed(1) + "</span>";
    }
    //morbidly obese
    if (bmi > 35) {
        $("bmi").style.borderColor = "red";
        $("bmi").innerHTML = "<span style='color: red;'>" + bmi.toFixed(1) + "</span>";
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

    else {
        $("resultText").innerHTML = ("error");
    }

}

