import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  items : any;

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.getValues().subscribe(
      x=> {this.items = x;
      console.log(x);}
    );
  }

 getValues(){
  return this.httpClient.get("http://localhost:5000/api/values");
}

}
