import axios, { AxiosResponse } from 'axios';

import * as DefiantBidetAPI from 'DefiantBidet';

const baseURL = '/api/application';

const fetchHeaders = {
  'Accept': 'application/json',
};

const fetch = axios.create({  baseURL: `${baseURL}`, headers: fetchHeaders });

/**
 * GET - /application
 * Fetches All Companies
 * @return {Promise}  Axios Response Data
 * @async
 * @function
 */
export const loadApplications = async (): Promise<AxiosResponse<DefiantBidetAPI.Application[], any>> => fetch.get<DefiantBidetAPI.Application[]>('');

/**
 * POST - /application
 * Fetches A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const createApplication = async (): Promise<AxiosResponse<DefiantBidetAPI.Application, any>> => fetch.get<DefiantBidetAPI.Application>('');

/**
 * GET - /application/:applicationId
 * Fetches A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const loadApplication = async (): Promise<AxiosResponse<DefiantBidetAPI.Application, any>> => fetch.get<DefiantBidetAPI.Application>('');


/**
 * PUT - /application/:applicationId
 * Updates A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const updateApplication = async (): Promise<AxiosResponse<DefiantBidetAPI.Application, any>> => fetch.get<DefiantBidetAPI.Application>('');

/**
 * DELETE - /application/:applicationId
 * Deletes A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const deleteApplication = async (): Promise<AxiosResponse<Record<string, string>, any>> => fetch.get<Record<string, string>>('');
