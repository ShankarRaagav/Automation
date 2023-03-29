const { selectdrop } = require ("../Pages/omayo");
const omayo = require("../Pages/omayo");
const { seeNthTodoEquals } = require("../Pages/todoPages");

Feature("Testing scenarios in omayo blogspot");

Before(async ({ I, Omayo }) => 
{
	await I.say('I am on Omayo Blog');
	await I.amOnPage("https://omayo.blogspot.com/");
});

const username = 'input[name="userid"]';
const email = 'raagav@gmail.com';
const paswd = 'input[name="pswrd"]';
const pass = '010996';
const login = '#form input[type="button"]';
const content = 'textarea[cols="80"]';
const text = 'Welcome to Omayo Blogspot. Please share you thoughts with our blog!!!';
//const blogs = 'span[id="blogsmenu"]';
//const Button1 = 'button#but1';
//const Button2 = 'button#but2';
const svalue = "subscribe";
const sbox = 'input.gsc-input';
const Search = 'input.gsc-search-button';
const Dropdown = 'button.dropbtn';
const preloadtext = '#textbox1';




Scenario("Enter text in dialogue box", async({I, Omayo}) =>
{
	await I.say("When I enter text");
	await omayo.value(content, text);
	await I.wait(10);
});



Scenario("1. Verify selenium by arun page after mouseover and click", async({I, Omayo})=>
{
	await I.say('Mouseover on blogsmenu and click on SeleniumbyArun');
	await omayo.hoverTo();
	await I.wait(2);
	await omayo.select();
	await I.say('SeleniumbyArun is shown in blogs dropdown');
	await omayo.validate();
	await I.wait(2);
}); 


Scenario("2. Read and report all the rows and columns of the table", async({I, Omayo}) =>
{
	await I.say('To read and report all the rows and columns of the table');
	await omayo.table();
	await I.wait(2);

});

Scenario("3. Login with username and password", async ({ I, Omayo }) => 
{
  await I.say("When I enter username and password");
	await omayo.value(username, email);
	await omayo.value(paswd, pass);
	await I.say("Then I click on login button");
	await I.click('Login');
	await I.wait(10);

});


 
Scenario("4. To get text from preloaded text box", async({I, Omayo}) =>
{
	await I.say('Get text from the preloaded text box');
	await omayo.text(preloadtext);
	await I.wait(2);
	
}); 



Scenario("5. Check the button if it is enabled/diabled", async({I, Omayo}) =>
{
	await I.say('When I click on button 2');
	await omayo.btncheck();
	await I.wait(2);
});

Scenario("6. To fill the search box with a text and check if the url has the  entered text", async({I, Omayo}) =>
{
	await I.say('When I enter a text in the search box');
	await omayo.value(sbox, svalue);
	await I.wait(2);
	await I.say('when I click on search button');
	await I.click('Search');
	await I.wait(1);
	await omayo.check();
	await I.wait(2);


});



Scenario("7. Print all dropdown option in older newsletter and click doc1", async({I, Omayo}) =>
{
	await I.say('When I click on older newsletter');
	await omayo.dropdisplay();
	await I.say('click on doc1 in the dropdown');
	await omayo.dselect();
	await I.wait(2);
});





Scenario("8. To click on Delayed button to navigate to flipkart homepage", async({I, Omayo}) =>
{
	await I.say('When I click on delayed button');
	await I.click('Dropdown');
	await I.wait(2);
	await omayo.selectflip();
	await I.say('clicked on flipkart');
	await omayo.validateflip();
	await I.wait(2);
	
});



Scenario("9. Validated error in iframe 2", async ({I, Omayo}) =>
{
	await I.say('Check error keyword in Iframe - 2');
	await omayo.frame();
	await I.wait(2);
})








