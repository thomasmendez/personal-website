import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { AboutMeComponent } from './components/pages/home/about-me/about-me.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import { WorkComponent } from './components/pages/work/work.component';
import { SkillsToolsComponent } from './components/pages/skills-tools/skills-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TitleHeaderComponent,
    AboutMeComponent,
    ContactComponent,
    WorkComponent,
    SkillsToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
