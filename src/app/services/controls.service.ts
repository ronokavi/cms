import { Injectable } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor(public dragulaService: DragulaService) {
    this.dragulaService.createGroup('CONTROLS', {
      copy: (el, source) => {
        return true;
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id === 'right';
      }
    });
  }
}
