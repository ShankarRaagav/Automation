const { I } = inject();
const { event } = require('codeceptjs');
const { config } = require('../../codecept.conf');
const { popup, dragElement, dropZone } = require('../../Pages/charts/changechartpage.js');

//const parallelRun = require('../../pages/ParallelRunBase')  // in the import statement 

const Report_url ="https://app.powerbi.com/groups/me/reports/16b5df8d-646b-4e6e-99a5-8d777fdfcea5/ReportSection";
//const loginUtils = require('../../pages/LoginUtils');
const lchart = require('../../Pages/charts/changechartpage.js');

// const settingBorder = require('../../pages/Annotation/AnnotationSettingsBorder.js')
// const settingMarker = require('../../pages/Annotation/AnnotationSettingsMarker.js')
// const settingIndicator = require('../../pages/Annotation/AnnotationSettingsIndicator.js')
// const vrtlUtils = require('../../utils/vrtUtils')
// const allignment = require('../../pages/Annotation/AnnotationSettingsTextAlign.js')

const emailid = 'shankarra@lumel.com';
const password = 'Shankar@19';
const signin = '//a[id="hero_CTA-2_have-an-account-sign-in"]';
const email = '//input[type="email"]';
const submit = '//button[id="submitBtn"]';
const usepaswd = '//a[id="idA_PWD_SwitchToPassword"]';
const enterpaswd = '//input[id="i0118"]';
const nosignedin = '//input[id="idBtn_Back"]';
const test = '//span[data-value="test"]';
const edit = '//button[id="editBtn"]';
const collapsefilter = '//button[class="btn collapseIcon pbi-borderless-button glyphicon glyph-mini pbi-glyph-doublechevronright"]';
const lollipopchart = '//span[@lass="inforiver-charts light-pin-portrait icon-button"]';
const verticallollipop = '(//div[role="button"]//span[class="chart-list-icon"] ) [12]';
const settings = '//span[class="inforiver-charts light-settings icon-button"]';
const custom = ' //div[class="custom-dropdown-wrapper themeSelect"] //div[text()="Custom"]';
const legend = ' //span[text()="Legend"] ';
const showlegend = ' //label[class="bf-ui-form-switch form-switch"] //input[aria-checked="false"]';
const chart = '//div[class="popover-container"]//div[class="toolbar_composite_button dropwDownButton columnbutton mr_0"]';
const manage= '//span[id="columnAsMeasure_icon"]';
const IBCS = '(//label[@class="bf-ui-form-switch form-switch dl-switch-sm"])[1]';
const AC = '(//div[text()="AC"])[2]';
const drop = '(//div[text()="Add data fields here"])[1]';
const topn = '//span[id="ranking"]'
const axis = '//div[class="side-panel-navigation-node  "]';
const apply = '//div[@class="action-button action-save-button"]';



Feature("Change Charts");

BeforeSuite(async ({ I }) => {

});




AfterSuite(async ({ I }) => { });


Before(async ({ I }) => {

  await I.amOnPage("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.powerbi.com%2Fsignin&client-request-id=4c4ac120-2f03-4591-9e56-24fc6b874d56&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.25.0&client_info=1&code_challenge=NCGXS4qPM2ACc5b-Zwbpd2ojeO7GxGC1UcXTngNpacc&code_challenge_method=S256&nonce=cc1f0760-331e-45d7-8b3f-6ae7f5e5aa98&state=eyJpZCI6IjUzYjIwODJmLTYyZDEtNGJlZS05NzA5LWI0Y2ExNGIyNjY1OSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7C1681904914833%3B1681904914837.1%3B1681904913377.3&site_id=500453&nux=1&msafed=0");  

  
});

After(async ({ I }) => {

 await I.gotoMainWindow();

})


Scenario('Change the chart to lollipop chart', async ({I, ChartChange }) => 
{
  await I.say('Login to change the chart');
  // await I.click('signin');
  // await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(email, emailid);

  await I.click(submit);
  await I.wait(1);

  await I.click(usepaswd);
  await I.wait(1);
  await lchart.value(enterpaswd, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click(test);
  await I.wait(1);
  await I.click(edit);
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click(collapsefilter);
  await I.wait(1);
  await I.say('Change the selected chart');
  await I.click(lollipopchart);
  await I.wait(1);
  await I.say('Select vertical lollipop chart');
  await I.click(verticallollipop);
  await I.wait(1);
  
});


Scenario('Change the existing format to IBCS', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  // await I.click('signin');
  // await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(email, emailid);

  await I.click(submit);
  await I.wait(1);

  await I.click(usepaswd);
  await I.wait(1);
  await lchart.value(enterpaswd, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click(test);
  await I.wait(1);
  await I.click(edit);
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click(collapsefilter);
  await I.wait(1);

  await I.say('Change the selected format');
	await lchart.dropoption();
	await I.say('click on IBCS in the dropdown');
	await doc1.select();
	await I.wait(2);
}
);

Scenario('Add Legend to the chart', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  // await I.click('signin');
  // await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(email, emailid);

  await I.click(submit);
  await I.wait(1);

  await I.click(usepaswd);
  await I.wait(1);
  await lchart.value(enterpaswd, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click(test);
  await I.wait(1);
  await I.click(edit);
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click(collapsefilter);
  await I.wait(1);

  await I.say('Add legend to the chart');
  await I.click(legend);
  await I.wait(1);
  await I.click(showlegend);
  await I.wait(1);


}
);


Scenario('Change measures in chart', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  // await I.click('signin');
  // await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(email, emailid);

  await I.click(submit);
  await I.wait(1);

  await I.click(usepaswd);
  await I.wait(1);
  await lchart.value(enterpaswd, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click(test);
  await I.wait(1);
  await I.click(edit);
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click(collapsefilter);
  await I.wait(1);

  await I.say('Change measures in chart');
  await I.wait(1);
  await I.click(manage);
  await I.wait(1);
  await I.click(IBCS);
  await I.wait(1);

  await lchart.selectElements();
  await I.dragElement.hover();
  await I.wait(1);
  await I.dragElement.mouse.down();
  await I.wait(1);
  await I.moveCursorTo(drop);
  await I.wait(1);
  await I.dragElement.mouse.up();

});

Scenario('Show items in Top N', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  // await I.click('signin');
  // await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(email, emailid);

  await I.click(submit);
  await I.wait(1);

  await I.click(usepaswd);
  await I.wait(1);
  await lchart.value(enterpaswd, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click(test);
  await I.wait(1);
  await I.click(edit);
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click(collapsefilter);
  await I.wait(1);

  await I.say('When I select Top N');
  await I.click(topn);
  await I.wait(1);
  await I.click(axis);
  await I.wait(1);

  await I.say('show the items');
	await lchart.option();
	await I.say('click on Top in the dropdown');
	await doc1.itemselect();
	await I.wait(2);
  await I.click(apply);
  await I.wait(1);
});