import { LightningElement,api,track } from 'lwc';

export default class MyFirstPro extends LightningElement {
    @api name= 'Bhargava';
    @track jobTitle = 'Salesforce Developer';
}