import axios, { AxiosResponse } from 'axios';

import * as API from 'Types/api';

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
export const loadContacts = async (): Promise<AxiosResponse<API.Contact[], any>> => fetch.get<API.Contact[]>('');

/**
 * POST - /contact
 * Fetches A Single Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const createContact = async (): Promise<AxiosResponse<API.Contact, any>> => fetch.get<API.Contact>('');

/**
 * GET - /contact/:contactId
 * Fetches A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const loadContact = async (contactId: string): Promise<AxiosResponse<API.Contact, any>> => fetch.get<API.Contact>(`/${contactId}`);


/**
 * PUT - /contact/:contactId
 * Updates A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const updateContact = async (contactId: string): Promise<AxiosResponse<API.Contact, any>> => fetch.get<API.Contact>(`/${contactId}`);

/**
 * DELETE - /contact/:contactId
 * Deletes A Single Contact
 * @param  {string} contactId Id of Contact
 * @return {Promise}          Axios Response Data
 * @async
 * @function
 */
export const deleteContact = async (contactId: string): Promise<AxiosResponse<Record<string, string>, any>> => fetch.get<Record<string, string>>(`/${contactId}`);
