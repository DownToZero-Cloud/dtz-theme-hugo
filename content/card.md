---
title: "Home"
components:
- dtz-card
---
<dtz-card title="hello world">hello</dtz-card>
<dtz-card title="hello world"></dtz-card>
<dtz-card title="hello world" id="delayed"></dtz-card>
<script>
async function run(){
    await new Promise(r => setTimeout(r, 2000));
    document.querySelector("#delayed").innerHTML="delayed";
}
run();
</script>