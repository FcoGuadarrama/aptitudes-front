import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AptitudesService} from "../../services/aptitudes-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-autoeval',
  templateUrl: './autoeval.component.html',
  styleUrls: ['./autoeval.component.css']
})
export class AutoevalComponent implements OnInit {

  public rows: any = [];
  page_size: any;
  page_number: any;
  results: any;
  @Input() person: any;
  @Output() getResults = new EventEmitter<[]>();

  constructor(
    private _router: Router,
    private aptitudesService: AptitudesService,
    private http: HttpService,
  ) { }

  form = new FormGroup({});

  ngOnInit(): void {
    this.rows = this.aptitudesService.getAptitudes();

    for (let i = 1; i <= this.rows.length; i++){
      this.form.addControl(i.toString(), new FormControl('', Validators.required))
    }
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  print(){
    // @ts-ignore
    this.http.sendData(this.form.value, this.person).subscribe((res) => {
      this.getResults.emit(res);
    });
  }

}
