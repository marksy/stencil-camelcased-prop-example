import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'test-component',
    styleUrl: 'test-component.css',
    shadow: true,
})
export class TestComponent {
    @Prop() dataTestid!: string;

    render() {
        return (
            <Host>
                <p>Test Component</p>
                <div data-testid={this.dataTestid}>hi there!</div>
            </Host>
        );
    }
}
