const puppeteer = require('puppeteer');

const input = {
    'keyword': '聖誕快樂',
    'keyword': 'merry christmas',
};

const SEARCH_INPUT = "[name=q]";
// const SEARCH_BUTTON = "[name=btnK]";


var shotCounter = 0;
function getShotConfig()
{
    shotCounter++;
    return {
        path: 'google_click_' + shotCounter + '.jpg',
        clip: {
            quality: 10,
            x:0, y:0,
            width:1200, height:1300,
        },
    };
}

// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------
async function run()
{
    const url = "https://www.google.com.tw/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => {
        for (let i = 0; i < msg.args.length; ++i) {
            console.log(`${i}: ${msg.args[i]}`);
        }
    });

    //
    await page.goto(url);

    await page.click(SEARCH_INPUT);
    await page.keyboard.type(input.keyword);
    // await page.screenshot(getShotConfig());

    await page.keyboard.press('Enter')
    await page.waitForNavigation({
        waitUntil: 'networkidle2'
    });
    await page.screenshot(getShotConfig());

    const rows = await page.evaluate(() => {
        console.log(document.title);
        const len = document.querySelectorAll("div.rc > :nth-child(1)").length;

        let words = [];
        for (let i=0; i<len; i++) {
            words.push(
                document.querySelectorAll("div.rc > :nth-child(1)")[i].innerText
            );
        }
        return words;
    });

    //
    browser.close();
    return rows;
}

module.exports = {
    run: run
};