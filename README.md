# Attach Args

Utility which attaches arguments as class properties

Supports `class` syntax for:

* [x] [Native ES6](#native-es6--nodejs-class)
* [x] [Native Node.js](#native-es6--nodejs-class)
* [x] [Babel](#babel-6-class)
* [ ] Traceur

# Installation

Install as dependency

```sh
npm i --save attach-args
```

Include script
```html
<script src="node_modules/attach-args/dist/attachArgs.min.js"></script>
```

# Usage

#### Native ES6 & Node.js Class
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

# Contribute

1. Clone the repo
2. Run `npm i`
3. Run `npm develop` (this runs a watch & auto-build task)
4. Make your edits
5. Commit & Pull-Request!

# License
MIT
