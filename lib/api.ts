export type Project = {
  sys: {
    id: string
  }
  slug: string
  name: string
  client?: string
  summary?: string
  description?: string
  image: {
    url: string
  }
}

async function fetchGraphQL(query: string) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json())
}

export async function getAllProjects(limit: number): Promise<Project[]> {
  const response = await fetchGraphQL(`
    {
      projectCollection(limit: ${limit}) {
        items {
          sys {
            id
          }
          slug
          name
          summary
          image {
            url
          }
        }
      }
    }
  `)

  return response?.data?.projectCollection?.items
}

export async function getProject(slug: string): Promise<Project> {
  const response = await fetchGraphQL(`
    {
      projectCollection(where: { slug: "${slug}" }) {
        items {
          sys {
            id
          }
          slug
          name
          client
          summary
          description
          image {
            url
          }
        }
      }
    }
  `)

  return response?.data?.projectCollection?.items[0]
}
