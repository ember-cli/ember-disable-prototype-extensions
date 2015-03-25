import { module, test } from 'qunit';

var array;
module('Check Prototype Extensions - Array', {
  beforeEach: function() {
    array = [];
  }
});

test('pushObjects', function (assert) {
  assert.expect(1);

  assert.equal(array.pushObjects, undefined);
});

test('pushObject', function (assert) {
  assert.expect(1);

  assert.equal(array.pushObject, undefined);
});

test('popObject', function (assert) {
  assert.expect(1);

  assert.equal(array.popObject, undefined);
});

test('shiftObject', function (assert) {
  assert.expect(1);

  assert.equal(array.shiftObject, undefined);
});

test('unshiftObject', function (assert) {
  assert.expect(1);

  assert.equal(array.unshiftObject, undefined);
});
