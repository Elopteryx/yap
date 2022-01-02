import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { Frontend } from '../src/Frontend.js';
import '../src/yap-frontend.js';

describe('YapFrontend', () => {
  let element: Frontend;
  beforeEach(async () => {
    element = await fixture(html`<yap-frontend></yap-frontend>`);
  });

  it('renders a main', () => {
    const main = element.shadowRoot!.querySelector('main')!;
    expect(main).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
