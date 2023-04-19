Feature('Web Driver');

const assert = require('assert');
const Webdrive = require("../Pages/webdriverpage.js");


Before(async ({ I, WebDriver }) => {
  WebDriver.goto();
  });


Scenario('Drags the Drag me box', async ({I, WebDriver}) => 
{
  await I.say('When I drag the element');
  await Webdrive.dragTo(300, 100);
  await I.wait(2);
});


Scenario('To check Drags the "Drag me" box', async ({I, Webdrive}) => 
{
  const initialPosition = await actionsPage.getDragMeBoxPosition();
  await Webdrive.dragTo(300, 200);
  const finalPosition = await Webdrive.getDragMeBoxPosition();
  const expectedX = initialPosition.x + 300;
  const tolerance = 5; 
  await I.expect(finalPosition.x).to.be.closeTo(expectedX, tolerance);
  });