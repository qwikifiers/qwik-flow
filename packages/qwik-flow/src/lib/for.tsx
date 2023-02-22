import type { JSXNode } from '@builder.io/qwik';

export type ForControl = <T, U extends JSXNode>(props: {
  each: T[] | undefined;
  fallback?: () => JSXNode;
  children: (item: T, index: number) => U;
}) => JSXNode;

/**
 * @public
 */
export const For: ForControl = (props) => {
  const { each, fallback, children } = props;

  // case where each is undefined, so could be loading
  if (each === undefined && fallback) {
    return fallback();
  }

  return (
    <>
      {!each || !Array.isArray(each) || each.length === 0
        ? null
        : each.map((item, i) => children(item, i))}
    </>
  );
};
