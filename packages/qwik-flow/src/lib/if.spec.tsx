import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { If } from './if';

export const ConditionalMessage = component$((props: { active: boolean }) => {
  return(
    <div>
      <If condition={props.active}>
        {() => <div>Hello all!</div>}
      </If>
    </div>
  )
});

test(`IfControlFlow - no child`, async () => {
  const { screen, render } = await createDOM();

  await render(<ConditionalMessage active={false} />);

  expect(screen.innerHTML).not.toBeNull;
  expect(screen.children[0].childElementCount).toEqual(0);
});

test(`IfControlFlow - with child`, async () => {
  const { screen, render } = await createDOM();

  await render(<ConditionalMessage active={true} />);

  expect(screen.innerHTML).not.toBeNull;
  expect(screen.children[0].childElementCount).toEqual(1);
  expect(screen.children[0].children[0].innerHTML).toEqual("Hello all!");
});
