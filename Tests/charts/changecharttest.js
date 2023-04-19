Feature("Change Charts");

const { I } = inject();
const { event } = require('codeceptjs');
const { config } = require('../../codecept.conf');

//const parallelRun = require('../../pages/ParallelRunBase')  // in the import statement 

const Report_url ="https://app.powerbi.com/groups/me/reports/16b5df8d-646b-4e6e-99a5-8d777fdfcea5/ReportSection";
//const loginUtils = require('../../pages/LoginUtils');
const lchart = require('../../pages/charts/changehchartpage.js')

// const settingBorder = require('../../pages/Annotation/AnnotationSettingsBorder.js')
// const settingMarker = require('../../pages/Annotation/AnnotationSettingsMarker.js')
// const settingIndicator = require('../../pages/Annotation/AnnotationSettingsIndicator.js')
// const vrtlUtils = require('../../utils/vrtUtils')
// const allignment = require('../../pages/Annotation/AnnotationSettingsTextAlign.js')

const emailid = 'shankarra@lumel.com';
const password = 'Shankar@19';

Before(async ({ I, ChartChange }) => 
{
	DemoQa.goto();
});


Scenario('Change the chart to lollipop chart', async ({I, ChartChange }) => 
{
  await I.say('Login to change the chart');
  await I.click('signin');
  await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(lchart.email, emailid);

  await I.click('submit');
  await I.wait(1);

  await I.click('usepaswd');
  await I.wait(1);
  await I.click('enterpaswd');
  await lchart.value(lchart.enter, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click('test');
  await I.wait(1);
  await I.click('edit');
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click('collapsefilter');
  await I.wait(1);
  await I.say('Change the selected chart');
  await I.click('lollipopchart');
  await I.wait(1);
  await I.say('Select vertical lollipop chart');
  await I.click('verticallollipop');
  await I.wait(1);
  
});


Scenario ('Change the existing format to IBCS', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  await I.click('signin');
  await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(lchart.email, emailid);

  await I.click('submit');
  await I.wait(1);

  await I.click('usepaswd');
  await I.wait(1);
  await I.click('enterpaswd');
  await lchart.value(lchart.enter, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click('test');
  await I.wait(1);
  await I.click('edit');
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click('collapsefilter');
  await I.wait(1);

  await I.say('Change the selected format');
	await lchart.dropoption();
	await I.say('click on IBCS in the dropdown');
	await doc1.select();
	await I.wait(2);
}
);

Scenario ('Add Legend to the chart', async ({I, ChartChange}) => 
{
  await I.say('Login to change the chart');
  await I.click('signin');
  await I.wait(1);

  await I.say('Enter the the email id');
  await lchart.value(lchart.email, emailid);

  await I.click('submit');
  await I.wait(1);

  await I.click('usepaswd');
  await I.wait(1);
  await I.click('enterpaswd');
  await lchart.value(lchart.enter, password);
  await I.wait(1);

  await I.say('Choosing the dataset');
  await I.click('test');
  await I.wait(1);
  await I.click('edit');
  await I.wait(1);

  await I.say('Minimizing the filter panel');
  await I.click('collapsefilter');
  await I.wait(1);

  await I.say('Add legend to the chart');
  await I.click('legend');
  await I.wait(1);
  await I.click('showlegend');
  await I.wait(1);


}
);

