import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[DataService]
})
export class AppComponent implements OnInit  {
  data:any[] | undefined;
  constructor(private _dataService:DataService){

  }

  ngOnInit(){
this.data=this._dataService.getData();
  }
}
