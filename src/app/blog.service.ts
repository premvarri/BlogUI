// blog.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
    {
      heading: 'Blog 1',
      content: 'Content for Blog 1. This is just a preview.',
      publishedDate: '15 JUL 2024',
      author: 'John Doe',
      views: 100,
    },
    // Add more dummy blogs as needed
  ];

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    const blog = this.blogs.find((b, index) => index === id);
    return of(blog);
  }
}
