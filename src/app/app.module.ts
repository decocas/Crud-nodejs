import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './proyecto/crud/crud.component';
import { MetodosService} from './proyecto/metodos.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   // MetodosService
  ],
  providers: [/*MetodosService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
