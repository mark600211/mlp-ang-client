import gql from "graphql-tag";

export class getRuleForLabTos {
  document = gql`
    query getRuleForLabTos($data: FindLabTypeOfSampleTemplate!) {
      findOneWhereLabTypeOfSampleTemplateModel(where: $data) {
        labId
        path
        typeOfSampleId
      }
    }
  `;
}
