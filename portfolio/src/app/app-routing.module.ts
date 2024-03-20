import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "archive", component: ArchiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
