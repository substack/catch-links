var catchLinks = require('../');

catchLinks(window, function (href) {
    console.log(href);
});
