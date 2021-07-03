ngx-translaze makes it safe and easy to develop multi lingual angular apps.<br/><br/>

Implementation is made via components and interfaces, rather than json files.<br/>
The language text itself is defined by an interface, which enables the typescript compiler to automatically
catch errors and provide intellisense as you develop.<br/><br/>

Having the language text defined by an interface protects us from making errors when we refer to it from our templates
and components.<br/>
such errors can be caused by modifying keys, moving keys, having to synchronize the
structure across multiple languages, and so on.<br/>
It is safe and reliable approach since changes are made to the code throughout the life of the app and it is hard
to avoid human mistakes.<br/>
ngx-translaze is designed to protect us from such errors.
<br/><br/>

By using Angular's built-in tools, components and interfaces, we are being automatically provided with those benefits:
* error checking by the typescript compiler in our classes and templates, making it safe in case we use incorrect keys
* intellisense in our classes and templates
* it is easier to maintain language text in components rather than json files
* the bundle size is small since Angular's built-in tools are used
* language components are lazy loaded
<br/><br/>

about.component.html
![about.component.html](https://zohar1000.github.io/ngx-translaze/assets/images/intellisense-animated.gif)
<br/><br/>


Head over for the [official docs](https://zohar1000.github.io/ngx-translaze).
