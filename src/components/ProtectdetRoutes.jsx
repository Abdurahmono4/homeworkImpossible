function ProtectdetRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}

export default ProtectdetRoutes;
