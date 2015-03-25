(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Polymer Mailer';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function () {
    console.log('Polymer mailer is ready to rock!');
  });

  var template = document.querySelector('template[is="auto-binding"]');
  template.pages = [
    {name: 'Single', hash: 'single'},
    {name: 'page', hash: 'page'},
    {name: 'app', hash: 'app'}
  ];

})(wrap(document));
