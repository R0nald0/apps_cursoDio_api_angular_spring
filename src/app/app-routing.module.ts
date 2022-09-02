import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInfoUserComponent } from './component/aboutUser/component-info-user/component-info-user.component';
import { ListUserComponent } from './component/aboutUser/list-user/list-user.component';
import { FiltersComponent } from './component/shared/filters/filters.component';

const routes: Routes = [
   {
    path:"",redirectTo:'index',pathMatch:'full'
  },
  {
    path:'index',component:FiltersComponent
  },
  {
    path:'index/detalhes/:id', component:ComponentInfoUserComponent
  },
  {
    path:'index/detalhes',   component:ComponentInfoUserComponent
  },
  {
    path:"**" ,component:FiltersComponent  // caso rota nao encontrada
  }
 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
