import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Customer} from '../models/models';
import {DatabaseService} from '../services/database.service';
import {CustomersDatasource} from '../services/customers.datasource';
import {delay, startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: CustomersDatasource;
  customer: Customer;
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
  }

  ngOnInit() {
    this.paginator.pageSize = 5;
    this.paginator.pageIndex = 1;
    this.dataSource = new CustomersDatasource(this.databaseService);
    this.dataSource.loadCustomers(this.paginator.pageIndex, this.paginator.pageSize);
  }

  toggleView(selectedRow?: Customer) {
    selectedRow ? this.customer = selectedRow : this.customer = null;
  }

  ngAfterViewInit() {
    this.dataSource.counter$
      .pipe(
        startWith(null),
        delay(0),
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();

    this.paginator.page
      .pipe(
        startWith(null),
        delay(0),
        tap(() => this.dataSource.loadCustomers(this.paginator.pageIndex, this.paginator.pageSize))
      )
      .subscribe();
  }

}
