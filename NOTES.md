# Notes

- [Terminology](#terminology)

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
