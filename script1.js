let q = 1;
let p = 2;
//console.log(q+p);
multiply = (q, p) => {
  return q * p;
};
console.log(multiply(q, p));
display = function(){
    document.querySelector('h1').innerHTML=multiply(q,p);
}
