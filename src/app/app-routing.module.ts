import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './comunes/heroe/heroe.component';
import { HeaderComponent } from './comunes/header/header.component';

const routes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'heroes', component: HeaderComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path:'heroe/:nombre', component: HeroeComponent},
  {path:'**', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
