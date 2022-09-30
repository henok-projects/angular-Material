import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const PERIODIC_DATA:PeriodicElement[]=[
  {position:1,name:"henok",weight:56,symbol:"HA"},
  {position:2,name:"henok",weight:1.0079,symbol:"HB"},
  {position:3,name:"henok",weight:2.0079,symbol:"HC"},
  {position:4,name:"henok",weight:6.0079,symbol:"HD"},
  {position:5,name:"henok",weight:6.0079,symbol:"HE"},
  {position:6,name:"henok",weight:1.0079,symbol:"HF"},
  {position:7,name:"henok",weight:1.0079,symbol:"HG"},
  {position:8,name:"henok",weight:1.0079,symbol:"HH"},
  {position:9,name:"henok",weight:1.0079,symbol:"HI"},
  {position:10,name:"henok",weight:1.0079,symbol:"HJ"},
  {position:11,name:"henok",weight:1.0079,symbol:"HK"},
  {position:1,name:"henok",weight:1.0079,symbol:"HL"},
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  displayedColumns:string[]=['position','name','weight','symbol'];  
  dataSource =PERIODIC_DATA;
}
