import { newSpecPage } from '@stencil/core/testing';
import { TestComponent } from '../test-component';

describe('test-component', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [TestComponent],
            html: `<test-component data-testid="example"></test-component>`,
        });
        expect(page.root).toEqualHtml(`
      <test-component data-testid="example">
        <mock:shadow-root>
          <p>Test Component</p>
          <div data-testid="example">hi there!</div>
        </mock:shadow-root>
      </test-component>
    `);
    });
});
