import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import * as $ from 'jquery';
import { ItemsService } from '../items.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comment = '';

    constructor(
        private commentsService: CommentsService,
        private itemService: ItemsService
    ) {}

    ngOnInit() {}

    getComments() {
        return this.commentsService.getComments();
    }

    setComment(e) {
        if ( e.ctrlKey && e.code === 'Enter' ) {
            this.commentsService.getComments().push(this.comment);

            let neededItem = JSON.parse(localStorage.getItem(this.itemService.getCurrentId()));

            if (this.itemService.getCurrentId() === null) {
                this.comment = '';
                return -1;
            } else {
                neededItem.comments.push(this.comment);
                localStorage.setItem(this.itemService.getCurrentId(), JSON.stringify(neededItem));
                this.comment = '';
                this.itemService.currentCommentLength = $('.active .list-item-text .num-comments').text(
                  JSON.parse(localStorage.getItem(this.itemService.activeID)).comments.length
                );
            }
        }
    }

}
