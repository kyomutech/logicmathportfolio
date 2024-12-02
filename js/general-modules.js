// Global variables
var resultElement = document.getElementById('result-element');
var btnSum = document.getElementById('btn-sum');
var btnProd = document.getElementById('btn-prod');
var btnIncExc = document.getElementById('btn-inc-exc');
let timerInterval;

var cardTask1 = document.getElementById('card-mod1');
var cardTask2 = document.getElementById('card-mod2');
var cardTask3 = document.getElementById('card-mod3');
var cardTask4 = document.getElementById('card-mod4');

/* Variables for showCardMod5() function */
var cardMod5_1 = document.getElementById('card-mod-5.1');
var cardMod5_2 = document.getElementById('card-mod-5.2');
var cardMod5_3 = document.getElementById('card-mod-5.3');
var cardMod5_4 = document.getElementById('card-mod-5.4');
var cardMod5_5 = document.getElementById('card-mod-5.5');
var cardMod5_6 = document.getElementById('card-mod-5.6');
var cardMod5_7 = document.getElementById('card-mod-5.7');

var passwordLength = document.getElementById('values-qty-input').value;

// Event Listeners
btnSum.addEventListener('click', function() {
    triggerAlert();
});
btnIncExc.addEventListener('click', function() {
    triggerAlert();
});
btnProd.addEventListener('click', () => {
    calculateResult();
})
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('challenge-video');
    const equationVideo = document.getElementById('equation-video');
    
    // Ensure video is loaded before setting playback rate
    video.addEventListener('canplay', function() {
        video.playbackRate = 0.2; // Set video playback speed to half (0.5)
    });

    equationVideo.addEventListener('canplay', function() {
        equationVideo.playbackRate = 5; // Set video playback speed to half (0.5)
    });
});


/**
 * @description Validates that there is a number entered in the quantity values input.
 */
document.getElementById('start-btn').addEventListener('click', function(event) {
    const inputField = document.getElementById('values-qty-input');
    const inputValue = inputField.value;

    // Check if the input value is empty or invalid
    if (inputValue === '' || inputValue <= 0) {
        event.preventDefault(); // Prevent form submission
        inputField.style.border = '2px solid red'; // Mark the input border red

        Swal.fire({
            title: "Información",
            html: "Debe ingresar un número.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                // const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                // timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });

    } else {
        inputField.style.border = ''; 
        document.getElementById('question-section').classList.remove('d-none');
        document.getElementById('get-result-section').classList.remove('d-none');
        document.getElementById('')
        document.getElementById('qty-text').textContent = passwordLength;
    }
});

document.getElementById('clean-btn').addEventListener('click', clearValues);
document.getElementById('close-modal-btn').addEventListener('click', clearValues);

function clearValues(){
    passwordLength = "";
    document.getElementById('values-qty-input').value = "";
    document.getElementById('question-section').classList.add('d-none');
    document.getElementById('get-result-section').classList.add('d-none');
}

/**
 * @description Updates passwordLength variable when a new value is inserted
 */
document.getElementById('values-qty-input').addEventListener('input', function() {
    passwordLength = this.value; // Update passwordLength with the new value
});

/**
 * @name triggerAlert
 * @description Displays alert when a button is clicked
 */
function triggerAlert(){
    Swal.fire({
        title: "Información",
        html: "Esta no es la técnica para resolver este problema.<br>Intente con otra técnica.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            // const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            // timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/**
 * @name calculateResult()
 * @description Calculate the results
 */
function calculateResult(){

    var step1Array = [26, 26, 10, 5]; // Initial values {Cap letters, Lower Cap letters, numbers, symbols}
    var step2Array = []; // Array to store the results of Product principle of the first array
    var step3Array = []; // Array to store the last 4 elements
    var sum = 0; // Sum of step2Array values
    var prodResult = 1;

    /**
     * @type For loop
     * @description Loop to obtain the Product principle results of the 1st array
     */
    for (var i = 0; i < step1Array.length; i++){
        prodResult *= step1Array[i];
        step2Array[i] = step1Array[i] - 1;
        sum += step2Array[i];
    }

    /**
     * @type For loop
     * @description Loop to insert the last 4 elements to continue with the product result
     * @information This will substract 1 in each cycle because that element cannot be used
     */
    for (var i = 0; i < passwordLength - step1Array.length; i++){
        step3Array.push(sum);
        sum -= 1;
    }
    
    /**
     * @type For loop
     * @description multiplies the elements using the Product Principle
     */
    for (var i = 0; i < step3Array.length; i++){
        prodResult *= step3Array[i];
        
    }

    createListStages(step3Array, step1Array);
    createCalculationList(step3Array, step1Array);
    
    var formattedResult = prodResult.toLocaleString();
    console.log("Resultado final: " + formattedResult);

    resultElement.textContent = formattedResult;
}

function createListStages(step3Array) {
    // Get the <ul> element by ID
    var listStagesElement = document.getElementById('items-stages');
    
    // Check if dynamic container exists, if not, create it
    var dynamicContainer = document.getElementById('dynamic-stages');
    if (!dynamicContainer) {
        dynamicContainer = document.createElement('div');
        dynamicContainer.id = 'dynamic-stages';
        listStagesElement.appendChild(dynamicContainer);
    }

    // Clear only the dynamically added list items
    dynamicContainer.innerHTML = "";

    // Loop through the step3Array and dynamically add new list items
    step3Array.forEach(function(stage, index) {
        // Create <li> element for each stage
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'list-style');

        // Create the inner structure: a <div> with the "row" class
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        // Create the first <div> (col-4) with the stage label (Etapa 1, 2, etc.)
        var col4Div = document.createElement('div');
        col4Div.classList.add('col-4');
        col4Div.innerHTML = `<strong>Etapa ${index + 5}:</strong>`; // Starts from 5 to not overwrite static ones

        // Create the second <div> (col-8) with the stage description
        var col8Div = document.createElement('div');
        col8Div.classList.add('col-8');
        col8Div.textContent = stage + " caracteres";

        // Append the inner <div> elements to the row <div>
        rowDiv.appendChild(col4Div);
        rowDiv.appendChild(col8Div);

        // Append the row <div> to the <li>
        listItem.appendChild(rowDiv);

        // Append the <li> to the dynamic container
        dynamicContainer.appendChild(listItem);
    });
}

/**
 * @name createCalculationList()
 * @params step3Array, step1Array
 * @description Creates the list of calculation list, e.g. 26 x 26 x 10 x 5...
 */
function createCalculationList(step3Array, step1Array){
    
    var allElementsArray = step1Array.concat(step3Array);
    var calculationInfo = document.getElementById('calculation-info');
    calculationInfo.textContent = "";

    
    // Convert the combined array into a string with 'x' separating the values
    var calculationText = allElementsArray.join(' x ');

    // Create the <em> element
    var emElement = document.createElement('em');

    // Set the content inside <em> with the calculationText
    emElement.textContent = calculationText;

    calculationInfo.appendChild(emElement);

}

/**
 * @name showTask()
 * @params card-mod1 || card-mod2 || card-mod3 || card-mod4
 * @description Show the respective information of the tab
 */
function showTask(opt) {
    if(opt === "card-mod1") {
        cardTask1.classList.remove('d-none');
        cardTask2.classList.add('d-none');
        cardTask3.classList.add('d-none');
        cardTask4.classList.add('d-none');
    } else if (opt === "card-mod2") {
        cardTask1.classList.add('d-none');
        cardTask2.classList.remove('d-none');
        cardTask3.classList.add('d-none');
        cardTask4.classList.add('d-none');
    } else if (opt === "card-mod3") {
        cardTask1.classList.add('d-none');
        cardTask2.classList.add('d-none');
        cardTask3.classList.remove('d-none');
        cardTask4.classList.add('d-none');
    } else if (opt === "card-mod4") {
        cardTask1.classList.add('d-none');
        cardTask2.classList.add('d-none');
        cardTask3.classList.add('d-none');
        cardTask4.classList.remove('d-none');
    }
}

/**
 * @name showCardMod5()
 * @params card-mod1 || card-mod2 || card-mod3 || card-mod4
 * @description Show the respective information of the tab
 */
function showCardMod5(opt) {

    if(opt === "card-mod-5.1") {
        cardMod5_1.classList.remove('d-none');
        cardMod5_2.classList.add('d-none');
        cardMod5_3.classList.add('d-none');
        cardMod5_4.classList.add('d-none');
        cardMod5_5.classList.add('d-none');
        cardMod5_6.classList.add('d-none');
    } else if (opt === "card-mod-5.2") {
        cardMod5_1.classList.add('d-none');
        cardMod5_2.classList.remove('d-none');
        cardMod5_3.classList.add('d-none');
        cardMod5_4.classList.add('d-none');
        cardMod5_5.classList.add('d-none');
        cardMod5_6.classList.add('d-none');
    } else if (opt === "card-mod-5.3") {
        cardMod5_1.classList.add('d-none');
        cardMod5_2.classList.add('d-none');
        cardMod5_3.classList.remove('d-none');
        cardMod5_4.classList.add('d-none');
        cardMod5_5.classList.add('d-none');
        cardMod5_6.classList.add('d-none');
    } else if (opt === "card-mod-5.4") {
        cardMod5_1.classList.add('d-none');
        cardMod5_2.classList.add('d-none');
        cardMod5_3.classList.add('d-none');
        cardMod5_4.classList.remove('d-none');
        cardMod5_5.classList.add('d-none');
        cardMod5_6.classList.add('d-none');
    } else if (opt === "card-mod-5.5") {
        cardMod5_1.classList.add('d-none');
        cardMod5_2.classList.add('d-none');
        cardMod5_3.classList.add('d-none');
        cardMod5_4.classList.add('d-none');
        cardMod5_5.classList.remove('d-none');
        cardMod5_6.classList.add('d-none');
    } else if (opt === "card-mod-5.6") {
        cardMod5_1.classList.add('d-none');
        cardMod5_2.classList.add('d-none');
        cardMod5_3.classList.add('d-none');
        cardMod5_4.classList.add('d-none');
        cardMod5_5.classList.add('d-none');
        cardMod5_6.classList.remove('d-none');
    }
}