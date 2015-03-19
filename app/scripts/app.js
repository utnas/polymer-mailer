(function (document) {
  'use strict';

  var app = document.querySelector('#app');
  app.appName = 'Yo, Polymer App!';

  app.addEventListener('template-bound', function () {
    console.log('Our app is ready to rock!');
  });

})(wrap(document));
