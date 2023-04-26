import axios, { AxiosResponse } from 'axios';

import * as API from 'Types/api';

const baseURL = '/api/company';

const fetchHeaders = {
  'Accept': 'application/json',
};

const fetch = axios.create({  baseURL: `${baseURL}`, headers: fetchHeaders });

/**
 * GET - /company
 * Fetches All Companies
 * @return {Promise}  Axios Response Data
 * @async
 * @function
 */
export const loadCompanies = async (): Promise<AxiosResponse<API.Company[], any>> => fetch.get<API.Company[]>('');

/**
 * POST - /company
 * Fetches A Single Company
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const createCompany = async (): Promise<AxiosResponse<API.Company, any>> => fetch.get<API.Company>('');

/**
 * GET - /company/:companyId
 * Fetches A Single Company
 * @param  {string} companyId Id of Company
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const loadCompany = async (companyId: string): Promise<AxiosResponse<API.Company, any>> => fetch.get<API.Company>(`/${companyId}`);


/**
 * PUT - /company/:companyId
 * Updates A Single Company
 * @param  {string} companyId Id of Company
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const updateCompany = async (companyId: string): Promise<AxiosResponse<API.Company, any>> => fetch.get<API.Company>(`/${companyId}`);

/**
 * DELETE - /company/:companyId
 * Deletes A Single Company
 * @param  {string} companyId Id of Company
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const deleteCompany = async (companyId: string): Promise<AxiosResponse<Record<string, string>, any>> => fetch.get<Record<string, string>>(`/${companyId}`);
