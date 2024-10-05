var resultElement = document.getElementById('result-element');

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('challenge-video');
    
    // Ensure video is loaded before setting playback rate
    video.addEventListener('canplay', function() {
        video.playbackRate = 0.2; // Set video playback speed to half (0.5)
    });
});

var btnSum = document.getElementById('btn-sum');
var btnProd = document.getElementById('btn-prod');
var btnIncExc = document.getElementById('btn-inc-exc');
let timerInterval;

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

btnSum.addEventListener('click', function() {
    triggerAlert();
});
btnIncExc.addEventListener('click', function() {
    triggerAlert();
});

btnProd.addEventListener('click', () => {
    calculateResult();
})

function calculateResult(){

    var cantElements = 8; // Number of elements required to multiply
    var step1Array = [26, 26, 10, 5]; // Initial values {Cap letters, Lower Cap letters, numbers, symbols}
    var step2Array = []; // Array to store the results of Product principle of the first array
    var step3Array = []; // Array to store the last 4 elements
    var sum = 0; // Sum of step2Array values
    var prodResult = 1;

    // Loop to obtain the Product principle results of the 1st array
    for (var i = 0; i < step1Array.length; i++){
        prodResult *= step1Array[i];
        step2Array[i] = step1Array[i] - 1;
        sum += step2Array[i];
    }
    console.log("Resultado intermedio: " + step2Array);

    // Loop to insert the last 4 elements to continue with the Product result
    // We will substract 1 in each cycle because that element cannot be used.
    for (var i = 0; i < cantElements - step1Array.length; i++){
        step3Array.push(sum);
        sum -= 1;
    }
    console.log(step3Array);
    
    for (var i = 0; i < step3Array.length; i++){
        prodResult *= step3Array[i];
        
    }
    
    var formattedResult = prodResult.toLocaleString();
    console.log("Resultado final: " + formattedResult);

    resultElement.textContent = formattedResult;
}



