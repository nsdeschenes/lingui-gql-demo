const { demo } = require('./src/demo')

const { setupI18n } = require('@lingui/core')

const englishMessages = require('./src/locale/en/messages')
const frenchMessages = require('./src/locale/fr/messages')

const i18n = setupI18n({
  language: 'en',
  locales: ['en', 'fr'],
  missing: 'Traduction manquante',
  catalogs: {
    en: englishMessages,
    fr: frenchMessages,
  },
})

demo({ i18n })
