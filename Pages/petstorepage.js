const assert = require("assert");
const { elements } = require("./dtable");

const I = actor();

const favcatergory = '//select[name="account.favouriteCategoryId"]';
const cat = '(//a[@href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] ) [2]';
const persian = '//a[text()="FL-DLH-02"]';
const malepersian = '//a[text()="EST-17"]';
const ccart = '//a[text()="Add to Cart"]';

module.exports = {

  goto() {
    I.amOnPage("https://petstore.octoperf.com/actions/Catalog.action");  
    I.refreshPage();
    I.executeScript(() => sessionStorage.clear());
    I.executeScript(() => console.error("Boom!"));

  },

  

  async value(loc,val)
  {
    I.fillField(loc,val);
  },

  async fselect()
  {
    await I.selectOption("select[name='account.favouriteCategoryId']", "DOGS");
  },


  async dropfav()
  {
    var opt = await I.grabTextFromAll("select[name='account.favouriteCategoryId']");
    let i;
    console.log("Older newsletter dropdown options are:");
    for (i=0; i<opt.length; i++)
    {
      let str = opt[i];
      console.log(str);
    }
    assert(str, "pass");
  },

  async addFirstProductToCart () 
  {
    I.click(cat);
    I.wait(1);
    I.click(persian);
    I.wait(1);
    I.click(malepersian);
    I.wait(1);
    I.click(ccart);
    const productName = await I.grabTextFrom('div[id*=Catalog] h2');
    I.click('input[value=Add to Cart]');
    return productName;
  },

  async getCartItem (productName) 
  {
    const cartIcon = locate('div[id*=Cart] a').withChild('img');
    I.click(cartIcon);
    const cartItem = locate('table[id*=Cart] tbody tr').withChild('td').withText(productName);
    const name = await I.grabTextFrom(cartItem.find('td:nth-child(2)'));
    const price = parseFloat(await I.grabTextFrom(cartItem.find('td:nth-child(3)')).replace('$', ''));
    return { name, price };
  },

  async assertCartItems(PetStore) {
    const cartItems = await PetStore.grabTextFrom('.cart-item');
    assert.equal(cartItems.length, 2, 'Number of items in cart is incorrect');
    assert.equal(cartItems[0], 'Male Persian', 'First item in cart is incorrect');
    assert.equal(cartItems[1], 'Female Labrador', 'Second item in cart is incorrect');
  },

  async assertShippingAddress(PetStore) {
    const shippingAddress = await PetStore.grabTextFrom('.shipping-address');
    assert.include(shippingAddress, 'John Doe', 'Shipping address name is incorrect');
    assert.include(shippingAddress, '123 Main St', 'Shipping address street is incorrect');
    assert.include(shippingAddress, 'Anytown', 'Shipping address city is incorrect');
    assert.include(shippingAddress, 'CA', 'Shipping address state is incorrect');
    assert.include(shippingAddress, '12345', 'Shipping address zipcode is incorrect');
    assert.include(shippingAddress, 'USA', 'Shipping address country is incorrect');
  },




};


