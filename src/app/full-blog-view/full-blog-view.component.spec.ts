import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBlogViewComponent } from './full-blog-view.component';

describe('FullBlogViewComponent', () => {
  let component: FullBlogViewComponent;
  let fixture: ComponentFixture<FullBlogViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullBlogViewComponent]
    });
    fixture = TestBed.createComponent(FullBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
