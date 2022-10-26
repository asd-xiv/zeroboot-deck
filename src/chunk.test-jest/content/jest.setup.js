import { matchers } from "@emotion/jest"
// Additional assertions
//
// - https://github.com/testing-library/jest-dom#custom-matchers
import "@testing-library/jest-dom"

// Additional assertions for @emotion styled components
//
// - https://github.com/emotion-js/emotion/tree/main/packages/jest#custom-matchers
expect.extend(matchers)

// Mock unimplemented JSDOM "window.matchMedia" method
//
// - https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
