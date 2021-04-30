# react-native-typed-storage [![Build Status](https://travis-ci.org/Kausta/react-native-typed-storage.svg?branch=master)](https://travis-ci.org/Kausta/react-native-typed-storage) [![npm version](https://badge.fury.io/js/react-native-typed-storage.svg)](https://badge.fury.io/js/react-native-typed-storage) [![Known Vulnerabilities](https://snyk.io/test/github/Kausta/react-native-typed-storage/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Kausta/react-native-typed-storage?targetFile=package.json) [![NpmLicense](https://img.shields.io/npm/l/react-native-typed-storage.svg)](./LICENSE) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
 
 [![NPM](https://nodei.co/npm/react-native-typed-storage.png)](https://nodei.co/npm/react-native-typed-storage/)
 
Typed Storage for React Native
- Small wrapper over Async Storage with automatic stringify, parsing
- Note that this library doesn't get you any type safety, all it does is store objects as string, and return the stored string as object
- Defaults to JSON for converting between objects and strings, however allows you to use your own converters

## :arrow_forward: How to Install

1. Run `npm i --save react-native-typed-storage` or `yarn add react-native-typed-storage` based on your preference
2. Import TypedStorage or createTypedStorage from react-native-typed-storage
3. WIP More Examples and Docs
 
## :arrow_up: How to Setup For Development

**Step 1:** `git clone` this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn`


## :arrow_forward: How to Build For Development

1. cd to the repo
2. Run `yarn build`

## Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

This project adheres to Standard in TypeScript through tslint-config-standard with custom prettier.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## Contributing
 
Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.
 
## License 
 
Copyright © 2018-2021 Caner Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this repository except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
or at [LICENSE](./LICENSE) file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
