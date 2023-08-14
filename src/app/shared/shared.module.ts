import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardNavbarItemComponent } from './components/dashboard-navbar-item/dashboard-navbar-item.component';
import { PageSectionComponent } from './components/page-section/page-section.component';
import { SectionLinksDropdownComponent } from './components/section-links-dropdown/section-links-dropdown.component';
import { SectionLinksDropdownItemComponent } from './components/section-links-dropdown-item/section-links-dropdown-item.component';
import { CardComponent } from './components/card/card.component';
import { MoreOptionsButtonComponent } from './components/more-options-button/more-options-button.component';
import { TableComponent } from './components/table/table.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LegendComponent } from './components/legend/legend.component';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { SearchWithOptionsComponent } from './components/search-with-options/search-with-options.component';
import { KpiLinesComponent } from './components/kpi-lines/kpi-lines.component';

@NgModule({
  declarations: [
    DashboardNavbarComponent,
    DashboardNavbarItemComponent,
    PageSectionComponent,
    SectionLinksDropdownComponent,
    SectionLinksDropdownItemComponent,
    CardComponent,
    MoreOptionsButtonComponent,
    TableComponent,
    FiltersComponent,
    LegendComponent,
    PercentageBarComponent,
    SearchWithOptionsComponent,
    KpiLinesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    DashboardNavbarComponent,
    PageSectionComponent,
    CardComponent,
    FiltersComponent,
    TableComponent,
    LegendComponent,
    KpiLinesComponent,
  ],
})
export class SharedModule {}
