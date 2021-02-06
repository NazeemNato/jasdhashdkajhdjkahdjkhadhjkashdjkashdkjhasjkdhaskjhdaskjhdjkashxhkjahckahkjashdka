/**
 * Initializes an instance of ApolloServer
 */
import { join } from 'path';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { ResolverMap } from 'src/typedefs/resolver';

import helloResolver from 'src/hello';
import { addResolversToSchema } from '@graphql-tools/schema';

/**
 * Initializes all GraphQL resolvers and other related resources,
 * and instantiates an instance of ApolloServer.
 *
 * @return {ApolloServer} the instantiated instance of ApolloServer.
 */
function loadApolloServer(): ApolloServer {
  const schema = loadSchemaSync(join(__dirname, '..', 'schema.gql'), {
    loaders: [new GraphQLFileLoader()],
  });

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers: combineResolvers(
      helloResolver,
      // remember to add resolvers of other domains
    ),
  });

  return new ApolloServer({ schema: schemaWithResolvers });
}

/**
 * Combines all given resolvers into one single resolver object.
 * @param resolvers {ResolverMap[]} The resolvers to be combined.
 * @return {ResolverMap} The combined resolver object.
 */
function combineResolvers(...resolvers: ResolverMap[]) {
  return resolvers.reduce((combinedResolver, resolver) => {
    Object.keys(resolver).forEach((typeName) => {
      combinedResolver[typeName] = {
        ...(combinedResolver[typeName] ?? {}),
        ...resolver[typeName],
      };
    });
    return combinedResolver;
  }, {});
}

export default loadApolloServer;
