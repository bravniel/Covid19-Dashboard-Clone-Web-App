import { NgModule, Optional, SkipSelf } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';
// import { HeaderComponent } from './components/header/header.component';
// import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
// import { SideNavbarItemComponent } from './components/side-navbar-item/side-navbar-item.component';
// import { RouterModule } from '@angular/router';
import { GeneralService } from './services/general.service';
import { HeaderResolver } from './resolvers/header.resolver';



@NgModule({
  // declarations: [HeaderComponent, SideNavbarComponent, SideNavbarItemComponent],
  // imports: [ SharedModule,RouterModule],
  providers: [GeneralService,],
  // exports: [HeaderComponent, SideNavbarComponent, SideNavbarItemComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been imported into AppModule.');
    }
  }
}
