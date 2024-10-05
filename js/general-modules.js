// Challenge 2 functions

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

