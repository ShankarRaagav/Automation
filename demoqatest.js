Feature("Learning Automation");

const demoqa = require("../Pages/demoqapage");

Before(async ({ I, DemoQa }) => {
  DemoQa.goto();
});


const fname = 'input[id="firstName"]';
const firstName = 'Shankar Raagav';

const lname = 'input[id="lastName"]';
const lastName = 'A S';

const email = 'input[id="userEmail"]'; 
const mail = 'raagav@gmail.com';

const male = 'input[id="gender-radio-1"]'; 
const female = 'input[id="gender-radio-2"]';
const others = 'input[id="gender-radio-3"]';

const mnumber = 'input[id="userNumber"]';
const mobile = '9384518514';

const dob = 'input[id="dateOfBirthInput"]';
const bday = '19 Apr 1999';

const sub = '//div[@id="subjectsContainer"]';
const subject = 'English';

const music = 'input[id="hobbies-checkbox-3"]';



Scenario("Enter student details in the form", async ({ I, DemoQa }) => {
  await I.say("Given I have an empty student form ");

  await I.say('Enter the first name of the student');
  await demoqa.name(fname, firstName);

  await I.say('Enter the last name of the student');
  await demoqa.value(lname, lastName);

  await I.say('Enter the email id of the student');
  await demoqa.value(email, mail);

  await I.say('Select the gender of the student');
  await demoqa.gender(male);

  await I.say('Enter the mobile number of the student');
  await demoqa.value(mnumber, mobile);

  await I.say('Enter the date of birth of the student');
  await I.clearField(dob);
  await demoqa.value(dob, bday); 

  await I.wait(1);
  await I.say('Enter the preferred subject');
  await demoqa.value(sub, subject);

  await I.say('Select hobbies of the student');
  await demoqa.hobby(music);

  







});


