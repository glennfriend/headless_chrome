const puppeteer = require('puppeteer');

// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------
async function news()
{
    const url = "http://disp.cc/b/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => {
        for (let i = 0; i < msg.args.length; ++i) {
            console.log(`${i}: ${msg.args[i]}`);
        }
    });

    //
    await page.goto(url);
    const rows = await page.evaluate(() => {

        const len = document.querySelectorAll("#ht_content .ht_row").length;
        console.log('total count: ' + len);

        let words = [];
        for (let i=1; i<=len; i++) {
            let text = document.querySelector("#ht_content > div:nth-child(" + i + ") > span.ht_title > a").innerHTML;
            words.push(text);
        }
        return words;
    });

    //
    browser.close();
    return rows;
}

module.exports = {
    run: news
};