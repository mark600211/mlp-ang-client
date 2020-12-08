import gql from "graphql-tag";
import {
  WholeCustomer,
  WholeGeneralCustomer,
  WholeLab,
} from "./fragment.graphql";

export class getCustomersForOption {
  document = gql`
    query getCustomersForOption {
      findAllCustomer {
        id
        label
      }
    }
  `;
}

export class getWholeCustomer {
  document = gql`
    query getWholeCustomer($data: String!) {
      findByIdCustomer(id: $data) {
        ...WholeCustomer
      }
    }
    ${WholeCustomer.document}
  `;
}

export class getGeneralCustomersForOption {
  document = gql`
    query getGeneralCustomersForOption {
      findAllGeneralCustomer {
        id
        label
      }
    }
  `;
}

export class getWholeGeneralCustomer {
  document = gql`
    query getWholeGeneralCustomer($data: String!) {
      findByIdGeneralCustomer(id: $data) {
        ...WholeGeneralCustomer
      }
    }
    ${WholeGeneralCustomer.document}
  `;
}

export class getLabsForOption {
  document = gql`
    query getLabsForOption {
      findAllLab {
        id
        label
      }
    }
  `;
}

export class getWholeLab {
  document = gql`
    query getWholeLab($data: String!) {
      findByIdLab(id: $data) {
        ...WholeLab
      }
    }
    ${WholeLab.document}
  `;
}
