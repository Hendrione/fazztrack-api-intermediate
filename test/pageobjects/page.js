class Page {
    open(params) {
        return browser.url(`https://www.demoblaze.com/${path}`)
    }
}

module.exports = {
    Page
}