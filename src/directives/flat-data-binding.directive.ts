import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[FlatDataBinding]'
})
export class FlatDataBindingDirective {
 @Input()data:any[]=[];
 @Input()idField:string='';
 @Input()parentIdField:string='';

  constructor(private eleRef: ElementRef) {
    
  }

  ngOnChanges(changes:SimpleChanges){
    let idFieldChange=changes["idField"];
    let parentIdFieldChange=changes["parentIdField"];
    let dataChange=changes["data"];
    if(idFieldChange){
      this.idField=idFieldChange.currentValue;
      console.log(this.idField);
      
    }
    if(parentIdFieldChange){
      this.parentIdField=parentIdFieldChange.currentValue;
      console.log(this.parentIdField);
      
    }
    if(dataChange){
      this.data=dataChange.currentValue;
      console.log(this.data);
      
    }
  }



}
