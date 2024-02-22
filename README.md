# README

This is a small repo to show an example of Stencil `4.12.3` showing the following type/build failure. 

When a composed component (a component that uses another component in the render function) uses a component that has a required prop that is camelCased (e.g., `@Prop() public dataTestid: string`), the test fails expecting `data-testid` where it receives `datatestid`.

### For example

I have this simple TestComponent:
```typescript jsx
@Component({
    tag: 'test-component',
    styleUrl: 'test-component.css',
    shadow: true,
})
export class TestComponent {
  @Prop() public dataTestid!: string;

  render() {
    render(
      <Host>
        <div data-testid={this.dataTestid}>hi there!</div>
      </Host>
    )
  }
```

And I have this composed component using the TestComponent:
```typescript jsx
@Component({
    tag: 'composed-component',
    styleUrl: 'composed-component.css',
    shadow: true,
})
export class ComposedComponent {
  @Prop() public name!: string;

  render() {
    render(
      <Host>
        {this.name}
        <test-component data-testid="example"></test-component>
      </Host>
    )
  }
```

However, when I run the Stencil spec tests it fails saying it expected `data-testid` but received `datatestid`


Discord message: https://discord.com/channels/520266681499779082/1170864699361996830/1170864699361996830

## How to reproduce

1. yarn install
2. yarn test (runs `stencil test --spec --e2e`)

## Expect

- Test should succeed as I'm using the required prop as kebab-case.

## Notes

- The script `yarn test` fails as above.
