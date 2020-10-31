# Ngx File Icons

An angular library to display file icons according to their extension based on [file-icon-vectors](https://github.com/dmhendricks/file-icon-vectors/).

## Installation

Using `npm`:

```sh
$ npm install --save ngx-file-icons
```

## Usage

1. Add `FileIconsModule` to `imports` in `AppModule`:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// NGX File Icons
import { FileIconsModule } from "ngx-file-icons";

// Components
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FileIconsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Add `file-icon` to `app.component.html`:

```html
<file-icon [set]="cla" [type]="pdf" [size]="xl"></file-icon>
```

3. Define attributes in `app.component.ts`:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  cla = "classic";
  pdf = "pdf";
  xl = "xl";
}
```
