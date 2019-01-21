import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ControlsService } from '../services/';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {


  constructor(private controlService: ControlsService) {

    // These will get events limited to the VAMPIRES group.

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // destroy all the subscriptions at once

  }
}

