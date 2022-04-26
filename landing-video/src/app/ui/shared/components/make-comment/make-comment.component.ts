import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VideoService } from '../../api/video.service';

@Component({
  selector: 'app-make-comment',
  templateUrl: './make-comment.component.html',
  styleUrls: ['./make-comment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => MakeCommentComponent),
      multi: true,
    }
  ]
})
export class MakeCommentComponent implements OnInit, ControlValueAccessor {
    @Input()
    public editorValue: string = ''

    @Output() leaveComment = new EventEmitter()

    constructor(public videoService: VideoService) { }

    public ngOnInit(): void {
    }

    public onChange(comment: string): void {
    }

    public onTouch(): void {
    }

    public onClickSendButton() {
        console.log(this.editorValue)
        this.leaveComment.emit(this.editorValue)
        // this.videoService.update(1, 'new comment')
        this.editorValue = ''
    }

    public onChangeEditorValue(newValue: string): void {
        this.editorValue = newValue
        this.onChange(newValue)
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouch = fn
    }

    public writeValue(comment: string): void {
        if (comment === null) {
            console.log('comment === null')
            return
        }

        this.editorValue = comment
        console.log(this.editorValue)
    }



}
