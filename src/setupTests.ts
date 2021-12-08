import "@testing-library/jest-dom/extend-expect";


/**************
* MSW config code
***************/

import { server } from "services";


beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());