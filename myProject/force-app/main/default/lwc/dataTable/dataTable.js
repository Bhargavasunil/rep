import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountData.getAccount';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
const COLUMNS =[
    {label:'Account Name',fieldName:'Name',type:'text'},
    {label:'Annual Revenue',fieldName:'AnnualRevenue',type:'Currency',cellAttributes:{
        class:{fieldName:'amountColor'},
        iconName:{fieldName:'iconName'},
        iconPosition:'right',
    }
},
    {label:'Industry',fieldName:'Industry',type:'Picklist',cellAttributes:{
        class:{fieldName:'industryColor'}
    }},
]
export default class DataTable extends LightningElement {
    tableData;
    columns=COLUMNS;
    //to get the data from the apex use @wire property
    @wire(getAccount)
    //recieving data in the function form
    dataHandler({data,error}){
         if(data){
            this.tableData = data.map(item=>{
                let amountColor = item.AnnualRevenue<50000 ? 'slds-text-color_error':'slds-text-color_success'
                let iconName=item.AnnualRevenue<500000 ? "utility:arrowdown":"utility:arrowup" 
                return {...item,"amountColor":amountColor,"iconName":iconName}
            });
            console.log(this.tableData);
         }
         else{
            console.error(error);
         }
    }
}