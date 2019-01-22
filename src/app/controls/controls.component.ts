import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit, OnDestroy {
  @Input() dataObject;
  private person = {
    name: {
      label: 'Name',
      value: 'Juri',
      type: 'text',
      placeholder: 'Textbox',
      validation: {
        required: true
      }
    },
    gender: {
      label: 'Gender',
      value: 'M',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' }
      ]
    },
    city: {
      label: 'City',
      value: '39010',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'Bolzano', value: '39100' },
        { label: 'Meltina', value: '39010' },
        { label: 'Appiano', value: '39057' }
      ],
      validation: {
        required: true
      }
    }
  };
  private objectProps;
  constructor() {

  }

  ngOnInit() {
    this.dataObject = this.person;
    this.objectProps =
      Object.keys(this.dataObject || {})
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });
    console.log(JSON.stringify(this.objectProps));
  }


  ngOnDestroy() {

  }
}
