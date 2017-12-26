// cls && node app.js && start example.png
const puppeteer = require('puppeteer');
const disp = require('./pages/disp.js');
const google_click = require('./pages/google_click.js');

// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------

// 截圖
class shot {

    static async sample (url, filename='example.jpg') {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });
        await page.screenshot({ path: filename, quality: 20, clip: {x:0, y:0, width:1200, height:1000} });
        browser.close();
    }

    static async good (url, filename='example.jpg') {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });
        await page.screenshot({ path: filename, quality: 80, clip: {x:0, y:0, width:1200, height:1000} });
        browser.close();
    }

}

// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------
/*

//
(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on("console", (...args) => console.log("PAGE LOG:", ...args));
    await page.goto("https://news.ycombinator.com");
    const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll(".storylink"));
        return anchors.map(anchor => anchor.textContent);
    });
    console.log(links.join("\n"));
    browser.close();
})();


//
page.waitForNavigation是一个很关键的功能。我们可以等到页面加载完毕，因为 promise 只会在点击事件完成后结束。
const puppeteer = require("puppeteer");
(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com", { waitUntil: "networkidle" });
    await page.click("a.storylink");
    var response = await page.waitForNavigation({ waitUntil: "networkidle" });
    console.log(await page.title());
    console.log(page.url());
    browser.close();
})();


//
await page.goto("https://news.ycombinator.com", { waitUntil: "networkidle" });
const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll(".storylink"));
    return anchors.map(anchor => anchor.textContent);
});

*/

// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------
(function()
{
    main();
})();

function main()
{
    // shot.sample('https://www.google.com.tw/search?q=merry+christmas');

    /*
    disp.news().then((rows) => {
        console.log("\n" + rows.join("\n"));
    });
    */


    google_click.run().then((rows) => {
        console.log("\n" + rows.join("\n"));
    });

}
