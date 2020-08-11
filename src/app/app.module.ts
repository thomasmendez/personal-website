import { BrowserModule, Title } from '@angular/platform-browser';
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
import { SoftwareProjectsComponent } from './components/pages/software-projects/software-projects.component';
import { VrArProjectsComponent } from './components/pages/vr-ar-projects/vr-ar-projects.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TitleHeaderComponent,
    AboutMeComponent,
    ContactComponent,
    WorkComponent,
    SkillsToolsComponent,
    SoftwareProjectsComponent,
    VrArProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
