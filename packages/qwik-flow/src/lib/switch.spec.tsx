import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Switch, Case } from './switch';

export const ConditionalSteps = component$((props: { option: string }) => {
  return (
    <div>
      <Switch default={() => <span>Invalid option</span>}>
        <Case when={props.option === '1'}>
          {() => <p>selected 1</p>}
        </Case>
        <Case when={props.option === '2'}>
          {() => <p>selected 2</p>}
        </Case>
        <Case when={props.option === '3'}>
          {() => <p>selected 3</p>}
        </Case>
      </Switch>
    </div>
  );
});

test('SwitchControlFlow', async () => {
  const { screen, render } = await createDOM();

  await render(<ConditionalSteps option={'2'} />);

  expect(screen.innerHTML).not.toBeNull;
  expect(screen.children[0].childNodes.length).toEqual(1);
  expect(screen.children[0].children[0].innerHTML).toEqual('selected 2');
});

test('SwitchControlFlow - default condition', async () => {
  const { screen, render } = await createDOM();

  await render(<ConditionalSteps option={'4'} />);

  expect(screen.innerHTML).not.toBeNull;
  expect(screen.children[0].childNodes.length).toEqual(1);
  expect(screen.children[0].children[0].innerHTML).toEqual('Invalid option');
});
