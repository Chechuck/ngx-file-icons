import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  exports: [IconComponent],
  imports: [CommonModule]
})
export class FileIconsModule { }
