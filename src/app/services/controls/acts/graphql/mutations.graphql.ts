import gql from "graphql-tag";

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
    mutation CreatApp($data: PatchAppDto!) {
      createApplication(data: $data) {
        id
      }
    }
  `;
}

// export class DeleteApp {
//   document = gql`
//     mutation DeleteApp($data: String!) {
//       deleteByIdApplication(id: $data) {
//         id
//       }
//     }
//   `;
// }
