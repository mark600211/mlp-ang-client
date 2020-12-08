import gql from "graphql-tag";

export class CreateRulesLabTos {
  document = gql`
    mutation CreateRulesLabTos($data: NewLabTypeOfSampleTemplate!) {
      createLabTypeOfSampleTemplateModel(data: $data) {
        labId
        path
        typeOfSampleId
      }
    }
  `;
}

export class PatchRulesLabTos {
  document = gql`
    mutation PatchRulesLabTos($data: String!, $id: String!) {
      updateLabTypeOfSampleTemplateModel(data: $data, id: $id) {
        labId
        path
        typeOfSampleId
      }
    }
  `;
}
