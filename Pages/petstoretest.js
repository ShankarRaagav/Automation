Feature("Learning Automation");

const petstore = require("../Pages/petstorepage.js");

Before(async ({ I, PetStore }) => {
  PetStore.goto();
});


const cat = '(//a[@href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] ) [2]';
const persian = '//a[text()="FL-DLH-02"]';
const malepersian = '//a[text()="EST-17"]';
const ccart = '//a[text()="Add to Cart"]';
const cquantitiy = '//input[name="EST-17"]';
const cvalue = '1';
const mainmenu = '//a[text()="Return to Main Menu"]';

const dog = '(//a[@href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] ) [2]';  
const labrador = '//a[text()="K9-RT-02"]';
const femalelab = '//a[text()="EST-25"]';
const dcart = '//a[text()="Add to Cart"]';

const checkout = '//a[text()="Proceed to Checkout"]';

const signin = '//a[text()="Sign In"]';

const register = '//a[text()="Register Now!"]';

const uid = 'input[name="username"]';
const id = 'McGee_21119';

const newpswd = 'input[name="password"]';
const pswd = 'TimMcGee@119'

const rptpswd = 'input[name="repeatedPassword"]'
const rpswd = 'TimMcGee@119'

const fname = 'input[name="account.firstName"]';
const firstName = 'Tim';

const lname = 'input[name="account.lastName"]';
const lastName = 'McGee';

const email = 'input[name="account.email"]'; 
const mail = 'tim_mcgee@ncis.us';

const phone = 'input[name="account.phone"]'; 
const number = '509-421-3398';

const address1 = 'input[name="account.address1"]'; 
const add1 = '1509 Flat Creek RD';

const address2 = 'input[name="account.address2"]'; 
const add2 = 'Priest Riveer';

const city = 'input[name="account.city"]'; 
const addcity = 'Washington';

const state = 'input[name="account.state"]'; 
const addstate = 'Washington DC';

const zipcode = 'input[name="account.zip"]'; 
const zip = '700068';

const country = 'input[name="account.country"]'; 
const coun = 'US';

const favcatergory = '//select[name="account.favouriteCategoryId"]';

const saveacc = 'input[name="newAccount"]';

const cart = '//a[@href="/actions/Cart.action?viewCart="]';  

const updatecart = 'input[name="updateCartQuantities"]';

const cout = '//a[text()="Proceed to Checkout"]';

const ccontinue = 'input[name = "newOrder"]';

const confirm = '//a[text()="Confirm"]';


Scenario("Buy pets from online petstore", async ({ I, PetStore }) => {
  await I.say("Given I have a online pet store ");

  await I.click(cat);
  await I.wait(1);
  await I.click(persian);
  await I.wait(1);
  await I.click(malepersian);
  await I.wait(1);
  await I.click(ccart);
  // await I.wait(1);
  // await petstore.value(cquantitiy, cvalue);
  await I.wait(1);

  await I.click(mainmenu);
  await I.wait(1);

  await I.click(dog);
  await I.wait(1);
  await I.click(labrador);
  await I.wait(1);
  await I.click(femalelab);
  await I.wait(1);
  await I.click(dcart);
  await I.wait(1);  

  await I.click(checkout);
  await I.wait(1);
  await I.click(signin);
  await I.wait(1);
  await I.click(register);

  await I.say('Enter User Name');
  await petstore.value(uid, id);
  
  await I.say('Enter Password');
  await petstore.value(newpswd, pswd);
  
  await I.say('Enter the password again');
  await petstore.value(rptpswd, rpswd);

  await I.say('Enter the first name');
  await petstore.value(fname, firstName);

  await I.say('Enter the last name');
  await petstore.value(lname, lastName);

  await I.say('Enter the email id');
  await petstore.value(email, mail);

  await I.say('Enter the phone number');
  await petstore.value(phone, number);

  await I.say('Enter the address 1');
  await petstore.value(address1, add1);

  await I.say('Enter the address 2');
  await petstore.value(address2, add2);

  await I.say('Enter the city');
  await petstore.value(address1, add1);

  await I.say('Enter the mobile number of the student');
  await petstore.value(city, addcity);

  await I.say('Enter the state');
  await petstore.value(state, addstate);

  await I.say('Enter the zipcode');
  await petstore.value(zipcode, zip);

  await I.say('Enter the country');
  await petstore.value(country, coun);
  
  // await I.say('When I click on favourite category');
	// await petstore.dropfav();
  // await I.say('click on dogs in the dropdown');
	// await petstore.fselect();
	// await I.wait(2);

  await I.click(saveacc);
  await I.wait(2);

  await I.click(cart);
  await I.wait(1);
  await I.click(cout);
  await I.wait(1);
  await I.click(ccontinue);
  await I.wait(1);
  await I.click(confirm);
  await I.wait(1);


});


Scenario('Add item to cart and verify', async ({ I, PetStore }) => {
  
  const productName = await PetStore.addFirstProductToCart();
  const cartItem = await PetStore.getCartItem(productName);

  await I.assert.strictEqual(cartItem.name, productName);

  await I.assert(cartItem.price > 0);
});

Scenario.only('Buy pets and checkout', async ({ I, PetStore }) => {

  await I.click(cat);
  await I.wait(1);
  await I.click(persian);
  await I.wait(1);
  await I.click(malepersian);
  await I.wait(1);
  await I.click(ccart);
  await I.wait(1);

  await I.click(mainmenu);
  await I.wait(1);

  await I.click(dog);
  await I.wait(1);
  await I.click(labrador);
  await I.wait(1);
  await I.click(femalelab);
  await I.wait(1);
  await I.click(dcart);
  await I.wait(1);  

  const pet1 = await I.grabTextFrom(await I.waitForElement('xpath=//form[method="post"]//td[text()="Adult Female Labrador Retriever"]'));
  const pet2 = await I.grabTextFrom(PetStore.pet2);
  await I.assert.strictEqual(pet1, 'Adult Male Persian');
  await I.assert.strictEqual(pet2, 'Adult Female Labrador Retriever');

  await I.assertCartItems(PetStore);
  await I.assertShippingAddress(PetStore);
});



