import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from 'src/model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city : string = 'nashik';

  weatherApiBaseUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';
  XRapidAPIHostHeaderName ='X-RapidAPI-Host';
  XRapidAPIHostHeaderValue = 'the-weather-api.p.rapidapi.com';
  XRapidAPIKeyHeaderName ='X-RapidAPI-Key';
  XRapidAPIKeyValue = 'b359b612b5msh1207f0bb20b4f49p1c1f23jsnd80a6ef2225b';

  constructor(private http: HttpClient) { }

  /*
  getWeatherData(cityName: string): Observable<Root>{
    return this.http.get<Root>(this.weatherApiBaseUrl,{
      headers: new HttpHeaders().set(this.XRapidAPIKeyHeaderName,this.XRapidAPIKeyValue)
      .set(this.XRapidAPIHostHeaderName,this.XRapidAPIHostHeaderValue),
      params: new HttpParams().set('q',cityName)
    });
  }*/

  getData(c_name: string): Observable<Root>{
    return this.http.get<Root>(this.weatherApiBaseUrl+'/'+c_name,
    {
      headers :new  HttpHeaders().set(this.XRapidAPIKeyHeaderName,this.XRapidAPIKeyValue)
      .set(this.XRapidAPIHostHeaderName,this.XRapidAPIHostHeaderValue)
      //params: new HttpParams().set('cityName',c_name)
    });
  }
}
