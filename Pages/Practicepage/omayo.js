const assert = require("assert");

const I = actor();

const Flipkart = "a[text() = 'Flipkart' ] ";
//const Button1 = 'button#but1';
//const Button2 = 'button#but2';


module.exports = {


  username:  'input[name="userid"]',
  email: 'raagav@gmail.com',
  paswd: 'input[name="pswrd"]',
  pass: '010996',
  login: '#form input[type="button"]',
  content: 'textarea[cols="80"]',
  text: 'Welcome to Omayo Blogspot. Please share you thoughts with our blog!!!',
  //const blogs = 'span[id="blogsmenu"]',
  //const Button1 = 'button#but1',
  //const Button2 = 'button#but2',
  svalue: "subscribe",
  sbox: 'input.gsc-input',
  Search: 'input.gsc-search-button',
  Dropdown: 'button.dropbtn',
  preloadtext: '#textbox1',


  goto() {
    I.amOnPage("http://omayo.blogspot.com/");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
    I.waitForVisible("span#blogsmenu");
  },

  

  async value(loc,val)
  {
    I.fillField(loc,val);
  },

 

  
};
