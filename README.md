ngx-translaze makes it safe and easy to develop multi lingual angular apps.<br/>

Implementation is made via components and interfaces, rather than json files.<br/>
The language text itself is defined by an interface, which enables the typescript compiler to automatically
provide us with intellisense and catch errors in our templates and classes.<br/>
such errors can be caused by modifying keys, moving keys, having to synchronize the
structure across multiple languages, and so on.<br/>

By using Angular's built-in tools, components and interfaces, we are being automatically provided with those benefits:
* error checking by the typescript compiler in our classes and templates, making it safe in case we use incorrect keys
* intellisense in our classes and templates
* it is easier to maintain language text in components rather than json files
* the bundle size is small since Angular's built-in tools are used
* language components are lazy loaded
<br/>

<sub>about.component.html</sub><br/>
![about.component.html](https://zohar1000.github.io/ngx-translaze/assets/images/intellisense-animated.gif)
<br/><br/>


Head over for the [official docs](https://zohar1000.github.io/ngx-translaze).
