import React, { createContext } from "react";

type PagePropsCtx = Record<string, any>;

export const PagePropsContext = createContext<PagePropsCtx>({});

type PagePropsProviderProps<P extends Object = Record<string, any>> = {
  children: React.ReactNode;
  pageProps: P;
};

export const PagePropsProvider: React.FC<PagePropsProviderProps> = ({
  children,
  pageProps,
}) => {
  return (
    <PagePropsContext.Provider value={pageProps}>
      {children}
    </PagePropsContext.Provider>
  );
};
