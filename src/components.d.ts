/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComposedComponent {
    }
    interface TestComponent {
        "dataTestid": string;
    }
}
declare global {
    interface HTMLComposedComponentElement extends Components.ComposedComponent, HTMLStencilElement {
    }
    var HTMLComposedComponentElement: {
        prototype: HTMLComposedComponentElement;
        new (): HTMLComposedComponentElement;
    };
    interface HTMLTestComponentElement extends Components.TestComponent, HTMLStencilElement {
    }
    var HTMLTestComponentElement: {
        prototype: HTMLTestComponentElement;
        new (): HTMLTestComponentElement;
    };
    interface HTMLElementTagNameMap {
        "composed-component": HTMLComposedComponentElement;
        "test-component": HTMLTestComponentElement;
    }
}
declare namespace LocalJSX {
    interface ComposedComponent {
    }
    interface TestComponent {
        "dataTestid": string;
    }
    interface IntrinsicElements {
        "composed-component": ComposedComponent;
        "test-component": TestComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "composed-component": LocalJSX.ComposedComponent & JSXBase.HTMLAttributes<HTMLComposedComponentElement>;
            "test-component": LocalJSX.TestComponent & JSXBase.HTMLAttributes<HTMLTestComponentElement>;
        }
    }
}
