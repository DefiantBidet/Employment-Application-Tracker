import axios, { AxiosResponse } from 'axios';

import * as API from 'Types/api';

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
export const loadApplications = async (): Promise<AxiosResponse<API.Application[], any>> => fetch.get<API.Application[]>('');

/**
 * POST - /application
 * Fetches A Single Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const createApplication = async (): Promise<AxiosResponse<API.Application, any>> => fetch.get<API.Application>('');

/**
 * GET - /application/:applicationId
 * Fetches A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const loadApplication = async (applicationId: string): Promise<AxiosResponse<API.Application, any>> => fetch.get<API.Application>(`/${applicationId}`);


/**
 * PUT - /application/:applicationId
 * Updates A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const updateApplication = async (applicationId: string): Promise<AxiosResponse<API.Application, any>> => fetch.get<API.Application>(`/${applicationId}`);

/**
 * DELETE - /application/:applicationId
 * Deletes A Single Application
 * @param  {string} applicationId Id of Application
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const deleteApplication = async (applicationId: string): Promise<AxiosResponse<Record<string, string>, any>> => fetch.get<Record<string, string>>(`/${applicationId}`);
