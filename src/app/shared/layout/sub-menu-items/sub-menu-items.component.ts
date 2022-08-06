import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-sub-menu-items',
  templateUrl: './sub-menu-items.component.html',
  styleUrls: ['./sub-menu-items.component.css']
})
export class SubMenuItemsComponent implements OnInit {
  @Input() children:TreeNode[];

  constructor() { }

  ngOnInit(): void {

  }

}
