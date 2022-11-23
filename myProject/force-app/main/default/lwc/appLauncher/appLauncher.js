import { LightningElement } from 'lwc';
import customIcon from '@salesforce/resourceUrl/customIcon';
import graphIcon from '@salesforce/resourceUrl/graphIcon';
export default class AppLauncher extends LightningElement {
    get svgURL(){
        return customIcon;
    }
    get graphic(){
        return graphIcon;
    }
}