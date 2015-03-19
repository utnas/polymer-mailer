(function () {
  'use strict';

  Polymer({
    // define element prototype here
    emails: [
      {
        id: 1,
        from: "Albator",
        to: "Rudy",
        subject: "I will be back",
        date: new Date(2014, 2, 20, 15, 30).toUTCString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
      },
      {
        id: 2,
        from: "Capitaine Flam",
        to: "Rudy",
        subject: "Kiss from sky",
        date: new Date(2014, 3, 18, 16, 12).toUTCString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      },
      {
        id: 3,
        from: "Pikachu",
        to: "Rudy",
        subject: "Pika pika !",
        date: new Date(2014, 2, 15, 16, 12).toUTCString(),
        content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika."
      },
      {
        id: 4,
        from: "Barbapapa",
        to: "Rudy",
        subject: "Hulahup Barbatruc",
        date: new Date(2014, 2, 15, 14, 15).toUTCString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
      }
    ]
  });
})();
