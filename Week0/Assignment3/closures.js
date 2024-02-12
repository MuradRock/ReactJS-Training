function counter(){
    let count=0;
   return  function incremnet(){
        return count++;
    }
}

const closure=counter();

function printCounter(){
   console.log(closure())
}
setInterval(function(){
    printCounter();
},2000)