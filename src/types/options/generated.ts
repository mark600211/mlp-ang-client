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

export type ClimaticEnvironmental = {
  __typename?: 'ClimaticEnvironmental';
  label: Scalars['String'];
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
  createClimaticEnvironmental: ClimaticEnvironmental;
  createDefinedIndicator: DefinedIndicator;
  createEnvironmentalEngineer: EnvironmentalEngineer;
  createGoal: Goal;
  createMethod: Method;
  createNormativeDocument: NormativeDocument;
  createObjectName: ObjectName;
  createPassedSample: PassedSample;
  createPlace: Place;
  createPlanning: Planning;
  createPreparation: Preparation;
  createRepresentative: Representative;
  createSample: Sample;
  createSampleType: SampleType;
  createToolType: ToolType;
  createTypeOfSample: TypeOfSample;
  deleteByIdClimaticEnvironmental?: Maybe<ClimaticEnvironmental>;
  deleteByIdDefinedIndicator?: Maybe<DefinedIndicator>;
  deleteByIdEnvironmentalEngineer?: Maybe<EnvironmentalEngineer>;
  deleteByIdGoal?: Maybe<Goal>;
  deleteByIdMethod?: Maybe<Method>;
  deleteByIdNormativeDocument?: Maybe<NormativeDocument>;
  deleteByIdObjectName?: Maybe<ObjectName>;
  deleteByIdPassedSample?: Maybe<PassedSample>;
  deleteByIdPlace?: Maybe<Place>;
  deleteByIdPlanning?: Maybe<Planning>;
  deleteByIdPreparation?: Maybe<Preparation>;
  deleteByIdRepresentative?: Maybe<Representative>;
  deleteByIdSample?: Maybe<Sample>;
  deleteByIdSampleType?: Maybe<SampleType>;
  deleteByIdToolType?: Maybe<ToolType>;
  deleteByIdTypeOfSample?: Maybe<TypeOfSample>;
  updateClimaticEnvironmental: ClimaticEnvironmental;
  updateDefinedIndicator: DefinedIndicator;
  updateEnvironmentalEngineer: EnvironmentalEngineer;
  updateGoal: Goal;
  updateMethod: Method;
  updateNormativeDocument: NormativeDocument;
  updateObjectName: ObjectName;
  updatePassedSample: PassedSample;
  updatePlace: Place;
  updatePlanning: Planning;
  updatePreparation: Preparation;
  updateRepresentative: Representative;
  updateSample: Sample;
  updateSampleType: SampleType;
  updateToolType: ToolType;
  updateTypeOfSample: TypeOfSample;
  updateWhereClimaticEnvironmental: ClimaticEnvironmental;
  updateWhereDefinedIndicator: DefinedIndicator;
  updateWhereEnvironmentalEngineer: EnvironmentalEngineer;
  updateWhereGoal: Goal;
  updateWhereMethod: Method;
  updateWhereNormativeDocument: NormativeDocument;
  updateWhereObjectName: ObjectName;
  updateWherePassedSample: PassedSample;
  updateWherePlace: Place;
  updateWherePlanning: Planning;
  updateWherePreparation: Preparation;
  updateWhereRepresentative: Representative;
  updateWhereSample: Sample;
  updateWhereSampleType: SampleType;
  updateWhereToolType: ToolType;
  updateWhereTypeOfSample: TypeOfSample;
};


export type MutationCreateClimaticEnvironmentalArgs = {
  data: Scalars['String'];
};


export type MutationCreateDefinedIndicatorArgs = {
  data: NewDefinedIndicator;
};


export type MutationCreateEnvironmentalEngineerArgs = {
  data: NewOption;
};


export type MutationCreateGoalArgs = {
  data: NewOption;
};


export type MutationCreateMethodArgs = {
  data: NewOption;
};


export type MutationCreateNormativeDocumentArgs = {
  data: NewOption;
};


export type MutationCreateObjectNameArgs = {
  data: Scalars['String'];
};


export type MutationCreatePassedSampleArgs = {
  data: NewOption;
};


export type MutationCreatePlaceArgs = {
  data: NewOption;
};


export type MutationCreatePlanningArgs = {
  data: Scalars['String'];
};


export type MutationCreatePreparationArgs = {
  data: NewOption;
};


export type MutationCreateRepresentativeArgs = {
  data: NewOption;
};


export type MutationCreateSampleArgs = {
  data: Scalars['String'];
};


export type MutationCreateSampleTypeArgs = {
  data: NewOption;
};


export type MutationCreateToolTypeArgs = {
  data: NewOption;
};


export type MutationCreateTypeOfSampleArgs = {
  data: NewOption;
};


export type MutationDeleteByIdClimaticEnvironmentalArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdDefinedIndicatorArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdEnvironmentalEngineerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdGoalArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdMethodArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdNormativeDocumentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdObjectNameArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdPassedSampleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdPlaceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdPlanningArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdPreparationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdRepresentativeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdSampleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdSampleTypeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdToolTypeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteByIdTypeOfSampleArgs = {
  id: Scalars['String'];
};


export type MutationUpdateClimaticEnvironmentalArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateDefinedIndicatorArgs = {
  data: PatchDefinedIndicator;
  id: Scalars['String'];
};


export type MutationUpdateEnvironmentalEngineerArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateGoalArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateMethodArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateNormativeDocumentArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateObjectNameArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdatePassedSampleArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdatePlaceArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdatePlanningArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdatePreparationArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateRepresentativeArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateSampleArgs = {
  data: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateSampleTypeArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateToolTypeArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateTypeOfSampleArgs = {
  data: PatchOption;
  id: Scalars['String'];
};


export type MutationUpdateWhereClimaticEnvironmentalArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereDefinedIndicatorArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereEnvironmentalEngineerArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereGoalArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereMethodArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereNormativeDocumentArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereObjectNameArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWherePassedSampleArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWherePlaceArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWherePlanningArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWherePreparationArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereRepresentativeArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereSampleArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereSampleTypeArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereToolTypeArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateWhereTypeOfSampleArgs = {
  data: Scalars['String'];
  where: Scalars['String'];
};

export type NewDefinedIndicator = {
  lab: Scalars['String'];
  label: Scalars['String'];
  typeOfSample: Scalars['String'];
};

export type NewOption = {
  label: Scalars['String'];
};

export type NormativeDocument = {
  __typename?: 'NormativeDocument';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type ObjectName = {
  __typename?: 'ObjectName';
  label: Scalars['String'];
};

export type PassedSample = {
  __typename?: 'PassedSample';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type PatchDefinedIndicator = {
  id: Scalars['String'];
  lab: Scalars['String'];
  label: Scalars['String'];
  typeOfSample: Scalars['String'];
};

export type PatchOption = {
  id: Scalars['String'];
  label: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Planning = {
  __typename?: 'Planning';
  label: Scalars['String'];
};

export type Preparation = {
  __typename?: 'Preparation';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAllClimaticEnvironmental: Array<ClimaticEnvironmental>;
  findAllDefinedIndicator: Array<DefinedIndicator>;
  findAllEnvironmentalEngineer: Array<EnvironmentalEngineer>;
  findAllGoal: Array<Goal>;
  findAllMethod: Array<Method>;
  findAllNormativeDocument: Array<NormativeDocument>;
  findAllObjectName: Array<ObjectName>;
  findAllPassedSample: Array<PassedSample>;
  findAllPlace: Array<Place>;
  findAllPlanning: Array<Planning>;
  findAllPreparation: Array<Preparation>;
  findAllRepresentative: Array<Representative>;
  findAllSample: Array<Sample>;
  findAllSampleType: Array<SampleType>;
  findAllToolType: Array<ToolType>;
  findAllTypeOfSample: Array<TypeOfSample>;
  findByIdClimaticEnvironmental: ClimaticEnvironmental;
  findByIdDefinedIndicator: DefinedIndicator;
  findByIdEnvironmentalEngineer: EnvironmentalEngineer;
  findByIdGoal: Goal;
  findByIdMethod: Method;
  findByIdNormativeDocument: NormativeDocument;
  findByIdObjectName: ObjectName;
  findByIdPassedSample: PassedSample;
  findByIdPlace: Place;
  findByIdPlanning: Planning;
  findByIdPreparation: Preparation;
  findByIdRepresentative: Representative;
  findByIdSample: Sample;
  findByIdSampleType: SampleType;
  findByIdToolType: ToolType;
  findByIdTypeOfSample: TypeOfSample;
  findManyWhereClimaticEnvironmental: Array<ClimaticEnvironmental>;
  findManyWhereDefinedIndicator: Array<DefinedIndicator>;
  findManyWhereEnvironmentalEngineer: Array<EnvironmentalEngineer>;
  findManyWhereGoal: Array<Goal>;
  findManyWhereMethod: Array<Method>;
  findManyWhereNormativeDocument: Array<NormativeDocument>;
  findManyWhereObjectName: Array<ObjectName>;
  findManyWherePassedSample: Array<PassedSample>;
  findManyWherePlace: Array<Place>;
  findManyWherePlanning: Array<Planning>;
  findManyWherePreparation: Array<Preparation>;
  findManyWhereRepresentative: Array<Representative>;
  findManyWhereSample: Array<Sample>;
  findManyWhereSampleType: Array<SampleType>;
  findManyWhereToolType: Array<ToolType>;
  findManyWhereTypeOfSample: Array<TypeOfSample>;
  findOneWhereClimaticEnvironmental: ClimaticEnvironmental;
  findOneWhereDefinedIndicator: DefinedIndicator;
  findOneWhereEnvironmentalEngineer: EnvironmentalEngineer;
  findOneWhereGoal: Goal;
  findOneWhereMethod: Method;
  findOneWhereNormativeDocument: NormativeDocument;
  findOneWhereObjectName: ObjectName;
  findOneWherePassedSample: PassedSample;
  findOneWherePlace: Place;
  findOneWherePlanning: Planning;
  findOneWherePreparation: Preparation;
  findOneWhereRepresentative: Representative;
  findOneWhereSample: Sample;
  findOneWhereSampleType: SampleType;
  findOneWhereToolType: ToolType;
  findOneWhereTypeOfSample: TypeOfSample;
};


export type QueryFindAllClimaticEnvironmentalArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllDefinedIndicatorArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllEnvironmentalEngineerArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllGoalArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllMethodArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllNormativeDocumentArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllObjectNameArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllPassedSampleArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllPlaceArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllPlanningArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllPreparationArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllRepresentativeArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllSampleArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllSampleTypeArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllToolTypeArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindAllTypeOfSampleArgs = {
  field?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryFindByIdClimaticEnvironmentalArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdDefinedIndicatorArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdEnvironmentalEngineerArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdGoalArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdMethodArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdNormativeDocumentArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdObjectNameArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdPassedSampleArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdPlaceArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdPlanningArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdPreparationArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdRepresentativeArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdSampleArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdSampleTypeArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdToolTypeArgs = {
  id: Scalars['String'];
};


export type QueryFindByIdTypeOfSampleArgs = {
  id: Scalars['String'];
};


export type QueryFindManyWhereClimaticEnvironmentalArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereDefinedIndicatorArgs = {
  where: WhereDefinedIndicator;
};


export type QueryFindManyWhereEnvironmentalEngineerArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereGoalArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereMethodArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereNormativeDocumentArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereObjectNameArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWherePassedSampleArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWherePlaceArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWherePlanningArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWherePreparationArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereRepresentativeArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereSampleArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereSampleTypeArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereToolTypeArgs = {
  where: Scalars['String'];
};


export type QueryFindManyWhereTypeOfSampleArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereClimaticEnvironmentalArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereDefinedIndicatorArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereEnvironmentalEngineerArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereGoalArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereMethodArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereNormativeDocumentArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereObjectNameArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWherePassedSampleArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWherePlaceArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWherePlanningArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWherePreparationArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereRepresentativeArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereSampleArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereSampleTypeArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereToolTypeArgs = {
  where: Scalars['String'];
};


export type QueryFindOneWhereTypeOfSampleArgs = {
  where: Scalars['String'];
};

export type Representative = {
  __typename?: 'Representative';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type Sample = {
  __typename?: 'Sample';
  label: Scalars['String'];
};

export type SampleType = {
  __typename?: 'SampleType';
  id: Scalars['ID'];
  label: Scalars['String'];
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

export type WhereDefinedIndicator = {
  lab: Scalars['String'];
  typeOfSample: Scalars['String'];
};

export type CreateTypeOfSampleMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateTypeOfSampleMutation = (
  { __typename?: 'Mutation' }
  & { createTypeOfSample: (
    { __typename?: 'TypeOfSample' }
    & Pick<TypeOfSample, 'id' | 'label'>
  ) }
);

export type PatchTypeOfSampleMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchTypeOfSampleMutation = (
  { __typename?: 'Mutation' }
  & { updateTypeOfSample: (
    { __typename?: 'TypeOfSample' }
    & Pick<TypeOfSample, 'id' | 'label'>
  ) }
);

export type CreateObjectNameMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type CreateObjectNameMutation = (
  { __typename?: 'Mutation' }
  & { createObjectName: (
    { __typename?: 'ObjectName' }
    & Pick<ObjectName, 'label'>
  ) }
);

export type PatchObjectNameMutationVariables = Exact<{
  data: Scalars['String'];
  id: Scalars['String'];
}>;


export type PatchObjectNameMutation = (
  { __typename?: 'Mutation' }
  & { updateObjectName: (
    { __typename?: 'ObjectName' }
    & Pick<ObjectName, 'label'>
  ) }
);

export type CreatePlaceMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreatePlaceMutation = (
  { __typename?: 'Mutation' }
  & { createPlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'label'>
  ) }
);

export type PatchPlaceMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchPlaceMutation = (
  { __typename?: 'Mutation' }
  & { updatePlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'label'>
  ) }
);

export type CreateMethodMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateMethodMutation = (
  { __typename?: 'Mutation' }
  & { createMethod: (
    { __typename?: 'Method' }
    & Pick<Method, 'id' | 'label'>
  ) }
);

export type PatchMethodMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchMethodMutation = (
  { __typename?: 'Mutation' }
  & { updateMethod: (
    { __typename?: 'Method' }
    & Pick<Method, 'id' | 'label'>
  ) }
);

export type CreateToolTypeMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateToolTypeMutation = (
  { __typename?: 'Mutation' }
  & { createToolType: (
    { __typename?: 'ToolType' }
    & Pick<ToolType, 'id' | 'label'>
  ) }
);

export type PatchToolTypeMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchToolTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateToolType: (
    { __typename?: 'ToolType' }
    & Pick<ToolType, 'id' | 'label'>
  ) }
);

export type CreateClimaticEnvironmentalMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type CreateClimaticEnvironmentalMutation = (
  { __typename?: 'Mutation' }
  & { createClimaticEnvironmental: (
    { __typename?: 'ClimaticEnvironmental' }
    & Pick<ClimaticEnvironmental, 'label'>
  ) }
);

export type PatchClimaticEnvironmentalMutationVariables = Exact<{
  data: Scalars['String'];
  id: Scalars['String'];
}>;


export type PatchClimaticEnvironmentalMutation = (
  { __typename?: 'Mutation' }
  & { updateClimaticEnvironmental: (
    { __typename?: 'ClimaticEnvironmental' }
    & Pick<ClimaticEnvironmental, 'label'>
  ) }
);

export type CreatePlanningMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type CreatePlanningMutation = (
  { __typename?: 'Mutation' }
  & { createPlanning: (
    { __typename?: 'Planning' }
    & Pick<Planning, 'label'>
  ) }
);

export type PatchPlanningMutationVariables = Exact<{
  data: Scalars['String'];
  id: Scalars['String'];
}>;


export type PatchPlanningMutation = (
  { __typename?: 'Mutation' }
  & { updatePlanning: (
    { __typename?: 'Planning' }
    & Pick<Planning, 'label'>
  ) }
);

export type CreateNormativeDocumentMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateNormativeDocumentMutation = (
  { __typename?: 'Mutation' }
  & { createNormativeDocument: (
    { __typename?: 'NormativeDocument' }
    & Pick<NormativeDocument, 'id' | 'label'>
  ) }
);

export type PatchNormativeDocumentMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchNormativeDocumentMutation = (
  { __typename?: 'Mutation' }
  & { updateNormativeDocument: (
    { __typename?: 'NormativeDocument' }
    & Pick<NormativeDocument, 'id' | 'label'>
  ) }
);

export type CreateSampleTypeMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateSampleTypeMutation = (
  { __typename?: 'Mutation' }
  & { createSampleType: (
    { __typename?: 'SampleType' }
    & Pick<SampleType, 'id' | 'label'>
  ) }
);

export type PatchSampleTypeMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchSampleTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateSampleType: (
    { __typename?: 'SampleType' }
    & Pick<SampleType, 'id' | 'label'>
  ) }
);

export type CreateSampleMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type CreateSampleMutation = (
  { __typename?: 'Mutation' }
  & { createSample: (
    { __typename?: 'Sample' }
    & Pick<Sample, 'label'>
  ) }
);

export type PatchSampleMutationVariables = Exact<{
  data: Scalars['String'];
  id: Scalars['String'];
}>;


export type PatchSampleMutation = (
  { __typename?: 'Mutation' }
  & { updateSample: (
    { __typename?: 'Sample' }
    & Pick<Sample, 'label'>
  ) }
);

export type CreatePreparationMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreatePreparationMutation = (
  { __typename?: 'Mutation' }
  & { createPreparation: (
    { __typename?: 'Preparation' }
    & Pick<Preparation, 'id' | 'label'>
  ) }
);

export type PatchPreparationMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchPreparationMutation = (
  { __typename?: 'Mutation' }
  & { updatePreparation: (
    { __typename?: 'Preparation' }
    & Pick<Preparation, 'id' | 'label'>
  ) }
);

export type CreateGoalMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateGoalMutation = (
  { __typename?: 'Mutation' }
  & { createGoal: (
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'label'>
  ) }
);

export type PatchGoalMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchGoalMutation = (
  { __typename?: 'Mutation' }
  & { updateGoal: (
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'label'>
  ) }
);

export type CreateDefinedIndicatorMutationVariables = Exact<{
  data: NewDefinedIndicator;
}>;


export type CreateDefinedIndicatorMutation = (
  { __typename?: 'Mutation' }
  & { createDefinedIndicator: (
    { __typename?: 'DefinedIndicator' }
    & Pick<DefinedIndicator, 'id' | 'label'>
  ) }
);

export type PatchDefinedIndicatorMutationVariables = Exact<{
  data: PatchDefinedIndicator;
  id: Scalars['String'];
}>;


export type PatchDefinedIndicatorMutation = (
  { __typename?: 'Mutation' }
  & { updateDefinedIndicator: (
    { __typename?: 'DefinedIndicator' }
    & Pick<DefinedIndicator, 'id' | 'label'>
  ) }
);

export type CreateEnvironmentalEngineerMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateEnvironmentalEngineerMutation = (
  { __typename?: 'Mutation' }
  & { createEnvironmentalEngineer: (
    { __typename?: 'EnvironmentalEngineer' }
    & Pick<EnvironmentalEngineer, 'id' | 'label'>
  ) }
);

export type PatchEnvironmentalEngineerMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchEnvironmentalEngineerMutation = (
  { __typename?: 'Mutation' }
  & { updateEnvironmentalEngineer: (
    { __typename?: 'EnvironmentalEngineer' }
    & Pick<EnvironmentalEngineer, 'id' | 'label'>
  ) }
);

export type CreateRepresentativeMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreateRepresentativeMutation = (
  { __typename?: 'Mutation' }
  & { createRepresentative: (
    { __typename?: 'Representative' }
    & Pick<Representative, 'id' | 'label'>
  ) }
);

export type PatchRepresentativeMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchRepresentativeMutation = (
  { __typename?: 'Mutation' }
  & { updateRepresentative: (
    { __typename?: 'Representative' }
    & Pick<Representative, 'id' | 'label'>
  ) }
);

export type CreatePassedSampleMutationVariables = Exact<{
  data: NewOption;
}>;


export type CreatePassedSampleMutation = (
  { __typename?: 'Mutation' }
  & { createPassedSample: (
    { __typename?: 'PassedSample' }
    & Pick<PassedSample, 'id' | 'label'>
  ) }
);

export type PatchPassedSampleMutationVariables = Exact<{
  data: PatchOption;
  id: Scalars['String'];
}>;


export type PatchPassedSampleMutation = (
  { __typename?: 'Mutation' }
  & { updatePassedSample: (
    { __typename?: 'PassedSample' }
    & Pick<PassedSample, 'id' | 'label'>
  ) }
);

export type GetTypeOfSamplesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTypeOfSamplesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllTypeOfSample: Array<(
    { __typename?: 'TypeOfSample' }
    & Pick<TypeOfSample, 'id' | 'label'>
  )> }
);

export type GetObjectNamesForOptionQueryVariables = Exact<{
  field?: Maybe<Scalars['String']>;
}>;


export type GetObjectNamesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllObjectName: Array<(
    { __typename?: 'ObjectName' }
    & Pick<ObjectName, 'label'>
  )> }
);

export type GetPlacesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlacesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllPlace: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'label'>
  )> }
);

export type GetMethodsForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMethodsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllMethod: Array<(
    { __typename?: 'Method' }
    & Pick<Method, 'id' | 'label'>
  )> }
);

export type GetToolTypesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToolTypesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllToolType: Array<(
    { __typename?: 'ToolType' }
    & Pick<ToolType, 'id' | 'label'>
  )> }
);

export type GetClimaticEnvironmentalsForOptionQueryVariables = Exact<{
  field?: Maybe<Scalars['String']>;
}>;


export type GetClimaticEnvironmentalsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllClimaticEnvironmental: Array<(
    { __typename?: 'ClimaticEnvironmental' }
    & Pick<ClimaticEnvironmental, 'label'>
  )> }
);

export type GetPlanningsForOptionQueryVariables = Exact<{
  field?: Maybe<Scalars['String']>;
}>;


export type GetPlanningsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllPlanning: Array<(
    { __typename?: 'Planning' }
    & Pick<Planning, 'label'>
  )> }
);

export type GetNormativeDocumentsForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNormativeDocumentsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllNormativeDocument: Array<(
    { __typename?: 'NormativeDocument' }
    & Pick<NormativeDocument, 'id' | 'label'>
  )> }
);

export type GetSampleTypesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSampleTypesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllSampleType: Array<(
    { __typename?: 'SampleType' }
    & Pick<SampleType, 'id' | 'label'>
  )> }
);

export type GetSamplesForOptionQueryVariables = Exact<{
  field?: Maybe<Scalars['String']>;
}>;


export type GetSamplesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllSample: Array<(
    { __typename?: 'Sample' }
    & Pick<Sample, 'label'>
  )> }
);

export type GetPreparationsForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPreparationsForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllPreparation: Array<(
    { __typename?: 'Preparation' }
    & Pick<Preparation, 'id' | 'label'>
  )> }
);

export type GetGoalForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoalForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllGoal: Array<(
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'label'>
  )> }
);

export type GetDefinedIndicatorsForOptionQueryVariables = Exact<{
  where: WhereDefinedIndicator;
}>;


export type GetDefinedIndicatorsForOptionQuery = (
  { __typename?: 'Query' }
  & { findManyWhereDefinedIndicator: Array<(
    { __typename?: 'DefinedIndicator' }
    & Pick<DefinedIndicator, 'id' | 'label'>
  )> }
);

export type GetEnvironmentalEngineersForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEnvironmentalEngineersForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllEnvironmentalEngineer: Array<(
    { __typename?: 'EnvironmentalEngineer' }
    & Pick<EnvironmentalEngineer, 'id' | 'label'>
  )> }
);

export type GetRepresentativesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepresentativesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllRepresentative: Array<(
    { __typename?: 'Representative' }
    & Pick<Representative, 'id' | 'label'>
  )> }
);

export type GetPassedSamplesForOptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPassedSamplesForOptionQuery = (
  { __typename?: 'Query' }
  & { findAllPassedSample: Array<(
    { __typename?: 'PassedSample' }
    & Pick<PassedSample, 'id' | 'label'>
  )> }
);

export type GetTypeOfSampleQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetTypeOfSampleQuery = (
  { __typename?: 'Query' }
  & { findByIdTypeOfSample: (
    { __typename?: 'TypeOfSample' }
    & Pick<TypeOfSample, 'id' | 'label'>
  ) }
);

export type GetObjectNameQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetObjectNameQuery = (
  { __typename?: 'Query' }
  & { findByIdObjectName: (
    { __typename?: 'ObjectName' }
    & Pick<ObjectName, 'label'>
  ) }
);

export type GetPlaceQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetPlaceQuery = (
  { __typename?: 'Query' }
  & { findByIdPlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'label'>
  ) }
);

export type GetMethodQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetMethodQuery = (
  { __typename?: 'Query' }
  & { findByIdMethod: (
    { __typename?: 'Method' }
    & Pick<Method, 'id' | 'label'>
  ) }
);

export type GetToolTypeQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetToolTypeQuery = (
  { __typename?: 'Query' }
  & { findByIdToolType: (
    { __typename?: 'ToolType' }
    & Pick<ToolType, 'id' | 'label'>
  ) }
);

export type GetClimaticEnvironmentalQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetClimaticEnvironmentalQuery = (
  { __typename?: 'Query' }
  & { findByIdClimaticEnvironmental: (
    { __typename?: 'ClimaticEnvironmental' }
    & Pick<ClimaticEnvironmental, 'label'>
  ) }
);

export type GetPlanningQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetPlanningQuery = (
  { __typename?: 'Query' }
  & { findByIdPlanning: (
    { __typename?: 'Planning' }
    & Pick<Planning, 'label'>
  ) }
);

export type GetNormativeDocumentQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetNormativeDocumentQuery = (
  { __typename?: 'Query' }
  & { findByIdNormativeDocument: (
    { __typename?: 'NormativeDocument' }
    & Pick<NormativeDocument, 'id' | 'label'>
  ) }
);

export type GetSampleTypeQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetSampleTypeQuery = (
  { __typename?: 'Query' }
  & { findByIdSampleType: (
    { __typename?: 'SampleType' }
    & Pick<SampleType, 'id' | 'label'>
  ) }
);

export type GetSampleQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetSampleQuery = (
  { __typename?: 'Query' }
  & { findByIdSample: (
    { __typename?: 'Sample' }
    & Pick<Sample, 'label'>
  ) }
);

export type GetPreparationQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetPreparationQuery = (
  { __typename?: 'Query' }
  & { findByIdPreparation: (
    { __typename?: 'Preparation' }
    & Pick<Preparation, 'id' | 'label'>
  ) }
);

export type GetGoalQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetGoalQuery = (
  { __typename?: 'Query' }
  & { findByIdGoal: (
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'label'>
  ) }
);

export type GetDefinedIndicatorQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetDefinedIndicatorQuery = (
  { __typename?: 'Query' }
  & { findByIdDefinedIndicator: (
    { __typename?: 'DefinedIndicator' }
    & Pick<DefinedIndicator, 'id' | 'label'>
  ) }
);

export type GetEnvironmentalEngineerQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetEnvironmentalEngineerQuery = (
  { __typename?: 'Query' }
  & { findByIdEnvironmentalEngineer: (
    { __typename?: 'EnvironmentalEngineer' }
    & Pick<EnvironmentalEngineer, 'id' | 'label'>
  ) }
);

export type GetRepresentativeQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetRepresentativeQuery = (
  { __typename?: 'Query' }
  & { findByIdRepresentative: (
    { __typename?: 'Representative' }
    & Pick<Representative, 'id' | 'label'>
  ) }
);

export type GetPassedSampleQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type GetPassedSampleQuery = (
  { __typename?: 'Query' }
  & { findByIdPassedSample: (
    { __typename?: 'PassedSample' }
    & Pick<PassedSample, 'id' | 'label'>
  ) }
);

export const CreateTypeOfSampleDocument = gql`
    mutation CreateTypeOfSample($data: NewOption!) {
  createTypeOfSample(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTypeOfSampleGQL extends Apollo.Mutation<CreateTypeOfSampleMutation, CreateTypeOfSampleMutationVariables> {
    document = CreateTypeOfSampleDocument;
    client = 'OptionsClient';
  }
export const PatchTypeOfSampleDocument = gql`
    mutation PatchTypeOfSample($data: PatchOption!, $id: String!) {
  updateTypeOfSample(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchTypeOfSampleGQL extends Apollo.Mutation<PatchTypeOfSampleMutation, PatchTypeOfSampleMutationVariables> {
    document = PatchTypeOfSampleDocument;
    client = 'OptionsClient';
  }
export const CreateObjectNameDocument = gql`
    mutation CreateObjectName($data: String!) {
  createObjectName(data: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateObjectNameGQL extends Apollo.Mutation<CreateObjectNameMutation, CreateObjectNameMutationVariables> {
    document = CreateObjectNameDocument;
    client = 'OptionsClient';
  }
export const PatchObjectNameDocument = gql`
    mutation PatchObjectName($data: String!, $id: String!) {
  updateObjectName(data: $data, id: $id) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchObjectNameGQL extends Apollo.Mutation<PatchObjectNameMutation, PatchObjectNameMutationVariables> {
    document = PatchObjectNameDocument;
    client = 'OptionsClient';
  }
export const CreatePlaceDocument = gql`
    mutation CreatePlace($data: NewOption!) {
  createPlace(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePlaceGQL extends Apollo.Mutation<CreatePlaceMutation, CreatePlaceMutationVariables> {
    document = CreatePlaceDocument;
    client = 'OptionsClient';
  }
export const PatchPlaceDocument = gql`
    mutation PatchPlace($data: PatchOption!, $id: String!) {
  updatePlace(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchPlaceGQL extends Apollo.Mutation<PatchPlaceMutation, PatchPlaceMutationVariables> {
    document = PatchPlaceDocument;
    client = 'OptionsClient';
  }
export const CreateMethodDocument = gql`
    mutation CreateMethod($data: NewOption!) {
  createMethod(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMethodGQL extends Apollo.Mutation<CreateMethodMutation, CreateMethodMutationVariables> {
    document = CreateMethodDocument;
    client = 'OptionsClient';
  }
export const PatchMethodDocument = gql`
    mutation PatchMethod($data: PatchOption!, $id: String!) {
  updateMethod(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchMethodGQL extends Apollo.Mutation<PatchMethodMutation, PatchMethodMutationVariables> {
    document = PatchMethodDocument;
    client = 'OptionsClient';
  }
export const CreateToolTypeDocument = gql`
    mutation CreateToolType($data: NewOption!) {
  createToolType(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateToolTypeGQL extends Apollo.Mutation<CreateToolTypeMutation, CreateToolTypeMutationVariables> {
    document = CreateToolTypeDocument;
    client = 'OptionsClient';
  }
export const PatchToolTypeDocument = gql`
    mutation PatchToolType($data: PatchOption!, $id: String!) {
  updateToolType(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchToolTypeGQL extends Apollo.Mutation<PatchToolTypeMutation, PatchToolTypeMutationVariables> {
    document = PatchToolTypeDocument;
    client = 'OptionsClient';
  }
export const CreateClimaticEnvironmentalDocument = gql`
    mutation CreateClimaticEnvironmental($data: String!) {
  createClimaticEnvironmental(data: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateClimaticEnvironmentalGQL extends Apollo.Mutation<CreateClimaticEnvironmentalMutation, CreateClimaticEnvironmentalMutationVariables> {
    document = CreateClimaticEnvironmentalDocument;
    client = 'OptionsClient';
  }
export const PatchClimaticEnvironmentalDocument = gql`
    mutation PatchClimaticEnvironmental($data: String!, $id: String!) {
  updateClimaticEnvironmental(data: $data, id: $id) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchClimaticEnvironmentalGQL extends Apollo.Mutation<PatchClimaticEnvironmentalMutation, PatchClimaticEnvironmentalMutationVariables> {
    document = PatchClimaticEnvironmentalDocument;
    client = 'OptionsClient';
  }
export const CreatePlanningDocument = gql`
    mutation CreatePlanning($data: String!) {
  createPlanning(data: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePlanningGQL extends Apollo.Mutation<CreatePlanningMutation, CreatePlanningMutationVariables> {
    document = CreatePlanningDocument;
    client = 'OptionsClient';
  }
export const PatchPlanningDocument = gql`
    mutation PatchPlanning($data: String!, $id: String!) {
  updatePlanning(data: $data, id: $id) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchPlanningGQL extends Apollo.Mutation<PatchPlanningMutation, PatchPlanningMutationVariables> {
    document = PatchPlanningDocument;
    client = 'OptionsClient';
  }
export const CreateNormativeDocumentDocument = gql`
    mutation CreateNormativeDocument($data: NewOption!) {
  createNormativeDocument(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNormativeDocumentGQL extends Apollo.Mutation<CreateNormativeDocumentMutation, CreateNormativeDocumentMutationVariables> {
    document = CreateNormativeDocumentDocument;
    client = 'OptionsClient';
  }
export const PatchNormativeDocumentDocument = gql`
    mutation PatchNormativeDocument($data: PatchOption!, $id: String!) {
  updateNormativeDocument(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchNormativeDocumentGQL extends Apollo.Mutation<PatchNormativeDocumentMutation, PatchNormativeDocumentMutationVariables> {
    document = PatchNormativeDocumentDocument;
    client = 'OptionsClient';
  }
export const CreateSampleTypeDocument = gql`
    mutation CreateSampleType($data: NewOption!) {
  createSampleType(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSampleTypeGQL extends Apollo.Mutation<CreateSampleTypeMutation, CreateSampleTypeMutationVariables> {
    document = CreateSampleTypeDocument;
    client = 'OptionsClient';
  }
export const PatchSampleTypeDocument = gql`
    mutation PatchSampleType($data: PatchOption!, $id: String!) {
  updateSampleType(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchSampleTypeGQL extends Apollo.Mutation<PatchSampleTypeMutation, PatchSampleTypeMutationVariables> {
    document = PatchSampleTypeDocument;
    client = 'OptionsClient';
  }
export const CreateSampleDocument = gql`
    mutation CreateSample($data: String!) {
  createSample(data: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSampleGQL extends Apollo.Mutation<CreateSampleMutation, CreateSampleMutationVariables> {
    document = CreateSampleDocument;
    client = 'OptionsClient';
  }
export const PatchSampleDocument = gql`
    mutation PatchSample($data: String!, $id: String!) {
  updateSample(data: $data, id: $id) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchSampleGQL extends Apollo.Mutation<PatchSampleMutation, PatchSampleMutationVariables> {
    document = PatchSampleDocument;
    client = 'OptionsClient';
  }
export const CreatePreparationDocument = gql`
    mutation CreatePreparation($data: NewOption!) {
  createPreparation(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePreparationGQL extends Apollo.Mutation<CreatePreparationMutation, CreatePreparationMutationVariables> {
    document = CreatePreparationDocument;
    client = 'OptionsClient';
  }
export const PatchPreparationDocument = gql`
    mutation PatchPreparation($data: PatchOption!, $id: String!) {
  updatePreparation(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchPreparationGQL extends Apollo.Mutation<PatchPreparationMutation, PatchPreparationMutationVariables> {
    document = PatchPreparationDocument;
    client = 'OptionsClient';
  }
export const CreateGoalDocument = gql`
    mutation CreateGoal($data: NewOption!) {
  createGoal(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateGoalGQL extends Apollo.Mutation<CreateGoalMutation, CreateGoalMutationVariables> {
    document = CreateGoalDocument;
    client = 'OptionsClient';
  }
export const PatchGoalDocument = gql`
    mutation PatchGoal($data: PatchOption!, $id: String!) {
  updateGoal(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchGoalGQL extends Apollo.Mutation<PatchGoalMutation, PatchGoalMutationVariables> {
    document = PatchGoalDocument;
    client = 'OptionsClient';
  }
export const CreateDefinedIndicatorDocument = gql`
    mutation CreateDefinedIndicator($data: NewDefinedIndicator!) {
  createDefinedIndicator(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDefinedIndicatorGQL extends Apollo.Mutation<CreateDefinedIndicatorMutation, CreateDefinedIndicatorMutationVariables> {
    document = CreateDefinedIndicatorDocument;
    client = 'OptionsClient';
  }
export const PatchDefinedIndicatorDocument = gql`
    mutation PatchDefinedIndicator($data: PatchDefinedIndicator!, $id: String!) {
  updateDefinedIndicator(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchDefinedIndicatorGQL extends Apollo.Mutation<PatchDefinedIndicatorMutation, PatchDefinedIndicatorMutationVariables> {
    document = PatchDefinedIndicatorDocument;
    client = 'OptionsClient';
  }
export const CreateEnvironmentalEngineerDocument = gql`
    mutation CreateEnvironmentalEngineer($data: NewOption!) {
  createEnvironmentalEngineer(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEnvironmentalEngineerGQL extends Apollo.Mutation<CreateEnvironmentalEngineerMutation, CreateEnvironmentalEngineerMutationVariables> {
    document = CreateEnvironmentalEngineerDocument;
    client = 'OptionsClient';
  }
export const PatchEnvironmentalEngineerDocument = gql`
    mutation PatchEnvironmentalEngineer($data: PatchOption!, $id: String!) {
  updateEnvironmentalEngineer(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchEnvironmentalEngineerGQL extends Apollo.Mutation<PatchEnvironmentalEngineerMutation, PatchEnvironmentalEngineerMutationVariables> {
    document = PatchEnvironmentalEngineerDocument;
    client = 'OptionsClient';
  }
export const CreateRepresentativeDocument = gql`
    mutation CreateRepresentative($data: NewOption!) {
  createRepresentative(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRepresentativeGQL extends Apollo.Mutation<CreateRepresentativeMutation, CreateRepresentativeMutationVariables> {
    document = CreateRepresentativeDocument;
    client = 'OptionsClient';
  }
export const PatchRepresentativeDocument = gql`
    mutation PatchRepresentative($data: PatchOption!, $id: String!) {
  updateRepresentative(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchRepresentativeGQL extends Apollo.Mutation<PatchRepresentativeMutation, PatchRepresentativeMutationVariables> {
    document = PatchRepresentativeDocument;
    client = 'OptionsClient';
  }
export const CreatePassedSampleDocument = gql`
    mutation CreatePassedSample($data: NewOption!) {
  createPassedSample(data: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePassedSampleGQL extends Apollo.Mutation<CreatePassedSampleMutation, CreatePassedSampleMutationVariables> {
    document = CreatePassedSampleDocument;
    client = 'OptionsClient';
  }
export const PatchPassedSampleDocument = gql`
    mutation PatchPassedSample($data: PatchOption!, $id: String!) {
  updatePassedSample(data: $data, id: $id) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatchPassedSampleGQL extends Apollo.Mutation<PatchPassedSampleMutation, PatchPassedSampleMutationVariables> {
    document = PatchPassedSampleDocument;
    client = 'OptionsClient';
  }
export const GetTypeOfSamplesForOptionDocument = gql`
    query getTypeOfSamplesForOption {
  findAllTypeOfSample {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTypeOfSamplesForOptionGQL extends Apollo.Query<GetTypeOfSamplesForOptionQuery, GetTypeOfSamplesForOptionQueryVariables> {
    document = GetTypeOfSamplesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetObjectNamesForOptionDocument = gql`
    query getObjectNamesForOption($field: String) {
  findAllObjectName(field: $field) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetObjectNamesForOptionGQL extends Apollo.Query<GetObjectNamesForOptionQuery, GetObjectNamesForOptionQueryVariables> {
    document = GetObjectNamesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetPlacesForOptionDocument = gql`
    query getPlacesForOption {
  findAllPlace {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPlacesForOptionGQL extends Apollo.Query<GetPlacesForOptionQuery, GetPlacesForOptionQueryVariables> {
    document = GetPlacesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetMethodsForOptionDocument = gql`
    query getMethodsForOption {
  findAllMethod {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMethodsForOptionGQL extends Apollo.Query<GetMethodsForOptionQuery, GetMethodsForOptionQueryVariables> {
    document = GetMethodsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetToolTypesForOptionDocument = gql`
    query getToolTypesForOption {
  findAllToolType {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetToolTypesForOptionGQL extends Apollo.Query<GetToolTypesForOptionQuery, GetToolTypesForOptionQueryVariables> {
    document = GetToolTypesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetClimaticEnvironmentalsForOptionDocument = gql`
    query getClimaticEnvironmentalsForOption($field: String) {
  findAllClimaticEnvironmental(field: $field) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClimaticEnvironmentalsForOptionGQL extends Apollo.Query<GetClimaticEnvironmentalsForOptionQuery, GetClimaticEnvironmentalsForOptionQueryVariables> {
    document = GetClimaticEnvironmentalsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetPlanningsForOptionDocument = gql`
    query getPlanningsForOption($field: String) {
  findAllPlanning(field: $field) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPlanningsForOptionGQL extends Apollo.Query<GetPlanningsForOptionQuery, GetPlanningsForOptionQueryVariables> {
    document = GetPlanningsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetNormativeDocumentsForOptionDocument = gql`
    query getNormativeDocumentsForOption {
  findAllNormativeDocument {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNormativeDocumentsForOptionGQL extends Apollo.Query<GetNormativeDocumentsForOptionQuery, GetNormativeDocumentsForOptionQueryVariables> {
    document = GetNormativeDocumentsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetSampleTypesForOptionDocument = gql`
    query getSampleTypesForOption {
  findAllSampleType {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSampleTypesForOptionGQL extends Apollo.Query<GetSampleTypesForOptionQuery, GetSampleTypesForOptionQueryVariables> {
    document = GetSampleTypesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetSamplesForOptionDocument = gql`
    query getSamplesForOption($field: String) {
  findAllSample(field: $field) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSamplesForOptionGQL extends Apollo.Query<GetSamplesForOptionQuery, GetSamplesForOptionQueryVariables> {
    document = GetSamplesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetPreparationsForOptionDocument = gql`
    query getPreparationsForOption {
  findAllPreparation {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPreparationsForOptionGQL extends Apollo.Query<GetPreparationsForOptionQuery, GetPreparationsForOptionQueryVariables> {
    document = GetPreparationsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetGoalForOptionDocument = gql`
    query getGoalForOption {
  findAllGoal {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGoalForOptionGQL extends Apollo.Query<GetGoalForOptionQuery, GetGoalForOptionQueryVariables> {
    document = GetGoalForOptionDocument;
    client = 'OptionsClient';
  }
export const GetDefinedIndicatorsForOptionDocument = gql`
    query getDefinedIndicatorsForOption($where: WhereDefinedIndicator!) {
  findManyWhereDefinedIndicator(where: $where) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDefinedIndicatorsForOptionGQL extends Apollo.Query<GetDefinedIndicatorsForOptionQuery, GetDefinedIndicatorsForOptionQueryVariables> {
    document = GetDefinedIndicatorsForOptionDocument;
    client = 'OptionsClient';
  }
export const GetEnvironmentalEngineersForOptionDocument = gql`
    query getEnvironmentalEngineersForOption {
  findAllEnvironmentalEngineer {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEnvironmentalEngineersForOptionGQL extends Apollo.Query<GetEnvironmentalEngineersForOptionQuery, GetEnvironmentalEngineersForOptionQueryVariables> {
    document = GetEnvironmentalEngineersForOptionDocument;
    client = 'OptionsClient';
  }
export const GetRepresentativesForOptionDocument = gql`
    query getRepresentativesForOption {
  findAllRepresentative {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRepresentativesForOptionGQL extends Apollo.Query<GetRepresentativesForOptionQuery, GetRepresentativesForOptionQueryVariables> {
    document = GetRepresentativesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetPassedSamplesForOptionDocument = gql`
    query getPassedSamplesForOption {
  findAllPassedSample {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPassedSamplesForOptionGQL extends Apollo.Query<GetPassedSamplesForOptionQuery, GetPassedSamplesForOptionQueryVariables> {
    document = GetPassedSamplesForOptionDocument;
    client = 'OptionsClient';
  }
export const GetTypeOfSampleDocument = gql`
    query getTypeOfSample($data: String!) {
  findByIdTypeOfSample(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetTypeOfSampleGQL extends Apollo.Query<GetTypeOfSampleQuery, GetTypeOfSampleQueryVariables> {
    document = GetTypeOfSampleDocument;
    client = 'OptionsClient';
  }
export const GetObjectNameDocument = gql`
    query getObjectName($data: String!) {
  findByIdObjectName(id: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetObjectNameGQL extends Apollo.Query<GetObjectNameQuery, GetObjectNameQueryVariables> {
    document = GetObjectNameDocument;
    client = 'OptionsClient';
  }
export const GetPlaceDocument = gql`
    query getPlace($data: String!) {
  findByIdPlace(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPlaceGQL extends Apollo.Query<GetPlaceQuery, GetPlaceQueryVariables> {
    document = GetPlaceDocument;
    client = 'OptionsClient';
  }
export const GetMethodDocument = gql`
    query getMethod($data: String!) {
  findByIdMethod(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMethodGQL extends Apollo.Query<GetMethodQuery, GetMethodQueryVariables> {
    document = GetMethodDocument;
    client = 'OptionsClient';
  }
export const GetToolTypeDocument = gql`
    query getToolType($data: String!) {
  findByIdToolType(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetToolTypeGQL extends Apollo.Query<GetToolTypeQuery, GetToolTypeQueryVariables> {
    document = GetToolTypeDocument;
    client = 'OptionsClient';
  }
export const GetClimaticEnvironmentalDocument = gql`
    query getClimaticEnvironmental($data: String!) {
  findByIdClimaticEnvironmental(id: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClimaticEnvironmentalGQL extends Apollo.Query<GetClimaticEnvironmentalQuery, GetClimaticEnvironmentalQueryVariables> {
    document = GetClimaticEnvironmentalDocument;
    client = 'OptionsClient';
  }
export const GetPlanningDocument = gql`
    query getPlanning($data: String!) {
  findByIdPlanning(id: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPlanningGQL extends Apollo.Query<GetPlanningQuery, GetPlanningQueryVariables> {
    document = GetPlanningDocument;
    client = 'OptionsClient';
  }
export const GetNormativeDocumentDocument = gql`
    query getNormativeDocument($data: String!) {
  findByIdNormativeDocument(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNormativeDocumentGQL extends Apollo.Query<GetNormativeDocumentQuery, GetNormativeDocumentQueryVariables> {
    document = GetNormativeDocumentDocument;
    client = 'OptionsClient';
  }
export const GetSampleTypeDocument = gql`
    query getSampleType($data: String!) {
  findByIdSampleType(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSampleTypeGQL extends Apollo.Query<GetSampleTypeQuery, GetSampleTypeQueryVariables> {
    document = GetSampleTypeDocument;
    client = 'OptionsClient';
  }
export const GetSampleDocument = gql`
    query getSample($data: String!) {
  findByIdSample(id: $data) {
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSampleGQL extends Apollo.Query<GetSampleQuery, GetSampleQueryVariables> {
    document = GetSampleDocument;
    client = 'OptionsClient';
  }
export const GetPreparationDocument = gql`
    query getPreparation($data: String!) {
  findByIdPreparation(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPreparationGQL extends Apollo.Query<GetPreparationQuery, GetPreparationQueryVariables> {
    document = GetPreparationDocument;
    client = 'OptionsClient';
  }
export const GetGoalDocument = gql`
    query getGoal($data: String!) {
  findByIdGoal(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGoalGQL extends Apollo.Query<GetGoalQuery, GetGoalQueryVariables> {
    document = GetGoalDocument;
    client = 'OptionsClient';
  }
export const GetDefinedIndicatorDocument = gql`
    query getDefinedIndicator($data: String!) {
  findByIdDefinedIndicator(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDefinedIndicatorGQL extends Apollo.Query<GetDefinedIndicatorQuery, GetDefinedIndicatorQueryVariables> {
    document = GetDefinedIndicatorDocument;
    client = 'OptionsClient';
  }
export const GetEnvironmentalEngineerDocument = gql`
    query getEnvironmentalEngineer($data: String!) {
  findByIdEnvironmentalEngineer(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEnvironmentalEngineerGQL extends Apollo.Query<GetEnvironmentalEngineerQuery, GetEnvironmentalEngineerQueryVariables> {
    document = GetEnvironmentalEngineerDocument;
    client = 'OptionsClient';
  }
export const GetRepresentativeDocument = gql`
    query getRepresentative($data: String!) {
  findByIdRepresentative(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRepresentativeGQL extends Apollo.Query<GetRepresentativeQuery, GetRepresentativeQueryVariables> {
    document = GetRepresentativeDocument;
    client = 'OptionsClient';
  }
export const GetPassedSampleDocument = gql`
    query getPassedSample($data: String!) {
  findByIdPassedSample(id: $data) {
    id
    label
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPassedSampleGQL extends Apollo.Query<GetPassedSampleQuery, GetPassedSampleQueryVariables> {
    document = GetPassedSampleDocument;
    client = 'OptionsClient';
  }