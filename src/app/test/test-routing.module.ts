import { TestComponent } from './test.component';
import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    component: MainLayoutComponent,
    children: [
      { path: '', component: TestComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
