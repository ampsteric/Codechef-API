// const puppeteer = require("puppeteer-core");

//  const scrapechef_name = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [name] = await page.$x(
//             "/html/body/main/div/div/div/div/div/header/h2"
//         );
//         const name1 = await name.getProperty("textContent");
//         const name2 = await name1.jsonValue();
//         return "Name:", name2;
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_organisation = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [org] = await page.$x(
//             "/html/body/main/div/div/div/div/div/section[1]/ul/li[8]/span"
//         );
//         const o = await org.getProperty("textContent");
//         const o2 = await o.jsonValue();
//         console.log("Organisation:", o2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_highest_rank = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [highest] = await page.$x(
//             "/html/body/main/div/div/div/aside/div[1]/div/div[1]/small"
//         );
//         const h = await highest.getProperty("textContent");
//         const h2 = await h.jsonValue();
//         console.log(h2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_star = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [star] = await page.$x(
//             "/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[1]"
//         );
//         const str = await star.getProperty("textContent");
//         const str2 = await str.jsonValue();
//         console.log("Star:", str2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_motto = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [motto] = await page.$x(
//             // "/html/body/main/div/div/div/div/div/section[1]/ul/li[5]/span"
//             "/html/body/main/div/div/div/div/div/section[1]/ul/li[6]/span"
//         );
//         const m = await motto.getProperty("textContent");
//         const m2 = await m.jsonValue();
//         console.log("Motto:", m2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_global_rank = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [global_rank] = await page.$x(
//             "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[1]/a/strong"
//         );
//         const gr = await global_rank.getProperty("textContent");
//         const gr2 = await gr.jsonValue();
//         console.log("global_rank", gr2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_country_rank = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [country_rank] = await page.$x(
//             "/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[2]/a/strong"
//         );
//         const cr = await country_rank.getProperty("textContent");
//         const cr2 = await cr.jsonValue();
//         console.log("country_rank:", cr2);
//     } catch (err) {
//         console.log(err);
//     }
// };

//  const scrapechef_main_rating = async (url) => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: true,

//             executablePath:
//                 "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//         });
//         const page = await browser.newPage();
//         await page.goto(url, {
//             waitUntil: "load",
//             // Remove the timeout
//             timeout: 0,
//         });
//         //await page.setDefaultNavigationTimeout(0);

//         const [rating] = await page.$x(
//             "/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[1]"
//         );
//         const text = await rating.getProperty("textContent");
//         const text2 = await text.jsonValue();
//         console.log("rating", text2);
//     } catch (err) {
//         console.log(err);
//     }
// };

// //scrapechef("https://www.codechef.com/users/abdullah768");

// module.exports = scrapechef;
