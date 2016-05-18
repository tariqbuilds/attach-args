# arguments-to-class-properties
Utility to attach arguments to the constructor of a JavaScript class as named class properties

Supports:

* [x] Native ES6 class
* [x] Babel
* [ ] Node.js
* [ ] Traceur

# Usage

```js

// before:
class oldWay {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

// new way
class shiny {
  constructor(a, b, c, d) {
    attachArgsToClass(this, arguments);
    // shiny.a - d will be available beginning here
  }
}

// both will accomplish the same thing

```
