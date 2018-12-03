import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './layout/material/material.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './pipe';




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    ModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
