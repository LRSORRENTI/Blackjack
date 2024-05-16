(() => { "use strict"; function e(e) { const t = Math.floor(Math.random() * e.length), n = e[t]; return e.splice(t, 1), n } const t = function () { const e = [], t = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"], n = ["Hearts", "Clubs", "Diamonds", "Spades"]; for (const d of t) for (const t of n) e.push({ card: d, suit: t }); return e }(), n = [], d = []; function a(e) { let t = 0; for (const n of e) n.card.length > 2 && "Ace" != n.card ? t += 10 : "Ace" === n.card ? t += 1 : t += parseInt(n.card); return console.log(e), t } console.log("deck length before draw:", t.length), n.push(e(t)), n.push(e(t)), d.push(e(t)), d.push(e(t)), console.log("deck length after draw", t.length), console.log("player hand:", a(n)), console.log("dealer hand:", a(d)); let s = !1, c = !1; function r() { const e = document.getElementById("player-hand"), t = document.getElementById("dealer-hand"); e.innerHTML = "", t.innerHTML = "", n.forEach((t => { const n = i(t); e.appendChild(n) })), d.forEach(((e, n) => { const d = i(e, 1 === n && !c); t.appendChild(d) })) } function o(e) { return new Promise((t => setTimeout(t, e))) } function l(e) { const t = a(e), n = e.some((e => "Ace" === e.card)); return 17 === t && n } function i(e, t = !1) { const n = { Hearts: "&hearts;", Diamonds: "&diams;", Clubs: "&clubs;", Spades: "&spades;" }, d = { Hearts: "red", Diamonds: "red", Clubs: "black", Spades: "black" }, a = { King: "&#x2654;", Queen: "&#x2655;", Jack: "J", Ace: "&#x2664;" }, s = document.createElement("div"); if (s.classList.add("card"), t) { const e = document.createElement("img"); e.src = "redCardBack.jpg", e.alt = "Card Back", e.classList.add("card-back"), s.appendChild(e) } else { const t = document.createElement("div"); t.classList.add("corner", "top-left"), t.innerHTML = `${e.card} <br> ${n[e.suit]}`, t.style.color = d[e.suit]; const c = document.createElement("div"); c.classList.add("corner", "bottom-right"), c.innerHTML = `${e.card} <br> ${n[e.suit]}`, c.style.color = d[e.suit]; const r = document.createElement("div"); if (r.classList.add("center"), a[e.card]) r.innerHTML = a[e.card], r.classList.add("icon-center"); else if (!isNaN(e.card) && e.card >= 2 && e.card <= 10) { e.card <= 4 ? r.style.gridTemplateColumns = "repeat(1, 3fr)" : e.card <= 8 ? r.style.gridTemplateColumns = "repeat(2, 1fr)" : r.style.gridTemplateColumns = "repeat(3, 2fr)", r.style.display = "grid", r.style.justifyItems = "center", r.style.alignItems = "center"; for (let t = 0; t < e.card; t++) { const t = document.createElement("span"); t.innerHTML = n[e.suit], t.style.color = d[e.suit], r.appendChild(t) } } else r.innerHTML = `${e.card}`; r.style.color = d[e.suit], s.appendChild(t), s.appendChild(c), s.appendChild(r) } return s } function u(e, t) { e.forEach((e => { const n = i(e); t.appendChild(n) })) } function m() { s = !0, document.getElementById("hit-button").disabled = !0, document.getElementById("stand-button").disabled = !0 } document.getElementById("hit-button").addEventListener("click", (() => { if (!s) return n.push(e(t)), r(), a(n) > 21 ? (setTimeout((() => { alert("Busted! Player loses.") }), 500), void m()) : void 0 })), document.getElementById("stand-button").addEventListener("click", (async () => { if (s) return; let i = a(d); for (c = !0; i < 17 || 17 === i && l(d);)d.push(e(t)), r(), await o(200), i = a(d); setTimeout((() => { const e = a(n); let t = `Final scores - Player: ${e}, Dealer: ${i}\n`; t += e > i || i > 21 ? "Player wins!" : e < i ? "Dealer wins!" : "It's a tie!", alert(t), m() }), 500) })), document.getElementById("new-game-button").addEventListener("click", (() => { window.location.reload() })), u(d, document.getElementById("dealer-hand")), u(n, document.getElementById("player-hand")), r() })();