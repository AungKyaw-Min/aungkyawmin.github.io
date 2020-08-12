import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full'},
    { path: 'about', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'get-in-touch', component: GetInTouchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}