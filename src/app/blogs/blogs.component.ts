// blogs.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  blogs: { expanded: boolean; hidden: boolean }[] = [
    { expanded: false, hidden: false },
    { expanded: false, hidden: false },
    { expanded: false, hidden: false },
  ];

  showBackButton: boolean = false;

  constructor(private router: Router) {}

  openBlog() {
    this.router.navigate(['/view-blog']);
  }

  handleLike(blog: any) {
    alert('Liked!');
    // Add your logic for handling the like button click here
  }

  toggleCard(blog: any) {
    blog.expanded = !blog.expanded;
    this.showBackButton = blog.expanded;
    this.hideOtherCards(blog);
  }

  showAllCards() {
    this.blogs.forEach((blog) => {
      blog.expanded = false;
      blog.hidden = false;
    });
    this.showBackButton = false;
  }

  hideOtherCards(selectedBlog: any) {
    this.blogs.forEach((blog) => {
      if (blog !== selectedBlog) {
        blog.hidden = true;
      }
    });
  }
}
