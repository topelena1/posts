import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostServiceService } from '../post-service.service';
import { FilterPipe } from '../pipe';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Post[];
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }
}
