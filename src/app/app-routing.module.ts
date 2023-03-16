import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { MenuComponent } from './view/menu/menu.component';
import { MenupageComponent } from './view/menupage/menupage.component';
import { NotfoundComponent } from './view/notfound/notfound.component';

const routes: Routes = [
  {path:"",component:HomepageComponent,},
  {path:"about",component:AboutComponent,},
  {path:"contact",component:ContactComponent},
  {path: 'menu/:id', component:MenupageComponent},
  {path:"menu",component:MenuComponent},
  {path:"404",component:NotfoundComponent,},
  {path:"**",pathMatch:"full",redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
