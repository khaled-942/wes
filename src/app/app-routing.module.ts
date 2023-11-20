import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProgramComponent } from './program/program.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Admin-page/login/login.component';
import { AdminHomeComponent } from './Admin-page/admin-home/admin-home.component';
AdminHomeComponent
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'speakers', loadChildren: () => import('./speakers/speakers.module').then((m) => m.SpeakersModule)},
  { path: 'archive', loadChildren: () => import('./archive/archive.module').then((m) => m.ArchiveModule)},
  { path: 'about', component: AboutComponent },
  { path: 'programme', component: ProgramComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: LoginComponent },
  { path: 'admin-home', component: AdminHomeComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
