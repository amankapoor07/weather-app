import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData?:WeatherData
  cityName:string='Gwalior'
  constructor(private weatherService:WeatherService){

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName=''
  }

  onSubmit(){
this.getWeatherData(this.cityName)
this.cityName=''
  }

  getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData=response
        this.weatherData.main.temp=(this.weatherData.main.temp-32)*5/9
        this.weatherData.main.temp_min=Math.round((this.weatherData.main.temp_min-32)*5/9)
        this.weatherData.main.temp_max=Math.round((this.weatherData.main.temp_max-32)*5/9)
      }
    })
  }
}
