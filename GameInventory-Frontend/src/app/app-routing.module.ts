import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { XboxPageComponent } from './xbox-page/xbox-page.component';
import { Ps4PageComponent } from './ps4-page/ps4-page.component';
import { PcPageComponent } from './pc-page/pc-page.component';
import { NintendoPageComponent } from './nintendo-page/nintendo-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'xboxpage', component: XboxPageComponent},
  { path: 'ps4page', component: Ps4PageComponent},
  { path: 'pcpage', component: PcPageComponent},
  { path: 'nintendopage', component: NintendoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
