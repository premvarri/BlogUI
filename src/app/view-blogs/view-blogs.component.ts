// view-blogs.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css'],
})
export class ViewBlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }

  goToFullBlog(blogId: number): void {
    this.router.navigate(['/full-blog', blogId]);
  }
}
