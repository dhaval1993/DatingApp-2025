import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  protected members = signal<any>([]);
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (response) => this.members.set(response),
      error: (err) => console.log(err),
      complete: () => console.log('Comppleted the http request'),
    });
  }
}

