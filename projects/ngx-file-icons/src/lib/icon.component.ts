import { Input, OnInit, OnChanges, Component } from '@angular/core';

// Catalog
import { catalog } from './catalog';

@Component({
  selector: 'file-icon',
  styleUrls: ['./icon.component.css'],
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit, OnChanges {
  public classes: string[];
  @Input() set: string;
  @Input() type: string;
  @Input() size: string;

  constructor() {
    this.classes = ['', '', ''];
  }

  ngOnInit() {
    this.chooseSet();
    this.chooseType();
    this.chooseSize();
  }

  ngOnChanges() {
    this.chooseSet();
    this.chooseType();
    this.chooseSize();
  }

  public chooseSet(): void {
    this.set = this.filterSet();
    this.classes[0] = this.transformSet();
  }

  public chooseType(): void {
    this.type = this.filterType();
    this.classes[1] = this.createClass(this.type, 'icon');
  }

  public chooseSize(): void {
    this.size = this.filterSize();
    this.classes[2] = this.createClass(this.size, 'size');
  }

  public filterSet(): string {
    return ['vivid', 'classic', 'square-o'].includes(this.set) ? this.set : 'classic';
  }

  public filterType(): string {
    return catalog[this.set].includes(this.type) ? this.type : 'blank';
  }

  public filterSize(): string {
    return ['md', 'lg', 'xl'].includes(this.size) ? this.size : '';
  }

  public transformSet(): string {
    if (this.set === 'square-o') {
      return 'fiv-sqo';
    } else if (this.set === 'vivid') {
      return 'fiv-viv';
    } else {
      return 'fiv-cla';
    }
  }

  public createClass(value: string, prefix: string): string {
    if (prefix !== '' && value !== '') {
      return `fiv-${prefix}-${value}`;
    } else if (value !== '') {
      return `fiv-${value}`;
    } else {
      return '';
    }
  }
}
