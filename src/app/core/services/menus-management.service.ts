import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { MenuItemData } from '../models';

@Injectable()
export class MenusManagementService {
  
  menus$: BehaviorSubject<TreeNode<MenuItemData>[]>= new BehaviorSubject(this.getMenus());

  constructor() { 
    
  }

  //get data from localStorage
  getMenus(){
    let result=JSON.parse(localStorage.getItem("menus"));
    if(result!=null)
      return result;
    return []
  }

  saveChanges(menus:TreeNode<MenuItemData>[]){
    localStorage.setItem("menus",JSON.stringify(menus,this.replacerFunc()));
    this.menus$.next(menus);
  }

  //for json recursive
  private replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };


}
