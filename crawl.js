const { JSDOM } = require('jsdom')

function UrlFromHTML(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkEL = dom.window.document.querySelectorAll('a')
    for (const Elem of linkEL) {
        if (Elem.href.slice(0, 1) === '/') {
            // relative
            try {
                const urlObj = new URL(`${baseURL}${Elem.href}`)
                urls.push(urlObj.href)
            } catch(err) {
                console.log(`error with relative url: ${err.message}`)
            }
        } else {
            // absolute
            try {
                const urlObj = new URL(Elem.href)
                urls.push(urlObj.href)
            } catch(err) {
                console.log(`error with absolute url: ${err.message}`)
            }
        }}
    return urls
}

function normalizeURL(urlString) {
    url = new URL(urlString)
    url1 = `${url.hostname}${url.pathname}`
    if (url1.length > 0 && url1.slice(-1) === '/') {
        return url1.slice(0, -1)
    }
    return url1
}

module.exports = {
    normalizeURL,
    UrlFromHTML
}