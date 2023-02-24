import { component$, useSignal } from "@builder.io/qwik";
import { If } from '@qwikifiers/qwik-flow';
import { SubHeader } from '../../components/sub-header';

export default component$(() => {
  const toogle = useSignal<boolean>(true);

  return (
    <div id="demo-1">
      <SubHeader />

      <h2 class="focus:outline-none xl:text-3xl md:text-2xl text-xl text-gray-800 font-extrabold mb-5 pt-4">IF Sample</h2>

      <If condition={toogle.value}>
        {() => <div class="xl:text-2xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Hello folks! <span class="text-cyan-600">qwifiers-flow</span> rocks!</div>}
      </If>

      <div class="flex justify-center">
        <button type="button" class="btn" onClick$={() => toogle.value = !toogle.value}>
          {toogle.value ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  )
})
