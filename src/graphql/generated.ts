import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLBigInt: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  __typename?: 'Query';
  banners: Array<Banners>;
  banners_aggregated: Array<Banners_Aggregated>;
  banners_by_id?: Maybe<Banners>;
  banners_by_version?: Maybe<Version_Banners>;
  data: Array<Data>;
  data_aggregated: Array<Data_Aggregated>;
  data_by_id?: Maybe<Data>;
  data_by_version?: Maybe<Version_Data>;
  drivers: Array<Drivers>;
  drivers_aggregated: Array<Drivers_Aggregated>;
  drivers_by_id?: Maybe<Drivers>;
  drivers_by_version?: Maybe<Version_Drivers>;
  hallOfFame: Array<HallOfFame>;
  hallOfFame_aggregated: Array<HallOfFame_Aggregated>;
  hallOfFame_by_id?: Maybe<HallOfFame>;
  hallOfFame_by_version?: Maybe<Version_HallOfFame>;
  hallOfFame_files: Array<HallOfFame_Files>;
  hallOfFame_files_aggregated: Array<HallOfFame_Files_Aggregated>;
  hallOfFame_files_by_id?: Maybe<HallOfFame_Files>;
  hallOfFame_files_by_version?: Maybe<Version_HallOfFame_Files>;
  rounds: Array<Rounds>;
  rounds_aggregated: Array<Rounds_Aggregated>;
  rounds_by_id?: Maybe<Rounds>;
  rounds_by_version?: Maybe<Version_Rounds>;
  seasons: Array<Seasons>;
  seasons_aggregated: Array<Seasons_Aggregated>;
  seasons_by_id?: Maybe<Seasons>;
  seasons_by_version?: Maybe<Version_Seasons>;
  teams: Array<Teams>;
  teams_aggregated: Array<Teams_Aggregated>;
  teams_by_id?: Maybe<Teams>;
  teams_by_version?: Maybe<Version_Teams>;
  tracks: Array<Tracks>;
  tracks_aggregated: Array<Tracks_Aggregated>;
  tracks_by_id?: Maybe<Tracks>;
  tracks_by_version?: Maybe<Version_Tracks>;
};


export type QueryBannersArgs = {
  filter?: InputMaybe<Banners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBanners_AggregatedArgs = {
  filter?: InputMaybe<Banners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBanners_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryBanners_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryDataArgs = {
  filter?: InputMaybe<Data_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryData_AggregatedArgs = {
  filter?: InputMaybe<Data_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryData_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryData_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryDriversArgs = {
  filter?: InputMaybe<Drivers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDrivers_AggregatedArgs = {
  filter?: InputMaybe<Drivers_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDrivers_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryDrivers_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryHallOfFameArgs = {
  filter?: InputMaybe<HallOfFame_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHallOfFame_AggregatedArgs = {
  filter?: InputMaybe<HallOfFame_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHallOfFame_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryHallOfFame_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryHallOfFame_FilesArgs = {
  filter?: InputMaybe<HallOfFame_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHallOfFame_Files_AggregatedArgs = {
  filter?: InputMaybe<HallOfFame_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHallOfFame_Files_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryHallOfFame_Files_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryRoundsArgs = {
  filter?: InputMaybe<Rounds_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRounds_AggregatedArgs = {
  filter?: InputMaybe<Rounds_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRounds_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryRounds_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QuerySeasonsArgs = {
  filter?: InputMaybe<Seasons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeasons_AggregatedArgs = {
  filter?: InputMaybe<Seasons_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeasons_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QuerySeasons_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryTeamsArgs = {
  filter?: InputMaybe<Teams_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTeams_AggregatedArgs = {
  filter?: InputMaybe<Teams_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTeams_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryTeams_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};


export type QueryTracksArgs = {
  filter?: InputMaybe<Tracks_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTracks_AggregatedArgs = {
  filter?: InputMaybe<Tracks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTracks_By_IdArgs = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryTracks_By_VersionArgs = {
  id: Scalars['ID'];
  version: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  banners_mutated?: Maybe<Banners_Mutated>;
  data_mutated?: Maybe<Data_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  drivers_mutated?: Maybe<Drivers_Mutated>;
  hallOfFame_files_mutated?: Maybe<HallOfFame_Files_Mutated>;
  hallOfFame_mutated?: Maybe<HallOfFame_Mutated>;
  rounds_mutated?: Maybe<Rounds_Mutated>;
  seasons_mutated?: Maybe<Seasons_Mutated>;
  teams_mutated?: Maybe<Teams_Mutated>;
  tracks_mutated?: Maybe<Tracks_Mutated>;
};


export type SubscriptionBanners_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionData_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDrivers_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHallOfFame_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHallOfFame_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRounds_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSeasons_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTeams_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTracks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Banners = {
  __typename?: 'banners';
  category?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  photo?: Maybe<Directus_Files>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type BannersPhotoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Banners_Aggregated = {
  __typename?: 'banners_aggregated';
  avg?: Maybe<Banners_Aggregated_Fields>;
  avgDistinct?: Maybe<Banners_Aggregated_Fields>;
  count?: Maybe<Banners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Banners_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Banners_Aggregated_Fields>;
  min?: Maybe<Banners_Aggregated_Fields>;
  sum?: Maybe<Banners_Aggregated_Fields>;
  sumDistinct?: Maybe<Banners_Aggregated_Fields>;
};

export type Banners_Aggregated_Count = {
  __typename?: 'banners_aggregated_count';
  category?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Banners_Aggregated_Fields = {
  __typename?: 'banners_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Banners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Banners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Banners_Filter>>>;
  category?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  photo?: InputMaybe<Directus_Files_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Banners_Mutated = {
  __typename?: 'banners_mutated';
  data?: Maybe<Banners>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Data = {
  __typename?: 'data';
  csv?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type DataCsvArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Data_Aggregated = {
  __typename?: 'data_aggregated';
  avg?: Maybe<Data_Aggregated_Fields>;
  avgDistinct?: Maybe<Data_Aggregated_Fields>;
  count?: Maybe<Data_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Data_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Data_Aggregated_Fields>;
  min?: Maybe<Data_Aggregated_Fields>;
  sum?: Maybe<Data_Aggregated_Fields>;
  sumDistinct?: Maybe<Data_Aggregated_Fields>;
};

export type Data_Aggregated_Count = {
  __typename?: 'data_aggregated_count';
  csv?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Data_Aggregated_Fields = {
  __typename?: 'data_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Data_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Data_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Data_Filter>>>;
  csv?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Data_Mutated = {
  __typename?: 'data_mutated';
  data?: Maybe<Data>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['Date']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['GraphQLBigInt']>;
  focal_point_x?: Maybe<Scalars['Int']>;
  focal_point_y?: Maybe<Scalars['Int']>;
  folder?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars['String']>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  tus_data?: Maybe<Scalars['JSON']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Drivers = {
  __typename?: 'drivers';
  city?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  equipment?: Maybe<Scalars['String']>;
  grid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  photo?: Maybe<Directus_Files>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  stream?: Maybe<Scalars['String']>;
  team?: Maybe<Teams>;
};


export type DriversPhotoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DriversTeamArgs = {
  filter?: InputMaybe<Teams_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Drivers_Aggregated = {
  __typename?: 'drivers_aggregated';
  avg?: Maybe<Drivers_Aggregated_Fields>;
  avgDistinct?: Maybe<Drivers_Aggregated_Fields>;
  count?: Maybe<Drivers_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Drivers_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Drivers_Aggregated_Fields>;
  min?: Maybe<Drivers_Aggregated_Fields>;
  sum?: Maybe<Drivers_Aggregated_Fields>;
  sumDistinct?: Maybe<Drivers_Aggregated_Fields>;
};

export type Drivers_Aggregated_Count = {
  __typename?: 'drivers_aggregated_count';
  city?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  equipment?: Maybe<Scalars['Int']>;
  grid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  stream?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
};

export type Drivers_Aggregated_Fields = {
  __typename?: 'drivers_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
  team?: Maybe<Scalars['Float']>;
};

export type Drivers_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Drivers_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Drivers_Filter>>>;
  city?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  equipment?: InputMaybe<String_Filter_Operators>;
  grid?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  number?: InputMaybe<String_Filter_Operators>;
  photo?: InputMaybe<Directus_Files_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  stream?: InputMaybe<String_Filter_Operators>;
  team?: InputMaybe<Teams_Filter>;
};

export type Drivers_Mutated = {
  __typename?: 'drivers_mutated';
  data?: Maybe<Drivers>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type HallOfFame = {
  __typename?: 'hallOfFame';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  photo?: Maybe<Array<Maybe<HallOfFame_Files>>>;
  photo_func?: Maybe<Count_Functions>;
  season?: Maybe<Seasons>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type HallOfFamePhotoArgs = {
  filter?: InputMaybe<HallOfFame_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HallOfFameSeasonArgs = {
  filter?: InputMaybe<Seasons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HallOfFame_Aggregated = {
  __typename?: 'hallOfFame_aggregated';
  avg?: Maybe<HallOfFame_Aggregated_Fields>;
  avgDistinct?: Maybe<HallOfFame_Aggregated_Fields>;
  count?: Maybe<HallOfFame_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<HallOfFame_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<HallOfFame_Aggregated_Fields>;
  min?: Maybe<HallOfFame_Aggregated_Fields>;
  sum?: Maybe<HallOfFame_Aggregated_Fields>;
  sumDistinct?: Maybe<HallOfFame_Aggregated_Fields>;
};

export type HallOfFame_Aggregated_Count = {
  __typename?: 'hallOfFame_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type HallOfFame_Aggregated_Fields = {
  __typename?: 'hallOfFame_aggregated_fields';
  season?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type HallOfFame_Files = {
  __typename?: 'hallOfFame_files';
  directus_files_id?: Maybe<Directus_Files>;
  hallOfFame_id?: Maybe<HallOfFame>;
  id: Scalars['ID'];
};


export type HallOfFame_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HallOfFame_FilesHallOfFame_IdArgs = {
  filter?: InputMaybe<HallOfFame_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HallOfFame_Files_Aggregated = {
  __typename?: 'hallOfFame_files_aggregated';
  avg?: Maybe<HallOfFame_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<HallOfFame_Files_Aggregated_Fields>;
  count?: Maybe<HallOfFame_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<HallOfFame_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<HallOfFame_Files_Aggregated_Fields>;
  min?: Maybe<HallOfFame_Files_Aggregated_Fields>;
  sum?: Maybe<HallOfFame_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<HallOfFame_Files_Aggregated_Fields>;
};

export type HallOfFame_Files_Aggregated_Count = {
  __typename?: 'hallOfFame_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  hallOfFame_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type HallOfFame_Files_Aggregated_Fields = {
  __typename?: 'hallOfFame_files_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type HallOfFame_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<HallOfFame_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<HallOfFame_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  hallOfFame_id?: InputMaybe<HallOfFame_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type HallOfFame_Files_Mutated = {
  __typename?: 'hallOfFame_files_mutated';
  data?: Maybe<HallOfFame_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type HallOfFame_Files_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<HallOfFame_Files_Filter>>>;
  _none?: InputMaybe<HallOfFame_Files_Filter>;
  _or?: InputMaybe<Array<InputMaybe<HallOfFame_Files_Filter>>>;
  _some?: InputMaybe<HallOfFame_Files_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  hallOfFame_id?: InputMaybe<HallOfFame_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type HallOfFame_Filter = {
  _and?: InputMaybe<Array<InputMaybe<HallOfFame_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<HallOfFame_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  photo?: InputMaybe<HallOfFame_Files_Quantifier_Filter>;
  photo_func?: InputMaybe<Count_Function_Filter_Operators>;
  season?: InputMaybe<Seasons_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type HallOfFame_Mutated = {
  __typename?: 'hallOfFame_mutated';
  data?: Maybe<HallOfFame>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['ID']>;
  _eq?: InputMaybe<Scalars['ID']>;
  _icontains?: InputMaybe<Scalars['ID']>;
  _iends_with?: InputMaybe<Scalars['ID']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']>;
  _ncontains?: InputMaybe<Scalars['ID']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['ID']>;
  _neq?: InputMaybe<Scalars['ID']>;
  _niends_with?: InputMaybe<Scalars['ID']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['ID']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['ID']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Rounds = {
  __typename?: 'rounds';
  date: Scalars['Date'];
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  raceWinner?: Maybe<Scalars['String']>;
  season?: Maybe<Seasons>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  track?: Maybe<Tracks>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type RoundsSeasonArgs = {
  filter?: InputMaybe<Seasons_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RoundsTrackArgs = {
  filter?: InputMaybe<Tracks_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Rounds_Aggregated = {
  __typename?: 'rounds_aggregated';
  avg?: Maybe<Rounds_Aggregated_Fields>;
  avgDistinct?: Maybe<Rounds_Aggregated_Fields>;
  count?: Maybe<Rounds_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Rounds_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Rounds_Aggregated_Fields>;
  min?: Maybe<Rounds_Aggregated_Fields>;
  sum?: Maybe<Rounds_Aggregated_Fields>;
  sumDistinct?: Maybe<Rounds_Aggregated_Fields>;
};

export type Rounds_Aggregated_Count = {
  __typename?: 'rounds_aggregated_count';
  date?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  raceWinner?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  track?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Rounds_Aggregated_Fields = {
  __typename?: 'rounds_aggregated_fields';
  season?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Rounds_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Rounds_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Rounds_Filter>>>;
  date?: InputMaybe<Date_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  raceWinner?: InputMaybe<String_Filter_Operators>;
  season?: InputMaybe<Seasons_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  track?: InputMaybe<Tracks_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Rounds_Mutated = {
  __typename?: 'rounds_mutated';
  data?: Maybe<Rounds>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Rounds_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Rounds_Filter>>>;
  _none?: InputMaybe<Rounds_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Rounds_Filter>>>;
  _some?: InputMaybe<Rounds_Filter>;
  date?: InputMaybe<Date_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  raceWinner?: InputMaybe<String_Filter_Operators>;
  season?: InputMaybe<Seasons_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  track?: InputMaybe<Tracks_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Seasons = {
  __typename?: 'seasons';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rounds?: Maybe<Array<Maybe<Rounds>>>;
  rounds_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  startDate_func?: Maybe<Date_Functions>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};


export type SeasonsRoundsArgs = {
  filter?: InputMaybe<Rounds_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Seasons_Aggregated = {
  __typename?: 'seasons_aggregated';
  avg?: Maybe<Seasons_Aggregated_Fields>;
  avgDistinct?: Maybe<Seasons_Aggregated_Fields>;
  count?: Maybe<Seasons_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Seasons_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Seasons_Aggregated_Fields>;
  min?: Maybe<Seasons_Aggregated_Fields>;
  sum?: Maybe<Seasons_Aggregated_Fields>;
  sumDistinct?: Maybe<Seasons_Aggregated_Fields>;
};

export type Seasons_Aggregated_Count = {
  __typename?: 'seasons_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  rounds?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Seasons_Aggregated_Fields = {
  __typename?: 'seasons_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type Seasons_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seasons_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seasons_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  rounds?: InputMaybe<Rounds_Quantifier_Filter>;
  rounds_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  startDate?: InputMaybe<Date_Filter_Operators>;
  startDate_func?: InputMaybe<Date_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Seasons_Mutated = {
  __typename?: 'seasons_mutated';
  data?: Maybe<Seasons>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _iends_with?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _istarts_with?: InputMaybe<Scalars['String']>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _niends_with?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Teams = {
  __typename?: 'teams';
  color?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Directus_Files>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type TeamsPhotoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Teams_Aggregated = {
  __typename?: 'teams_aggregated';
  avg?: Maybe<Teams_Aggregated_Fields>;
  avgDistinct?: Maybe<Teams_Aggregated_Fields>;
  count?: Maybe<Teams_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Teams_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Teams_Aggregated_Fields>;
  min?: Maybe<Teams_Aggregated_Fields>;
  sum?: Maybe<Teams_Aggregated_Fields>;
  sumDistinct?: Maybe<Teams_Aggregated_Fields>;
};

export type Teams_Aggregated_Count = {
  __typename?: 'teams_aggregated_count';
  color?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Teams_Aggregated_Fields = {
  __typename?: 'teams_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Teams_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Teams_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Teams_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  photo?: InputMaybe<Directus_Files_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Teams_Mutated = {
  __typename?: 'teams_mutated';
  data?: Maybe<Teams>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Tracks = {
  __typename?: 'tracks';
  circuit?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  flag?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  uniqueName?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type TracksFlagArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tracks_Aggregated = {
  __typename?: 'tracks_aggregated';
  avg?: Maybe<Tracks_Aggregated_Fields>;
  avgDistinct?: Maybe<Tracks_Aggregated_Fields>;
  count?: Maybe<Tracks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tracks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tracks_Aggregated_Fields>;
  min?: Maybe<Tracks_Aggregated_Fields>;
  sum?: Maybe<Tracks_Aggregated_Fields>;
  sumDistinct?: Maybe<Tracks_Aggregated_Fields>;
};

export type Tracks_Aggregated_Count = {
  __typename?: 'tracks_aggregated_count';
  circuit?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  uniqueName?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Tracks_Aggregated_Fields = {
  __typename?: 'tracks_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Tracks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tracks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tracks_Filter>>>;
  circuit?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flag?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  uniqueName?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Tracks_Mutated = {
  __typename?: 'tracks_mutated';
  data?: Maybe<Tracks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID'];
};

export type Version_Banners = {
  __typename?: 'version_banners';
  category?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Data = {
  __typename?: 'version_data';
  csv?: Maybe<Scalars['JSON']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Drivers = {
  __typename?: 'version_drivers';
  city?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  equipment?: Maybe<Scalars['String']>;
  grid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  stream?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['JSON']>;
};

export type Version_HallOfFame = {
  __typename?: 'version_hallOfFame';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  photo?: Maybe<Scalars['JSON']>;
  photo_func?: Maybe<Count_Functions>;
  season?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_HallOfFame_Files = {
  __typename?: 'version_hallOfFame_files';
  directus_files_id?: Maybe<Scalars['JSON']>;
  hallOfFame_id?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
};

export type Version_Rounds = {
  __typename?: 'version_rounds';
  date: Scalars['Date'];
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  raceWinner?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  track?: Maybe<Scalars['JSON']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Seasons = {
  __typename?: 'version_seasons';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rounds?: Maybe<Scalars['JSON']>;
  rounds_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  startDate_func?: Maybe<Date_Functions>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Version_Teams = {
  __typename?: 'version_teams';
  color?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['JSON']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Version_Tracks = {
  __typename?: 'version_tracks';
  circuit?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  flag?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  uniqueName?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type GetBannersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannersQuery = { __typename?: 'Query', banners: Array<{ __typename?: 'banners', id: string, link?: string | null, title?: string | null, category?: string | null, photo?: { __typename?: 'directus_files', id: string } | null }> };

export type GetCalendarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCalendarsQuery = { __typename?: 'Query', seasons: Array<{ __typename?: 'seasons', id: string, name?: string | null, rounds?: Array<{ __typename?: 'rounds', id: string, name?: string | null, link?: string | null, date: any, raceWinner?: string | null, track?: { __typename?: 'tracks', name?: string | null, location?: string | null, flag?: { __typename?: 'directus_files', id: string } | null } | null } | null> | null }> };

export type GetHallsOfFameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHallsOfFameQuery = { __typename?: 'Query', hallOfFame: Array<{ __typename?: 'hallOfFame', id: string, title?: string | null, season?: { __typename?: 'seasons', id: string, name?: string | null } | null, photo?: Array<{ __typename?: 'hallOfFame_files', directus_files_id?: { __typename?: 'directus_files', id: string } | null } | null> | null }> };

export type GetTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamsQuery = { __typename?: 'Query', drivers: Array<{ __typename?: 'drivers', id: string, name?: string | null, number?: string | null, stream?: string | null, city?: string | null, equipment?: string | null, grid?: string | null, team?: { __typename?: 'teams', name?: string | null, color?: string | null } | null, photo?: { __typename?: 'directus_files', id: string } | null }>, teams: Array<{ __typename?: 'teams', id: string, name?: string | null, color?: string | null, photo?: { __typename?: 'directus_files', id: string } | null }> };

export type GetStatsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsDataQuery = { __typename?: 'Query', data: Array<{ __typename?: 'data', id: string, csv?: { __typename?: 'directus_files', id: string } | null }> };


export const GetBannersDocument = gql`
    query GetBanners {
  banners(sort: "-date_created") {
    id
    link
    title
    category
    photo {
      id
    }
  }
}
    `;

/**
 * __useGetBannersQuery__
 *
 * To run a query within a React component, call `useGetBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBannersQuery(baseOptions?: Apollo.QueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
      }
export function useGetBannersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, options);
        }
export type GetBannersQueryHookResult = ReturnType<typeof useGetBannersQuery>;
export type GetBannersLazyQueryHookResult = ReturnType<typeof useGetBannersLazyQuery>;
export type GetBannersQueryResult = Apollo.QueryResult<GetBannersQuery, GetBannersQueryVariables>;
export const GetCalendarsDocument = gql`
    query GetCalendars {
  seasons(filter: {status: {_eq: "published"}}, sort: "-date_created", limit: 1) {
    id
    name
    rounds {
      id
      name
      link
      date
      raceWinner
      track {
        name
        location
        flag {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetCalendarsQuery__
 *
 * To run a query within a React component, call `useGetCalendarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCalendarsQuery(baseOptions?: Apollo.QueryHookOptions<GetCalendarsQuery, GetCalendarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarsQuery, GetCalendarsQueryVariables>(GetCalendarsDocument, options);
      }
export function useGetCalendarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarsQuery, GetCalendarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarsQuery, GetCalendarsQueryVariables>(GetCalendarsDocument, options);
        }
export type GetCalendarsQueryHookResult = ReturnType<typeof useGetCalendarsQuery>;
export type GetCalendarsLazyQueryHookResult = ReturnType<typeof useGetCalendarsLazyQuery>;
export type GetCalendarsQueryResult = Apollo.QueryResult<GetCalendarsQuery, GetCalendarsQueryVariables>;
export const GetHallsOfFameDocument = gql`
    query GetHallsOfFame {
  hallOfFame(sort: "-date_updated") {
    id
    title
    season {
      id
      name
    }
    photo {
      directus_files_id {
        id
      }
    }
  }
}
    `;

/**
 * __useGetHallsOfFameQuery__
 *
 * To run a query within a React component, call `useGetHallsOfFameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHallsOfFameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHallsOfFameQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHallsOfFameQuery(baseOptions?: Apollo.QueryHookOptions<GetHallsOfFameQuery, GetHallsOfFameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHallsOfFameQuery, GetHallsOfFameQueryVariables>(GetHallsOfFameDocument, options);
      }
export function useGetHallsOfFameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHallsOfFameQuery, GetHallsOfFameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHallsOfFameQuery, GetHallsOfFameQueryVariables>(GetHallsOfFameDocument, options);
        }
export type GetHallsOfFameQueryHookResult = ReturnType<typeof useGetHallsOfFameQuery>;
export type GetHallsOfFameLazyQueryHookResult = ReturnType<typeof useGetHallsOfFameLazyQuery>;
export type GetHallsOfFameQueryResult = Apollo.QueryResult<GetHallsOfFameQuery, GetHallsOfFameQueryVariables>;
export const GetTeamsDocument = gql`
    query GetTeams {
  drivers(filter: {status: {_eq: "published"}}) {
    id
    name
    number
    stream
    city
    equipment
    grid
    team {
      name
      color
    }
    photo {
      id
    }
  }
  teams(filter: {status: {_eq: "published"}}) {
    id
    name
    color
    photo {
      id
    }
  }
}
    `;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetStatsDataDocument = gql`
    query GetStatsData {
  data(limit: 2, sort: ["-csv.modified_on"]) {
    id
    csv {
      id
    }
  }
}
    `;

/**
 * __useGetStatsDataQuery__
 *
 * To run a query within a React component, call `useGetStatsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatsDataQuery(baseOptions?: Apollo.QueryHookOptions<GetStatsDataQuery, GetStatsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatsDataQuery, GetStatsDataQueryVariables>(GetStatsDataDocument, options);
      }
export function useGetStatsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatsDataQuery, GetStatsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatsDataQuery, GetStatsDataQueryVariables>(GetStatsDataDocument, options);
        }
export type GetStatsDataQueryHookResult = ReturnType<typeof useGetStatsDataQuery>;
export type GetStatsDataLazyQueryHookResult = ReturnType<typeof useGetStatsDataLazyQuery>;
export type GetStatsDataQueryResult = Apollo.QueryResult<GetStatsDataQuery, GetStatsDataQueryVariables>;