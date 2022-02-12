function checkTime(addzero) {
  if (addzero < 10) {
    addzero = "0" + addzero
  };  // add zero if less than  10 (number <10)
  return addzero;
}
function covertHours(hours) {
  if (hours > 12) {
    hours =  hours - 12
  };  // add zero if less than  10 (number <10)
  return hours;
}

function myClock() {
  
  var today= new Date()
  var s = today.getSeconds()
  var m = today.getMinutes()
  var normalhours = today.getHours()

   var h= covertHours(normalhours) // coverting hours in 12 hour clock
  
  var sec = checkTime(s)
  var min = checkTime(m)
  var hours = checkTime(h)
  
  if(h > 12){
    var ttype='PM'
  }
  else{
     var ttype='AM'
  }
 
   // var clock= document.getElementById('clock')
   // clock.innerText = hours+':'+min+':'+sec
  
   var hrs= document.getElementById('hrs')
   hrs.innerText = hours
  
   var minutes= document.getElementById('mts')
   minutes.innerText = min
  
   var secs= document.getElementById('secs')
   secs.innerText = sec
  
   var sttype= document.getElementById('ttype')
   sttype.innerText = ttype

}
  var interval 

function startClock(){
   interval=setInterval(myClock, 1000)
    var  txt = document.getElementById('txt')
    txt.classList.remove("show");
}
var startButton = document.getElementById('start')
startButton.addEventListener('click', startClock)

function stopClock(){
  var  txt = document.getElementById('txt')
  txt.classList.toggle("show");
  clearInterval(interval)
}
var stopButton = document.getElementById('stop')
stopButton.addEventListener('click', stopClock)



/*stop watch*/
var stopWatch = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function start_watch() {
  if (stoptime == true) {
        stoptime = false;
        timer();
    }
}

function stop_watch() {
  if (stoptime == false) {
    stoptime = true;
  }
}


function timer() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopWatch.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timer()", 1000);
  }
}

function reset_watch() {
    stopWatch.innerHTML = '00:00:00';
}



