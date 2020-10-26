const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')
const { t } = require('@lingui/macro')

const demo = async ({ i18n }) => {
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve(_, __, { translate, consoleTranslate }) {
            console.log(consoleTranslate._(t`Separate console log`))
            return translate._(t`world`)
          },
        },
      },
    }),
  })

  const query = '{ hello }'

  i18n.activate('en')
  console.log('French Log, English Object:')

  await graphql(schema, query, null, {
    translate: i18n,
    consoleTranslate: i18n.use('fr'),
  }).then((result) => console.log(result))

  console.log()
  i18n.activate('fr')
  console.log('English Log, French Object:')

  await graphql(schema, query, null, {
    translate: i18n,
    consoleTranslate: i18n.use('en'),
  }).then((result) => console.log(result))
}

module.exports = {
  demo,
}
