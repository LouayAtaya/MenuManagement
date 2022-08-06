import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MenuItemData } from '../../../core/models/menu-item-data';
import { MenusManagementService } from '../../../core/services/menus-management.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private menusManagementService: MenusManagementService) { }

  menus:TreeNode<MenuItemData>[]=[];

  ngOnInit( ): void {

    this.menusManagementService.menus$.subscribe(
      data=>{

        this.menus=data;
      }
    )
   
  }


}
