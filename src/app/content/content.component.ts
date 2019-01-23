import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ControlsService } from '../services/';
import { ResizeEvent } from 'angular-resizable-element';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {


  constructor(private controlService: ControlsService) {

    // These will get events limited to the VAMPIRES group.

  }

  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // destroy all the subscriptions at once

  }
}

