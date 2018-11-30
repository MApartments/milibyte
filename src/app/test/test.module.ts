import { MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  declarations: [TestComponent]
})
export class TestModule { }
