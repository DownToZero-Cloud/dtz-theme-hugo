---
title: "Home"
components:
- dtz-search
---
<div style="width: 600px;height: 300px;display: flex;flex-direction: column;justify-content: space-between;">
    <dtz-search class="mt-4 ms-4"></dtz-search>
</div>
<script>
async function find(event){
    console.log("search "+event.detail);
    await new Promise(r => setTimeout(r, 2000));
    event.target.processingDone();
}
document.querySelector("dtz-search").addEventListener("search",find);
</script>