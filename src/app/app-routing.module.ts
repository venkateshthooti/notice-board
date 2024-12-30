import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostRoutingModule } from './post/post-routing.module';
import { PostModule } from './post/post.module';
import { IndexComponent } from './post/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
