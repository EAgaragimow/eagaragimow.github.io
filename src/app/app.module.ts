import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CommentsComponent} from './comments/comments.component';


import {CommentsService} from './comments.service';
import {ItemsService} from './items.service';


@NgModule({
    declarations: [
        AppComponent,
        CommentsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [CommentsService, ItemsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
