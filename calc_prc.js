  
const ansBasic = document.getElementById('ans-basic');
const ansSci = document.getElementById('ans-sci');
const ansAc = document.getElementById('ans-ac');

let currentcalc = ansBasic;

//add nubers to html text box
let numr = (val) => {
  currentcalc.value += val;
}

//for logic of calculator
function exec() {
  
  let asnwer = currentcalc.value;

if (asnwer === "" || asnwer === undefined)
{
     alert('Enter a value first');
}
else
{
  let answ = eval(asnwer);
  currentcalc.value = answ;
}

}

//for delete or empty text box
const del = () => {
  currentcalc.value = '';
}

//for keyboard event
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
     exec();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
     del();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "1") {
      numr('1');
  }
  else if(event.key === "2"){
      numr('2');
  }
  else if(event.key === "3"){
      numr('3');
  }
  else if(event.key === "4"){
      numr('4');
  }
  else if(event.key === "5"){
      numr('5');
  }
  else if(event.key === "6"){
      numr('6');
  }
  else if(event.key === "7"){
      numr('7');
  }
  else if(event.key === "8"){
      numr('8');
  }
  else if(event.key === "9"){
      numr('9');
  }
  else if(event.key === "0"){
      numr('0');
  }
  else if(event.key === "+"){
      numr('+');
  }
  else if(event.key === "-"){
      numr('-');
  }
  else if(event.key === "*"){
      numr('*');
  }
  else if(event.key === "/"){
      numr('/');
  }
  else if(event.key === "%"){
      numr('%');
  }
  else if(event.key === "."){
      numr('.');
  }
});

//sin
const sin = () => {
  let sin = currentcalc.value;
  currentcalc.value = Math.sin(sin);
}
//cos
const cos = () => {
  let cos = currentcalc.value;
  currentcalc.value = Math.cos(cos);
}
//tan
const tan = () => {
  let tan = currentcalc.value;
  currentcalc.value = Math.tan(tan);
}
//squareRoot
const square = () => {
   let sq = currentcalc.value;
   currentcalc.value = sq*sq;
}
//root
const root = () => {
   let sq = currentcalc.value;
   currentcalc.value = Math.pow(sq,1/2);
}
//cube
const cube = () => {
    let sq = currentcalc.value;
   currentcalc.value = sq*sq*sq;
}

// get id from button
const scince = document.getElementById('scince');
const basic = document.getElementById('basic');
const account = document.getElementById('account');

 // to change value 
const sci = document.getElementById('sci');
const ac = document.getElementById('ac');
const nor = document.getElementById('nor');

//for mode of calculator change button's logic
scince.addEventListener('click', () => {
  sci.style.display = 'unset';
  nor.style.display = 'none';
  ac.style.display = 'none';
  currentcalc = ansSci;
});

account.addEventListener('click', () => {
  ac.style.display = 'unset';
  nor.style.display = 'none';
  sci.style.display = 'none';
  currentcalc = ansAc;
});

basic.addEventListener('click', () => {
  sci.style.display = 'none';
  nor.style.display = 'unset';
  ac.style.display = 'none';
  currentcalc = ansBasic;
});

//gst plus logic
const gstplus = () => {
 let rate = prompt("enter gst rate");
 let amount = currentcalc.value;

 let gst =(rate * amount) /100;
 //console.log(gst)
 let total = parseFloat(amount) + gst;
// console.log(total)
 currentcalc.value = total;
}

//gst minus logic
const gstminus = () => {
 let rate = prompt("enter gst rate");
 let amount = currentcalc.value;

 let gst =(rate * amount) /100;
 //console.log(gst)
 let total = parseFloat(amount) - gst;
// console.log(total)
 currentcalc.value = total;
}

//mu logic
const Mu = () => {
  value = currentcalc.value;
  let downto = prompt("Enter persentage to mark down");

  let downval = value * (downto/100);
  let total = value - downval;
  //console.log(total)

  currentcalc.value = total; 
 // console.log(total);

} 
//M+ M- MRC logic

let memory = 0;

const mPlus = () => {
   memory += parseFloat(currentcalc.value);
    del()
   console.log(memory)
}
const mMinus = () => {
   memory -= parseFloat(currentcalc.value);
   del()
   //currentcalc.value = memory;
   console.log(memory)
}

const mrc = () => {
  currentcalc.value = memory;

}


