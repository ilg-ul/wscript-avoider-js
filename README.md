# DEPRECATED!

After a thorough analysis, it was discovered that the design of this module 
is flowed, the detection of WSH cannot be performed later in the code, 
since WSH will not run the advanced ES6 classes.

The correct sequence is to run the check right at the beginning of the
script.

Example of a CLI launcher which refuses to run on WSH:

```js
#!/usr/bin/env node
// Mandatory shebang must point to `node` and this file must be executable.

; (function () { // wrapper in case we're in module_context mode
  /* global WScript */
  if (typeof WScript !== 'undefined') {
    // Windows only: the script was caught by WSH, not node.
    WScript.echo('Run this with node, not the Windows Script Host\n\n')
    WScript.quit(1)
  }

  // --------------------------------------------------------------------------

  const Main = require('../index.js').Main

  // `start()` is async (a promise), thus `.then()` is needed
  // to wait for it to complete.
  Main.start().then(
    (code) => process.exit(code)
  )
})()
```
