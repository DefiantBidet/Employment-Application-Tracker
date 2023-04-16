import server from './server'

// Mock Service Workers
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
