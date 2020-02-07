import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() selectedRow;
  @Input() allTableRows;
  @Output() goBackToTable = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeDetail() {
    this.goBackToTable.emit();
  }

}
