import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers:[PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Aaron';
    this.email = "aaron@gmail.com";
    this.address = {
      street: '12 main street',
      city: 'Bentonville',
      state: 'AR'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    // getPosts returns a subscribable that we need to subscribe to.
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(): void {
    console.log("Show hobbies");
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
