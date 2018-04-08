import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TodoStorage} from './services/todo-storage.service';
import { MatButtonModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	MatButtonModule,
	MatInputModule,
	MatCheckboxModule,
	BrowserAnimationsModule,
	MatIconModule
  ],
  providers: [TodoStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
