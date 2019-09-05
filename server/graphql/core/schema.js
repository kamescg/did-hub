/* ------ Global Dependencies ------ */
import { makeExecutableSchema } from 'graphql-tools'

/* ------ Local Dependencies ------ */
import resolvers from './resolvers'
import { IssuerTypes, IssuerQuery, IssuerMutation } from './schemas/issuer'
import { PersonTypes, PersonQuery, PersonMutation } from './schemas/Person'
import { CredentialTypes, CredentialQuery, CredentialMutation } from './schemas/Credential'
import { TemplateTypes, TemplateQuery, TemplateMutation } from './schemas/Template'

const schema = `

# ================= #
#  Top Level Types  #
# ================= #
${IssuerTypes}
${PersonTypes}
${CredentialTypes}
${TemplateTypes}

# ================= #
# ===== Query ===== #
# ================= #
type Query {
  ${IssuerQuery}
  ${PersonQuery}
  ${CredentialQuery}
  ${TemplateQuery}
}

# ================= #
# ===  Mutation === #
# ================= #
type Mutation {
  ${IssuerMutation}
  ${PersonMutation}
  ${CredentialMutation}
  ${TemplateMutation}
}

# ================= #
# ===== Types ===== #
# ================= #
type Role {
  parent: String
  type: String
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

type RoleInput {
  parent: String
  type: String
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
