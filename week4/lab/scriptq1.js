const no= document.getElementById("no");

const bt=document.getElementById("button");
const ans=document.getElementById("answer");
bt.onclick= ()=>{
    let n=Number(no.value);
    let a='';
    for(let i=1; i<=10; i++){
        
        a+=` ${n} x ${i} = ${i*n} <br>`;
        
    }
    ans.innerHTML=a;
}
