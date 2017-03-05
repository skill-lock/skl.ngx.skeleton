# skl.ngx.skeleton
Angular 4 skeleton to kick start your SDK!

## Getting Started

### Installation

```shell
npm install @skl/ngx.skeleton --save
```

### Register module

```ts
import { SkeletonModule } from "@skl/ngx.skeleton";

@NgModule({
    imports: [SkeletonModule]
})
export class AppModule {

}
```

### Usage
```ts
import { SkeletonService } from "@skl/ngx.skeleton";

@Injectable()
constructor(
    private skeletonService: SkeletonService
) {
}

// get
skeletonService.get("http://xxx/:id", {
	id: "lobby"
});
```

#### Install Dependencies
The following process need to be executed in order to get started.

```shell
npm install
```


### Building the code

```shell
gulp build
```
In order to view all other tasks invoke `gulp` or check the gulp tasks directly.

### Running the tests

```shell
gulp test
```

### Development utils

#### Trigger gulp watch
Handles compiling of changes.
```shell
gulp watch
```


#### Running Continuous Tests
Spawns test runner and keep watching for changes.
```
gulp tdd
```

### Preparation for Release

```
gulp prepare-release --bump major|minor|patch|prerelease (default: patch) --version-suffix beta (default: rc - only applies to prerelease)
```