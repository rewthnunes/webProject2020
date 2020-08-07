import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
// import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    HomeComponent,
    PageNotFoundComponent,
    RodapeComponent,
    ContatoComponent,
    SobreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
