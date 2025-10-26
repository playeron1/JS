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