/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  messages: {
    'Separate console log': 'Journal de bord s\xE9par\xE9 de la console',
    world: 'monde',
  },
}
