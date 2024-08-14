import { Component, OnInit } from '@angular/core';
import { HttpcallserviceService } from './httpcallservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Trying HTTP';

  constructor(private apiService: HttpcallserviceService) {}

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Request completed.');
      }
    });
  }
}
