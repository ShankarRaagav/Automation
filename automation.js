const { selectdrop } = require ("../Pages/omayo");
const omayo = require("../Pages/omayo");

Feature("Testing login details");

Before(async ({ I, Omayo }) => 
{
	await I.say('I amm on Omayo Blog');
	await I.amOnPage("https://omayo.blogspot.com/");
});

const username = 'input[name="userid"]';
const email = 'raagav@gmail.com';
const paswd = 'input[name="pswrd"]';
const pass = '010996';
const login = '#form input[type = button]';


/**
 * Happy Path tests
 */


Scenario.only("Login with username and password", async ({ I, Omayo }) => 
{
  await I.say("When I enter username and password");
	await omayo.value(username, email);
	await omayo.value(paswd, pass);
	await I.say("Then I click on login button");
	await I.click('login');
	await I.wait(20);

});





