import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private http = inject(HttpClient);
  getWeather(city: string) {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.weatherApiKey)

      return this.http.get(environment.weatherApiUrl, { params });
  }
}
