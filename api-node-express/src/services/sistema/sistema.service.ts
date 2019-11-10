// Initializes the `sistema` service on path `/sistema`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Sistema } from './sistema.class';
import hooks from './sistema.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sistema': Sistema & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sistema', new Sistema(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sistema');

  service.hooks(hooks);
}
