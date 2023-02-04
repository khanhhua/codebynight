function lazyFn() {
    return new Promise(function(resolve) {
        request('https://sad.com').then(resolve)
        
        let id = setTimeout(resolve, 1000)
        clearTimeout(id)
    })
}
