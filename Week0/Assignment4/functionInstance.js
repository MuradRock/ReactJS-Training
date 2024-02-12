
var myFunc=function func(){
   myFunc.totalInstances++;
}
myFunc.totalInstances=0;

myFunc();
myFunc();
console.log(myFunc.totalInstances);