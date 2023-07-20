import React from "react";
import { PagePropsProvider } from "../../contexts";

export const withPageProps = <P extends Object = Record<string, any>>(
  WrappedPage: React.ComponentType<P>
) => {
  const Component = (props: P) => {
    const _props = (props as any).pageProps ? (props as any).pageProps : props;

    return (
      <PagePropsProvider pageProps={_props}>
        <WrappedPage {...(props as any)} />
      </PagePropsProvider>
    );
  };

  return Component;
};
