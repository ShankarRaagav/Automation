const I = actor();

const assert = require('assert');

module.exports = {


    goto() 
    {
        I.amOnPage("https://the-internet.herokuapp.com/broken_images");  
        I.refreshPage();
        I.executeScript(() => sessionStorage.clear());
        I.executeScript(() => console.error("Boom!"));
     
    },


    async grabImgs()
    {
        return urls = I.grabAttributeFrom('//*/div/img','src');
    },

    async filterWorkingImgs(urls)
    {
        let exp = /.*\.com\/(img\/)[A-Za-z-]*\.jpg/g;
 
        return workingUrls = urls.filter(url => 
        {
            return url.match(exp);
        });
    },

    async filterBrokenImgs(urls)
    {
        let exp = /.*\.com\/(img\/)[A-Za-z-]*\.jpg/g;

        return brokenUrls = urls.filter(url => 
            {
            return !url.match(exp);
        });
    },

    async printoConsole(urls, color)
    {
        for (let url of urls) 
        {
            I.say(url,color)
        }
    }
}