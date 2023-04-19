const assert = require("assert");


const I = actor();



module.exports = {

  goto() {
    I.amOnPage("https://testpages.herokuapp.com/styled/calculator");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));

  },

  // fields:
  //  {
  //   number1: 'button[id="button01"]',
  //   number2: 'button[id="button02"]',
  //   answer: 'input[name="answer"]'
  // },

  // buttons: 
  // {
  //   add: 'input[value="Add"]',
  //   divide: 'input[value="Divide"]'
  // },

  // async calculate(operation, num1, num2) 
  // {
  //   await I.fillField(this.fields.number1, num1);
  //   await I.fillField(this.fields.number2, num2);
  //   await I.click(this.buttons[operation]);
  //   const result = await I.grabValueFrom(this.fields.answer);
  //   return result;
  // }




    fields: 
    {
      firstNumberInput: '//input[@id="number1"]',
      secondNumberInput: '//input[@id="number2"]',
      operatorSelect: '//select[@id="function"]',
      calculateButton: '//input[@id="calculate"]',
      result: '//span[@id="answer"]',
    },
  
    async calculate(firstNumber, secondNumber, operator) 
    {
      I.fillField(this.fields.firstNumberInput, firstNumber);
      I.fillField(this.fields.secondNumberInput, secondNumber);
      I.selectOption(this.fields.operatorSelect, operator);
      I.click(this.fields.calculateButton);
    },
  
    async getResult() 
    {
      return I.grabTextFrom(this.fields.result);
    }


};









