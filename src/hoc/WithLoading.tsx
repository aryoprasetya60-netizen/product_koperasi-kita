import React from "react";

function WithLoading<C extends React.ComponentType<any>>(WrappedComponent: C) {
  // kita ambil type props dari komponen yang kita punya
  type WrappedProps = React.ComponentPropsWithRef<C>;

  // kita akan tambahkan props baru berupa loading
  type PropsWithLoading = WrappedProps & {
    loading: boolean;
  };

  const ComponentWithLoading: React.FC<PropsWithLoading> = (props) => {
    const { loading, ...rest } = props;

    if (loading) {
      return <div className="p-4 text-blue-800 text-4xl">Loading ...</div>;
    }

    return React.createElement(WrappedComponent, rest as WrappedProps);
  };

  return ComponentWithLoading;
}

export default WithLoading;
