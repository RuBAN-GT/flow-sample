// @flow

import { cloneDeep } from 'lodash'

class A {
  static defaultProp: Object = { field: 1 }
  props: Object

  constructor(props: ?Object = null) {
    this.props = props || this.constructor.defaultProp
  }
}

test('cloning of typed objects', () => {
  const a = new A()
  const b = cloneDeep(a)

  expect(typeof a.constructor.defaultProp).toBe('object')
  expect(typeof b.constructor.defaultProp).toBe('object')
  expect(a.props).toMatchObject({ field: 1 })

  expect(a).not.toBe(b)

  expect(typeof a.props).toBe('object')
  expect(typeof b.props).toBe('object')

  expect(b.props).toMatchObject({ field: 1 })

  expect(b.props).toEqual(a.props)
})
