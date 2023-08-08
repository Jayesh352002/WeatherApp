import { Component, OnInit } from '@angular/core';
import { Root } from 'src/model/weather.model';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  city:string='Pune';

  weatherData!:Root  ;

  cityName!:string ;
  temp!:any;
  min:any=10;
  max:any=10;
  humidity:any=20;
  wind:any=20;

  ngOnInit(): void {
      this.getWeatherData(this.city);
  }

  onSubmit()
  {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city:string)
  {
    this.weatherService.getData(city)
      .subscribe({
        next:(response)=>{
          console.log(response)
          this.cityName = city;
          this.temp = response.data.temp;
          this.min = (this.temp-6);
          this.max = (this.temp-(-7));
          this.humidity = response.data.humidity;
          this.wind = response.data.wind;

          console.warn(this.cityName);

        }
      });
  }
}
