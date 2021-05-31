import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorBoxComponent } from './components/color-box/color-box.component';
import { ColorEditorComponent } from './components/color-editor/color-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent,
    ColorEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
