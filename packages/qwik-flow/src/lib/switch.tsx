import type { JSXNode } from '@builder.io/qwik';

/**
 * @public
 */
export type CaseControl = (props: {
  when: boolean,
  children: () => JSXNode
}) => JSXNode;

export const Case: CaseControl = () => <></>;

export type SwitchControl = (props: {
   default?: () => JSXNode,
   children: JSXNode[]
}) => JSXNode;

/**
 * @public
 */
export const Switch: SwitchControl = (props) => {
  for (const caze of props.children) {
    if (caze.props.when) {
      return caze.props.children();
    }
  }
  return props.default ? props.default() : null;
};

