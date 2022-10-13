import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { IndexModule } from './pages/index/index.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortifolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
