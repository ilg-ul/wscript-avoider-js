# wscript-avoider-js

A node.js module to avoid running on [Windows Script Host](https://msdn.microsoft.com/en-us/library/9bbdkx3k.aspx).

The module returns a static class `WscriptAvoider` with a single static function (`quitIfWscript(name)`), that checks if the global object `WScript` is defined and quits if true.

## Prerequisites

A recent `node.js` (>7.x), since the ECMAScript 6 class syntax is used.

## Easy install

This module is available as [**wscript-avoider**](https://www.npmjs.com/package/wscript-avoider) from the public repository, use `npm` to install it:

```bash
$ npm install wscript-avoider
```

The development repository is available from the GitHub [xpack/wscript-avoider-js](https://github.com/xpack/wscript-avoider-js) project.

## How to use

The module has only one function; call it with the application name as argument and normally it should return. If bad luck struck and **Windows Script Host** grabbed the script, a message is displayed and the application abruptly terminates.

```javascript
const appName = 'name'
const WscriptAvoider = require('wscript-avoider')
WscriptAvoider.quitIfWscript(appName)
```

The string `name` should be the name of the current node.js application, as launched from a terminal window (for example `xcdl`).

