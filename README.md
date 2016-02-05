Ask to URL instantly on exception
=================================

When you encounter some un-handled exception and you don't know the reason, you would enter the error message to URL bar of your browser.  This [npm](https://www.npmjs.com/) module does it automatically.

```javascript
require('ask-on-exception');
var a;
console.log(a.foo);  // Error! No member 'foo' for undefined.
```

![screenshot](https://raw.githubusercontent.com/rhysd/ss/master/ask-on-exception/main.gif)

Distributed under [MIT License](LICENSE.txt)
