// full-blog-view.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-full-blog-view',
  templateUrl: './full-blog-view.component.html',
  styleUrls: ['./full-blog-view.component.css'],
})
export class FullBlogViewComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService
      .getBlogById(blogId)
      .subscribe((blog) => (this.blog = blog));
  }
}
