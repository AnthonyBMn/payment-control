import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tercer-sem',
  templateUrl: './tercer-sem.component.html',
  styleUrls: ['./tercer-sem.component.css'],
})
export class TercerSemComponent implements OnInit {
  totalSales: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTotalSales();
  }

  getTotalSales() {
    return this.http
      .get('https://data-lab.midas-mx.com/dashboard/get-total', {
        params: { id_enterprise: 9 },
      })
      .subscribe((resp) => {
        this.totalSales = resp;
        console.log(this.totalSales);
      });
  }
}
