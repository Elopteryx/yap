import { html } from 'lit';
import { Page } from './Page';

export class Education extends Page {

  render() {
    return html`
      <h2>Education</h2>
      <p>
        Budapest University of Technology and Economics
      </p>
      <p>  
        Bachelor's degree in Computer Engineering 
      </p>
    `;
  }
}