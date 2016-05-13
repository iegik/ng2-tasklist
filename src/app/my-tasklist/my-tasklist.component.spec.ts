import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MyTasklistComponent } from './my-tasklist.component';

describe('Component: MyTasklist', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyTasklistComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyTasklistComponent],
      (component: MyTasklistComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyTasklistComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyTasklistComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-tasklist></app-my-tasklist>
  `,
  directives: [MyTasklistComponent]
})
class MyTasklistComponentTestController {
}

