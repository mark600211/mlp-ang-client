import gql from "graphql-tag";

export const WholeCustomer = {
  document: gql`
    fragment WholeCustomer on Customer {
      id
      fullname
      label
      address {
        zip
        country
        region
        city
        street
        building
        room
      }
      tel
      email
    }
  `,
};

export const WholeLab = {
  document: gql`
    fragment WholeLab on Lab {
      id
      fullname
      label
      address {
        zip
        country
        region
        city
        street
        building
        room
      }
      tel
      email
    }
  `,
};

export const WholeGeneralCustomer = {
  document: gql`
    fragment WholeGeneralCustomer on GeneralCustomer {
      id
      fullname
      label
      address {
        zip
        country
        region
        city
        street
        building
        room
      }
      tel
      email
    }
  `,
};
