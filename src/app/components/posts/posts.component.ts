import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service/post.service'
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  isEdit: boolean = false;
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

 

  onUpdatedPost(post: Post) {
    this.posts.forEach( (currPost, index) => {
      if(post.id === currPost.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  onDelete(post: Post) {
    if(confirm('Are you sure?')) {
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach( (currPost, index) => {
          if(post.id === currPost.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
