import gql from "graphql-tag";
import { WholeActWithIds, WholeApplication } from "./fragments.graphql";

export class getAllActs {
  document = gql`
    query findAllAct($conditions: TableConditions!) {
      getTableContent(conditions: $conditions) {
        acts {
          id
          name
          customer {
            id
            label
          }
          generalCustomer {
            id
            label
          }
          lab {
            id
            label
          }
          typeOfSample {
            id
            label
          }
          datetime {
            date
            time
          }
        }
        uniqCustomers
        uniqGeneralCustomers
        uniqLabs
        uniqTypeOfSamples
        totalCount
      }
    }
  `;
}

// export class getActForItem {
//   document = gql`
//     query getActForItem {
//       getActs {
//         id
//         name
//         status
//         lab {
//           label
//         }
//       }
//     }
//   `;
// }

// export class getActIds {
//   document = gql`
//     query getActIds {
//       getActs {
//         id
//       }
//     }
//   `;
// }

// export class getActForDetails {
//   document = gql`
//     query getActForDetails($actId: String!) {
//       getAct(id: $actId) {
//         id
//         name
//         typeOfSample {
//           habitan {
//             id
//           }
//         }
//         lab {
//           id
//         }
//       }
//     }
//   `;
// }

export class getWholeActWithIds {
  document = gql`
    query getWholeActWithIds($data: String!) {
      findByIdAct(id: $data) {
        ...WholeActWithIds
      }
    }
    ${WholeActWithIds.document}
  `;
}

export class getAppById {
  document = gql`
    query getAppById($data: String!) {
      findByIdApplication(id: $data) {
        ...WholeApplication
      }
    }
    ${WholeApplication.document}
  `;
}
