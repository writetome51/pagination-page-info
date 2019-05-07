import { BaseClass } from '@writetome51/base-class';


/********************
 Intended to help a separate Paginator class paginate data.
 Specifically, this class contains the properties `itemsPerPage` and `totalPages`, which will
 be used by other classes, like the Paginator.
 *******************/
export declare class PaginationPageInfo extends BaseClass {

	itemsPerPage: number;
	readonly totalPages: number;

	private __dataSource;
	private __batchPaginator;


	constructor(
		__dataSource: {
			dataTotal: number;
		},
		__batchPaginator: {
			itemsPerPage: number;
		}
	);


}
