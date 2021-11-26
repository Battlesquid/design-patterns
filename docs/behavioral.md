---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Behavioral

---
# Behavioral - Observer

## Brief Overview

The observer is a behavioral design pattern that allows objects of a similar nature to watch for changes in a given object. 

To give an example, consider a scenario where a customer is waiting for a product to be in stock. The customer could check the store every 5 minutes for the product, but they would waste a lot of time waiting. In that span of time, they could be doing something else. What would make sense is for the store to notify the customer when the product is in stock. By doing this, the customer can do other things, and then when the store alerts the customer, they know that the product is in stock. In this scenario, the customer is the Observer and the store is the Subject (of interest to the Observer).

## Implementation

For my simulation, I wanted to include regions of the map that would be dangerous for balls to be in. The idea was that if the ball was caught in "danger zones" after a certain period of time, it would become dormant. Balls caught in a danger zone while dormant would die, and would be unsubscribed from the Subject.

At a glance, the Observer pattern for the current system looks like the following.
![Observer_Partial_Impl](/diagrams/observer_impl_partial.png)

Adding this on top of the existing system, we get something that looks like this.
![Observer_Partial_Impl](/diagrams/observer_impl_full.png)


## Live Demo

<div style="width: 100%; height:400px">
    <canvas class="canvas"></canvas>
</div>
<script src="dist/behavioral.js" defer></script>