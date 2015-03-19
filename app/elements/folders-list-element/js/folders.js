(function () {
  'use strict';

  // Should get data from the API
  Polymer({
    ready: function () {
      this.items = [
        'Email Box',
        'Sent',
        'Spams',
        'Archives',
        'Smart Box'
      ];
    },

    addEmail: function () {
      console.log("Add an email, not yet implemented");
    }
  });
})();
