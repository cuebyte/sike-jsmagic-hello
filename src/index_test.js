import { assert } from 'chai'
import { greet } from './index'

describe("greet", () => {
  it("greets a person by name", () => {
    assert.equal(greet('cuebyte'), 'hello, cuebyte');
  })
  it("greets a person flirtatiously if drunk", () => {
    assert.equal(greet('cuebyte', true), 'hello, cuebyte, you look sexy today');
  })
})
