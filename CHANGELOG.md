## v2.0.0 (2017-03-26)

Warning: Incompatible API, using a static class instead of a single function.

Usage:

```javascript
const appName = 'name'
const WscriptAvoider = require('wscript-avoider')
WscriptAvoider.quitIfWscript(appName)
```

Other changes:

- ownership transfered to the xpack project
- 'standard' style enforced
- camelCase names used instead of lowercase with underscore

## v1.1.1 (2016-09-21)

First functional version.

Usage:

```javascript
const app_name = 'name'
const avoider = require('wscript-avoider')
avoider.quit_if_wscript(app_name)
```

## v1.0.0 (2016-09-20)

Initial commit.