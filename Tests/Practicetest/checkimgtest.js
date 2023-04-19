Feature('Avatar Images');

const chkimg = require("../Pages/checkimgpage.js");

const assert = require('assert');

Before(async ({ I, CheckImage }) => 
{
    CheckImage.goto();
});


Scenario('Evaluate broken Images', async ({I, CheckImage}) => {
    
    await I.seeTitleEquals('The Internet');
    await I.seeTextEquals('Broken Images', 'h3');

    const listOfImgsUrls = await chkimg.grabImgs()
    await I.say(`\n`)
    await I.say(`There are ${listOfImgsUrls.length} images on the page`,'grey');
    await chkimg.printoConsole(listOfImgsUrls, 'grey');

    const brokenUrls  = await chkimg.filterBrokenImgs(listOfImgsUrls);
    const workingUrls  = await chkimg.filterWorkingImgs(listOfImgsUrls);

    await I.say(`\n`);
    await I.say(`There are ${brokenUrls.length} broken images:`,'red');
    await chkimg.printoConsole(brokenUrls, 'red');
    await I.say(`\n`)
    await I.say(`There are ${workingUrls.length} working images:`,'green');
    await chkimg.printoConsole(workingUrls, 'green');
});