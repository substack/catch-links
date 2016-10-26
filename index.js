var url = require('url');

module.exports = function (root, cb) {
    root.addEventListener('click', function (ev) {
        if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
            return true;
        }

        var anchor = null;
        for (var n = ev.target; n.parentNode; n = n.parentNode) {
            if (n.nodeName === 'A') {
                anchor = n;
                break;
            }
        }
        if (!anchor) return true;

        var href = anchor.getAttribute('href');
        var u = url.parse(anchor.getAttribute('href'));

        if (u.host && (
          (u.protocol.match(/https?:/) && (u.host !== location.host)) ||
          (!u.protocol.match(/https?:/))
        )) return true;

        ev.preventDefault();

        var base = location.protocol + '//' + location.host;

        cb(url.resolve(location.pathname, u.path || '') + (u.hash || ''));
        return false;
    });
};
