import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { For } from './for';

export const NameList = component$((props: { data: string[] }) => {
  return(
    <ul>
      <For each={props.data}>
        {(name, key) => <li key={key}>{name}</li>}
      </For>
    </ul>
  )
});

test(`ForControlFlow`, async () => {
  const names = ['Eduardo', 'Keuller', 'Shairez'];

  const { screen, render } = await createDOM();

  await render(<NameList data={names} />);

  expect(screen.innerHTML).not.toBeNull;
  expect(screen.children[0].childNodes.length).toEqual(3);
});
