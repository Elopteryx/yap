import { Frontend } from './Frontend';
import { SideMenu } from './SideMenu';
import { BulletPoint } from './BulletPoint';
import { Link } from './Link';
import { About } from './page/About';
import { Education } from './page/Education';
import { Experience } from './page/Experience';
import { Name } from './page/Name';
import { Skills } from './page/Skills';

customElements.define('yap-frontend', Frontend);
customElements.define('yap-side-menu', SideMenu);
customElements.define('yap-bullet-point', BulletPoint);
customElements.define('yap-link', Link);
customElements.define('yap-about', About);
customElements.define('yap-education', Education);
customElements.define('yap-experience', Experience);
customElements.define('yap-name', Name);
customElements.define('yap-skills', Skills);
