import gql from "graphql-tag";

export class getAllActs {
  document = gql`
    query findAllAct {
      findAllAct {
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
        datetime {
          date
          time
        }
      }
    }
  `;
}
