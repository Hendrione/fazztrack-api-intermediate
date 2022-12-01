
var axios = require("axios").default;
var url = browser.options.baseUrl;

export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */

    async open(path) {
       //await browser.maximizeWindow(); 
       return browser.url(`${url}/${path}/`);
    }

    async check_link(path) {
        try {
            const response = await axios.get(`${url}${path}`);
            console.log(`${url}${path} STATUS: ${response.status}`);
            return response.status
        } catch (error) {
            console.log(`PATH ${path}: ${error}`)
        }
    }
}