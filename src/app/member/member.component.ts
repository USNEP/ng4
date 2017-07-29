import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute} from '@angular/router';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [DataService]
})
export class MemberComponent implements OnInit {

  constructor( private route: ActivatedRoute,private dtService: DataService) {}

  ngOnInit() {
    //console.log(this.params);
    //debugger;
    this.route.params.subscribe( params => console.log(params) );
    this.route.queryParams.subscribe( params => console.log(params) );
    console.log("*********************");
    console.log(this.dtService.getData());

  }

}
