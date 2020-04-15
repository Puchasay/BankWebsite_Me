module.exports = function() {
 
    function $(selector){
      return driver.findElement(by.css(selector));
    }
   
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    this.Given(/^we loaded our web page$/, async function () {
        let result=await helpers.loadPage("http://localhost:3000")// Write code here that turns the phrase above into concrete actions
         assert(result,"could not load the page");
       });
   
  

   // this.Given(/^we loaded our web page$/, function () {
       // assert (result, 'could not load the web page');
     // });


this.When(/^I click the search button$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    let button = await $('#search-button');
    let result = await button.click();
    await sleep(100);
    assert(result, 'Could not click the button');
   
  });

  this.Then(/^the body background color should be blue$/, async function () {
    let body = await $('body')
    let bgColor = await body.getCssValue('background-color');
    assert(bgColor === 'blue', 'Body background color is not blue, it is ' + bgColor)
  });

}