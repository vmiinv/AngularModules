import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups: any[] = [];
  constructor(private service: GroupService) { }

  ngOnInit(): void {
    console.log(1);
    this.service.getGroups().subscribe(
      res => {
        this.groups = res;
        console.log(res);
      }
    );
  }

}
