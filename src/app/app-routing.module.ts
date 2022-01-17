import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PageDisplayComponent } from './page-display/page-display.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'Header', component: HeaderComponent},
  { path:  'page-display', component: PageDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
