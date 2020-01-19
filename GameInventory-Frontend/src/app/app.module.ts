import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { XboxPageComponent } from './xbox-page/xbox-page.component';
import { Ps4PageComponent } from './ps4-page/ps4-page.component';
import { PcPageComponent } from './pc-page/pc-page.component';
import { NintendoPageComponent } from './nintendo-page/nintendo-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    XboxPageComponent,
    Ps4PageComponent,
    PcPageComponent,
    NintendoPageComponent,
    AddPageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    AddPageComponent,
    EditPageComponent,
    XboxPageComponent,
    Ps4PageComponent,
    PcPageComponent,
    NintendoPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
