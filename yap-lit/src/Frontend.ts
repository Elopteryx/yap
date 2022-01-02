import { LitElement, html, css } from 'lit';

export class Frontend extends LitElement {

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-family: "Alfa Slab One", cursive;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      text-align: center;
      background-color: var(--yap-frontend-background-color);
    }

    main {
      flex-grow: 1;
      display: flex;
      width: 100%;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <yap-side-menu></yap-side-menu>
        <slot>
          <yap-name></yap-name>
        </slot>
      </main>
    `;
  }
}
