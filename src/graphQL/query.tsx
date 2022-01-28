import gql from 'graphql-tag';

export const GET_ISSUES = gql`

    query MyQuery($number: Int!, $state: [IssueState!], $cursor: String) {
        repository(owner: "reactjs", name: "reactjs.org") {
          issues(last: $number, states: $state, before: $cursor) {
            totalCount
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                title
                updatedAt
                url
                author {
                  ... on User {
                    name
                    url
                  }
                }
                closed
                number
                comments {
            totalCount
          }
              }
            }
          }
        }
      }

`
