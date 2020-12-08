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

export type CgcTemplateInput = {
  customerId: Scalars['ID'];
  generalCustomerId: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  printedCustomer?: Maybe<PrintType>;
  printedGeneralCustomer?: Maybe<PrintType>;
};

export type CgcTemplateModel = {
  __typename?: 'CGCTemplateModel';
  customerId: Scalars['ID'];
  generalCustomerId: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  printedCustomer?: Maybe<PrintType>;
  printedGeneralCustomer?: Maybe<PrintType>;
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

export type FindCgcTemplate = {
  customerId: Scalars['String'];
  generalCustomerId: Scalars['String'];
};

export type FindLabTypeOfSampleTemplate = {
  customerId: Scalars['String'];
  generalCustomerId: Scalars['String'];
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

export type LabTypeOfSampleTemplateModel = {
  __typename?: 'LabTypeOfSampleTemplateModel';
  labId: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  typeOfSampleId: Scalars['ID'];
};

export type MethodAct = {
  __typename?: 'MethodAct';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCGCTemplateModel: CgcTemplateModel;
  createLabTypeOfSampleTemplateModel: LabTypeOfSampleTemplateModel;
  updateCGCTemplateModel: CgcTemplateModel;
  updateLabTypeOfSampleTemplateModel: LabTypeOfSampleTemplateModel;
  updateWhereCGCTemplateModel: CgcTemplateModel;
  updateWhereLabTypeOfSampleTemplateModel: LabTypeOfSampleTemplateModel;
};


export type MutationCreateCgcTemplateModelArgs = {
  data: NewCgcTemplate;
};


export type MutationCreateLabTypeOfSampleTemplateModelArgs = {
  data: NewLabTypeOfSampleTemplate;
};


export type MutationUpdateCgcTemplateModelArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateLabTypeOfSampleTemplateModelArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateWhereCgcTemplateModelArgs = {
  data: UpdateCgcTemplate;
  where: FindCgcTemplate;
};


export type MutationUpdateWhereLabTypeOfSampleTemplateModelArgs = {
  data: UpdateLabTypeOfSampleTemplate;
  where: FindLabTypeOfSampleTemplate;
};

export type NewCgcTemplate = {
  customerId: Scalars['String'];
  generalCustoemrId: Scalars['String'];
  printedCustomer: PrintType;
  printedGeneralCustomer: PrintType;
};

export type NewLabTypeOfSampleTemplate = {
  labId: Scalars['String'];
  path: Scalars['String'];
  typeOfSampleId: Scalars['String'];
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

export enum PrintType {
  Empty = 'EMPTY',
  LongCustomer = 'LONG_CUSTOMER',
  LongGeneralCustomer = 'LONG_GENERAL_CUSTOMER',
  ShortCustomer = 'SHORT_CUSTOMER',
  ShortGeneralCustomer = 'SHORT_GENERAL_CUSTOMER'
}

export type Query = {
  __typename?: 'Query';
  findAllCGCTemplateModel: Array<CgcTemplateModel>;
  findAllLabTypeOfSampleTemplateModel: Array<LabTypeOfSampleTemplateModel>;
  findByIdCGCTemplateModel: CgcTemplateModel;
  findByIdLabTypeOfSampleTemplateModel: LabTypeOfSampleTemplateModel;
  findManyWhereCGCTemplateModel: Array<CgcTemplateModel>;
  findManyWhereLabTypeOfSampleTemplateModel: Array<LabTypeOfSampleTemplateModel>;
  findOneWhereCGCTemplateModel: CgcTemplateModel;
  findOneWhereLabTypeOfSampleTemplateModel: LabTypeOfSampleTemplateModel;
  findOrCreateCGCRule: CgcTemplateModel;
};


export type QueryFindByIdCgcTemplateModelArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdLabTypeOfSampleTemplateModelArgs = {
  id: Scalars['String'];
};


export type QueryFindManyWhereCgcTemplateModelArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereLabTypeOfSampleTemplateModelArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereCgcTemplateModelArgs = {
  where: FindCgcTemplate;
};


export type QueryFindOneWhereLabTypeOfSampleTemplateModelArgs = {
  where: FindLabTypeOfSampleTemplate;
};


export type QueryFindOrCreateCgcRuleArgs = {
  findCGCData: FindCgcTemplate;
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

export type UpdateCgcTemplate = {
  printedCustomer: PrintType;
  printedGeneralCustomer: PrintType;
};

export type UpdateLabTypeOfSampleTemplate = {
  path: Scalars['String'];
};

export type CreateRulesLabTosMutationVariables = Exact<{
  data: NewLabTypeOfSampleTemplate;
}>;


export type CreateRulesLabTosMutation = (
  { __typename?: 'Mutation' }
  & { createLabTypeOfSampleTemplateModel: (
    { __typename?: 'LabTypeOfSampleTemplateModel' }
    & Pick<LabTypeOfSampleTemplateModel, 'labId' | 'path' | 'typeOfSampleId'>
  ) }
);

export type PatchRulesLabTosMutationVariables = Exact<{
  data: Scalars['String'];
  id: Scalars['String'];
}>;


export type PatchRulesLabTosMutation = (
  { __typename?: 'Mutation' }
  & { updateLabTypeOfSampleTemplateModel: (
    { __typename?: 'LabTypeOfSampleTemplateModel' }
    & Pick<LabTypeOfSampleTemplateModel, 'labId' | 'path' | 'typeOfSampleId'>
  ) }
);

export type GetRuleForLabTosQueryVariables = Exact<{
  data: FindLabTypeOfSampleTemplate;
}>;


export type GetRuleForLabTosQuery = (
  { __typename?: 'Query' }
  & { findOneWhereLabTypeOfSampleTemplateModel: (
    { __typename?: 'LabTypeOfSampleTemplateModel' }
    & Pick<LabTypeOfSampleTemplateModel, 'labId' | 'path' | 'typeOfSampleId'>
  ) }
);

export const CreateRulesLabTosDocument = gql`
    mutation CreateRulesLabTos($data: NewLabTypeOfSampleTemplate!) {
  createLabTypeOfSampleTemplateModel(data: $data) {
    labId
    path
    typeOfSampleId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRulesLabTosGQL extends Apollo.Mutation<CreateRulesLabTosMutation, CreateRulesLabTosMutationVariables> {
    document = CreateRulesLabTosDocument;
    client = 'RulesClient';
  }
export const PatchRulesLabTosDocument = gql`
    mutation PatchRulesLabTos($data: String!, $id: String!) {
  updateLabTypeOfSampleTemplateModel(data: $data, id: $id) {
    labId
    path
    typeOfSampleId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchRulesLabTosGQL extends Apollo.Mutation<PatchRulesLabTosMutation, PatchRulesLabTosMutationVariables> {
    document = PatchRulesLabTosDocument;
    client = 'RulesClient';
  }
export const GetRuleForLabTosDocument = gql`
    query getRuleForLabTos($data: FindLabTypeOfSampleTemplate!) {
  findOneWhereLabTypeOfSampleTemplateModel(where: $data) {
    labId
    path
    typeOfSampleId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRuleForLabTosGQL extends Apollo.Query<GetRuleForLabTosQuery, GetRuleForLabTosQueryVariables> {
    document = GetRuleForLabTosDocument;
    client = 'RulesClient';
  }