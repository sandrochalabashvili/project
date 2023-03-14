import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { NotfoundComponent } from './view/notfound/notfound.component';

const routes: Routes = [
  {path:"",component:HomepageComponent,},
  {path:"about",component:AboutComponent,},
  {path:"404",component:NotfoundComponent,},
  {path:"**",pathMatch:"full",redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
