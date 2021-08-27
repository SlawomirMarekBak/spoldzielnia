import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ApartmentComponent } from './../../pages/apartment/apartment.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tables/new', component: ApartmentComponent },
  { path: 'tables/:id/:mode', component: ApartmentComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
];
