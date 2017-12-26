const puppeteer = require('puppeteer');

// --------------------------------------------------------------------------------
//  本程式未經測試
//  參考自 https://github.com/GoogleChrome/puppeteer/issues/515
// --------------------------------------------------------------------------------
async function run()
{
    const url = "https://google.com";
    const chromeDir = "/var/www/my_project/node_modules/puppeteer/.local-chromium/linux-515411/chrome-linux/chrome";
    const browser = await puppeteer.launch({
        executablePath: chromeDir,
        headless: true,
        args: ['--no-sandbox', '--disable-gpu', '--disable-setuid-sandbox', '--trace-warnings', '--single-process']
    });

    const page = await browser.newPage();
    await page.goto(url);
    browser.close();
}

module.exports = {
    run: run
};