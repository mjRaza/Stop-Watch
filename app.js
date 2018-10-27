mintCounter=0;
var counter =0;
var mint = document.getElementById("minutes");
var btn = document.getElementById("startbtn");
var stopButton = document.getElementById("stopbtn");

var second = document.getElementById("second");
var resetButton = document.getElementById("resetbtn");

btn.addEventListener("click",starttiming);

resetButton.addEventListener("click",reset);
stopButton.addEventListener("click",pause);



mint.innerHTML= counter;
var m,s;
function starttiming()
{

 m=setInterval(mints,60000)
 s=setInterval(seconds,1000)
}

function mints()
{
    mintCounter+=1;
    mint.innerHTML= mintCounter;
    
}


function seconds()
{



    counter+=1;
    second.innerHTML= counter;
    if(counter===60)
    {
        counter=0;
    }
    
}



function pause()
{
    clearInterval(m);
    clearInterval(s);
}


function reset()
{   counter=0;
    mintCounter=0;

}