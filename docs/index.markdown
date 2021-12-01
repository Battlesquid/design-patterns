---
layout: single
title: Design Patterns
toc: true
toc_sticky: true
toc_label: "Contents"
---
# Intro
The purpose of this repo is to demonstrate my knowledge of each category of design patterns (Creational, Structural, Behavioral). For each category, I explored one design pattern and applied them to build out a cell simulation-like program. 

The entire source for the project can be found [here](https://github.com/Battlesquid/design-patterns).
# Structural - Flyweight
## Brief Overview
The flyweight pattern is a useful structural pattern that addresses memory usage when dealing with a large amount of objects. 

The idea behind a flyweight is that we shouldn't have to repeat data that is consistent across an object, especially if said data takes up a lot of memory. Instead, we should take all the data that we expect to stay constant and move it to another object (this is the flyweight). After moving the intrinsic data, what's left is the extrinsic data of the object, or the data that we expect to be able to modify.

In a sense, we have now cached the heavier parts of the objects. Usually, there will be an additional helper class to keep track of the pool of flyweights.

## Implementation

For my program, I made use of flyweights to cache data that would get repeated. Essentially, I wanted to create "classes" for my entities; I wanted to be able to create slow, normal, and fast cells. However, I did not want to copy any intrinsic data over to each object. This included the name of the cell type, its color, and its size. This is where I used the flyweight pattern to identify the "type" of cell that I wanted based on the intrinsic data that I chose. Below is the implementation class diagram and the object view of the system so far.

## Diagrams
![Flyweight Implementation](diagrams/flyweight_impl_2.png)

![Flyweight Object View](diagrams/flyweight_obj_view.png)

One thing to note is how we don't have two separate types for `normalCell`. We have one `normalCell` type and every Cell that wants to be a normal cell uses the same instance of `normalCell`.

## Live Demo
<div style="width: 100%; height:400px">
    <canvas class="structural"></canvas>
</div>
<br>

# Behavioral - Observer
## Brief Overview

The observer is a behavioral design pattern that allows objects of a similar nature to watch for changes in a given object. 

To give an example, consider a scenario where a customer is waiting for a product to be in stock. The customer could check the store every 5 minutes for the product, but they would waste a lot of time waiting. In that span of time, they could be doing something else. What would make sense is for the store to notify the customer when the product is in stock. By doing this, the customer can do other things, and then when the store alerts the customer, they know that the product is in stock. In this scenario, the customer is the Observer and the store is the Subject (of interest to the Observer).

## Implementation

For my simulation, I wanted to include regions of the map that would be dangerous for cells to be in. The idea was that if the cell was caught in "danger zones" after a certain period of time, it would become dormant. Cells caught in a danger zone while dormant would die, and would be unsubscribed from the Subject.

## Diagrams
![Observer_Partial_Impl](/diagrams/observer_impl_partial.png)


![Observer_Partial_Impl](/diagrams/observer_obj_view.png)

## Live Demo

<div style="width: 100%; height:400px">
    <canvas class="observer"></canvas>
</div>

<br>

# Factory Method
## Brief Overview
The Factory Method is used for many things, but is commonly used as a layer of abstraction for creating objects that are related in functionality. Consider two scenarios where the client interacts with a `Product`.

{% highlight typescript %}
class App {
    static readonly MAX_PRODUCTS = 100;
    public init() {
        for(let i = 0; i < MAX_PRODUCTS; i++) {
            const product = new Product()
            App.Database.save(product)
        }
    }
}
{% endhighlight %}

{% highlight typescript %}
class App {
    static readonly MAX_PRODUCTS = 100;
    private productFactory = new ProductFactory()
    public init() {
        for(let i = 0; i < MAX_PRODUCTS; i++) {
            const product = productFactory.createProduct()
            App.Database.save(product)
        }
    }
}
{% endhighlight %}

The first one is fine if we absolutely expect not to change how `Product`s work. However, the problem is that if we want to subclass `Product` with something like `LargeProduct`, we have to change all of instantiation calls that use `Product` to `LargeProduct`.

The second snippet includes a factory that handles creating the object. The factory is in charge of creating `Product` objects. If we wish to subclass `Product` with `LargeProduct`, we would subclass the `ProductFactory` into something like `LargeProductFactory`. We would then redefine how the `createProduct` method should behave to create a `LargeProduct`, and the end result is still a `Product`.

{% highlight typescript %}
// the base product factory, all product factories extend this
abstract class BaseProductFactory {
    abstract createProduct(): void
}

// the base factory, returns a regular product
class ProductFactory extends BaseProductFactory {
    public createProduct() {
        return new Product()
    }
}

class LargeProductFactory extends BaseProductFactory {
    public createProduct() {
        // some other operations
        return new LargeProduct()
    }
}
{% endhighlight %}

Now we can simply change the factory being used, and all of our existing code will remain the same.

{% highlight typescript %}
class App {
    static readonly MAX_PRODUCTS = 100;
    // changed
    private productFactory = new LargeProductFactory() 
    public init() {
        for(let i = 0; i < MAX_PRODUCTS; i++) {
            // stays the same! cool!
            const product = productFactory.createProduct()
            App.Database.save(product)
        }
    }
}
{% endhighlight %}

## Implementation

I realized that from the previous iteration, the cells would die fairly quickly, so I decided to add powerups to the map so that they could last a little longer. To do this, I created a `PowerupFactory` and defined a method that would create `Powerup` objects. Cells could take consume these powerups and the powerup would be applied to the cell and moved to a different location on the map.

I then decided to create a new category of powerups that could not be consumable, but would be activated and applied to cells that entered its proximity.
## Diagrams
![Factory Partial Impl](/diagrams/factory_impl_partial.png)

![Factory Object View](/diagrams/factory_obj_view.png)

## Live Demo
<div style="width: 100%; height:400px">
    <canvas class="factory"></canvas>
</div>
<br>
{% include_relative includes/structural.html %}
{% include_relative includes/behavioral.html %}
{% include_relative includes/creational.html %}


# Concluding Remarks
I learned a lot by researching and implementing different design patterns. There are two things I think I should note as I conclude:

1) Design Patterns are very good to use.

2) Forcibly using design patterns is a very bad idea.

Using these patterns allowed me to see how they can make what would be an otherwise messy solution into a clean solution. They can be implemented into nearly any language, which is great because you don't have to worry about missing features across languages. 

**However**, design patterns should only be used when they make sense to use them. Although I was able to combine all three design patterns into one project, there are much better ways to implement certain features of the simulation program. When applying any design pattern, you have to be certain that you are using the right tool for the job, otherwise it will lead to more confusion later down the road.