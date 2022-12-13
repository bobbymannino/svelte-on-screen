# **Svelte On Screen**

## **Description**

An element for controlling wether an element is in the viewport using intersection observer that's:

-   **TypeScript First**
-   **Customizable With Props**
-   **Easy To Use**

---

## **Demo**

https://user-images.githubusercontent.com/71903402/207066566-c870818c-f4e5-4e1d-b67d-4ec82a481bf9.mov

[Demo Site](https://bobbymannino.vercel.app/svelte-on-screen)

---

## **Installation**

```
npm install --save-dev @bobbymannino/svelte-on-screen
```

---

## **Usage**

```html
<!-- +page.svelte -->

<script lang="ts">
	import { OnScreen } from "@bobbymannino/svelte-on-screen";

	let showing: boolean;
</script>

<OnScreen bind:showing>
	<div class:animate="{showing}">
		<h1>Some Title</h1>
		<p>Some more words...</p>
	</div>
</OnScreen>
```

---

## **Configuration**

```html
<!-- +page.svelte -->

<OnScreen bind:showing threshold="{0.5}" rootMargin="100px">
	<div class:animate="{showing}">
		<h1>Some Title</h1>
		<p>Some more words...</p>
	</div>
</OnScreen>
```

| Property Name | Property Type | Property Default |
| :------------ | :------------ | :--------------- |
| threshold     | number        | 1                |
| rootMargin    | string        | '0px'            |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-on-screen/issues) panel on GitHub
