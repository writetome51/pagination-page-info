# PaginationPageInfo


## Constructor

```ts
constructor(

   private __dataSource: {
   	
        // dataTotal: number of items in entire dataset.
        // This must stay accurate after any actions that change the total, 
        // such as searches.
   
        dataTotal: number;
    }
) 
```

## Methods
<details>
<summary>view methods</summary>

```
setItemsPerPage(value: number): void

getItemsPerPage(): number

getTotalPages(): number
```
</details>




## Installation

`npm i @writetome51/pagination-page-info`

## Loading
```ts
// if using TypeScript:
import { PaginationPageInfo } from '@writetome51/pagination-page-info';
// if using ES5 JavaScript:
var PaginationPageInfo = 
    require('@writetome51/pagination-page-info').PaginationPageInfo;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
