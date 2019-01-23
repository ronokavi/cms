import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '../interfaces/';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  _icons: Icon[];

  /* get getIcons() {
    return this._icons;
  } */

  @Input('icons')
  set icons(value: Icon[]) {
    if (value && value.length > 0) {
      this._icons = value;
    } else {
      this._icons = this.getDefaultIcons();
    }
  }

  constructor() { }

  ngOnInit() {

  }
  getDefaultIcons(): Icon[] {
    return [{
      src: 'assets/controls/dropdown.svg',
      type: 'dropdown',
      description: 'Dropdown menu',
    },
    {
      src: 'assets/controls/checkbox-group.svg',
      type: 'checkbox-group',
      description: 'Checkbox group',
    },
    {
      src: 'assets/controls/gallery.svg',
      type: 'gallery',
      description: 'Gallery of images',
    }, {
      src: 'assets/controls/radio-button.svg',
      type: 'radio',
      description: 'Radio button',
    }, {
      src: 'assets/controls/radio-group.svg',
      type: 'radio-group',
      description: 'Radio buttons group',
    }];
  }
}
