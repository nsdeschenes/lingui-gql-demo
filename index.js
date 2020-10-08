const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const { setupI18n } = require("@lingui/core");
const { t } = require("@lingui/macro");

const englishMessages = require("./locale/en/messages");
const frenchMessages = require("./locale/fr/messages");

const i18n = setupI18n({
  language: "en",
  locales: ["en-CA", "fr-CA"],
  missing: "Translation missing",
  catalogs: {
    en: englishMessages,
    fr: frenchMessages,
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve(_, __, { translate }) {
          console.log(t`Separate console log`)
          return translate._(t`world`);
        },
      },
    },
  }),
});

const query = "{ hello }";

i18n.activate('en')

graphql(schema, query, null, { translate: i18n, consoleTranslate: i18n.use('en') }).then((result) =>
  console.log(result)
);

i18n.activate('fr')

graphql(schema, query, null, { translate: i18n, consoleTranslate: i18n.use('en') }).then((result) =>
  console.log(result)
);
