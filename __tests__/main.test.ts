import request from 'supertest';
import server from '../src/main';
import acceptHMR from '../src/utils/acceptHMR';

describe('Accept HMR', () => {
  const accept = jest.fn();
  const dispose = jest.fn((callback) => callback());
  const mockModule = ({ hot: { accept, dispose } } as unknown) as NodeModule;
  it('should only call hot.accept() if hot is defined', () => {
    acceptHMR(mockModule, server);
    mockModule.hot.dispose(() => undefined);
    expect(accept).toHaveBeenCalled();
  });
});

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(server).get('/').expect(200);
  });
});

afterAll(() => {
  server.close();
});
