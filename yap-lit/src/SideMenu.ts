import { LitElement, html, css } from 'lit';

export class SideMenu extends LitElement {

  static styles = css`
    :host {
      background-color: orange;
      color: white;
      width: 30vw;
      height: 100vh;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      padding-bottom: 100px;
      justify-content: space-evenly;
    }

    img {
      border-radius: 50%;
      height: auto;
      width: 260px;
      height: 260px;
    }
  `;

  render() {
    return html`
      <section>
        <yap-link path="/">
          <img alt="Profile Photo" src="https://avatars.githubusercontent.com/u/3444128?v=4">
        </yap-link>
        <yap-link label="About" path="/about"></yap-link>
        <yap-link label="Experience" path="/experience"></yap-link>
        <yap-link label="Skills" path="/skills"></yap-link>
        <yap-link label="Education" path="/education"></yap-link>
      </section>
    `;
  }
}
