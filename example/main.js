var catchLinks = require('../');

catchLinks(document, function (href) {
    console.log(href);
});
