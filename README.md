# wscript-avoider-js

A node.js module to avoid running on Windows Scripting Host.

The module returns an object with a single function (`quit_if_wscript(name)`), that checks if the global object `WScript` is defined and quits if true.

## How to install

This module is available as [**wscript-avoider**](https://www.npmjs.com/package/wscript-avoider) from the public repository, use `npm` to install it:

```
npm install wscript-avoider
```

## How to use

The module has only one function; call it with the application name as argument and normally it should return. If bad luck struck and Windows Scripting Host grabbed the script, a message is displayed and the application abruptly terminates.

```
const app_name = 'name'
const avoider = require('wscript-avoider')
avoider.quit_if_wscript(app_name)
```

The string `name` should be the name of the current node.js application, as launched from a terminal window (for example `xcdl`).

