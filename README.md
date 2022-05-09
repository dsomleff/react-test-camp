#  Jest and React Testing Library

## Spec

All ideas, tasks and some solutions was created during the watching [Testing React with Jest and Testing Library]
(https://www.udemy.com/course/react-testing-library/) and [Advanced React Testing: Redux Saga and React Router](https://www.udemy.com/course/advanced-react-testing/?referralCode=317FB8E2C866D75D3B71) by [Bonnie Schulkin](https://bonnie.dev).

## Folders Content
> test-library-app
- basic examples of tests syntax
- functions and queries
- `eslint` and `prettier` setups
- `Mock Service Worker` to mimic request from the server
- Server Errors tests
- Context Testing (Wrapper). Can be applied to Route or Redux as well.
- Create a Custom Render with Default Wrapper.

### Q for a new Tests
- What to render?
  - what's the smallest component that encompasses the test?
- Do we need to pass any props?
- Do we need to wrap the component (Context Provider, Router, etc)?
  - Does provider get used? Is it already wrapped within the component?
- Where should test go?
  - Which file? New file needed?
- What to test?
  - What's the behaviour that needs testing?
- How to test?
  - What query and events?
- Do we need `await`?
  - Is there is anything async going on? 