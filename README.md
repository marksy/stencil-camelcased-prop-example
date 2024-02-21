# README

This is a small repo to show an example of Stencil `4.12.3` showing the following type/build failure. 

When a composed component (a component that uses another component in the render function) uses a component that has a required prop that is camelCased (e.g., `@Prop() public dataTestid: string`), TypeScript expects the prop to be added to the component as camelCase.

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

However, TypeScript throws an error in the `ComposedComponent` saying:
```
Property '"dataTestid"' is missing in type
           '{ "data-testid": string; }' but required in type 'TestComponent'.
```

If I change the `ComposedComponent` render function to use `dataTestid` TypeScript doesn't show the error, but the HTML is rendered out as `<test-component datatestid="example`:
```typescript jsx
 render() {
    render(
      <Host>
        {this.name}
        <test-component dataTestid="example"></test-component>
      </Host>
    )
  }
```

I've also tried with non-data based prop names such as `@Prop() testId!: string` but the same thing happens.

I've also tried to use a custom attribute `@Prop({ attribute: 'test-id'}) testId!: string` but the same thing happens.

Discord message: https://discord.com/channels/520266681499779082/1170864699361996830/1170864699361996830

## How to reproduce

1. yarn install
2. yarn start (runs `stencil build --dev --watch --serve --port 2003`)

## Expect

- TypeScript should succeed as I'm using the required prop as kebab-case.

## Notes

- The script `yarn build` fails as above.
