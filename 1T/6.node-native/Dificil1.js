function decomposeUrl(url) {
    const illo = new URL ('http://example.com/path/index.html');
        illo.protocol('http'),
        console.log(illo.protocol);
        illo.hostname = ('example.com'),
        console.log(illo.hostname);
        illo.pathname('/path/index.html'),
        console.log(illo.pathname);
    
}