const puppeteer = require("puppeteer-core");

const scrape = async (url) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,

            executablePath:
                "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        });
        const page = await browser.newPage();
        await page.goto(url, {
            waitUntil: "load",
            // Remove the timeout
            timeout: 0,
        });
        //await page.setDefaultNavigationTimeout(0);

        const [el] = await page.$x('//*[@id="title"]');
        const text = await el.getProperty("textContent");
        const text2 = await text.jsonValue();
        browser.close();
        console.log(text2);
    } catch (err) {
        console.log(err);
    }
};

const scrapechef = async (url) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,

            executablePath:
                "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        });
        const page = await browser.newPage();
        await page.goto(url, {
            waitUntil: "load",
            // Remove the timeout
            timeout: 0,
        });
        //await page.setDefaultNavigationTimeout(0);

        const [rating] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[1]"
        );
        const text = await rating.getProperty("textContent");
        const text2 = await text.jsonValue();
        console.log("rating", text2);

        const [global_rank] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[1]/a/strong"
        );
        const gr = await global_rank.getProperty("textContent");
        const gr2 = await gr.jsonValue();
        console.log("global_rank", gr2);

        const [country_rank] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[2]/a/strong"
        );
        const cr = await country_rank.getProperty("textContent");
        const cr2 = await cr.jsonValue();
        console.log("country_rank:", cr2);

        const [star] = await page.$x(
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[1]"
        );
        const str = await star.getProperty("textContent");
        const str2 = await str.jsonValue();
        console.log("Star:", str2);

        const [motto] = await page.$x(
            // "/html/body/main/div/div/div/div/div/section[1]/ul/li[5]/span"
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[6]/span"
        );
        const m = await motto.getProperty("textContent");
        const m2 = await m.jsonValue();
        console.log("Motto:", m2);

        const [name] = await page.$x(
            "/html/body/main/div/div/div/div/div/header/h2"
        );
        const name1 = await name.getProperty("textContent");
        const name2 = await name1.jsonValue();
        console.log("Name:", name2);

        const [org] = await page.$x(
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[8]/span"
        );
        const o = await org.getProperty("textContent");
        const o2 = await o.jsonValue();
        console.log("Organisation:", o2);

        const [highest] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[1]/small"
        );
        const h = await highest.getProperty("textContent");
        const h2 = await h.jsonValue();
        console.log(h2);
    } catch (err) {
        console.log(err);
    }
};

const scrapeforces = async (url) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,

            executablePath:
                "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        });
        const page = await browser.newPage();
        await page.goto(url, {
            waitUntil: "load",
            // Remove the timeout
            timeout: 0,
        });
        //await page.setDefaultNavigationTimeout(0);

        const [country_rank] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/ul/li[1]/span[1]'
        );
        const cr = await country_rank.getProperty("textContent");
        const cr2 = await cr.jsonValue();
        console.log("country_rank:", cr2);

        const [star] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/ul/li[2]/span'
        );
        const str = await star.getProperty("textContent");
        const str2 = await str.jsonValue();
        console.log("Star:", str2);

        const [org] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/div/div[2]/div[2]/a'
        );
        const o = await org.getProperty("textContent");
        const o2 = await o.jsonValue();
        console.log("Organisation:", o2);

        const [highest] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/ul/li[1]/span[2]'
        );
        const gr = await highest.getProperty("textContent");
        const gr2 = await gr.jsonValue();
        console.log(gr2);

        const [name] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/div/div[2]/div[1]'
        );
        const name1 = await name.getProperty("textContent");
        const name2 = await name1.jsonValue();
        console.log("Name:", name2);

        const [title] = await page.$x(
            '//*[@id="pageContent"]/div[2]/div[5]/div[2]/div/div[1]/span'
        );
        const t1 = await title.getProperty("textContent");
        const t2 = await t1.jsonValue();
        console.log("title:", t2);
    } catch (err) {
        console.log(err);
    }
};

//scrape("https://www.amazon.in/dp/B075R9P7H8/_i=22120008031");
scrapechef("https://www.codechef.com/users/abdullah768");
scrapeforces("https://codeforces.com/profile/shubham__36");
