import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MatTableDataSource} from "@angular/material/table";
import {Aspirante} from "../../../models/aspirante";
import {MatPaginator} from "@angular/material/paginator";
import {HttpService} from "../../../services/http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: MatTableDataSource<Aspirante> | any;
  displayedColumns: string[] = ['id', 'name', 'email', 'age',  'results', 'created_at'];
  results: Aspirante[] | any;
  apiUrl = environment.apiUrl;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  aspirantes: Aspirante | any;
  data: any;

  constructor(public http: HttpService) { }



  ngOnInit(): void {
    this.http.getAspirantes().pipe(first()).subscribe((data: Aspirante[]) => {
      this.dataSource = new MatTableDataSource<Aspirante>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
