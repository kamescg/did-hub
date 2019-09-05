/* ------ Global Dependencies ------ */

/* ------ Local Dependencies ------ */
import Issuer from './resolvers/issuer'

/* ------ Resolver Functions ------ */
const resolveFunctions = {
  Query: {
    ...Issuer.Query
  },
  Mutation: {
    ...Issuer.Mutation
  }
}

export default resolveFunctions
