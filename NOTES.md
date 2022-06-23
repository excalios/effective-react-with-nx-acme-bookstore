# Notes

- [Terminology](#terminology)
- [Files](#files)
- [Categories of Libraries](#categories-of-libraries)
- [Collecction](#collection)
- [Enforcing Module Boundaries](#enforcing-module-boundaries)

## Terminology

### Workspace

A folder created using Nx that contains applications and libraries, as well
as scaffolding to help with building, linting, and testing.

### Project

An application or library within the workspace.

### Application

A package that uses multiple libraries to form a runnable program. An
application is usually either run in the browser or by Node.

### Library

A set of files that deal with related concerns. For example, a shared component
library.

## Files

### `project.json`

The `project.json` file is located at the root of every project in your
workspace. This is where the project specific metadata is defined as well as the
“targets”. A Nx target is literally a “task” that can be invoked on the project.

#### Target

Each target comes with a Nx Executor definition ex: `@nrwl/web:webpack`. An
executor is a program (in this case named webpack and located in the @nrwl/web
package) that is used to run the target.

The target comes also with options that are read by the executor to customize
the outcome accordingly. Depending on the executor implementation the target is
using, these options might vary.

The configurations which extends the options and potentially overrides them
with different values. This can be handy when building for different
environments. Configurations can be activate by passing the
`--configuration=<name>` flag to the command.

##### Invoking Target

To invoke a target:
`nx {target} {project}`

examples:

- `nx serve bookstore`
- `nx build bookstore`
- `nx lint bookstore`
- `nx test bookstore`

## Categories of Libraries

### Feature

Libraries that implement “smart” UI (e.g. is effectful, is connected to data
sources, handles routing, etc.) for specific business use cases.

### UI

Libraries that contain only presentational components. That is, components that
render purely from their props, and calls function handlers when interaction
occurs.

### Data Access

Libraries that contain the means for interacting with external data services;
external services are typically backend services.

### Utility

Libraries that contain common utilities that are shared by many projects.

## Collection

A collection in Nx contains a set of generators and executors. Generators can be
invoked using the generate command. Executors perform actions on your code,
including build, lint, and test and are invoked by issuing commands to Nx–such
as nx lint and nx test. Use nx list [collection] to list everything provided by
the collection–e.g. `nx list @nrwl/react.`

## Enforcing Module Boundaries

The .eslintrc.json file at the root of your workspace contain an entry for
@nrwl/nx/enforce-module-boundaries. The depConstraints section is the one you
will be spending most time fine-tuning. It is an array of constraints, each
consisting of sourceTag and onlyDependOnLibsWithTags properties. The default
configuration has a wildcard \* set as a value for both of them, meaning that any
project can import (depend on) any other project. The circular dependency chains
such as lib A -> lib B -> lib C -> lib A are also not allowed. The self circular
dependency (when lib imports from a named alias of itself), while not
recommended, can be overridden by setting the flag allowCircularSelfDependency
to true. The allow array is a whitelist listing the import definitions that
should be omitted from further checks. We will see how overrides work after we
define the depConstraints section. Finally, the flag
enforceBuildableLibDependency prevents us from importing a non-buildable library
into a buildable one.
