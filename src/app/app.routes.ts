import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ReferenzenComponent } from './pages/referenzen/referenzen.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'referenzen', component: ReferenzenComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '' }
];
