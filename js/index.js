/* Variables for showModule() function */
var carModule1 = document.getElementById('card-mod1');
var carModule2 = document.getElementById('card-mod2');
var carModule3 = document.getElementById('card-mod3');
var carModule4 = document.getElementById('card-mod4');
var carModule5 = document.getElementById('card-mod5');
var carModule6 = document.getElementById('card-mod6');
var carModule7 = document.getElementById('card-mod7');

function showModule(opt) {

    if(opt === "card-mod1") {
        carModule1.classList.remove('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod2") {
        carModule1.classList.add('d-none');
        carModule2.classList.remove('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod3") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.remove('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod4") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.remove('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod5") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.remove('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod6") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.remove('d-none');
        carModule7.classList.add('d-none');
    } else if (opt === "card-mod7") {
        carModule1.classList.add('d-none');
        carModule2.classList.add('d-none');
        carModule3.classList.add('d-none');
        carModule4.classList.add('d-none');
        carModule5.classList.add('d-none');
        carModule6.classList.add('d-none');
        carModule7.classList.remove('d-none');
    }
}

/* Variables for Progress Bar */
var saturdays = ["2024-09-07", "2024-09-14", "2024-09-21", "2024-09-28", "2024-10-05", "2024-10-12", "2024-10-19", "2024-10-26", "2024-11-02", "2024-11-09", "2024-11-16", "2024-11-23", "2024-11-30", "2024-12-07"];
var currentDate = new Date();
var currDateFormat = currentDate.toISOString().slice(0, 10);
var weekCounter = 0;
var quarterWeeks = 14;

window.onload = function() {
    setWeeksProgressBar();
    fillModulesProgressBar();
}

function setWeeksProgressBar(){
    for(var i = 0; i < saturdays.length; i++){
        if(currDateFormat < saturdays[i]){
            weekCounter = i;
            console.log(weekCounter);
            break;
        }
    }

    fillPastSaturdays(weekCounter);
    var progressPercentage = ((weekCounter/quarterWeeks)*100).toFixed(2);
    console.log(progressPercentage);
    fillWeeksProgressBar(progressPercentage);
}

function fillPastSaturdays(daysQty){
    var weekCheckboxes = document.querySelectorAll('#progress-bar-week input[type="checkbox"]');
    weekCheckboxes.forEach(function(checkbox, index) {
        if (index < daysQty) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

function fillWeeksProgressBar(progressPerc) {
    var progressBarElement = document.getElementById('progress-bar-weeks');
    var percWidthWeeks = progressPerc + "%";

    progressBarElement.style.width = percWidthWeeks;
    progressBarElement.textContent = percWidthWeeks;
}

function fillModulesProgressBar(){
    var quarterModules = 7
    var modCounter = getModulesQty();
    var progressBarElement = document.getElementById('progress-bar-modules');
    var progressPercentage = ((modCounter/quarterModules)*100).toFixed(2);

    var percWidthModules = progressPercentage + "%";

    progressBarElement.style.width = percWidthModules;
    progressBarElement.textContent = percWidthModules;
    console.log("Porcentaje de los Módulos: " + percWidthModules);
}

function getModulesQty(){
    var moduleCheckboxes = document.querySelectorAll('#progress-bar-cb-module input[type="checkbox"]');
    var moduleCounter = 0;

    moduleCheckboxes.forEach(function(checkbox){
        if(checkbox.checked){
            moduleCounter += 1;
        }
    });
    return moduleCounter;
}

document.querySelectorAll('#progress-bar-cb-module input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', fillModulesProgressBar);
});

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('#progress-bar-cb-module input[type="checkbox"]').forEach(function (checkbox) {
//         checkbox.addEventListener('change', fillModulesProgressBar);
//     });
// });