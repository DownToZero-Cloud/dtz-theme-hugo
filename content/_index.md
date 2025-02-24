---
title: "Home"
components:
- dtz-button
---
<div style="width: 200px;height: 200px;display: flex;flex-direction: column;justify-content: space-between;">
    <dtz-button onclick="hello(event)">Click me</dtz-button>
    <dtz-button class="secondary">Click me</dtz-button>
    <dtz-button class="danger">Click me</dtz-button>
</div>
<script>
async function hello(event) {
    if(event) event.preventDefault();
    await new Promise(r => setTimeout(r, 2000));
    alert("Hello");
    event.target.processingDone();
}
document.querySelector("dtz-button.secondary").addEventListener("click", hello);
document.querySelector("dtz-button.danger").addEventListener("click", hello);
</script>