const assert = require("assert");


const I = actor();




module.exports = {

  goto() {
    I.amOnPage("https://demoqa.com/webtables");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));
 
  },

  fields: 
  {
    searchInput: '#searchBox',
  },

  elements: 
  {
    tableRow: '//div[@role="gridcell" and text() = "Cierra"]',
    tabRow: '//div[@role="row"]',
    noResults: '//div[text()="No rows found"]', 
    editButton: '//span[@id="edit-record-1"]',
    firstNameInput: '//input[@id="firstName"]',
    submitButton: '//button[@id="submit"]',
    value: (rowIndex, columnIndex) => `//div[@role="row"][${rowIndex}]//div[@role="gridcell" and text()="Cierra"][${columnIndex}]`,
  },

  async search(query) 
  {
    await I.fillField(this.fields.searchInput, query);
    await I.pressKey('Enter');
    await I.waitForFunction(() => document.querySelectorAll('div[role="row"]').length > 1);
  },

  async isWordNotInTable(word) 
  {
    try 
    {
      await I.waitForElement(this.elements.tabRow);
    } 
    catch (error) 
    {
      await I.seeElement(this.elements.noResults);
      return true;
    }

    const tabRow = await I.grabTextFromAll(this.elements.tabRow);
    return !tabRow.some((row) => row.includes(word));
  },

  async value(loc,val)
  {
    I.fillField(loc,val);
  },


  async isWordInTable(word) 
  {
    try 
    {
      await I.waitForElement(this.elements.tableRow);
    } 
    catch (error) 
    {
      return false;
    }

    const tableRows = await I.grabTextFromAll(this.elements.tableRow);
    return tableRows.some((row) => row.includes(word));
  },

  async getCellValue(rowIndex, columnIndex) 
  {
    try 
    {
      await I.waitForElement(this.elements.tableRow);
    } 
    catch (error) 
    {
      return null;
    }

    const cellSelector = this.elements.value(rowIndex, columnIndex);
    return await I.grabTextFrom(cellSelector);
  },

  // async editCellValue(rowIndex, columnIndex, value) 
  // {
  //   const editButtonSelector = this.elements.editButton.replace(']', `][${rowIndex}]`);
  //   const firstNameInputSelector = this.elements.firstNameInput.replace(']', `][${rowIndex}]`);
  //   const saveButtonSelector = this.elements.saveButton.replace(']', `][${rowIndex}]`);

  //   await I.click(editButtonSelector);
  //   await I.fillField(firstNameInputSelector, value);
  //   await I.click(saveButtonSelector);
  //   await I.waitForFunction(() => !document.querySelector(this.elements.firstNameInput));
  // },


};


