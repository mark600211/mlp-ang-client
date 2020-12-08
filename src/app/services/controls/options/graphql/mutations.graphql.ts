import gql from "graphql-tag";

export class CreateTypeOfSample {
  document = gql`
    mutation CreateTypeOfSample($data: NewOption!) {
      createTypeOfSample(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchTypeOfSample {
  document = gql`
    mutation PatchTypeOfSample($data: PatchOption!, $id: String!) {
      updateTypeOfSample(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateObjectName {
  document = gql`
    mutation CreateObjectName($data: NewOption!) {
      createObjectName(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchObjectName {
  document = gql`
    mutation PatchObjectName($data: PatchOption!, $id: String!) {
      updateObjectName(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreatePlace {
  document = gql`
    mutation CreatePlace($data: NewOption!) {
      createPlace(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchPlace {
  document = gql`
    mutation PatchPlace($data: PatchOption!, $id: String!) {
      updatePlace(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateMethod {
  document = gql`
    mutation CreateMethod($data: NewOption!) {
      createMethod(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchMethod {
  document = gql`
    mutation PatchMethod($data: PatchOption!, $id: String!) {
      updateMethod(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateToolType {
  document = gql`
    mutation CreateToolType($data: NewOption!) {
      createToolType(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchToolType {
  document = gql`
    mutation PatchToolType($data: PatchOption!, $id: String!) {
      updateToolType(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateClimaticEnvironmental {
  document = gql`
    mutation CreateClimaticEnvironmental($data: NewOption!) {
      createClimaticEnvironmental(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchClimaticEnvironmental {
  document = gql`
    mutation PatchClimaticEnvironmental($data: PatchOption!, $id: String!) {
      updateClimaticEnvironmental(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreatePlanning {
  document = gql`
    mutation CreatePlanning($data: NewOption!) {
      createPlanning(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchPlanning {
  document = gql`
    mutation PatchPlanning($data: PatchOption!, $id: String!) {
      updatePlanning(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateNormativeDocument {
  document = gql`
    mutation CreateNormativeDocument($data: NewOption!) {
      createNormativeDocument(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchNormativeDocument {
  document = gql`
    mutation PatchNormativeDocument($data: PatchOption!, $id: String!) {
      updateNormativeDocument(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateSampleType {
  document = gql`
    mutation CreateSampleType($data: NewOption!) {
      createSampleType(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchSampleType {
  document = gql`
    mutation PatchSampleType($data: PatchOption!, $id: String!) {
      updateSampleType(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateSample {
  document = gql`
    mutation CreateSample($data: NewOption!) {
      createSample(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchSample {
  document = gql`
    mutation PatchSample($data: PatchOption!, $id: String!) {
      updateSample(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreatePreparation {
  document = gql`
    mutation CreatePreparation($data: NewOption!) {
      createPreparation(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchPreparation {
  document = gql`
    mutation PatchPreparation($data: PatchOption!, $id: String!) {
      updatePreparation(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateGoal {
  document = gql`
    mutation CreateGoal($data: NewOption!) {
      createGoal(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchGoal {
  document = gql`
    mutation PatchGoal($data: PatchOption!, $id: String!) {
      updateGoal(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateDefinedIndicator {
  document = gql`
    mutation CreateDefinedIndicator($data: NewDefinedIndicator!) {
      createDefinedIndicator(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchDefinedIndicator {
  document = gql`
    mutation PatchDefinedIndicator(
      $data: PatchDefinedIndicator!
      $id: String!
    ) {
      updateDefinedIndicator(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateAddition {
  document = gql`
    mutation CreateAddition($data: NewOption!) {
      createAddition(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchAddition {
  document = gql`
    mutation PatchAddition($data: PatchOption!, $id: String!) {
      updateAddition(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateInformationAboutSelection {
  document = gql`
    mutation CreateInformationAboutSelection($data: NewOption!) {
      createInformationAboutSelection(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchInformationAboutSelection {
  document = gql`
    mutation PatchInformationAboutSelection($data: PatchOption!, $id: String!) {
      updateInformationAboutSelection(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateEnvironmentalEngineer {
  document = gql`
    mutation CreateEnvironmentalEngineer($data: NewOption!) {
      createEnvironmentalEngineer(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchEnvironmentalEngineer {
  document = gql`
    mutation PatchEnvironmentalEngineer($data: PatchOption!, $id: String!) {
      updateEnvironmentalEngineer(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreateRepresentative {
  document = gql`
    mutation CreateRepresentative($data: NewOption!) {
      createRepresentative(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchRepresentative {
  document = gql`
    mutation PatchRepresentative($data: PatchOption!, $id: String!) {
      updateRepresentative(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}

export class CreatePassedSample {
  document = gql`
    mutation CreatePassedSample($data: NewOption!) {
      createPassedSample(data: $data) {
        id
        label
      }
    }
  `;
}

export class PatchPassedSample {
  document = gql`
    mutation PatchPassedSample($data: PatchOption!, $id: String!) {
      updatePassedSample(data: $data, id: $id) {
        id
        label
      }
    }
  `;
}
