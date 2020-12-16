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
  additions: Scalars['String'];
  applications: Array<Application>;
  climaticEnvironmental: Scalars['String'];
  customer: Customer;
  datetime: DateAndTime;
  definedIndicators: Array<DefinedIndicator>;
  environmentalEngineer: EnvironmentalEngineer;
  generalCustomer: GeneralCustomer;
  goal: Goal;
  id: Scalars['ID'];
  informationAboutSelection: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  lab: Lab;
  method: Method;
  name: Scalars['String'];
  normativeDocuments: Array<NormativeDocument>;
  objectName: Scalars['String'];
  passedSample: PassedSample;
  place: Place;
  planning: Scalars['String'];
  preparation: Array<Preparation>;
  representative: Representative;
  sample: Scalars['String'];
  sampleType: SampleType;
  status: Scalars['String'];
  toolType: ToolType;
  typeOfSample: TypeOfSample;
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

export type Customer = {
  __typename?: 'Customer';
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

export type DefinedIndicator = {
  __typename?: 'DefinedIndicator';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type EnvironmentalEngineer = {
  __typename?: 'EnvironmentalEngineer';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type GeneralCustomer = {
  __typename?: 'GeneralCustomer';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
};

export type Goal = {
  __typename?: 'Goal';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Lab = {
  __typename?: 'Lab';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
};

export type Method = {
  __typename?: 'Method';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAct: Act;
  createApplication: Application;
  deleteByIdAct?: Maybe<Act>;
  deleteByIdApplication?: Maybe<Application>;
  updateAct: Act;
  updateApplication: Application;
  updateWhereAct: Act;
  updateWhereApplication: Application;
};


export type MutationCreateActArgs = {
  data: NewActDto;
};


export type MutationCreateApplicationArgs = {
  data: PatchAppDto;
};


export type MutationDeleteByIdActArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdApplicationArgs = {
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


export type MutationUpdateWhereActArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereApplicationArgs = {
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
  sample?: Maybe<Scalars['String']>;
  sampleType?: Maybe<Scalars['String']>;
  toolType?: Maybe<Scalars['String']>;
  typeOfSample: Scalars['String'];
};

export type NormativeDocument = {
  __typename?: 'NormativeDocument';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PassedSample = {
  __typename?: 'PassedSample';
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
  sample?: Maybe<Scalars['String']>;
  sampleType?: Maybe<Scalars['String']>;
  toolType?: Maybe<Scalars['String']>;
  typeOfSample?: Maybe<Scalars['String']>;
};

export type PatchAppDto = {
  datetime: DateTimeInput;
  place: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Preparation = {
  __typename?: 'Preparation';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAllAct: Array<Act>;
  findAllApplication: Array<Application>;
  findByIdAct: Act;
  findByIdApplication: Application;
  findManyWhereAct: Array<Act>;
  findManyWhereApplication: Array<Application>;
  findOneWhereAct: Act;
  findOneWhereApplication: Application;
  getTableContent: TableContent;
};


export type QueryFindAllActArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllApplicationArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindByIdActArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdApplicationArgs = {
  id: Scalars['String'];
};


export type QueryFindManyWhereActArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereApplicationArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereActArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereApplicationArgs = {
  where: Scalars['String'];
};


export type QueryGetTableContentArgs = {
  conditions: TableConditions;
};

export type Representative = {
  __typename?: 'Representative';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type SampleType = {
  __typename?: 'SampleType';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type TableConditions = {
  dateRangeEnd?: Maybe<Scalars['DateTime']>;
  dateRangeStart?: Maybe<Scalars['DateTime']>;
  skip: Scalars['Int'];
  sort?: Maybe<Scalars['String']>;
  sortDirection?: Maybe<Scalars['String']>;
  take: Scalars['Int'];
  wheres?: Maybe<Array<Where>>;
};

export type TableContent = {
  __typename?: 'TableContent';
  acts: Array<Act>;
  totalCount: Scalars['Int'];
  uniqCustomers: Array<Scalars['ID']>;
  uniqGeneralCustomers: Array<Scalars['ID']>;
  uniqLabs: Array<Scalars['ID']>;
  uniqTypeOfSamples: Array<Scalars['ID']>;
};

export type ToolType = {
  __typename?: 'ToolType';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type TypeOfSample = {
  __typename?: 'TypeOfSample';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Where = {
  ids: Array<Scalars['ID']>;
  relation: Scalars['String'];
};

export type WholeActWithIdsFragment = (
  { __typename?: 'Act' }
  & Pick<Act, 'id' | 'name' | 'objectName' | 'climaticEnvironmental' | 'planning' | 'sample' | 'additions' | 'informationAboutSelection'>
  & { customer: (
    { __typename?: 'Customer' }
    & Pick<Customer, 'id'>
  ), generalCustomer: (
    { __typename?: 'GeneralCustomer' }
    & Pick<GeneralCustomer, 'id'>
  ), lab: (
    { __typename?: 'Lab' }
    & Pick<Lab, 'id'>
  ), typeOfSample: (
    { __typename?: 'TypeOfSample' }
    & Pick<TypeOfSample, 'id'>
  ), place: (
    { __typename?: 'Place' }
    & Pick<Place, 'id'>
  ), datetime: (
    { __typename?: 'DateAndTime' }
    & Pick<DateAndTime, 'date' | 'time'>
  ), method: (
    { __typename?: 'Method' }
    & Pick<Method, 'id'>
  ), toolType: (
    { __typename?: 'ToolType' }
    & Pick<ToolType, 'id'>
  ), normativeDocuments: Array<(
    { __typename?: 'NormativeDocument' }
    & Pick<NormativeDocument, 'id'>
  )>, sampleType: (
    { __typename?: 'SampleType' }
    & Pick<SampleType, 'id'>
  ), preparation: Array<(
    { __typename?: 'Preparation' }
    & Pick<Preparation, 'id'>
  )>, goal: (
    { __typename?: 'Goal' }
    & Pick<Goal, 'id'>
  ), definedIndicators: Array<(
    { __typename?: 'DefinedIndicator' }
    & Pick<DefinedIndicator, 'id'>
  )>, environmentalEngineer: (
    { __typename?: 'EnvironmentalEngineer' }
    & Pick<EnvironmentalEngineer, 'id'>
  ), representative: (
    { __typename?: 'Representative' }
    & Pick<Representative, 'id'>
  ), passedSample: (
    { __typename?: 'PassedSample' }
    & Pick<PassedSample, 'id'>
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

export type FindAllActQueryVariables = Exact<{
  conditions: TableConditions;
}>;


export type FindAllActQuery = (
  { __typename?: 'Query' }
  & { getTableContent: (
    { __typename?: 'TableContent' }
    & Pick<TableContent, 'uniqCustomers' | 'uniqGeneralCustomers' | 'uniqLabs' | 'uniqTypeOfSamples' | 'totalCount'>
    & { acts: Array<(
      { __typename?: 'Act' }
      & Pick<Act, 'id' | 'name'>
      & { customer: (
        { __typename?: 'Customer' }
        & Pick<Customer, 'id' | 'label'>
      ), generalCustomer: (
        { __typename?: 'GeneralCustomer' }
        & Pick<GeneralCustomer, 'id' | 'label'>
      ), lab: (
        { __typename?: 'Lab' }
        & Pick<Lab, 'id' | 'label'>
      ), typeOfSample: (
        { __typename?: 'TypeOfSample' }
        & Pick<TypeOfSample, 'id' | 'label'>
      ), datetime: (
        { __typename?: 'DateAndTime' }
        & Pick<DateAndTime, 'date' | 'time'>
      ) }
    )> }
  ) }
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
    query findAllAct($conditions: TableConditions!) {
  getTableContent(conditions: $conditions) {
    acts {
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
    uniqCustomers
    uniqGeneralCustomers
    uniqLabs
    uniqTypeOfSamples
    totalCount
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