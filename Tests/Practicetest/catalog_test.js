Feature('Petstore Catalog');

const assert = require('assert');
const { I } = inject();

Scenario('Add a dog and a cat to the cart', async () => {
  // I.amOnPage('https://petstore.octoperf.com/actions/Catalog.action');

  // // Add a dog to the cart
  // const dogLink = locate('div[id="Catalog"] a').withAttr({ href: /itemId=.*-DOG-.*$/ });
  // const dogName = await I.grabTextFrom(locate('div[id="Catalog"] h2').inside(dogLink));
  // I.click(dogLink);
  // I.click('Add to Cart');
  // I.see('Item(s) added to your cart.');
  // I.click('Proceed to Checkout');

  // // Verify that the dog is in the cart
  // const dogRow = locate('table.cartTable tr').withText(dogName);
  // assert(await I.grabTextFrom(dogRow), dogName);

  // // Go back to the catalog page
  // I.click('a').withText('Return to Main Menu');
  // I.click('a').withText('Enter the Store');

  // // Add a cat to the cart
  // const catLink = locate('div[id="Catalog"] a').withAttr({ href: /itemId=.*-CAT-.*$/ });
  // const catName = await I.grabTextFrom(locate('div[id="Catalog"] h2').inside(catLink));
  // I.click(catLink);
  // I.click('Add to Cart');
  // I.see('Item(s) added to your cart.');
  // I.click('Proceed to Checkout');

  // // Verify that the cat is in the cart
  // const catRow = locate('table.cartTable tr').withText(catName);
  // assert(await I.grabTextFrom(catRow), catName);


  I.amOnPage('https://petstore.octoperf.com/actions/Catalog.action');
  I.see('Welcome to the pet store');
  I.click('Enter the Store');
  I.see('Fish');
  I.click('Sign In');
  I.fillField('username', 'j2ee');
  I.fillField('password', 'j2ee');
  I.click('Login');
  I.see('j2ee');

  // Add a dog to the cart
  I.click('Dogs');
  I.click('K9-CW-01');
  I.see('Golden Retriever');
  I.click('Add to Cart');
  I.see('Item(s) added to your cart');

  // Add a cat to the cart
  I.click('Cats');
  I.click('FL-DLH-02');
  I.see('Persian');
  I.click('Add to Cart');
  I.see('Item(s) added to your cart');

  // Verify that the items were added to the cart
  I.click('View your cart');
  I.see('Your Shopping Cart');
  I.see('K9-CW-01');
  I.see('FL-DLH-02');
});
