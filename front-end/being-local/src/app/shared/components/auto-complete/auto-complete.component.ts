import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Output() changed = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() suggestions: any;
  @Input() placeHolderText: string;

  constructor() {}
  keyword = 'name';
  ngOnInit(): void {}

  selectEvent(item) {
    this.selected.emit({ selectedItem: item });
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    if (val !== '') {
      this.changed.emit({ search: val });
    }
  }

  onFocused(e) {
    // do something when input is focused
  }
}
