import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SideNavbarItemComponent } from './components/side-navbar-item/side-navbar-item.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageDropdownComponent } from './components/language-dropdown/language-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderResolver } from './core/resolvers/header.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbarComponent,
    SideNavbarItemComponent,
    LanguageDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    /////use factory
    ///long way
    ///constractor
    // HeaderResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
