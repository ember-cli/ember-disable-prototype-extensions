ember-disable-prototype-extensions
==============================================================================

[![Build Status](https://travis-ci.org/ember-cli/ember-disable-prototype-extensions.svg?branch=master)](https://travis-ci.org/ember-cli/ember-disable-prototype-extensions)
[![Build status](https://ci.appveyor.com/api/projects/status/xvg1fxk24lh5u0eg/branch/master?svg=true)](https://ci.appveyor.com/project/embercli/ember-disable-prototype-extensions/branch/master)

Including this addon will disable Ember's prototype extensions.

This is a great idea for addon authors to ensure that their addon does not accidentally depend upon prototype extensions (which may be disabled in a consuming application).

For instructions on disabling prototype extensions see the Ember guide:

https://guides.emberjs.com/release/configuring-ember/


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install my-addon
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
