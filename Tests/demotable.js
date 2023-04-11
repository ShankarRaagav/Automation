Feature("Learning Automation");

const dprof = require("../Pages/dtable.js");

const assert = require('assert');

Before(async ({ I, Dprofile }) => {
  Dprofile.goto();
});


const searchbox = 'input[id="searchBox"]';
const txt = 'McGee';

const searchbtn = 'span[id="basic-addon2"]';

const add = 'button[id="addNewRecordButton"]'; 

const fname = 'input[id="firstName"]';
const firstname = 'Tim';

const lname = 'input[id="lastName"]';
const lastName = 'McGee';

const email = 'input[id="userEmail"]';
const mail = 'timmcgee@ncis.us';


const age = 'input[id="age"]';
const ageno = '24';

const salary = 'input[id="salary"]';
const netsalary = '700000';

const department = 'input[id="department"]';
const dept = 'Tech';

const submitbtn = 'button[id="submit"]'



Scenario("Search a profile", async ({ I, Dprofile }) => {
  
  await I.say('Enter a name to search the profile list');
  //await dprof.search(searchbox, txt);

  const searchQuery = 'james';
  await dprof.search(searchQuery);

  if (await dprof.isWordNotInTable('james')) 
  {
    console.log('The word is not in the table.');
  } 
  else 
  {
    console.log('The word was found in the table.');
  }
});


Scenario("Add a profile to the list", async({I, Dprofile}) =>
{
  await I.say("To add proflie");
  await I.click(add);
  await I.wait(2);

  await I.say('Enter first name for the profile');
  await dprof.value(fname, firstname);

  await I.say('Enter last name for the profile');
  await dprof.value(lname, lastName);

  await I.say('Enter email id for the profile');
  await dprof.value(email, mail);

  await I.say('Enter age for the profile');
  await dprof.value(age, ageno);

  await I.say('Enter salary for the profile');
  await dprof.value(salary, netsalary);

  await I.say('Enter department for the profile');
  await dprof.value(department, dept);

  await I.click(submitbtn);

});

Scenario('Check if a profile is available in the web table', async ({I,Dprofile}) => {

  const searchQuery = 'Cierra';
  await dprof.search(searchQuery);

  if (await dprof.isWordInTable('Cierra')) 
  {
    console.log('The word is in the table.');
  }
  else 
  {
    console.log('The word was not found in the table.');
  }
  await I.assert(await dprof.isWordInTable('Cierra'));
});


Scenario("Check if a cell value is correct in the web table", async ({I, Dprofile}) => 
{

  const searchQuery = 'Cierra';
  await dprof.search(searchQuery);

  const rowIndex = 1;
  const columnIndex = 1;
  const expectedValue = 'Cierra';
  const actualValue = await dprof.getCellValue(rowIndex, columnIndex);

  await I.assert.strictEqual(actualValue, expectedValue);

});


