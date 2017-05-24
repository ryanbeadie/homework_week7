


function evenOdd(numbers){
  var even= [];
  var odd= [];
  for (i = 0; i < 20; i++) {
      if (  i%2 === 0) {
        console.log(i, ' is a even number!');
        even.push(i);
    } if (i %2 !== 0  ){
      console.log(i, ' is a odd number!');
      odd.push(i);
    }
  }//end for loop
  console.log('Even numbers ',even);
  console.log('Odd Numbers ', odd);
} //end evenOdd

evenOdd();



function upperCase() {
  var string = "please cap me";
  console.log(string);
  string= string.toUpperCase(0);
  console.log(string);

}//end upperCase

upperCase();
