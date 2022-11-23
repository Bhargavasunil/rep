import { LightningElement,wire } from 'lwc';
import getData from '@salesforce/apex/AccountData.getAccount';
const COLUMNS =[
    {label:'Account Name',fieldName:'Name',type:'text'},
    {label:'LastModifiedBy',fieldName:'lastModifiedBy'},
    {label:'CreatedBy',fieldName:'createdBy'},
]
export default class Task extends LightningElement {
    tableData;
    records;
    columns=COLUMNS;
    //to get the data from the apex use @wire property
    @wire(getData)
    //recieving data in the function form
    dataHandler({data}){
        console.log(data);
        if(data){
        return this.tableData= data.map((ele) => ({
            ...ele,
             ...{'lastModifiedBy':ele.LastModifiedBy.Name}
        }))
    }
}
}