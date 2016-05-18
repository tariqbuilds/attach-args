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
    attachArgsToClass(this, arguments);
    // shiny.a - d will be available on this instance of shiny
  }
}

// both will accomplish the same thing
```

# Contribute

1. Clone the repo
2. Run `npm i`
3. Run `npm develop` (this runs a watch & auto-compile task)
4. Make your edits
5. Commit & Publish!

# License
MIT
