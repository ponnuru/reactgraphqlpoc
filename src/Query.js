const githubQuery = {
    query: `
    {
        viewer {
          name
        }
        search(query: "user:ponnuru sort:updated-desc", type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
              name
              description
              id
              url
              licenseInfo{
                spdxId
              }
            }
          }
        }
      }
    `,
 };
 export default githubQuery;