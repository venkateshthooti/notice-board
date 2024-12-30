import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];
  greeting : string = 'Good Day';
  timeSpent: number = 0; // Time in seconds
  timer: any;


  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });

    this.startTimer();
    this.setGreeting();

  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id: number) {
    if (confirm('are you sure')) {
      this.postService.delete(id).subscribe((res) => {
        this.posts = this.posts.filter((item) => item.id !== id);
        console.log('Post deleted successfully!');
      });
    } else {

      alert("deletion failed")
    }
  }

  // User Spent time
  startTimer(): void {
    this.timer = setInterval(() => {
      this.timeSpent++;
    }, 1000);
  }
  formatTime(): string {
    const minutes = Math.floor(this.timeSpent / 60).toString().padStart(2, '0');
    const seconds = (this.timeSpent % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  // ngOnDestroy(): void {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //   }
  // }


  // Greetings 
  setGreeting(): void {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 16) {
      this.greeting = 'Good Afternoon';
    } else if (currentHour >= 16 && currentHour < 20) {
      this.greeting = 'Good Evening';
    } else {
      this.greeting = 'Good Night';
    }
  }


}
