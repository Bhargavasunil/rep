import { LightningElement,track } from 'lwc';

export default class RenderedCallback extends LightningElement {
    @track properties;
    renderedCallback(){
        this.properties = 'set by renderedcallback';
        console.log('properties'+this.properties);
    }
    handleButtonClick(event){
        this.properties = 'set by button click'
    }
}