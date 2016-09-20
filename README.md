# wscript-avoider-js

A node.js module to avoid running on Windows Scripting Host.

The module returns an object with a single function (`quit_if_wscript(name)`), that checks if the global object `WScript` is defined and quits if true.

## Usage

```
var app_name = 'name'
var wsa = require('wscript-avoider')
wsa.quit_if_wscript(app_name)
```

The string `name` should be the name of the node.js application, as launched from a terminal window (for example `xcdl`).

