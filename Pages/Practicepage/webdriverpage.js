
const assert = require("assert");


const I = actor();



module.exports = {

  goto() {
    I.amOnPage("http://webdriveruniversity.com/Actions/index.html");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));

  },


  fields: 
  {
    dragMeBox: 'div#draggable',
  },



  async dragTo(xOffset, yOffset) 
  {
    const dragHandle = await I.grabHandle(this.fields.dragMeBox);
    await dragHandle.dragTo(xOffset, yOffset);
  },
 

  async getDragMeBoxPosition() 
  {
    const box = await I.grabElement(this.dragMeBox);
    const position = await box.boundingBox();
    return position;
  },


 
};









