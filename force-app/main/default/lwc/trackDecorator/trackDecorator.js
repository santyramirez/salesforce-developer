import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TrackDecorator extends LightningElement {
    @track value = '';
    inputList;

    createWarning(warning) {
        const evt = new ShowToastEvent(warning);
        this.dispatchEvent(evt);
    }

    handleChange(event) {
        this.value = event.target.value;
    }

    handleClick() {
        this.createWarning({
            title: 'Success',
            message: 'Added 1 item to the list',
            variant: 'success'
        });
    }


}