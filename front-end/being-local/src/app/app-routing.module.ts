import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path: 'mission', component: MissionComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
