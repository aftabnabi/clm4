import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  displayedColumns = ['OrderDate', 'ShipName', 'ShipCountry'];
  filterString = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private orderService: OrderService) {
    
      this.dataSource = new MatTableDataSource<any>();
    
}

  ngOnInit() {
    // Fetch data from API and assign it to dataSource
    this.orderService.getOrders().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    }
  applyFilter(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    switch (keyCode) {
      case 8: // Backspace
        this.filterString = "Backspace";
        break;
      case 13: // Enter
        this.filterString = "Enter";
        break;
      default:
      // Do something else
    }
     
    this.dataSource.filter = this.filterString.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  sortData(column: string) {
    if (this.dataSource.sort && this.dataSource.sort.active === column) {
      const sortOrder = this.dataSource.sort.direction === 'asc' ? 1 : -1;
      this.dataSource.data.sort((a, b) => {
        return (a[column] < b[column] ? -1 : 1) * sortOrder;
      });
    } else {
      if (this.dataSource.sort) {
        this.dataSource.sort.active = column;
        this.dataSource.sort.direction = 'asc';
        this.dataSource.sort.sortChange.emit();
      }
    }
  }



}


