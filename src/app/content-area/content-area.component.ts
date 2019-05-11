import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  info: any = {};
  apiURL = 'http://api.openweathermap.org/data/2.5/forecast?q=modesto&units=imperial&APPID=38eb8632f463d37fb5539416d9bfbe09';
  cityName = '';
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {this.dataService.getUrl(this.apiURL).subscribe(
    x => {
     // console.log(x);
      this.info = x;
      console.log(this.info);
      this.cityName = this.info.name;
    }
  );
  }

}
