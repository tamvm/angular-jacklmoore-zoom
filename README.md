## Angular for jquery-zoom (jacklmoore/zoom)

### Usage

```haml
%span.zoom(jm-zoom="" jmp-options="{url: originalSrc, magnify: 2}")
  %img.img-large.large.controlled-display(ng-class="image.displayClasses" ng-click="largeImgClick()" ng-src="{{originalSrc || src}}")
```

### Options

```
jmp-options
jmp-callback
jmp-on-zoom-in
jmp-on-zoom-out
```
