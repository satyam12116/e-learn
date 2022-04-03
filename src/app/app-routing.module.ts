import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { VidComponent } from './vid/vid.component';



const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent},
  { path: 'home', component: HomeComponent},
  {path:'career',component:VidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
