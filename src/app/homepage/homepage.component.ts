import { Component, OnInit } from '@angular/core';
import { getNYTService } from '../getNYT.service';
import * as _ from 'lodash';


 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  times : [];
  search: '';
  constructor(private data: getNYTService) {
    
  }

  ngOnInit() {
    this.data.getNYT().subscribe(
      data => {
        this.times = data.response.docs;
      }
    )
    
  }

  truncate(str) {
    return _.truncate(str, {
      length: 100,
      separator: ' '
    })
  }
  trunTitle(str) {
    return _.truncate(str, {
      length: 30,
      separator: ' '
    })
  }
}
