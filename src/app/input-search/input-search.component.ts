import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  control: FormControl = new FormControl('');
  onFocus: boolean = false;

  @Output() value: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.value.emit(value));
  }
}
