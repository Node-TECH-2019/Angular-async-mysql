import { Component, OnInit } from '@angular/core';
import { Read } from '../class/read';
import { UniqueService } from '../services/unique.service';
import { User } from '../class/user';

const CURRENT_USER: User = new User(2, '森井 將裕');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comments:  Read[];
  selectedRead:  Read  = { id :  null, date: null, message:  null, uid:  null, name:  null, initial: null };
  comment = '';
  currentUser = CURRENT_USER;

  constructor(private uniqueService: UniqueService) { }

  ngOnInit() {
    this.uniqueService.readComments().subscribe((comments: Read[])=>{
      this.comments = comments;
      // console.log(this.comments);
    })
  }

  createComment(comment) {
    let selectedRead = this.selectedRead;
    selectedRead.message = comment;
    selectedRead.initial=this.currentUser.initial;
    selectedRead.uid=this.currentUser.uid;
    selectedRead.name=this.currentUser.name;
    this.uniqueService.createComment(selectedRead);
    comment = "";
  }

  updateRead(form){
      form.value.id = this.selectedRead.id;
      this.uniqueService.updateRead(form.value).subscribe((read: Read)=>{
        console.log("Read updated" , read);
      });
  }

  selectRead(read: Read){
    this.selectedRead = read;
  }

  deleteRead(id){
    this.uniqueService.deleteRead(id).subscribe((read: Read)=>{
      console.log("Read deleted, ", read);
    });
  }
}
