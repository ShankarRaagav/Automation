const assert = require("assert");

const I = actor();


const Male = 'input[id="gender-radio-1"]'; 
const music = 'input[id="hobbies-checkbox-3"]';


module.exports = {

  goto() {
    I.amOnPage("https://demoqa.com/automation-practice-form");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
    //I.waitForVisible("span#blogsmenu");
  },

  

  async value(loc,val)
  {
    I.fillField(loc,val);
  },

  async gender(loc)
  {
    await I.click('Male');
  },


  async hobby(loc)
  {
    await I.click('Music');
  },

  async name(loc,val)
  {
    I.fillField(loc,val);
    let i = I.
  },


 

  
};
