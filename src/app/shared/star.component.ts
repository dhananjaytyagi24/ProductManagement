import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges{
    @Input() rating : number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
                new EventEmitter();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating is ${this.rating}`);
    }
}
