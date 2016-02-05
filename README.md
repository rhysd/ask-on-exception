Ask to URL instantly on exception
=================================

When you encounter some un-handled exception and you don't know the reason, you would enter the error message to URL bar of your browser.  [This npm package](https://www.npmjs.com/package/ask-on-exception) module does it automatically.

```javascript
require('ask-on-exception');
var a;
console.log(a.foo);  // Error! No member 'foo' for undefined.
```

![screenshot](https://raw.githubusercontent.com/rhysd/ss/master/ask-on-exception/main.gif)

Note: I had been inspired by [this tweet](https://twitter.com/haoel/status/695490584325152768) and created this package.

Distributed under [MIT License](LICENSE.txt)
