import { LightningElement,track, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountData.getAccount';
const COLUMNS=[
    {label:'Name',fieldName:'Name',type:'text'},
    {label:'AnnualRevenue',fieldName:'AnnualRevenue'},
]
export default class ConnectedCallback extends LightningElement {
    columns=COLUMNS;
     @track isSpinner='';
     @track accountData=[];
     constructor(){
        super()
        this.isSpinner=false;
     }
     connectedCallback(){
        this.isSpinner=true;
     }
     @wire(getAccount)
     fetchAccounts({error,data}){
        this.isSpinner=false;
        if(data){
             this.accountData=data;
             this.error=undefined;
        }
        else if(error){
            this.error=error;
            this.accountData=[];
        }
     }
}