import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MakeCommentComponent } from "./make-comment.component";

@NgModule({
    declarations: [
        MakeCommentComponent
    ],
    exports: [
        MakeCommentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})

export class MakeCommentModule {}
