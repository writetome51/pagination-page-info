# PaginationPageInfo

A TypeScript/Javascript class intended to help a separate Paginator class  
paginate data.  Specifically, this class contains the properties `itemsPerPage`  
and `totalPages`, which will be used by other classes, like the Paginator.


## Constructor
<details>
<summary>view constructor</summary>

```ts
constructor(

    dataSource: {

        dataTotal: number
            // Number of items in entire dataset, not the batch.
            // This must stay accurate after actions that change the total, 
            // such as searches.
    },
   	
    batchPaginator: { itemsPerPage: number }
        // Stores and paginates a batch (array) of data, which it assumes 
        // is the entire dataset.
) 
```
</details>


## Properties
<details>
<summary>view properties</summary>

```ts
itemsPerPage: number

totalPages: number // read-only

className: string // read-only
```
</details>


## Methods
<details>
<summary>view methods</summary>

The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.
    
protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Inheritance Chain

PaginationPageInfo<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm install @writetome51/pagination-page-info`

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
