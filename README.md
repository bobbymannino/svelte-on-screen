# **Svelte On Screen**

## **Description**

An element for controlling wether an element is in the viewport using intersection observer that's:

-   **TypeScript First**
-   **Customizable With Props**
-   **Easy To Use**

---

## **Demo**

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

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-on-view/issues) panel on GitHub
