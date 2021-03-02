import { Component, OnInit } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';
// import { Policy } from './policy';
import { UniqueService } from './services/unique.service';
import { Observable, Subscribable, NEVER } from 'rxjs';

const CURRENT_USER: User = new User(1, '森井 將裕');
// const CURRENT_USER: User = new User(1, 'テスト 太郎');
const ANOTHER_USER: User = new User(2, '佐藤 考太');


// const COMMENTS: Comment[] = [
//   { name: '佐藤 考太' , message: 'おつでーす！'},
//   { name: '佐藤 考太' , message: '作業終わったー？？'},
//   { name: '森井 將裕' , message: 'おつでーす！'},
//   { name: '森井 將裕' , message: '終わってまーす'}
// ];

// const COMMENTS: Comment[] = [
//   new Comment(ANOTHER_USER, 'おつでーす！'),
//   new Comment(ANOTHER_USER, '作業終わったー？？'),
//   new Comment(CURRENT_USER, 'おつでーす！'),
//   new Comment(CURRENT_USER, '終わってまーす')
// ]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';

  // policies:  Policy[];
  // selectedComment:  Policy  = { id :  null , number:null, amount:  null};
  comments: Comment[];
  selectedComment:  Comment  = { id :  null, date: null, message:  null, user:  null };

  constructor(private uniqueService: UniqueService) { }

  ngOnInit() {
      // this.readComments();
    //   this.uniqueService.readComments().subscribe((comments:Comment[])=>{
    //   this.comments = comments;
    //   console.log(this.comments);
    // });
    this.uniqueService.readComments().subscribe(comments => this.comments = comments);
  }

  // readComments(): void{
  //     this.uniqueService.readComments().subscribe(comments => : this.comments = comments);
  // }

  createComment(form){
    this.uniqueService.createComment(form.value);
  }

  // updateComment(form){
  //     form.value.id = this.selectedComment.id;
  //     this.uniqueService.updateComment(form.value).subscribe((comment: Comment)=>{
  //       console.log("Policy updated" , comment);
  //     });
  // }

  // selectComment(comment: Comment){
  //   this.selectedComment = comment;
  // }

  // deleteComment(id){
  //   this.uniqueService.deleteComment(id).subscribe((comment: Comment)=>{
  //     console.log("Policy deleted, ", comment);
  //   });
  // }

  // addComment(comment: string): void {
  //   if(comment) {
  //     this.comments.push(new Comment(this.currentUser, comment));
  //     this.comment = '';
  //   }
  // }

  //addComment(comment: string): void {
  //  if(comment) {
  //    this.commentsRef.push(new Comment({ user: this.crrentUser, message: comment }));
  //    this.comment = '';
  //  }
  //}

}
