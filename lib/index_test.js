'use strict';

var _chai = require('chai');

var _index = require('./index');

describe("greet", function () {
  it("greets a person by name", function () {
    _chai.assert.equal((0, _index.greet)('cuebyte'), 'hello, cuebyte');
  });
  it("greets a person flirtatiously if drunk", function () {
    _chai.assert.equal((0, _index.greet)('cuebyte', true), 'hello, cuebyte, you look sexy today');
  });
});