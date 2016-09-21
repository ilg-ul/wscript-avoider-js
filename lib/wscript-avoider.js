/*
 * This file is part of the XCDL distribution 
 *   (http://xcdl.github.io).
 * Copyright (c) 2015 Liviu Ionescu.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// ----------------------------------------------------------------------------

// Explicit creation of an empty return object, to be populated later.
// The name of this object will be visible in the stack trace, during debug.
avoider = {}

// The new object will be returned to all require() calls.
module.exports = avoider

// ----------------------------------------------------------------------------

/**
 * @brief Avoid running on Windows Scripting Host.
 * @param app_name The application name; used only to display a
 *  meaningfull error message.
 * @return undefined, when not running on WScript.
 *
 * @details
 * Check if a global `WScript` object exists. If so, this is a bad sign,
 * it means the script was started by Windows Scripting Host,
 * instead of node.js, and there is not much to do then quit abruptly.
 *
 * In normal conditions the `WScript` object does not exist,
 * and this function returns.
 */
avoider.quit_if_wscript = function (app_name) {
  if (typeof WScript !== 'undefined') {
    WScript.echo(app_name + ' does not work when run\n'
      + 'with the Windows Scripting Host\n\n'
      + '"cd" to a different folder,\n' + 'or type "'
      + app_name + '.cmd <args>",\n' + 'or type "node '
      + app_name + ' <args>".');
    WScript.quit(1);
  }
}

// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------