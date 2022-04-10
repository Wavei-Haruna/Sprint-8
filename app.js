" use strict";
// variable declarations
let numQuestions = 12;
let numCounter = 0;
let solicitation = "please enter";
let totalArray = [
  `${solicitation} which year have you started dating ?`,
  `${solicitation}  the name of your best friend ?`,
  `${solicitation} the age of your friend ?`,
  `${solicitation} the name of your instittution you are currently enrolled in or have completed ?`,
  `${solicitation} what is your programe of study?`,
  `${solicitation} your year of ccompleting ?`,
  `${solicitation} eei I just forgot to ask you name ?`,
  `${solicitation} the food you love best ?`,
  `${solicitation} the name your SHS ?`,
  `${solicitation} whether you have a school girl or Boy  ?`,
  `${solicitation}  the progarm the person  is reading ?`,
  `${solicitation} how you perceive the program ?`,
  `${solicitation} enter why you are reading the program ?`,
];
console.log(totalArray);
let userinput = [];
// I want to promp the user to take input from the user
// I am using the for loop to loop the statement in the code
// I am using the i as the data type
for (i = 0; i < numQuestions; i++) {
  console.log(
    totalArray[numCounter] +
      ` and be reminded you ${
        numQuestions - i
      } more questions let lets's continue `
  );

  userinput.push(
    prompt(
      totalArray[numCounter] +
        ` and be reminded you ${
          numQuestions - i
        } more questions let lets's continue. `
    )
  );
  numCounter++;

  console.log(userinput.join(" "));
}
let originalStory = ` It is not true that you have started dating in ${userinput[0]} and don't say ${userinput[1]} is  you best friend just because his age is ${userinput[2]}. I hope you know that ${userinput[3]} is the best school and ${userinput[4]} is the best Program in the world ?.  I hope you will be graduating in the year ${userinput[5]}, ok do you know ${userinput[6]} is a special name?. People who always say that ${userinput[7]} is the Best but I dont  whether that is the reason everyone that has completed ${userinput[8]} has a lover. Do I hear you say ${userinput[9]}. I sm sure you like your friend because he read ${userinput[10]}. The is ${userinput[11]}. Thank you this is the real story. `;
console.log(originalStory);
alert("you are done!");
document.write(originalStory);
