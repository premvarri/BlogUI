import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendslistComponent } from './friendslist/friendslist.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { FullBlogViewComponent } from './full-blog-view/full-blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ProfileComponent,
    FriendslistComponent,
    BlogsComponent,
    BlogViewComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    ViewBlogsComponent,
    FullBlogViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
