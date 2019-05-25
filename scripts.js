let userString, upperCaseMinusE, upperCasedString;
// First, get string rom user
userString = prompt("What do you want to UPPeRCASe?");
//Function for uppercase
upperCaseMinusE = function(string){
  //Something will happen
  let result;
  result = "";
  for ( let i = 0; i < string.length; i = i + 1) {
    let letter;
    letter = string[i];
    if ( letter === "e") {
      result = letter;
    } else {
      result = result + letter.toUpperCase();
    }
  }
  return result;
};
//Third, pass ueser's string to Function
//assign the return to a variable.
upperCasedString = upperCaseMinusE(userString);
//print the string to the webpage
$("#response").html(upperCasedString);
