import { component$, useSignal } from "@builder.io/qwik";
import { Case, Switch } from "@qwikifiers/qwik-flow";
import { SubHeader } from "../../components/sub-header";

export default component$(() => {
  const option = useSignal<string>('0');

  return (
    <div id="demo-1">
      <SubHeader />

      <h2 class="xl:text-3xl md:text-2xl text-xl text-gray-800 font-extrabold mb-5 pt-4">SWITCH/CASE</h2>

      <div class="flex flex-col">
        <label for="">Which transport do you prefer to trip around Europe?</label>
        <select name="transport"
          class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"
          onChange$={(ev) => option.value = ev.target.value}>
          <option value="0">Bus</option>
          <option value="1">Train</option>
          <option value="2">Airplane</option>
          <option value="3">Car</option>
        </select>
      </div>

        <Switch default={() => <div>Invalid option</div>}>
          <Case when={option.value === '0'}>
            {() => <p class="pt-4 font-normal text-xl text-gray-600">The cheapest one! Interesting.</p>}
          </Case>
          <Case when={option.value === '1'}>
            {() => <p class="pt-4 font-normal text-xl text-gray-600">Charming choice!</p>}
          </Case>
          <Case when={option.value === '2'}>
            {() => <p class="pt-4 font-normal text-xl text-gray-600">The fastest way! Let's go! :)</p>}
          </Case>
          <Case when={option.value === '3'}>
            {() => <p class="pt-4 font-normal text-xl text-gray-600">Nice choice! Get ready buddy!</p>}
          </Case>
        </Switch>
    </div>
  )
})
