import React from "react";

function WithAuth<C extends React.ComponentType<any>>(WrappedComponent: C) {
  type Props = React.ComponentProps<C> & {
    isLoggedIn: boolean;
  };

  const ComponentWithAuth = (props: Props) => {
    const { isLoggedIn, ...rest } = props;

    if (!isLoggedIn) {
      return <h1>Silakan login terlebih dahulu!</h1>;
    }

    return React.createElement(WrappedComponent, rest);
  };

  return ComponentWithAuth;
}

export default WithAuth;
