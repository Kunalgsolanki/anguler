import {Component, OnInit, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HttpClient, HttpClientModule} from "@angular/common/http"


export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-weather-data-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,HttpClientModule],
  templateUrl: './weather-data-list.component.html',
  styleUrl: './weather-data-list.component.css'
})
export class WeatherDataListComponent implements OnInit {
   httpclient = inject(HttpClient);
 data:any=[]
 
 ngOnInit(): void {
 
   this.fetchData()
 }


 fetchData (){
   this.httpclient.get("https://localhost:7057/WeatherForecast").subscribe((data:any)=>{
     console.log(data)
     this.data=data;
   });
 }


 
}
