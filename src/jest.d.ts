// jest.d.ts
import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      // Add any other jest-dom matchers you want to use
    }
  }
}
