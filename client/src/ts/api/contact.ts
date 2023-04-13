import axios, { AxiosResponse } from 'axios';

import * as DefiantBidetAPI from 'DefiantBidet';

const baseURL = '/api/contact';

const fetchHeaders = {
  'Accept': 'application/json',
};

const fetch = axios.create({  baseURL: `${baseURL}`, headers: fetchHeaders });

/**
 * GET - /contact
 * Fetches All Contacts
 * @return {Promise}  Axios Response Data
 * @async
 * @function
 */
export const loadContacts = async (): Promise<AxiosResponse<DefiantBidetAPI.Contact[], any>> => fetch.get<DefiantBidetAPI.Contact[]>('');

/**
 * POST - /contact
 * Fetches A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const createContact = async (): Promise<AxiosResponse<DefiantBidetAPI.Contact, any>> => fetch.get<DefiantBidetAPI.Contact>('');

/**
 * GET - /contact/:contactId
 * Fetches A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const loadContact = async (): Promise<AxiosResponse<DefiantBidetAPI.Contact, any>> => fetch.get<DefiantBidetAPI.Contact>('');


/**
 * PUT - /contact/:contactId
 * Updates A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const updateContact = async (): Promise<AxiosResponse<DefiantBidetAPI.Contact, any>> => fetch.get<DefiantBidetAPI.Contact>('');

/**
 * DELETE - /contact/:contactId
 * Deletes A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const deleteContact = async (): Promise<AxiosResponse<Record<string, string>, any>> => fetch.get<Record<string, string>>('');
