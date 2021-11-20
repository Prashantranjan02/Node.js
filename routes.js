const setHeaders = (req, res)=>{
    if(req.url == '/')
    {
        res.write('<html>');
        res.write('<head><title>My first web server</title></head>');
        res.write('<body> <h1>My name is Prashant Ranjan</h1> </body>');
        res.write('</html');
        return res.end();
    }
};

module.exports = setHeaders;