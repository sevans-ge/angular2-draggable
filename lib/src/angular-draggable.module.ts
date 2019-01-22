import { NgModule } from '@angular/core';
import { AngularDraggableDirective } from './directive/angular-draggable.directive';
import { AngularResizableDirective } from './directive/angular-resizable.directive';

@NgModule({
  declarations: [
    AngularDraggableDirective,
    AngularResizableDirective
  ],
  exports: [
    AngularDraggableDirective,
    AngularResizableDirective
  ]
})
export class AngularDraggableModule { }

export { AngularDraggableDirective, AngularResizableDirective };

