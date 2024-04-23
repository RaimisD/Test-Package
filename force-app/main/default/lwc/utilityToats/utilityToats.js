import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UtilityToats extends LightningElement {
    showToastEvent(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success message!',
                variant: 'Success'
            })
        );
    }
    showSecondToastEvent(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'New Success message!',
                variant: 'Success'
            })
        );
    }
}