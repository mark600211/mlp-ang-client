import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type Act = {
  __typename?: 'Act';
  additions: AdditionAct;
  applications: Array<Application>;
  climaticEnvironmental: ClimaticEnvironmentalAct;
  customer: CustomerAct;
  datetime: DateAndTime;
  definedIndicators: Array<DefinedIndicatorsAct>;
  environmentalEngineer: EnvironmentalEngineerAct;
  generalCustomer: GeneralCustomerAct;
  goal: GoalAct;
  id: Scalars['ID'];
  informationAboutSelection: InformationAboutSelectionAct;
  isCorrect: Scalars['Boolean'];
  lab: LabAct;
  method: MethodAct;
  name: Scalars['String'];
  normativeDocuments: Array<NormativeDocumentAct>;
  objectName: ObjectNameAct;
  passedSample: PassedSampleAct;
  place: PlaceAct;
  planning: PlanningAct;
  preparation: Array<PreparationAct>;
  representative: RepresentativeAct;
  sample: Array<SampleAct>;
  sampleType: SampleTypeAct;
  status: Scalars['String'];
  toolType: ToolTypeAct;
  typeOfSample: TypeOfSampleAct;
};

export type AdditionAct = {
  __typename?: 'AdditionAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type AddresInput = {
  building?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  room?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  building?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  room?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Application = {
  __typename?: 'Application';
  datetime: DateAndTime;
  id: Scalars['ID'];
  place: Scalars['String'];
};

export type ApplicationInput = {
  datetime: DateTimeInput;
  id: Scalars['ID'];
  place: Scalars['String'];
};

export type ClimaticEnvironmentalAct = {
  __typename?: 'ClimaticEnvironmentalAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type CustomerAct = {
  __typename?: 'CustomerAct';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
};

export type DateAndTime = {
  __typename?: 'DateAndTime';
  date: Scalars['DateTime'];
  time: Scalars['String'];
};


export type DateTimeInput = {
  date: Scalars['DateTime'];
  time: Scalars['String'];
};

export type DefinedIndicatorsAct = {
  __typename?: 'DefinedIndicatorsAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type EnvironmentalEngineerAct = {
  __typename?: 'EnvironmentalEngineerAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type GeneralCustomerAct = {
  __typename?: 'GeneralCustomerAct';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
};

export type GoalAct = {
  __typename?: 'GoalAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type InformationAboutSelectionAct = {
  __typename?: 'InformationAboutSelectionAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type LabAct = {
  __typename?: 'LabAct';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
};

export type MethodAct = {
  __typename?: 'MethodAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAct: Act;
  createApplication: Application;
  createTest: Test;
  deleteByIdAct?: Maybe<Act>;
  deleteByIdApplication?: Maybe<Application>;
  deleteByIdTest?: Maybe<Test>;
  updateAct: Act;
  updateApplication: Application;
  updateTest: Test;
  updateWhereAct: Act;
  updateWhereApplication: Application;
  updateWhereTest: Test;
};


export type MutationCreateActArgs = {
  data: NewActDto;
};


export type MutationCreateApplicationArgs = {
  data: PatchAppDto;
};


export type MutationCreateTestArgs = {
  data: Scalars['String'];
};


export type MutationDeleteByIdActArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdApplicationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdTestArgs = {
  id: Scalars['String'];
};


export type MutationUpdateActArgs = {
  data: PatchActDto;
  id: Scalars['String'];
};


export type MutationUpdateApplicationArgs = {
  data: PatchAppDto;
  id: Scalars['String'];
};


export type MutationUpdateTestArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateWhereActArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereApplicationArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereTestArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};

export type NewActDto = {
  additions?: Maybe<Scalars['String']>;
  applications?: Maybe<Array<ApplicationInput>>;
  climaticEnvironmental?: Maybe<Scalars['String']>;
  customer: Scalars['String'];
  datetime?: Maybe<DateTimeInput>;
  definedIndicators?: Maybe<Array<Scalars['String']>>;
  environmentalEngineer?: Maybe<Scalars['String']>;
  generalCustomer: Scalars['String'];
  goal?: Maybe<Scalars['String']>;
  informationAboutSelection?: Maybe<Scalars['String']>;
  lab: Scalars['String'];
  method?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  normativeDocument?: Maybe<Array<Scalars['String']>>;
  objectName?: Maybe<Scalars['String']>;
  passedSample?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  planning?: Maybe<Scalars['String']>;
  preparation?: Maybe<Array<Scalars['String']>>;
  representative?: Maybe<Scalars['String']>;
  sample?: Maybe<Array<Scalars['String']>>;
  sampleType?: Maybe<Scalars['String']>;
  toolType?: Maybe<Scalars['String']>;
  typeOfSample: Scalars['String'];
};

export type NormativeDocumentAct = {
  __typename?: 'NormativeDocumentAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type ObjectNameAct = {
  __typename?: 'ObjectNameAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PassedSampleAct = {
  __typename?: 'PassedSampleAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PatchActDto = {
  additions?: Maybe<Scalars['String']>;
  applications?: Maybe<Array<ApplicationInput>>;
  climaticEnvironmental?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  datetime?: Maybe<DateTimeInput>;
  definedIndicators?: Maybe<Array<Scalars['String']>>;
  environmentalEngineer?: Maybe<Scalars['String']>;
  generalCustomer?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  informationAboutSelection?: Maybe<Scalars['String']>;
  lab?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normativeDocument?: Maybe<Array<Scalars['String']>>;
  objectName?: Maybe<Scalars['String']>;
  passedSample?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  planning?: Maybe<Scalars['String']>;
  preparation?: Maybe<Array<Scalars['String']>>;
  representative?: Maybe<Scalars['String']>;
  sample?: Maybe<Array<Scalars['String']>>;
  sampleType?: Maybe<Scalars['String']>;
  toolType?: Maybe<Scalars['String']>;
  typeOfSample?: Maybe<Scalars['String']>;
};

export type PatchAppDto = {
  datetime: DateTimeInput;
  place: Scalars['String'];
};

export type PlaceAct = {
  __typename?: 'PlaceAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PlanningAct = {
  __typename?: 'PlanningAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PreparationAct = {
  __typename?: 'PreparationAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAllAct: Array<Act>;
  findAllApplication: Array<Application>;
  findAllTest: Array<Test>;
  findByIdAct: Act;
  findByIdApplication: Application;
  findByIdTest: Test;
  findManyWhereAct: Array<Act>;
  findManyWhereApplication: Array<Application>;
  findManyWhereTest: Array<Test>;
  findOneWhereAct: Act;
  findOneWhereApplication: Application;
  findOneWhereTest: Test;
};


export type QueryFindByIdActArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdApplicationArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdTestArgs = {
  id: Scalars['String'];
};


export type QueryFindManyWhereActArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereApplicationArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereTestArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereActArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereApplicationArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereTestArgs = {
  where: Scalars['String'];
};

export type RepresentativeAct = {
  __typename?: 'RepresentativeAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type SampleAct = {
  __typename?: 'SampleAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type SampleTypeAct = {
  __typename?: 'SampleTypeAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID'];
  test: Scalars['String'];
};

export type ToolTypeAct = {
  __typename?: 'ToolTypeAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type TypeOfSampleAct = {
  __typename?: 'TypeOfSampleAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type WholeActWithIdsFragment = (
  { __typename?: 'Act' }
  & Pick<Act, 'id' | 'name'>
  & { customer: (
    { __typename?: 'CustomerAct' }
    & Pick<CustomerAct, 'id'>
  ), generalCustomer: (
    { __typename?: 'GeneralCustomerAct' }
    & Pick<GeneralCustomerAct, 'id'>
  ), lab: (
    { __typename?: 'LabAct' }
    & Pick<LabAct, 'id'>
  ), typeOfSample: (
    { __typename?: 'TypeOfSampleAct' }
    & Pick<TypeOfSampleAct, 'id'>
  ), objectName: (
    { __typename?: 'ObjectNameAct' }
    & Pick<ObjectNameAct, 'id'>
  ), place: (
    { __typename?: 'PlaceAct' }
    & Pick<PlaceAct, 'id'>
  ), datetime: (
    { __typename?: 'DateAndTime' }
    & Pick<DateAndTime, 'date' | 'time'>
  ), method: (
    { __typename?: 'MethodAct' }
    & Pick<MethodAct, 'id'>
  ), toolType: (
    { __typename?: 'ToolTypeAct' }
    & Pick<ToolTypeAct, 'id'>
  ), climaticEnvironmental: (
    { __typename?: 'ClimaticEnvironmentalAct' }
    & Pick<ClimaticEnvironmentalAct, 'id'>
  ), planning: (
    { __typename?: 'PlanningAct' }
    & Pick<PlanningAct, 'id'>
  ), normativeDocuments: Array<(
    { __typename?: 'NormativeDocumentAct' }
    & Pick<NormativeDocumentAct, 'id'>
  )>, sampleType: (
    { __typename?: 'SampleTypeAct' }
    & Pick<SampleTypeAct, 'id'>
  ), sample: Array<(
    { __typename?: 'SampleAct' }
    & Pick<SampleAct, 'id'>
  )>, preparation: Array<(
    { __typename?: 'PreparationAct' }
    & Pick<PreparationAct, 'id'>
  )>, goal: (
    { __typename?: 'GoalAct' }
    & Pick<GoalAct, 'id'>
  ), definedIndicators: Array<(
    { __typename?: 'DefinedIndicatorsAct' }
    & Pick<DefinedIndicatorsAct, 'id'>
  )>, additions: (
    { __typename?: 'AdditionAct' }
    & Pick<AdditionAct, 'id'>
  ), informationAboutSelection: (
    { __typename?: 'InformationAboutSelectionAct' }
    & Pick<InformationAboutSelectionAct, 'id'>
  ), environmentalEngineer: (
    { __typename?: 'EnvironmentalEngineerAct' }
    & Pick<EnvironmentalEngineerAct, 'id'>
  ), representative: (
    { __typename?: 'RepresentativeAct' }
    & Pick<RepresentativeAct, 'id'>
  ), passedSample: (
    { __typename?: 'PassedSampleAct' }
    & Pick<PassedSampleAct, 'id'>
  ), applications: Array<(
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'place'>
    & { datetime: (
      { __typename?: 'DateAndTime' }
      & Pick<DateAndTime, 'date' | 'time'>
    ) }
  )> }
);

export type WholeApplicationFragment = (
  { __typename?: 'Application' }
  & Pick<Application, 'id' | 'place'>
  & { datetime: (
    { __typename?: 'DateAndTime' }
    & Pick<DateAndTime, 'date' | 'time'>
  ) }
);

export type PostActMutationVariables = Exact<{
  data: NewActDto;
}>;


export type PostActMutation = (
  { __typename?: 'Mutation' }
  & { createAct: (
    { __typename?: 'Act' }
    & Pick<Act, 'id' | 'name'>
  ) }
);

export type PatchActMutationVariables = Exact<{
  data: PatchActDto;
  id: Scalars['String'];
}>;


export type PatchActMutation = (
  { __typename?: 'Mutation' }
  & { updateAct: (
    { __typename?: 'Act' }
    & Pick<Act, 'id' | 'name'>
  ) }
);

export type CreatAppMutationVariables = Exact<{
  data: PatchAppDto;
}>;


export type CreatAppMutation = (
  { __typename?: 'Mutation' }
  & { createApplication: (
    { __typename?: 'Application' }
    & Pick<Application, 'id'>
  ) }
);

export type FindAllActQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllActQuery = (
  { __typename?: 'Query' }
  & { findAllAct: Array<(
    { __typename?: 'Act' }
    & Pick<Act, 'id' | 'name'>
    & { customer: (
      { __typename?: 'CustomerAct' }
      & Pick<CustomerAct, 'id' | 'label'>
    ), generalCustomer: (
      { __typename?: 'GeneralCustomerAct' }
      & Pick<GeneralCustomerAct, 'id' | 'label'>
    ), lab: (
      { __typename?: 'LabAct' }
      & Pick<LabAct, 'id' | 'label'>
    ), typeOfSample: (
      { __typename?: 'TypeOfSampleAct' }
      & Pick<TypeOfSampleAct, 'id' | 'label'>
    ), datetime: (
      { __typename?: 'DateAndTime' }
      & Pick<DateAndTime, 'date' | 'time'>
    ) }
  )> }
);

export type GetWholeActWithIdsQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetWholeActWithIdsQuery = (
  { __typename?: 'Query' }
  & { findByIdAct: (
    { __typename?: 'Act' }
    & WholeActWithIdsFragment
  ) }
);

export type GetAppByIdQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetAppByIdQuery = (
  { __typename?: 'Query' }
  & { findByIdApplication: (
    { __typename?: 'Application' }
    & WholeApplicationFragment
  ) }
);

export const WholeActWithIdsFragmentDoc = gql`
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
    `;
export const WholeApplicationFragmentDoc = gql`
    fragment WholeApplication on Application {
  id
  place
  datetime {
    date
    time
  }
}
    `;
export const PostActDocument = gql`
    mutation PostAct($data: NewActDto!) {
  createAct(data: $data) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostActGQL extends Apollo.Mutation<PostActMutation, PostActMutationVariables> {
    document = PostActDocument;
    client = 'ActsClient';
  }
export const PatchActDocument = gql`
    mutation PatchAct($data: PatchActDto!, $id: String!) {
  updateAct(data: $data, id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchActGQL extends Apollo.Mutation<PatchActMutation, PatchActMutationVariables> {
    document = PatchActDocument;
    client = 'ActsClient';
  }
export const CreatAppDocument = gql`
    mutation CreatApp($data: PatchAppDto!) {
  createApplication(data: $data) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatAppGQL extends Apollo.Mutation<CreatAppMutation, CreatAppMutationVariables> {
    document = CreatAppDocument;
    client = 'ActsClient';
  }
export const FindAllActDocument = gql`
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
    typeOfSample {
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

  @Injectable({
    providedIn: 'root'
  })
  export class FindAllActGQL extends Apollo.Query<FindAllActQuery, FindAllActQueryVariables> {
    document = FindAllActDocument;
    client = 'ActsClient';
  }
export const GetWholeActWithIdsDocument = gql`
    query getWholeActWithIds($data: String!) {
  findByIdAct(id: $data) {
    ...WholeActWithIds
  }
}
    ${WholeActWithIdsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWholeActWithIdsGQL extends Apollo.Query<GetWholeActWithIdsQuery, GetWholeActWithIdsQueryVariables> {
    document = GetWholeActWithIdsDocument;
    client = 'ActsClient';
  }
export const GetAppByIdDocument = gql`
    query getAppById($data: String!) {
  findByIdApplication(id: $data) {
    ...WholeApplication
  }
}
    ${WholeApplicationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAppByIdGQL extends Apollo.Query<GetAppByIdQuery, GetAppByIdQueryVariables> {
    document = GetAppByIdDocument;
    client = 'ActsClient';
  }