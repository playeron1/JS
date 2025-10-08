<<<<<<< HEAD
let count=0;
function hello() {
    count++;
    console.log(count);
    document.querySelector('h1').innerHTML=count;
}

function hundred(){
    for(var i=0;i<=100;i++)
    {
        document.querySelector('h1').innerHTML=i;
    }
}
=======
// console.log("Hi");
const anime1 = document.querySelectorAll("p");
// console.log(anime1);
anime1[0].style.background='red';
anime1[1].style.background='lightblue';
const a = document.getElementById('box3');
console.log(a);
// a.style.background='yellow';
// anime1[4].style.background = 'lightgreen';
// anime1[1].style.border = '2px solid black';
// anime1[1].style.width = "70%";
anime1[1].style.padding = '10px 10px';
anime1[1].style.borderRadius = '20px';
anime1[1].style.margin = '0 auto';
anime1[1].style.cssText = 'background:lightgreen;border:2px solid black;width:70%;padding: 10px 10px;border-radius:10px;font-size:20px;font-family: arial;margin:0 auto;text-align: center';
const b = document.getElementsByName('message');
console.log(b);
b[0].style.border='2px solid black';
>>>>>>> fdfec28dae59126d8897bef81c5193767ceae01b
