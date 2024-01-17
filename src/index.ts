import { IBaseExtension } from 'ah-server';
import * as cors from '@koa/cors';

export class CorsExtension implements IBaseExtension {
  constructor(private opts?: cors.Options) {}
  middleware = [cors(this.opts) as any];
}
