import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input('items') items: any;

  constructor() { }

  ngOnInit() {

  }

  onexpand(item:any) {
    if (item.expanded) {
      item.expanded = !item.expanded;
      return;
    } else {
      if (item.Children) {
        if (item.Children.length > 0) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
      }
    }
  }
}