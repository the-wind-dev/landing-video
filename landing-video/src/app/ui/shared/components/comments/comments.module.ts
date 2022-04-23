import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentsComponent } from "./comments.component";

@NgModule({
    declarations: [
        CommentsComponent
    ],
    exports: [
        CommentsComponent
    ],
    imports: [
        CommonModule
    ]
})

export class CommentsModule {}
