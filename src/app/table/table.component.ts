import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Row} from '../models/models';
import {DatabaseService} from '../services/database.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  selectedRow: Row;
  displayedColumns: string[] = [];
  reducedTableRows = [
    'id',
    'name',
    'family_name'
  ];
  allTableRows = [
    'id',
    'name',
    'family_name',
    'address',
    'gold_quantity',
    'regular_customer',
    'last_purchase'
  ];

  constructor(private databaseService: DatabaseService) {
    this.displayedColumns = this.reducedTableRows;
  }

  ngOnInit() {
    this.getCustomersList();
  }

  toggleView(row?: Row) {
    row ? this.selectedRow = row : this.selectedRow = null;
  }

  getCustomersList() {
    this.databaseService.getCustomersList()
      .subscribe((data: any) => {
          this.dataSource.data = data;
        }, error => {}
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
