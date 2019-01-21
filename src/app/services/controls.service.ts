import { Injectable } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor(public dragulaService: DragulaService) {
    this.dragulaService.createGroup('CONTROLS', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        console.log(target.id);
        return true;
      }
    });
  }
}
