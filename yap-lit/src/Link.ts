import { LitElement, html, css } from 'lit';

export class Link extends LitElement {

  static styles = css`
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    const label = this.getAttribute('label') ?? '';
    const path = this.getAttribute('path') ?? '';
      
    return html`
      <a href=${path}>
        ${label}<slot></slot>
      </a>
      `;
  }
}