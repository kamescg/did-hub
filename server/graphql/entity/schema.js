/* ------ Global Dependencies ------ */
import { makeExecutableSchema } from 'graphql-tools'

/* ------ Local Dependencies ------ */
import resolvers from './resolvers'

const schema = `
# ================= #
# ===== Query ===== #
# ================= #
type Query {
  entityRetrieve (
    id: String
  ): EntityType
  
  entityList (
    limit: Int
  ): [EntityTypeList]
}

# ================= #
# ===  Mutation === #
# ================= #
type Mutation {

  entityCreate (
    status: String
    type: String
    created: Int
  ): EntityType
  
  entityUpdate (
    id: String!
    status: String
    type: String
    created: Int
  ): EntityType
  
  entityDelete (
    id: String!
    status: String
    type: String
    created: Int
  ): EntityType

}

# ================= #
# ===== Types ===== #
# ================= #
type EntityType {
  id: String
  created: Int
  type: String
  status: String
  name: String
  content: String
  url: String
}

type EntityTypeList {
  has_more: Boolean
  data: [EntityType]
}

# ================= #
# ==== Inputs  ==== #
# ================= #
input DateRangeInput {
  gt: Int
  gte: Int
  lt: Int
  lte: Int
}
# ================= #
# ==== Scalars ==== #
# ================= #


# ================= #
# ===== Union ===== #
# ================= #

`

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
