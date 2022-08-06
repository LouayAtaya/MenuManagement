import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ContentHeaderService } from '../../../core/services/content-header.service';
import { TreeNode, TreeDragDropService, MessageService, MenuItem, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuFormComponent } from '../../components/menu-form/menu-form.component';
import { MenuItemData } from '../../../core/models/menu-item-data';
import { MenusManagementService } from '../../../core/services/menus-management.service';
import { cloneDeep } from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[DialogService,TreeDragDropService,MessageService,ConfirmationService]
})
export class HomeComponent implements OnInit {

  nodes:TreeNode<MenuItemData>[]=[]

  virtualNodes:TreeNode<MenuItemData>[]=[]

  contextMenuItems;

  selectedNode:TreeNode<MenuItemData>;

  menusUpdated:boolean;

  constructor(private contentHeaderService:ContentHeaderService,private menusManagementService:MenusManagementService,public dialogService: DialogService,private messageService: MessageService, private confirmationService: ConfirmationService) { }
  
  ngOnInit(): void {
    this.contentHeaderService.setMainHeaderTitle("الصفحة الرئيسية");

    this.contextMenuItems = [
      {label: 'عرض', icon: 'pi pi-search', command: (event) => this.EditeNode()},
      {label: 'تعديل', icon: 'pi pi-pencil', command: (event) => this.EditeNode()},
      {label: 'حذف', icon: 'pi pi-trash', command: (event) => this.deleteNode()},
    ];


    this.menusManagementService.menus$.subscribe(
      data=>{
        //copy in order not change before apply changes
        this.nodes= cloneDeep(data) //JSON.parse(JSON.stringify(data))

      }
    )
    
  }

  addNode(){
    
    const ref = this.dialogService.open(MenuFormComponent, {
      data: null,
      header: 'تفاصيل القائمة',
      width: '500px'
    });

    ref.onClose.subscribe((treeNode: TreeNode<MenuItemData>) => {
      if (treeNode) {
        this.messageService.add({severity:'success', summary: ' عنصر جديد', detail: 'تم إضافة عنصر جديد  بنجاح', life:2000});

        this.virtualNodes.push(treeNode)
      }
    });
  }

  EditeNode(){
    const ref = this.dialogService.open(MenuFormComponent, {
      data: this.selectedNode,
      header: 'تفاصيل القائمة',
      width: '500px'
    });

    ref.onClose.subscribe((treeNode: TreeNode<MenuItemData>) => {
      if (treeNode) {
        this.selectedNode.label=treeNode.label
        this.selectedNode.data=treeNode.data

        this.menusUpdated=true;
        this.messageService.add({severity:'success', summary: ' تعديل عنصر ', detail: 'تم تعديل العنصر بنجاح   ', life:2000});
      }
    });
  }


  deleteNode(){
    this.confirmationService.confirm({
      message: 'هل انت متاكد انك تريد حذف هذا العنصر؟',
      accept: () => {
        let index=-1;
        if(this.selectedNode){
          if(this.selectedNode.parent){
            index=this.selectedNode.parent.children.indexOf(this.selectedNode);
            this.selectedNode.parent.children.splice(index,1)
          }
          else{
            index=this.nodes.indexOf(this.selectedNode);
            this.nodes.splice(index,1)
          }

          this.menusUpdated=true;
          this.messageService.add({severity:'success', summary: '  حذف عنصر ', detail: ' تم الحذف  بنجاح   ', life:2000});

        }

      }
    });
  }

  onDrop(){
    this.menusUpdated=true;
  }
  
  saveChanges(){
    this.confirmationService.confirm({
      message: 'هل انت متاكد انك تريد حفظ التعديلات؟',
      accept: () => {
        this.menusManagementService.saveChanges(this.nodes);
        this.menusUpdated=false;
        this.messageService.add({severity:'success', summary: '   حفظ التعديلات ', detail: ' تم الحفظ  بنجاح   ', life:2000});
      }
    });
  }

}


