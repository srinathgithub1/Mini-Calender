const monthel=document.querySelector("#month");
const dayel=document.querySelector("#day");
const dateel=document.querySelector("#date");
const yearel=document.querySelector("#year");

const date=new Date();
monthel.innerText=date.toLocaleString("en",{month:"long"});
dayel.innerText=date.toLocaleString("en",{weekday:"long"});
dateel.innerText=date.getDate();
yearel.innerText=date.getFullYear();