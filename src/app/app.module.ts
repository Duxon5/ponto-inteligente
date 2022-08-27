import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  LoginModule, LoginRoutingModule, CadastroPjModule,
  CadastroPjRoutingModule, CadastroPfModule, CadastroPfRoutingModule
 } from './autenticacao';
import { AppRoutingModule } from './app-routing.module'

import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';


import { AdminModule, AdminRoutingModule } from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,
    
    AppRoutingModule // Deve ser o último import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
