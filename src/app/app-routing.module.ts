import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendslistComponent } from './friendslist/friendslist.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: FriendslistComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'view-blog', component: BlogViewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
