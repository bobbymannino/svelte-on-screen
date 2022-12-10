<script>import { onMount } from "svelte";
export let showing = false;
export let threshold = 1;
export let rootMargin = "0px";
let wrapper;
onMount(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      showing = entries[0].isIntersecting;
    },
    { rootMargin, threshold }
  );
  observer.observe(wrapper);
  return () => {
    observer.unobserve(wrapper);
    observer.disconnect();
  };
});
</script>

<div bind:this={wrapper}>
	<slot />
</div>
