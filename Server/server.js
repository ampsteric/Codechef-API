const express = require("express");
const puppeteer = require("puppeteer-core");

const bodyParser = require("body-parser");
const app = express();
// const {
//     scrapechef_main_rating,
//     scrapechef_country_rank,
//     scrapechef_global_rank,
//     scrapechef_motto,
//     scrapechef_star,
//     scrapechef_highest_rank,
//     scrapechef_organisation,
//     scrapechef_name,
// } = require("./controllers");
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
        await page.screenshot({
            path: "./image.jpg",
            type: "jpeg",
            clip: { x: 0, y: 0, width: 1000, height: 700 },
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
    //res.send(response);
});

app.listen(3000);
