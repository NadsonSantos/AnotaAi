import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../model/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  types = {
    '1': { label: 'Paisagem', color: '#0034c5' },
    '2': { label: 'Flor', color: '#c50000' },
    '3': { label: 'pizza', color: '#b34b16' }
  };

  @Input() data: Item | null = null;
  @Output() remove: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  onDelete = () => this.remove.emit(true);
}
