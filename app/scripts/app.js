(function (document) {
  'use strict';

  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app'),
    appName = 'Polymer Mailer',
    folders = [],
    api;

  /* -------------------
   * API and Fake DATA
   *-------------------*/
  api = {
    getFolders: function () {
      return folders;
    },

    getFolder: function (folderName) {
      var iterator = 0,
        result = null;
      for (iterator; iterator < folders.length; iterator++) {
        result = folders[iterator];
        if (result.value === folderName) {
          return result;
        }
      }
      return '';
    },

    getMail: function (folderName, idEmail) {
      var folder = this.getFolder(folderName);
      if (folder) {
        var iterator = 0;
        for (; iterator < folder.emails.length; iterator++) {
          var email = folder.emails[iterator];
          if (email.id === idEmail) {
            return email;
          }
        }
      }
      return '';
    },

    deleteEmail: function (folderName, idEmail) {
      var self = this;
      var folder = this.getFolder(folderName);
      if (folder) {
        var iterator = 0;
        for (; iterator < folder.emails.length; iterator++) {
          var email = folder.emails[iterator];
          if (email.id === idEmail) {
            var indexOf = folder.emails.indexOf(email);
            if (indexOf != -1) {
              folder.emails.splice(indexOf, 1);
              if (folder.value !== 'TRASH') {
                var trash = self.getFolder('TRASH');
                trash.emails.push(email);
              }
            }
          }
        }
      }
    },

    sendEmail: function (email, from) {
      var self = this;
      var smartEmails = self.getFolder('SMARTBOX'),
        newEmail = email;

      newEmail.id = getNextEmailId();
      newEmail.from = from;
      newEmail.date = new Date();
      smartEmails.emails.push(newEmail);

      setTimeout(function () {
        self.smartSend();
      }, 3000);
    },

    // This can me moved into a angular service
    smartSend: function () {
      var self = this;
      var smartBox = self.getFolder('SMARTBOX'),
        sentBox = self.getFolder('SENT');

      if (smartBox.length !== 0) {
        var index = 0;
        for (; index < smartBox.length; ++index) {
          sentBox.push(smartBox[index]);
        }
      }
      smartBox = [];
    }

  };

  folders = [
    {
      value: "MAILBOX", label: 'Email Box', emails: [
      {
        id: 1,
        from: "Albator",
        to: "Rudy",
        subject: "I will be back",
        date: new Date(2014, 2, 20, 15, 30),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      },
      {
        id: 2,
        from: "Capitaine Flam",
        to: "Rudy",
        subject: "Kiss from sky",
        date: new Date(2014, 3, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      },
      {
        id: 3,
        from: "Pikachu",
        to: "Rudy",
        subject: "Pika pika !",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika."
      },
      {
        id: 4,
        from: "Barbapapa",
        to: "Rudy",
        subject: "Hulahup Barbatruc",
        date: new Date(2014, 2, 15, 14, 15),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      }
    ]
    },
    {
      value: "SENT", label: "Sents", emails: [
      {
        id: 8,
        from: "Rudy",
        to: "Albator",
        subject: "What price ?",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      },
      {
        id: 9,
        from: "Rudy",
        to: "Capitaine Flam",
        subject: "Gloubiboulga Night",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      }
    ]
    },
    {
      value: "SPAM", label: "Spams", emails: [
      {
        id: 10,
        from: "Rue du discount",
        to: "Rudy",
        subject: "Need a new one",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      },
      {
        id: 11,
        from: "Sofinnoga",
        to: "Rudy",
        subject: "Need money ?",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      }
    ]
    },
    {
      value: "TRASH", label: "Archives", emails: [
      {
        id: 5,
        from: "Candy",
        to: "Rudy",
        subject: "Happy birthday",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      },
      {
        id: 6,
        from: "Hiro Nakamura",
        to: "Rudy",
        subject: "Konichiwa",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      },
      {
        id: 7,
        from: "Asuka Langley Soryu",
        to: "Rudy",
        subject: "Do you come",
        date: new Date(2014, 2, 15, 17, 50),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      }
    ]
    },
    {
      value: "SMARTBOX", label: 'Smart Box', emails: []
    }
  ];

  /*******************
   * Core functions
   *******************/

  function getNextEmailId() {
    var lastGreatId = 0;
    folders.forEach(function (item) {
      item.emails.forEach(function (email) {
        if (email.id > lastGreatId) {
          lastGreatId = email.id;
        }
      });
    });
    return lastGreatId + 1;
  }

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function () {
    console.log('Polymer mailer is ready to rock!');
  });

  var mailer = document.querySelector('template[is="auto-binding"]'),
    DEFAULT_ROUTE = 'single',
    CURRENT_ROUTE = {};

  mailer.addEventListener('template-bound', function (e) {
    this.route = this.route || DEFAULT_ROUTE;
    CURRENT_ROUTE = document.querySelector('template[id="folder"]');

    //Get list of folders
    mailer.folders = api.getFolders();

    console.log(CURRENT_ROUTE);
    if (CURRENT_ROUTE !== '') {
      var selectedFolder = api.getFolder(this.$.folder);
      if (selectedFolder) {
        mailer.selectedFolder = selectedFolder;
      } else {
        console.log('No folder selected');
      }
      console.dir(mailer.selectedFolder);
    }
  });

})(wrap(document));
