import { newSpecPage } from '@stencil/core/testing';
import { ComposedComponent} from '../composed-component';

describe('composed-component', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [ComposedComponent],
            html: `<composed-component></composed-component>`,
        });
        expect(page.root).toEqualHtml(`
      <composed-component>
        <mock:shadow-root>
          <p>Composed Component</p>
          <test-component data-testid="example"></test-component>
        </mock:shadow-root>
      </composed-component>
    `);
    });
});
