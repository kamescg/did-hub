export const PersonTypes = `
type Person{
  id: String
  created: Int
  type: String
  status: String
  name: String
  content: String
  url: String
}

type PersonList {
  has_more: Boolean
  data: [Person]
}

`
export const PersonQuery =
`
personRetrieve (
  id: String
): Person

personList (
  limit: Int
): [PersonList]
`
export const PersonMutation =
`
personCreate (
  status: String
  type: String
): Person

personUpdate (
  id: String!
  status: String
  type: String
): Person

personDelete (
  id: String!
): Person
`
