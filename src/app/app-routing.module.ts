import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { WorkComponent } from './components/pages/work/work.component';
import { SkillsToolsComponent } from './components/pages/skills-tools/skills-tools.component';
import { SoftwareProjectsComponent } from './components/pages/software-projects/software-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'skills&tools', component: SkillsToolsComponent },
  { path: 'projects', redirectTo: 'projects/software', pathMatch: 'full' },
  { path: 'projects/software', component: SoftwareProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
