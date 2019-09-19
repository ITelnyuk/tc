module.exports = {
    'buerquest: add to the cart test' : function (browser) {
        browser
            .url('https://dev.buyerquest.net/largedata1')
            .waitForElementVisible('body', 6000)
            .waitForElementVisible('#login_id', 6000)
            .setValue('#login_id', 'mcollins')
            .setValue('#pass', 'mcollins')
            .waitForElementVisible('#send2')
            .click('#send2')
            //.pause(3000)
            .waitForElementVisible('#content > div > div > div > div > div:nth-child(1) > a')
            .click('#content > div > div > div > div > div:nth-child(1) > a')
            .url('https://dev.buyerquest.net/largedata1/catalog/product/view/id/1480149/')
            .useXpath()
            .waitForElementVisible('//*[@class="btn btn-primary one-click"]',6000)
            .click('//*[@class="btn btn-primary one-click"]')
            //.wait(6000)
            .pause (6000)
            .url('https://dev.buyerquest.net/largedata1/checkoutlite/summary/')
            .useCss()
            .waitForElementVisible('#submit_button', 6000)
            .click('#submit_button')
            .pause (6000)
            .assert.containsText('#main-content > div.checkout-success-page > div:nth-child(1) > div > h1', 'request has been submitted')
            .end();
    }
};
