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

export type ClimaticEnvironmentalAct = {
  __typename?: 'ClimaticEnvironmentalAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type CreateConsumerDto = {
  address?: Maybe<AddresInput>;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
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

export type GeneralCustomer = {
  __typename?: 'GeneralCustomer';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
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

export type Lab = {
  __typename?: 'Lab';
  address: Address;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  tel?: Maybe<Scalars['String']>;
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
  createCustomer: Customer;
  createGeneralCustomer: GeneralCustomer;
  createLab: Lab;
  deleteByIdCustomer?: Maybe<Customer>;
  deleteByIdGeneralCustomer?: Maybe<GeneralCustomer>;
  deleteByIdLab?: Maybe<Lab>;
  updateCustomer: Customer;
  updateGeneralCustomer: GeneralCustomer;
  updateLab: Lab;
  updateWhereCustomer: Customer;
  updateWhereGeneralCustomer: GeneralCustomer;
  updateWhereLab: Lab;
};


export type MutationCreateCustomerArgs = {
  data: CreateConsumerDto;
};


export type MutationCreateGeneralCustomerArgs = {
  data: CreateConsumerDto;
};


export type MutationCreateLabArgs = {
  data: CreateConsumerDto;
};


export type MutationDeleteByIdCustomerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdGeneralCustomerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdLabArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  data: PatchConsumerDto;
  id: Scalars['String'];
};


export type MutationUpdateGeneralCustomerArgs = {
  data: PatchConsumerDto;
  id: Scalars['String'];
};


export type MutationUpdateLabArgs = {
  data: PatchConsumerDto;
  id: Scalars['String'];
};


export type MutationUpdateWhereCustomerArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereGeneralCustomerArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereLabArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
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

export type PatchConsumerDto = {
  address?: Maybe<AddresInput>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
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
  findAllCustomer: Array<Customer>;
  findAllGeneralCustomer: Array<GeneralCustomer>;
  findAllLab: Array<Lab>;
  findByIdCustomer: Customer;
  findByIdGeneralCustomer: GeneralCustomer;
  findByIdLab: Lab;
  findManyWhereCustomer: Array<Customer>;
  findManyWhereGeneralCustomer: Array<GeneralCustomer>;
  findManyWhereLab: Array<Lab>;
  findOneWhereCustomer: Customer;
  findOneWhereGeneralCustomer: GeneralCustomer;
  findOneWhereLab: Lab;
};


export type QueryFindByIdCustomerArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdGeneralCustomerArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdLabArgs = {
  id: Scalars['String'];
};


export type QueryFindManyWhereCustomerArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereGeneralCustomerArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereLabArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereCustomerArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereGeneralCustomerArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereLabArgs = {
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

export type WholeCustomerFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'id' | 'fullname' | 'label' | 'tel' | 'email'>
  & { address: (
    { __typename?: 'Address' }
    & Pick<Address, 'zip' | 'country' | 'region' | 'city' | 'street' | 'building' | 'room'>
  ) }
);

export type WholeLabFragment = (
  { __typename?: 'Lab' }
  & Pick<Lab, 'id' | 'fullname' | 'label' | 'tel' | 'email'>
  & { address: (
    { __typename?: 'Address' }
    & Pick<Address, 'zip' | 'country' | 'region' | 'city' | 'street' | 'building' | 'room'>
  ) }
);

export type WholeGeneralCustomerFragment = (
  { __typename?: 'GeneralCustomer' }
  & Pick<GeneralCustomer, 'id' | 'fullname' | 'label' | 'tel' | 'email'>
  & { address: (
    { __typename?: 'Address' }
    & Pick<Address, 'zip' | 'country' | 'region' | 'city' | 'street' | 'building' | 'room'>
  ) }
);

export type CreateCustomerMutationVariables = Exact<{
  data: CreateConsumerDto;
}>;


export type CreateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createCustomer: (
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'label'>
  ) }
);

export type PatchCustomerMutationVariables = Exact<{
  data: PatchConsumerDto;
  id: Scalars['String'];
}>;


export type PatchCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomer: (
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'label'>
  ) }
);

export type CreateGeneralCustomerMutationVariables = Exact<{
  data: CreateConsumerDto;
}>;


export type CreateGeneralCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createGeneralCustomer: (
    { __typename?: 'GeneralCustomer' }
    & Pick<GeneralCustomer, 'id' | 'label'>
  ) }
);

export type PatchGeneralCustomerMutationVariables = Exact<{
  data: PatchConsumerDto;
  id: Scalars['String'];
}>;


export type PatchGeneralCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateGeneralCustomer: (
    { __typename?: 'GeneralCustomer' }
    & Pick<GeneralCustomer, 'id' | 'label'>
  ) }
);

export type CreateLabMutationVariables = Exact<{
  data: CreateConsumerDto;
}>;


export type CreateLabMutation = (
  { __typename?: 'Mutation' }
  & { createLab: (
    { __typename?: 'Lab' }
    & Pick<Lab, 'id' | 'label'>
  ) }
);

export type PatchLabMutationVariables = Exact<{
  data: PatchConsumerDto;
  id: Scalars['String'];
}>;


export type PatchLabMutation = (
  { __typename?: 'Mutation' }
  & { updateLab: (
    { __typename?: 'Lab' }
    & Pick<Lab, 'id' | 'label'>
  ) }
);

export type GetCustomersForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllCustomer: Array<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'label'>
  )> }
);

export type GetWholeCustomerQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetWholeCustomerQuery = (
  { __typename?: 'Query' }
  & { findByIdCustomer: (
    { __typename?: 'Customer' }
    & WholeCustomerFragment
  ) }
);

export type GetGeneralCustomersForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralCustomersForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllGeneralCustomer: Array<(
    { __typename?: 'GeneralCustomer' }
    & Pick<GeneralCustomer, 'id' | 'label'>
  )> }
);

export type GetWholeGeneralCustomerQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetWholeGeneralCustomerQuery = (
  { __typename?: 'Query' }
  & { findByIdGeneralCustomer: (
    { __typename?: 'GeneralCustomer' }
    & WholeGeneralCustomerFragment
  ) }
);

export type GetLabsForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllLab: Array<(
    { __typename?: 'Lab' }
    & Pick<Lab, 'id' | 'label'>
  )> }
);

export type GetWholeLabQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetWholeLabQuery = (
  { __typename?: 'Query' }
  & { findByIdLab: (
    { __typename?: 'Lab' }
    & WholeLabFragment
  ) }
);

export const WholeCustomerFragmentDoc = gql`
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
    `;
export const WholeLabFragmentDoc = gql`
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
    `;
export const WholeGeneralCustomerFragmentDoc = gql`
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
    `;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($data: CreateConsumerDto!) {
  createCustomer(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCustomerGQL extends Apollo.Mutation<CreateCustomerMutation, CreateCustomerMutationVariables> {
    document = CreateCustomerDocument;
    client = 'ConsumersClient';
  }
export const PatchCustomerDocument = gql`
    mutation PatchCustomer($data: PatchConsumerDto!, $id: String!) {
  updateCustomer(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchCustomerGQL extends Apollo.Mutation<PatchCustomerMutation, PatchCustomerMutationVariables> {
    document = PatchCustomerDocument;
    client = 'ConsumersClient';
  }
export const CreateGeneralCustomerDocument = gql`
    mutation CreateGeneralCustomer($data: CreateConsumerDto!) {
  createGeneralCustomer(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateGeneralCustomerGQL extends Apollo.Mutation<CreateGeneralCustomerMutation, CreateGeneralCustomerMutationVariables> {
    document = CreateGeneralCustomerDocument;
    client = 'ConsumersClient';
  }
export const PatchGeneralCustomerDocument = gql`
    mutation PatchGeneralCustomer($data: PatchConsumerDto!, $id: String!) {
  updateGeneralCustomer(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchGeneralCustomerGQL extends Apollo.Mutation<PatchGeneralCustomerMutation, PatchGeneralCustomerMutationVariables> {
    document = PatchGeneralCustomerDocument;
    client = 'ConsumersClient';
  }
export const CreateLabDocument = gql`
    mutation CreateLab($data: CreateConsumerDto!) {
  createLab(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateLabGQL extends Apollo.Mutation<CreateLabMutation, CreateLabMutationVariables> {
    document = CreateLabDocument;
    client = 'ConsumersClient';
  }
export const PatchLabDocument = gql`
    mutation PatchLab($data: PatchConsumerDto!, $id: String!) {
  updateLab(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchLabGQL extends Apollo.Mutation<PatchLabMutation, PatchLabMutationVariables> {
    document = PatchLabDocument;
    client = 'ConsumersClient';
  }
export const GetCustomersForOptionDocument = gql`
    query getCustomersForOption {
  findAllCustomer {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCustomersForOptionGQL extends Apollo.Query<GetCustomersForOptionQuery, GetCustomersForOptionQueryVariables> {
    document = GetCustomersForOptionDocument;
    client = 'ConsumersClient';
  }
export const GetWholeCustomerDocument = gql`
    query getWholeCustomer($data: String!) {
  findByIdCustomer(id: $data) {
    ...WholeCustomer
  }
}
    ${WholeCustomerFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWholeCustomerGQL extends Apollo.Query<GetWholeCustomerQuery, GetWholeCustomerQueryVariables> {
    document = GetWholeCustomerDocument;
    client = 'ConsumersClient';
  }
export const GetGeneralCustomersForOptionDocument = gql`
    query getGeneralCustomersForOption {
  findAllGeneralCustomer {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGeneralCustomersForOptionGQL extends Apollo.Query<GetGeneralCustomersForOptionQuery, GetGeneralCustomersForOptionQueryVariables> {
    document = GetGeneralCustomersForOptionDocument;
    client = 'ConsumersClient';
  }
export const GetWholeGeneralCustomerDocument = gql`
    query getWholeGeneralCustomer($data: String!) {
  findByIdGeneralCustomer(id: $data) {
    ...WholeGeneralCustomer
  }
}
    ${WholeGeneralCustomerFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWholeGeneralCustomerGQL extends Apollo.Query<GetWholeGeneralCustomerQuery, GetWholeGeneralCustomerQueryVariables> {
    document = GetWholeGeneralCustomerDocument;
    client = 'ConsumersClient';
  }
export const GetLabsForOptionDocument = gql`
    query getLabsForOption {
  findAllLab {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLabsForOptionGQL extends Apollo.Query<GetLabsForOptionQuery, GetLabsForOptionQueryVariables> {
    document = GetLabsForOptionDocument;
    client = 'ConsumersClient';
  }
export const GetWholeLabDocument = gql`
    query getWholeLab($data: String!) {
  findByIdLab(id: $data) {
    ...WholeLab
  }
}
    ${WholeLabFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWholeLabGQL extends Apollo.Query<GetWholeLabQuery, GetWholeLabQueryVariables> {
    document = GetWholeLabDocument;
    client = 'ConsumersClient';
  }