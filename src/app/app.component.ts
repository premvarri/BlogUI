import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showTopBar: boolean = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });
  }
  checkCurrentRoute() {
    const currentRoute = this.router.url;

    // Set showTopBar based on the current route
    this.showTopBar = !['/login', '/signup'].includes(currentRoute);
  }
  constructor(private router: Router) {}
  title = 'project';
  navigateToNews() {
    this.router.navigate(['/news']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToBlogs() {
    this.router.navigate(['/blogs']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToList() {
    this.router.navigate(['/list']);
  }
}
