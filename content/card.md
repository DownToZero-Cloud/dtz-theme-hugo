---
title: "Home"
components:
- dtz-card
- dtz-button
---
<dtz-card title="hello world">hello</dtz-card>
<dtz-card title="hello world"></dtz-card>
<dtz-card title="hello world" id="delayed"></dtz-card>
<dtz-card class="compact" title="hello world">compact view</dtz-card>
<dtz-card title="hello world">
    this is a sample card
    <dtz-button slot="actions">say hello</dtz-button>
    <dtz-button slot="actions" class="danger mt-2">say goodbye</dtz-button>
</dtz-card>
<dtz-card title="hello world compact" class="compact">
    class="compact"
    <dtz-button slot="actions">say hello</dtz-button>
    <dtz-button slot="actions" class="danger ms-2">say goodbye</dtz-button>
</dtz-card>
<dtz-card title="hello world compact" class="compact actions-end">
    class="compact actions-end"
    <dtz-button slot="actions">say hello</dtz-button>
    <dtz-button slot="actions" class="danger ms-2">say goodbye</dtz-button>
</dtz-card>
<dtz-card title="hello world compact" class="compact actions-space-between">
    class="compact actions-space-between"
    <dtz-button slot="actions">say hello</dtz-button>
    <dtz-button slot="actions" class="danger ms-2">say goodbye</dtz-button>
</dtz-card>
<script>
async function run(){
    await new Promise(r => setTimeout(r, 2000));
    document.querySelector("#delayed").innerHTML="delayed";
}
run();
</script>