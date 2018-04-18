import {Injectable} from '@angular/core';
import {CommentsService} from './comments.service';
import * as $ from 'jquery';

@Injectable()
export class ItemsService {
  public activeID: string;
  public currentCommentLength;

  constructor(private comService: CommentsService) {}

  public getCurrentId() {
    return this.activeID;
  }

  public isActive(active) {
    // We delete the "active" classes from all DOM-elements with the class "list-item"
    $('.list-item').removeClass('active');

    // We add class "active" to this element
    $(active).addClass('active');

    // We are clean up block with comments
    this.comService.cleanComments();

    // Get the id of this element
    this.activeID = $(active).attr('id');

    // Get the array "comments" of this element id
    let commLength = JSON.parse(localStorage.getItem(this.activeID)).comments;

    // Fill out the array of "comments"
    for (let i = 0; i < commLength.length; i++) {
      this.comService.getComments().push(JSON.parse(localStorage.getItem(this.activeID)).comments[i]);
    }

    // Number of task
    $('.title span').text('#' + parseInt(this.activeID));

    // Length of comments array
    this.currentCommentLength = $('.active .list-item-text .num-comments').text(commLength.length);
  }
}
