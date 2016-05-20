# Attach Args

Utility which attaches arguments as class properties

Supports `class` syntax for:

* [x] [ES6](#native-es6)
* [x] [Node.js](#nodejs-class)
* [x] [Babel](#babel-6-class)
* [ ] Traceur

```js
class oldWay {
  constructor(someService, someString, someBool) {
    this.someService     = someService
    this.someString      = someString
    this.someBool        = someBool
  }
}

class newWay {
  constructor(someService, someString, someBool) {
    attachArgs(arguments).to(this)
  }
}

/**
 * Both classes accomplish the same task of
 * attaching constructor arguments as class properties
 */
```

# Installation

Install as dependency

```sh
npm i --save attach-args
```

Include script
```html
<script src="node_modules/attach-args/dist/attachArgs.min.js"></script>
```

Node.js
```js
const attachArgs = require('attach-args')
```

# Usage

#### Native ES6
```js
class shiny {
  constructor(someString, someOtherString, someService) {

    // this is will attach arguments to this constructor
    // as named properties of the class instance
    attachArgs(arguments).to(this)

    this.someString === 'good'            // true
    this.someOtherString === 'bye'        // true
    this.someService.hello() === 'hello'  // true
  }
}

let say = {
  hello: () => 'hello'
}

let classInstance = new shiny('good', 'bye', say)
```

#### Node.js Class

```js
const attachArgs = require('attach-args')

class shiny {
  constructor(someString, someOtherString) {

    attachArgs(arguments).to(this)

    this.someString === 'node.js'            // true
    this.someOtherString === 'ecmascript'    // true
  }
}

let classInstance = new shiny('node.js', 'ecmascript')
```

#### Babel 6 Class
```js
class shiny {
  constructor(a, b, c) {

    // this is will set this.a, this.b, & this.c
    attachArgs(arguments).toBabelClass(this)

    this.a === 'hello' // true

    this.verifyItWorked() // true
  }

  verifyItWorked() {
    return this.b === 'small'
  }
}

let classInstance = new shiny('hello', 'small', 'world')
```

# Warning

Please note that *most of the time*, a class receiving a lot of arguments can be a red flag. Specifically, the [single responsibility principle](http://en.wikipedia.org/wiki/Single_responsibility_principle) might be of particular help.

See ["The Principles of Good Programming"](http://www.artima.com/weblogs/viewpost.jsp?thread=331531) for general advice on avoiding poor coding practices.


![Stay Classy, San Diego](https://media.giphy.com/media/fVZXOHjlx66Tm/giphy.gif)

# Contribute

1. Run `npm i`
2. Run `npm develop` (this runs a watch & auto-build task)
3. Make your edits
4. Run tests (`node test-suite.js`)
5. Send Pull Request

# License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
