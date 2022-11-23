import { LightningElement } from 'lwc';

export default class Apps extends LightningElement {
    data1(){
        this.template.querySelector('.help0').innerText = 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus';
    }
}