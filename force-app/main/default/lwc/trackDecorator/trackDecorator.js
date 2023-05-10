import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track itemList = [];
    newItem;

    handleChange(event) {
        this.newItem = event.target.value;
    }

    handleClick() {
        this.itemList.push(this.newItem);
        console.log('item list:', JSON.stringify(this.itemList));
    }
}

// @track: It is used to make variable private but reactive. 
// Tracked properties are also called private reactive properties.
// Fields are reactive. If a field’s value changes, and the field is 
// used in a template or in a getter of a property that’s used in a template, 
// the component rerenders and displays the new value.

// When a field contains an object or an array, there’s a limit to the depth
// of changes that are tracked. To tell the framework to observe changes to the 
// properties of an object or to the elements of an array, decorate the field with @track.

// Note: we can't access @track properties from outside as they are private and only
// accessible within its component only. To use @track we have to import it first from lwc.
// Import @track decorator from lwc