import { useContext } from "react";
import { PagePropsContext } from "../../contexts";

export const usePageProps = <T extends Object = Record<string, any>>() => {
  const ctx = useContext(PagePropsContext);
  return ctx as T;
};
