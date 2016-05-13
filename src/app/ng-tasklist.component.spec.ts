import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgTasklistAppComponent } from '../app/ng-tasklist.component';

beforeEachProviders(() => [NgTasklistAppComponent]);

describe('App: NgTasklist', () => {
  it('should create the app',
      inject([NgTasklistAppComponent], (app: NgTasklistAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-tasklist works!\'',
      inject([NgTasklistAppComponent], (app: NgTasklistAppComponent) => {
    expect(app.title).toEqual('ng-tasklist works!');
  }));
});
