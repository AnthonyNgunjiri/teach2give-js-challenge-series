// INTRODUCTION TO JAVASCRIPT

// 1.Sum of two numbers


  const sum=(num1,num2)=>{
    add=num1+num2
    return(add)
  }
  sum(-3,-4)
  console.log(add)

  // // 2.return the next number from the number passed

  const nextNumber=(number)=>{
    solution=number+1
    return(solution);
  }
  nextNumber(-2)
  console.log(solution)

  // // 3.find the perimeter of a rectangle

  function rectanglePerimeter(length,width){
   perimeter=(length+width)*2
   return(perimeter); 
  }
  rectanglePerimeter(10,20)
  console.log(perimeter)

  // // 4.return something to me
  function returnSomethingTOMe(something){
   hello= "something" +" "+ something;
   return(hello);
  }
  returnSomethingTOMe("jack daniels")
  console.log(hello)

  // // 5.Bob's BMI VS Jane's BMI

  const greaterBMI=(BmiOfBob,BmiOfJane)=>{
   
    if (BmiOfBob>BmiOfJane)
      return("Bob")
    if (BmiOfJane>BmiOfBob) {
      return("Jane")
    } else {
      return("equal")
    }
  }
  greaterBMI(30,30)
  BMI=greaterBMI(30,30)
  console.log(BMI)  

  // //6.Basketball points
  let basketBallPoints=(numberoftwopointer,numberofthreepointer)=>{
    finalpoints=2*(numberoftwopointer)+(numberofthreepointer)*3
    return(finalpoints)
  } 
  basketBallPoints(0,5)
  console.log(finalpoints)

  //7. less than 100
  let isSumMoreThan100 = (number1,number2)=>{
add=number1+number2;
 if (add<100){
  return true ;
 }else{
  return false;
 }
}
 isSumMoreThan100(40,20)
 console.log(isSumMoreThan100(40,20))

// 8. convert minutes to second
 function convertToSeconds(minutes){
seconds= minutes*60 
if (seconds==0)
return 0;
else if (seconds==1) {
  return ` ${seconds} second`;
} else {
  return `${seconds} seconds`;
}
 }
 console.log(convertToSeconds(0.016666666666666667))

// 9. Greater among the three
const greater=(x,y,z)=>{
if (x>y && x>z){
  return x;
}else if (y>x&&y>z) {
  return y;
} else if(z>x&&z>y){
return z;
}else{
  return x;
}
 }
  console.log(greater(23,23,23))

  //10. less among the three

  const less=(a,b,c)=>{
    if (a<b && a<c){
      return a;
    }else if (b<a&&b<c) {
      return b;
    } else if(c<a&&c>b){
    return c;
    }else{
      return a;
    }
     }
      console.log(less(2,35,9))



//11. football points
let footballpoints=(gamewon,gamedrawn,gamelost)=>{
  numberofpoint=gamewon*3 + gamedrawn*1 + gamelost*0;
  return(numberofpoint);
}
footballpoints(5,0,2)
  console.log(numberofpoint)
   
  //12.Even numbers
//   
let isEven =(num)=>{

  let evenNumber=[];
  let oddNumber=[];

  for (let i=num; i<=101; i++){
      switch (i%2==0) {
          case true:
              evenNumber.push(i);
              break;
          case false:
              oddNumber.push(i);
              break;
          default:
              break;
      }
  }
  console.log(evenNumber); 
  if (num%2==0) {
      return true;;
  }else{
      return false;;
  }
}

isEven(5); 


















isEven(4)
console.log(isEven(4))

while(numb<=101){
  return(evenNumberUpto101);
}

 


