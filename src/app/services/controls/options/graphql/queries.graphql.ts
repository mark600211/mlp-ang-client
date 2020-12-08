import gql from "graphql-tag";

export class getTypeOfSamplesForOption {
  document = gql`
    query getTypeOfSamplesForOption {
      findAllTypeOfSample {
        id
        label
      }
    }
  `;
}

export class getObjectNamesForOption {
  document = gql`
    query getObjectNamesForOption {
      findAllObjectName {
        id
        label
      }
    }
  `;
}

export class getPlacesForOption {
  document = gql`
    query getPlacesForOption {
      findAllPlace {
        id
        label
      }
    }
  `;
}

export class getMethodsForOption {
  document = gql`
    query getMethodsForOption {
      findAllMethod {
        id
        label
      }
    }
  `;
}

export class getToolTypesForOption {
  document = gql`
    query getToolTypesForOption {
      findAllToolType {
        id
        label
      }
    }
  `;
}

export class getClimaticEnvironmentalsForOption {
  document = gql`
    query getClimaticEnvironmentalsForOption {
      findAllClimaticEnvironmental {
        id
        label
      }
    }
  `;
}

export class getPlanningsForOption {
  document = gql`
    query getPlanningsForOption {
      findAllPlanning {
        id
        label
      }
    }
  `;
}

export class getNormativeDocumentsForOption {
  document = gql`
    query getNormativeDocumentsForOption {
      findAllNormativeDocument {
        id
        label
      }
    }
  `;
}

export class getSampleTypesForOption {
  document = gql`
    query getSampleTypesForOption {
      findAllSampleType {
        id
        label
      }
    }
  `;
}

export class getSamplesForOption {
  document = gql`
    query getSamplesForOption {
      findAllSample {
        id
        label
      }
    }
  `;
}

export class getPreparationsForOption {
  document = gql`
    query getPreparationsForOption {
      findAllPreparation {
        id
        label
      }
    }
  `;
}

export class getGoalsForOption {
  document = gql`
    query getGoalForOption {
      findAllGoal {
        id
        label
      }
    }
  `;
}

export class getDefinedIndicatorsForOption {
  document = gql`
    query getDefinedIndicatorsForOption {
      findAllDefinedIndicator {
        id
        label
      }
    }
  `;
}

export class getAdditionsForOption {
  document = gql`
    query getAdditionsForOption {
      findAllAddition {
        id
        label
      }
    }
  `;
}

export class getInformationAboutSelectionsForOption {
  document = gql`
    query getInformationAboutSelectionsForOption {
      findAllInformationAboutSelection {
        id
        label
      }
    }
  `;
}

export class getEnvironmentalEngineersForOption {
  document = gql`
    query getEnvironmentalEngineersForOption {
      findAllEnvironmentalEngineer {
        id
        label
      }
    }
  `;
}

export class getRepresentativesForOption {
  document = gql`
    query getRepresentativesForOption {
      findAllRepresentative {
        id
        label
      }
    }
  `;
}

export class getPassedSamplesForOption {
  document = gql`
    query getPassedSamplesForOption {
      findAllPassedSample {
        id
        label
      }
    }
  `;
}

export class getTypeOfSample {
  document = gql`
    query getTypeOfSample($data: String!) {
      findByIdTypeOfSample(id: $data) {
        id
        label
      }
    }
  `;
}

export class getObjectName {
  document = gql`
    query getObjectName($data: String!) {
      findByIdObjectName(id: $data) {
        id
        label
      }
    }
  `;
}

export class getPlace {
  document = gql`
    query getPlace($data: String!) {
      findByIdPlace(id: $data) {
        id
        label
      }
    }
  `;
}

export class getMethod {
  document = gql`
    query getMethod($data: String!) {
      findByIdMethod(id: $data) {
        id
        label
      }
    }
  `;
}

export class getToolType {
  document = gql`
    query getToolType($data: String!) {
      findByIdToolType(id: $data) {
        id
        label
      }
    }
  `;
}

export class getClimaticEnvironmental {
  document = gql`
    query getClimaticEnvironmental($data: String!) {
      findByIdClimaticEnvironmental(id: $data) {
        id
        label
      }
    }
  `;
}

export class getPlanning {
  document = gql`
    query getPlanning($data: String!) {
      findByIdPlanning(id: $data) {
        id
        label
      }
    }
  `;
}

export class getNormativeDocument {
  document = gql`
    query getNormativeDocument($data: String!) {
      findByIdNormativeDocument(id: $data) {
        id
        label
      }
    }
  `;
}

export class getSampleType {
  document = gql`
    query getSampleType($data: String!) {
      findByIdSampleType(id: $data) {
        id
        label
      }
    }
  `;
}

export class getSample {
  document = gql`
    query getSample($data: String!) {
      findByIdSample(id: $data) {
        id
        label
      }
    }
  `;
}

export class getPreparation {
  document = gql`
    query getPreparation($data: String!) {
      findByIdPreparation(id: $data) {
        id
        label
      }
    }
  `;
}

export class getGoal {
  document = gql`
    query getGoal($data: String!) {
      findByIdGoal(id: $data) {
        id
        label
      }
    }
  `;
}

export class getDefinedIndicator {
  document = gql`
    query getDefinedIndicator($data: String!) {
      findByIdDefinedIndicator(id: $data) {
        id
        label
      }
    }
  `;
}

export class getAddition {
  document = gql`
    query getAddition($data: String!) {
      findByIdAddition(id: $data) {
        id
        label
      }
    }
  `;
}

export class getInformationAboutSelection {
  document = gql`
    query getInformationAboutSelection($data: String!) {
      findByIdInformationAboutSelection(id: $data) {
        id
        label
      }
    }
  `;
}

export class getEnvironmentalEngineer {
  document = gql`
    query getEnvironmentalEngineer($data: String!) {
      findByIdEnvironmentalEngineer(id: $data) {
        id
        label
      }
    }
  `;
}

export class getRepresentative {
  document = gql`
    query getRepresentative($data: String!) {
      findByIdRepresentative(id: $data) {
        id
        label
      }
    }
  `;
}

export class getPassedSample {
  document = gql`
    query getPassedSample($data: String!) {
      findByIdPassedSample(id: $data) {
        id
        label
      }
    }
  `;
}
