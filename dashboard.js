function rent(name, price, hrsId, modeId){

let hrs = Number(document.getElementById(hrsId).value);
let mode = Number(document.getElementById(modeId).value);

if(hrs <= 0 || isNaN(hrs)){
alert("Please enter valid hours");
return;
}

let total = hrs * price * mode;

document.getElementById("result").innerHTML =
"🚴 Bike: <b>"+name+"</b><br>"+
"⏱ Hours: <b>"+hrs+"</b><br>"+
"⚙ Mode: <b>"+mode+"</b><br>"+
"💰 Total Rent: <b>₹"+total.toFixed(0)+"</b>";
}