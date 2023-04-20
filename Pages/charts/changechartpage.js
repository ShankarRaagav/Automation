// enable I and another page object
const { I } = inject();

//const log = require("../../config/logging").default;
//const settingBorder = require('../../pages/Annotation/AnnotationSettingsBorder.js');

const emailid = 'shankarra@lumel.com';
const password = 'Shankar@19';


module.exports = {

  //createAnnotation: '//div[contains(@class,"sub-menu-icon-display")]//span[@class= "infoRiver light-comment subMenuIcon"]',
  signin: '//a[@id="hero_CTA-2_have-an-account-sign-in"]',
  email: '//input[@type="email"]',
  submit: '//button[@id="submitBtn"]',
  usepaswd: '//a[@id="idA_PWD_SwitchToPassword"]',
  enterpaswd: '//input[@id="i0118"]',
  nosignedin: '//input [@id="idBtn_Back"]',
  test: '//span[@data-value="test"]',
  edit: '//button[@id="editBtn"]',
  collapsefilter: '//button[@class="btn collapseIcon pbi-borderless-button glyphicon glyph-mini pbi-glyph-doublechevronright"]',
  lollipopchart: '//span[@class="inforiver-charts light-pin-portrait icon-button"]',
  verticallollipop: '(//div[@role="button"]//span[@class="chart-list-icon"] ) [12]',
  settings: '//span[@class="inforiver-charts light-settings icon-button"]',
  custom: ' //div[@class="custom-dropdown-wrapper themeSelect"] //div[text()="Custom"]',
  legend: ' //span[text()="Legend"] ',
  showlegend: ' //label[@class="bf-ui-form-switch form-switch"] //input[@aria-checked="false"]',
  chart: '//div[@class="popover-container"]//div[@class="toolbar_composite_button dropwDownButton columnbutton mr_0"]',


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

  dragElement: '(//div[text()="AC"])[2]',
  dropZone: '(//div[text()="Add data fields here"])[1]',


  async selectElements() {
    this.dragElement = await this.popup.$('#drag-element');
    this.dropZone = await this.popup.$('#drop-zone');
  },


  async Option()
  {
    var opt = await I.grabTextFromAll('(//div[@class="custom-dropdown-current-option-wrapper"])[1]');
    let i;
    console.log("Show item selected");
    for (i=0; i<opt.length; i++)
    {
      let str = opt[i];
      console.log(str);
    }
    assert(str, "pass");
  },


  async itemselect()
  {
    await I.selectOption('(//div[@class="custom-dropdown-current-option-wrapper"])[1]', "Top");
  },


};


