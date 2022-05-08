const wcID = e => document.getElementById(e),
    wcU = encodeURIComponent(window.location.href),
    newRequest = function(e = !0) {
        fetch("https://api.websitecarbon.com/b?url=" + wcU).then((function(e) {
            if (!e.ok) throw Error(e);
            return e.json()
        })).then((function(n) {
            e && renderResult(n), n.t = (new Date).getTime(), localStorage.setItem("wcb_" + wcU, JSON.stringify(n))
        })).catch((function(e) {
            wcID("wcb_g").innerHTML = "No Result", console.log(e), localStorage.removeItem("wcb_" + wcU)
        }))
    },
    renderResult = function(e) {
        wcID("wcb_g").innerHTML = e.c + "g of CO<sub>2</sub>/view", wcID("wcb_2").insertAdjacentHTML("beforeEnd", "Cleaner than " + e.p + "% of pages tested")
    },
    wcC = "<style>#wcb.carbonbadge{--b1:rgb(128, 128, 128);--b2:rgb(128, 128, 128);font-size:15px;text-align:center;color:var(--b1);line-height:1.15}#wcb.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:.7em}#wcb #wcb_2,#wcb #wcb_a,#wcb #wcb_g{display:inline-flex;justify-content:center;align-items:center;text-align:center;font-size:1em;line-height:1.15;font-family:-apple-system,BlinkMacSystemFont,sans-serif;text-decoration:none;margin:.2em 0}#wcb #wcb_a,#wcb #wcb_g{padding:.3em .5em;border:.13em solid var(--b2)}#wcb #wcb_g{border-radius:.3em 0 0 .3em;background:rgb(242, 242, 242);border-right:0;min-width:8.2em}#wcb #wcb_a{border-radius:0 .3em .3em 0;border-left:0;background:var(--b1);color:rgb(242, 242, 242);font-weight:700;border-color:var(--b1)}#wcb.wcb-d #wcb_a{color:var(--b1);background:var(--b2);border-color:var(--b2)}#wcb.wcb-d #wcb_2{color:rgb(242, 242, 242)}</style>",
    wcB = wcID("wcb");
if ("fetch" in window) {
    wcB.insertAdjacentHTML("beforeEnd", wcC), wcB.insertAdjacentHTML("beforeEnd", '<div id="wcb_p"><span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span><a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><span id="wcb_2">&nbsp;</span>');
    let e = localStorage.getItem("wcb_" + wcU);
    const n = (new Date).getTime();
    if (e) {
        const t = JSON.parse(e);
        renderResult(t), n - t.t > 864e5 && newRequest(!1)
    } else newRequest()
}