module.exports = function (cb) {    
    return function (ev) {
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

        // IE clears the host value if the anchor href changed after creation, e.g. in React
        // Creating a new anchor element to insure host value is present
        var a1 = document.createElement('a');
        a1.href = anchor.href;
        
        // In IE, the default port is included in the anchor host but excluded from the location host.
        // This affects the ability to directly compare location host to anchor host.
        // For example: http://example.com would have a location.host of 'example.com' and an anchor.host of 'example.com:80'
        // Creating anchor from the location.href to normalize the host value.
        var a2 = document.createElement('a');
        a2.href = location.href;

        if (a1.host !== a2.host) return true;
        
        ev.preventDefault();
        
        cb(anchor.href);
        return false;
    };
};