import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("[data-start]"),o=document.querySelector("#datetime-picker"),v=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let l=null,d=null;const L={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(alert("Please choose a date in the future"),n.disabled=!0,n.classList.remove("active"),o.classList.remove("active")):(l=t,n.disabled=!1,n.classList.add("active"),o.classList.add("active"))}};y("#datetime-picker",L);n.addEventListener("click",()=>{n.disabled=!0,o.disabled=!0,o.classList.remove("active"),b()});function b(){d=setInterval(()=>{const t=l-new Date;if(t<=0){clearInterval(d),u(0,0,0,0),o.disabled=!1;return}const{days:s,hours:a,minutes:i,seconds:c}=q(t);u(s,a,i,c)},1e3)}function q(e){const c=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:m,minutes:f,seconds:h}}function u(e,t,s,a){v.textContent=r(e),p.textContent=r(t),S.textContent=r(s),D.textContent=r(a)}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
