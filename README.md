# react-native-boilerplate

React-Native-boilerplate is a Universal React Native(RN.) boilerplate.


## Getting started

First, clone the project:

```bash
$ git clone https://github.com/mojomoth/react-native-boilerplate.git <project-name>
$ cd <project-name>
```

### Branches

Just in case you do not need some features, different branches are provided in this project.

| Branch | Description                                                    |
|-----------------------|-------------------------------------------------|
| react-native-plain  | Pure react native project                              |
| react-native-router | with in React-native-navigation             |

```bash
$ git checkout <branch>
```

Then, install the dependencies. It is recommended to use Yarn, (because it is blazing fast). You can still use npm as well.

```bash
$ yarn install # or npm install
```

## Directory structure

```
- android             # Android native source code & build
- ios                 # IOS native source code & build (XCode)
- src                 # Application source code (Atomic Design)
-- components         # Independent atomic components (atom, molecules)
-- constants          # Constant values
-- lib                # Library
-- pages              # Screen or Pages (part-of-page) (template, page)
-- system             # Data dependent components (organism)
-- utils              # Common utilities
```