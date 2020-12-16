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
      objectName
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
      climaticEnvironmental
      planning
      normativeDocuments {
        id
      }
      sampleType {
        id
      }
      sample
      preparation {
        id
      }
      goal {
        id
      }
      definedIndicators {
        id
      }
      additions
      informationAboutSelection
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
