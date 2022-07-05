import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { PaginationComponent } from './pagination.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		PaginationComponent
	],
	providers: [],
	exports: [PaginationComponent]
})

export class PaginationModule { }
