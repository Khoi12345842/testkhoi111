import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page/page1/page1.component';  // Import các component
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' }, // Đường dẫn mặc định
  { path: 'page1', component: Page1Component }, // Định nghĩa route cho Page1Component
  { path: 'page2', component: Page2Component }, // Định nghĩa route cho Page2Component
  { path: 'page3', component: Page3Component } // Định nghĩa route cho Page3Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
