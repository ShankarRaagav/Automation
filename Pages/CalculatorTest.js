Feature('Calculator');

const assert = require('assert');
const calcupage = require("../Pages/CalculatorPage.js");


Before(async ({ I, Calculator }) => {
    Calculator.goto();
  });


// Scenario('addition test', async (I,) => {
// const result = await calcupage.calculate('add', 2, 3);
// await I.assertEqual(result, '5');
// });

// Scenario('division test', async () => {
// const result = await calcupage.calculate('divide', 6, 2);
// await I.assertEqual(result, '3');
// });



Scenario('Addition test', async({I, Calculator}) => 
{
    calcupage.calculate(5, 10, '+');
    const result = await calcupage.getResult();
    await I.assertEqual(result, '15');
});
  

Scenario.only('Subtraction test', async ({I, Calculator}) => 
{
    calcupage.calculate(10, 5, '-');
    const result = await calcupage.getResult();
    await I.assertEqual(result, '5');
  });