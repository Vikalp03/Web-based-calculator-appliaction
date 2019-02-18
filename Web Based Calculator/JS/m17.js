 
alert("Come On! Let's do some calculations");
window.onload=function(){getTime();}  
function getTime(){ 
var d = new Date();
var hr = d.getHours() % 12;
var min = d.getMinutes();
var sec = d.getSeconds();
min=checkTime(min);  
sec=checkTime(sec); 
document.getElementById('time').innerHTML=hr+":"+min+":"+sec;  
setTimeout(function(){getTime()},1000);  
}   
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  

var number;
var gogo;
function Log()
{
	number = document.Calc.field.value;
	gogo = Math.log(parseInt(number));
	document.Calc.field.value = gogo;
}
function Del()
{
	number = document.Calc.field.value;
	document.Calc.field.value = number.substr(0, number.length-1);
}
function Sin()
{
	number = document.Calc.field.value;
	gogo = Math.sin(parseInt(number));
	document.Calc.field.value = gogo;
}
function Cos()
{
	number = document.Calc.field.value;
	gogo = Math.cos(parseInt(number));
	document.Calc.field.value = gogo;
}
function Tan()
{
	number = document.Calc.field.value;
	gogo = Math.tan(parseInt(number));
	document.Calc.field.value = gogo;
}

window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

   
};
