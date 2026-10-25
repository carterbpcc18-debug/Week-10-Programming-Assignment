# Phase 1: The Pet Blueprint

### Journal Prompt

**What did you accomplish in this phase? In your own words, what is the difference between the `Pet` class itself and an “instance” of that class?**

In this phase, I created a `Pet` class with a constructor that assigns each pet a name and type. I also added a `describe()` method that returns a sentence describing the pet. I created two different pet instances and used `console.log()` to display their descriptions. I learned that a class is a blueprint that defines the properties and behavior of objects, while an instance is an individual object created from that blueprint. Each pet uses the same class but can have its own name and type.



# Phase 2: State and Static Interaction

### Journal Prompt

**Describe the process of connecting a class method to a button click in HTML. What parts felt intuitive, and what parts were confusing?**

In this phase, I added a hunger property to the Pet class and created a feed() method that decreases hunger by 10. I connected the method to an HTML button using addEventListener(). When the button is clicked, the method runs and the page updates the hunger value using textContent. It made sense that the button could trigger a method, but connecting the JavaScript to the correct HTML elements took careful attention to their IDs.