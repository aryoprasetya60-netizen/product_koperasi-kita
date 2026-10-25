import type { ComponentType } from "react";

function withBorder<P extends object>(WrappedComponent: ComponentType<P>) {
  return function EnhancedComponent(props: P) {
    return (
      <div className="border-2 border-blue-500 p-4">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;
