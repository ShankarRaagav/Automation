const Helper = require("@codeceptjs/helper");
class MyPlaywright extends Helper {
  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getAttributeValue(loc, attr) {
    const { page } = this.helpers.Playwright;

    const el = page.locator(loc);
    const val = await el.getAttribute(attr);
    return val;
    // page.locator('//div[@id="table-row-5_table-col-1"]').click();
    /*  const els = await Playwright._locate(locator);
    Playwright.click(locator);  
    for (let el of els) {
      var val=await el.getAttribute('style');      
        return val */

    /*   const el=page.locator('//div[@id="table-row-5_table-col-1"]//span[@role="cell"]')
    var val=await el.getAttribute('style');      
      return val */
  }

  async presskeyevent(keyval) {
    const { page } = this.helpers.Playwright;
    await page.keyboard.press(keyval);
  }
}
module.exports = MyPlaywright;
