# YAML i18n loader for Webpack

Loads YAML files into JavaScript as precompiled functions using
[yaml-to-messageformat] and [messageformat].

With the default options, will load [Rails i18n] YAML files, but can be
configured for other contents as well. E.g. for YAML with contents already in
ICU MessageFormat, use with options `{ pluralVariable: null, replacements: [] }`.

By default, variables of the form `%{foo}` and `%b` will be detected in the
input strings, and an object with keys matching the pluralisation classes of the
current language (set by having a parent key such as `en` or `fi`) will be
handled as a proper plural.

## Installation

```sh
npm install messageformat-yaml-loader
```
or
```sh
yarn add messageformat-yaml-loader
```


## Usage

For a working demo of the following, run `npm install` in the
[`example/`](./example/) directory, and then open `example/dist/index.html` in
a browser.


#### Webpack configuration

```js
{
  test: [/\.yaml$/, /\.yml$/],
  loader: require.resolve('messageformat-yaml-loader'),
  options: {
    biDiSupport: false,
    defaultLocale: 'en',
    includeLocales: null,
    pluralVariable: 'count',
    verbose: false
  }
}
```

Some of the default option values are shown, but none is required. Most options
are passed on to [yaml-to-messageformat] (see there for their documentation);
`biDiSupport` enables bi-directional text support in [messageformat].


#### messages.yml

```yaml
en:
  errors:
    format: "%{attribute} %{message}"
    messages:
      confirmation: "doesn't match %{attribute}"
      accepted: "must be accepted"
      wrong_length:
        one: "is the wrong length (should be 1 character)"
        other: "is the wrong length (should be %{count} characters)"
      equal_to: "must be equal to %{count}"
```


#### example.js

```js
import messages from './messages.yml'
const { format, messages: errors } = messages.en.errors

errors.accepted()
// 'must be accepted'

format({
  attribute: 'Your message',
  message: errors.wrong_length({ count: 42 })
})
// 'Your message is the wrong length (should be 42 characters)'
```


[messageformat]: https://messageformat.github.io/
[Rails i18n]: http://guides.rubyonrails.org/i18n.html
[yaml-to-messageformat]: https://github.com/eemeli/yaml-to-messageformat
