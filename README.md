
<p align="center">

<h1 align='center'>Qwik Control Flow Components</h1>

<div align='center'>
  Use semantic control flow components in your <a href='https://github.com/BuilderIO/qwik'>Qwik</a> app.
  <br><br>

  <a href='https://img.shields.io/npm/v/@qwikifiers/qwik-flow?label=npm%20version'>
    <img src='https://img.shields.io/npm/v/@qwikifiers/qwik-flow?label=npm%20version' alt='@qwikifiers/qwik-flow npm'>
  </a>
  <a href='https://opensource.org/licenses/MIT'>
    <img src='https://img.shields.io/badge/License-MIT-green.svg' alt='MIT'>
  </a>
  <a href='#contributors'>
    <img src='https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square' alt='All Contributors'>
  </a>

</div>
<br>

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [Code Of Conduct](#code-of-conduct)
- [Contributors](#contributors)
- [Related Links](#related-links)
- [License](#license)


## Installation

```console
npm install -D @qwikifers/qwik-flow
```

## Usage

`If` component.
```tsx
import { If } from '@qwikifers/qwik-flow';

const toogle = useSignal<boolean>(false);

<If condition={toogle.value}>
  {() => <Info message="Lorem ipsum dolores avec mi" />}
</If>
```

`For` component:
```tsx
import { For } from '@qwikifers/qwik-flow';

<For each={people.value} fallback={() => (<div>No data found</div>)}>
  {(item, key) => <Card key={key} data={item} />}
</For>
```
<br/>

`Switch`/`Case` components for more complex rendering logic.
```tsx
import { Switch, Case } from '@qwikifers/qwik-flow';

const option = useSignal<string>('1');

<Switch default={() => <div>Invalid option</div>}>
  <Case when={option.value === '1'}>
    {() => <p>selected: 1 - Car</p>}
  </Case>
  <Case when={option.value === '2'}>
    {() => <p>selected: 2 - Airplane</p>}
  </Case>
  <Case when={option.value === '3'}>
    {() => <p>selected: 3 - Train</p>}
  </Case>
</Switch>
```

## Contributing

Want to contribute? Yayy! 🎉

Please read and follow our [Contributing Guidelines](CONTRIBUTING.md) to learn what are the right steps to take before contributing your time, effort and code.

Thanks 🙏

<br/>

## Code Of Conduct

Be kind to each other and please read our [code of conduct](CODE_OF_CONDUCT.md).

<br/>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<br/>

## Related Links

- [qwik-flow Discord](https://discord.gg/PVWUUejrez)
- [Qwik Discord](https://qwik.builder.io/chat)
- [Qwik Docs](https://qwik.builder.io/)


## License

MIT
