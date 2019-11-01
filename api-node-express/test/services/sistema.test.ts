import assert from 'assert';
import app from '../../src/app';

describe('\'sistema\' service', () => {
  it('registered the service', () => {
    const service = app.service('sistema');

    assert.ok(service, 'Registered the service');
  });
});
