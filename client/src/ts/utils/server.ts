// import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import { createMockExerciseList, createMockExercisePrediction } from 'Utils/test-utils';

export default setupServer(
  // rest.get('https://candidate.staging.future.co/sandbox/api/exercises', (_, res, ctx) => {
  //   return res(
  //     ctx.delay(250),
  //     ctx.status(200),
  //     ctx.json(createMockExerciseList(5)),
  //   )
  // }),
  // rest.get('https://candidate.staging.future.co/sandbox/api/exercises/:exerciseId/predictions', (_, res, ctx) => {
  //   return res(
  //     ctx.delay(250),
  //     ctx.status(200),
  //     ctx.json(createMockExercisePrediction()),
  //   )
  // }),
);
