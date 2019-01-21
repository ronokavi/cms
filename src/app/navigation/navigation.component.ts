import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  key = 'categories';
  data: Array<Object> = [
    {
      name: 'Beverages',
      categories: [
        {
          name: 'Pepsi',
          categories: []
        },
        {
          name: 'CocaCola',
          categories: [
            {
              name: 'Coke Diet',
              categories: []
            },
            {
              name: 'Coke Zero',
              categories: []
            }
          ]
        }
      ]
    },
    {
      name: 'Footwear',
      categories: [
        {
          name: 'Sneakers',
          categories: []
        }
      ]
    }
  ];
  constructor(public dragulaService: DragulaService) {
    dragulaService.createGroup('NAVIGATION', {
      removeOnSpill: true
    });
  }

  ngOnInit() {

  }



}
