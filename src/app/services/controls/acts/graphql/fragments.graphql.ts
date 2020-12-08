import gql from "graphql-tag";

export const WholeActWithIds = {
  document: gql`
    fragment WholeActWithIds on Act {
      id
      name
      customer {
        id
      }
      generalCustomer {
        id
      }
      lab {
        id
      }
      typeOfSample {
        id
      }
      objectName {
        id
      }
      place {
        id
      }
      datetime {
        date
        time
      }
      method {
        id
      }
      toolType {
        id
      }
      climaticEnvironmental {
        id
      }
      planning {
        id
      }
      normativeDocuments {
        id
      }
      sampleType {
        id
      }
      sample {
        id
      }
      preparation {
        id
      }
      goal {
        id
      }
      definedIndicators {
        id
      }
      additions {
        id
      }
      informationAboutSelection {
        id
      }
      environmentalEngineer {
        id
      }
      representative {
        id
      }
      passedSample {
        id
      }
      applications {
        id
        place
        datetime {
          date
          time
        }
      }
    }
  `,
};

export const WholeApplication = {
  document: gql`
    fragment WholeApplication on Application {
      id
      place
      datetime {
        date
        time
      }
    }
  `,
};
