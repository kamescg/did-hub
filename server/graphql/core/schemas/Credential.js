export const CredentialTypes = `
type Credential{
  id: String
  created: Int
  type: String
  status: String
  name: String
  content: String
  url: String
}

type CredentialList {
  has_more: Boolean
  data: [Credential]
}

`
export const CredentialQuery =
`
credentialRetrieve (
  id: String
): Credential

credentialList (
  limit: Int
): [CredentialList]
`
export const CredentialMutation =
`
credentialCreate (
  status: String
  type: String
): Credential

credentialUpdate (
  id: String!
  status: String
  type: String
): Credential

credentialDelete (
  id: String!
): Credential
`
