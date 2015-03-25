/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-disable-prototype-extensions',

  contentFor: function(type) {
    if (type === 'vendor-prefix') {
      return 'EmberENV.EXTEND_PROTOTYPES = false;';
    }
  }
};
