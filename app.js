var start = document.getElementById("startBtn");
var reset = document.getElementById("resetBtn");

var hour = document.getElementById("hour");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");

var defaultTimer = null;

function timer(){
    if(hour.value==0 && min.value==0 && sec.value==0){
        hour.value = 0;
        min.value = 0;
        sec.value = 0;             
    }else if(sec.value!=0){
        sec.value--;
    }else if(min.value!=0 && sec.value ==0){
        sec.value=59;
        min.value--;
    }else if(hour.value!=0 && min.value==0 ){
        min.value=60;
        hour.value--;
    }
    return;
}


function stopTimer(){
    clearInterval(defaultTimer)
}

function starter(){
   function startInterval(){
    defaultTimer = setInterval(function() {
        timer();
    }, 1000);
   }
   startInterval()
}

// start.addEventListener('click', function(){
//     function startInterval(){
//         defaultTimer = setInterval(function(){
//             timer();
//         },1000);
//     }
//     startInterval()
    
// })

function reseter(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stopTimer()
}

