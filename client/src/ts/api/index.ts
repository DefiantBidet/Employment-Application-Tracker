// import axios, { AxiosResponse } from 'axios';
// import applyCaseMiddleware from 'axios-case-converter';

// import * as FutureAPI from 'Future';

// const baseURL = 'https://candidate.staging.future.co/sandbox/api/exercises';

// const fetchHeaders = {
//   'Accept': 'application/json',
// };

// const fetch = applyCaseMiddleware(
//   axios.create({
//     baseURL: `${baseURL}`,
//     headers: fetchHeaders,
//   }),
//   {
//     caseFunctions: {
//       camel: (input) => {
//         return (input.charAt(0).toLowerCase() + input.slice(1)).replace(/[-_](.)/g, (_match, group1) => group1.toUpperCase());
//       }
//     }
//   }
// );

/**
 * GET - Fetches Exercise Information
 * [loadExercises description]
 * @return {Promise}  Axios Response Data
 * @async
 * @function
 */
// export const loadExercises = async (): Promise<AxiosResponse<FutureAPI.Exercise[], any>> => fetch.get<FutureAPI.Exercise[]>('');

/**
 * GET - Fetches Exercise Prediction Data
 * @param  {string} exerciseId  Id of selected Exercise
 * @return {Promise}            Axios Response Data
 * @async
 * @function
 */
// export const loadExercisePredictionData = async (exerciseId: string): Promise<AxiosResponse<FutureAPI.ExercisePrediction, any>> => fetch.get<FutureAPI.ExercisePrediction>(`/${exerciseId}/predictions`);
