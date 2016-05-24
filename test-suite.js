'use strict'

const attachArgs = require('./lib/index.js')

class AttachArgsTestSuite {

  constructor() {
    console.log("")
    console.log("attach-args: (Ghetto) Test Suite")
    console.log("")
    this.nativeClassShouldWork()
    this.nativeClassWithoutParamsShouldThrow()
    this.babelSixClassShouldWork()
    this.babelSixClassWithoutParamsShouldThrow()
    console.log("")
  }

  nativeClassShouldWork() {
    let params = [
      { news: 'good' },
      { bad: 'news' }
    ]

    class nClass{
      constructor(alpha, beta) {
        attachArgs(arguments).to(this)
      }
    }

    let nativeClassInstance = new nClass(params[0], params[1])

    if (nativeClassInstance.alpha
        && nativeClassInstance.alpha.news
        && nativeClassInstance.alpha.news === params[0].news)
      console.log('✓ Native Class Support')
    else
      console.log('x Native Class Support')
  }

  nativeClassWithoutParamsShouldThrow() {
    let msg    = 'Native Class throws error when no params defined in constructor'
    let params = [
      { news: 'good' },
      { bad: 'news' }
    ]

    class nClass{
      constructor() {
        attachArgs(arguments).to(this)
      }
    }

    // suppress console.err for unit test
    console.error = errMsg => errMsg

    try {
      let nativeClassInstance = new nClass(params[0], params[1])
    } catch (err) {
      if (err)
        console.log(`✓ ${msg}`)
      else
        console.log('x ${msg}')
    }

  }

  babelSixClassShouldWork() {
    let params = [
      { news: 'good' },
      { bad: 'news' }
    ]

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    let abc = function abc(alpha, beta) {
      _classCallCheck(this, abc);
      attachArgs(arguments).toBabelClass(this)
    };

    let babelClassInstance = new abc(params[0], params[1])

    if(babelClassInstance.alpha
        && babelClassInstance.alpha.news
        && babelClassInstance.alpha.news === params[0].news)
      console.log('✓ Babel Class Support')
    else
      console.log('x Babel Class Support')
  }

  babelSixClassWithoutParamsShouldThrow() {
    let msg = 'Babel Class should throw if no params defined for constructor'
    let params = [
      { news: 'good' },
      { bad: 'news' }
    ]

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    let abc = function abc() {
      _classCallCheck(this, abc);
      attachArgs(arguments).toBabelClass(this)
    };

    try {
      let babelClassInstance = new abc(params[0], params[1])
    } catch(err) {
      if(err)
        console.log(`✓ ${msg}`)
      else
        console.log(`x ${msg}`)
    }

  }
}

new AttachArgsTestSuite()


