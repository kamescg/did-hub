export const TemplateTypes = `
type Template{
  id: String
  created: Int
  type: String
  status: String
  name: String
  content: String
  url: String
}

type TemplateList {
  has_more: Boolean
  data: [Template]
}

`
export const TemplateQuery =
`
templateRetrieve (
  id: String
): Template

templateList (
  limit: Int
): [TemplateList]
`
export const TemplateMutation =
`
templateCreate (
  status: String
  type: String
  created: Int
): Template

templateUpdate (
  id: String!
  status: String
  type: String
): Template

templateDelete (
  id: String!
): Template
`
