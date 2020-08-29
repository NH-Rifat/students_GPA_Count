
function calcy(){
   //console.log(event);
  // event.preventDefault()
  let ban = document.getElementById('ban').value;
  let eng = document.getElementById('eng').value;
  let math = document.getElementById('math').value;
  let phy = document.getElementById('phy').value;
  let chem = document.getElementById('chem').value;
  let Bio = document.getElementById('Bio').value;
  let grades ;

//calculate totalMarks 
  let totalNumber = parseFloat(ban) + parseFloat(eng) + parseFloat(math) + parseFloat(phy) + parseFloat(chem)+ parseFloat(Bio);
  alert("Your Total Marks is "+totalNumber+' out of 600');

  //calculate parcentage out of total marks
  let perc = (totalNumber/600) * 100;
  alert("Your Average Marks is "+perc);

//calculate grade out of parcentage
if(perc <= 100  && perc >= 80){
  grades = 'A+';
  alert("Best of Luck!..Your GPA is "+grades);
}else if(perc <= 79  && perc >= 70){
  grades = 'A';
  alert("Good to wish you!..Your GPA is "+grades);
  }else if(perc <= 69  && perc >= 60){
    grades = 'A-';
  alert("Good, Try more!..Your GPA is "+grades);
  }else if(perc <= 59  && perc >= 50){
    grades = 'B';
  alert("Try  more and more!..Your GPA is "+grades);
  }else if(perc <= 49  && perc >= 40){
    grades = 'C';
  alert("Give the Best Effort!..Your GPA is "+grades);
  }else if(perc <= 39  && perc >= 33){
    grades = 'D';
  alert("Try Hard you are in danger position!!..Your GPA is "+grades);
  }else{
    grades = 'F';
  alert("Better Luck for the next Time and be more Serious!!..Your GPA is "+grades);
  }


//show the final outcomes result
  if(perc >= 39.5){
    document.getElementById('showData').innerHTML =   `Out of 600 your total is  ${totalNumber} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Passed.`
  }
  else{
    document.getElementById('showData').innerHTML = `Out of 600 your total is  ${totalNumber} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`
  }
  
}
