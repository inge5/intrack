import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntrackComponent, SafeHtmlPipe } from './intrack/intrack.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { SidebarComponent } from './intrack/sidebar/sidebar.component';
import { SubmenuComponent } from './intrack/submenu/submenu.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateContactoComponent,
    FooterComponent,
    HeaderComponent,
    IntrackComponent,
    SidebarContactComponent,
    SidebarComponent,
    SubmenuComponent,
    SafeHtmlPipe,
    SomosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
