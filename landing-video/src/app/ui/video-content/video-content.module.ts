import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommentsModule } from '../shared/components/comments/comments.module';
import { MakeCommentModule } from '../shared/components/make-comment/make-comment.module';
import { VideoComponent } from './components/video/video.component'


@NgModule({
    declarations: [
        VideoComponent
    ],
    exports: [
        VideoComponent
    ],
    imports: [
        CommonModule,
        CommentsModule,
        HttpClientModule,
        MakeCommentModule,
    ]
})

export class VideoContentModule {}