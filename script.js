 console.log("js is connected")

 function updateclock(){
    const date = new Date();

    document.getElementById("time").textContent = date.toLocaleTimeString();
    document.getElementById("date").textContent = date.toLocaleDateString();
 }
 updateclock();
 setInterval(updateclock,1000)


 function format(milliseconds) {
    const h = Math.floor(milliseconds / 3600000);
    const m = Math.floor((milliseconds % 3600000) / 60000);
    const s = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 1000;

    return String(h).padStart(2, "0") + ":" +
           String(m).padStart(2, "0") + ":" +
           String(s).padStart(2, "0") + "." +
           String(ms).padStart(3, "0");
}
    let stopwatchseconds = 0;
let stopwatchid = null;
let startTime = 0;
let elapsedTime = 0;

function startstopwatch() {
    if (stopwatchid !== null) return;

    startTime = Date.now() - elapsedTime;

    stopwatchid = setInterval(() => {
        elapsedTime = Date.now() - startTime;

        document.getElementById("stopwatch").textContent =
            format(elapsedTime);
    }, 10);
}

function stopstopwatch() {
    clearInterval(stopwatchid);
    stopwatchid = null;
}

function resetstopwatch() {
    stopstopwatch();
    elapsedTime = 0;
    stopwatchseconds = 0;

    document.getElementById("stopwatch").textContent = format(0);
}


 let timerSecs = 0;
 let timerid = null;
function startTimer(){
   clearInterval(timerid); //safety check

   timerSecs = Number(document.getElementById("timerInput").value);

   document.getElementById("timer").textContent=format(timerSecs);

   timerid = setInterval(function(){
      timerSecs--;
      document.getElementById("timer").textContent=format(timerSecs);

      if(timerSecs<=0)
      {
         clearInterval(timerid);
         document.getElementById("timer").textContent=format(0);
      
      }
   },1000);
}


let alarmId =null;

function setAlarm(){
   const alarmTime =document.getElementById("alarmInput").value;

   if(!alarmTime)
   {
      alert("Pls set time");
      return;
   }

   document.getElementById("status").textContent = "The alarm is set for"+alarmTime;
   alarmId = setInterval(function(){
      const curr = new Date();
      
      const h =curr.getHours();
      const m =curr.getMinutes();

      const time = String(h).padStart(2,"0") + ":" + String(m).padStart(2,"0");

      if(time === alarmTime)
      {
         document.getElementById("sound").play();
         document.getElementById("status").textContent = "alarm is ringing!";
         clearInterval(alarmId);
            alarmId = null;
   }
},1000);
}