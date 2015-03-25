import { module, test } from 'qunit';

module('Check Prototype Extensions - Function');

test('Function.prototype.observes', function (assert) {
  assert.expect(1);

  assert.equal(Function.prototype.observes, undefined);
});

test('Function.prototype.property', function (assert) {
  assert.expect(1);

  assert.equal(Function.prototype.property, undefined);
});

test('Function.prototype.property', function (assert) {
  assert.expect(1);

  assert.equal(Function.prototype.property, undefined);
});

test('Function.prototype.on', function (assert) {
  assert.expect(1);

  assert.equal(Function.prototype.on, undefined);
});
