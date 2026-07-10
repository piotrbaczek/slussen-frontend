import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing-module';
import { Features } from './features/features';

@NgModule({
  declarations: [
    Features
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
