import { LightningElement } from 'lwc';

export default class TabPractice extends LightningElement {
      handleCancel(){
        this.template.querySelector('form').reset();
      }
}