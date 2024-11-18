function normalizeURL(urlString) {
    url = new URL(urlString)
    url1 = `${url.hostname}${url.pathname}`
    if (url1.length > 0 && url1.slice(-1) === '/') {
        return url1.slice(0, -1)
    }
    return url1
}

module.exports = {
    normalizeURL
}