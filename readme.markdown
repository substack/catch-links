# catch-links

intercept local link clicks on a page

This is useful for doing client-side pushState UIs.

# example

Given some html:

``` html
<html>
  <body>
    <div>
      <a href="/a">aaa</a>
    </div>

    <div>
      <a href="/b">bbb</a>
    </div>

    <div>
      <a href="cc">cc</a>
    </div>
    
    <div>
      <a href="http://npmjs.org">npmjs</a>
    </div>
    
    <script src="bundle.js"></script>
  </body>
</html>
```

We'll intercept the relative links `<host>/a` and `<host>/b`, printing them.
The external link to npmjs.org will go through as usual.

``` js
var catchLinks = require('catch-links');

catchLinks(window, function (href) {
    console.log(href);
});
```

# methods

``` js
var catchLinks = require('catch-links')
```

## catchLinks(element, cb)

Fire `cb(href)` whenever an anchor tag descendant of `element` with an in-server
url is clicked.

`href` will always be a relative path rooted at the root path.

# install

With [npm](https://npmjs.org) do:

```
npm install catch-links
```

Use [browserify](http://browserify.org) to bundle this library into your
project.

# license

MIT
