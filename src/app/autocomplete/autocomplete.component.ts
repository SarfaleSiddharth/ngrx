import { Component, forwardRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounce } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @Input() val: string;
  @Input() displayField: string;
  @Input() suggestions: Array<any>;
  @Output() filterEvent = new EventEmitter<string>();

  public search: string;
  public isDisplay;

  constructor() {
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.val;
  }
  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  ngOnInit() {
    this.isDisplay = false;
  }

  select(item) {
    this.search = item[this.displayField];
    this.isDisplay = false;
    this.value = this.search;
  }
  filter() {
    const searchObs = of(this.search);
    this.isDisplay = true;
    this.value = this.search;
    const result = searchObs.pipe(debounce(() => interval(1000)));
    result.subscribe((text) => {
      this.filterEvent.emit(text);
    });
  }
}
