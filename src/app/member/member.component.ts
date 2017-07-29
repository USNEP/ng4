import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.params);
    //debugger;
    this.route.params.subscribe( params => console.log(params) );
    this.route.queryParams.subscribe( params => console.log(params) );

  }

}
