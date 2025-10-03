let o=["","k","M","B","T"];function s(a){var t=Math.log10(Math.abs(a))/3|0;if(t==0)return a.toFixed(0);var e=o[t],r=Math.pow(10,t*3),i=a/r;return i.toFixed(1)+e}export{s as a};
