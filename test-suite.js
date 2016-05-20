'use strict'

const attachArgs = require('./lib/index.js')

class AttachArgsTestSuite {

  constructor() {
    this.nativeClass()
    this.babelSixClass()
  }

  nativeClass() {
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

  babelSixClass() {
    let params = [
      { news: 'good' },
      { bad: 'news' }
    ]

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var abc = function abc(alpha, beta) {
      _classCallCheck(this, abc);
      attachArgs(arguments).toBabelClass(this)
    };

    var babelClassInstance = new abc(params[0], params[1])

    if(babelClassInstance.alpha
        && babelClassInstance.alpha.news
        && babelClassInstance.alpha.news === params[0].news)
      console.log('✓ Babel Class Support')
    else
      console.log('x Babel Class Support')

  }
}

new AttachArgsTestSuite()


