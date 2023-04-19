const I = actor();

const assert = require ('assert')

module.exports = 
{

  goto() {
    I.amOnPage("https://the-internet.herokuapp.com/hovers");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
 
  },


  async getAvatarsNum() 
  {
    return I.grabNumberOfVisibleElements('//div[@class="figure"][@*]')
  },
    
  async hoverEach(avatarsNum) 
  {
    for (let i = 1; i <= avatarsNum; i++) 
    {
      await I.say('');
      await I.say(` Hovering avatar #${i}`);
      let element = `//div[@class="figure"][${i}]`;
      await I.moveCursorTo(element);            
      let userName = await I.grabTextFrom(`${element}/div/h5`);
      await I.see(userName);
      let userRef = await I.grabAttributeFrom(`${element}/div/a`,'href');
      await I.seeElement(`${element}/div/a`);
      await I.say('');
      await I.say(`The following text appears when hovering avatar #${i}`);
      await I.say(` ${userName}`);
      await I.say(` ${userRef}`);
      await I.wait(1); 
    }
  }
}