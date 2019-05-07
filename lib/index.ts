import { BaseClass } from '@writetome51/base-class';
import { getRoundedUp } from '@writetome51/get-rounded-up-down';


/********************
 Intended to help a separate Paginator class paginate data.
 Specifically, this class contains the properties `itemsPerPage` and `totalPages`, which will
 be used by other classes, like the Paginator.
 *******************/


export class PaginationPageInfo extends BaseClass {


	constructor(
		private __dataSource: {

			// dataTotal: number of items in entire dataset.
			// This must stay accurate after any actions that change the total, such as searches.

			dataTotal: number;
		},

		// Stores and paginates a batch (array) of data, which it assumes is the entire dataset.
		// We need this for its property 'itemsPerPage'.

		private __batchPaginator: { itemsPerPage: number }
	) {
		super();
	}


	set itemsPerPage(value) {
		this.__batchPaginator.itemsPerPage = value; // validates value.
	}


	get itemsPerPage(): number {
		this._errorIfPropertyHasNoValue('__batchPaginator.itemsPerPage', 'itemsPerPage');
		return this.__batchPaginator.itemsPerPage;
	}


	get totalPages(): number {
		return getRoundedUp(this.__dataSource.dataTotal / this.itemsPerPage);
	}


}
