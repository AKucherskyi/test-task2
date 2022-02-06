import { CustomPipe } from './custom.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CustomPipe],
  imports: [CommonModule],
  exports: [CommonModule, MatTableModule, MatCardModule, MatIconModule, MatButtonModule, CustomPipe],
})
export class SharedModule {}
