module.exports = {
  'Homepage is working': function (test) {
    test
      .open('http://localhost:5000/')
      .assert.title().is('Responsible Frontend', 'It has title')
      .assert.text('h1').is('Responsible Frontend', 'It has h1')
      .done();
  },
  'Base page is working': function (test) {
    test
      .open('http://localhost:5000/base')
      .assert.text('h1').is('Base styles', 'It has h1')
      .done();
  },
  'Form page is working': function (test) {
    test
      .open('http://localhost:5000/form')
      .assert.text('h1').is('Forms', 'It has h1')
      .done();
  }
};
