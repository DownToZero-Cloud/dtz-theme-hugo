---
title: "Home"
components:
- dtz-button
---
<div style="width: 200px;height: 300px;display: flex;flex-direction: column;justify-content: space-between;">
    <dtz-button onclick="hello(event)">Click me</dtz-button>
    <dtz-button class="secondary">Click me</dtz-button>
    <dtz-button class="danger">Click me</dtz-button>
    <form id="frmCreate" style="border: 1px solid #000;padding: 10px;">
    Form:
        <input type="text" id="inAlias" />
        <dtz-button>Create</dtz-button>
    </form>
</div>
<script>
async function hello(event) {
    if(event) event.preventDefault();
    await new Promise(r => setTimeout(r, 2000));
    alert("Hello");
    event.target.processingDone();
}
async function hello2(event) {
    if(event) event.preventDefault();
    alert("Form submitted");
    event.submitter.processingDone();
}
document.querySelector("dtz-button.secondary").addEventListener("click", hello);
document.querySelector("dtz-button.danger").addEventListener("click", hello);
document.querySelector("#frmCreate").addEventListener("submit", hello2);
</script>