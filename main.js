// timer all action 
let milisecond = 0;
let second = 0;
let munits = 0;
let hours = 0;
let timeDisplay = document.querySelector('.mainTime');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');
let UserM = document.querySelector('.UserM');
let UserS = document.querySelector('.UserS');


let count;
startBtn.addEventListener('click', function(){
    count = setInterval(mainset, 10);
});

function mainset(){
    milisecond += 10;
    if(milisecond == 1000){
        milisecond = 0;
        second++
        if(second == 60){
            second = 0;
            munits++
            if(munits == 60){
                munits = 0;
                hours++
            }
        }
    }

    

    let Ms = milisecond < 10 ? '00' + milisecond : milisecond < 100 ? '0' + milisecond: milisecond;
    let sec = second < 10 ? '0' + second : second;
    let mu = munits < 10 ? '0' + munits : munits;
    let h = hours < 10 ? '0' + hours : hours;

    timeDisplay.innerText = `${h} : ${mu} : ${sec} : ${Ms}`
    
    if(UserS.value < 10){
        let mainsec = '0'+ UserS.value;
        if(mainsec ==  sec){
            let audiosp = new Audio('alarm.mp3');
            audiosp.play();
            audiosp.loop = true;
            clearInterval(count)
        }
    }
   
    
    if(UserM.value < 10){
       let mainuse = '0' + UserM.value;
        if( mainuse ==  mu){
            let audiosp = new Audio('alarm.mp3');
            audiosp.play();
            audiosp.loop = true;
            clearInterval(count);
        }
    }
    
    
    

};

stopBtn.addEventListener('click', function(){
    clearInterval(count);
});
resetBtn.addEventListener('click', function(){
    timeDisplay.innerText = `00 : 00 : 00 : 0000`;
    window.location.reload()
});