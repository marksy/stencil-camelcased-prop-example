import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'composed-component',
    styleUrl: 'composed-component.css',
    shadow: true,
})
export class ComposedComponent {
    render() {
        return (
            <Host>
                <p>Composed Component</p>
                <test-component data-testid="example"></test-component>
            </Host>
        );
    }
}
