import { css, html } from 'lit';
import { Page } from './Page';

export class Skills extends Page {

  static styles = css`
    :host {
      width: 70vw;
    }

    ul {
      text-align: left;
      font-size: calc(10px + 1vmin);
    }
  `;

  #handleChange() {
    this.requestUpdate();
}

  render() {
    const value = (this.shadowRoot?.querySelector('.filter') as HTMLInputElement)?.value ?? '';
    const isHidden = (label: string) => !label.toLowerCase().includes(value);
    return html`
      <h2>Skills</h2>
      <input type="text" class="filter" @input=${this.#handleChange} placeholder="Type to filter"/>
      <ul>
      <li>Backend Languages
          <ul>
            <yap-bullet-point label="Java" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Rust" filter=${value}></yap-bullet-point>
          </ul>
        </li>
        <li>Backend Frameworks
          <ul>
            <yap-bullet-point label="Spring Boot" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Actix" filter=${value}></yap-bullet-point>
          </ul>
        </li>
        <li>Frontend Languages and Tools
          <ul>
            <yap-bullet-point label="JavaScript" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="TypeScript" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="CSS" filter=${value}></yap-bullet-point>
          </ul>
        </li>
        <li>Frontend Frameworks
          <ul>
            <yap-bullet-point label="React" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Lit" filter=${value}></yap-bullet-point>
          </ul>
        </li>
        <li>Databases
          <ul>
            <yap-bullet-point label="PostgreSql" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Oracle" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Sql Server" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="ElasticSearch" filter=${value}></yap-bullet-point>
          </ul>
        </li>
        <li>DevOps
          <ul>
            <yap-bullet-point label="Ansible" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="Docker" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="GitHub Actions" filter=${value}></yap-bullet-point>
            <yap-bullet-point label="GitLab CI" filter=${value}></yap-bullet-point>
          </ul>
        </li>
    </ul>
    `;
  }
}