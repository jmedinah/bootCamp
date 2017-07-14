import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlejandroComponent } from './alejandro/alejandro.component';
import { RemoveItemDirective } from './remove-item.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { RemoveVersionPipe } from './remove-version.pipe';
import { ZoomInDirective } from './zoom-in.directive';


@NgModule({
  declarations: [
    AppComponent,
    AlejandroComponent,
    RemoveItemDirective,
    CapitalizePipe,
    RemoveVersionPipe,
    ZoomInDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
