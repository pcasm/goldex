import {Customer} from '../models/models';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {DatabaseService} from './database.service';
import {catchError} from 'rxjs/operators';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';

export class CustomersDatasource implements DataSource<Customer> {

  private customersSubject = new BehaviorSubject<Customer[]>([]);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

  constructor(private databaseService: DatabaseService) {

  }

  loadCustomers(pageIndex: number, pageSize: number) {


    this.databaseService.getCustomersList(pageIndex, pageSize).pipe(
      catchError(() => of([])),
    )
      .subscribe(res => {
        this.customersSubject.next(res);
        this.countSubject.next(1000);
      });

  }

  connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
    return this.customersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.customersSubject.complete();
    this.countSubject.complete();
  }
}
