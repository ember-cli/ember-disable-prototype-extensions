'use strict';

var path = require('path');

module.exports = {
  name: require('./package').name,

  included: function() {
    this.app.import(path.join('vendor', 'disable-prototype-extensions.js'), { type: 'vendor', prepend: true });
  }
};
