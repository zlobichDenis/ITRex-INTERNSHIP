import '@testing-library/jest-dom/extend-expect';

import { server } from '__mock__';

/**************
* MSW config code
***************/

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());