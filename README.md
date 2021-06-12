ngx-translaze makes it safe and easy to develop multi lingual angular apps.<br/><br/>

Implementation is with components and interfaces, rather than json files:
1. the language text will have an interface, one for all languages
2. we use components to hold the language text, a component for each language
3. each language component will have a variable, typed to the language interface, that will hold the language text
<br/><br/>

Now we can use those variables anywhere in the app and get those benefits:
* automatic error checking by the typescript compiler in our classes and templates, making it safe in case we use incorrect keys 
* intellisense in our classes and templates
* it is easier to maintain language text in components rather than json files
* the bundle size is small since Angular's built-in tools are used 
* language components are lazy loaded
<br/><br/>

Head over for the [official docs](https://zohar1000.github.io/ngx-translaze).
