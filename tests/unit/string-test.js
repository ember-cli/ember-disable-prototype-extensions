import { module, test } from 'qunit';

module('Check Prototype Extensions - String');

test('String.prototype.htmlSafe', function (assert) {
  assert.expect(1);

  assert.equal(String.prototype.htmlSafe, undefined);
});
