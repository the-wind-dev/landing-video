import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CommentsComponent),
      multi: true,
    }
  ]
})
export class CommentsComponent implements OnInit {
  // оптимально ли передаются данные, или это через Владивосток в Москву?
  // Input?
  @Input()
  public authorName: string = ''

  @Input()
  public text: string = ''

  @Input()
  public authorImg: string = ''

  constructor() { }

  ngOnInit(): void {

  }

}
