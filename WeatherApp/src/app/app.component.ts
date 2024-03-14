import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NavbarComponent}from "././navbar/navbar.component"
import {WeatherDataListComponent} from "././weather-data-list/weather-data-list.component" 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,WeatherDataListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'WeatherApp';
}
