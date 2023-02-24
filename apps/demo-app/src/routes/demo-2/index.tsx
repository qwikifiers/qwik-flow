import { component$ } from "@builder.io/qwik";
import { For } from "@qwikifiers/qwik-flow";
import { SubHeader } from "../../components/sub-header";

export type Person = {
  id: string
  name: string
  email: string
}

export const Card = component$((props: { data: Person }) => {
  return (
    <div class="w-full bg-white dark:bg-gray-800 pt-6 pb-6 flex flex-col items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
      <span class="font-bold">{props.data.name}</span>
      <span>{props.data.email}</span>
    </div>
  )
});

export default component$(() => {
  const characters: Array<Person> = [
    { id: '46373', name: 'Sheldon Cooper', email: 'sheldon.cooper@calthec.edu' },
    { id: '87324', name: 'Leonard Hofstader', email: 'leonard.hostader@calthec.edu' },
    { id: '84923', name: 'Howard Wolowitz', email: 'howard.wolozits@calthec.edu' },
    { id: '23954', name: 'Rajesh Kootrappali', email: 'rajesh.kootrappali@calthec.edu' }
  ];

  return (
    <div id="demo-2">
      <SubHeader />

      <h2 class="xl:text-3xl md:text-2xl text-xl text-gray-800 font-extrabold mb-5 pt-4">FOR Sample</h2>

      <div class="flex flex-col gap-2">
        <For each={characters}>
          {(person) => <Card key={person.id} data={person} />}
        </For>
      </div>
    </div>
  )
})
