import { Component } from '@angular/core';
import { MyTasklistComponent } from './my-tasklist/my-tasklist.component';

@Component({
  moduleId: module.id,
  selector: 'ng-tasklist-app',
  templateUrl: 'ng-tasklist.component.html',
  styleUrls: ['ng-tasklist.component.css'],
  directives: [MyTasklistComponent]
})
export class NgTasklistAppComponent {
  title = 'ng-tasklist works!';
}
