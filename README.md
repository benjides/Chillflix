# Chillflix

<p align="center"><img width="300"src="/src/assets/logo.png?raw=true"></p>

> Netflix and Chill?

A Vue JS media browser to search for movies and shows using the the Trakt and TMDb APIs to retrieve the content.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Todo

- [ ] Adapt the page according to the search status
- [ ] Better search engine
- [ ] Full Mobile version
- [ ] Palette color picker for better visualization in Details Page
- [ ] Cast
- [ ] Episode guide
- [ ] Embeded Trailer
- [ ] Route Fallback
- [ ] SSR


## Contributing

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.


- If adding new feature:
  - Add accompanying test case.
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Dependencies

- [VueJs](https://vuejs.org/)
- [Trakt](https://trakt.tv/)
- [TMDb](https://www.themoviedb.org/)
- [Heroku](https://www.heroku.com/)




## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present
