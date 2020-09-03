const express = require("express");
const puppeteer = require("puppeteer-core");

const bodyParser = require("body-parser");
const app = express();

const scrapechef_main_rating = async (url) => {
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
        return text2;
    } catch (err) {
        console.log(err);
    }
};

const scrapechef_country_rank = async (url) => {
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
            "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[2]/a/strong"
        );
        const cr = await country_rank.getProperty("textContent");
        const cr2 = await cr.jsonValue();
        return cr2;
    } catch (err) {
        console.log(err);
    }
};

const scrapechef_global_rank = async (url) => {
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

        const [global_rank] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[1]/a/strong"
        );
        const gr = await global_rank.getProperty("textContent");
        const gr2 = await gr.jsonValue();
        return gr2;
    } catch (err) {
        console.log(err);
    }
};

const scrapechef_motto = async (url) => {
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

        const [motto] = await page.$x(
            // "/html/body/main/div/div/div/div/div/section[1]/ul/li[5]/span"
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[6]/span"
        );
        const m = await motto.getProperty("textContent");
        const m2 = await m.jsonValue();
        return m2;
    } catch (err) {
        console.log(err);
    }
};

const scrapechef_star = async (url) => {
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

        const [star] = await page.$x(
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[1]"
        );
        const str = await star.getProperty("textContent");
        const str2 = await str.jsonValue();
        return str2;
    } catch (err) {
        console.log(err);
    }
};

const scrapechef_highest_rank = async (url) => {
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

        const [highest] = await page.$x(
            "/html/body/main/div/div/div/aside/div[1]/div/div[1]/small"
        );
        const h = await highest.getProperty("textContent");
        const h2 = await h.jsonValue();
        return h2;
    } catch (err) {
        console.log(err);
    }
};
const scrapechef_organisation = async (url) => {
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

        const [org] = await page.$x(
            "/html/body/main/div/div/div/div/div/section[1]/ul/li[8]/span"
        );
        const o = await org.getProperty("textContent");
        const o2 = await o.jsonValue();
        return "Organisation:", o2;
    } catch (err) {
        console.log(err);
    }
};
const scrapechef_graph = async (url) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,

            executablePath:
                "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });

        await page.goto(url, {
            waitUntil: "load",
            // Remove the timeout
            timeout: 0,
        });
        //await page.setDefaultNavigationTimeout(0);
        const [image] = await page.$x('//*[@id="cumulative"]');
        await image.screenshot({
            path: "./image.jpg",
            type: "jpeg",
            //clip: { x: 0, y: 0, width: 500, height: 600 },
        });
    } catch (err) {
        console.log(err);
    }
};
const scrapechef_name = async (url) => {
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

        const [name] = await page.$x(
            "/html/body/main/div/div/div/div/div/header/h2"
        );
        const name1 = await name.getProperty("textContent");
        const name2 = await name1.jsonValue();
        return "Name:", name2;
    } catch (err) {
        console.log(err);
    }
};
app.use(bodyParser.json());

app.get("/name", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_name(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/org", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_organisation(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/graph", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_graph(
        `https://www.codechef.com/users/${username}`
    );
    res.send("graph has been generated in the given path");
});
app.get("/main_rating", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_main_rating(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/country_rank", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_country_rank(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/get_motto", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_motto(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/get_stars", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_star(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/highest_rank", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_highest_rank(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});
app.get("/global_rank", async (req, res) => {
    const username = req.body.username;
    let response = await scrapechef_global_rank(
        `https://www.codechef.com/users/${username}`
    );
    res.send(response);
});

app.listen(3000);
