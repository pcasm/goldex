import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TableComponent } from './table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormatKeysPipe } from './pipes/format-keys.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormatKeysPipe,
    HeaderComponent,
    DetailComponent,
    YesOrNoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
