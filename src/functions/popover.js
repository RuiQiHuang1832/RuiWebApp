/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import Popover from 'bootstrap/js/dist/popover';

export const popoverInstances = []; // Export the array for access in other files

export default function popover() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach((popoverTriggerEl) => {
        const delay = { show: 1000, hide: 100 }; // Set the desired delay values
        const popover = new Popover(popoverTriggerEl, {
            delay,
        });
        popoverInstances.push(popover); // Store the instance in the array
    });
}
