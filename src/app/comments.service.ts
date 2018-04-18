import {Injectable} from '@angular/core';

@Injectable()
export class CommentsService {
    private commentsList = [];

    constructor() {
    }

    public getComments() {
        return this.commentsList;
    }

    public cleanComments() {
        return this.commentsList = [];
    }

}
