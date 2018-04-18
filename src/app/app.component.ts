import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ItemsService} from './items.service';
import {CommentsService} from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Diary app';
  comments = 'Comments with no sense';
  itemName = '';
  n;
  list = [];
  listName = [];
  listNameForId = [];
  locSt = localStorage;
  listComments = JSON;

  constructor(
    private itService: ItemsService,
    private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.sortLocalStorage();

    if (this.list.length !== 0) {
      this.n = parseInt(JSON.parse(this.list[0]).name) + 1;
    } else {
      this.n = 1;
    }

    for (let i = 0; i < this.list.length; i++) {
      this.listName.push(JSON.parse(this.list[i]).nameOfTask);
      this.listNameForId.push(JSON.parse(this.list[i]).name);
    }
  }

  getItems() {
    return this.listName;
  }

  sortLocalStorage() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.getItem(localStorage.key(i));
        this.list.push(value);
      }

      this.list.sort(function (a, b) {
        return parseInt(JSON.parse(a).name) - parseInt(JSON.parse(b).name);
      });
    }
    return this.list;
  }

  addItem() {
    const key = String(this.n) + 'item';
    this.n++;

    const lengthOfID = this.listNameForId;
    lengthOfID.push(key);
    console.log(lengthOfID);

    const obj = {
      nameOfTask: $('#inputID').val(),
      name: key,
      comments: []
    };

    localStorage.setItem(
      key,
      JSON.stringify(obj)
    );

    this.listName.push(this.itemName);
    this.itemName = '';
  }

  deleteItem(current) {
    $(current).closest('.list-item').remove();
    localStorage.removeItem($(current).closest('.list-item').attr('id'));
  }

  isActive(active) {
    return this.itService.isActive(active);
  }
}
