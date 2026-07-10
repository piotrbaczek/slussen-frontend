import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Features } from './features/features';

const routes: Routes = [
  {
    path: 'features',
    component: Features,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
