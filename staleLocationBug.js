In React Router Dom v6, using the `useLocation` hook inside a component that's *not* directly nested within a route may result in unexpected behavior or stale data.  This happens because `useLocation` only updates when the route changes within its nearest routing context. If your component is deeply nested or indirectly accessed, the location might not reflect the current URL. 

```javascript
// Incorrect usage
function MyComponent() {
  const location = useLocation();
  // ...location will be stale unless this component is directly inside a route
  return <div>...</div>;
}
```