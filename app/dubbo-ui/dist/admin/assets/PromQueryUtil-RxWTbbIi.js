import{r as c}from"./request-hwqjhTR7.js";import{r as i,a4 as s}from"./index-nw_d5X0a.js";const f=async t=>c({url:"promQL/query",method:"get",params:t});async function q(t){var o,a;try{let r=(a=(o=await f({query:t}))==null?void 0:o.data)==null?void 0:a.result[0];return r!=null&&r.value&&r.value.length>0?Number(r.value[1]):"NA"}catch(r){console.error("fetch from prom error: ",r)}return"NA"}function p(t,o,a){var u;const r=i(t);for(let l of o){let e=(u=t==null?void 0:t.data)==null?void 0:u.list;for(let n of e)n[l]="skeleton-loading"}return s(async()=>{var l;try{let e=((l=r==null?void 0:r.data)==null?void 0:l.list)||[];for(let n of e)a(n)}catch(e){console.error(e)}}),r}export{p,q};
