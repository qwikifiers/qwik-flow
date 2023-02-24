import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SubHeader } from '../components/sub-header';

export default component$(() => {
  return (
    <div>
      <SubHeader />

      <div class="flex justify-around pt-6 pb-6">
        <a class="btn" href="/demo-1">If</a>
        <a class="btn" href="/demo-2">For</a>
        <a class="btn" href="/demo-3">Switch/Case</a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwikfiers',
  meta: [
    {
      name: 'description',
      content: 'Qwikfier demo app',
    },
  ],
};
