import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importujemy CommonModule
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { WeahterData } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weatherForm: FormGroup;
  weatherData?: WeahterData;
  errorMessage = '';

  constructor(private fb: FormBuilder, private weatherService: WeatherService) {
    this.weatherForm = this.fb.group({
      city: ['']
    })
  }

  searchWeather() {
    if (this.weatherForm.invalid) return;

    const city = this.weatherForm.get('city')?.value;
    this.weatherService.getWeather(city).subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.errorMessage = 'Invalid City';
        console.log(err);
      }
    })

  }
}
