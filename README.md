# arguments-to-class-properties
Utility to attach arguments to the constructor of a JavaScript class as named class properties

Supports:

* [x] Native ES6 class
* [x] Babel
* [ ] Node.js
* [ ] Traceur

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

```js
class shiny {
  constructor(a, b, c, d) {

    // this is where the magic happens
    attachArgsToClass(this, arguments);

    // shiny.a - d will be available on this instance of shiny
  }
}
```

By default, it will automatically try to figure out what type of class you are using (native ES6, babel, etc.)

To avoid this overhead, pass a 3rd parameter with one of the following options:

* 'native-es6'
* 'babel-6'

Alternatively, you can configure this across your application via: **TBD**

# Contribute

1. Clone the repo
2. Run `npm i`
3. Run `npm develop` (this runs a watch & auto-compile task)
4. Make your edits
5. Commit & Publish!

# License
MIT
