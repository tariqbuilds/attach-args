# attach-args

A simple little utility which **attaches arguments to a constructor as class properties**.

A prime example:

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

Include script in your `html`
```html
<script src="node_modules/attach-args/dist/attachArgs.min.js"></script>
```

Or simply `require` it in Node.js
```js
const attachArgs = require('attach-args')
```

# Supported Class Types

Supports `class` syntax for:

* [x] [Native ES6](#native-es6)
* [x] [Native Node.js](#nodejs-class)
* [x] [Babel 6](#babel-6-class)
* [ ] Traceur

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

Be sure to check the [Contributor Goals](#contributor-goals) section to see the list of tasks that this project currently has open.

1. Run `npm i`
2. Run `npm develop` (this runs a watch & auto-build task)
3. Make your edits
4. Run tests (`node test-suite.js`)
5. Send Pull Request

# Contributor Goals

* [ ] Add method to rename parameter before attaching (ex: attach `paramOne` as `param_one`)
* [ ] Add support for single config object rather than `arguments`
* [ ] Support Traceur compiled `class`

# License
MIT
