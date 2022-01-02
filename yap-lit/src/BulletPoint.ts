import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class BulletPoint extends LitElement {

    @property({type: String})
    label: string;

    @property({type: String})
    filter: string;

    constructor() {
        super();
        this.label = this.getAttribute('label') ?? '';
        this.filter = this.getAttribute('filter') ?? '';
    }

    isHidden() {
        return !this.label.toLowerCase().includes(this.filter);
    }

    render() { 
        return html`
            <li ?hidden="${this.isHidden()}">${this.label}</li>
            `;
    }
}