import { html } from 'lit';
import { Page } from './Page';

export class About extends Page {

  render() {
    return html`
      <h2>About</h2>
      <p>
        Senior Software Engineer at EPAM Systems Switzerland
      </p>
    `;
  }
}