import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { MenuIzquierdaComponent } from './menu-izquierda/menu-izquierda.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    MenuIzquierdaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
