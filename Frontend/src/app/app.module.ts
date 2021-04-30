import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/users/register/register.component';
import { GenreComponent } from './components/genre/genre.component';
import { CreateGenreComponent } from './components/genre/create-genre/create-genre.component';
import { EditComponent } from './components/genre/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GenreComponent,
    CreateGenreComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
