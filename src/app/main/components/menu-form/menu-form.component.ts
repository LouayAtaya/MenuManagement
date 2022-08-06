import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TreeNode } from 'primeng/api';
import { MenuItemData } from 'src/app/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  treeNode:TreeNode<MenuItemData>={
    label:"",  
    data:{
      url:'',
      routerlink:''
    }
  }

  constructor(public dialogRif: DynamicDialogRef,public dialogConfig: DynamicDialogConfig) { }

  ngOnInit(): void {
    if(this.dialogConfig.data)
        Object.assign(this.treeNode,this.dialogConfig.data);
  }
  
  onSubmit(contactForm){
    this.treeNode.data.url.trim();
    this.treeNode.data.routerlink.trim();

    this.dialogRif.close(this.treeNode);
  }

}
