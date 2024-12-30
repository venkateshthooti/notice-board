import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelPipe } from './camel.pipe';
import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { AppModule } from '../app.module';
import { IdformatPipe } from './pipes/idformat.pipe';

  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, CamelPipe,CamelCasePipe, IdformatPipe],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ]
})
export class PostModule { }