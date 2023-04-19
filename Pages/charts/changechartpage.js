// enable I and another page object
const { I } = inject();

//const log = require("../../config/logging").default;
//const settingBorder = require('../../pages/Annotation/AnnotationSettingsBorder.js');

const emailid = 'shankarra@lumel.com';
const password = 'Shankar@19';


module.exports = {

  //createAnnotation: '//div[contains(@class,"sub-menu-icon-display")]//span[@class= "infoRiver light-comment subMenuIcon"]',
  signin: '//a[@id="hero_CTA-2_have-an-account-sign-in"]',
  email: '//input[@id="email"]',
  submit: '//button[@id="submitBtn"]',
  usepaswd: '//a[@id="idA_PWD_SwitchToPassword"]',
  enterpaswd: '//input[@id="i0118"]',
  nosignedin: '//input [@id="idBtn_Back"]',
  test: '//span[@data-value="test"]',
  edit: '//button[@id="editBtn"]',
  collapsefilter: '//button[@class="btn collapseIcon pbi-borderless-button glyphicon glyph-mini pbi-glyph-doublechevronright"]',
  lollipopchart: '//span[@class="inforiver-charts light-pin-portrait icon-button"]',
  verticallollipop: '//span[@class="chart-list-icon"]',
  settings: '//span[@class="inforiver-charts light-settings icon-button"]',
  custom: ' //div[@class="custom-dropdown-wrapper themeSelect"] //div[text()="Custom"]',
  legend: ' //span[text()="Legend"] ',
  showlegend: ' //label[@class="bf-ui-form-switch form-switch"] //input[@aria-checked="false"]',
  


  /**
   * click Create in Annotation dropdown
   *
   */

   goto() 
   {
    I.amOnPage("https://powerbi.microsoft.com/en-gb/");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
   },


  async value(loc, val) 
  {
    await I.fillField(loc, val);

  },


  async select()
  {
    await I.selectOption("custom", "IBCS");
  },


  async dropoption()
  {
    var opt = await I.grabTextFromAll('custom');
    let i;
    console.log("Display format:");
    for (i=0; i<opt.length; i++)
    {
      let str = opt[i];
      console.log(str);
    }
    assert(str, "pass");

  },


};


