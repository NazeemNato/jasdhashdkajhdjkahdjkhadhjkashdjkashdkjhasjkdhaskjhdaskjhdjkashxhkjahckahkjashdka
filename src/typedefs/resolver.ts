/**
 * Defines a function that resolves a GraphQL field.
 */
type Resolver = (
  parent?: unknown,
  args?: Record<string, unknown>,
  context?: unknown,
  info?: Record<string, any>,
) => any;

/**
 * Defines an object that maps fields of a GraphQL type to their
 * corresponding Resolver.
 */
interface FieldResolverMap {
  [fieldName: string]: Resolver;
}

/**
 * Resolver defines the apollo resolver object.
 */
export type ResolverMap = {
  Query?: FieldResolverMap;
  Mutation?: FieldResolverMap;
  Subscription?: FieldResolverMap;
} & { [typeName: string]: FieldResolverMap };
