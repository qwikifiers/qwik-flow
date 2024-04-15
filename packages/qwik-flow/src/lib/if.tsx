import type { JSXNode } from '@builder.io/qwik';

/**
 * @public
 */
export type IfControl = (props: {
  condition: boolean;
  else?: () => JSXNode;
  children: () => JSXNode;
}) => JSXNode;

/**
 * @public
 */
export const If: IfControl = (props) => (
  <>{props.condition ? props.children() : props.else ? props.else() : null}</>
);
