// import * as uuid from 'uuid';

// import * as FutureAPI from 'Future';
// import { IExerciseContext } from 'Contexts/ExerciseContext';

/**
 * Creates a mock FutureAPI.AudioData object
 * @param  {string} url           url of audio [optional]
 * @return {FutureAPI.AudioData}  Audio Data mock
 * @function
 */
// export function createMockAudioData(url?: string): FutureAPI.AudioData {
//   const mockAudio: FutureAPI.AudioData = {
//     url: url ?? '//localhost/audio/4\'33".m4a',
//   };
//   return mockAudio;
// }

/**
 * Creates a mock FutureAPI.VideoData object
 * @param  {Partial<FutureAPI.VideoData>} mockVideoData  Partial Video Data [optional]
 * @return {FutureAPI.VideoData}                         Video Data mock
 * @function
 */
// export function createMockVideoData(mockVideoData?: Partial<FutureAPI.VideoData>): FutureAPI.VideoData {
//   const mockVideo: FutureAPI.VideoData = {
//     isFlipped: mockVideoData?.isFlipped ?? false,
//     url: mockVideoData?.url ?? '//localhost/video/cats.mp4',
//   };

//   return mockVideo;
// }

/**
 * Creates a mock FutureAPI.Exercise object
 * @param  {Partial<FutureAPI.Exercise>} mockExerciseData  Partial Exercise Data [optional]
 * @return {FutureAPI.Exercise}                            Exercise Data mock
 * @function
 */
// export function createMockExercise(mockExerciseData?: Partial<FutureAPI.Exercise>) {
//   const mockExercise: FutureAPI.Exercise = {
//     audio: mockExerciseData?.audio ?? createMockAudioData(),
//     description: mockExerciseData?.description ?? `mockDescription-${uuid.v4()}`,
//     equipmentRequired: mockExerciseData?.equipmentRequired ?? null,
//     id: mockExerciseData?.id ?? uuid.v4(),
//     isAlternating: mockExerciseData?.isAlternating ?? false,
//     movementPatterns: mockExerciseData?.movementPatterns ?? `mockMovements-${uuid.v4()}`,
//     muscleGroups: mockExerciseData?.muscleGroups ?? null,
//     name: mockExerciseData?.name ?? `mockName-${uuid.v4()}`,
//     side: mockExerciseData?.side ?? `mockSide-${uuid.v4()}`,
//     synonyms: mockExerciseData?.synonyms ?? `mockSynonyms-${uuid.v4()}`,
//     video: mockExerciseData?.video ?? createMockVideoData(),
//   };

//   return mockExercise;
// }

/**
 * Creates an Array of Mock Exercises
 * @param  {number} length          Length of Array to create
 * @return {FutureAPI.Exercise[]}   Exercise List mock
 * @function
 */
// export function createMockExerciseList(length: number): FutureAPI.Exercise[] {
//   return Array.from({ length }, (_) => createMockExercise());
// }

/**
 * Creates a mock PredictionSkillLevel object
 * @param  {Partial<FutureAPI.PredictionSkillLevel>} mockPredictionSkillLevel  Partial PredictionSkillLevel data [optional]
 * @return {FutureAPI.PredictionSkillLevel}                                    Prediction Skill Level mock
 * @function
 */
// export function createMockPredictionSkillLevel(mockPredictionSkillLevel?: Partial<FutureAPI.PredictionSkillLevel>): FutureAPI.PredictionSkillLevel {
//   const mockSkillLevel: FutureAPI.PredictionSkillLevel = {
//     level: mockPredictionSkillLevel?.level ?? 3,
//     maxLevel: mockPredictionSkillLevel?.level ?? 5,
//     predictionConfidence: Math.random(),
//   };

//   return mockSkillLevel;
// }

/**
 * Creates a mock ExercisePrediction object
 * @param  {Partial<FutureAPI.ExercisePrediction>} mockExercisePrediction  Partial ExercisePrediction data [optional]
 * @return {FutureAPI.ExercisePrediction}                                  Exercise Prediction mock
 * @function
 */
// export function createMockExercisePrediction(mockExercisePrediction?: Partial<FutureAPI.ExercisePrediction>): FutureAPI.ExercisePrediction {
//   const mockPrediction: FutureAPI.ExercisePrediction = {
//     exerciseId: mockExercisePrediction?.exerciseId ?? uuid.v4(),
//     predictedAt: new Date().toISOString(),
//     skillLevel: mockExercisePrediction?.skillLevel ?? createMockPredictionSkillLevel(),
//     predictionTimeCostMilliseconds: mockExercisePrediction?.predictionTimeCostMilliseconds ?? (250 + Math.random()),
//   };

//   return mockPrediction;
// }

/**
 * Creates a mock IExerciseContext object
 * @param  {Partial<IExerciseContext>} mockExerciseContext  Partial IExerciseContext data [optional]
 * @return {IExerciseContext}                               Exercise Context mock
 * @function
 */
// export function createMockExerciseContext(mockExerciseContext?: Partial<IExerciseContext>): IExerciseContext {
//   const noop = () => { /* noop */ };

//   const mockContext: IExerciseContext = {
//     exerciseList: mockExerciseContext?.exerciseList ?? [],
//     setExerciseList: mockExerciseContext?.setExerciseList ?? noop,
//     selectedExercise: mockExerciseContext?.selectedExercise ?? null,
//     setSelectedExercise: mockExerciseContext?.setSelectedExercise ?? noop,
//   };

//   return mockContext;
// };

