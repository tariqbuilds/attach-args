# arguments-to-class-properties
Utility to attach arguments to the constructor of a JavaScript class as named class properties

Supports:

* [x] [Native ES6 class]()
* [x] [Babel]()
* [x] [Node.js]()
* [ ] Traceur

Suggest another channel

# Installation

Install as dependency

```sh
npm i --save arguments-to-class-properties
```

Include script
```html
<script src="node_modules/arguments-to-class-properties/dist/attachArgsToClass.js"></script>
```

# Usage

#### Native ES6 & Node.js Class
```js
class shiny {
  constructor(someString, someOtherString, someService) {

    // this is will attach arguments as named properties of current class instance
    attachArgs(arguments).toClass(this)

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

    // this is will attach arguments as named properties of current class instance
    attachArgs(arguments).toBabelClass(this)

    // this.a === 'hello'
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
