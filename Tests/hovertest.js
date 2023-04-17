Feature('Hover');

const hover = require("../pages/hoverpage.js");



const assert = require('assert');

Before(async ({ I, Hoverto }) => {
  Hoverto.goto();
});




Scenario('Hover avatar for more info', async ({I, Hoverto}) => 
{
  await I.see('Hovers');
  await I.see('Hover over the image for additional information');
  let avatarsNum = await hover.getAvatarsNum();
  await I.say(`There are ${avatarsNum} avatars to test. \n`);
  await I.say('Looping through avatars:');
  await hover.hoverEach(avatarsNum);
});