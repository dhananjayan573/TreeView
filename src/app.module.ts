import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { FlatDataBindingDirective } from './directives/flat-data-binding.directive';
import { HierarchyDataBindingDirective } from './directives/hierarchy-data-binding.directive';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    FlatDataBindingDirective,
    HierarchyDataBindingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
