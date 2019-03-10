import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CITIES } from '../mock-cities';
import { HttpClient} from '@angular/common/http';
import { DataWeatherI } from '../dataWeatherInterface';
import { DataWeatherC } from '../dataWeatherClass';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  weatherUrl = 'http://localhost:3000/';
  newWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  APIkey = '&APPID=4d16ef4a13803b7df5a3f55f23a0036d';
  cities = CITIES;
  w : DataWeatherC = new DataWeatherC();
  selectedCity: City;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getWeather(city: City) {
    this.http.get(this.newWeatherUrl + this.selectedCity.name + this.APIkey).subscribe((d:DataWeatherI) => this.w = d);
  }

  onSelect(city: City): void {
    this.selectedCity = city;
    this.getWeather(this.selectedCity);
  }
}
