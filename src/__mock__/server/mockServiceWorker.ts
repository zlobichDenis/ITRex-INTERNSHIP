import { rest, setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { patientProfile } from 'services';

export let server: any;

const mockTokens = {
  'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJpYXQiOjE2Mzg2OTc3MjEsImV4cCI6MTYzODcwMTMyMX0.rQB7C8W5vD3mDlOYAq8JX6vOwMv0_gSECN3QHTwO_hU',
  'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJyZWZyZXNoIjp0cnVlLCJpYXQiOjE2Mzg2OTc3MjF9.jzJK5DJzuduufoVnojfO8Vnl4SDvBLQVU7V2OYgkpaE'
}
export const mockBaseUrl = 'https://reactlabapi.herokuapp.com/api/';

export const handlers = [
  rest.post(`${mockBaseUrl}auth/login`, (req, res, ctx) => {
    const { userName, password }: any = req.body;
    if (userName === 'dasha@tut.by' && password === 'dasha@tut.by') {
      return res(ctx.status(200),
        ctx.json(mockTokens)
      ) 
    } else {
      return res(ctx.status(403),
        ctx.json('login error'))
    }
  }),
  rest.get(`${mockBaseUrl}auth/profile`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patientProfile))
  }),
];

if (process.env.NODE_ENV === 'development') {
  setupWorker(...handlers)
} else {
  server = setupServer(...handlers);
}