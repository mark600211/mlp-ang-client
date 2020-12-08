import gql from "graphql-tag";

export class CreateCustomer {
  document = gql`
    mutation CreateCustomer($data: CreateConsumerDto!) {
      createCustomer(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchCustomer {
  document = gql`
    mutation PatchCustomer($data: PatchConsumerDto!, $id: String!) {
      updateCustomer(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateGeneralCustomer {
  document = gql`
    mutation CreateGeneralCustomer($data: CreateConsumerDto!) {
      createGeneralCustomer(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchGeneralCustomer {
  document = gql`
    mutation PatchGeneralCustomer($data: PatchConsumerDto!, $id: String!) {
      updateGeneralCustomer(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateLabCustomer {
  document = gql`
    mutation CreateLab($data: CreateConsumerDto!) {
      createLab(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchLab {
  document = gql`
    mutation PatchLab($data: PatchConsumerDto!, $id: String!) {
      updateLab(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}
