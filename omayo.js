const assert = require("assert");

const I = actor();

const Flipkart = "a[text() = 'Flipkart' ] ";
//const Button1 = 'button#but1';
//const Button2 = 'button#but2';


module.exports = {
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

  async hoverTo()
  {
    await I.moveCursorTo("span#blogsmenu");
  },


  async select()
  {
    await I.click("//span[text()='SeleniumByArun']");
  },

  async validate()
  {
    assert(await I.grabCurrentUrl, "https://selenium-by-arun.blogspot.com/","pass");
  },


  async enable()
  {
    await I.seeElementEnabled('btn2');
  },

  async disable()
  {
    await I.seeElementDisabled('btn1');
  },

  async hoverToBtn1()
  {
    await I.moveCursorTo("button#but1");
  },

  async hoverToBtn2()
  {
    await I.moveCursorTo("button#but2");
  },


  async selectBtn1()
  {
    await I.click("button#but1");
  },

  async validateBtn1()
  {
    await I.seeElement('button#but1'[this.disabled]);
  },

  async selectBtn2()
  {
    await I.click("button#but2");
  },

  async validateBtn2()
  {
    await I.seeElement('button#but2'[this.disabled]);
  },


  async text(loc)
  {
    let str = await I.grabAttributeFrom(loc, 'value');
    console.log('Value retrieved from preloaded text box is: [${str}]');
  },

  async check()
  {
    let ctrUrl = I.grabCurrentUrl();
    console.log('Current URL is [${ctrUrl}]');
    let str = await I.grabAttributeFrom('input.gsc-input', 'value');
    console.log('Entered text in the searchbox is [${str}]');
    let result = ctrUrl.includes(str);
    assert(result, "pass");
    
  },


  async selectflip()
  {
    await I.click('Flipkart');
  },

  async validateflip()
  {
    assert(await I.grabCurrentUrl, "http://flipkart.com/","pass");
  },

  async dselect()
  {
    await I.selectOption("select#drop1", "doc 1");
  },


  async dropdisplay()
  {
    var opt = await I.grabTextFromAll('select#drop1');
    let i;
    console.log("Older newsletter dropdown options are:");
    for (i=0; i<opt.length; i++)
    {
      let str = opt[i];
      console.log(str);
    }
  },


  async frame()
  {
    await I.scrollTo('text=Iframe1 & Iframe2');
    await I.switchTo("//iframe[@id='iframe2']");
    console.log('Iframe1 is switched to Iframe2');
    await I.wait(2);
    let i = I.grabTextFrom('#iframe2');
    console.log('[${i}]');
    assert("Error", i, "pass");
  },

  async btncheck()
  {
    let x = I.grabTextFrom("//h2[text()='Enabled Button']");
    console.log(x);
    if((await x).includes("Enabled"))
    {
      console.log('Button 2 is enabled');
    }
    else
    {
      console.log('Button 2 is diabled');
    }
    await I.wait(2);

    let y = I.grabTextFrom("//h2[text()='Disabled Button']");
    console.log(y);
    if((await y).includes("Disabled"))
    {
      console.log('Button 1 is disabled');
    }
    else
    {
      console.log('Button 1 is enabled');
    }
  },

  async table()
  {
    await I.scrollTo('text=table');
    let val = I.grabTextFromAll("(//div[@class='widget-content'])[5]//table/tr");
    let i;
    console.log("Table contents are: ");
    for(i=0; i<val.length; i++)
    {
      let eachval = val[i];
      console.log(eachval);
    }
  },

  
};
