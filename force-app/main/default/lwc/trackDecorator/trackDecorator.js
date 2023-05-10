import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TrackDecorator extends LightningElement {
    @track itemList = [];
    newItem;

    handleChange(event) {
        this.newItem = event.target.value;
    }

    handleClick() {
        if (!this.newItem) {
            const event = new ShowToastEvent({
                title: 'Error:',
                message: 'Enter an item before adding it to the list.',
                variant: 'error',
            });            
            this.dispatchEvent(event);
        } else {
            this.itemList.push(this.newItem);
        }
    }

    refreshList() {
        this.itemList = [];
        this.newItem = '';
    }
}