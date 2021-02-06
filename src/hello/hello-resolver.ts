import { ResolverMap } from '../typedefs/resolver';

const helloResolver: ResolverMap = {
  Query: {
    hello: () => {
      console.log('test');
      return 'Hello world!';
    },
  },
};

export default helloResolver;
