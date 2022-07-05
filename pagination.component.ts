import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wpagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
    public pages: any = [1,2,3,4,5,6,7];
	constructor() {}
}
