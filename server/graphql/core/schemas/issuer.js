export const IssuerTypes = `
type Issuer{
  id: String
  created: Int
  type: String
  status: String
  name: String
  content: String
  url: String
  roles: [Role]
  templates: [Template]
}

type IssuerList {
  has_more: Boolean
  data: [Issuer]
}

`
export const IssuerQuery =
`
issuerRetrieve (
  id: String
): Issuer

issuerList (
  limit: Int
): [IssuerList]
`
export const IssuerMutation =
`
issuerCreate (
  status: String
  type: String
  created: Int
): Issuer

issuerUpdate (
  id: String!
  status: String
  type: String
  created: Int
): Issuer

issuerDelete (
  id: String!
): Issuer
`
