import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';

import { FiltersComponent } from './component/shared/filters/filters.component';
import { UserItemComponent } from './component/aboutUser/user-item/user-item.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { User } from './model/User';  
import { UserServiceService } from './component/shared/service/user-service.service';
import { ComponentInfoUserComponent } from './component/aboutUser/component-info-user/component-info-user.component';
import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './component/aboutUser/list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DiologComponent } from './component/shared/diolog/diolog.component';
import { UsuarioRepository } from './component/shared/usuarioRepository/Usuario.reposiory';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    FiltersComponent,
    UserItemComponent,
    ComponentInfoUserComponent,
    ListUserComponent,
    DiologComponent,

  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UserServiceService,UsuarioRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
