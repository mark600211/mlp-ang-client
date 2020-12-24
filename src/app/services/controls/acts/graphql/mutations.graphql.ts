import gql from "graphql-tag";
import { WholeApplication } from "./fragments.graphql";

export class PostAct {
  document = gql`
    mutation PostAct($data: NewActDto!) {
      createAct(data: $data) {
        id
        name
      }
    }
  `;
}

export class PatchAct {
  document = gql`
    mutation PatchAct($data: PatchActDto!, $id: String!) {
      updateAct(data: $data, id: $id) {
        id
        name
      }
    }
  `;
}

export class CreateApp {
  document = gql`
    mutation CreatApp($data: NewAppDto!) {
      createApplicationBase(data: $data) {
        ...WholeApplication
      }
    }
    ${WholeApplication.document}
  `;
}

export class CopyManyActsByIds {
  document = gql`
    mutation CopyManyActsByIds($ids: [String!]!, $num: Float!) {
      copyManyActsByIds(ids: $ids, num: $num)
    }
  `;
}

// export class DeleteApp {
//   document = gql`
//     mutation DeleteApp($data: String!) {
//       deleteByIdApplicationBase(id: $data) {
//         id
//       }
//     }
//   `;
// }
