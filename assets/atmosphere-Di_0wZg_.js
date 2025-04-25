(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zi="175",ar={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,jl=1,Sf=2,Dh=1,Uh=2,oi=3,_i=0,Kt=1,Tn=2,rn=0,Cr=1,$l=2,Zl=3,Kl=4,Ef=5,Ki=100,Mf=101,yf=102,Tf=103,wf=104,Af=200,bf=201,Rf=202,Cf=203,Zo=204,Ko=205,Pf=206,Df=207,Uf=208,If=209,Lf=210,Nf=211,Of=212,Ff=213,Bf=214,Jo=0,Qo=1,ec=2,Lr=3,tc=4,nc=5,ic=6,rc=7,Ih=0,zf=1,Hf=2,vi=0,Gf=1,kf=2,Vf=3,Wf=4,Xf=5,Yf=6,qf=7,Lh=300,Nr=301,Or=302,sc=303,ac=304,ka=306,oc=1e3,fi=1001,cc=1002,pn=1003,jf=1004,Os=1005,Nt=1006,ro=1007,pi=1008,Xt=1009,ll=1010,ul=1011,Fr=1012,Va=1013,xi=1014,Wt=1015,Vt=1016,hl=1017,dl=1018,Br=1020,Nh=35902,Oh=1021,Fh=1022,_n=1023,Bh=1024,zh=1025,Ts=1026,zr=1027,Wa=1028,fl=1029,Hh=1030,pl=1031,ml=1033,ga=33776,_a=33777,xa=33778,Sa=33779,lc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,vc=37808,gc=37809,_c=37810,xc=37811,Sc=37812,Ec=37813,Mc=37814,yc=37815,Tc=37816,wc=37817,Ac=37818,bc=37819,Rc=37820,Cc=37821,Ea=36492,Pc=36494,Dc=36495,Gh=36283,Uc=36284,Ic=36285,Lc=36286,bs=3200,$f=3201,kh=0,Zf=1,Zn="",Dt="srgb",Bi="srgb-linear",wa="linear",bt="srgb",cr=7680,Jl=519,Kf=512,Jf=513,Qf=514,Vh=515,ep=516,tp=517,np=518,ip=519,Ql=35044,Aa="300 es",mi=2e3,ba=2001;let yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const vs=Math.PI/180,ws=180/Math.PI;function qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function vl(n,e){return(n%e+e)%e}function rp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sp(n,e,t){return n!==e?(t-n)/(e-n):0}function gs(n,e,t){return(1-t)*n+t*e}function ap(n,e,t,i){return gs(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(vl(n,e*2)-e)}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hp(n,e){return n+Math.random()*(e-n)}function dp(n){return n*(.5-Math.random())}function fp(n){n!==void 0&&(eu=n);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(n){return n*vs}function mp(n){return n*ws}function vp(n){return(n&n-1)===0&&n!==0}function gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+i)/2),d=a((e+i)/2),p=s((e-i)/2),m=a((e-i)/2),g=s((i-e)/2),E=a((i-e)/2);switch(r){case"XYX":n.set(o*d,c*p,c*m,o*u);break;case"YZY":n.set(c*m,o*d,c*p,o*u);break;case"ZXZ":n.set(c*p,c*m,o*d,o*u);break;case"XZX":n.set(o*d,c*E,c*g,o*u);break;case"YXY":n.set(c*g,o*d,c*E,o*u);break;case"ZYZ":n.set(c*E,c*g,o*d,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gl={DEG2RAD:vs,RAD2DEG:ws,generateUUID:qr,clamp:dt,euclideanModulo:vl,mapLinear:rp,inverseLerp:sp,lerp:gs,damp:ap,pingpong:op,smoothstep:cp,smootherstep:lp,randInt:up,randFloat:hp,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:vp,ceilPowerOfTwo:gp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:xp,normalize:dn,denormalize:yr};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,i,r,s,a,o,c,u){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,u)}set(e,t,i,r,s,a,o,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],d=i[4],p=i[7],m=i[2],g=i[5],E=i[8],T=r[0],_=r[3],v=r[6],U=r[1],b=r[4],R=r[7],N=r[2],B=r[5],O=r[8];return s[0]=a*T+o*U+c*N,s[3]=a*_+o*b+c*B,s[6]=a*v+o*R+c*O,s[1]=u*T+d*U+p*N,s[4]=u*_+d*b+p*B,s[7]=u*v+d*R+p*O,s[2]=m*T+g*U+E*N,s[5]=m*_+g*b+E*B,s[8]=m*v+g*R+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8];return t*a*d-t*o*u-i*s*d+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8],p=d*a-o*u,m=o*c-d*s,g=u*s-a*c,E=t*p+i*m+r*g;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=p*T,e[1]=(r*u-d*i)*T,e[2]=(o*i-r*a)*T,e[3]=m*T,e[4]=(d*t-r*c)*T,e[5]=(r*s-o*t)*T,e[6]=g*T,e[7]=(i*c-u*t)*T,e[8]=(a*t-i*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new ct;function Wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){const n=Ra("canvas");return n.style.display="block",n}const tu={};function Ma(n){n in tu||(tu[n]=!0,console.warn(n))}function Ep(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Mp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nu=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){const n={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bi]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const xt=Tp();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lr;class wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{lr===void 0&&(lr=Ra("canvas")),lr.width=e.width,lr.height=e.height;const r=lr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=lr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ap=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ao(r[a].image)):s.push(ao(r[a]))}else s=ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class sn extends yi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=fi,r=fi,s=Nt,a=pi,o=_n,c=Xt,u=sn.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=qr(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Lh;sn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],d=c[4],p=c[8],m=c[1],g=c[5],E=c[9],T=c[2],_=c[6],v=c[10];if(Math.abs(d-m)<.01&&Math.abs(p-T)<.01&&Math.abs(E-_)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+T)<.1&&Math.abs(E+_)<.1&&Math.abs(u+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,R=(g+1)/2,N=(v+1)/2,B=(d+m)/4,O=(p+T)/4,W=(E+_)/4;return b>R&&b>N?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=B/i,s=O/i):R>N?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=B/r,s=W/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=O/s,r=W/s),this.set(i,r,s,t),this}let U=Math.sqrt((_-E)*(_-E)+(p-T)*(p-T)+(m-d)*(m-d));return Math.abs(U)<.001&&(U=1),this.x=(_-E)/U,this.y=(p-T)/U,this.z=(m-d)/U,this.w=Math.acos((u+g+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Rp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xh extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xl extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const m=s[a+0],g=s[a+1],E=s[a+2],T=s[a+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=E,e[t+3]=T;return}if(p!==T||c!==m||u!==g||d!==E){let _=1-o;const v=c*m+u*g+d*E+p*T,U=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const N=Math.sqrt(b),B=Math.atan2(N,v*U);_=Math.sin(_*B)/N,o=Math.sin(o*B)/N}const R=o*U;if(c=c*_+m*R,u=u*_+g*R,d=d*_+E*R,p=p*_+T*R,_===1-o){const N=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=N,u*=N,d*=N,p*=N}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],d=i[r+3],p=s[a],m=s[a+1],g=s[a+2],E=s[a+3];return e[t]=o*E+d*p+c*g-u*m,e[t+1]=c*E+d*m+u*p-o*g,e[t+2]=u*E+d*g+o*m-c*p,e[t+3]=d*E-o*p-c*m-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),d=o(r/2),p=o(s/2),m=c(i/2),g=c(r/2),E=c(s/2);switch(a){case"XYZ":this._x=m*d*p+u*g*E,this._y=u*g*p-m*d*E,this._z=u*d*E+m*g*p,this._w=u*d*p-m*g*E;break;case"YXZ":this._x=m*d*p+u*g*E,this._y=u*g*p-m*d*E,this._z=u*d*E-m*g*p,this._w=u*d*p+m*g*E;break;case"ZXY":this._x=m*d*p-u*g*E,this._y=u*g*p+m*d*E,this._z=u*d*E+m*g*p,this._w=u*d*p-m*g*E;break;case"ZYX":this._x=m*d*p-u*g*E,this._y=u*g*p+m*d*E,this._z=u*d*E-m*g*p,this._w=u*d*p+m*g*E;break;case"YZX":this._x=m*d*p+u*g*E,this._y=u*g*p+m*d*E,this._z=u*d*E-m*g*p,this._w=u*d*p-m*g*E;break;case"XZY":this._x=m*d*p-u*g*E,this._y=u*g*p-m*d*E,this._z=u*d*E+m*g*p,this._w=u*d*p+m*g*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],d=t[6],p=t[10],m=i+o+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(d-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,d=t._w;return this._x=i*d+a*o+r*u-s*c,this._y=r*d+a*c+s*o-i*u,this._z=s*d+a*u+i*c-r*o,this._w=a*d-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,o),p=Math.sin((1-t)*d)/u,m=Math.sin(t*d)/u;return this._w=a*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),d=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+c*u+a*p-o*d,this.y=i+c*d+o*u-s*p,this.z=r+c*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new z,ru=new nr;class Rs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Bs.subVectors(this.max,Qr),ur.subVectors(e.a,Qr),hr.subVectors(e.b,Qr),dr.subVectors(e.c,Qr),Ai.subVectors(hr,ur),bi.subVectors(dr,hr),ki.subVectors(ur,dr);let t=[0,-Ai.z,Ai.y,0,-bi.z,bi.y,0,-ki.z,ki.y,Ai.z,0,-Ai.x,bi.z,0,-bi.x,ki.z,0,-ki.x,-Ai.y,Ai.x,0,-bi.y,bi.x,0,-ki.y,ki.x,0];return!co(t,ur,hr,dr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!co(t,ur,hr,dr,Bs))?!1:(zs.crossVectors(Ai,bi),t=[zs.x,zs.y,zs.z],co(t,ur,hr,dr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new z,new z,new z,new z,new z,new z,new z,new z],Fn=new z,Fs=new Rs,ur=new z,hr=new z,dr=new z,Ai=new z,bi=new z,ki=new z,Qr=new z,Bs=new z,zs=new z,Vi=new z;function co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=e.dot(Vi),u=t.dot(Vi),d=i.dot(Vi);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>o)return!1}return!0}const Cp=new Rs,es=new z,lo=new z;class Sl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(lo)),this.expandByPoint(es.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new z,uo=new z,Hs=new z,Ri=new z,ho=new z,Gs=new z,fo=new z;class Yh{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=Ri.dot(this.direction),c=-Ri.dot(Hs),u=Ri.lengthSq(),d=Math.abs(1-a*a);let p,m,g,E;if(d>0)if(p=a*c-o,m=a*o-c,E=s*d,p>=0)if(m>=-E)if(m<=E){const T=1/d;p*=T,m*=T,g=p*(p+a*m+2*o)+m*(a*p+m+2*c)+u}else m=s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*c)+u;else m=-s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*c)+u;else m<=-E?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+m*(m+2*c)+u):m<=E?(p=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+u):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+m*(m+2*c)+u);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),g=-p*p+m*(m+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(uo).addScaledVector(Hs,m),g}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),d>=0?(s=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),Gs.subVectors(i,e),fo.crossVectors(ho,Gs);let a=this.direction.dot(fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Gs.crossVectors(Ri,Gs));if(c<0)return null;const u=o*this.direction.dot(ho.cross(Ri));if(u<0||c+u>a)return null;const d=-o*Ri.dot(fo);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,a,o,c,u,d,p,m,g,E,T,_){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,u,d,p,m,g,E,T,_)}set(e,t,i,r,s,a,o,c,u,d,p,m,g,E,T,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=u,v[6]=d,v[10]=p,v[14]=m,v[3]=g,v[7]=E,v[11]=T,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*d,g=a*p,E=o*d,T=o*p;t[0]=c*d,t[4]=-c*p,t[8]=u,t[1]=g+E*u,t[5]=m-T*u,t[9]=-o*c,t[2]=T-m*u,t[6]=E+g*u,t[10]=a*c}else if(e.order==="YXZ"){const m=c*d,g=c*p,E=u*d,T=u*p;t[0]=m+T*o,t[4]=E*o-g,t[8]=a*u,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=g*o-E,t[6]=T+m*o,t[10]=a*c}else if(e.order==="ZXY"){const m=c*d,g=c*p,E=u*d,T=u*p;t[0]=m-T*o,t[4]=-a*p,t[8]=E+g*o,t[1]=g+E*o,t[5]=a*d,t[9]=T-m*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const m=a*d,g=a*p,E=o*d,T=o*p;t[0]=c*d,t[4]=E*u-g,t[8]=m*u+T,t[1]=c*p,t[5]=T*u+m,t[9]=g*u-E,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,g=a*u,E=o*c,T=o*u;t[0]=c*d,t[4]=T-m*p,t[8]=E*p+g,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-u*d,t[6]=g*p+E,t[10]=m-T*p}else if(e.order==="XZY"){const m=a*c,g=a*u,E=o*c,T=o*u;t[0]=c*d,t[4]=-p,t[8]=u*d,t[1]=m*p+T,t[5]=a*d,t[9]=g*p-E,t[2]=E*p-g,t[6]=o*d,t[10]=T*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Dp)}lookAt(e,t,i){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ci.crossVectors(i,En),Ci.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ci.crossVectors(i,En)),Ci.normalize(),ks.crossVectors(En,Ci),r[0]=Ci.x,r[4]=ks.x,r[8]=En.x,r[1]=Ci.y,r[5]=ks.y,r[9]=En.y,r[2]=Ci.z,r[6]=ks.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],d=i[1],p=i[5],m=i[9],g=i[13],E=i[2],T=i[6],_=i[10],v=i[14],U=i[3],b=i[7],R=i[11],N=i[15],B=r[0],O=r[4],W=r[8],C=r[12],w=r[1],F=r[5],te=r[9],J=r[13],ne=r[2],ce=r[6],re=r[10],he=r[14],Q=r[3],ge=r[7],de=r[11],Ce=r[15];return s[0]=a*B+o*w+c*ne+u*Q,s[4]=a*O+o*F+c*ce+u*ge,s[8]=a*W+o*te+c*re+u*de,s[12]=a*C+o*J+c*he+u*Ce,s[1]=d*B+p*w+m*ne+g*Q,s[5]=d*O+p*F+m*ce+g*ge,s[9]=d*W+p*te+m*re+g*de,s[13]=d*C+p*J+m*he+g*Ce,s[2]=E*B+T*w+_*ne+v*Q,s[6]=E*O+T*F+_*ce+v*ge,s[10]=E*W+T*te+_*re+v*de,s[14]=E*C+T*J+_*he+v*Ce,s[3]=U*B+b*w+R*ne+N*Q,s[7]=U*O+b*F+R*ce+N*ge,s[11]=U*W+b*te+R*re+N*de,s[15]=U*C+b*J+R*he+N*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],d=e[2],p=e[6],m=e[10],g=e[14],E=e[3],T=e[7],_=e[11],v=e[15];return E*(+s*c*p-r*u*p-s*o*m+i*u*m+r*o*g-i*c*g)+T*(+t*c*g-t*u*m+s*a*m-r*a*g+r*u*d-s*c*d)+_*(+t*u*p-t*o*g-s*a*p+i*a*g+s*o*d-i*u*d)+v*(-r*o*d-t*c*p+t*o*m+r*a*p-i*a*m+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],d=e[8],p=e[9],m=e[10],g=e[11],E=e[12],T=e[13],_=e[14],v=e[15],U=p*_*u-T*m*u+T*c*g-o*_*g-p*c*v+o*m*v,b=E*m*u-d*_*u-E*c*g+a*_*g+d*c*v-a*m*v,R=d*T*u-E*p*u+E*o*g-a*T*g-d*o*v+a*p*v,N=E*p*c-d*T*c-E*o*m+a*T*m+d*o*_-a*p*_,B=t*U+i*b+r*R+s*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=U*O,e[1]=(T*m*s-p*_*s-T*r*g+i*_*g+p*r*v-i*m*v)*O,e[2]=(o*_*s-T*c*s+T*r*u-i*_*u-o*r*v+i*c*v)*O,e[3]=(p*c*s-o*m*s-p*r*u+i*m*u+o*r*g-i*c*g)*O,e[4]=b*O,e[5]=(d*_*s-E*m*s+E*r*g-t*_*g-d*r*v+t*m*v)*O,e[6]=(E*c*s-a*_*s-E*r*u+t*_*u+a*r*v-t*c*v)*O,e[7]=(a*m*s-d*c*s+d*r*u-t*m*u-a*r*g+t*c*g)*O,e[8]=R*O,e[9]=(E*p*s-d*T*s-E*i*g+t*T*g+d*i*v-t*p*v)*O,e[10]=(a*T*s-E*o*s+E*i*u-t*T*u-a*i*v+t*o*v)*O,e[11]=(d*o*s-a*p*s-d*i*u+t*p*u+a*i*g-t*o*g)*O,e[12]=N*O,e[13]=(d*T*r-E*p*r+E*i*m-t*T*m-d*i*_+t*p*_)*O,e[14]=(E*o*r-a*T*r-E*i*c+t*T*c+a*i*_-t*o*_)*O,e[15]=(a*p*r-d*o*r+d*i*c-t*p*c-a*i*m+t*o*m)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,d*o+i,d*c-r*a,0,u*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,d=a+a,p=o+o,m=s*u,g=s*d,E=s*p,T=a*d,_=a*p,v=o*p,U=c*u,b=c*d,R=c*p,N=i.x,B=i.y,O=i.z;return r[0]=(1-(T+v))*N,r[1]=(g+R)*N,r[2]=(E-b)*N,r[3]=0,r[4]=(g-R)*B,r[5]=(1-(m+v))*B,r[6]=(_+U)*B,r[7]=0,r[8]=(E+b)*O,r[9]=(_-U)*O,r[10]=(1-(m+T))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const a=fr.set(r[4],r[5],r[6]).length(),o=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,d=1/a,p=1/o;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=mi){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,E;if(o===mi)g=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===ba)g=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=mi){const c=this.elements,u=1/(t-e),d=1/(i-r),p=1/(a-s),m=(t+e)*u,g=(i+r)*d;let E,T;if(o===mi)E=(a+s)*p,T=-2*p;else if(o===ba)E=s*p,T=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=T,c[14]=-E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fr=new z,Bn=new rt,Pp=new z(0,0,0),Dp=new z(1,1,1),Ci=new z,ks=new z,En=new z,su=new rt,au=new nr;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],d=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Up=0;const ou=new z,pr=new nr,ii=new rt,Vs=new z,ts=new z,Ip=new z,Lp=new nr,cu=new z(1,0,0),lu=new z(0,1,0),uu=new z(0,0,1),hu={type:"added"},Np={type:"removed"},mr={type:"childadded",child:null},po={type:"childremoved",child:null};class un extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new z,t=new Qn,i=new nr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new ct}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ts,Vs,this.up):ii.lookAt(Vs,ts,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(ii),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Np),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),E=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),E.length>0&&(i.nodes=E)}return i.object=r,i;function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new z,ri=new z,mo=new z,si=new z,vr=new z,gr=new z,du=new z,vo=new z,go=new z,_o=new z,xo=new Bt,So=new Bt,Eo=new Bt;class Wn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),ri.subVectors(i,t),mo.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(ri),c=zn.dot(mo),u=ri.dot(ri),d=ri.dot(mo),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(u*c-o*d)*m,E=(a*d-o*c)*m;return s.set(1-g-E,E,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return xo.setScalar(0),So.setScalar(0),Eo.setScalar(0),xo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,i),Eo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xo,s.x),a.addScaledVector(So,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),ri.subVectors(e,t),zn.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),zn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;vr.subVectors(r,i),gr.subVectors(s,i),vo.subVectors(e,i);const c=vr.dot(vo),u=gr.dot(vo);if(c<=0&&u<=0)return t.copy(i);go.subVectors(e,r);const d=vr.dot(go),p=gr.dot(go);if(d>=0&&p<=d)return t.copy(r);const m=c*p-d*u;if(m<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(vr,a);_o.subVectors(e,s);const g=vr.dot(_o),E=gr.dot(_o);if(E>=0&&g<=E)return t.copy(s);const T=g*u-c*E;if(T<=0&&u>=0&&E<=0)return o=u/(u-E),t.copy(i).addScaledVector(gr,o);const _=d*E-g*p;if(_<=0&&p-d>=0&&g-E>=0)return du.subVectors(s,r),o=(p-d)/(p-d+(g-E)),t.copy(r).addScaledVector(du,o);const v=1/(_+T+m);return a=T*v,o=m*v,t.copy(i).addScaledVector(vr,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=vl(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Mo(a,s,e+1/3),this.g=Mo(a,s,e),this.b=Mo(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return xt.fromWorkingColorSpace(on.copy(this),e),Math.round(dt(on.r*255,0,255))*65536+Math.round(dt(on.g*255,0,255))*256+Math.round(dt(on.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const d=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Dt){xt.fromWorkingColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ws);const i=gs(Pi.h,Ws.h,t),r=gs(Pi.s,Ws.s,t),s=gs(Pi.l,Ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new pt;pt.NAMES=jh;let Op=0;class Ti extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Cr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $h extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hi=Fp();function Fp(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(i[c]=1024>>-u-14,i[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(i[c]=u+15<<10,i[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,d=0;for(;(u&8388608)===0;)u<<=1,d-=8388608;u&=-8388609,d+=947912704,s[c]=u|d}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Bp(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=dt(n,-65504,65504),hi.floatView[0]=n;const e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function zp(n){const e=n>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(n&1023)]+hi.exponentTable[e],hi.floatView[0]}class Ca{static toHalfFloat(e){return Bp(e)}static fromHalfFloat(e){return zp(e)}}const kt=new z,Xs=new ke;let Hp=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class Zh extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kh extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gp=0;const Cn=new rt,yo=new un,_r=new z,Mn=new Rs,ns=new Rs,$t=new z;class wi extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?Kh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Mn.min,ns.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,ns.max),Mn.expandByPoint($t)):(Mn.expandByPoint(ns.min),Mn.expandByPoint(ns.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)$t.fromBufferAttribute(o,u),c&&(_r.fromBufferAttribute(e,u),$t.add(_r)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let W=0;W<i.count;W++)o[W]=new z,c[W]=new z;const u=new z,d=new z,p=new z,m=new ke,g=new ke,E=new ke,T=new z,_=new z;function v(W,C,w){u.fromBufferAttribute(i,W),d.fromBufferAttribute(i,C),p.fromBufferAttribute(i,w),m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,C),E.fromBufferAttribute(s,w),d.sub(u),p.sub(u),g.sub(m),E.sub(m);const F=1/(g.x*E.y-E.x*g.y);isFinite(F)&&(T.copy(d).multiplyScalar(E.y).addScaledVector(p,-g.y).multiplyScalar(F),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-E.x).multiplyScalar(F),o[W].add(T),o[C].add(T),o[w].add(T),c[W].add(_),c[C].add(_),c[w].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,C=U.length;W<C;++W){const w=U[W],F=w.start,te=w.count;for(let J=F,ne=F+te;J<ne;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new z,R=new z,N=new z,B=new z;function O(W){N.fromBufferAttribute(r,W),B.copy(N);const C=o[W];b.copy(C),b.sub(N.multiplyScalar(N.dot(C))).normalize(),R.crossVectors(B,C);const F=R.dot(c[W])<0?-1:1;a.setXYZW(W,b.x,b.y,b.z,F)}for(let W=0,C=U.length;W<C;++W){const w=U[W],F=w.start,te=w.count;for(let J=F,ne=F+te;J<ne;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,u=new z,d=new z,p=new z;if(e)for(let m=0,g=e.count;m<g;m+=3){const E=e.getX(m+0),T=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,_),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,_),o.add(d),c.add(d),u.add(d),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(T,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const u=o.array,d=o.itemSize,p=o.normalized,m=new u.constructor(c.length*d);let g=0,E=0;for(let T=0,_=c.length;T<_;T++){o.isInterleavedBufferAttribute?g=c[T]*o.data.stride+o.offset:g=c[T]*d;for(let v=0;v<d;v++)m[E++]=u[g++]}return new Ln(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const m=u[d],g=e(m,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let p=0,m=u.length;p<m;p++){const g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new rt,Wi=new Yh,Ys=new Sl,pu=new z,qs=new z,js=new z,$s=new z,To=new z,Zs=new z,mu=new z,Ks=new z;class In extends un{constructor(e=new wi,t=new $h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zs.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=o[c],p=s[c];d!==0&&(To.fromBufferAttribute(p,e),a?Zs.addScaledVector(To,d):Zs.addScaledVector(To.sub(t),d))}t.add(Zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(Ys.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ys,pu)===null||Wi.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let E=0,T=m.length;E<T;E++){const _=m[E],v=a[_.materialIndex],U=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let R=U,N=b;R<N;R+=3){const B=o.getX(R),O=o.getX(R+1),W=o.getX(R+2);r=Js(this,v,e,i,u,d,p,B,O,W),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const E=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let _=E,v=T;_<v;_+=3){const U=o.getX(_),b=o.getX(_+1),R=o.getX(_+2);r=Js(this,a,e,i,u,d,p,U,b,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let E=0,T=m.length;E<T;E++){const _=m[E],v=a[_.materialIndex],U=Math.max(_.start,g.start),b=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let R=U,N=b;R<N;R+=3){const B=R,O=R+1,W=R+2;r=Js(this,v,e,i,u,d,p,B,O,W),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const E=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let _=E,v=T;_<v;_+=3){const U=_,b=_+1,R=_+2;r=Js(this,a,e,i,u,d,p,U,b,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function kp(n,e,t,i,r,s,a,o){let c;if(e.side===Kt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===_i,o),c===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ks);return u<t.near||u>t.far?null:{distance:u,point:Ks.clone(),object:n}}function Js(n,e,t,i,r,s,a,o,c,u){n.getVertexPosition(o,qs),n.getVertexPosition(c,js),n.getVertexPosition(u,$s);const d=kp(n,e,t,i,qs,js,$s,mu);if(d){const p=new z;Wn.getBarycoord(mu,qs,js,$s,p),r&&(d.uv=Wn.getInterpolatedAttribute(r,o,c,u,p,new ke)),s&&(d.uv1=Wn.getInterpolatedAttribute(s,o,c,u,p,new ke)),a&&(d.normal=Wn.getInterpolatedAttribute(a,o,c,u,p,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:c,c:u,normal:new z,materialIndex:0};Wn.getNormal(qs,js,$s,m.normal),d.face=m,d.barycoord=p}return d}class Cs extends wi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],p=[];let m=0,g=0;E("z","y","x",-1,-1,i,t,e,a,s,0),E("z","y","x",1,-1,i,t,-e,a,s,1),E("x","z","y",1,1,e,i,t,r,a,2),E("x","z","y",1,-1,e,i,-t,r,a,3),E("x","y","z",1,-1,e,t,i,r,s,4),E("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Jn(u,3)),this.setAttribute("normal",new Jn(d,3)),this.setAttribute("uv",new Jn(p,2));function E(T,_,v,U,b,R,N,B,O,W,C){const w=R/O,F=N/W,te=R/2,J=N/2,ne=B/2,ce=O+1,re=W+1;let he=0,Q=0;const ge=new z;for(let de=0;de<re;de++){const Ce=de*F-J;for(let Be=0;Be<ce;Be++){const et=Be*w-te;ge[T]=et*U,ge[_]=Ce*b,ge[v]=ne,u.push(ge.x,ge.y,ge.z),ge[T]=0,ge[_]=0,ge[v]=B>0?1:-1,d.push(ge.x,ge.y,ge.z),p.push(Be/O),p.push(1-de/W),he+=1}}for(let de=0;de<W;de++)for(let Ce=0;Ce<O;Ce++){const Be=m+Ce+ce*de,et=m+Ce+ce*(de+1),ie=m+(Ce+1)+ce*(de+1),me=m+(Ce+1)+ce*de;c.push(Be,et,me),c.push(et,ie,me),Q+=6}o.addGroup(g,Q,C),g+=Q,m+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const r in i)e[r]=i[r]}return e}function Vp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Wp={clone:Hr,merge:fn};var Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xa extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new z,vu=new ke,gu=new ke;class ln extends Xa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,vu,gu),t.subVectors(gu,vu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,Sr=1;class qp extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(xr,Sr,e,t);r.layers=this.layers,this.add(r);const s=new ln(xr,Sr,e,t);s.layers=this.layers,this.add(s);const a=new ln(xr,Sr,e,t);a.layers=this.layers,this.add(a);const o=new ln(xr,Sr,e,t);o.layers=this.layers,this.add(o);const c=new ln(xr,Sr,e,t);c.layers=this.layers,this.add(c);const u=new ln(xr,Sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(p,m,g),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Qh extends sn{constructor(e=[],t=Nr,i,r,s,a,o,c,u,d){super(e,t,i,r,s,a,o,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jp extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:rn});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Nt),new qp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class cs extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,i),v=this._getHandJoint(u,T);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,E=.005;u.inputState.pinching&&m>g+E?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=g-E&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nc extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ed extends sn{constructor(e=null,t=1,i=1,r,s,a,o,c,u=pn,d=pn,p,m){super(null,a,o,c,u,d,r,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ao=new z,Zp=new z,Kp=new ct;class Oi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ao.subVectors(i,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ao),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kp.getNormalMatrix(e),r=this.coplanarPoint(Ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Sl,Qs=new z;class El{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],d=r[5],p=r[6],m=r[7],g=r[8],E=r[9],T=r[10],_=r[11],v=r[12],U=r[13],b=r[14],R=r[15];if(i[0].setComponents(c-s,m-u,_-g,R-v).normalize(),i[1].setComponents(c+s,m+u,_+g,R+v).normalize(),i[2].setComponents(c+a,m+d,_+E,R+U).normalize(),i[3].setComponents(c-a,m-d,_-E,R-U).normalize(),i[4].setComponents(c-o,m-p,_-T,R-b).normalize(),t===mi)i[5].setComponents(c+o,m+p,_+T,R+b).normalize();else if(t===ba)i[5].setComponents(o,p,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ml extends sn{constructor(e,t,i=xi,r,s,a,o=pn,c=pn,u,d=Ts){if(d!==Ts&&d!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ps extends wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),u=o+1,d=c+1,p=e/o,m=t/c,g=[],E=[],T=[],_=[];for(let v=0;v<d;v++){const U=v*m-a;for(let b=0;b<u;b++){const R=b*p-s;E.push(R,-U,0),T.push(0,0,1),_.push(b/o),_.push(1-v/c)}}for(let v=0;v<c;v++)for(let U=0;U<o;U++){const b=U+u*v,R=U+u*(v+1),N=U+1+u*(v+1),B=U+1+u*v;g.push(b,R,B),g.push(R,N,B)}this.setIndex(g),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(T,3)),this.setAttribute("uv",new Jn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class yl extends wi{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],c=[],u=[],d=[],p=new z,m=new z,g=new z,E=new z,T=new z,_=new z,v=new z;for(let b=0;b<=i;++b){const R=b/i*s*Math.PI*2;U(R,s,a,e,g),U(R+.01,s,a,e,E),_.subVectors(E,g),v.addVectors(E,g),T.crossVectors(_,v),v.crossVectors(T,_),T.normalize(),v.normalize();for(let N=0;N<=r;++N){const B=N/r*Math.PI*2,O=-t*Math.cos(B),W=t*Math.sin(B);p.x=g.x+(O*v.x+W*T.x),p.y=g.y+(O*v.y+W*T.y),p.z=g.z+(O*v.z+W*T.z),c.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),u.push(m.x,m.y,m.z),d.push(b/i),d.push(N/r)}}for(let b=1;b<=i;b++)for(let R=1;R<=r;R++){const N=(r+1)*(b-1)+(R-1),B=(r+1)*b+(R-1),O=(r+1)*b+R,W=(r+1)*(b-1)+R;o.push(N,B,W),o.push(B,O,W)}this.setIndex(o),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(d,2));function U(b,R,N,B,O){const W=Math.cos(b),C=Math.sin(b),w=N/R*b,F=Math.cos(w);O.x=B*(2+F)*.5*W,O.y=B*(2+F)*C*.5,O.z=B*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Jp extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qp extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class em extends Qp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tm extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nm extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _u={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class im{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){const p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=u.length;p<m;p+=2){const g=u[p],E=u[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return E}return null}}}const rm=new im;class Hi{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class sm extends Error{constructor(e,t){super(e),this.response=t}}class td extends Hi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_u.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:i,onError:r});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=ai[e],p=u.body.getReader(),m=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),g=m?parseInt(m):0,E=g!==0;let T=0;const _=new ReadableStream({start(v){U();function U(){p.read().then(({done:b,value:R})=>{if(b)v.close();else{T+=R.byteLength;const N=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:g});for(let B=0,O=d.length;B<O;B++){const W=d[B];W.onProgress&&W.onProgress(N)}v.enqueue(R),U()}},b=>{v.error(b)})}}});return new Response(_)}else throw new sm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return u.json();default:if(o==="")return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return u.arrayBuffer().then(E=>g.decode(E))}}}).then(u=>{_u.add(e,u);const d=ai[e];delete ai[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onLoad&&g.onLoad(u)}}).catch(u=>{const d=ai[e];if(d===void 0)throw this.manager.itemError(e),u;delete ai[e];for(let p=0,m=d.length;p<m;p++){const g=d[p];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nd extends Hi{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new ed,o=new td(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let u;try{u=s.parse(c)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:fi,a.wrapT=u.wrapT!==void 0?u.wrapT:fi,a.magFilter=u.magFilter!==void 0?u.magFilter:Nt,a.minFilter=u.minFilter!==void 0?u.minFilter:Nt,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=pi),u.mipmapCount===1&&(a.minFilter=Nt),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},i,r),a}}class id extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bo=new rt,xu=new z,Su=new z;class am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),Su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Su),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _s extends Xa{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class om extends am{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cm extends id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new om}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new z)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class um extends id{constructor(e=new lm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class hm extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class dm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return performance.now()}class ae{constructor(e){this.value=e}clone(){return new ae(this.value.clone===void 0?this.value:this.value.clone())}}class Mu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function yu(n,e,t,i){const r=fm(i);switch(t){case Oh:return n*e;case Bh:return n*e;case zh:return n*e*2;case Wa:return n*e/r.components*r.byteLength;case fl:return n*e/r.components*r.byteLength;case Hh:return n*e*2/r.components*r.byteLength;case pl:return n*e*2/r.components*r.byteLength;case Fh:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case ml:return n*e*4/r.components*r.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gh:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ic:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fm(n){switch(n){case Xt:case ll:return{byteLength:1,components:1};case Fr:case ul:case Vt:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case xi:case Va:case Wt:return{byteLength:4,components:1};case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zi);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pm(n){const e=new WeakMap;function t(o,c){const u=o.array,d=o.usage,p=u.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const d=c.array,p=c.updateRanges;if(n.bindBuffer(u,o),p.length===0)n.bufferSubData(u,0,d);else{p.sort((g,E)=>g.start-E.start);let m=0;for(let g=1;g<p.length;g++){const E=p[m],T=p[g];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++m,p[m]=T)}p.length=m+1;for(let g=0,E=p.length;g<E;g++){const T=p[g];n.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:mm,alphahash_pars_fragment:vm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:Mm,batching_pars_vertex:ym,batching_vertex:Tm,begin_vertex:wm,beginnormal_vertex:Am,bsdfs:bm,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Im,color_fragment:Lm,color_pars_fragment:Nm,color_pars_vertex:Om,color_vertex:Fm,common:Bm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Gm,displacementmap_vertex:km,emissivemap_fragment:Vm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:Ym,envmap_fragment:qm,envmap_common_pars_fragment:jm,envmap_pars_fragment:$m,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:o0,envmap_vertex:Km,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:s0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:l0,lights_phong_fragment:u0,lights_phong_pars_fragment:h0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:v0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:M0,map_particle_fragment:y0,map_particle_pars_fragment:T0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:A0,morphinstance_vertex:b0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:D0,normal_fragment_begin:U0,normal_fragment_maps:I0,normal_pars_fragment:L0,normal_pars_vertex:N0,normal_vertex:O0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:G0,opaque_fragment:k0,packing:V0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:Y0,dithering_pars_fragment:q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:K0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:a1,tonemapping_pars_fragment:o1,transmission_fragment:c1,transmission_pars_fragment:l1,uv_pars_fragment:u1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:f1,background_vert:p1,background_frag:m1,backgroundCube_vert:v1,backgroundCube_frag:g1,cube_vert:_1,cube_frag:x1,depth_vert:S1,depth_frag:E1,distanceRGBA_vert:M1,distanceRGBA_frag:y1,equirect_vert:T1,equirect_frag:w1,linedashed_vert:A1,linedashed_frag:b1,meshbasic_vert:R1,meshbasic_frag:C1,meshlambert_vert:P1,meshlambert_frag:D1,meshmatcap_vert:U1,meshmatcap_frag:I1,meshnormal_vert:L1,meshnormal_frag:N1,meshphong_vert:O1,meshphong_frag:F1,meshphysical_vert:B1,meshphysical_frag:z1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:k1,points_frag:V1,shadow_vert:W1,shadow_frag:X1,sprite_vert:Y1,sprite_frag:q1},be={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},$n={basic:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:fn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:fn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:fn([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:fn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:fn([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:fn([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:fn([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:fn([be.lights,be.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};$n.physical={uniforms:fn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ea={r:0,b:0,g:0},Yi=new Qn,j1=new rt;function $1(n,e,t,i,r,s,a){const o=new pt(0);let c=s===!0?0:1,u,d,p=null,m=0,g=null;function E(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function T(b){let R=!1;const N=E(b);N===null?v(o,c):N&&N.isColor&&(v(N,1),R=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===ka)?(d===void 0&&(d=new In(new Cs(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Hr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Yi.copy(R.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Yi)),d.material.toneMapped=xt.getTransfer(N.colorSpace)!==bt,(p!==N||m!==N.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=N,m=N.version,g=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(u===void 0&&(u=new In(new Ps(2,2),new Yt({name:"BackgroundMaterial",uniforms:Hr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=N,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.toneMapped=xt.getTransfer(N.colorSpace)!==bt,N.matrixAutoUpdate===!0&&N.updateMatrix(),u.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||m!==N.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,p=N,m=N.version,g=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function v(b,R){b.getRGB(ea,Jh(n)),i.buffers.color.setClear(ea.r,ea.g,ea.b,R,a)}function U(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,R=1){o.set(b),c=R,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,v(o,c)},render:T,addToRenderList:_,dispose:U}}function Z1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,a=!1;function o(w,F,te,J,ne){let ce=!1;const re=p(J,te,F);s!==re&&(s=re,u(s.object)),ce=g(w,J,te,ne),ce&&E(w,J,te,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,R(w,F,te,J),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return n.createVertexArray()}function u(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function p(w,F,te){const J=te.wireframe===!0;let ne=i[w.id];ne===void 0&&(ne={},i[w.id]=ne);let ce=ne[F.id];ce===void 0&&(ce={},ne[F.id]=ce);let re=ce[J];return re===void 0&&(re=m(c()),ce[J]=re),re}function m(w){const F=[],te=[],J=[];for(let ne=0;ne<t;ne++)F[ne]=0,te[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:te,attributeDivisors:J,object:w,attributes:{},index:null}}function g(w,F,te,J){const ne=s.attributes,ce=F.attributes;let re=0;const he=te.getAttributes();for(const Q in he)if(he[Q].location>=0){const de=ne[Q];let Ce=ce[Q];if(Ce===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Ce=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Ce=w.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;re++}return s.attributesNum!==re||s.index!==J}function E(w,F,te,J){const ne={},ce=F.attributes;let re=0;const he=te.getAttributes();for(const Q in he)if(he[Q].location>=0){let de=ce[Q];de===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(de=w.instanceColor));const Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),ne[Q]=Ce,re++}s.attributes=ne,s.attributesNum=re,s.index=J}function T(){const w=s.newAttributes;for(let F=0,te=w.length;F<te;F++)w[F]=0}function _(w){v(w,0)}function v(w,F){const te=s.newAttributes,J=s.enabledAttributes,ne=s.attributeDivisors;te[w]=1,J[w]===0&&(n.enableVertexAttribArray(w),J[w]=1),ne[w]!==F&&(n.vertexAttribDivisor(w,F),ne[w]=F)}function U(){const w=s.newAttributes,F=s.enabledAttributes;for(let te=0,J=F.length;te<J;te++)F[te]!==w[te]&&(n.disableVertexAttribArray(te),F[te]=0)}function b(w,F,te,J,ne,ce,re){re===!0?n.vertexAttribIPointer(w,F,te,ne,ce):n.vertexAttribPointer(w,F,te,J,ne,ce)}function R(w,F,te,J){T();const ne=J.attributes,ce=te.getAttributes(),re=F.defaultAttributeValues;for(const he in ce){const Q=ce[he];if(Q.location>=0){let ge=ne[he];if(ge===void 0&&(he==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),he==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){const de=ge.normalized,Ce=ge.itemSize,Be=e.get(ge);if(Be===void 0)continue;const et=Be.buffer,ie=Be.type,me=Be.bytesPerElement,Ee=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===Va;if(ge.isInterleavedBufferAttribute){const xe=ge.data,ze=xe.stride,ee=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let De=0;De<Q.locationSize;De++)v(Q.location+De,xe.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let De=0;De<Q.locationSize;De++)_(Q.location+De);n.bindBuffer(n.ARRAY_BUFFER,et);for(let De=0;De<Q.locationSize;De++)b(Q.location+De,Ce/Q.locationSize,ie,de,ze*me,(ee+Ce/Q.locationSize*De)*me,Ee)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<Q.locationSize;xe++)v(Q.location+xe,ge.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<Q.locationSize;xe++)_(Q.location+xe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let xe=0;xe<Q.locationSize;xe++)b(Q.location+xe,Ce/Q.locationSize,ie,de,Ce*me,Ce/Q.locationSize*xe*me,Ee)}}else if(re!==void 0){const de=re[he];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Q.location,de);break;case 3:n.vertexAttrib3fv(Q.location,de);break;case 4:n.vertexAttrib4fv(Q.location,de);break;default:n.vertexAttrib1fv(Q.location,de)}}}}U()}function N(){W();for(const w in i){const F=i[w];for(const te in F){const J=F[te];for(const ne in J)d(J[ne].object),delete J[ne];delete F[te]}delete i[w]}}function B(w){if(i[w.id]===void 0)return;const F=i[w.id];for(const te in F){const J=F[te];for(const ne in J)d(J[ne].object),delete J[ne];delete F[te]}delete i[w.id]}function O(w){for(const F in i){const te=i[F];if(te[w.id]===void 0)continue;const J=te[w.id];for(const ne in J)d(J[ne].object),delete J[ne];delete te[w.id]}}function W(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:W,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:_,disableUnusedAttributes:U}}function K1(n,e,t){let i;function r(u){i=u}function s(u,d){n.drawArrays(i,u,d),t.update(d,i,1)}function a(u,d,p){p!==0&&(n.drawArraysInstanced(i,u,d,p),t.update(d,i,p))}function o(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,p);let g=0;for(let E=0;E<p;E++)g+=d[E];t.update(g,i,1)}function c(u,d,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let E=0;E<u.length;E++)a(u[E],d[E],m[E]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,d,0,m,0,p);let E=0;for(let T=0;T<p;T++)E+=d[T]*m[T];t.update(E,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function J1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==_n&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){const W=O===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Xt&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wt&&!W)}function c(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:N,maxSamples:B}}function Q1(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Oi,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,g){const E=p.clippingPlanes,T=p.clipIntersection,_=p.clipShadows,v=n.get(p);if(!r||E===null||E.length===0||s&&!_)s?d(null):u();else{const U=s?0:i,b=U*4;let R=v.clippingState||null;c.value=R,R=d(E,m,b,g);for(let N=0;N!==b;++N)R[N]=t[N];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,m,g,E){const T=p!==null?p.length:0;let _=null;if(T!==0){if(_=c.value,E!==!0||_===null){const v=g+T*4,U=m.matrixWorldInverse;o.getNormalMatrix(U),(_===null||_.length<v)&&(_=new Float32Array(v));for(let b=0,R=g;b!==T;++b,R+=4)a.copy(p[b]).applyMatrix4(U,o),a.normal.toArray(_,R),_[R+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function ev(n){let e=new WeakMap;function t(a,o){return o===sc?a.mapping=Nr:o===ac&&(a.mapping=Or),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sc||o===ac)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new jp(c.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const wr=4,Tu=[.125,.215,.35,.446,.526,.582],Ji=20,Ro=new _s,wu=new pt;let Co=null,Po=0,Do=0,Uo=!1;const Zi=(1+Math.sqrt(5))/2,Er=1/Zi,Au=[new z(-Zi,Er,0),new z(Zi,Er,0),new z(-Er,0,Zi),new z(Er,0,Zi),new z(0,Zi,-Er),new z(0,Zi,Er),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],tv=new z;class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=tv}=s;Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Po,Do),this._renderer.xr.enabled=Uo,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Vt,format:_n,colorSpace:Bi,depthBuffer:!1},r=Ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nv(s)),this._blurMaterial=iv(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,r,s){const c=new ln(90,1,t,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(wu),p.toneMapping=vi,p.autoClear=!1;const E=new $h({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),T=new In(new Cs,E);let _=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,_=!0):(E.color.copy(wu),_=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(c.up.set(0,u[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[U],s.y,s.z)):b===1?(c.up.set(0,0,u[U]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[U],s.z)):(c.up.set(0,u[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[U]));const R=this._cubeSize;ta(r,b*R,U>2?R:0,R,R),p.setRenderTarget(r),_&&p.render(T,c),p.render(e,c)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ta(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Au[(r-s-1)%Au.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new In(this._lodPlanes[r],u),m=u.uniforms,g=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ji-1),T=s/E,_=isFinite(s)?1+Math.floor(d*T):Ji;_>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ji}`);const v=[];let U=0;for(let O=0;O<Ji;++O){const W=O/T,C=Math.exp(-W*W/2);v.push(C),O===0?U+=C:O<_&&(U+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/U;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=v,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:b}=this;m.dTheta.value=E,m.mipInt.value=b-i;const R=this._sizeLods[r],N=3*R*(r>b-wr?r-b+wr:0),B=4*(this._cubeSize-R);ta(t,N,B,3*R,2*R),c.setRenderTarget(t),c.render(p,Ro)}}function nv(n){const e=[],t=[],i=[];let r=n;const s=n-wr+1+Tu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-wr?c=Tu[a-n+wr-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),d=-u,p=1+u,m=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,E=6,T=3,_=2,v=1,U=new Float32Array(T*E*g),b=new Float32Array(_*E*g),R=new Float32Array(v*E*g);for(let B=0;B<g;B++){const O=B%3*2/3-1,W=B>2?0:-1,C=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];U.set(C,T*E*B),b.set(m,_*E*B);const w=[B,B,B,B,B,B];R.set(w,v*E*B)}const N=new wi;N.setAttribute("position",new Ln(U,T)),N.setAttribute("uv",new Ln(b,_)),N.setAttribute("faceIndex",new Ln(R,v)),e.push(N),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ru(n,e,t){const i=new Jt(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iv(n,e,t){const i=new Float32Array(Ji),r=new z(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Cu(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Pu(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===sc||c===ac,d=c===Nr||c===Or;if(u||d){let p=e.get(o);const m=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new bu(n)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return u&&g&&g.height>0||d&&g&&r(g)?(t===null&&(t=new bu(n)),p=u?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ma("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function av(n,e,t,i){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function c(p){const m=p.attributes;for(const g in m)e.update(m[g],n.ARRAY_BUFFER)}function u(p){const m=[],g=p.index,E=p.attributes.position;let T=0;if(g!==null){const U=g.array;T=g.version;for(let b=0,R=U.length;b<R;b+=3){const N=U[b+0],B=U[b+1],O=U[b+2];m.push(N,B,B,O,O,N)}}else if(E!==void 0){const U=E.array;T=E.version;for(let b=0,R=U.length/3-1;b<R;b+=3){const N=b+0,B=b+1,O=b+2;m.push(N,B,B,O,O,N)}}else return;const _=new(Wh(m)?Kh:Zh)(m,1);_.version=T;const v=s.get(p);v&&e.remove(v),s.set(p,_)}function d(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function ov(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,g){n.drawElements(i,g,s,m*a),t.update(g,i,1)}function u(m,g,E){E!==0&&(n.drawElementsInstanced(i,g,s,m*a,E),t.update(g,i,E))}function d(m,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,E);let _=0;for(let v=0;v<E;v++)_+=g[v];t.update(_,i,1)}function p(m,g,E,T){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<m.length;v++)u(m[v]/a,g[v],T[v]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,T,0,E);let v=0;for(let U=0;U<E;U++)v+=g[U]*T[U];t.update(v,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function cv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lv(n,e,t){const i=new WeakMap,r=new Bt;function s(a,o,c){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let m=i.get(o);if(m===void 0||m.count!==p){let w=function(){W.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var g=w;m!==void 0&&m.texture.dispose();const E=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],U=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),_===!0&&(R=3);let N=o.attributes.position.count*R,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*B*4*p),W=new Xh(O,N,B,p);W.type=Wt,W.needsUpdate=!0;const C=R*4;for(let F=0;F<p;F++){const te=v[F],J=U[F],ne=b[F],ce=N*B*4*F;for(let re=0;re<te.count;re++){const he=re*C;E===!0&&(r.fromBufferAttribute(te,re),O[ce+he+0]=r.x,O[ce+he+1]=r.y,O[ce+he+2]=r.z,O[ce+he+3]=0),T===!0&&(r.fromBufferAttribute(J,re),O[ce+he+4]=r.x,O[ce+he+5]=r.y,O[ce+he+6]=r.z,O[ce+he+7]=0),_===!0&&(r.fromBufferAttribute(ne,re),O[ce+he+8]=r.x,O[ce+he+9]=r.y,O[ce+he+10]=r.z,O[ce+he+11]=ne.itemSize===4?r.w:1)}}m={count:p,texture:W,size:new ke(N,B)},i.set(o,m),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let E=0;for(let _=0;_<u.length;_++)E+=u[_];const T=o.morphTargetsRelative?1:1-E;c.getUniforms().setValue(n,"morphTargetBaseInfluence",T),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function uv(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const sd=new sn,Du=new Ml(1,1),ad=new Xh,od=new xl,cd=new Qh,Uu=[],Iu=[],Lu=new Float32Array(16),Nu=new Float32Array(9),Ou=new Float32Array(4);function jr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),jt(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;Nu.set(i),n.uniformMatrix3fv(this.addr,!1,Nu),jt(t,i)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),jt(t,i)}}function _v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function Av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Du.compareFunction=Vh,s=Du):s=sd,t.setTexture2D(e||s,r)}function bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||od,r)}function Rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cd,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ad,r)}function Pv(n){switch(n){case 5126:return hv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return vv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return Sv;case 35669:case 35673:return Ev;case 5125:return Mv;case 36294:return yv;case 36295:return Tv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Dv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){const t=jr(e,this.size,2);n.uniform2fv(this.addr,t)}function Iv(n,e){const t=jr(e,this.size,3);n.uniform3fv(this.addr,t)}function Lv(n,e){const t=jr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nv(n,e){const t=jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){const t=jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fv(n,e){const t=jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bv(n,e){n.uniform1iv(this.addr,e)}function zv(n,e){n.uniform2iv(this.addr,e)}function Hv(n,e){n.uniform3iv(this.addr,e)}function Gv(n,e){n.uniform4iv(this.addr,e)}function kv(n,e){n.uniform1uiv(this.addr,e)}function Vv(n,e){n.uniform2uiv(this.addr,e)}function Wv(n,e){n.uniform3uiv(this.addr,e)}function Xv(n,e){n.uniform4uiv(this.addr,e)}function Yv(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sd,s[a])}function qv(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||od,s[a])}function jv(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cd,s[a])}function $v(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ad,s[a])}function Zv(n){switch(n){case 5126:return Dv;case 35664:return Uv;case 35665:return Iv;case 35666:return Lv;case 35674:return Nv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return kv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return $v}}class Kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}}class Qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function eg(n,e,t){const i=n.name,r=i.length;for(Io.lastIndex=0;;){const s=Io.exec(i),a=Io.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Fu(t,u===void 0?new Kv(o,n,e):new Jv(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Qv(o),Fu(t,p)),t=p}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);eg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Bu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tg=37297;let ng=0;function ig(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zu=new ct;function rg(n){xt._getMatrix(zu,xt.workingColorSpace,n);const e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ig(n.getShaderSource(e),a)}else return r}function sg(n,e){const t=rg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ag(n,e){let t;switch(e){case Gf:t="Linear";break;case kf:t="Reinhard";break;case Vf:t="Cineon";break;case Wf:t="ACESFilmic";break;case Yf:t="AgX";break;case qf:t="Neutral";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new z;function og(){xt.getLuminanceCoefficients(na);const n=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function lg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ug(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ls(n){return n!==""}function Gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(hg,fg)}const dg=new Map;function fg(n,e){let t=ht[e];if(t===void 0){const i=dg.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace(pg,mg)}function mg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function gg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nr:case Or:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function xg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case zf:e="ENVMAP_BLENDING_MIX";break;case Hf:e="ENVMAP_BLENDING_ADD";break}return e}function Sg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Eg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=vg(t),u=gg(t),d=_g(t),p=xg(t),m=Sg(t),g=cg(t),E=lg(s),T=r.createProgram();let _,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ls).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ls).join(`
`),v.length>0&&(v+=`
`)):(_=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),v=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ht.tonemapping_pars_fragment:"",t.toneMapping!==vi?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Oc(a),a=Gu(a,t),a=ku(a,t),o=Oc(o),o=Gu(o,t),o=ku(o,t),a=Vu(a),o=Vu(o),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=U+_+a,R=U+v+o,N=Bu(r,r.VERTEX_SHADER,b),B=Bu(r,r.FRAGMENT_SHADER,R);r.attachShader(T,N),r.attachShader(T,B),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function O(F){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(T).trim(),J=r.getShaderInfoLog(N).trim(),ne=r.getShaderInfoLog(B).trim();let ce=!0,re=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,N,B);else{const he=Hu(r,N,"vertex"),Q=Hu(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+te+`
`+he+`
`+Q)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(J===""||ne==="")&&(re=!1);re&&(F.diagnostics={runnable:ce,programLog:te,vertexShader:{log:J,prefix:_},fragmentShader:{log:ne,prefix:v}})}r.deleteShader(N),r.deleteShader(B),W=new ya(r,T),C=ug(r,T)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(T,tg)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ng++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=B,this}let Mg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tg(e),t.set(e,i)),i}}class Tg{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}}function wg(n,e,t,i,r,s,a){const o=new qh,c=new yg,u=new Set,d=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return u.add(C),C===0?"uv":`uv${C}`}function _(C,w,F,te,J){const ne=te.fog,ce=J.geometry,re=C.isMeshStandardMaterial?te.environment:null,he=(C.isMeshStandardMaterial?t:e).get(C.envMap||re),Q=he&&he.mapping===ka?he.image.height:null,ge=E[C.type];C.precision!==null&&(g=r.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const de=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ce=de!==void 0?de.length:0;let Be=0;ce.morphAttributes.position!==void 0&&(Be=1),ce.morphAttributes.normal!==void 0&&(Be=2),ce.morphAttributes.color!==void 0&&(Be=3);let et,ie,me,Ee;if(ge){const G=$n[ge];et=G.vertexShader,ie=G.fragmentShader}else et=C.vertexShader,ie=C.fragmentShader,c.update(C),me=c.getVertexShaderID(C),Ee=c.getFragmentShaderID(C);const xe=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),ee=J.isInstancedMesh===!0,De=J.isBatchedMesh===!0,je=!!C.map,Oe=!!C.matcap,Te=!!he,I=!!C.aoMap,Le=!!C.lightMap,Ye=!!C.bumpMap,q=!!C.normalMap,we=!!C.displacementMap,mt=!!C.emissiveMap,Ne=!!C.metalnessMap,D=!!C.roughnessMap,A=C.anisotropy>0,K=C.clearcoat>0,ue=C.dispersion>0,pe=C.iridescence>0,le=C.sheen>0,He=C.transmission>0,ye=A&&!!C.anisotropyMap,Ie=K&&!!C.clearcoatMap,nt=K&&!!C.clearcoatNormalMap,ve=K&&!!C.clearcoatRoughnessMap,Ae=pe&&!!C.iridescenceMap,Ve=pe&&!!C.iridescenceThicknessMap,oe=le&&!!C.sheenColorMap,Re=le&&!!C.sheenRoughnessMap,H=!!C.specularMap,l=!!C.specularColorMap,h=!!C.specularIntensityMap,f=He&&!!C.transmissionMap,S=He&&!!C.thicknessMap,x=!!C.gradientMap,M=!!C.alphaMap,L=C.alphaTest>0,P=!!C.alphaHash,X=!!C.extensions;let k=vi;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(k=n.toneMapping);const j={shaderID:ge,shaderType:C.type,shaderName:C.name,vertexShader:et,fragmentShader:ie,defines:C.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:De,batchingColor:De&&J._colorsTexture!==null,instancing:ee,instancingColor:ee&&J.instanceColor!==null,instancingMorph:ee&&J.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Bi,alphaToCoverage:!!C.alphaToCoverage,map:je,matcap:Oe,envMap:Te,envMapMode:Te&&he.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:Le,bumpMap:Ye,normalMap:q,displacementMap:m&&we,emissiveMap:mt,normalMapObjectSpace:q&&C.normalMapType===Zf,normalMapTangentSpace:q&&C.normalMapType===kh,metalnessMap:Ne,roughnessMap:D,anisotropy:A,anisotropyMap:ye,clearcoat:K,clearcoatMap:Ie,clearcoatNormalMap:nt,clearcoatRoughnessMap:ve,dispersion:ue,iridescence:pe,iridescenceMap:Ae,iridescenceThicknessMap:Ve,sheen:le,sheenColorMap:oe,sheenRoughnessMap:Re,specularMap:H,specularColorMap:l,specularIntensityMap:h,transmission:He,transmissionMap:f,thicknessMap:S,gradientMap:x,opaque:C.transparent===!1&&C.blending===Cr&&C.alphaToCoverage===!1,alphaMap:M,alphaTest:L,alphaHash:P,combine:C.combine,mapUv:je&&T(C.map.channel),aoMapUv:I&&T(C.aoMap.channel),lightMapUv:Le&&T(C.lightMap.channel),bumpMapUv:Ye&&T(C.bumpMap.channel),normalMapUv:q&&T(C.normalMap.channel),displacementMapUv:we&&T(C.displacementMap.channel),emissiveMapUv:mt&&T(C.emissiveMap.channel),metalnessMapUv:Ne&&T(C.metalnessMap.channel),roughnessMapUv:D&&T(C.roughnessMap.channel),anisotropyMapUv:ye&&T(C.anisotropyMap.channel),clearcoatMapUv:Ie&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:nt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Re&&T(C.sheenRoughnessMap.channel),specularMapUv:H&&T(C.specularMap.channel),specularColorMapUv:l&&T(C.specularColorMap.channel),specularIntensityMapUv:h&&T(C.specularIntensityMap.channel),transmissionMapUv:f&&T(C.transmissionMap.channel),thicknessMapUv:S&&T(C.thicknessMap.channel),alphaMapUv:M&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(q||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ce.attributes.uv&&(je||M),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ze,skinning:J.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:k,decodeVideoTexture:je&&C.map.isVideoTexture===!0&&xt.getTransfer(C.map.colorSpace)===bt,decodeVideoTextureEmissive:mt&&C.emissiveMap.isVideoTexture===!0&&xt.getTransfer(C.emissiveMap.colorSpace)===bt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Tn,flipSided:C.side===Kt,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:X&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&C.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return j.vertexUv1s=u.has(1),j.vertexUv2s=u.has(2),j.vertexUv3s=u.has(3),u.clear(),j}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)w.push(F),w.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(U(w,C),b(w,C),w.push(n.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function U(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function b(C,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),C.push(o.mask)}function R(C){const w=E[C.type];let F;if(w){const te=$n[w];F=Wp.clone(te.uniforms)}else F=C.uniforms;return F}function N(C,w){let F;for(let te=0,J=d.length;te<J;te++){const ne=d[te];if(ne.cacheKey===w){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new Eg(n,w,C,s),d.push(F)),F}function B(C){if(--C.usedTimes===0){const w=d.indexOf(C);d[w]=d[d.length-1],d.pop(),C.destroy()}}function O(C){c.remove(C)}function W(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:R,acquireProgram:N,releaseProgram:B,releaseShaderCache:O,programs:d,dispose:W}}function Ag(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,m,g,E,T,_){let v=n[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:g,groupOrder:E,renderOrder:p.renderOrder,z:T,group:_},n[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=g,v.groupOrder=E,v.renderOrder=p.renderOrder,v.z=T,v.group=_),e++,v}function o(p,m,g,E,T,_){const v=a(p,m,g,E,T,_);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function c(p,m,g,E,T,_){const v=a(p,m,g,E,T,_);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(p,m){t.length>1&&t.sort(p||bg),i.length>1&&i.sort(m||Xu),r.length>1&&r.sort(m||Xu)}function d(){for(let p=e,m=n.length;p<m;p++){const g=n[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:u}}function Rg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Yu,n.set(i,[a])):r>=s.length?(a=new Yu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new pt};break;case"SpotLight":t={position:new z,direction:new z,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Pg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dg=0;function Ug(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ig(n){const e=new Cg,t=Pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new rt,a=new rt;function o(u){let d=0,p=0,m=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,E=0,T=0,_=0,v=0,U=0,b=0,R=0,N=0,B=0,O=0;u.sort(Ug);for(let C=0,w=u.length;C<w;C++){const F=u[C],te=F.color,J=F.intensity,ne=F.distance,ce=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=te.r*J,p+=te.g*J,m+=te.b*J;else if(F.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(F.sh.coefficients[re],J);O++}else if(F.isDirectionalLight){const re=e.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const he=F.shadow,Q=t.get(F);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=F.shadow.matrix,U++}i.directional[g]=re,g++}else if(F.isSpotLight){const re=e.get(F);re.position.setFromMatrixPosition(F.matrixWorld),re.color.copy(te).multiplyScalar(J),re.distance=ne,re.coneCos=Math.cos(F.angle),re.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),re.decay=F.decay,i.spot[T]=re;const he=F.shadow;if(F.map&&(i.spotLightMap[N]=F.map,N++,he.updateMatrices(F),F.castShadow&&B++),i.spotLightMatrix[T]=he.matrix,F.castShadow){const Q=t.get(F);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,i.spotShadow[T]=Q,i.spotShadowMap[T]=ce,R++}T++}else if(F.isRectAreaLight){const re=e.get(F);re.color.copy(te).multiplyScalar(J),re.halfWidth.set(F.width*.5,0,0),re.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=re,_++}else if(F.isPointLight){const re=e.get(F);if(re.color.copy(F.color).multiplyScalar(F.intensity),re.distance=F.distance,re.decay=F.decay,F.castShadow){const he=F.shadow,Q=t.get(F);Q.shadowIntensity=he.intensity,Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,Q.shadowCameraNear=he.camera.near,Q.shadowCameraFar=he.camera.far,i.pointShadow[E]=Q,i.pointShadowMap[E]=ce,i.pointShadowMatrix[E]=F.shadow.matrix,b++}i.point[E]=re,E++}else if(F.isHemisphereLight){const re=e.get(F);re.skyColor.copy(F.color).multiplyScalar(J),re.groundColor.copy(F.groundColor).multiplyScalar(J),i.hemi[v]=re,v++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=m;const W=i.hash;(W.directionalLength!==g||W.pointLength!==E||W.spotLength!==T||W.rectAreaLength!==_||W.hemiLength!==v||W.numDirectionalShadows!==U||W.numPointShadows!==b||W.numSpotShadows!==R||W.numSpotMaps!==N||W.numLightProbes!==O)&&(i.directional.length=g,i.spot.length=T,i.rectArea.length=_,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=R+N-B,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=O,W.directionalLength=g,W.pointLength=E,W.spotLength=T,W.rectAreaLength=_,W.hemiLength=v,W.numDirectionalShadows=U,W.numPointShadows=b,W.numSpotShadows=R,W.numSpotMaps=N,W.numLightProbes=O,i.version=Dg++)}function c(u,d){let p=0,m=0,g=0,E=0,T=0;const _=d.matrixWorldInverse;for(let v=0,U=u.length;v<U;v++){const b=u[v];if(b.isDirectionalLight){const R=i.directional[p];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),p++}else if(b.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),E++}else if(b.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const R=i.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(_),T++}}}return{setup:o,setupView:c,state:i}}function qu(n){const e=new Ig(n),t=[],i=[];function r(d){u.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Lg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new qu(n),e.set(r,[o])):s>=a.length?(o=new qu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(n,e,t){let i=new El;const r=new ke,s=new ke,a=new Bt,o=new tm({depthPacking:$f}),c=new nm,u={},d=t.maxTextureSize,p={[_i]:Kt,[Kt]:_i,[Tn]:Tn},m=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ng,fragmentShader:Og}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const E=new wi;E.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new In(E,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let v=this.type;this.render=function(B,O,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;const C=n.getRenderTarget(),w=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),te=n.state;te.setBlending(rn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const J=v!==oi&&this.type===oi,ne=v===oi&&this.type!==oi;for(let ce=0,re=B.length;ce<re;ce++){const he=B[ce],Q=he.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const ge=Q.getFrameExtents();if(r.multiply(ge),s.copy(Q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ge.x),r.x=s.x*ge.x,Q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ge.y),r.y=s.y*ge.y,Q.mapSize.y=s.y)),Q.map===null||J===!0||ne===!0){const Ce=this.type!==oi?{minFilter:pn,magFilter:pn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Jt(r.x,r.y,Ce),Q.map.texture.name=he.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const de=Q.getViewportCount();for(let Ce=0;Ce<de;Ce++){const Be=Q.getViewport(Ce);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),te.viewport(a),Q.updateMatrices(he,Ce),i=Q.getFrustum(),R(O,W,Q.camera,he,this.type)}Q.isPointLightShadow!==!0&&this.type===oi&&U(Q,W),Q.needsUpdate=!1}v=this.type,_.needsUpdate=!1,n.setRenderTarget(C,w,F)};function U(B,O){const W=e.update(T);m.defines.VSM_SAMPLES!==B.blurSamples&&(m.defines.VSM_SAMPLES=B.blurSamples,g.defines.VSM_SAMPLES=B.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Jt(r.x,r.y)),m.uniforms.shadow_pass.value=B.map.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(O,null,W,m,T,null),g.uniforms.shadow_pass.value=B.mapPass.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(O,null,W,g,T,null)}function b(B,O,W,C){let w=null;const F=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)w=F;else if(w=W.isPointLight===!0?c:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=w.uuid,J=O.uuid;let ne=u[te];ne===void 0&&(ne={},u[te]=ne);let ce=ne[J];ce===void 0&&(ce=w.clone(),ne[J]=ce,O.addEventListener("dispose",N)),w=ce}if(w.visible=O.visible,w.wireframe=O.wireframe,C===oi?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:p[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=n.properties.get(w);te.light=W}return w}function R(B,O,W,C,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===oi)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const J=e.update(B),ne=B.material;if(Array.isArray(ne)){const ce=J.groups;for(let re=0,he=ce.length;re<he;re++){const Q=ce[re],ge=ne[Q.materialIndex];if(ge&&ge.visible){const de=b(B,ge,C,w);B.onBeforeShadow(n,B,O,W,J,de,Q),n.renderBufferDirect(W,null,J,de,B,Q),B.onAfterShadow(n,B,O,W,J,de,Q)}}}else if(ne.visible){const ce=b(B,ne,C,w);B.onBeforeShadow(n,B,O,W,J,ce,null),n.renderBufferDirect(W,null,J,ce,B,null),B.onAfterShadow(n,B,O,W,J,ce,null)}}const te=B.children;for(let J=0,ne=te.length;J<ne;J++)R(te[J],O,W,C,w)}function N(B){B.target.removeEventListener("dispose",N);for(const W in u){const C=u[W],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Bg={[Jo]:Qo,[ec]:ic,[tc]:rc,[Lr]:nc,[Qo]:Jo,[ic]:ec,[rc]:tc,[nc]:Lr};function zg(n,e){function t(){let f=!1;const S=new Bt;let x=null;const M=new Bt(0,0,0,0);return{setMask:function(L){x!==L&&!f&&(n.colorMask(L,L,L,L),x=L)},setLocked:function(L){f=L},setClear:function(L,P,X,k,j){j===!0&&(L*=k,P*=k,X*=k),S.set(L,P,X,k),M.equals(S)===!1&&(n.clearColor(L,P,X,k),M.copy(S))},reset:function(){f=!1,x=null,M.set(-1,0,0,0)}}}function i(){let f=!1,S=!1,x=null,M=null,L=null;return{setReversed:function(P){if(S!==P){const X=e.get("EXT_clip_control");P?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),S=P;const k=L;L=null,this.setClear(k)}},getReversed:function(){return S},setTest:function(P){P?xe(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(P){x!==P&&!f&&(n.depthMask(P),x=P)},setFunc:function(P){if(S&&(P=Bg[P]),M!==P){switch(P){case Jo:n.depthFunc(n.NEVER);break;case Qo:n.depthFunc(n.ALWAYS);break;case ec:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case tc:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}M=P}},setLocked:function(P){f=P},setClear:function(P){L!==P&&(S&&(P=1-P),n.clearDepth(P),L=P)},reset:function(){f=!1,x=null,M=null,L=null,S=!1}}}function r(){let f=!1,S=null,x=null,M=null,L=null,P=null,X=null,k=null,j=null;return{setTest:function(G){f||(G?xe(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(G){S!==G&&!f&&(n.stencilMask(G),S=G)},setFunc:function(G,Ue,se){(x!==G||M!==Ue||L!==se)&&(n.stencilFunc(G,Ue,se),x=G,M=Ue,L=se)},setOp:function(G,Ue,se){(P!==G||X!==Ue||k!==se)&&(n.stencilOp(G,Ue,se),P=G,X=Ue,k=se)},setLocked:function(G){f=G},setClear:function(G){j!==G&&(n.clearStencil(G),j=G)},reset:function(){f=!1,S=null,x=null,M=null,L=null,P=null,X=null,k=null,j=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let d={},p={},m=new WeakMap,g=[],E=null,T=!1,_=null,v=null,U=null,b=null,R=null,N=null,B=null,O=new pt(0,0,0),W=0,C=!1,w=null,F=null,te=null,J=null,ne=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,he=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(Q)[1]),re=he>=1):Q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),re=he>=2);let ge=null,de={};const Ce=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),et=new Bt().fromArray(Ce),ie=new Bt().fromArray(Be);function me(f,S,x,M){const L=new Uint8Array(4),P=n.createTexture();n.bindTexture(f,P),n.texParameteri(f,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(f,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let X=0;X<x;X++)f===n.TEXTURE_3D||f===n.TEXTURE_2D_ARRAY?n.texImage3D(S,0,n.RGBA,1,1,M,0,n.RGBA,n.UNSIGNED_BYTE,L):n.texImage2D(S+X,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,L);return P}const Ee={};Ee[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),a.setFunc(Lr),Ye(!1),q(jl),xe(n.CULL_FACE),I(rn);function xe(f){d[f]!==!0&&(n.enable(f),d[f]=!0)}function ze(f){d[f]!==!1&&(n.disable(f),d[f]=!1)}function ee(f,S){return p[f]!==S?(n.bindFramebuffer(f,S),p[f]=S,f===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=S),f===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=S),!0):!1}function De(f,S){let x=g,M=!1;if(f){x=m.get(S),x===void 0&&(x=[],m.set(S,x));const L=f.textures;if(x.length!==L.length||x[0]!==n.COLOR_ATTACHMENT0){for(let P=0,X=L.length;P<X;P++)x[P]=n.COLOR_ATTACHMENT0+P;x.length=L.length,M=!0}}else x[0]!==n.BACK&&(x[0]=n.BACK,M=!0);M&&n.drawBuffers(x)}function je(f){return E!==f?(n.useProgram(f),E=f,!0):!1}const Oe={[Ki]:n.FUNC_ADD,[Mf]:n.FUNC_SUBTRACT,[yf]:n.FUNC_REVERSE_SUBTRACT};Oe[Tf]=n.MIN,Oe[wf]=n.MAX;const Te={[Af]:n.ZERO,[bf]:n.ONE,[Rf]:n.SRC_COLOR,[Zo]:n.SRC_ALPHA,[Lf]:n.SRC_ALPHA_SATURATE,[Uf]:n.DST_COLOR,[Pf]:n.DST_ALPHA,[Cf]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[If]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Nf]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[Ff]:n.CONSTANT_ALPHA,[Bf]:n.ONE_MINUS_CONSTANT_ALPHA};function I(f,S,x,M,L,P,X,k,j,G){if(f===rn){T===!0&&(ze(n.BLEND),T=!1);return}if(T===!1&&(xe(n.BLEND),T=!0),f!==Ef){if(f!==_||G!==C){if((v!==Ki||R!==Ki)&&(n.blendEquation(n.FUNC_ADD),v=Ki,R=Ki),G)switch(f){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",f);break}else switch(f){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",f);break}U=null,b=null,N=null,B=null,O.set(0,0,0),W=0,_=f,C=G}return}L=L||S,P=P||x,X=X||M,(S!==v||L!==R)&&(n.blendEquationSeparate(Oe[S],Oe[L]),v=S,R=L),(x!==U||M!==b||P!==N||X!==B)&&(n.blendFuncSeparate(Te[x],Te[M],Te[P],Te[X]),U=x,b=M,N=P,B=X),(k.equals(O)===!1||j!==W)&&(n.blendColor(k.r,k.g,k.b,j),O.copy(k),W=j),_=f,C=!1}function Le(f,S){f.side===Tn?ze(n.CULL_FACE):xe(n.CULL_FACE);let x=f.side===Kt;S&&(x=!x),Ye(x),f.blending===Cr&&f.transparent===!1?I(rn):I(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),a.setFunc(f.depthFunc),a.setTest(f.depthTest),a.setMask(f.depthWrite),s.setMask(f.colorWrite);const M=f.stencilWrite;o.setTest(M),M&&(o.setMask(f.stencilWriteMask),o.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),o.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass)),mt(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(f){w!==f&&(f?n.frontFace(n.CW):n.frontFace(n.CCW),w=f)}function q(f){f!==xf?(xe(n.CULL_FACE),f!==F&&(f===jl?n.cullFace(n.BACK):f===Sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),F=f}function we(f){f!==te&&(re&&n.lineWidth(f),te=f)}function mt(f,S,x){f?(xe(n.POLYGON_OFFSET_FILL),(J!==S||ne!==x)&&(n.polygonOffset(S,x),J=S,ne=x)):ze(n.POLYGON_OFFSET_FILL)}function Ne(f){f?xe(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function D(f){f===void 0&&(f=n.TEXTURE0+ce-1),ge!==f&&(n.activeTexture(f),ge=f)}function A(f,S,x){x===void 0&&(ge===null?x=n.TEXTURE0+ce-1:x=ge);let M=de[x];M===void 0&&(M={type:void 0,texture:void 0},de[x]=M),(M.type!==f||M.texture!==S)&&(ge!==x&&(n.activeTexture(x),ge=x),n.bindTexture(f,S||Ee[f]),M.type=f,M.texture=S)}function K(){const f=de[ge];f!==void 0&&f.type!==void 0&&(n.bindTexture(f.type,null),f.type=void 0,f.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function pe(){try{n.compressedTexImage3D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function le(){try{n.texSubImage2D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function He(){try{n.texSubImage3D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function ye(){try{n.compressedTexSubImage2D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function nt(){try{n.texStorage2D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function ve(){try{n.texStorage3D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Ae(){try{n.texImage2D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Ve(){try{n.texImage3D(...arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function oe(f){et.equals(f)===!1&&(n.scissor(f.x,f.y,f.z,f.w),et.copy(f))}function Re(f){ie.equals(f)===!1&&(n.viewport(f.x,f.y,f.z,f.w),ie.copy(f))}function H(f,S){let x=u.get(S);x===void 0&&(x=new WeakMap,u.set(S,x));let M=x.get(f);M===void 0&&(M=n.getUniformBlockIndex(S,f.name),x.set(f,M))}function l(f,S){const M=u.get(S).get(f);c.get(S)!==M&&(n.uniformBlockBinding(S,M,f.__bindingPointIndex),c.set(S,M))}function h(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ge=null,de={},p={},m=new WeakMap,g=[],E=null,T=!1,_=null,v=null,U=null,b=null,R=null,N=null,B=null,O=new pt(0,0,0),W=0,C=!1,w=null,F=null,te=null,J=null,ne=null,et.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xe,disable:ze,bindFramebuffer:ee,drawBuffers:De,useProgram:je,setBlending:I,setMaterial:Le,setFlipSided:Ye,setCullFace:q,setLineWidth:we,setPolygonOffset:mt,setScissorTest:Ne,activeTexture:D,bindTexture:A,unbindTexture:K,compressedTexImage2D:ue,compressedTexImage3D:pe,texImage2D:Ae,texImage3D:Ve,updateUBOMapping:H,uniformBlockBinding:l,texStorage2D:nt,texStorage3D:ve,texSubImage2D:le,texSubImage3D:He,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ie,scissor:oe,viewport:Re,reset:h}}function Hg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,d=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,A){return g?new OffscreenCanvas(D,A):Ra("canvas")}function T(D,A,K){let ue=1;const pe=Ne(D);if((pe.width>K||pe.height>K)&&(ue=K/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(ue*pe.width),He=Math.floor(ue*pe.height);p===void 0&&(p=E(le,He));const ye=A?E(le,He):p;return ye.width=le,ye.height=He,ye.getContext("2d").drawImage(D,0,0,le,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+He+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function _(D){return D.generateMipmaps}function v(D){n.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,A,K,ue,pe=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=A;if(A===n.RED&&(K===n.FLOAT&&(le=n.R32F),K===n.HALF_FLOAT&&(le=n.R16F),K===n.UNSIGNED_BYTE&&(le=n.R8)),A===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.R8UI),K===n.UNSIGNED_SHORT&&(le=n.R16UI),K===n.UNSIGNED_INT&&(le=n.R32UI),K===n.BYTE&&(le=n.R8I),K===n.SHORT&&(le=n.R16I),K===n.INT&&(le=n.R32I)),A===n.RG&&(K===n.FLOAT&&(le=n.RG32F),K===n.HALF_FLOAT&&(le=n.RG16F),K===n.UNSIGNED_BYTE&&(le=n.RG8)),A===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RG8UI),K===n.UNSIGNED_SHORT&&(le=n.RG16UI),K===n.UNSIGNED_INT&&(le=n.RG32UI),K===n.BYTE&&(le=n.RG8I),K===n.SHORT&&(le=n.RG16I),K===n.INT&&(le=n.RG32I)),A===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RGB8UI),K===n.UNSIGNED_SHORT&&(le=n.RGB16UI),K===n.UNSIGNED_INT&&(le=n.RGB32UI),K===n.BYTE&&(le=n.RGB8I),K===n.SHORT&&(le=n.RGB16I),K===n.INT&&(le=n.RGB32I)),A===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),K===n.UNSIGNED_INT&&(le=n.RGBA32UI),K===n.BYTE&&(le=n.RGBA8I),K===n.SHORT&&(le=n.RGBA16I),K===n.INT&&(le=n.RGBA32I)),A===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),A===n.RGBA){const He=pe?wa:xt.getTransfer(ue);K===n.FLOAT&&(le=n.RGBA32F),K===n.HALF_FLOAT&&(le=n.RGBA16F),K===n.UNSIGNED_BYTE&&(le=He===bt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(D,A){let K;return D?A===null||A===xi||A===Br?K=n.DEPTH24_STENCIL8:A===Wt?K=n.DEPTH32F_STENCIL8:A===Fr&&(K=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xi||A===Br?K=n.DEPTH_COMPONENT24:A===Wt?K=n.DEPTH_COMPONENT32F:A===Fr&&(K=n.DEPTH_COMPONENT16),K}function N(D,A){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==Nt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function B(D){const A=D.target;A.removeEventListener("dispose",B),W(A),A.isVideoTexture&&d.delete(A)}function O(D){const A=D.target;A.removeEventListener("dispose",O),w(A)}function W(D){const A=i.get(D);if(A.__webglInit===void 0)return;const K=D.source,ue=m.get(K);if(ue){const pe=ue[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(D),Object.keys(ue).length===0&&m.delete(K)}i.remove(D)}function C(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const K=D.source,ue=m.get(K);delete ue[A.__cacheKey],a.memory.textures--}function w(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(A.__webglFramebuffer[ue]))for(let pe=0;pe<A.__webglFramebuffer[ue].length;pe++)n.deleteFramebuffer(A.__webglFramebuffer[ue][pe]);else n.deleteFramebuffer(A.__webglFramebuffer[ue]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ue])}else{if(Array.isArray(A.__webglFramebuffer))for(let ue=0;ue<A.__webglFramebuffer.length;ue++)n.deleteFramebuffer(A.__webglFramebuffer[ue]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ue=0;ue<A.__webglColorRenderbuffer.length;ue++)A.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ue]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=D.textures;for(let ue=0,pe=K.length;ue<pe;ue++){const le=i.get(K[ue]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(K[ue])}i.remove(D)}let F=0;function te(){F=0}function J(){const D=F;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),F+=1,D}function ne(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ce(D,A){const K=i.get(D);if(D.isVideoTexture&&we(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(K,D,A);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+A)}function re(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){ie(K,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+A)}function he(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){ie(K,D,A);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+A)}function Q(D,A){const K=i.get(D);if(D.version>0&&K.__version!==D.version){me(K,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+A)}const ge={[oc]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},de={[pn]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Ce={[Kf]:n.NEVER,[ip]:n.ALWAYS,[Jf]:n.LESS,[Vh]:n.LEQUAL,[Qf]:n.EQUAL,[np]:n.GEQUAL,[ep]:n.GREATER,[tp]:n.NOTEQUAL};function Be(D,A){if(A.type===Wt&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Nt||A.magFilter===ro||A.magFilter===Os||A.magFilter===pi||A.minFilter===Nt||A.minFilter===ro||A.minFilter===Os||A.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ge[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ge[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ge[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,de[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,de[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===pn||A.minFilter!==Os&&A.minFilter!==pi||A.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function et(D,A){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",B));const ue=A.source;let pe=m.get(ue);pe===void 0&&(pe={},m.set(ue,pe));const le=ne(A);if(le!==D.__cacheKey){pe[le]===void 0&&(pe[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),pe[le].usedTimes++;const He=pe[D.__cacheKey];He!==void 0&&(pe[D.__cacheKey].usedTimes--,He.usedTimes===0&&C(A)),D.__cacheKey=le,D.__webglTexture=pe[le].texture}return K}function ie(D,A,K){let ue=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=n.TEXTURE_3D);const pe=et(D,A),le=A.source;t.bindTexture(ue,D.__webglTexture,n.TEXTURE0+K);const He=i.get(le);if(le.version!==He.__version||pe===!0){t.activeTexture(n.TEXTURE0+K);const ye=xt.getPrimaries(xt.workingColorSpace),Ie=A.colorSpace===Zn?null:xt.getPrimaries(A.colorSpace),nt=A.colorSpace===Zn||ye===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ve=T(A.image,!1,r.maxTextureSize);ve=mt(A,ve);const Ae=s.convert(A.format,A.colorSpace),Ve=s.convert(A.type);let oe=b(A.internalFormat,Ae,Ve,A.colorSpace,A.isVideoTexture);Be(ue,A);let Re;const H=A.mipmaps,l=A.isVideoTexture!==!0,h=He.__version===void 0||pe===!0,f=le.dataReady,S=N(A,ve);if(A.isDepthTexture)oe=R(A.format===zr,A.type),h&&(l?t.texStorage2D(n.TEXTURE_2D,1,oe,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,oe,ve.width,ve.height,0,Ae,Ve,null));else if(A.isDataTexture)if(H.length>0){l&&h&&t.texStorage2D(n.TEXTURE_2D,S,oe,H[0].width,H[0].height);for(let x=0,M=H.length;x<M;x++)Re=H[x],l?f&&t.texSubImage2D(n.TEXTURE_2D,x,0,0,Re.width,Re.height,Ae,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,x,oe,Re.width,Re.height,0,Ae,Ve,Re.data);A.generateMipmaps=!1}else l?(h&&t.texStorage2D(n.TEXTURE_2D,S,oe,ve.width,ve.height),f&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Ae,Ve,ve.data)):t.texImage2D(n.TEXTURE_2D,0,oe,ve.width,ve.height,0,Ae,Ve,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){l&&h&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,oe,H[0].width,H[0].height,ve.depth);for(let x=0,M=H.length;x<M;x++)if(Re=H[x],A.format!==_n)if(Ae!==null)if(l){if(f)if(A.layerUpdates.size>0){const L=yu(Re.width,Re.height,A.format,A.type);for(const P of A.layerUpdates){const X=Re.data.subarray(P*L/Re.data.BYTES_PER_ELEMENT,(P+1)*L/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,x,0,0,P,Re.width,Re.height,1,Ae,X)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,x,0,0,0,Re.width,Re.height,ve.depth,Ae,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,x,oe,Re.width,Re.height,ve.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else l?f&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,x,0,0,0,Re.width,Re.height,ve.depth,Ae,Ve,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,x,oe,Re.width,Re.height,ve.depth,0,Ae,Ve,Re.data)}else{l&&h&&t.texStorage2D(n.TEXTURE_2D,S,oe,H[0].width,H[0].height);for(let x=0,M=H.length;x<M;x++)Re=H[x],A.format!==_n?Ae!==null?l?f&&t.compressedTexSubImage2D(n.TEXTURE_2D,x,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,x,oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):l?f&&t.texSubImage2D(n.TEXTURE_2D,x,0,0,Re.width,Re.height,Ae,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,x,oe,Re.width,Re.height,0,Ae,Ve,Re.data)}else if(A.isDataArrayTexture)if(l){if(h&&t.texStorage3D(n.TEXTURE_2D_ARRAY,S,oe,ve.width,ve.height,ve.depth),f)if(A.layerUpdates.size>0){const x=yu(ve.width,ve.height,A.format,A.type);for(const M of A.layerUpdates){const L=ve.data.subarray(M*x/ve.data.BYTES_PER_ELEMENT,(M+1)*x/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,M,ve.width,ve.height,1,Ae,Ve,L)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Ve,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,ve.width,ve.height,ve.depth,0,Ae,Ve,ve.data);else if(A.isData3DTexture)l?(h&&t.texStorage3D(n.TEXTURE_3D,S,oe,ve.width,ve.height,ve.depth),f&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Ve,ve.data)):t.texImage3D(n.TEXTURE_3D,0,oe,ve.width,ve.height,ve.depth,0,Ae,Ve,ve.data);else if(A.isFramebufferTexture){if(h)if(l)t.texStorage2D(n.TEXTURE_2D,S,oe,ve.width,ve.height);else{let x=ve.width,M=ve.height;for(let L=0;L<S;L++)t.texImage2D(n.TEXTURE_2D,L,oe,x,M,0,Ae,Ve,null),x>>=1,M>>=1}}else if(H.length>0){if(l&&h){const x=Ne(H[0]);t.texStorage2D(n.TEXTURE_2D,S,oe,x.width,x.height)}for(let x=0,M=H.length;x<M;x++)Re=H[x],l?f&&t.texSubImage2D(n.TEXTURE_2D,x,0,0,Ae,Ve,Re):t.texImage2D(n.TEXTURE_2D,x,oe,Ae,Ve,Re);A.generateMipmaps=!1}else if(l){if(h){const x=Ne(ve);t.texStorage2D(n.TEXTURE_2D,S,oe,x.width,x.height)}f&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ve,ve)}else t.texImage2D(n.TEXTURE_2D,0,oe,Ae,Ve,ve);_(A)&&v(ue),He.__version=le.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function me(D,A,K){if(A.image.length!==6)return;const ue=et(D,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+K);const le=i.get(pe);if(pe.version!==le.__version||ue===!0){t.activeTexture(n.TEXTURE0+K);const He=xt.getPrimaries(xt.workingColorSpace),ye=A.colorSpace===Zn?null:xt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Zn||He===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const nt=A.isCompressedTexture||A.image[0].isCompressedTexture,ve=A.image[0]&&A.image[0].isDataTexture,Ae=[];for(let M=0;M<6;M++)!nt&&!ve?Ae[M]=T(A.image[M],!0,r.maxCubemapSize):Ae[M]=ve?A.image[M].image:A.image[M],Ae[M]=mt(A,Ae[M]);const Ve=Ae[0],oe=s.convert(A.format,A.colorSpace),Re=s.convert(A.type),H=b(A.internalFormat,oe,Re,A.colorSpace),l=A.isVideoTexture!==!0,h=le.__version===void 0||ue===!0,f=pe.dataReady;let S=N(A,Ve);Be(n.TEXTURE_CUBE_MAP,A);let x;if(nt){l&&h&&t.texStorage2D(n.TEXTURE_CUBE_MAP,S,H,Ve.width,Ve.height);for(let M=0;M<6;M++){x=Ae[M].mipmaps;for(let L=0;L<x.length;L++){const P=x[L];A.format!==_n?oe!==null?l?f&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L,0,0,P.width,P.height,oe,P.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L,H,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):l?f&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L,0,0,P.width,P.height,oe,Re,P.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L,H,P.width,P.height,0,oe,Re,P.data)}}}else{if(x=A.mipmaps,l&&h){x.length>0&&S++;const M=Ne(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,S,H,M.width,M.height)}for(let M=0;M<6;M++)if(ve){l?f&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,Ae[M].width,Ae[M].height,oe,Re,Ae[M].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,H,Ae[M].width,Ae[M].height,0,oe,Re,Ae[M].data);for(let L=0;L<x.length;L++){const X=x[L].image[M].image;l?f&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L+1,0,0,X.width,X.height,oe,Re,X.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L+1,H,X.width,X.height,0,oe,Re,X.data)}}else{l?f&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,oe,Re,Ae[M]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,H,oe,Re,Ae[M]);for(let L=0;L<x.length;L++){const P=x[L];l?f&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L+1,0,0,oe,Re,P.image[M]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+M,L+1,H,oe,Re,P.image[M])}}}_(A)&&v(n.TEXTURE_CUBE_MAP),le.__version=pe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ee(D,A,K,ue,pe,le){const He=s.convert(K.format,K.colorSpace),ye=s.convert(K.type),Ie=b(K.internalFormat,He,ye,K.colorSpace),nt=i.get(A),ve=i.get(K);if(ve.__renderTarget=A,!nt.__hasExternalTextures){const Ae=Math.max(1,A.width>>le),Ve=Math.max(1,A.height>>le);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,Ie,Ae,Ve,A.depth,0,He,ye,null):t.texImage2D(pe,le,Ie,Ae,Ve,0,He,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,pe,ve.__webglTexture,0,Ye(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,pe,ve.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,A,K){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){const ue=A.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,le=R(A.stencilBuffer,pe),He=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=Ye(A);q(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,le,A.width,A.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,le,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,le,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,D)}else{const ue=A.textures;for(let pe=0;pe<ue.length;pe++){const le=ue[pe],He=s.convert(le.format,le.colorSpace),ye=s.convert(le.type),Ie=b(le.internalFormat,He,ye,le.colorSpace),nt=Ye(A);K&&q(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ie,A.width,A.height):q(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,Ie,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(A.depthTexture);ue.__renderTarget=A,(!ue.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const pe=ue.__webglTexture,le=Ye(A);if(A.depthTexture.format===Ts)q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(A.depthTexture.format===zr)q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ee(D){const A=i.get(D),K=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ue){const pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=ue}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ze(A.__webglFramebuffer,D)}else if(K){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]===void 0)A.__webglDepthbuffer[ue]=n.createRenderbuffer(),xe(A.__webglDepthbuffer[ue],D,!1);else{const pe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,le)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),xe(A.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,pe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(D,A,K){const ue=i.get(D);A!==void 0&&Ee(ue.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&ee(D)}function je(D){const A=D.texture,K=i.get(D),ue=i.get(A);D.addEventListener("dispose",O);const pe=D.textures,le=D.isWebGLCubeRenderTarget===!0,He=pe.length>1;if(He||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=A.version,a.memory.textures++),le){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)K.__webglFramebuffer[ye][Ie]=n.createFramebuffer()}else K.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)K.__webglFramebuffer[ye]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(He)for(let ye=0,Ie=pe.length;ye<Ie;ye++){const nt=i.get(pe[ye]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&q(D)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Ie=pe[ye];K.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ye]);const nt=s.convert(Ie.format,Ie.colorSpace),ve=s.convert(Ie.type),Ae=b(Ie.internalFormat,nt,ve,Ie.colorSpace,D.isXRRenderTarget===!0),Ve=Ye(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ae,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,K.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Be(n.TEXTURE_CUBE_MAP,A);for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ee(K.__webglFramebuffer[ye][Ie],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie);else Ee(K.__webglFramebuffer[ye],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(A)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ye=0,Ie=pe.length;ye<Ie;ye++){const nt=pe[ye],ve=i.get(nt);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),Be(n.TEXTURE_2D,nt),Ee(K.__webglFramebuffer,D,nt,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),_(nt)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ue.__webglTexture),Be(ye,A),A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ee(K.__webglFramebuffer[Ie],D,A,n.COLOR_ATTACHMENT0,ye,Ie);else Ee(K.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,ye,0);_(A)&&v(ye),t.unbindTexture()}D.depthBuffer&&ee(D)}function Oe(D){const A=D.textures;for(let K=0,ue=A.length;K<ue;K++){const pe=A[K];if(_(pe)){const le=U(D),He=i.get(pe).__webglTexture;t.bindTexture(le,He),v(le),t.unbindTexture()}}}const Te=[],I=[];function Le(D){if(D.samples>0){if(q(D)===!1){const A=D.textures,K=D.width,ue=D.height;let pe=n.COLOR_BUFFER_BIT;const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(D),ye=A.length>1;if(ye)for(let Ie=0;Ie<A.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const nt=i.get(A[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,K,ue,0,0,K,ue,pe,n.NEAREST),c===!0&&(Te.length=0,I.length=0,Te.push(n.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Te.push(le),I.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<A.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const nt=i.get(A[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ye(D){return Math.min(r.maxSamples,D.samples)}function q(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function we(D){const A=a.render.frame;d.get(D)!==A&&(d.set(D,A),D.update())}function mt(D,A){const K=D.colorSpace,ue=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Bi&&K!==Zn&&(xt.getTransfer(K)===bt?(ue!==_n||pe!==Xt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function Ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=J,this.resetTextureUnits=te,this.setTexture2D=ce,this.setTexture2DArray=re,this.setTexture3D=he,this.setTextureCube=Q,this.rebindTextures=De,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=q}function Gg(n,e){function t(i,r=Zn){let s;const a=xt.getTransfer(r);if(i===Xt)return n.UNSIGNED_BYTE;if(i===hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ll)return n.BYTE;if(i===ul)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Va)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Wt)return n.FLOAT;if(i===Vt)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===_n)return n.RGBA;if(i===Bh)return n.LUMINANCE;if(i===zh)return n.LUMINANCE_ALPHA;if(i===Ts)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Wa)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===Hh)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===ga||i===_a||i===xa||i===Sa)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===uc||i===hc||i===dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fc||i===pc)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===gc||i===_c||i===xc||i===Sc||i===Ec||i===Mc||i===yc||i===Tc||i===wc||i===Ac||i===bc||i===Rc||i===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Pc||i===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Uc||i===Ic||i===Lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:kg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xg extends yi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,d=null,p=null,m=null,g=null,E=null;const T=new Wg,_=t.getContextAttributes();let v=null,U=null;const b=[],R=[],N=new ke;let B=null;const O=new ln;O.viewport=new Bt;const W=new ln;W.viewport=new Bt;const C=[O,W],w=new hm;let F=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=b[ie];return me===void 0&&(me=new wo,b[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=b[ie];return me===void 0&&(me=new wo,b[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=b[ie];return me===void 0&&(me=new wo,b[ie]=me),me.getHandSpace()};function J(ie){const me=R.indexOf(ie.inputSource);if(me===-1)return;const Ee=b[me];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,u||a),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",ce);for(let ie=0;ie<b.length;ie++){const me=R[ie];me!==null&&(R[ie]=null,b[ie].disconnect(me))}F=null,te=null,T.reset(),e.setRenderTarget(v),g=null,m=null,p=null,r=null,U=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,ze=null;_.depth&&(ze=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?zr:Ts,xe=_.stencil?Br:xi);const ee={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(ee),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),U=new Jt(m.textureWidth,m.textureHeight,{format:_n,type:Xt,depthTexture:new Ml(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),U=new Jt(g.framebufferWidth,g.framebufferHeight,{format:_n,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ce(ie){for(let me=0;me<ie.removed.length;me++){const Ee=ie.removed[me],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,b[xe].disconnect(Ee))}for(let me=0;me<ie.added.length;me++){const Ee=ie.added[me];let xe=R.indexOf(Ee);if(xe===-1){for(let ee=0;ee<b.length;ee++)if(ee>=R.length){R.push(Ee),xe=ee;break}else if(R[ee]===null){R[ee]=Ee,xe=ee;break}if(xe===-1)break}const ze=b[xe];ze&&ze.connect(Ee)}}const re=new z,he=new z;function Q(ie,me,Ee){re.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const xe=re.distanceTo(he),ze=me.projectionMatrix.elements,ee=Ee.projectionMatrix.elements,De=ze[14]/(ze[10]-1),je=ze[14]/(ze[10]+1),Oe=(ze[9]+1)/ze[5],Te=(ze[9]-1)/ze[5],I=(ze[8]-1)/ze[0],Le=(ee[8]+1)/ee[0],Ye=De*I,q=De*Le,we=xe/(-I+Le),mt=we*-I;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(mt),ie.translateZ(we),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ze[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ne=De+we,D=je+we,A=Ye-mt,K=q+(xe-mt),ue=Oe*je/D*Ne,pe=Te*je/D*Ne;ie.projectionMatrix.makePerspective(A,K,ue,pe,Ne,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,Ee=ie.far;T.texture!==null&&(T.depthNear>0&&(me=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),w.near=W.near=O.near=me,w.far=W.far=O.far=Ee,(F!==w.near||te!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,te=w.far),O.layers.mask=ie.layers.mask|2,W.layers.mask=ie.layers.mask|4,w.layers.mask=O.layers.mask|W.layers.mask;const xe=ie.parent,ze=w.cameras;ge(w,xe);for(let ee=0;ee<ze.length;ee++)ge(ze[ee],xe);ze.length===2?Q(w,O,W):w.projectionMatrix.copy(O.projectionMatrix),de(ie,w,xe)};function de(ie,me,Ee){Ee===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ws*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(ie){c=ie,m!==null&&(m.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let Ce=null;function Be(ie,me){if(d=me.getViewerPose(u||a),E=me,d!==null){const Ee=d.views;g!==null&&(e.setRenderTargetFramebuffer(U,g.framebuffer),e.setRenderTarget(U));let xe=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let De=0;De<Ee.length;De++){const je=Ee[De];let Oe=null;if(g!==null)Oe=g.getViewport(je);else{const I=p.getViewSubImage(m,je);Oe=I.viewport,De===0&&(e.setRenderTargetTextures(U,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(U))}let Te=C[De];Te===void 0&&(Te=new ln,Te.layers.enable(De),Te.viewport=new Bt,C[De]=Te),Te.matrix.fromArray(je.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(je.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),De===0&&(w.matrix.copy(Te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(Te)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){const De=p.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&T.init(e,De,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const xe=R[Ee],ze=b[Ee];xe!==null&&ze!==void 0&&ze.update(xe,me,u||a)}Ce&&Ce(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),E=null}const et=new rd;et.setAnimationLoop(Be),this.setAnimationLoop=function(ie){Ce=ie},this.dispose=function(){}}}const qi=new Qn,Yg=new rt;function qg(n,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function i(_,v){v.color.getRGB(_.fogColor.value,Jh(n)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,U,b,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(_,v):v.isMeshToonMaterial?(s(_,v),p(_,v)):v.isMeshPhongMaterial?(s(_,v),d(_,v)):v.isMeshStandardMaterial?(s(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,R)):v.isMeshMatcapMaterial?(s(_,v),E(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),T(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(a(_,v),v.isLineDashedMaterial&&o(_,v)):v.isPointsMaterial?c(_,v,U,b):v.isSpriteMaterial?u(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Kt&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Kt&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const U=e.get(v),b=U.envMap,R=U.envMapRotation;b&&(_.envMap.value=b,qi.copy(R),qi.x*=-1,qi.y*=-1,qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),_.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(qi)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function a(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function o(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function c(_,v,U,b){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*U,_.scale.value=b*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function d(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,U){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kt&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function T(_,v){const U=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(U,b){const R=b.program;i.uniformBlockBinding(U,R)}function u(U,b){let R=r[U.id];R===void 0&&(E(U),R=d(U),r[U.id]=R,U.addEventListener("dispose",_));const N=b.program;i.updateUBOMapping(U,N);const B=e.render.frame;s[U.id]!==B&&(m(U),s[U.id]=B)}function d(U){const b=p();U.__bindingPointIndex=b;const R=n.createBuffer(),N=U.__size,B=U.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function p(){for(let U=0;U<o;U++)if(a.indexOf(U)===-1)return a.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(U){const b=r[U.id],R=U.uniforms,N=U.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let B=0,O=R.length;B<O;B++){const W=Array.isArray(R[B])?R[B]:[R[B]];for(let C=0,w=W.length;C<w;C++){const F=W[C];if(g(F,B,C,N)===!0){const te=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let ce=0;ce<J.length;ce++){const re=J[ce],he=T(re);typeof re=="number"||typeof re=="boolean"?(F.__data[0]=re,n.bufferSubData(n.UNIFORM_BUFFER,te+ne,F.__data)):re.isMatrix3?(F.__data[0]=re.elements[0],F.__data[1]=re.elements[1],F.__data[2]=re.elements[2],F.__data[3]=0,F.__data[4]=re.elements[3],F.__data[5]=re.elements[4],F.__data[6]=re.elements[5],F.__data[7]=0,F.__data[8]=re.elements[6],F.__data[9]=re.elements[7],F.__data[10]=re.elements[8],F.__data[11]=0):(re.toArray(F.__data,ne),ne+=he.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(U,b,R,N){const B=U.value,O=b+"_"+R;if(N[O]===void 0)return typeof B=="number"||typeof B=="boolean"?N[O]=B:N[O]=B.clone(),!0;{const W=N[O];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return N[O]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function E(U){const b=U.uniforms;let R=0;const N=16;for(let O=0,W=b.length;O<W;O++){const C=Array.isArray(b[O])?b[O]:[b[O]];for(let w=0,F=C.length;w<F;w++){const te=C[w],J=Array.isArray(te.value)?te.value:[te.value];for(let ne=0,ce=J.length;ne<ce;ne++){const re=J[ne],he=T(re),Q=R%N,ge=Q%he.boundary,de=Q+ge;R+=ge,de!==0&&N-de<he.storage&&(R+=N-de),te.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=R,R+=he.storage}}}const B=R%N;return B>0&&(R+=N-B),U.__size=R,U.__cache={},this}function T(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function _(U){const b=U.target;b.removeEventListener("dispose",_);const R=a.indexOf(b.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const U in r)n.deleteBuffer(r[U]);a=[],r={},s={}}return{bind:c,update:u,dispose:v}}class $g{constructor(e={}){const{canvas:t=Sp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=new Uint32Array(4),T=new Int32Array(4);let _=null,v=null;const U=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1;this._outputColorSpace=Dt;let B=0,O=0,W=null,C=-1,w=null;const F=new Bt,te=new Bt;let J=null;const ne=new pt(0);let ce=0,re=t.width,he=t.height,Q=1,ge=null,de=null;const Ce=new Bt(0,0,re,he),Be=new Bt(0,0,re,he);let et=!1;const ie=new El;let me=!1,Ee=!1;const xe=new rt,ze=new rt,ee=new z,De=new Bt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Te(){return W===null?Q:1}let I=i;function Le(y,V){return t.getContext(y,V)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zi}`),t.addEventListener("webglcontextlost",M,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",P,!1),I===null){const V="webgl2";if(I=Le(V,y),I===null)throw Le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ye,q,we,mt,Ne,D,A,K,ue,pe,le,He,ye,Ie,nt,ve,Ae,Ve,oe,Re,H,l,h,f;function S(){Ye=new sv(I),Ye.init(),l=new Gg(I,Ye),q=new J1(I,Ye,e,l),we=new zg(I,Ye),q.reverseDepthBuffer&&m&&we.buffers.depth.setReversed(!0),mt=new cv(I),Ne=new Ag,D=new Hg(I,Ye,we,Ne,q,l,mt),A=new ev(R),K=new rv(R),ue=new pm(I),h=new Z1(I,ue),pe=new av(I,ue,mt,h),le=new uv(I,pe,ue,mt),oe=new lv(I,q,D),ve=new Q1(Ne),He=new wg(R,A,K,Ye,q,h,ve),ye=new qg(R,Ne),Ie=new Rg,nt=new Lg(Ye),Ve=new $1(R,A,K,we,le,g,c),Ae=new Fg(R,le,q),f=new jg(I,mt,q,we),Re=new K1(I,Ye,mt),H=new ov(I,Ye,mt),mt.programs=He.programs,R.capabilities=q,R.extensions=Ye,R.properties=Ne,R.renderLists=Ie,R.shadowMap=Ae,R.state=we,R.info=mt}S();const x=new Xg(R,I);this.xr=x,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(re,he,!1))},this.getSize=function(y){return y.set(re,he)},this.setSize=function(y,V,Z=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=y,he=V,t.width=Math.floor(y*Q),t.height=Math.floor(V*Q),Z===!0&&(t.style.width=y+"px",t.style.height=V+"px"),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(re*Q,he*Q).floor()},this.setDrawingBufferSize=function(y,V,Z){re=y,he=V,Q=Z,t.width=Math.floor(y*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,y,V)},this.getCurrentViewport=function(y){return y.copy(F)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,V,Z,$){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,V,Z,$),we.viewport(F.copy(Ce).multiplyScalar(Q).round())},this.getScissor=function(y){return y.copy(Be)},this.setScissor=function(y,V,Z,$){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,V,Z,$),we.scissor(te.copy(Be).multiplyScalar(Q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){we.setScissorTest(et=y)},this.setOpaqueSort=function(y){ge=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(y=!0,V=!0,Z=!0){let $=0;if(y){let Y=!1;if(W!==null){const _e=W.texture.format;Y=_e===ml||_e===pl||_e===fl}if(Y){const _e=W.texture.type,Pe=_e===Xt||_e===xi||_e===Fr||_e===Br||_e===hl||_e===dl,Fe=Ve.getClearColor(),Ge=Ve.getClearAlpha(),it=Fe.r,tt=Fe.g,$e=Fe.b;Pe?(E[0]=it,E[1]=tt,E[2]=$e,E[3]=Ge,I.clearBufferuiv(I.COLOR,0,E)):(T[0]=it,T[1]=tt,T[2]=$e,T[3]=Ge,I.clearBufferiv(I.COLOR,0,T))}else $|=I.COLOR_BUFFER_BIT}V&&($|=I.DEPTH_BUFFER_BIT),Z&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",P,!1),Ve.dispose(),Ie.dispose(),nt.dispose(),Ne.dispose(),A.dispose(),K.dispose(),le.dispose(),h.dispose(),f.dispose(),He.dispose(),x.dispose(),x.removeEventListener("sessionstart",fe),x.removeEventListener("sessionend",Se),Me.stop()};function M(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=mt.autoReset,V=Ae.enabled,Z=Ae.autoUpdate,$=Ae.needsUpdate,Y=Ae.type;S(),mt.autoReset=y,Ae.enabled=V,Ae.autoUpdate=Z,Ae.needsUpdate=$,Ae.type=Y}function P(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function X(y){const V=y.target;V.removeEventListener("dispose",X),k(V)}function k(y){j(y),Ne.remove(y)}function j(y){const V=Ne.get(y).programs;V!==void 0&&(V.forEach(function(Z){He.releaseProgram(Z)}),y.isShaderMaterial&&He.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,Z,$,Y,_e){V===null&&(V=je);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=Ht(y,V,Z,$,Y);we.setMaterial($,Pe);let Ge=Z.index,it=1;if($.wireframe===!0){if(Ge=pe.getWireframeAttribute(Z),Ge===void 0)return;it=2}const tt=Z.drawRange,$e=Z.attributes.position;let gt=tt.start*it,Et=(tt.start+tt.count)*it;_e!==null&&(gt=Math.max(gt,_e.start*it),Et=Math.min(Et,(_e.start+_e.count)*it)),Ge!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Ge.count)):$e!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,$e.count));const Gt=Et-gt;if(Gt<0||Gt===1/0)return;h.setup(Y,$,Fe,Z,Ge);let zt,_t=Re;if(Ge!==null&&(zt=ue.get(Ge),_t=H,_t.setIndex(zt)),Y.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*Te()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(Y.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),we.setLineWidth(Qe*Te()),Y.isLineSegments?_t.setMode(I.LINES):Y.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else Y.isPoints?_t.setMode(I.POINTS):Y.isSprite&&_t.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ma("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,tn=Y._multiDrawCounts,Mt=Y._multiDrawCount,On=Ge?ue.get(Ge).bytesPerElement:1,sr=Ne.get($).currentProgram.getUniforms();for(let Sn=0;Sn<Mt;Sn++)sr.setValue(I,"_gl_DrawID",Sn),_t.render(Qe[Sn]/On,tn[Sn])}else if(Y.isInstancedMesh)_t.renderInstances(gt,Gt,Y.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tn=Math.min(Z.instanceCount,Qe);_t.renderInstances(gt,Gt,tn)}else _t.render(gt,Gt)};function G(y,V,Z){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,Pt(y,V,Z),y.side=_i,y.needsUpdate=!0,Pt(y,V,Z),y.side=Tn):Pt(y,V,Z)}this.compile=function(y,V,Z=null){Z===null&&(Z=y),v=nt.get(Z),v.init(V),b.push(v),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),y!==Z&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const $=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _e=Y.material;if(_e)if(Array.isArray(_e))for(let Pe=0;Pe<_e.length;Pe++){const Fe=_e[Pe];G(Fe,Z,Y),$.add(Fe)}else G(_e,Z,Y),$.add(_e)}),v=b.pop(),$},this.compileAsync=function(y,V,Z=null){const $=this.compile(y,V,Z);return new Promise(Y=>{function _e(){if($.forEach(function(Pe){Ne.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){Y(y);return}setTimeout(_e,10)}Ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ue=null;function se(y){Ue&&Ue(y)}function fe(){Me.stop()}function Se(){Me.start()}const Me=new rd;Me.setAnimationLoop(se),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(y){Ue=y,x.setAnimationLoop(y),y===null?Me.stop():Me.start()},x.addEventListener("sessionstart",fe),x.addEventListener("sessionend",Se),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(V),V=x.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,V,W),v=nt.get(y,b.length),v.init(V),b.push(v),ze.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(ze),Ee=this.localClippingEnabled,me=ve.init(this.clippingPlanes,Ee),_=Ie.get(y,U.length),_.init(),U.push(_),x.enabled===!0&&x.isPresenting===!0){const _e=R.xr.getDepthSensingMesh();_e!==null&&We(_e,V,-1/0,R.sortObjects)}We(y,V,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(ge,de),Oe=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Oe&&Ve.addToRenderList(_,y),this.info.render.frame++,me===!0&&ve.beginShadows();const Z=v.state.shadowsArray;Ae.render(Z,y,V),me===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,Y=_.transmissive;if(v.setupLights(),V.isArrayCamera){const _e=V.cameras;if(Y.length>0)for(let Pe=0,Fe=_e.length;Pe<Fe;Pe++){const Ge=_e[Pe];qe($,Y,y,Ge)}Oe&&Ve.render(y);for(let Pe=0,Fe=_e.length;Pe<Fe;Pe++){const Ge=_e[Pe];st(_,y,Ge,Ge.viewport)}}else Y.length>0&&qe($,Y,y,V),Oe&&Ve.render(y),st(_,y,V);W!==null&&O===0&&(D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W)),y.isScene===!0&&y.onAfterRender(R,y,V),h.resetDefaultState(),C=-1,w=null,b.pop(),b.length>0?(v=b[b.length-1],me===!0&&ve.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?_=U[U.length-1]:_=null};function We(y,V,Z,$){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){$&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ze);const Pe=le.update(y),Fe=y.material;Fe.visible&&_.push(y,Pe,Fe,Z,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const Pe=le.update(y),Fe=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(ze)),Array.isArray(Fe)){const Ge=Pe.groups;for(let it=0,tt=Ge.length;it<tt;it++){const $e=Ge[it],gt=Fe[$e.materialIndex];gt&&gt.visible&&_.push(y,Pe,gt,Z,De.z,$e)}}else Fe.visible&&_.push(y,Pe,Fe,Z,De.z,null)}}const _e=y.children;for(let Pe=0,Fe=_e.length;Pe<Fe;Pe++)We(_e[Pe],V,Z,$)}function st(y,V,Z,$){const Y=y.opaque,_e=y.transmissive,Pe=y.transparent;v.setupLightsView(Z),me===!0&&ve.setGlobalState(R.clippingPlanes,Z),$&&we.viewport(F.copy($)),Y.length>0&&ft(Y,V,Z),_e.length>0&&ft(_e,V,Z),Pe.length>0&&ft(Pe,V,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function qe(y,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[$.id]===void 0&&(v.state.transmissionRenderTarget[$.id]=new Jt(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Vt:Xt,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const _e=v.state.transmissionRenderTarget[$.id],Pe=$.viewport||F;_e.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget();R.setRenderTarget(_e),R.getClearColor(ne),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),Oe&&Ve.render(Z);const Ge=R.toneMapping;R.toneMapping=vi;const it=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),me===!0&&ve.setGlobalState(R.clippingPlanes,$),ft(y,Z,$),D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let $e=0,gt=V.length;$e<gt;$e++){const Et=V[$e],Gt=Et.object,zt=Et.geometry,_t=Et.material,Qe=Et.group;if(_t.side===Tn&&Gt.layers.test($.layers)){const tn=_t.side;_t.side=Kt,_t.needsUpdate=!0,Xe(Gt,Z,$,zt,_t,Qe),_t.side=tn,_t.needsUpdate=!0,tt=!0}}tt===!0&&(D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e))}R.setRenderTarget(Fe),R.setClearColor(ne,ce),it!==void 0&&($.viewport=it),R.toneMapping=Ge}function ft(y,V,Z){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,_e=y.length;Y<_e;Y++){const Pe=y[Y],Fe=Pe.object,Ge=Pe.geometry,it=Pe.group;let tt=Pe.material;tt.allowOverride===!0&&$!==null&&(tt=$),Fe.layers.test(Z.layers)&&Xe(Fe,V,Z,Ge,tt,it)}}function Xe(y,V,Z,$,Y,_e){y.onBeforeRender(R,V,Z,$,Y,_e),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(R,V,Z,$,y,_e),Y.transparent===!0&&Y.side===Tn&&Y.forceSinglePass===!1?(Y.side=Kt,Y.needsUpdate=!0,R.renderBufferDirect(Z,V,$,Y,y,_e),Y.side=_i,Y.needsUpdate=!0,R.renderBufferDirect(Z,V,$,Y,y,_e),Y.side=Tn):R.renderBufferDirect(Z,V,$,Y,y,_e),y.onAfterRender(R,V,Z,$,Y,_e)}function Pt(y,V,Z){V.isScene!==!0&&(V=je);const $=Ne.get(y),Y=v.state.lights,_e=v.state.shadowsArray,Pe=Y.state.version,Fe=He.getParameters(y,Y.state,_e,V,Z),Ge=He.getProgramCacheKey(Fe);let it=$.programs;$.environment=y.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(y.isMeshStandardMaterial?K:A).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,it===void 0&&(y.addEventListener("dispose",X),it=new Map,$.programs=it);let tt=it.get(Ge);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Pe)return lt(y,Fe),tt}else Fe.uniforms=He.getUniforms(y),y.onBeforeCompile(Fe,R),tt=He.acquireProgram(Fe,Ge),it.set(Ge,tt),$.uniforms=Fe.uniforms;const $e=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&($e.clippingPlanes=ve.uniform),lt(y,Fe),$.needsLights=Ct(y),$.lightsStateVersion=Pe,$.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function vt(y){if(y.uniformsList===null){const V=y.currentProgram.getUniforms();y.uniformsList=ya.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function lt(y,V){const Z=Ne.get(y);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Ht(y,V,Z,$,Y){V.isScene!==!0&&(V=je),D.resetTextureUnits();const _e=V.fog,Pe=$.isMeshStandardMaterial?V.environment:null,Fe=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Bi,Ge=($.isMeshStandardMaterial?K:A).get($.envMap||Pe),it=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),$e=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,Et=!!Z.morphAttributes.color;let Gt=vi;$.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=zt!==void 0?zt.length:0,Qe=Ne.get($),tn=v.state.lights;if(me===!0&&(Ee===!0||y!==w)){const hn=y===w&&$.id===C;ve.setState($,y,hn)}let Mt=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==tn.state.version||Qe.outputColorSpace!==Fe||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Ge||$.fog===!0&&Qe.fog!==_e||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==it||Qe.vertexTangents!==tt||Qe.morphTargets!==$e||Qe.morphNormals!==gt||Qe.morphColors!==Et||Qe.toneMapping!==Gt||Qe.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,Qe.__version=$.version);let On=Qe.currentProgram;Mt===!0&&(On=Pt($,V,Y));let sr=!1,Sn=!1,Jr=!1;const Ot=On.getUniforms(),bn=Qe.uniforms;if(we.useProgram(On.program)&&(sr=!0,Sn=!0,Jr=!0),$.id!==C&&(C=$.id,Sn=!0),sr||w!==y){we.buffers.depth.getReversed()?(xe.copy(y.projectionMatrix),Mp(xe),yp(xe),Ot.setValue(I,"projectionMatrix",xe)):Ot.setValue(I,"projectionMatrix",y.projectionMatrix),Ot.setValue(I,"viewMatrix",y.matrixWorldInverse);const mn=Ot.map.cameraPosition;mn!==void 0&&mn.setValue(I,ee.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),w!==y&&(w=y,Sn=!0,Jr=!0)}if(Y.isSkinnedMesh){Ot.setOptional(I,Y,"bindMatrix"),Ot.setOptional(I,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ot.setValue(I,"boneTexture",hn.boneTexture,D))}Y.isBatchedMesh&&(Ot.setOptional(I,Y,"batchingTexture"),Ot.setValue(I,"batchingTexture",Y._matricesTexture,D),Ot.setOptional(I,Y,"batchingIdTexture"),Ot.setValue(I,"batchingIdTexture",Y._indirectTexture,D),Ot.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(I,"batchingColorTexture",Y._colorsTexture,D));const Rn=Z.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&oe.update(Y,Z,On),(Sn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Ot.setValue(I,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=Ge,bn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(bn.envMapIntensity.value=V.environmentIntensity),Sn&&(Ot.setValue(I,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&xn(bn,Jr),_e&&$.fog===!0&&ye.refreshFogUniforms(bn,_e),ye.refreshMaterialUniforms(bn,$,Q,he,v.state.transmissionRenderTarget[y.id]),ya.upload(I,vt(Qe),bn,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ya.upload(I,vt(Qe),bn,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(I,"center",Y.center),Ot.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(I,"normalMatrix",Y.normalMatrix),Ot.setValue(I,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const hn=$.uniformsGroups;for(let mn=0,io=hn.length;mn<io;mn++){const Gi=hn[mn];f.update(Gi,On),f.bind(Gi,On)}}return On}function xn(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function Ct(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,V,Z){const $=Ne.get(y);$.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ne.get(y.texture).__webglTexture=V,Ne.get(y.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,V){const Z=Ne.get(y);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const Ke=I.createFramebuffer();this.setRenderTarget=function(y,V=0,Z=0){W=y,B=V,O=Z;let $=!0,Y=null,_e=!1,Pe=!1;if(y){const Ge=Ne.get(y);if(Ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(Ge.__hasExternalTextures)D.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const $e=y.depthTexture;if(Ge.__boundDepthTexture!==$e){if($e!==null&&Ne.has($e)&&(y.width!==$e.image.width||y.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const it=y.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const tt=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?Y=tt[V][Z]:Y=tt[V],_e=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?Y=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[Z]:Y=tt,F.copy(y.viewport),te.copy(y.scissor),J=y.scissorTest}else F.copy(Ce).multiplyScalar(Q).floor(),te.copy(Be).multiplyScalar(Q).floor(),J=et;if(Z!==0&&(Y=Ke),we.bindFramebuffer(I.FRAMEBUFFER,Y)&&$&&we.drawBuffers(y,Y),we.viewport(F),we.scissor(te),we.setScissorTest(J),_e){const Ge=Ne.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,Z)}else if(Pe){const Ge=Ne.get(y.texture),it=V;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,Z,it)}else if(y!==null&&Z!==0){const Ge=Ne.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ge.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(y,V,Z,$,Y,_e,Pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){we.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const Ge=y.texture,it=Ge.format,tt=Ge.type;if(!q.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-$&&Z>=0&&Z<=y.height-Y&&I.readPixels(V,Z,$,Y,l.convert(it),l.convert(tt),_e)}finally{const Ge=W!==null?Ne.get(W).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(y,V,Z,$,Y,_e,Pe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(V>=0&&V<=y.width-$&&Z>=0&&Z<=y.height-Y){we.bindFramebuffer(I.FRAMEBUFFER,Fe);const Ge=y.texture,it=Ge.format,tt=Ge.type;if(!q.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(V,Z,$,Y,l.convert(it),l.convert(tt),0);const gt=W!==null?Ne.get(W).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,gt);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ep(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer($e),I.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,V=null,Z=0){const $=Math.pow(2,-Z),Y=Math.floor(y.image.width*$),_e=Math.floor(y.image.height*$),Pe=V!==null?V.x:0,Fe=V!==null?V.y:0;D.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Pe,Fe,Y,_e),we.unbindTexture()};const at=I.createFramebuffer(),Je=I.createFramebuffer();this.copyTextureToTexture=function(y,V,Z=null,$=null,Y=0,_e=null){_e===null&&(Y!==0?(Ma("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=Y,Y=0):_e=0);let Pe,Fe,Ge,it,tt,$e,gt,Et,Gt;const zt=y.isCompressedTexture?y.mipmaps[_e]:y.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,Ge=Z.isBox3?Z.max.z-Z.min.z:1,it=Z.min.x,tt=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const Rn=Math.pow(2,-Y);Pe=Math.floor(zt.width*Rn),Fe=Math.floor(zt.height*Rn),y.isDataArrayTexture?Ge=zt.depth:y.isData3DTexture?Ge=Math.floor(zt.depth*Rn):Ge=1,it=0,tt=0,$e=0}$!==null?(gt=$.x,Et=$.y,Gt=$.z):(gt=0,Et=0,Gt=0);const _t=l.convert(V.format),Qe=l.convert(V.type);let tn;V.isData3DTexture?(D.setTexture3D(V,0),tn=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(D.setTexture2DArray(V,0),tn=I.TEXTURE_2D_ARRAY):(D.setTexture2D(V,0),tn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sr=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),Jr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,it),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const Ot=y.isDataArrayTexture||y.isData3DTexture,bn=V.isDataArrayTexture||V.isData3DTexture;if(y.isDepthTexture){const Rn=Ne.get(y),hn=Ne.get(V),mn=Ne.get(Rn.__renderTarget),io=Ne.get(hn.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let Gi=0;Gi<Ge;Gi++)Ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.get(y).__webglTexture,Y,$e+Gi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.get(V).__webglTexture,_e,Gt+Gi)),I.blitFramebuffer(it,tt,Pe,Fe,gt,Et,Pe,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||Ne.has(y)){const Rn=Ne.get(y),hn=Ne.get(V);we.bindFramebuffer(I.READ_FRAMEBUFFER,at),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,Je);for(let mn=0;mn<Ge;mn++)Ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,Y,$e+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,Y),bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,_e,Gt+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,_e),Y!==0?I.blitFramebuffer(it,tt,Pe,Fe,gt,Et,Pe,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):bn?I.copyTexSubImage3D(tn,_e,gt,Et,Gt+mn,it,tt,Pe,Fe):I.copyTexSubImage2D(tn,_e,gt,Et,it,tt,Pe,Fe);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bn?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(tn,_e,gt,Et,Gt,Pe,Fe,Ge,_t,Qe,zt.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(tn,_e,gt,Et,Gt,Pe,Fe,Ge,_t,zt.data):I.texSubImage3D(tn,_e,gt,Et,Gt,Pe,Fe,Ge,_t,Qe,zt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,gt,Et,Pe,Fe,_t,Qe,zt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,gt,Et,zt.width,zt.height,_t,zt.data):I.texSubImage2D(I.TEXTURE_2D,_e,gt,Et,Pe,Fe,_t,Qe,zt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jr),_e===0&&V.generateMipmaps&&I.generateMipmap(tn),we.unbindTexture()},this.copyTextureToTexture3D=function(y,V,Z=null,$=null,Y=0){return Ma('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,V,Z,$,Y)},this.initRenderTarget=function(y){Ne.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){B=0,O=0,W=null,we.reset(),h.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.2 build Fri Mar 28 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Lo=1/1e3,Zg=1e3,Kg=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Lo}get fixedDelta(){return this._fixedDelta*Lo}set fixedDelta(n){this._fixedDelta=n*Zg}get elapsed(){return this._elapsed*Lo}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Jg=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new wi;return t.setAttribute("position",new Ln(n,3)),t.setAttribute("uv",new Ln(e,2)),t})(),wn=class Fc{static get fullscreenGeometry(){return Jg}constructor(e="Pass",t=new Nc,i=new Xa){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new In(Fc.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Nc),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=bs){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Jt||t instanceof Ti||t instanceof sn||t instanceof Fc)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Qg=class extends wn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){const s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},e_=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,wl="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ld=class extends Yt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new ae(null),opacity:new ae(1)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:e_,vertexShader:wl})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},ud=class extends wn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new ld,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Jt(1,1,{minFilter:Nt,magFilter:Nt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Xt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===Dt&&(this.renderTarget.texture.colorSpace=Dt))}},ju=new pt,hd=class extends wn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=s!==null,u=a>=0;c?(n.getClearColor(ju),n.setClearColor(s,u?a:o)):u&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(ju,o):u&&n.setClearAlpha(o)}},t_=class extends wn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new hd(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){const s=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,u=this.clearPass,d=this.inverted?0:1,p=1-d;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,d,4294967295),a.stencil.setClear(p),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(n,null):(u.render(n,e),u.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},n_=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ud,this.depthTexture=null,this.passes=[],this.timer=new Kg,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new ke),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Xt&&n.outputColorSpace===Dt&&(this.inputBuffer.texture.colorSpace=Dt,this.outputBuffer.texture.colorSpace=Dt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=this.depthTexture=new Ml;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=zr,n.type=Br):n.type=xi,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){const r=this.renderer,s=r===null?new ke:r.getDrawingBufferSize(new ke),a={minFilter:Nt,magFilter:Nt,stencilBuffer:e,depthBuffer:n,type:t},o=new Jt(s.width,s.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),t===Xt&&r!==null&&r.outputColorSpace===Dt&&(o.texture.colorSpace=Dt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new ke),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.setRenderer(i),n.setSize(r.width,r.height),n.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else n.setDepthTexture(this.depthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(o,c)=>o||c.needsDepthTexture;e.reduce(s,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,c;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const u of this.passes)u.enabled&&(u.render(e,i,r,n,s),u.needsSwap&&(s&&(t.renderToScreen=u.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,r,n,s),o.setFunc(a.EQUAL,1,4294967295)),c=i,i=r,r=c),u instanceof t_?s=!0:u instanceof Qg&&(s=!1))}setSize(n,e,t){const i=this.renderer,r=i.getSize(new ke);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);const s=i.getDrawingBufferSize(new ke);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),wn.fullscreenGeometry.dispose()}},Yn={NONE:0,DEPTH:1,CONVOLUTION:2},St={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},i_=class{constructor(){this.shaderParts=new Map([[St.FRAGMENT_HEAD,null],[St.FRAGMENT_MAIN_UV,null],[St.FRAGMENT_MAIN_IMAGE,null],[St.VERTEX_HEAD,null],[St.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Yn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Bi}},No=!1,$u=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Tn:t=this.materialsFlatShadedDoubleSide;break;case Kt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Tn:t=this.materialsDoubleSide;break;case Kt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Yt))return n.clone();const e=n.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const i=n.clone();for(const r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=_i;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Kt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Tn,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Kt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Tn,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,No){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return No}static set workaroundEnabled(n){No=n}},Ui=-1,Kn=class extends yi{constructor(n,e=Ui,t=Ui,i=1){super(),this.resizable=n,this.baseSize=new ke(1,1),this.preferredSize=new ke(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new ke,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Ui?t.width=e.width:e.height!==Ui?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Ui?t.height=e.height:e.width!==Ui?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Ui),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Ui}},ot={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},r_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",s_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",a_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",o_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",c_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",l_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",u_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",h_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",d_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",f_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",p_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",m_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",v_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",g_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",__="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",x_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",S_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",E_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",M_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",y_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",T_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",w_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",A_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",b_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",R_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",C_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",P_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",D_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",U_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",I_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",L_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",N_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",O_=new Map([[ot.ADD,r_],[ot.ALPHA,s_],[ot.AVERAGE,a_],[ot.COLOR,o_],[ot.COLOR_BURN,c_],[ot.COLOR_DODGE,l_],[ot.DARKEN,u_],[ot.DIFFERENCE,h_],[ot.DIVIDE,d_],[ot.DST,null],[ot.EXCLUSION,f_],[ot.HARD_LIGHT,p_],[ot.HARD_MIX,m_],[ot.HUE,v_],[ot.INVERT,g_],[ot.INVERT_RGB,__],[ot.LIGHTEN,x_],[ot.LINEAR_BURN,S_],[ot.LINEAR_DODGE,E_],[ot.LINEAR_LIGHT,M_],[ot.LUMINOSITY,y_],[ot.MULTIPLY,T_],[ot.NEGATION,w_],[ot.NORMAL,A_],[ot.OVERLAY,b_],[ot.PIN_LIGHT,R_],[ot.REFLECT,C_],[ot.SATURATION,P_],[ot.SCREEN,D_],[ot.SOFT_LIGHT,U_],[ot.SRC,I_],[ot.SUBTRACT,L_],[ot.VIVID_LIGHT,N_]]),F_=class extends yi{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new ae(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return O_.get(this.blendFunction)}},$r=class extends yi{constructor(n,e,{attributes:t=Yn.NONE,blendFunction:i=ot.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new F_(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Bi,this._outputColorSpace=Zn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=bs){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Jt||e instanceof Ti||e instanceof sn||e instanceof wn)&&this[n].dispose()}}},Al={SMALL:1,MEDIUM:2},B_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,z_="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",H_=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],G_=class extends Yt{constructor(n=new Bt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ae(null),texelSize:new ae(new Bt),scale:new ae(1),kernel:new ae(0)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:B_,vertexShader:z_}),this.setTexelSize(n.x,n.y),this.kernelSize=Al.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return H_[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},k_=class extends wn{constructor({kernelSize:n=Al.MEDIUM,resolutionScale:e=.5,width:t=Kn.AUTO_SIZE,height:i=Kn.AUTO_SIZE,resolutionX:r=t,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Jt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Kn(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new G_,this._blurMaterial.kernelSize=n,this.copyMaterial=new ld}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,c=this.renderTargetB,u=this.blurMaterial,d=u.kernelSequence;let p=e;this.fullscreenMaterial=u;for(let m=0,g=d.length;m<g;++m){const E=(m&1)===0?o:c;u.kernel=d[m],u.inputBuffer=p.texture,n.setRenderTarget(E),n.render(s,a),p=E}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=p.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(s,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,r=t.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Xt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===Dt&&(this.renderTargetA.texture.colorSpace=Dt,this.renderTargetB.texture.colorSpace=Dt))}static get AUTO_SIZE(){return Kn.AUTO_SIZE}},V_=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,W_=class extends Yt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:zi.replace(/\D+/g,"")},uniforms:{inputBuffer:new ae(null),threshold:new ae(0),smoothing:new ae(1),range:new ae(null)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:V_,vertexShader:wl}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},X_=class extends wn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=Kn.AUTO_SIZE,height:s=Kn.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new W_(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Jt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new Kn(this,a,o,i);c.addEventListener("change",u=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Xt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Y_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,q_="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",j_=class extends Yt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ae(null),texelSize:new ae(new ke)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Y_,vertexShader:q_})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},$_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Z_="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",K_=class extends Yt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ae(null),supportBuffer:new ae(null),texelSize:new ae(new ke),radius:new ae(.85)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:$_,vertexShader:Z_})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},J_=class extends wn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Jt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new j_,this.upsamplingMaterial=new K_,this.resolution=new ke}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:c}=this,{downsamplingMipmaps:u,upsamplingMipmaps:d}=this;let p=e;this.fullscreenMaterial=o;for(let m=0,g=u.length;m<g;++m){const E=u[m];o.setSize(p.width,p.height),o.inputBuffer=p.texture,n.setRenderTarget(E),n.render(s,a),p=E}this.fullscreenMaterial=c;for(let m=d.length-1;m>=0;--m){const g=d[m];c.setSize(p.width,p.height),c.inputBuffer=p.texture,c.supportBuffer=u[m].texture,n.setRenderTarget(g),n.render(s,a),p=g}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=t;if(t!==Xt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===Dt)for(const r of i)r.texture.colorSpace=Dt}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Zu=class extends wn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,r){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Xt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Q_=class extends wn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new hd,this.overrideMaterialManager=t===null?null:new $u(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new $u(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,u=s.background,d=n.shadowMap.autoUpdate,p=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(p),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=c,s.background=u,n.shadowMap.autoUpdate=d}},vn={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},e2=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,t2=class extends Yt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new ae(null),luminanceBuffer1:new ae(null),minLuminance:new ae(.01),deltaTime:new ae(0),tau:new ae(1)},extensions:{shaderTextureLOD:!0},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:e2,vertexShader:wl})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},n2=class extends wn{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new t2,this.needsSwap=!1,this.renderTargetPrevious=new Jt(1,1,{minFilter:pn,magFilter:pn,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new ud(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,r){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},i2=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,r2=class extends $r{constructor({blendFunction:n=ot.SRC,adaptive:e=!1,mode:t=e?vn.REINHARD2_ADAPTIVE:vn.AGX,resolution:i=256,maxLuminance:r=4,whitePoint:s=r,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:u=1}={}){super("ToneMappingEffect",i2,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new ae(null)],["maxLuminance",new ae(r)],["whitePoint",new ae(s)],["middleGrey",new ae(a)],["averageLuminance",new ae(c)]])}),this.renderTargetLuminance=new Jt(1,1,{minFilter:pi,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new X_({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new n2(this.luminancePass.texture,{minLuminance:o,adaptationRate:u}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=zi.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case vn.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case vn.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case vn.CINEON:case vn.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case vn.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case vn.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case vn.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===vn.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===vn.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?vn.REINHARD2_ADAPTIVE:vn.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},s2=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,a2="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",o2=class extends Yt{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:zi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ae(null),depthBuffer:new ae(null),resolution:new ae(new ke),texelSize:new ae(new ke),cameraNear:new ae(.3),cameraFar:new ae(1e3),aspect:new ae(1),time:new ae(0)},blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=bs){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=s2.replace(St.FRAGMENT_HEAD,n.get(St.FRAGMENT_HEAD)||"").replace(St.FRAGMENT_MAIN_UV,n.get(St.FRAGMENT_MAIN_UV)||"").replace(St.FRAGMENT_MAIN_IMAGE,n.get(St.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=a2.replace(St.VERTEX_HEAD,n.get(St.VERTEX_HEAD)||"").replace(St.VERTEX_MAIN_SUPPORT,n.get(St.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof ln?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return St}};function Ku(n,e,t){for(const i of e){const r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function c2(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Yn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let u=c.get(St.FRAGMENT_HEAD)||"",d=c.get(St.FRAGMENT_MAIN_UV)||"",p=c.get(St.FRAGMENT_MAIN_IMAGE)||"",m=c.get(St.VERTEX_HEAD)||"",g=c.get(St.VERTEX_MAIN_SUPPORT)||"";const E=new Set,T=new Set;if(a&&(d+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const U=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);g+=`	${n}MainSupport(`,g+=U?`vUv);
`:`);
`;for(const b of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const R of b[1].split(/\s*,\s*/))t.varyings.add(R),E.add(R),T.add(R);for(const b of r.matchAll(o))T.add(b[1])}for(const U of i.matchAll(o))T.add(U[1]);for(const U of e.defines.keys())T.add(U.replace(/\([\w\s,]*\)/g,""));for(const U of e.uniforms.keys())T.add(U);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((U,b)=>t.uniforms.set(n+b.charAt(0).toUpperCase()+b.slice(1),U)),e.defines.forEach((U,b)=>t.defines.set(n+b.charAt(0).toUpperCase()+b.slice(1),U));const _=new Map([["fragment",i],["vertex",r]]);Ku(n,T,t.defines),Ku(n,T,_),i=_.get("fragment"),r=_.get("vertex");const v=e.blendMode;if(t.blendModes.set(v.blendFunction,v),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(p+=e.inputColorSpace===Dt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Zn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const U=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;p+=`${n}MainImage(color0, UV, `,(t.attributes&Yn.DEPTH)!==0&&U.test(i)&&(p+="depth, ",t.readDepth=!0),p+=`color1);
	`;const b=n+"BlendOpacity";t.uniforms.set(b,v.opacity),p+=`color0 = blend${v.blendFunction}(color0, color1, ${b});

	`,u+=`uniform float ${b};

`}if(u+=i+`
`,r!==null&&(m+=r+`
`),c.set(St.FRAGMENT_HEAD,u),c.set(St.FRAGMENT_MAIN_UV,d),c.set(St.FRAGMENT_MAIN_IMAGE,p),c.set(St.VERTEX_HEAD,m),c.set(St.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const U of e.extensions)t.extensions.add(U)}}var Ju=class extends wn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new o2(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new i_;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===ot.DST)n.attributes|=a.getAttributes()&Yn.DEPTH;else{if((n.attributes&a.getAttributes()&Yn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);c2("e"+e++,a,n)}let t=n.shaderParts.get(St.FRAGMENT_HEAD),i=n.shaderParts.get(St.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(St.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(n.attributes&Yn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===Dt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(St.FRAGMENT_HEAD,t),n.shaderParts.set(St.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(St.FRAGMENT_MAIN_UV,r);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=bs){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(const s of this.effects)s.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Xt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},l2=Object.defineProperty,u2=(n,e,t)=>e in n?l2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,h2=(n,e,t)=>(u2(n,e+"",t),t);class d2{constructor(){h2(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}var f2=Object.defineProperty,p2=(n,e,t)=>e in n?f2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ze=(n,e,t)=>(p2(n,typeof e!="symbol"?e+"":e,t),t);const ia=new Yh,Qu=new Oi,m2=Math.cos(70*(Math.PI/180)),eh=(n,e)=>(n%e+e)%e;class v2 extends d2{constructor(e,t){super(),Ze(this,"object"),Ze(this,"domElement"),Ze(this,"enabled",!0),Ze(this,"target",new z),Ze(this,"minDistance",0),Ze(this,"maxDistance",1/0),Ze(this,"minZoom",0),Ze(this,"maxZoom",1/0),Ze(this,"minPolarAngle",0),Ze(this,"maxPolarAngle",Math.PI),Ze(this,"minAzimuthAngle",-1/0),Ze(this,"maxAzimuthAngle",1/0),Ze(this,"enableDamping",!1),Ze(this,"dampingFactor",.05),Ze(this,"enableZoom",!0),Ze(this,"zoomSpeed",1),Ze(this,"enableRotate",!0),Ze(this,"rotateSpeed",1),Ze(this,"enablePan",!0),Ze(this,"panSpeed",1),Ze(this,"screenSpacePanning",!0),Ze(this,"keyPanSpeed",7),Ze(this,"zoomToCursor",!1),Ze(this,"autoRotate",!1),Ze(this,"autoRotateSpeed",2),Ze(this,"reverseOrbit",!1),Ze(this,"reverseHorizontalOrbit",!1),Ze(this,"reverseVerticalOrbit",!1),Ze(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Ze(this,"mouseButtons",{LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN}),Ze(this,"touches",{ONE:or.ROTATE,TWO:or.DOLLY_PAN}),Ze(this,"target0"),Ze(this,"position0"),Ze(this,"zoom0"),Ze(this,"_domElementKeyEvents",null),Ze(this,"getPolarAngle"),Ze(this,"getAzimuthalAngle"),Ze(this,"setPolarAngle"),Ze(this,"setAzimuthalAngle"),Ze(this,"getDistance"),Ze(this,"getZoomScale"),Ze(this,"listenToKeyEvents"),Ze(this,"stopListenToKeyEvents"),Ze(this,"saveState"),Ze(this,"reset"),Ze(this,"update"),Ze(this,"connect"),Ze(this,"dispose"),Ze(this,"dollyIn"),Ze(this,"dollyOut"),Ze(this,"getScale"),Ze(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=H=>{let l=eh(H,2*Math.PI),h=d.phi;h<0&&(h+=2*Math.PI),l<0&&(l+=2*Math.PI);let f=Math.abs(l-h);2*Math.PI-f<f&&(l<h?l+=2*Math.PI:h+=2*Math.PI),p.phi=l-h,i.update()},this.setAzimuthalAngle=H=>{let l=eh(H,2*Math.PI),h=d.theta;h<0&&(h+=2*Math.PI),l<0&&(l+=2*Math.PI);let f=Math.abs(l-h);2*Math.PI-f<f&&(l<h?l+=2*Math.PI:h+=2*Math.PI),p.theta=l-h,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=H=>{H.addEventListener("keydown",ye),this._domElementKeyEvents=H},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),c=o.NONE},this.update=(()=>{const H=new z,l=new z(0,1,0),h=new nr().setFromUnitVectors(e.up,l),f=h.clone().invert(),S=new z,x=new nr,M=2*Math.PI;return function(){const P=i.object.position;h.setFromUnitVectors(e.up,l),f.copy(h).invert(),H.copy(P).sub(i.target),H.applyQuaternion(h),d.setFromVector3(H),i.autoRotate&&c===o.NONE&&ne(te()),i.enableDamping?(d.theta+=p.theta*i.dampingFactor,d.phi+=p.phi*i.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let X=i.minAzimuthAngle,k=i.maxAzimuthAngle;isFinite(X)&&isFinite(k)&&(X<-Math.PI?X+=M:X>Math.PI&&(X-=M),k<-Math.PI?k+=M:k>Math.PI&&(k-=M),X<=k?d.theta=Math.max(X,Math.min(k,d.theta)):d.theta=d.theta>(X+k)/2?Math.max(X,d.theta):Math.min(k,d.theta)),d.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,d.phi)),d.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(g,i.dampingFactor):i.target.add(g),i.zoomToCursor&&C||i.object.isOrthographicCamera?d.radius=et(d.radius):d.radius=et(d.radius*m),H.setFromSpherical(d),H.applyQuaternion(f),P.copy(i.target).add(H),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,g.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let j=!1;if(i.zoomToCursor&&C){let G=null;if(i.object instanceof ln&&i.object.isPerspectiveCamera){const Ue=H.length();G=et(Ue*m);const se=Ue-G;i.object.position.addScaledVector(O,se),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ue=new z(W.x,W.y,0);Ue.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/m)),i.object.updateProjectionMatrix(),j=!0;const se=new z(W.x,W.y,0);se.unproject(i.object),i.object.position.sub(se).add(Ue),i.object.updateMatrixWorld(),G=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;G!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(G).add(i.object.position):(ia.origin.copy(i.object.position),ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ia.direction))<m2?e.lookAt(i.target):(Qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),ia.intersectPlane(Qu,i.target))))}else i.object instanceof _s&&i.object.isOrthographicCamera&&(j=m!==1,j&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/m)),i.object.updateProjectionMatrix()));return m=1,C=!1,j||S.distanceToSquared(i.object.position)>u||8*(1-x.dot(i.object.quaternion))>u?(i.dispatchEvent(r),S.copy(i.object.position),x.copy(i.object.quaternion),j=!1,!0):!1}})(),this.connect=H=>{i.domElement=H,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",A),i.domElement.addEventListener("pointercancel",ue),i.domElement.addEventListener("wheel",He)},this.dispose=()=>{var H,l,h,f,S,x;i.domElement&&(i.domElement.style.touchAction="auto"),(H=i.domElement)==null||H.removeEventListener("contextmenu",ve),(l=i.domElement)==null||l.removeEventListener("pointerdown",A),(h=i.domElement)==null||h.removeEventListener("pointercancel",ue),(f=i.domElement)==null||f.removeEventListener("wheel",He),(S=i.domElement)==null||S.ownerDocument.removeEventListener("pointermove",K),(x=i.domElement)==null||x.ownerDocument.removeEventListener("pointerup",ue),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ye)};const i=this,r={type:"change"},s={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const u=1e-6,d=new Mu,p=new Mu;let m=1;const g=new z,E=new ke,T=new ke,_=new ke,v=new ke,U=new ke,b=new ke,R=new ke,N=new ke,B=new ke,O=new z,W=new ke;let C=!1;const w=[],F={};function te(){return 2*Math.PI/60/60*i.autoRotateSpeed}function J(){return Math.pow(.95,i.zoomSpeed)}function ne(H){i.reverseOrbit||i.reverseHorizontalOrbit?p.theta+=H:p.theta-=H}function ce(H){i.reverseOrbit||i.reverseVerticalOrbit?p.phi+=H:p.phi-=H}const re=(()=>{const H=new z;return function(h,f){H.setFromMatrixColumn(f,0),H.multiplyScalar(-h),g.add(H)}})(),he=(()=>{const H=new z;return function(h,f){i.screenSpacePanning===!0?H.setFromMatrixColumn(f,1):(H.setFromMatrixColumn(f,0),H.crossVectors(i.object.up,H)),H.multiplyScalar(h),g.add(H)}})(),Q=(()=>{const H=new z;return function(h,f){const S=i.domElement;if(S&&i.object instanceof ln&&i.object.isPerspectiveCamera){const x=i.object.position;H.copy(x).sub(i.target);let M=H.length();M*=Math.tan(i.object.fov/2*Math.PI/180),re(2*h*M/S.clientHeight,i.object.matrix),he(2*f*M/S.clientHeight,i.object.matrix)}else S&&i.object instanceof _s&&i.object.isOrthographicCamera?(re(h*(i.object.right-i.object.left)/i.object.zoom/S.clientWidth,i.object.matrix),he(f*(i.object.top-i.object.bottom)/i.object.zoom/S.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ge(H){i.object instanceof ln&&i.object.isPerspectiveCamera||i.object instanceof _s&&i.object.isOrthographicCamera?m=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function de(H){ge(m/H)}function Ce(H){ge(m*H)}function Be(H){if(!i.zoomToCursor||!i.domElement)return;C=!0;const l=i.domElement.getBoundingClientRect(),h=H.clientX-l.left,f=H.clientY-l.top,S=l.width,x=l.height;W.x=h/S*2-1,W.y=-(f/x)*2+1,O.set(W.x,W.y,1).unproject(i.object).sub(i.object.position).normalize()}function et(H){return Math.max(i.minDistance,Math.min(i.maxDistance,H))}function ie(H){E.set(H.clientX,H.clientY)}function me(H){Be(H),R.set(H.clientX,H.clientY)}function Ee(H){v.set(H.clientX,H.clientY)}function xe(H){T.set(H.clientX,H.clientY),_.subVectors(T,E).multiplyScalar(i.rotateSpeed);const l=i.domElement;l&&(ne(2*Math.PI*_.x/l.clientHeight),ce(2*Math.PI*_.y/l.clientHeight)),E.copy(T),i.update()}function ze(H){N.set(H.clientX,H.clientY),B.subVectors(N,R),B.y>0?de(J()):B.y<0&&Ce(J()),R.copy(N),i.update()}function ee(H){U.set(H.clientX,H.clientY),b.subVectors(U,v).multiplyScalar(i.panSpeed),Q(b.x,b.y),v.copy(U),i.update()}function De(H){Be(H),H.deltaY<0?Ce(J()):H.deltaY>0&&de(J()),i.update()}function je(H){let l=!1;switch(H.code){case i.keys.UP:Q(0,i.keyPanSpeed),l=!0;break;case i.keys.BOTTOM:Q(0,-i.keyPanSpeed),l=!0;break;case i.keys.LEFT:Q(i.keyPanSpeed,0),l=!0;break;case i.keys.RIGHT:Q(-i.keyPanSpeed,0),l=!0;break}l&&(H.preventDefault(),i.update())}function Oe(){if(w.length==1)E.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),l=.5*(w[0].pageY+w[1].pageY);E.set(H,l)}}function Te(){if(w.length==1)v.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),l=.5*(w[0].pageY+w[1].pageY);v.set(H,l)}}function I(){const H=w[0].pageX-w[1].pageX,l=w[0].pageY-w[1].pageY,h=Math.sqrt(H*H+l*l);R.set(0,h)}function Le(){i.enableZoom&&I(),i.enablePan&&Te()}function Ye(){i.enableZoom&&I(),i.enableRotate&&Oe()}function q(H){if(w.length==1)T.set(H.pageX,H.pageY);else{const h=Re(H),f=.5*(H.pageX+h.x),S=.5*(H.pageY+h.y);T.set(f,S)}_.subVectors(T,E).multiplyScalar(i.rotateSpeed);const l=i.domElement;l&&(ne(2*Math.PI*_.x/l.clientHeight),ce(2*Math.PI*_.y/l.clientHeight)),E.copy(T)}function we(H){if(w.length==1)U.set(H.pageX,H.pageY);else{const l=Re(H),h=.5*(H.pageX+l.x),f=.5*(H.pageY+l.y);U.set(h,f)}b.subVectors(U,v).multiplyScalar(i.panSpeed),Q(b.x,b.y),v.copy(U)}function mt(H){const l=Re(H),h=H.pageX-l.x,f=H.pageY-l.y,S=Math.sqrt(h*h+f*f);N.set(0,S),B.set(0,Math.pow(N.y/R.y,i.zoomSpeed)),de(B.y),R.copy(N)}function Ne(H){i.enableZoom&&mt(H),i.enablePan&&we(H)}function D(H){i.enableZoom&&mt(H),i.enableRotate&&q(H)}function A(H){var l,h;i.enabled!==!1&&(w.length===0&&((l=i.domElement)==null||l.ownerDocument.addEventListener("pointermove",K),(h=i.domElement)==null||h.ownerDocument.addEventListener("pointerup",ue)),Ae(H),H.pointerType==="touch"?Ie(H):pe(H))}function K(H){i.enabled!==!1&&(H.pointerType==="touch"?nt(H):le(H))}function ue(H){var l,h,f;Ve(H),w.length===0&&((l=i.domElement)==null||l.releasePointerCapture(H.pointerId),(h=i.domElement)==null||h.ownerDocument.removeEventListener("pointermove",K),(f=i.domElement)==null||f.ownerDocument.removeEventListener("pointerup",ue)),i.dispatchEvent(a),c=o.NONE}function pe(H){let l;switch(H.button){case 0:l=i.mouseButtons.LEFT;break;case 1:l=i.mouseButtons.MIDDLE;break;case 2:l=i.mouseButtons.RIGHT;break;default:l=-1}switch(l){case ar.DOLLY:if(i.enableZoom===!1)return;me(H),c=o.DOLLY;break;case ar.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(i.enablePan===!1)return;Ee(H),c=o.PAN}else{if(i.enableRotate===!1)return;ie(H),c=o.ROTATE}break;case ar.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(i.enableRotate===!1)return;ie(H),c=o.ROTATE}else{if(i.enablePan===!1)return;Ee(H),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&i.dispatchEvent(s)}function le(H){if(i.enabled!==!1)switch(c){case o.ROTATE:if(i.enableRotate===!1)return;xe(H);break;case o.DOLLY:if(i.enableZoom===!1)return;ze(H);break;case o.PAN:if(i.enablePan===!1)return;ee(H);break}}function He(H){i.enabled===!1||i.enableZoom===!1||c!==o.NONE&&c!==o.ROTATE||(H.preventDefault(),i.dispatchEvent(s),De(H),i.dispatchEvent(a))}function ye(H){i.enabled===!1||i.enablePan===!1||je(H)}function Ie(H){switch(oe(H),w.length){case 1:switch(i.touches.ONE){case or.ROTATE:if(i.enableRotate===!1)return;Oe(),c=o.TOUCH_ROTATE;break;case or.PAN:if(i.enablePan===!1)return;Te(),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(i.touches.TWO){case or.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),c=o.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&i.dispatchEvent(s)}function nt(H){switch(oe(H),c){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(H),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;we(H),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(H),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;D(H),i.update();break;default:c=o.NONE}}function ve(H){i.enabled!==!1&&H.preventDefault()}function Ae(H){w.push(H)}function Ve(H){delete F[H.pointerId];for(let l=0;l<w.length;l++)if(w[l].pointerId==H.pointerId){w.splice(l,1);return}}function oe(H){let l=F[H.pointerId];l===void 0&&(l=new ke,F[H.pointerId]=l),l.set(H.pageX,H.pageY)}function Re(H){const l=H.pointerId===w[0].pointerId?w[1]:w[0];return F[l.pointerId]}this.dollyIn=(H=J())=>{Ce(H),i.update()},this.dollyOut=(H=J())=>{de(H),i.update()},this.getScale=()=>m,this.setScale=H=>{ge(H),i.update()},this.getZoomScale=()=>J(),t!==void 0&&this.connect(t),this.update()}}var g2="Invariant failed";function _2(n,e){if(!n)throw new Error(g2)}const x2=new z;function dd(n,e,t=new z,i){const{x:r,y:s,z:a}=n,o=e.x,c=e.y,u=e.z,d=r*r*o,p=s*s*c,m=a*a*u,g=d+p+m,E=Math.sqrt(1/g);if(!Number.isFinite(E))return;const T=x2.copy(n).multiplyScalar(E);if(g<((i==null?void 0:i.centerTolerance)??.1))return t.copy(T);const _=T.multiply(e).multiplyScalar(2);let v=(1-E)*n.length()/(_.length()/2),U=0,b,R,N,B;do{v-=U,b=1/(1+v*o),R=1/(1+v*c),N=1/(1+v*u);const O=b*b,W=R*R,C=N*N,w=O*b,F=W*R,te=C*N;B=d*O+p*W+m*C-1,U=B/((d*w*o+p*F*c+m*te*u)*-2)}while(Math.abs(B)>1e-12);return t.set(r*b,s*R,a*N)}const ra=new z,th=new z,nh=new z,Bc=class{constructor(e,t,i){this.radii=new z(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new z){const{x:t,y:i,z:r}=this.radii;return e.set(1/t,1/i,1/r)}reciprocalRadiiSquared(e=new z){const{x:t,y:i,z:r}=this.radii;return e.set(1/t**2,1/i**2,1/r**2)}projectOnSurface(e,t=new z,i){return dd(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new z){return t.multiplyVectors(this.reciprocalRadiiSquared(ra),e).normalize()}getEastNorthUpVectors(e,t=new z,i=new z,r=new z){this.getSurfaceNormal(e,r),t.set(-e.y,e.x,0).normalize(),i.crossVectors(r,t).normalize()}getEastNorthUpFrame(e,t=new rt){const i=ra,r=th,s=nh;return this.getEastNorthUpVectors(e,i,r,s),t.makeBasis(i,r,s).setPosition(e)}getIntersection(e,t=new z){const i=this.reciprocalRadii(ra),r=th.copy(i).multiply(e.origin),s=nh.copy(i).multiply(e.direction),a=r.lengthSq(),o=s.lengthSq(),c=r.dot(s),u=c**2-o*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(c>=0||u<0)return;const d=Math.sqrt(u),p=(-c-d)/o,m=(-c+d)/o;return e.at(Math.min(p,m),t)}if(a<1){const d=c**2-o*(a-1),p=Math.sqrt(d),m=(-c+p)/o;return e.at(m,t)}if(c<0)return e.at(-c/o,t)}getOsculatingSphereCenter(e,t,i=new z){const r=this.radii.x**2,s=ra.set(e.x/r,e.y/r,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-t).add(e))}};Bc.WGS84=new Bc(6378137,6378137,6356752314245179e-9);let Si=Bc;const sa=new z,ih=new z,us=class zc{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new zc(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<zc.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=((t==null?void 0:t.ellipsoid)??Si.WGS84).reciprocalRadiiSquared(sa),r=dd(e,i,ih,t);if(r==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=sa.multiplyVectors(r,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=sa.subVectors(e,r);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new z,t){const i=(t==null?void 0:t.ellipsoid)??Si.WGS84,r=sa.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=ih.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(r,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};us.MIN_LONGITUDE=-Math.PI,us.MAX_LONGITUDE=Math.PI,us.MIN_LATITUDE=-Math.PI/2,us.MAX_LATITUDE=Math.PI/2;let fd=us;var S2="Invariant failed";function pd(n,e){if(!n)throw new Error(S2)}let E2=class extends Hi{load(e,t,i,r){const s=new td(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{pd(a instanceof ArrayBuffer);try{t(a)}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}};const M2="This is not an object",y2="This is not a Float16Array object",rh="This constructor is not a subclass of Float16Array",md="The constructor property value is not an object",T2="Species constructor didn't return TypedArray object",w2="Derived constructor created TypedArray object which was too small length",xs="Attempting to access detached ArrayBuffer",Hc="Cannot convert undefined or null to object",Gc="Cannot mix BigInt and other types, use explicit conversions",sh="@@iterator property is not callable",ah="Reduce of empty array with no initial value",A2="The comparison function must be either a function or undefined",Oo="Offset is out of bounds";function Ut(n){return(e,...t)=>gn(n,e,t)}function Zr(n,e){return Ut(Gr(n,e).get)}const{apply:gn,construct:hs,defineProperty:b2,get:Fo,getOwnPropertyDescriptor:Gr,getPrototypeOf:Ds,has:kc,ownKeys:vd,set:oh,setPrototypeOf:gd}=Reflect,R2=Proxy,{EPSILON:C2,MAX_SAFE_INTEGER:ch,isFinite:_d,isNaN:kr}=Number,{iterator:ei,species:P2,toStringTag:bl,for:D2}=Symbol,Vr=Object,{create:qa,defineProperty:Us,freeze:U2,is:lh}=Vr,Vc=Vr.prototype,I2=Vc.__lookupGetter__?Ut(Vc.__lookupGetter__):(n,e)=>{if(n==null)throw Ft(Hc);let t=Vr(n);do{const i=Gr(t,e);if(i!==void 0)return di(i,"get")?i.get:void 0}while((t=Ds(t))!==null)},di=Vr.hasOwn||Ut(Vc.hasOwnProperty),xd=Array,Sd=xd.isArray,ja=xd.prototype,L2=Ut(ja.join),N2=Ut(ja.push),O2=Ut(ja.toLocaleString),Rl=ja[ei],F2=Ut(Rl),{abs:B2,trunc:Ed}=Math,$a=ArrayBuffer,z2=$a.isView,Md=$a.prototype,H2=Ut(Md.slice),G2=Zr(Md,"byteLength"),Wc=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,k2=Wc&&Zr(Wc.prototype,"byteLength"),Cl=Ds(Uint8Array),V2=Cl.from,Qt=Cl.prototype,W2=Qt[ei],X2=Ut(Qt.keys),Y2=Ut(Qt.values),q2=Ut(Qt.entries),j2=Ut(Qt.set),uh=Ut(Qt.reverse),$2=Ut(Qt.fill),Z2=Ut(Qt.copyWithin),hh=Ut(Qt.sort),is=Ut(Qt.slice),K2=Ut(Qt.subarray),Zt=Zr(Qt,"buffer"),ji=Zr(Qt,"byteOffset"),Tt=Zr(Qt,"length"),yd=Zr(Qt,bl),J2=Uint8Array,yn=Uint16Array,dh=(...n)=>gn(V2,yn,n),Pl=Uint32Array,Q2=Float32Array,ir=Ds([][ei]()),Za=Ut(ir.next),ex=Ut(function*(){}().next),tx=Ds(ir),nx=DataView.prototype,ix=Ut(nx.getUint16),Ft=TypeError,Bo=RangeError,Td=WeakSet,wd=Td.prototype,rx=Ut(wd.add),sx=Ut(wd.has),Ka=WeakMap,Dl=Ka.prototype,Pa=Ut(Dl.get),ax=Ut(Dl.has),Ul=Ut(Dl.set),Ad=new Ka,ox=qa(null,{next:{value:function(){const n=Pa(Ad,this);return Za(n)}},[ei]:{value:function(){return this}}});function ds(n){if(n[ei]===Rl&&ir.next===Za)return n;const e=qa(ox);return Ul(Ad,e,F2(n)),e}const bd=new Ka,Rd=qa(tx,{next:{value:function(){const n=Pa(bd,this);return ex(n)},writable:!0,configurable:!0}});for(const n of vd(ir))n!=="next"&&Us(Rd,n,Gr(ir,n));function fh(n){const e=qa(Rd);return Ul(bd,e,n),e}function Da(n){return n!==null&&typeof n=="object"||typeof n=="function"}function ph(n){return n!==null&&typeof n=="object"}function Ua(n){return yd(n)!==void 0}function Xc(n){const e=yd(n);return e==="BigInt64Array"||e==="BigUint64Array"}function cx(n){try{return Sd(n)?!1:(G2(n),!0)}catch{return!1}}function Cd(n){if(Wc===null)return!1;try{return k2(n),!0}catch{return!1}}function lx(n){return cx(n)||Cd(n)}function mh(n){return Sd(n)?n[ei]===Rl&&ir.next===Za:!1}function ux(n){return Ua(n)?n[ei]===W2&&ir.next===Za:!1}function aa(n){if(typeof n!="string")return!1;const e=+n;return n!==e+""||!_d(e)?!1:e===Ed(e)}const Ia=D2("__Float16Array__");function hx(n){if(!ph(n))return!1;const e=Ds(n);if(!ph(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!Da(t))throw Ft(md);return kc(t,Ia)}const Yc=1/C2;function dx(n){return n+Yc-Yc}const Pd=6103515625e-14,fx=65504,Dd=.0009765625,vh=Dd*Pd,px=Dd*Yc;function mx(n){const e=+n;if(!_d(e)||e===0)return e;const t=e>0?1:-1,i=B2(e);if(i<Pd)return t*dx(i/vh)*vh;const r=(1+px)*i,s=r-(r-i);return s>fx||kr(s)?t*(1/0):t*s}const Ud=new $a(4),Id=new Q2(Ud),Ld=new Pl(Ud),kn=new yn(512),Vn=new J2(512);for(let n=0;n<256;++n){const e=n-127;e<-24?(kn[n]=0,kn[n|256]=32768,Vn[n]=24,Vn[n|256]=24):e<-14?(kn[n]=1024>>-e-14,kn[n|256]=1024>>-e-14|32768,Vn[n]=-e-1,Vn[n|256]=-e-1):e<=15?(kn[n]=e+15<<10,kn[n|256]=e+15<<10|32768,Vn[n]=13,Vn[n|256]=13):e<128?(kn[n]=31744,kn[n|256]=64512,Vn[n]=24,Vn[n|256]=24):(kn[n]=31744,kn[n|256]=64512,Vn[n]=13,Vn[n|256]=13)}function qn(n){Id[0]=mx(n);const e=Ld[0],t=e>>23&511;return kn[t]+((e&8388607)>>Vn[t])}const Il=new Pl(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Il[n]=e|t}for(let n=1024;n<2048;++n)Il[n]=939524096+(n-1024<<13);const Kr=new Pl(64);for(let n=1;n<31;++n)Kr[n]=n<<23;Kr[31]=1199570944;Kr[32]=2147483648;for(let n=33;n<63;++n)Kr[n]=2147483648+(n-32<<23);Kr[63]=3347054592;const Nd=new yn(64);for(let n=1;n<64;++n)n!==32&&(Nd[n]=1024);function wt(n){const e=n>>10;return Ld[0]=Il[Nd[e]+(n&1023)]+Kr[e],Id[0]}function ci(n){const e=+n;return kr(e)||e===0?0:Ed(e)}function zo(n){const e=ci(n);return e<0?0:e<ch?e:ch}function oa(n,e){if(!Da(n))throw Ft(M2);const t=n.constructor;if(t===void 0)return e;if(!Da(t))throw Ft(md);return t[P2]??e}function Ss(n){if(Cd(n))return!1;try{return H2(n,0,0),!1}catch{}return!0}function gh(n,e){const t=kr(n),i=kr(e);if(t&&i)return 0;if(t)return 1;if(i||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){const r=lh(n,0),s=lh(e,0);if(!r&&s)return-1;if(r&&!s)return 1}return 0}const Ll=2,La=new Ka;function Ar(n){return ax(La,n)||!z2(n)&&hx(n)}function yt(n){if(!Ar(n))throw Ft(y2)}function ca(n,e){const t=Ar(n),i=Ua(n);if(!t&&!i)throw Ft(T2);if(typeof e=="number"){let r;if(t){const s=ut(n);r=Tt(s)}else r=Tt(n);if(r<e)throw Ft(w2)}if(Xc(n))throw Ft(Gc)}function ut(n){const e=Pa(La,n);if(e!==void 0){const r=Zt(e);if(Ss(r))throw Ft(xs);return e}const t=n.buffer;if(Ss(t))throw Ft(xs);const i=hs(At,[t,n.byteOffset,n.length],n.constructor);return Pa(La,i)}function _h(n){const e=Tt(n),t=[];for(let i=0;i<e;++i)t[i]=wt(n[i]);return t}const Od=new Td;for(const n of vd(Qt)){if(n===bl)continue;const e=Gr(Qt,n);di(e,"get")&&typeof e.get=="function"&&rx(Od,e.get)}const vx=U2({get(n,e,t){return aa(e)&&di(n,e)?wt(Fo(n,e)):sx(Od,I2(n,e))?Fo(n,e):Fo(n,e,t)},set(n,e,t,i){return aa(e)&&di(n,e)?oh(n,e,qn(t)):oh(n,e,t,i)},getOwnPropertyDescriptor(n,e){if(aa(e)&&di(n,e)){const t=Gr(n,e);return t.value=wt(t.value),t}return Gr(n,e)},defineProperty(n,e,t){return aa(e)&&di(n,e)&&di(t,"value")&&(t.value=qn(t.value)),b2(n,e,t)}});class At{constructor(e,t,i){let r;if(Ar(e))r=hs(yn,[ut(e)],new.target);else if(Da(e)&&!lx(e)){let a,o;if(Ua(e)){a=e,o=Tt(e);const c=Zt(e);if(Ss(c))throw Ft(xs);if(Xc(e))throw Ft(Gc);const u=new $a(o*Ll);r=hs(yn,[u],new.target)}else{const c=e[ei];if(c!=null&&typeof c!="function")throw Ft(sh);c!=null?mh(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=zo(a.length)),r=hs(yn,[o],new.target)}for(let c=0;c<o;++c)r[c]=qn(a[c])}else r=hs(yn,arguments,new.target);const s=new R2(r,vx);return Ul(La,s,r),s}static from(e,...t){const i=this;if(!kc(i,Ia))throw Ft(rh);if(i===At){if(Ar(e)&&t.length===0){const d=ut(e),p=new yn(Zt(d),ji(d),Tt(d));return new At(Zt(is(p)))}if(t.length===0)return new At(Zt(dh(e,qn)));const c=t[0],u=t[1];return new At(Zt(dh(e,function(d,...p){return qn(gn(c,this,[d,...ds(p)]))},u)))}let r,s;const a=e[ei];if(a!=null&&typeof a!="function")throw Ft(sh);if(a!=null)mh(e)?(r=e,s=e.length):ux(e)?(r=e,s=Tt(e)):(r=[...e],s=r.length);else{if(e==null)throw Ft(Hc);r=Vr(e),s=zo(r.length)}const o=new i(s);if(t.length===0)for(let c=0;c<s;++c)o[c]=r[c];else{const c=t[0],u=t[1];for(let d=0;d<s;++d)o[d]=gn(c,u,[r[d],d])}return o}static of(...e){const t=this;if(!kc(t,Ia))throw Ft(rh);const i=e.length;if(t===At){const s=new At(i),a=ut(s);for(let o=0;o<i;++o)a[o]=qn(e[o]);return s}const r=new t(i);for(let s=0;s<i;++s)r[s]=e[s];return r}keys(){yt(this);const e=ut(this);return X2(e)}values(){yt(this);const e=ut(this);return fh(function*(){for(const t of Y2(e))yield wt(t)}())}entries(){yt(this);const e=ut(this);return fh(function*(){for(const[t,i]of q2(e))yield[t,wt(i)]}())}at(e){yt(this);const t=ut(this),i=Tt(t),r=ci(e),s=r>=0?r:i+r;if(!(s<0||s>=i))return wt(t[s])}with(e,t){yt(this);const i=ut(this),r=Tt(i),s=ci(e),a=s>=0?s:r+s,o=+t;if(a<0||a>=r)throw Bo(Oo);const c=new yn(Zt(i),ji(i),Tt(i)),u=new At(Zt(is(c))),d=ut(u);return d[a]=qn(o),u}map(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0],a=oa(i,At);if(a===At){const c=new At(r),u=ut(c);for(let d=0;d<r;++d){const p=wt(i[d]);u[d]=qn(gn(e,s,[p,d,this]))}return c}const o=new a(r);ca(o,r);for(let c=0;c<r;++c){const u=wt(i[c]);o[c]=gn(e,s,[u,c,this])}return o}filter(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0],a=[];for(let u=0;u<r;++u){const d=wt(i[u]);gn(e,s,[d,u,this])&&N2(a,d)}const o=oa(i,At),c=new o(a);return ca(c),c}reduce(e,...t){yt(this);const i=ut(this),r=Tt(i);if(r===0&&t.length===0)throw Ft(ah);let s,a;t.length===0?(s=wt(i[0]),a=1):(s=t[0],a=0);for(let o=a;o<r;++o)s=e(s,wt(i[o]),o,this);return s}reduceRight(e,...t){yt(this);const i=ut(this),r=Tt(i);if(r===0&&t.length===0)throw Ft(ah);let s,a;t.length===0?(s=wt(i[r-1]),a=r-2):(s=t[0],a=r-1);for(let o=a;o>=0;--o)s=e(s,wt(i[o]),o,this);return s}forEach(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=0;a<r;++a)gn(e,s,[wt(i[a]),a,this])}find(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=0;a<r;++a){const o=wt(i[a]);if(gn(e,s,[o,a,this]))return o}}findIndex(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=0;a<r;++a){const o=wt(i[a]);if(gn(e,s,[o,a,this]))return a}return-1}findLast(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=r-1;a>=0;--a){const o=wt(i[a]);if(gn(e,s,[o,a,this]))return o}}findLastIndex(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=r-1;a>=0;--a){const o=wt(i[a]);if(gn(e,s,[o,a,this]))return a}return-1}every(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=0;a<r;++a)if(!gn(e,s,[wt(i[a]),a,this]))return!1;return!0}some(e,...t){yt(this);const i=ut(this),r=Tt(i),s=t[0];for(let a=0;a<r;++a)if(gn(e,s,[wt(i[a]),a,this]))return!0;return!1}set(e,...t){yt(this);const i=ut(this),r=ci(t[0]);if(r<0)throw Bo(Oo);if(e==null)throw Ft(Hc);if(Xc(e))throw Ft(Gc);if(Ar(e))return j2(ut(this),ut(e),r);if(Ua(e)){const c=Zt(e);if(Ss(c))throw Ft(xs)}const s=Tt(i),a=Vr(e),o=zo(a.length);if(r===1/0||o+r>s)throw Bo(Oo);for(let c=0;c<o;++c)i[c+r]=qn(a[c])}reverse(){yt(this);const e=ut(this);return uh(e),this}toReversed(){yt(this);const e=ut(this),t=new yn(Zt(e),ji(e),Tt(e)),i=new At(Zt(is(t))),r=ut(i);return uh(r),i}fill(e,...t){yt(this);const i=ut(this);return $2(i,qn(e),...ds(t)),this}copyWithin(e,t,...i){yt(this);const r=ut(this);return Z2(r,e,t,...ds(i)),this}sort(e){yt(this);const t=ut(this),i=e!==void 0?e:gh;return hh(t,(r,s)=>i(wt(r),wt(s))),this}toSorted(e){yt(this);const t=ut(this);if(e!==void 0&&typeof e!="function")throw new Ft(A2);const i=e!==void 0?e:gh,r=new yn(Zt(t),ji(t),Tt(t)),s=new At(Zt(is(r))),a=ut(s);return hh(a,(o,c)=>i(wt(o),wt(c))),s}slice(e,t){yt(this);const i=ut(this),r=oa(i,At);if(r===At){const E=new yn(Zt(i),ji(i),Tt(i));return new At(Zt(is(E,e,t)))}const s=Tt(i),a=ci(e),o=t===void 0?s:ci(t);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let u;o===-1/0?u=0:o<0?u=s+o>0?s+o:0:u=s<o?s:o;const d=u-c>0?u-c:0,p=new r(d);if(ca(p,d),d===0)return p;const m=Zt(i);if(Ss(m))throw Ft(xs);let g=0;for(;c<u;)p[g]=wt(i[c]),++c,++g;return p}subarray(e,t){yt(this);const i=ut(this),r=oa(i,At),s=new yn(Zt(i),ji(i),Tt(i)),a=K2(s,e,t),o=new r(Zt(a),ji(a),Tt(a));return ca(o),o}indexOf(e,...t){yt(this);const i=ut(this),r=Tt(i);let s=ci(t[0]);if(s===1/0)return-1;s<0&&(s+=r,s<0&&(s=0));for(let a=s;a<r;++a)if(di(i,a)&&wt(i[a])===e)return a;return-1}lastIndexOf(e,...t){yt(this);const i=ut(this),r=Tt(i);let s=t.length>=1?ci(t[0]):r-1;if(s===-1/0)return-1;s>=0?s=s<r-1?s:r-1:s+=r;for(let a=s;a>=0;--a)if(di(i,a)&&wt(i[a])===e)return a;return-1}includes(e,...t){yt(this);const i=ut(this),r=Tt(i);let s=ci(t[0]);if(s===1/0)return!1;s<0&&(s+=r,s<0&&(s=0));const a=kr(e);for(let o=s;o<r;++o){const c=wt(i[o]);if(a&&kr(c)||c===e)return!0}return!1}join(e){yt(this);const t=ut(this),i=_h(t);return L2(i,e)}toLocaleString(...e){yt(this);const t=ut(this),i=_h(t);return O2(i,...ds(e))}get[bl](){if(Ar(this))return"Float16Array"}}Us(At,"BYTES_PER_ELEMENT",{value:Ll});Us(At,Ia,{});gd(At,Cl);const Na=At.prototype;Us(Na,"BYTES_PER_ELEMENT",{value:Ll});Us(Na,ei,{value:Na.values,writable:!0,configurable:!0});gd(Na,Qt);function gx(n,e,...t){return wt(ix(n,e,...ds(t)))}function _x(n){return n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof At||n instanceof Float32Array||n instanceof Float64Array}class xx extends Hi{load(e,t,i,r){const s=new E2(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{t(this.parseTypedArray(a))}catch(o){r!=null?r(o):console.error(o),this.manager.itemError(e)}},i,r)}}function Sx(n){return class extends xx{constructor(){super(...arguments),this.parseTypedArray=n}}}function Ex(n){const e=n instanceof Int8Array?ll:n instanceof Uint8Array||n instanceof Uint8ClampedArray?Xt:n instanceof Int16Array?ul:n instanceof Uint16Array?Fr:n instanceof Int32Array?Va:n instanceof Uint32Array?xi:n instanceof At?Vt:n instanceof Float32Array||n instanceof Float64Array?Wt:null;return pd(e!=null),e}const Mx={format:_n,minFilter:Nt,magFilter:Nt};class yx extends Hi{constructor(){super(...arguments),this.parameters={}}load(e,t,i,r){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof At?new Uint16Array(o.buffer):o;const{width:c,height:u,depth:d,...p}=this.parameters;c!=null&&(s.image.width=c),u!=null&&(s.image.height=u),"depth"in s.image&&d!=null&&(s.image.depth=d),s.type=Ex(o),Object.assign(s,p),s.needsUpdate=!0,t(s)},i,r)}}function Fd(n,e,t){return class extends yx{constructor(){super(...arguments),this.Texture=n,this.TypedArrayLoader=Sx(e),this.parameters={...Mx,...t}}}}function Tx(n,e){return Fd(xl,n,e)}function wx(n,e){return Fd(ed,n,e)}function Ax(n,e){return new(Tx(n,e))}function xh(n,e){return new(wx(n,e))}const Oa=gl.clamp,Bd=gl.degToRad;function bx(n,e,t,i=0,r=1){return gl.mapLinear(n,e,t,i,r)}function Rx(n){return Math.min(Math.max(n,0),1)}function en(n){return(e,t)=>{e instanceof Ti?Object.defineProperty(e,t,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[n])!=null},set(i){var r;i!==this[t]&&(i?(this.defines??(this.defines={}),this.defines[n]="1"):(r=this.defines)==null||delete r[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(i){i!==this[t]&&(i?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function Cx(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,r)=>{i instanceof Ti?Object.defineProperty(i,r,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[n];return a!=null?parseInt(a):0},set(s){const a=this[r];s!==a&&(this.defines??(this.defines={}),this.defines[n]=Oa(s,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,r,{enumerable:!0,get(){const s=this.defines.get(n);return s!=null?parseInt(s):0},set(s){const a=this[r];s!==a&&(this.defines.set(n,Oa(s,e,t).toFixed(0)),this.setChanged())}})}}const Px=parseInt(zi.replace(/\D+/g,""));var Dn=Uint8Array,er=Uint16Array,qc=Uint32Array,zd=new Dn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Hd=new Dn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dx=new Dn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gd=function(n,e){for(var t=new er(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new qc(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return[t,r]},kd=Gd(zd,2),Vd=kd[0],Ux=kd[1];Vd[28]=258,Ux[258]=28;var Ix=Gd(Hd,0),Lx=Ix[0],Wd=new er(32768);for(var It=0;It<32768;++It){var Ii=(It&43690)>>>1|(It&21845)<<1;Ii=(Ii&52428)>>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>>4|(Ii&3855)<<4,Wd[It]=((Ii&65280)>>>8|(Ii&255)<<8)>>>1}var Es=function(n,e,t){for(var i=n.length,r=0,s=new er(e);r<i;++r)++s[n[r]-1];var a=new er(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;{o=new er(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],d=e-n[r],p=a[n[r]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)o[Wd[p]>>>c]=u}return o},Is=new Dn(288);for(var It=0;It<144;++It)Is[It]=8;for(var It=144;It<256;++It)Is[It]=9;for(var It=256;It<280;++It)Is[It]=7;for(var It=280;It<288;++It)Is[It]=8;var Xd=new Dn(32);for(var It=0;It<32;++It)Xd[It]=5;var Nx=Es(Is,9),Ox=Es(Xd,5),Ho=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Hn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Go=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},Fx=function(n){return(n/8|0)+(n&7&&1)},Bx=function(n,e,t){(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof er?er:n instanceof qc?qc:Dn)(t-e);return i.set(n.subarray(e,t)),i},zx=function(n,e,t){var i=n.length;if(!i||t&&!t.l&&i<5)return e||new Dn(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Dn(i*3));var a=function(Ee){var xe=e.length;if(Ee>xe){var ze=new Dn(Math.max(xe*2,Ee));ze.set(e),e=ze}},o=t.f||0,c=t.p||0,u=t.b||0,d=t.l,p=t.d,m=t.m,g=t.n,E=i*8;do{if(!d){t.f=o=Hn(n,c,1);var T=Hn(n,c+1,3);if(c+=3,T)if(T==1)d=Nx,p=Ox,m=9,g=5;else if(T==2){var _=Hn(n,c,31)+257,v=Hn(n,c+10,15)+4,U=_+Hn(n,c+5,31)+1;c+=14;for(var b=new Dn(U),R=new Dn(19),N=0;N<v;++N)R[Dx[N]]=Hn(n,c+N*3,7);c+=v*3;for(var B=Ho(R),O=(1<<B)-1,W=Es(R,B),N=0;N<U;){var C=W[Hn(n,c,O)];c+=C&15;var w=C>>>4;if(w<16)b[N++]=w;else{var F=0,te=0;for(w==16?(te=3+Hn(n,c,3),c+=2,F=b[N-1]):w==17?(te=3+Hn(n,c,7),c+=3):w==18&&(te=11+Hn(n,c,127),c+=7);te--;)b[N++]=F}}var J=b.subarray(0,_),ne=b.subarray(_);m=Ho(J),g=Ho(ne),d=Es(J,m),p=Es(ne,g)}else throw"invalid block type";else{var w=Fx(c)+4,ce=n[w-4]|n[w-3]<<8,re=w+ce;if(re>i){if(s)throw"unexpected EOF";break}r&&a(u+ce),e.set(n.subarray(w,re),u),t.b=u+=ce,t.p=c=re*8;continue}if(c>E){if(s)throw"unexpected EOF";break}}r&&a(u+131072);for(var he=(1<<m)-1,Q=(1<<g)-1,ge=c;;ge=c){var F=d[Go(n,c)&he],de=F>>>4;if(c+=F&15,c>E){if(s)throw"unexpected EOF";break}if(!F)throw"invalid length/literal";if(de<256)e[u++]=de;else if(de==256){ge=c,d=null;break}else{var Ce=de-254;if(de>264){var N=de-257,Be=zd[N];Ce=Hn(n,c,(1<<Be)-1)+Vd[N],c+=Be}var et=p[Go(n,c)&Q],ie=et>>>4;if(!et)throw"invalid distance";c+=et&15;var ne=Lx[ie];if(ie>3){var Be=Hd[ie];ne+=Go(n,c)&(1<<Be)-1,c+=Be}if(c>E){if(s)throw"unexpected EOF";break}r&&a(u+131072);for(var me=u+Ce;u<me;u+=4)e[u]=e[u-ne],e[u+1]=e[u+1-ne],e[u+2]=e[u+2-ne],e[u+3]=e[u+3-ne];u=me}}t.l=d,t.p=ge,t.b=u,d&&(o=1,t.m=m,t.d=p,t.n=g)}while(!o);return u==e.length?e:Bx(e,0,u)},Hx=new Dn(0),Gx=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function la(n,e){return zx((Gx(n),n.subarray(2,-4)),e)}var kx=typeof TextDecoder<"u"&&new TextDecoder,Vx=0;try{kx.decode(Hx,{stream:!0}),Vx=1}catch{}const rs=Px>=152;class Wx extends nd{constructor(e){super(e),this.type=Vt}parse(e){const t=Math.pow(2.7182818,2.2);function i(l,h){for(var f=0,S=0;S<65536;++S)(S==0||l[S>>3]&1<<(S&7))&&(h[f++]=S);for(var x=f-1;f<65536;)h[f++]=0;return x}function r(l){for(var h=0;h<16384;h++)l[h]={},l[h].len=0,l[h].lit=0,l[h].p=null}const s={l:0,c:0,lc:0};function a(l,h,f,S,x){for(;f<l;)h=h<<8|Oe(S,x),f+=8;f-=l,s.l=h>>f&(1<<l)-1,s.c=h,s.lc=f}const o=new Array(59);function c(l){for(var h=0;h<=58;++h)o[h]=0;for(var h=0;h<65537;++h)o[l[h]]+=1;for(var f=0,h=58;h>0;--h){var S=f+o[h]>>1;o[h]=f,f=S}for(var h=0;h<65537;++h){var x=l[h];x>0&&(l[h]=x|o[x]++<<6)}}function u(l,h,f,S,x,M,L){for(var P=f,X=0,k=0;x<=M;x++){if(P.value-f.value>S)return!1;a(6,X,k,l,P);var j=s.l;if(X=s.c,k=s.lc,L[x]=j,j==63){if(P.value-f.value>S)throw"Something wrong with hufUnpackEncTable";a(8,X,k,l,P);var G=s.l+6;if(X=s.c,k=s.lc,x+G>M+1)throw"Something wrong with hufUnpackEncTable";for(;G--;)L[x++]=0;x--}else if(j>=59){var G=j-59+2;if(x+G>M+1)throw"Something wrong with hufUnpackEncTable";for(;G--;)L[x++]=0;x--}}c(L)}function d(l){return l&63}function p(l){return l>>6}function m(l,h,f,S){for(;h<=f;h++){var x=p(l[h]),M=d(l[h]);if(x>>M)throw"Invalid table entry";if(M>14){var L=S[x>>M-14];if(L.len)throw"Invalid table entry";if(L.lit++,L.p){var P=L.p;L.p=new Array(L.lit);for(var X=0;X<L.lit-1;++X)L.p[X]=P[X]}else L.p=new Array(1);L.p[L.lit-1]=h}else if(M)for(var k=0,X=1<<14-M;X>0;X--){var L=S[(x<<14-M)+k];if(L.len||L.p)throw"Invalid table entry";L.len=M,L.lit=h,k++}}return!0}const g={c:0,lc:0};function E(l,h,f,S){l=l<<8|Oe(f,S),h+=8,g.c=l,g.lc=h}const T={c:0,lc:0};function _(l,h,f,S,x,M,L,P,X,k){if(l==h){S<8&&(E(f,S,x,L),f=g.c,S=g.lc),S-=8;var j=f>>S,j=new Uint8Array([j])[0];if(X.value+j>k)return!1;for(var G=P[X.value-1];j-- >0;)P[X.value++]=G}else if(X.value<k)P[X.value++]=l;else return!1;T.c=f,T.lc=S}function v(l){return l&65535}function U(l){var h=v(l);return h>32767?h-65536:h}const b={a:0,b:0};function R(l,h){var f=U(l),S=U(h),x=S,M=f+(x&1)+(x>>1),L=M,P=M-x;b.a=L,b.b=P}function N(l,h){var f=v(l),S=v(h),x=f-(S>>1)&65535,M=S+x-32768&65535;b.a=M,b.b=x}function B(l,h,f,S,x,M,L){for(var P=L<16384,X=f>x?x:f,k=1,j;k<=X;)k<<=1;for(k>>=1,j=k,k>>=1;k>=1;){for(var G=0,Ue=G+M*(x-j),se=M*k,fe=M*j,Se=S*k,Me=S*j,We,st,qe,ft;G<=Ue;G+=fe){for(var Xe=G,Pt=G+S*(f-j);Xe<=Pt;Xe+=Me){var vt=Xe+Se,lt=Xe+se,Ht=lt+Se;P?(R(l[Xe+h],l[lt+h]),We=b.a,qe=b.b,R(l[vt+h],l[Ht+h]),st=b.a,ft=b.b,R(We,st),l[Xe+h]=b.a,l[vt+h]=b.b,R(qe,ft),l[lt+h]=b.a,l[Ht+h]=b.b):(N(l[Xe+h],l[lt+h]),We=b.a,qe=b.b,N(l[vt+h],l[Ht+h]),st=b.a,ft=b.b,N(We,st),l[Xe+h]=b.a,l[vt+h]=b.b,N(qe,ft),l[lt+h]=b.a,l[Ht+h]=b.b)}if(f&k){var lt=Xe+se;P?R(l[Xe+h],l[lt+h]):N(l[Xe+h],l[lt+h]),We=b.a,l[lt+h]=b.b,l[Xe+h]=We}}if(x&k)for(var Xe=G,Pt=G+S*(f-j);Xe<=Pt;Xe+=Me){var vt=Xe+Se;P?R(l[Xe+h],l[vt+h]):N(l[Xe+h],l[vt+h]),We=b.a,l[vt+h]=b.b,l[Xe+h]=We}j=k,k>>=1}return G}function O(l,h,f,S,x,M,L,P,X,k){for(var j=0,G=0,Ue=P,se=Math.trunc(x.value+(M+7)/8);x.value<se;)for(E(j,G,f,x),j=g.c,G=g.lc;G>=14;){var fe=j>>G-14&16383,Se=h[fe];if(Se.len)G-=Se.len,_(Se.lit,L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;else{if(!Se.p)throw"hufDecode issues";var Me;for(Me=0;Me<Se.lit;Me++){for(var We=d(l[Se.p[Me]]);G<We&&x.value<se;)E(j,G,f,x),j=g.c,G=g.lc;if(G>=We&&p(l[Se.p[Me]])==(j>>G-We&(1<<We)-1)){G-=We,_(Se.p[Me],L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;break}}if(Me==Se.lit)throw"hufDecode issues"}}var st=8-M&7;for(j>>=st,G-=st;G>0;){var Se=h[j<<14-G&16383];if(Se.len)G-=Se.len,_(Se.lit,L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;else throw"hufDecode issues"}return!0}function W(l,h,f,S,x,M){var L={value:0},P=f.value,X=je(h,f),k=je(h,f);f.value+=4;var j=je(h,f);if(f.value+=4,X<0||X>=65537||k<0||k>=65537)throw"Something wrong with HUF_ENCSIZE";var G=new Array(65537),Ue=new Array(16384);r(Ue);var se=S-(f.value-P);if(u(l,h,f,se,X,k,G),j>8*(S-(f.value-P)))throw"Something wrong with hufUncompress";m(G,X,k,Ue),O(G,Ue,l,h,f,j,k,M,x,L)}function C(l,h,f){for(var S=0;S<f;++S)h[S]=l[h[S]]}function w(l){for(var h=1;h<l.length;h++){var f=l[h-1]+l[h]-128;l[h]=f}}function F(l,h){for(var f=0,S=Math.floor((l.length+1)/2),x=0,M=l.length-1;!(x>M||(h[x++]=l[f++],x>M));)h[x++]=l[S++]}function te(l){for(var h=l.byteLength,f=new Array,S=0,x=new DataView(l);h>0;){var M=x.getInt8(S++);if(M<0){var L=-M;h-=L+1;for(var P=0;P<L;P++)f.push(x.getUint8(S++))}else{var L=M;h-=2;for(var X=x.getUint8(S++),P=0;P<L+1;P++)f.push(X)}}return f}function J(l,h,f,S,x,M){var L=new DataView(M.buffer),P=f[l.idx[0]].width,X=f[l.idx[0]].height,k=3,j=Math.floor(P/8),G=Math.ceil(P/8),Ue=Math.ceil(X/8),se=P-(G-1)*8,fe=X-(Ue-1)*8,Se={value:0},Me=new Array(k),We=new Array(k),st=new Array(k),qe=new Array(k),ft=new Array(k);for(let Ke=0;Ke<k;++Ke)ft[Ke]=h[l.idx[Ke]],Me[Ke]=Ke<1?0:Me[Ke-1]+G*Ue,We[Ke]=new Float32Array(64),st[Ke]=new Uint16Array(64),qe[Ke]=new Uint16Array(G*64);for(let Ke=0;Ke<Ue;++Ke){var Xe=8;Ke==Ue-1&&(Xe=fe);var Pt=8;for(let Je=0;Je<G;++Je){Je==G-1&&(Pt=se);for(let y=0;y<k;++y)st[y].fill(0),st[y][0]=x[Me[y]++],ne(Se,S,st[y]),ce(st[y],We[y]),re(We[y]);he(We);for(let y=0;y<k;++y)Q(We[y],qe[y],Je*64)}let at=0;for(let Je=0;Je<k;++Je){const y=f[l.idx[Je]].type;for(let V=8*Ke;V<8*Ke+Xe;++V){at=ft[Je][V];for(let Z=0;Z<j;++Z){const $=Z*64+(V&7)*8;L.setUint16(at+0*2*y,qe[Je][$+0],!0),L.setUint16(at+1*2*y,qe[Je][$+1],!0),L.setUint16(at+2*2*y,qe[Je][$+2],!0),L.setUint16(at+3*2*y,qe[Je][$+3],!0),L.setUint16(at+4*2*y,qe[Je][$+4],!0),L.setUint16(at+5*2*y,qe[Je][$+5],!0),L.setUint16(at+6*2*y,qe[Je][$+6],!0),L.setUint16(at+7*2*y,qe[Je][$+7],!0),at+=8*2*y}}if(j!=G)for(let V=8*Ke;V<8*Ke+Xe;++V){const Z=ft[Je][V]+8*j*2*y,$=j*64+(V&7)*8;for(let Y=0;Y<Pt;++Y)L.setUint16(Z+Y*2*y,qe[Je][$+Y],!0)}}}for(var vt=new Uint16Array(P),L=new DataView(M.buffer),lt=0;lt<k;++lt){f[l.idx[lt]].decoded=!0;var Ht=f[l.idx[lt]].type;if(f[lt].type==2)for(var xn=0;xn<X;++xn){const at=ft[lt][xn];for(var Ct=0;Ct<P;++Ct)vt[Ct]=L.getUint16(at+Ct*2*Ht,!0);for(var Ct=0;Ct<P;++Ct)L.setFloat32(at+Ct*2*Ht,q(vt[Ct]),!0)}}}function ne(l,h,f){for(var S,x=1;x<64;)S=h[l.value],S==65280?x=64:S>>8==255?x+=S&255:(f[x]=S,x++),l.value++}function ce(l,h){h[0]=q(l[0]),h[1]=q(l[1]),h[2]=q(l[5]),h[3]=q(l[6]),h[4]=q(l[14]),h[5]=q(l[15]),h[6]=q(l[27]),h[7]=q(l[28]),h[8]=q(l[2]),h[9]=q(l[4]),h[10]=q(l[7]),h[11]=q(l[13]),h[12]=q(l[16]),h[13]=q(l[26]),h[14]=q(l[29]),h[15]=q(l[42]),h[16]=q(l[3]),h[17]=q(l[8]),h[18]=q(l[12]),h[19]=q(l[17]),h[20]=q(l[25]),h[21]=q(l[30]),h[22]=q(l[41]),h[23]=q(l[43]),h[24]=q(l[9]),h[25]=q(l[11]),h[26]=q(l[18]),h[27]=q(l[24]),h[28]=q(l[31]),h[29]=q(l[40]),h[30]=q(l[44]),h[31]=q(l[53]),h[32]=q(l[10]),h[33]=q(l[19]),h[34]=q(l[23]),h[35]=q(l[32]),h[36]=q(l[39]),h[37]=q(l[45]),h[38]=q(l[52]),h[39]=q(l[54]),h[40]=q(l[20]),h[41]=q(l[22]),h[42]=q(l[33]),h[43]=q(l[38]),h[44]=q(l[46]),h[45]=q(l[51]),h[46]=q(l[55]),h[47]=q(l[60]),h[48]=q(l[21]),h[49]=q(l[34]),h[50]=q(l[37]),h[51]=q(l[47]),h[52]=q(l[50]),h[53]=q(l[56]),h[54]=q(l[59]),h[55]=q(l[61]),h[56]=q(l[35]),h[57]=q(l[36]),h[58]=q(l[48]),h[59]=q(l[49]),h[60]=q(l[57]),h[61]=q(l[58]),h[62]=q(l[62]),h[63]=q(l[63])}function re(l){const h=.5*Math.cos(.7853975),f=.5*Math.cos(3.14159/16),S=.5*Math.cos(3.14159/8),x=.5*Math.cos(3*3.14159/16),M=.5*Math.cos(5*3.14159/16),L=.5*Math.cos(3*3.14159/8),P=.5*Math.cos(7*3.14159/16);for(var X=new Array(4),k=new Array(4),j=new Array(4),G=new Array(4),Ue=0;Ue<8;++Ue){var se=Ue*8;X[0]=S*l[se+2],X[1]=L*l[se+2],X[2]=S*l[se+6],X[3]=L*l[se+6],k[0]=f*l[se+1]+x*l[se+3]+M*l[se+5]+P*l[se+7],k[1]=x*l[se+1]-P*l[se+3]-f*l[se+5]-M*l[se+7],k[2]=M*l[se+1]-f*l[se+3]+P*l[se+5]+x*l[se+7],k[3]=P*l[se+1]-M*l[se+3]+x*l[se+5]-f*l[se+7],j[0]=h*(l[se+0]+l[se+4]),j[3]=h*(l[se+0]-l[se+4]),j[1]=X[0]+X[3],j[2]=X[1]-X[2],G[0]=j[0]+j[1],G[1]=j[3]+j[2],G[2]=j[3]-j[2],G[3]=j[0]-j[1],l[se+0]=G[0]+k[0],l[se+1]=G[1]+k[1],l[se+2]=G[2]+k[2],l[se+3]=G[3]+k[3],l[se+4]=G[3]-k[3],l[se+5]=G[2]-k[2],l[se+6]=G[1]-k[1],l[se+7]=G[0]-k[0]}for(var fe=0;fe<8;++fe)X[0]=S*l[16+fe],X[1]=L*l[16+fe],X[2]=S*l[48+fe],X[3]=L*l[48+fe],k[0]=f*l[8+fe]+x*l[24+fe]+M*l[40+fe]+P*l[56+fe],k[1]=x*l[8+fe]-P*l[24+fe]-f*l[40+fe]-M*l[56+fe],k[2]=M*l[8+fe]-f*l[24+fe]+P*l[40+fe]+x*l[56+fe],k[3]=P*l[8+fe]-M*l[24+fe]+x*l[40+fe]-f*l[56+fe],j[0]=h*(l[fe]+l[32+fe]),j[3]=h*(l[fe]-l[32+fe]),j[1]=X[0]+X[3],j[2]=X[1]-X[2],G[0]=j[0]+j[1],G[1]=j[3]+j[2],G[2]=j[3]-j[2],G[3]=j[0]-j[1],l[0+fe]=G[0]+k[0],l[8+fe]=G[1]+k[1],l[16+fe]=G[2]+k[2],l[24+fe]=G[3]+k[3],l[32+fe]=G[3]-k[3],l[40+fe]=G[2]-k[2],l[48+fe]=G[1]-k[1],l[56+fe]=G[0]-k[0]}function he(l){for(var h=0;h<64;++h){var f=l[0][h],S=l[1][h],x=l[2][h];l[0][h]=f+1.5747*x,l[1][h]=f-.1873*S-.4682*x,l[2][h]=f+1.8556*S}}function Q(l,h,f){for(var S=0;S<64;++S)h[f+S]=Ca.toHalfFloat(ge(l[S]))}function ge(l){return l<=1?Math.sign(l)*Math.pow(Math.abs(l),2.2):Math.sign(l)*Math.pow(t,Math.abs(l)-1)}function de(l){return new DataView(l.array.buffer,l.offset.value,l.size)}function Ce(l){var h=l.viewer.buffer.slice(l.offset.value,l.offset.value+l.size),f=new Uint8Array(te(h)),S=new Uint8Array(f.length);return w(f),F(f,S),new DataView(S.buffer)}function Be(l){var h=l.array.slice(l.offset.value,l.offset.value+l.size),f=la(h),S=new Uint8Array(f.length);return w(f),F(f,S),new DataView(S.buffer)}function et(l){for(var h=l.viewer,f={value:l.offset.value},S=new Uint16Array(l.width*l.scanlineBlockSize*(l.channels*l.type)),x=new Uint8Array(8192),M=0,L=new Array(l.channels),P=0;P<l.channels;P++)L[P]={},L[P].start=M,L[P].end=L[P].start,L[P].nx=l.width,L[P].ny=l.lines,L[P].size=l.type,M+=L[P].nx*L[P].ny*L[P].size;var X=we(h,f),k=we(h,f);if(k>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(X<=k)for(var P=0;P<k-X+1;P++)x[P+X]=Te(h,f);var j=new Uint16Array(65536),G=i(x,j),Ue=je(h,f);W(l.array,h,f,Ue,S,M);for(var P=0;P<l.channels;++P)for(var se=L[P],fe=0;fe<L[P].size;++fe)B(S,se.start+fe,se.nx,se.size,se.ny,se.nx*se.size,G);C(j,S,M);for(var Se=0,Me=new Uint8Array(S.buffer.byteLength),We=0;We<l.lines;We++)for(var st=0;st<l.channels;st++){var se=L[st],qe=se.nx*se.size,ft=new Uint8Array(S.buffer,se.end*2,qe*2);Me.set(ft,Se),Se+=qe*2,se.end+=qe}return new DataView(Me.buffer)}function ie(l){var h=l.array.slice(l.offset.value,l.offset.value+l.size),f=la(h);const S=l.lines*l.channels*l.width,x=l.type==1?new Uint16Array(S):new Uint32Array(S);let M=0,L=0;const P=new Array(4);for(let X=0;X<l.lines;X++)for(let k=0;k<l.channels;k++){let j=0;switch(l.type){case 1:P[0]=M,P[1]=P[0]+l.width,M=P[1]+l.width;for(let G=0;G<l.width;++G){const Ue=f[P[0]++]<<8|f[P[1]++];j+=Ue,x[L]=j,L++}break;case 2:P[0]=M,P[1]=P[0]+l.width,P[2]=P[1]+l.width,M=P[2]+l.width;for(let G=0;G<l.width;++G){const Ue=f[P[0]++]<<24|f[P[1]++]<<16|f[P[2]++]<<8;j+=Ue,x[L]=j,L++}break}}return new DataView(x.buffer)}function me(l){var h=l.viewer,f={value:l.offset.value},S=new Uint8Array(l.width*l.lines*(l.channels*l.type*2)),x={version:I(h,f),unknownUncompressedSize:I(h,f),unknownCompressedSize:I(h,f),acCompressedSize:I(h,f),dcCompressedSize:I(h,f),rleCompressedSize:I(h,f),rleUncompressedSize:I(h,f),rleRawSize:I(h,f),totalAcUncompressedCount:I(h,f),totalDcUncompressedCount:I(h,f),acCompression:I(h,f)};if(x.version<2)throw"EXRLoader.parse: "+Ve.compression+" version "+x.version+" is unsupported";for(var M=new Array,L=we(h,f)-2;L>0;){var P=Ee(h.buffer,f),X=Te(h,f),k=X>>2&3,j=(X>>4)-1,G=new Int8Array([j])[0],Ue=Te(h,f);M.push({name:P,index:G,type:Ue,compression:k}),L-=P.length+3}for(var se=Ve.channels,fe=new Array(l.channels),Se=0;Se<l.channels;++Se){var Me=fe[Se]={},We=se[Se];Me.name=We.name,Me.compression=0,Me.decoded=!1,Me.type=We.pixelType,Me.pLinear=We.pLinear,Me.width=l.width,Me.height=l.lines}for(var st={idx:new Array(3)},qe=0;qe<l.channels;++qe)for(var Me=fe[qe],Se=0;Se<M.length;++Se){var ft=M[Se];Me.name==ft.name&&(Me.compression=ft.compression,ft.index>=0&&(st.idx[ft.index]=qe),Me.offset=qe)}if(x.acCompressedSize>0)switch(x.acCompression){case 0:var vt=new Uint16Array(x.totalAcUncompressedCount);W(l.array,h,f,x.acCompressedSize,vt,x.totalAcUncompressedCount);break;case 1:var Xe=l.array.slice(f.value,f.value+x.totalAcUncompressedCount),Pt=la(Xe),vt=new Uint16Array(Pt.buffer);f.value+=x.totalAcUncompressedCount;break}if(x.dcCompressedSize>0){var lt={array:l.array,offset:f,size:x.dcCompressedSize},Ht=new Uint16Array(Be(lt).buffer);f.value+=x.dcCompressedSize}if(x.rleRawSize>0){var Xe=l.array.slice(f.value,f.value+x.rleCompressedSize),Pt=la(Xe),xn=te(Pt.buffer);f.value+=x.rleCompressedSize}for(var Ct=0,Ke=new Array(fe.length),Se=0;Se<Ke.length;++Se)Ke[Se]=new Array;for(var at=0;at<l.lines;++at)for(var Je=0;Je<fe.length;++Je)Ke[Je].push(Ct),Ct+=fe[Je].width*l.type*2;J(st,Ke,fe,vt,Ht,S);for(var Se=0;Se<fe.length;++Se){var Me=fe[Se];if(!Me.decoded)switch(Me.compression){case 2:for(var y=0,V=0,at=0;at<l.lines;++at){for(var Z=Ke[Se][y],$=0;$<Me.width;++$){for(var Y=0;Y<2*Me.type;++Y)S[Z++]=xn[V+Y*Me.width*Me.height];V++}y++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(S.buffer)}function Ee(l,h){for(var f=new Uint8Array(l),S=0;f[h.value+S]!=0;)S+=1;var x=new TextDecoder().decode(f.slice(h.value,h.value+S));return h.value=h.value+S+1,x}function xe(l,h,f){var S=new TextDecoder().decode(new Uint8Array(l).slice(h.value,h.value+f));return h.value=h.value+f,S}function ze(l,h){var f=De(l,h),S=je(l,h);return[f,S]}function ee(l,h){var f=je(l,h),S=je(l,h);return[f,S]}function De(l,h){var f=l.getInt32(h.value,!0);return h.value=h.value+4,f}function je(l,h){var f=l.getUint32(h.value,!0);return h.value=h.value+4,f}function Oe(l,h){var f=l[h.value];return h.value=h.value+1,f}function Te(l,h){var f=l.getUint8(h.value);return h.value=h.value+1,f}const I=function(l,h){let f;return"getBigInt64"in DataView.prototype?f=Number(l.getBigInt64(h.value,!0)):f=l.getUint32(h.value+4,!0)+Number(l.getUint32(h.value,!0)<<32),h.value+=8,f};function Le(l,h){var f=l.getFloat32(h.value,!0);return h.value+=4,f}function Ye(l,h){return Ca.toHalfFloat(Le(l,h))}function q(l){var h=(l&31744)>>10,f=l&1023;return(l>>15?-1:1)*(h?h===31?f?NaN:1/0:Math.pow(2,h-15)*(1+f/1024):6103515625e-14*(f/1024))}function we(l,h){var f=l.getUint16(h.value,!0);return h.value+=2,f}function mt(l,h){return q(we(l,h))}function Ne(l,h,f,S){for(var x=f.value,M=[];f.value<x+S-1;){var L=Ee(h,f),P=De(l,f),X=Te(l,f);f.value+=3;var k=De(l,f),j=De(l,f);M.push({name:L,pixelType:P,pLinear:X,xSampling:k,ySampling:j})}return f.value+=1,M}function D(l,h){var f=Le(l,h),S=Le(l,h),x=Le(l,h),M=Le(l,h),L=Le(l,h),P=Le(l,h),X=Le(l,h),k=Le(l,h);return{redX:f,redY:S,greenX:x,greenY:M,blueX:L,blueY:P,whiteX:X,whiteY:k}}function A(l,h){var f=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],S=Te(l,h);return f[S]}function K(l,h){var f=je(l,h),S=je(l,h),x=je(l,h),M=je(l,h);return{xMin:f,yMin:S,xMax:x,yMax:M}}function ue(l,h){var f=["INCREASING_Y"],S=Te(l,h);return f[S]}function pe(l,h){var f=Le(l,h),S=Le(l,h);return[f,S]}function le(l,h){var f=Le(l,h),S=Le(l,h),x=Le(l,h);return[f,S,x]}function He(l,h,f,S,x){if(S==="string"||S==="stringvector"||S==="iccProfile")return xe(h,f,x);if(S==="chlist")return Ne(l,h,f,x);if(S==="chromaticities")return D(l,f);if(S==="compression")return A(l,f);if(S==="box2i")return K(l,f);if(S==="lineOrder")return ue(l,f);if(S==="float")return Le(l,f);if(S==="v2f")return pe(l,f);if(S==="v3f")return le(l,f);if(S==="int")return De(l,f);if(S==="rational")return ze(l,f);if(S==="timecode")return ee(l,f);if(S==="preview")return f.value+=x,"skipped";f.value+=x}function ye(l,h,f){const S={};if(l.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";S.version=l.getUint8(4);const x=l.getUint8(5);S.spec={singleTile:!!(x&2),longName:!!(x&4),deepFormat:!!(x&8),multiPart:!!(x&16)},f.value=8;for(var M=!0;M;){var L=Ee(h,f);if(L==0)M=!1;else{var P=Ee(h,f),X=je(l,f),k=He(l,h,f,P,X);k===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${P}'.`):S[L]=k}}if((x&-5)!=0)throw console.error("EXRHeader:",S),"THREE.EXRLoader: provided file is currently unsupported.";return S}function Ie(l,h,f,S,x){const M={size:0,viewer:h,array:f,offset:S,width:l.dataWindow.xMax-l.dataWindow.xMin+1,height:l.dataWindow.yMax-l.dataWindow.yMin+1,channels:l.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:l.channels[0].pixelType,uncompress:null,getter:null,format:null,[rs?"colorSpace":"encoding"]:null};switch(l.compression){case"NO_COMPRESSION":M.lines=1,M.uncompress=de;break;case"RLE_COMPRESSION":M.lines=1,M.uncompress=Ce;break;case"ZIPS_COMPRESSION":M.lines=1,M.uncompress=Be;break;case"ZIP_COMPRESSION":M.lines=16,M.uncompress=Be;break;case"PIZ_COMPRESSION":M.lines=32,M.uncompress=et;break;case"PXR24_COMPRESSION":M.lines=16,M.uncompress=ie;break;case"DWAA_COMPRESSION":M.lines=32,M.uncompress=me;break;case"DWAB_COMPRESSION":M.lines=256,M.uncompress=me;break;default:throw"EXRLoader.parse: "+l.compression+" is unsupported"}if(M.scanlineBlockSize=M.lines,M.type==1)switch(x){case Wt:M.getter=mt,M.inputSize=2;break;case Vt:M.getter=we,M.inputSize=2;break}else if(M.type==2)switch(x){case Wt:M.getter=Le,M.inputSize=4;break;case Vt:M.getter=Ye,M.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+M.type+" for "+l.compression+".";M.blockCount=(l.dataWindow.yMax+1)/M.scanlineBlockSize;for(var L=0;L<M.blockCount;L++)I(h,S);M.outputChannels=M.channels==3?4:M.channels;const P=M.width*M.height*M.outputChannels;switch(x){case Wt:M.byteArray=new Float32Array(P),M.channels<M.outputChannels&&M.byteArray.fill(1,0,P);break;case Vt:M.byteArray=new Uint16Array(P),M.channels<M.outputChannels&&M.byteArray.fill(15360,0,P);break;default:console.error("THREE.EXRLoader: unsupported type: ",x);break}return M.bytesPerLine=M.width*M.inputSize*M.channels,M.outputChannels==4?M.format=_n:M.format=Wa,rs?M.colorSpace="srgb-linear":M.encoding=3e3,M}const nt=new DataView(e),ve=new Uint8Array(e),Ae={value:0},Ve=ye(nt,e,Ae),oe=Ie(Ve,nt,ve,Ae,this.type),Re={value:0},H={R:0,G:1,B:2,A:3,Y:0};for(let l=0;l<oe.height/oe.scanlineBlockSize;l++){const h=je(nt,Ae);oe.size=je(nt,Ae),oe.lines=h+oe.scanlineBlockSize>oe.height?oe.height-h:oe.scanlineBlockSize;const f=oe.size<oe.lines*oe.bytesPerLine?oe.uncompress(oe):de(oe);Ae.value+=oe.size;for(let S=0;S<oe.scanlineBlockSize;S++){const x=S+l*oe.scanlineBlockSize;if(x>=oe.height)break;for(let M=0;M<oe.channels;M++){const L=H[Ve.channels[M].name];for(let P=0;P<oe.width;P++){Re.value=(S*(oe.channels*oe.width)+M*oe.width+P)*oe.inputSize;const X=(oe.height-1-x)*(oe.width*oe.outputChannels)+P*oe.outputChannels+L;oe.byteArray[X]=oe.getter(f,Re)}}}}return{header:Ve,width:oe.width,height:oe.height,data:oe.byteArray,format:oe.format,[rs?"colorSpace":"encoding"]:oe[rs?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(a,o){rs?a.colorSpace=o.colorSpace:a.encoding=o.encoding,a.minFilter=Nt,a.magFilter=Nt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,i,r)}}class Xx extends Hi{setDepth(e){return this.depth=e,this}load(e,t,i,r){const s=new Wx(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{const{data:o,width:c,height:u}=a.image,d=this.depth??Math.sqrt(u),p=new xl(o,c,u/d,d);p.type=a.type,p.format=a.format,p.colorSpace=a.colorSpace,p.needsUpdate=!0;try{t(p)}catch(m){r!=null?r(m):console.error(m),this.manager.itemError(e)}},i,r)}}const Yx=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ei(n,e){return n.replace(Yx,(t,i)=>{const r=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof r!="string")throw new Error(`Could not find include for ${i}.`);return Ei(r,e)})}let ua;function qx(){if(ua!=null)return ua;const n=new Uint32Array([268435456]);return ua=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,ua}function jx(n,e,t,i=!0){if(i===qx())return new e(n);const r=Object.assign(new DataView(n),{getFloat16(a,o){return gx(this,a,o)}}),s=new e(r.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=r[t](o,i);return s}const ko=(n,e)=>jx(n,At,"getFloat16",e),$x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);++s)r+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return r}function Kx(n){return n.replace($x,Zx)}const Jx=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Qx=`// cSpell:words logdepthbuf

float reverseLogDepth(const float depth, const float near, const float far) {
  #ifdef USE_LOGDEPTHBUF
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // USE_LOGDEPTHBUF
  return depth;
  #endif // USE_LOGDEPTHBUF
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,e3=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,t3=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,n3=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,i3=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,r3=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,s3=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,a3=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,o3=Jx,Nl=Qx,c3=e3,l3=t3,Yd=n3,qd=i3,jd=r3,u3=s3,h3=a3,Ol=`// Based on the following work and adapted to Three.js.
// This file includes runtime functions only. Please refer to Bruneton's source
// code for the whole picture. It has detailed comments.
// https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

float ClampCosine(float mu) {
  return clamp(mu, float(-1.0), float(1.0));
}

float ClampDistance(float d) {
  return max(d, 0.0);
}

float ClampRadius(float r) {
  return clamp(r, u_bottom_radius, u_top_radius);
}

float SafeSqrt(float a) {
  return sqrt(max(a, 0.0));
}

float DistanceToTopAtmosphereBoundary(float r, float mu) {
  float discriminant = r * r * (mu * mu - 1.0) + u_top_radius * u_top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

bool RayIntersectsGround(float r, float mu) {
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

float GetTextureCoordFromUnitRange(float x, int texture_size) {
  return 0.5 / float(texture_size) + x * (1.0 - 1.0 / float(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(float r, float mu) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float d = DistanceToTopAtmosphereBoundary(r, mu);
  float d_min = u_top_radius - r;
  float d_max = rho + H;
  float x_mu = (d - d_min) / (d_max - d_min);
  float x_r = rho / H;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetTransmittanceToTopAtmosphereBoundary(
  const sampler2D u_transmittance_texture,
  float r,
  float mu
) {
  vec2 uv = GetTransmittanceTextureUvFromRMu(r, mu);
  return vec3(texture(u_transmittance_texture, uv));
}

vec3 GetTransmittance(
  const sampler2D u_transmittance_texture,
  float r,
  float mu,
  float d,
  bool ray_r_mu_intersects_ground
) {
  float r_d = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_d = ClampCosine((r * mu + d) / r_d);
  if (ray_r_mu_intersects_ground) {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, -mu),
      vec3(1.0)
    );
  } else {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, mu_d),
      vec3(1.0)
    );
  }
}

vec3 GetTransmittanceToSun(const sampler2D u_transmittance_texture, float r, float mu_s) {
  float sin_theta_h = u_bottom_radius / r;
  float cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu_s) *
  smoothstep(
    -sin_theta_h * u_sun_angular_radius,
    sin_theta_h * u_sun_angular_radius,
    mu_s - cos_theta_h
  );
}

float RayleighPhaseFunction(float nu) {
  float k = 3.0 / (16.0 * PI);
  return k * (1.0 + nu * nu);
}

float MiePhaseFunction(float g, float nu) {
  float k = 3.0 / (8.0 * PI) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground
) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);
  float r_mu = r * mu;
  float discriminant = r_mu * r_mu - r * r + u_bottom_radius * u_bottom_radius;
  float u_mu;
  if (ray_r_mu_intersects_ground) {
    float d = -r_mu - SafeSqrt(discriminant);
    float d_min = r - u_bottom_radius;
    float d_max = rho;
    u_mu =
      0.5 -
      0.5 *
        GetTextureCoordFromUnitRange(
          d_max == d_min
            ? 0.0
            : (d - d_min) / (d_max - d_min),
          SCATTERING_TEXTURE_MU_SIZE / 2
        );
  } else {
    float d = -r_mu + SafeSqrt(discriminant + H * H);
    float d_min = u_top_radius - r;
    float d_max = rho + H;
    u_mu =
      0.5 +
      0.5 *
        GetTextureCoordFromUnitRange((d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }
  float d = DistanceToTopAtmosphereBoundary(u_bottom_radius, mu_s);
  float d_min = u_top_radius - u_bottom_radius;
  float d_max = H;
  float a = (d - d_min) / (d_max - d_min);
  float D = DistanceToTopAtmosphereBoundary(u_bottom_radius, u_mu_s_min);
  float A = (D - d_min) / (d_max - d_min);
  float u_mu_s = GetTextureCoordFromUnitRange(
    max(1.0 - a / A, 0.0) / (1.0 + a),
    SCATTERING_TEXTURE_MU_S_SIZE
  );
  float u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(float r, float mu_s) {
  float x_r = (r - u_bottom_radius) / (u_top_radius - u_bottom_radius);
  float x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetIrradiance(const sampler2D u_irradiance_texture, float r, float mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(r, mu_s);
  return vec3(texture(u_irradiance_texture, uv));
}

vec3 GetExtrapolatedSingleMieScattering(const vec4 scattering) {
  if (scattering.r <= 0.0) {
    return vec3(0.0);
  }
  return scattering.rgb *
  scattering.a /
  scattering.r *
  (u_rayleigh_scattering.r / u_mie_scattering.r) *
  (u_mie_scattering / u_rayleigh_scattering);
}

vec3 GetCombinedScattering(
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground,
  out vec3 single_mie_scattering
) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  float tex_coord_x = uvwz.x * float(SCATTERING_TEXTURE_NU_SIZE - 1);
  float tex_x = floor(tex_coord_x);
  float lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec4 combined_scattering =
    texture(u_scattering_texture, uvw0) * (1.0 - lerp) + texture(u_scattering_texture, uvw1) * lerp;
  vec3 scattering = vec3(combined_scattering);
  single_mie_scattering = GetExtrapolatedSingleMieScattering(combined_scattering);
  return scattering;
}

vec3 GetSkyRadiance(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 view_ray,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - SafeSqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > u_top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);
  transmittance = ray_r_mu_intersects_ground
    ? vec3(0.0)
    : GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu);
  vec3 single_mie_scattering;
  vec3 scattering;

  if (shadow_length == 0.0) {
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r,
      mu,
      mu_s,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
  } else {
    float d = shadow_length;
    float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
    float mu_p = (r * mu + d) / r_p;
    float mu_s_p = (r * mu_s + d * nu) / r_p;
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r_p,
      mu_p,
      mu_s_p,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
    vec3 shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      shadow_length,
      ray_r_mu_intersects_ground
    );
    scattering = scattering * shadow_transmittance;
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSkyRadianceToPoint(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 point,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 view_ray = normalize(point - camera);
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - sqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  float d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);

  // Hack to avoid rendering artifacts near the horizon, due to finite
  // atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    float mu_horiz = -SafeSqrt(1.0 - u_bottom_radius / r * (u_bottom_radius / r));
    mu = max(mu, mu_horiz + 0.004);
  }

  transmittance = GetTransmittance(u_transmittance_texture, r, mu, d, ray_r_mu_intersects_ground);
  vec3 single_mie_scattering;
  vec3 scattering = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r,
    mu,
    mu_s,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering
  );
  d = max(d - shadow_length, 0.0);
  float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_p = (r * mu + d) / r_p;
  float mu_s_p = (r * mu_s + d * nu) / r_p;
  vec3 single_mie_scattering_p;
  vec3 scattering_p = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r_p,
    mu_p,
    mu_s_p,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering_p
  );
  vec3 shadow_transmittance = transmittance;
  if (shadow_length > 0.0) {
    shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      d,
      ray_r_mu_intersects_ground
    );
  }
  scattering = scattering - shadow_transmittance * scattering_p;
  single_mie_scattering = single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
    vec4(scattering, single_mie_scattering.r)
  );
  single_mie_scattering = single_mie_scattering * smoothstep(float(0.0), float(0.01), mu_s);
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance = GetIrradiance(u_irradiance_texture, r, mu_s);
  return u_solar_irradiance * GetTransmittanceToSun(u_transmittance_texture, r, mu_s);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 normal,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance =
    GetIrradiance(u_irradiance_texture, r, mu_s) * (1.0 + dot(normal, point) / r) * 0.5;
  return u_solar_irradiance *
  GetTransmittanceToSun(u_transmittance_texture, r, mu_s) *
  max(dot(normal, sun_direction), 0.0);
}

vec3 GetSolarRadiance() {
  vec3 radiance = u_solar_irradiance / (PI * u_sun_angular_radius * u_sun_angular_radius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadiance(
  vec3 camera,
  vec3 view_ray,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 radiance = GetSkyRadiance(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    view_ray,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  radiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadianceToPoint(
  vec3 camera,
  vec3 point,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 inscatter = GetSkyRadianceToPoint(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    point,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  inscatter *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return inscatter;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 normal, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    normal,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}
`,Wr=`uniform vec3 u_solar_irradiance;
uniform float u_sun_angular_radius;
uniform float u_bottom_radius;
uniform float u_top_radius;
uniform vec3 u_rayleigh_scattering;
uniform vec3 u_mie_scattering;
uniform float u_mie_phase_function_g;
uniform float u_mu_s_min;

uniform sampler2D u_transmittance_texture;
uniform sampler3D u_scattering_texture;
uniform sampler3D u_single_mie_scattering_texture;
uniform sampler2D u_irradiance_texture;
`,d3=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function f3(n,e){if(e!=null)for(const t of d3){const i=e[t];i!=null&&(n[t]instanceof z?n[t].copy(i):n[t]=i)}}const jc=class{constructor(e){this.solarIrradiance=new z(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new z(.005802,.013558,.0331),this.mieScattering=new z(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Bd(120)),this.skyRadianceToLuminance=new z(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new z(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new z(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new z,this.sunRadianceToRelativeLuminance=new z,f3(this,e);const t=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t)}};jc.DEFAULT=new jc;let Ls=jc;const Ja=64,Qa=16,Fl=32,Bl=128,zl=32,Hl=8,p3=Hl*zl,m3=Bl,Sh=Fl,eo=256,to=64,Dr=1/1e3,v3=new z;function Gl(n,e,t,i,r=!0){const s=t.projectOnSurface(n,v3);return s!=null?t.getOsculatingSphereCenter(!r||s.lengthSq()<n.lengthSq()?s:n,e,i):i.setScalar(0)}const g3=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW
#include "parameters"
#include "functions"
#include "sky"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float irradianceScale;
uniform float idealSphereAlpha;

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv) {
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(texture(normalBuffer, uv).xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * texture(normalBuffer, uv).xyz - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = u_bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, idealSphereAlpha);
  positionECEF = mix(positionECEF, spherePosition, idealSphereAlpha);
}

#if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_IRRADIANCE and SKY_IRRADIANCE are not
  // defined, regard the inputColor as radiance at the texel.
  vec3 albedo = inputColor * irradianceScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
  return albedo * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_IRRADIANCE)
  return albedo * sunIrradiance;
  #elif defined(SKY_IRRADIANCE)
  return albedo * skyIrradiance;
  #endif // defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
}

#endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition - vGeometryEllipsoidCenter,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  float depth = readDepth(uv);
  if (depth >= 1.0 - 1e-7) {
    #ifdef SKY
    vec3 rayDirection = normalize(vRayDirection);
    outputColor.rgb = getSkyRadiance(
      vCameraPosition - vEllipsoidCenter,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 viewNormal;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dx = dFdx(viewPosition);
  vec3 dy = dFdy(viewPosition);
  viewNormal = normalize(cross(dx, dy));
  #else // RECONSTRUCT_NORMAL
  viewNormal = readNormal(uv);
  #endif // RECONSTRUCT_NORMAL

  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 worldNormal = normalize(mat3(inverseViewMatrix) * viewNormal);
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vec3 positionECEF = rotation * worldPosition * METER_TO_LENGTH_UNIT - vGeometryEllipsoidCenter;
  vec3 normalECEF = rotation * worldNormal;

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  #else // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = inputColor.rgb;
  #endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,_3=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 ellipsoidRadii;
uniform float idealSphereAlpha;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;

  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  #ifdef CORRECT_GEOMETRIC_ERROR
  // Gradually turn off altitude correction for aerial perspective as geometric
  // error correction takes effect.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  vGeometryEllipsoidCenter =
    (ellipsoidCenter + mix(altitudeCorrection, vec3(0.0), idealSphereAlpha)) * METER_TO_LENGTH_UNIT;
  #else
  vGeometryEllipsoidCenter = vEllipsoidCenter;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,$d=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance = u_solar_irradiance * 0.000002 / (PI * moonAngularRadius * moonAngularRadius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #if defined(SUN) || defined(MOON)
  vec3 ddx = dFdx(rayDirection);
  vec3 ddy = dFdy(rayDirection);
  float fragmentAngle = length(ddx + ddy) / length(rayDirection);
  #endif // defined(SUN) || defined(MOON)

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cos(u_sun_angular_radius)) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(u_sun_angular_radius, u_sun_angular_radius - fragmentAngle, angle);
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var x3=Object.defineProperty,Nn=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&x3(e,t,r),r};const S3=new z,E3=new z,M3=new fd,y3={blendFunction:ot.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:Si.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class An extends $r{constructor(e=new Xa,t,i=Ls.DEFAULT){const{blendFunction:r,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:u=null,transmittanceTexture:d=null,ellipsoid:p,correctAltitude:m,correctGeometricError:g,photometric:E,sunDirection:T,sunIrradiance:_,skyIrradiance:v,transmittance:U,inscatter:b,irradianceScale:R,sky:N,sun:B,moon:O,moonDirection:W,moonAngularRadius:C,lunarRadianceScale:w}={...y3,...t};super("AerialPerspectiveEffect",Kx(Ei(g3,{core:{depth:Nl,packing:Yd,math:l3,transform:jd,raySphereIntersection:qd,cascadedShadowMaps:o3,interleavedGradientNoise:c3,vogelDisk:h3},parameters:Wr,functions:Ol,sky:$d})),{blendFunction:r,vertexShader:Ei(_3,{parameters:Wr}),attributes:Yn.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new ae(s),projectionMatrix:new ae(new rt),viewMatrix:new ae(new rt),inverseProjectionMatrix:new ae(new rt),inverseViewMatrix:new ae(new rt),cameraPosition:new ae(new z),bottomRadius:new ae(i.bottomRadius),ellipsoidRadii:new ae(new z),ellipsoidCenter:new ae(new z),inverseEllipsoidMatrix:new ae(new rt),altitudeCorrection:new ae(new z),sunDirection:new ae((T==null?void 0:T.clone())??new z),irradianceScale:new ae(R),idealSphereAlpha:new ae(0),moonDirection:new ae((W==null?void 0:W.clone())??new z),moonAngularRadius:new ae(C),lunarRadianceScale:new ae(w),overlayBuffer:new ae(null),shadowBuffer:new ae(null),shadowMapSize:new ae(new ke),shadowIntervals:new ae([]),shadowMatrices:new ae([]),inverseShadowMatrices:new ae([]),shadowFar:new ae(0),shadowTopHeight:new ae(0),shadowRadius:new ae(3),stbnTexture:new ae(null),frame:new ae(0),shadowLengthBuffer:new ae(null),u_solar_irradiance:new ae(i.solarIrradiance),u_sun_angular_radius:new ae(i.sunAngularRadius),u_bottom_radius:new ae(i.bottomRadius*Dr),u_top_radius:new ae(i.topRadius*Dr),u_rayleigh_scattering:new ae(i.rayleighScattering),u_mie_scattering:new ae(i.mieScattering),u_mie_phase_function_g:new ae(i.miePhaseFunctionG),u_mu_s_min:new ae(i.muSMin),u_irradiance_texture:new ae(c),u_scattering_texture:new ae(u),u_single_mie_scattering_texture:new ae(u),u_transmittance_texture:new ae(d)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",eo.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",to.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Fl.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Bl.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",zl.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Hl.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Ja.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Qa.toFixed(0)],["METER_TO_LENGTH_UNIT",Dr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(F=>F.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(F=>F.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new rt,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=p,this.correctAltitude=m,this.correctGeometricError=g,this.photometric=E,this.sunIrradiance=_,this.skyIrradiance=v,this.transmittance=U,this.inscatter=b,this.sky=N,this.sun=B,this.moon=O}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:r,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(r),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),u=S3.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const p=M3.setFromECEF(u).height,m=E3.set(0,this.ellipsoid.maximumRadius,-p).applyMatrix4(t);a.get("idealSphereAlpha").value=Rx(bx(m.y,41.5,13.8,0,1))}catch{return}const d=a.get("altitudeCorrection");this.correctAltitude?Gl(u,this.atmosphere.bottomRadius,this.ellipsoid,d.value):d.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:t,overlay:i,shadow:r,shadowLength:s}=this,a=t.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?t.set("HAS_OVERLAY","1"):(t.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=t.has("HAS_SHADOW"),u=r!=null;if(u!==c&&(u?t.set("HAS_SHADOW","1"):(t.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),u){const m=t.get("SHADOW_CASCADE_COUNT"),g=`${r.cascadeCount}`;m!==g&&(t.set("SHADOW_CASCADE_COUNT",r.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=r.map,e.get("shadowMapSize").value=r.mapSize,e.get("shadowIntervals").value=r.intervals,e.get("shadowMatrices").value=r.matrices,e.get("inverseShadowMatrices").value=r.inverseMatrices,e.get("shadowFar").value=r.far,e.get("shadowTopHeight").value=r.topHeight}const d=t.has("HAS_SHADOW_LENGTH"),p=s!=null;p!==d&&(p?t.set("HAS_SHADOW_LENGTH","1"):(t.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),p&&(e.get("shadowLengthBuffer").value=s.map)}update(e,t,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Nn([en("OCT_ENCODED_NORMAL")],An.prototype,"octEncodedNormal");Nn([en("RECONSTRUCT_NORMAL")],An.prototype,"reconstructNormal");Nn([en("CORRECT_GEOMETRIC_ERROR")],An.prototype,"correctGeometricError");Nn([en("PHOTOMETRIC")],An.prototype,"photometric");Nn([en("SUN_IRRADIANCE")],An.prototype,"sunIrradiance");Nn([en("SKY_IRRADIANCE")],An.prototype,"skyIrradiance");Nn([en("TRANSMITTANCE")],An.prototype,"transmittance");Nn([en("INSCATTER")],An.prototype,"inscatter");Nn([en("SKY")],An.prototype,"sky");Nn([en("SUN")],An.prototype,"sun");Nn([en("MOON")],An.prototype,"moon");Nn([Cx("SHADOW_SAMPLE_COUNT",{min:1,max:16})],An.prototype,"shadowSampleCount");var T3=Object.defineProperty,w3=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&T3(e,t,r),r};const A3=new z;function b3(n,e){let t="",i="";for(let r=1;r<e;++r)t+=`layout(location = ${r}) out float renderTarget${r};
`,i+=`renderTarget${r} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const kl={ellipsoid:Si.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Vl extends Jp{constructor(e,t=Ls.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:r=null,transmittanceTexture:s=null,ellipsoid:a,correctAltitude:o,photometric:c,sunDirection:u,sunAngularRadius:d,renderTargetCount:p,...m}={...kl,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...m,uniforms:{cameraPosition:new ae(new z),ellipsoidCenter:new ae(new z),inverseEllipsoidMatrix:new ae(new rt),altitudeCorrection:new ae(new z),sunDirection:new ae((u==null?void 0:u.clone())??new z),u_solar_irradiance:new ae(t.solarIrradiance),u_sun_angular_radius:new ae(d??t.sunAngularRadius),u_bottom_radius:new ae(t.bottomRadius*Dr),u_top_radius:new ae(t.topRadius*Dr),u_rayleigh_scattering:new ae(t.rayleighScattering),u_mie_scattering:new ae(t.mieScattering),u_mie_phase_function_g:new ae(t.miePhaseFunctionG),u_mu_s_min:new ae(t.muSMin),u_irradiance_texture:new ae(i),u_scattering_texture:new ae(r),u_single_mie_scattering_texture:new ae(r),u_transmittance_texture:new ae(s),...m.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:eo.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:to.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Fl.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Bl.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:zl.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Hl.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Ja.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Qa.toFixed(0),METER_TO_LENGTH_UNIT:Dr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.sunRadianceToRelativeLuminance.toArray().map(g=>g.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.skyRadianceToRelativeLuminance.toArray().map(g=>g.toFixed(12)).join(",")})`,...m.defines}}),this.atmosphere=t,this.ellipsoidMatrix=new rt,this.atmosphere=t,this.ellipsoid=a,this.correctAltitude=o,this.photometric=c,this.renderTargetCount=p}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),r=t.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=A3.copy(i).applyMatrix4(r).sub(t.ellipsoidCenter.value),a=t.altitudeCorrection.value;this.correctAltitude?Gl(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=b3(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,r,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}w3([en("PHOTOMETRIC")],Vl.prototype,"photometric");/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const R3=173.1446326846693,C3=14959787069098932e-8,Xr=.017453292519943295,P3=365.24217,Eh=new Date("2000-01-01T12:00:00Z"),li=2*Math.PI,Li=3600*(180/Math.PI),br=484813681109536e-20,D3=180*60*60,U3=2*D3,I3=6378.1366,L3=I3/C3,N3=81.30056,Wl=.0002959122082855911,$c=2825345909524226e-22,Zc=8459715185680659e-23,Kc=1292024916781969e-23,Jc=1524358900784276e-23;function Vo(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function Mr(n){return n-Math.floor(n)}var Rt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Rt||(Rt={}));const O3=[Rt.Star1,Rt.Star2,Rt.Star3,Rt.Star4,Rt.Star5,Rt.Star6,Rt.Star7,Rt.Star8],F3=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function B3(n){const e=O3.indexOf(n);return e>=0?F3[e]:null}function Zd(n){const e=B3(n);return e&&e.dist>0?e:null}var Mi;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(Mi||(Mi={}));const Rr={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function z3(n){var e,t,i,r,s,a,o;const c=2e3+(n-14)/P3;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,t=e*e,i=e*t,r=t*t,s=t*i,a=i*i,10583.6-1014.41*e+33.78311*t-5.952053*i-.1798452*r+.022174192*s+.0090316521*a):c<1600?(e=(c-1e3)/100,t=e*e,i=e*t,r=t*t,s=t*i,a=i*i,1574.2-556.01*e+71.23472*t+.319781*i-.8503463*r-.005050998*s+.0083572073*a):c<1700?(e=c-1600,t=e*e,i=e*t,120-.9808*e-.01532*t+i/7129):c<1800?(e=c-1700,t=e*e,i=e*t,r=t*t,8.83+.1603*e-.0059285*t+13336e-8*i-r/1174e3):c<1860?(e=c-1800,t=e*e,i=e*t,r=t*t,s=t*i,a=i*i,o=i*r,13.72-.332447*e+.0068612*t+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*a+875e-12*o):c<1900?(e=c-1860,t=e*e,i=e*t,r=t*t,s=t*i,7.62+.5737*e-.251754*t+.01680668*i-.0004473624*r+s/233174):c<1920?(e=c-1900,t=e*e,i=e*t,r=t*t,-2.79+1.494119*e-.0598939*t+.0061966*i-197e-6*r):c<1941?(e=c-1920,t=e*e,i=e*t,21.2+.84493*e-.0761*t+.0020936*i):c<1961?(e=c-1950,t=e*e,i=e*t,29.07+.407*e-t/233+i/2547):c<1986?(e=c-1975,t=e*e,i=e*t,45.45+1.067*e-t/260-i/718):c<2005?(e=c-2e3,t=e*e,i=e*t,r=t*t,s=t*i,63.86+.3345*e-.060374*t+.0017275*i+651814e-9*r+2373599e-11*s):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let H3=z3;function Mh(n){return n+H3(n)/86400}class Fi{constructor(e){if(e instanceof Fi){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Eh.getTime())/t,this.tt=Mh(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Eh.getTime()+e*t),this.ut=e,this.tt=Mh(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new Fi(e);for(;;){const i=e-t.tt;if(Math.abs(i)<1e-12)return t;t=t.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Fi(this.ut+e)}}function rr(n){return n instanceof Fi?n:new Fi(n)}function G3(n){function e(m){return m%U3*br}const t=n.tt/36525,i=e(128710479305e-5+t*1295965810481e-4),r=e(335779.526232+t*17395272628478e-4),s=e(107226070369e-5+t*1602961601209e-3),a=e(450160.398036-t*69628905431e-4);let o=Math.sin(a),c=Math.cos(a),u=(-172064161-174666*t)*o+33386*c,d=(92052331+9086*t)*c+15377*o,p=2*(r-s+a);return o=Math.sin(p),c=Math.cos(p),u+=(-13170906-1675*t)*o-13696*c,d+=(5730336-3015*t)*c-4587*o,p=2*(r+a),o=Math.sin(p),c=Math.cos(p),u+=(-2276413-234*t)*o+2796*c,d+=(978459-485*t)*c+1374*o,p=2*a,o=Math.sin(p),c=Math.cos(p),u+=(2074554+207*t)*o-698*c,d+=(-897492+470*t)*c-291*o,o=Math.sin(i),c=Math.cos(i),u+=(1475877-3633*t)*o+11817*c,d+=(73871-184*t)*c-1924*o,{dpsi:-135e-6+u*1e-7,deps:388e-6+d*1e-7}}function Kd(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var ha;function Jd(n){if(!ha||Math.abs(ha.tt-n.tt)>1e-6){const e=G3(n),t=Kd(n),i=t+e.deps/3600;ha={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*Xr)/15,mobl:t,tobl:i}}return ha}function k3(n,e){const t=n*Xr,i=Math.cos(t),r=Math.sin(t);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function V3(n,e){return k3(Kd(n),e)}function W3(n){const e=n.tt/36525;function t(Oe,Te){const I=[];let Le;for(Le=0;Le<=Te-Oe;++Le)I.push(0);return{min:Oe,array:I}}function i(Oe,Te,I,Le){const Ye=[];for(let q=0;q<=Te-Oe;++q)Ye.push(t(I,Le));return{min:Oe,array:Ye}}function r(Oe,Te,I){const Le=Oe.array[Te-Oe.min];return Le.array[I-Le.min]}function s(Oe,Te,I,Le){const Ye=Oe.array[Te-Oe.min];Ye.array[I-Ye.min]=Le}let a,o,c,u,d,p,m,g,E,T,_,v,U,b,R,N,B,O,W,C,w,F,te,J=i(-6,6,1,4),ne=i(-6,6,1,4);function ce(Oe,Te){return r(J,Oe,Te)}function re(Oe,Te){return r(ne,Oe,Te)}function he(Oe,Te,I){return s(J,Oe,Te,I)}function Q(Oe,Te,I){return s(ne,Oe,Te,I)}function ge(Oe,Te,I,Le,Ye){Ye(Oe*I-Te*Le,Te*I+Oe*Le)}function de(Oe){return Math.sin(li*Oe)}m=e*e,E=0,te=0,_=0,v=3422.7;var Ce=de(.19833+.05611*e),Be=de(.27869+.04508*e),et=de(.16827-.36903*e),ie=de(.34734-5.37261*e),me=de(.10498-5.37899*e),Ee=de(.42681-.41855*e),xe=de(.14943-5.37511*e);for(O=.84*Ce+.31*Be+14.27*et+7.26*ie+.28*me+.24*Ee,W=2.94*Ce+.31*Be+14.27*et+9.34*ie+1.12*me+.83*Ee,C=-6.4*Ce-1.89*Ee,w=.21*Ce+.31*Be+14.27*et-88.7*ie-15.3*me+.24*Ee-1.86*xe,F=O-C,g=-3332e-9*de(.59734-5.37261*e)-539e-9*de(.35498-5.37899*e)-64e-9*de(.39943-5.37511*e),U=li*Mr(.60643382+1336.85522467*e-313e-8*m)+O/Li,b=li*Mr(.37489701+1325.55240982*e+2565e-8*m)+W/Li,R=li*Mr(.99312619+99.99735956*e-44e-8*m)+C/Li,N=li*Mr(.25909118+1342.2278298*e-892e-8*m)+w/Li,B=li*Mr(.82736186+1236.85308708*e-397e-8*m)+F/Li,d=1;d<=4;++d){switch(d){case 1:c=b,o=4,u=1.000002208;break;case 2:c=R,o=3,u=.997504612-.002495388*e;break;case 3:c=N,o=4,u=1.000002708+139.978*g;break;case 4:c=B,o=6,u=1;break;default:throw`Internal error: I = ${d}`}for(he(0,d,1),he(1,d,Math.cos(c)*u),Q(0,d,0),Q(1,d,Math.sin(c)*u),p=2;p<=o;++p)ge(ce(p-1,d),re(p-1,d),ce(1,d),re(1,d),(Oe,Te)=>(he(p,d,Oe),Q(p,d,Te)));for(p=1;p<=o;++p)he(-p,d,ce(p,d)),Q(-p,d,-re(p,d))}function ze(Oe,Te,I,Le){for(var Ye={x:1,y:0},q=[0,Oe,Te,I,Le],we=1;we<=4;++we)q[we]!==0&&ge(Ye.x,Ye.y,ce(q[we],we),re(q[we],we),(mt,Ne)=>(Ye.x=mt,Ye.y=Ne));return Ye}function ee(Oe,Te,I,Le,Ye,q,we,mt){var Ne=ze(Ye,q,we,mt);E+=Oe*Ne.y,te+=Te*Ne.y,_+=I*Ne.x,v+=Le*Ne.x}ee(13.902,14.06,-.001,.2607,0,0,0,4),ee(.403,-4.01,.394,.0023,0,0,0,3),ee(2369.912,2373.36,.601,28.2333,0,0,0,2),ee(-125.154,-112.79,-.725,-.9781,0,0,0,1),ee(1.979,6.98,-.445,.0433,1,0,0,4),ee(191.953,192.72,.029,3.0861,1,0,0,2),ee(-8.466,-13.51,.455,-.1093,1,0,0,1),ee(22639.5,22609.07,.079,186.5398,1,0,0,0),ee(18.609,3.59,-.094,.0118,1,0,0,-1),ee(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),ee(3.215,5.44,.192,-.0386,1,0,0,-3),ee(-38.428,-38.64,.001,.6008,1,0,0,-4),ee(-.393,-1.43,-.092,.0086,1,0,0,-6),ee(-.289,-1.59,.123,-.0053,0,1,0,4),ee(-24.42,-25.1,.04,-.3,0,1,0,2),ee(18.023,17.93,.007,.1494,0,1,0,1),ee(-668.146,-126.98,-1.302,-.3997,0,1,0,0),ee(.56,.32,-.001,-.0037,0,1,0,-1),ee(-165.145,-165.06,.054,1.9178,0,1,0,-2),ee(-1.877,-6.46,-.416,.0339,0,1,0,-4),ee(.213,1.02,-.074,.0054,2,0,0,4),ee(14.387,14.78,-.017,.2833,2,0,0,2),ee(-.586,-1.2,.054,-.01,2,0,0,1),ee(769.016,767.96,.107,10.1657,2,0,0,0),ee(1.75,2.01,-.018,.0155,2,0,0,-1),ee(-211.656,-152.53,5.679,-.3039,2,0,0,-2),ee(1.225,.91,-.03,-.0088,2,0,0,-3),ee(-30.773,-34.07,-.308,.3722,2,0,0,-4),ee(-.57,-1.4,-.074,.0109,2,0,0,-6),ee(-2.921,-11.75,.787,-.0484,1,1,0,2),ee(1.267,1.52,-.022,.0164,1,1,0,1),ee(-109.673,-115.18,.461,-.949,1,1,0,0),ee(-205.962,-182.36,2.056,1.4437,1,1,0,-2),ee(.233,.36,.012,-.0025,1,1,0,-3),ee(-4.391,-9.66,-.471,.0673,1,1,0,-4),ee(.283,1.53,-.111,.006,1,-1,0,4),ee(14.577,31.7,-1.54,.2302,1,-1,0,2),ee(147.687,138.76,.679,1.1528,1,-1,0,0),ee(-1.089,.55,.021,0,1,-1,0,-1),ee(28.475,23.59,-.443,-.2257,1,-1,0,-2),ee(-.276,-.38,-.006,-.0036,1,-1,0,-3),ee(.636,2.27,.146,-.0102,1,-1,0,-4),ee(-.189,-1.68,.131,-.0028,0,2,0,2),ee(-7.486,-.66,-.037,-.0086,0,2,0,0),ee(-8.096,-16.35,-.74,.0918,0,2,0,-2),ee(-5.741,-.04,0,-9e-4,0,0,2,2),ee(.255,0,0,0,0,0,2,1),ee(-411.608,-.2,0,-.0124,0,0,2,0),ee(.584,.84,0,.0071,0,0,2,-1),ee(-55.173,-52.14,0,-.1052,0,0,2,-2),ee(.254,.25,0,-.0017,0,0,2,-3),ee(.025,-1.67,0,.0031,0,0,2,-4),ee(1.06,2.96,-.166,.0243,3,0,0,2),ee(36.124,50.64,-1.3,.6215,3,0,0,0),ee(-13.193,-16.4,.258,-.1187,3,0,0,-2),ee(-1.187,-.74,.042,.0074,3,0,0,-4),ee(-.293,-.31,-.002,.0046,3,0,0,-6),ee(-.29,-1.45,.116,-.0051,2,1,0,2),ee(-7.649,-10.56,.259,-.1038,2,1,0,0),ee(-8.627,-7.59,.078,-.0192,2,1,0,-2),ee(-2.74,-2.54,.022,.0324,2,1,0,-4),ee(1.181,3.32,-.212,.0213,2,-1,0,2),ee(9.703,11.67,-.151,.1268,2,-1,0,0),ee(-.352,-.37,.001,-.0028,2,-1,0,-1),ee(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),ee(.36,.2,-.012,-.0043,2,-1,0,-4),ee(-1.167,-1.25,.008,-.0106,1,2,0,0),ee(-7.412,-6.12,.117,.0484,1,2,0,-2),ee(-.311,-.65,-.032,.0044,1,2,0,-4),ee(.757,1.82,-.105,.0112,1,-2,0,2),ee(2.58,2.32,.027,.0196,1,-2,0,0),ee(2.533,2.4,-.014,-.0212,1,-2,0,-2),ee(-.344,-.57,-.025,.0036,0,3,0,-2),ee(-.992,-.02,0,0,1,0,2,2),ee(-45.099,-.02,0,-.001,1,0,2,0),ee(-.179,-9.52,0,-.0833,1,0,2,-2),ee(-.301,-.33,0,.0014,1,0,2,-4),ee(-6.382,-3.37,0,-.0481,1,0,-2,2),ee(39.528,85.13,0,-.7136,1,0,-2,0),ee(9.366,.71,0,-.0112,1,0,-2,-2),ee(.202,.02,0,0,1,0,-2,-4),ee(.415,.1,0,.0013,0,1,2,0),ee(-2.152,-2.26,0,-.0066,0,1,2,-2),ee(-1.44,-1.3,0,.0014,0,1,-2,2),ee(.384,-.04,0,0,0,1,-2,-2),ee(1.938,3.6,-.145,.0401,4,0,0,0),ee(-.952,-1.58,.052,-.013,4,0,0,-2),ee(-.551,-.94,.032,-.0097,3,1,0,0),ee(-.482,-.57,.005,-.0045,3,1,0,-2),ee(.681,.96,-.026,.0115,3,-1,0,0),ee(-.297,-.27,.002,-9e-4,2,2,0,-2),ee(.254,.21,-.003,0,2,-2,0,-2),ee(-.25,-.22,.004,.0014,1,3,0,-2),ee(-3.996,0,0,4e-4,2,0,2,0),ee(.557,-.75,0,-.009,2,0,2,-2),ee(-.459,-.38,0,-.0053,2,0,-2,2),ee(-1.298,.74,0,4e-4,2,0,-2,0),ee(.538,1.14,0,-.0141,2,0,-2,-2),ee(.263,.02,0,0,1,1,2,0),ee(.426,.07,0,-6e-4,1,1,-2,-2),ee(-.304,.03,0,3e-4,1,-1,2,0),ee(-.372,-.19,0,-.0027,1,-1,-2,2),ee(.418,0,0,0,0,0,4,0),ee(-.33,-.04,0,0,3,0,2,0);function De(Oe,Te,I,Le,Ye){return Oe*ze(Te,I,Le,Ye).y}T=0,T+=De(-526.069,0,0,1,-2),T+=De(-3.352,0,0,1,-4),T+=De(44.297,1,0,1,-2),T+=De(-6,1,0,1,-4),T+=De(20.599,-1,0,1,0),T+=De(-30.598,-1,0,1,-2),T+=De(-24.649,-2,0,1,0),T+=De(-2,-2,0,1,-2),T+=De(-22.571,0,1,1,-2),T+=De(10.985,0,-1,1,-2),E+=.82*de(.7736-62.5512*e)+.31*de(.0466-125.1025*e)+.35*de(.5785-25.1042*e)+.66*de(.4591+1335.8075*e)+.64*de(.313-91.568*e)+1.14*de(.148+1331.2898*e)+.21*de(.5918+1056.5859*e)+.44*de(.5784+1322.8595*e)+.24*de(.2275-5.7374*e)+.28*de(.2965+2.6929*e)+.33*de(.3132+6.3368*e),a=N+te/Li;let je=(1.000002708+139.978*g)*(18518.511+1.189+_)*Math.sin(a)-6.24*Math.sin(3*a)+T;return{geo_eclip_lon:li*Mr((U+E/Li)/li),geo_eclip_lat:Math.PI/(180*3600)*je,distance_au:Li*L3/(.999953253*v)}}function X3(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function Y3(n,e,t){const i=Qd(e,t);return X3(i,n)}function Qd(n,e){const t=n.tt/36525;let i=84381.406,r=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,s=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+i,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;i*=br,r*=br,s*=br,a*=br;const o=Math.sin(i),c=Math.cos(i),u=Math.sin(-r),d=Math.cos(-r),p=Math.sin(-s),m=Math.cos(-s),g=Math.sin(a),E=Math.cos(a),T=E*d-u*g*m,_=E*u*c+g*m*d*c-o*g*p,v=E*u*o+g*m*d*o+c*g*p,U=-g*d-u*E*m,b=-g*u*c+E*m*d*c-o*E*p,R=-g*u*o+E*m*d*o+c*E*p,N=u*p,B=-p*d*c-o*m,O=-p*d*o+m*c;if(e===Mi.Into2000)return new Yr([[T,_,v],[U,b,R],[N,B,O]]);if(e===Mi.From2000)return new Yr([[T,U,N],[_,b,B],[v,R,O]]);throw"Invalid precess direction"}function q3(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let i=360*((e+t)%1);return i<0&&(i+=360),i}let da;function j3(n){if(!da||da.tt!==n.tt){const e=n.tt/36525;let t=15*Jd(n).ee;const i=q3(n);let r=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;r<0&&(r+=24),da={tt:n.tt,st:r}}return da.st}function $3(n){const e=rr(n);return j3(e)}function Z3(n,e){const t=Jd(n),i=t.mobl*Xr,r=t.tobl*Xr,s=t.dpsi*br,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s),m=d,g=-p*a,E=-p*o,T=p*c,_=d*a*c+o*u,v=d*o*c-a*u,U=p*u,b=d*a*u-o*c,R=d*o*u+a*c;if(e===Mi.From2000)return new Yr([[m,T,U],[g,_,b],[E,v,R]]);if(e===Mi.Into2000)return new Yr([[m,g,E],[T,_,v],[U,b,R]]);throw"Invalid precess direction"}class Xn{constructor(e,t,i,r){this.x=e,this.y=t,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class K3{constructor(e,t,i,r,s,a,o){this.x=e,this.y=t,this.z=i,this.vx=r,this.vy=s,this.vz=a,this.t=o}}class J3{constructor(e,t,i){this.lat=Vo(e),this.lon=Vo(t),this.dist=Vo(i)}}class Yr{constructor(e){this.rot=e}}function Qc(n){const e=rr(n),t=W3(e),i=t.distance_au*Math.cos(t.geo_eclip_lat),r=[i*Math.cos(t.geo_eclip_lon),i*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],s=V3(e,r),a=Y3(s,e,Mi.Into2000);return new Xn(a[0],a[1],a[2],e)}function Ur(n,e,t){let i=1,r=0;for(let s of n){let a=0;for(let[c,u,d]of s)a+=c*Math.cos(u+e*d);let o=i*a;t&&(o%=li),r+=o,i*=e}return r}function Wo(n,e){let t=1,i=0,r=0,s=0;for(let a of n){let o=0,c=0;for(let[u,d,p]of a){let m=d+e*p;o+=u*p*Math.sin(m),s>0&&(c+=u*Math.cos(m))}r+=s*i*c-t*o,i=t,t*=e,++s}return r}const fs=365250,el=0,tl=1,nl=2;function il(n){return new cn(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function ef(n,e,t){const i=t*Math.cos(e),r=Math.cos(n),s=Math.sin(n);return[i*r,i*s,t*Math.sin(e)]}function Ta(n,e){const t=e.tt/fs,i=Ur(n[el],t,!0),r=Ur(n[tl],t,!1),s=Ur(n[nl],t,!1),a=ef(i,r,s);return il(a).ToAstroVector(e)}function Q3(n,e){const t=e/fs,i=Ur(n[el],t,!0),r=Ur(n[tl],t,!1),s=Ur(n[nl],t,!1),a=Wo(n[el],t),o=Wo(n[tl],t),c=Wo(n[nl],t),u=Math.cos(i),d=Math.sin(i),p=Math.cos(r),m=Math.sin(r),g=+(c*p*u)-s*m*u*o-s*p*d*a,E=+(c*p*d)-s*m*d*o+s*p*u*a,T=+(c*m)+s*p*o,_=ef(i,r,s),v=[g/fs,E/fs,T/fs],U=il(_),b=il(v);return new Ba(e,U,b)}function fa(n,e,t,i){const r=i/(i+Wl),s=Ta(Rr[t],e);n.x+=r*s.x,n.y+=r*s.y,n.z+=r*s.z}function eS(n){const e=new Xn(0,0,0,n);return fa(e,n,Rt.Jupiter,$c),fa(e,n,Rt.Saturn,Zc),fa(e,n,Rt.Uranus,Kc),fa(e,n,Rt.Neptune,Jc),e}const rl=51,tS=29200,Fa=146,ui=201,Qi=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class cn{constructor(e,t,i){this.x=e,this.y=t,this.z=i}clone(){return new cn(this.x,this.y,this.z)}ToAstroVector(e){return new Xn(this.x,this.y,this.z,e)}static zero(){return new cn(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new cn(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new cn(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new cn(e*this.x,e*this.y,e*this.z)}div(e){return new cn(this.x/e,this.y/e,this.z/e)}mean(e){return new cn((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new cn(-this.x,-this.y,-this.z)}}let Ba=class sl{constructor(e,t,i){this.tt=e,this.r=t,this.v=i}clone(){return new sl(this.tt,this.r,this.v)}sub(e){return new sl(this.tt,this.r.sub(e.r),this.v.sub(e.v))}};function nS(n){let[e,[t,i,r],[s,a,o]]=n;return new Ba(e,new cn(t,i,r),new cn(s,a,o))}function pa(n,e,t,i){const r=i/(i+Wl),s=Q3(Rr[t],e);return n.r.incr(s.r.mul(r)),n.v.incr(s.v.mul(r)),s}function ss(n,e,t){const i=t.sub(n),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class Xl{constructor(e){let t=new Ba(e,new cn(0,0,0),new cn(0,0,0));this.Jupiter=pa(t,e,Rt.Jupiter,$c),this.Saturn=pa(t,e,Rt.Saturn,Zc),this.Uranus=pa(t,e,Rt.Uranus,Kc),this.Neptune=pa(t,e,Rt.Neptune,Jc),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new Ba(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=ss(e,Wl,this.Sun.r);return t.incr(ss(e,$c,this.Jupiter.r)),t.incr(ss(e,Zc,this.Saturn.r)),t.incr(ss(e,Kc,this.Uranus.r)),t.incr(ss(e,Jc,this.Neptune.r)),t}}class no{constructor(e,t,i,r){this.tt=e,this.r=t,this.v=i,this.a=r}clone(){return new no(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class tf{constructor(e,t){this.bary=e,this.grav=t}}function za(n,e,t,i){return new cn(e.x+n*(t.x+n*i.x/2),e.y+n*(t.y+n*i.y/2),e.z+n*(t.z+n*i.z/2))}function yh(n,e,t){return new cn(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function al(n,e){const t=n-e.tt,i=new Xl(n),r=za(t,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),a=za(t,e.r,e.v,s),o=e.v.add(s.mul(t)),c=i.Acceleration(a),u=new no(n,a,o,c);return new tf(i,u)}const iS=[];function nf(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function ol(n){const e=nS(n),t=new Xl(e.tt),i=e.r.add(t.Sun.r),r=e.v.add(t.Sun.v),s=t.Acceleration(i),a=new no(e.tt,i,r,s);return new tf(t,a)}function rS(n,e){const t=Qi[0][0];if(e<t||e>Qi[rl-1][0])return null;const i=nf((e-t)/tS,rl-1);if(!n[i]){const s=n[i]=[];s[0]=ol(Qi[i]).grav,s[ui-1]=ol(Qi[i+1]).grav;let a,o=s[0].tt;for(a=1;a<ui-1;++a)s[a]=al(o+=Fa,s[a-1]).grav;o=s[ui-1].tt;var r=[];for(r[ui-1]=s[ui-1],a=ui-2;a>0;--a)r[a]=al(o-=Fa,r[a+1]).grav;for(a=ui-2;a>0;--a){const c=a/(ui-1);s[a].r=s[a].r.mul(1-c).add(r[a].r.mul(c)),s[a].v=s[a].v.mul(1-c).add(r[a].v.mul(c)),s[a].a=s[a].a.mul(1-c).add(r[a].a.mul(c))}}return n[i]}function Th(n,e,t){let i=ol(n);const r=Math.ceil((e-i.grav.tt)/t);for(let s=0;s<r;++s)i=al(s+1===r?e:i.grav.tt+t,i.grav);return i}function sS(n,e){let t,i,r;const s=rS(iS,n.tt);if(s){const a=nf((n.tt-s[0].tt)/Fa,ui-1),o=s[a],c=s[a+1],u=o.a.mean(c.a),d=za(n.tt-o.tt,o.r,o.v,u),p=yh(n.tt-o.tt,o.v,u),m=za(n.tt-c.tt,c.r,c.v,u),g=yh(n.tt-c.tt,c.v,u),E=(n.tt-o.tt)/Fa;t=d.mul(1-E).add(m.mul(E)),i=p.mul(1-E).add(g.mul(E))}else{let a;n.tt<Qi[0][0]?a=Th(Qi[0],n.tt,-146):a=Th(Qi[rl-1],n.tt,146),t=a.grav.r,i=a.grav.v,r=a.bary}return r||(r=new Xl(n.tt)),t=t.sub(r.Sun.r),i=i.sub(r.Sun.v),new K3(t.x,t.y,t.z,i.x,i.y,i.z,n)}function Ms(n,e){var t=rr(e);if(n in Rr)return Ta(Rr[n],t);if(n===Rt.Pluto){const a=sS(t);return new Xn(a.x,a.y,a.z,t)}if(n===Rt.Sun)return new Xn(0,0,0,t);if(n===Rt.Moon){var i=Ta(Rr.Earth,t),r=Qc(t);return new Xn(i.x+r.x,i.y+r.y,i.z+r.z,t)}if(n===Rt.EMB){const a=Ta(Rr.Earth,t),o=Qc(t),c=1+N3;return new Xn(a.x+o.x/c,a.y+o.y/c,a.z+o.z/c,t)}if(n===Rt.SSB)return eS(t);const s=Zd(n);if(s){const a=new J3(s.dec,15*s.ra,s.dist);return uS(a,t)}throw`HelioVector: Unknown body "${n}"`}function aS(n,e){let t=e,i=0;for(let r=0;r<10;++r){const s=n(t),a=s.Length()/R3;if(a>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-a);if(i=Math.abs(o.tt-t.tt),i<1e-9)return s;t=o}throw`Light-travel time solver did not converge: dt = ${i}`}class oS{constructor(e,t,i,r){this.observerBody=e,this.targetBody=t,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Ms(this.observerBody,e));const t=Ms(this.targetBody,e);return new Xn(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function cS(n,e,t,i){const r=rr(n);if(Zd(t)){const o=Ms(t,r),c=Ms(e,r);return new Xn(o.x-c.x,o.y-c.y,o.z-c.z,r)}let s;s=Ms(e,r);const a=new oS(e,t,i,s);return aS(o=>a.Position(o),r)}function lS(n,e,t){const i=rr(e);switch(n){case Rt.Earth:return new Xn(0,0,0,i);case Rt.Moon:return Qc(i);default:const r=cS(i,Rt.Earth,n,t);return r.t=i,r}}var wh;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(wh||(wh={}));function rf(n,e){return new Yr([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function uS(n,e){e=rr(e);const t=n.lat*Xr,i=n.lon*Xr,r=n.dist*Math.cos(t);return new Xn(r*Math.cos(i),r*Math.sin(i),n.dist*Math.sin(t),e)}function hS(n){n=rr(n);const e=Qd(n,Mi.From2000),t=Z3(n,Mi.From2000);return rf(e,t)}var Ah;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Ah||(Ah={}));var bh;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(bh||(bh={}));const dS=new rt;function fS(n){const e=Math.cos(n),t=Math.sin(n);return new Yr([[e,-t,0],[t,e,0],[0,0,1]])}function Yl(n){return n instanceof Fi?n:new Fi(n instanceof Date?n:new Date(n))}function pS(n,e=new rt){const t=Yl(n),i=hS(t),r=fS($3(t)*(-Math.PI/12)),{rot:s}=rf(i,r);return e.set(s[0][0],s[0][1],s[0][2],0,s[1][0],s[1][1],s[1][2],0,s[2][0],s[2][1],s[2][2],0,0,0,0,1)}function mS(n,e,t){const{x:i,y:r,z:s}=lS(n,e,!1);return t.set(i,r,s).normalize()}function sf(n,e,t){const i=pS(e,dS);return mS(n,e,t).applyMatrix4(i)}function vS(n,e=new z){return sf(Rt.Sun,Yl(n),e)}function gS(n,e=new z){return sf(Rt.Moon,Yl(n),e)}function af(n){return Math.sqrt(Math.max(n,0))}function _S(n){return Math.max(n,0)}function xS(n,e,t){const{bottomRadius:i}=n;return t<0&&e**2*(t**2-1)+i**2>=0}function SS(n,e,t){const{topRadius:i}=n,r=e**2*(t**2-1)+i**2;return _S(-e*t+af(r))}function Ha(n,e){return .5/e+n*(1-1/e)}var ES="Invariant failed";function MS(n,e){if(!n)throw new Error(ES)}const yS=new z,Rh=new z,TS=new z;function ma(n,e,t){const i=e*4;return t.set(n[i],n[i+1],n[i+2])}function of(n,e,t){const{width:i,height:r}=n.image;MS(_x(n.image.data));let s=n.image.data;n.type===Vt&&s instanceof Uint16Array&&(s=new At(s.buffer));const a=Oa(e.x,0,1)*(i-1),o=Oa(e.y,0,1)*(r-1),c=Math.floor(a),u=Math.floor(o),d=a-c,p=o-u,m=d,g=p,E=c%i,T=(E+1)%i,_=u%r,v=(_+1)%r,U=ma(s,_*i+E,yS),b=ma(s,_*i+T,Rh),R=U.lerp(b,m),N=ma(s,v*i+E,Rh),B=ma(s,v*i+T,TS),O=N.lerp(B,m);return t.copy(R.lerp(O,g))}function wS(n,e,t,i){const{topRadius:r,bottomRadius:s}=n,a=Math.sqrt(r**2-s**2),o=af(e**2-s**2),c=SS(n,e,t),u=r-e,d=o+a,p=(c-u)/(d-u),m=o/a;return i.set(Ha(p,eo),Ha(m,to))}const AS=new z,Xo=new z,bS=new ke;function RS(n,e,t,i=new pt,{ellipsoid:r=Si.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Ls.DEFAULT){const c=AS.copy(e);if(s){const T=r.projectOnSurface(e,Xo);T!=null&&c.sub(r.getOsculatingSphereCenter(T,o.bottomRadius,Xo))}const u=Xo;let d=c.length(),p=c.dot(t);const{topRadius:m}=o,g=-p-Math.sqrt(p**2-d**2+m**2);if(g>0&&(d=m,p+=g),d>m)u.set(1,1,1);else{const T=p/d;if(xS(o,d,T))u.setScalar(0);else{const _=wS(o,d,T,bS);of(n,_,u)}}const E=u.multiply(o.solarIrradiance);return a&&E.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(E)}const CS=parseInt(zi.replace(/\D+/g,""));var Un=Uint8Array,tr=Uint16Array,cl=Uint32Array,cf=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),lf=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),PS=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),uf=function(n,e){for(var t=new tr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new cl(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return[t,r]},hf=uf(cf,2),df=hf[0],DS=hf[1];df[28]=258,DS[258]=28;var US=uf(lf,0),IS=US[0],ff=new tr(32768);for(var Lt=0;Lt<32768;++Lt){var Ni=(Lt&43690)>>>1|(Lt&21845)<<1;Ni=(Ni&52428)>>>2|(Ni&13107)<<2,Ni=(Ni&61680)>>>4|(Ni&3855)<<4,ff[Lt]=((Ni&65280)>>>8|(Ni&255)<<8)>>>1}var ys=function(n,e,t){for(var i=n.length,r=0,s=new tr(e);r<i;++r)++s[n[r]-1];var a=new tr(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;{o=new tr(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],d=e-n[r],p=a[n[r]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)o[ff[p]>>>c]=u}return o},Ns=new Un(288);for(var Lt=0;Lt<144;++Lt)Ns[Lt]=8;for(var Lt=144;Lt<256;++Lt)Ns[Lt]=9;for(var Lt=256;Lt<280;++Lt)Ns[Lt]=7;for(var Lt=280;Lt<288;++Lt)Ns[Lt]=8;var pf=new Un(32);for(var Lt=0;Lt<32;++Lt)pf[Lt]=5;var LS=ys(Ns,9),NS=ys(pf,5),Yo=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Gn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},qo=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},OS=function(n){return(n/8|0)+(n&7&&1)},FS=function(n,e,t){(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof tr?tr:n instanceof cl?cl:Un)(t-e);return i.set(n.subarray(e,t)),i},BS=function(n,e,t){var i=n.length;if(!i||t&&!t.l&&i<5)return e||new Un(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Un(i*3));var a=function(Ee){var xe=e.length;if(Ee>xe){var ze=new Un(Math.max(xe*2,Ee));ze.set(e),e=ze}},o=t.f||0,c=t.p||0,u=t.b||0,d=t.l,p=t.d,m=t.m,g=t.n,E=i*8;do{if(!d){t.f=o=Gn(n,c,1);var T=Gn(n,c+1,3);if(c+=3,T)if(T==1)d=LS,p=NS,m=9,g=5;else if(T==2){var _=Gn(n,c,31)+257,v=Gn(n,c+10,15)+4,U=_+Gn(n,c+5,31)+1;c+=14;for(var b=new Un(U),R=new Un(19),N=0;N<v;++N)R[PS[N]]=Gn(n,c+N*3,7);c+=v*3;for(var B=Yo(R),O=(1<<B)-1,W=ys(R,B),N=0;N<U;){var C=W[Gn(n,c,O)];c+=C&15;var w=C>>>4;if(w<16)b[N++]=w;else{var F=0,te=0;for(w==16?(te=3+Gn(n,c,3),c+=2,F=b[N-1]):w==17?(te=3+Gn(n,c,7),c+=3):w==18&&(te=11+Gn(n,c,127),c+=7);te--;)b[N++]=F}}var J=b.subarray(0,_),ne=b.subarray(_);m=Yo(J),g=Yo(ne),d=ys(J,m),p=ys(ne,g)}else throw"invalid block type";else{var w=OS(c)+4,ce=n[w-4]|n[w-3]<<8,re=w+ce;if(re>i){if(s)throw"unexpected EOF";break}r&&a(u+ce),e.set(n.subarray(w,re),u),t.b=u+=ce,t.p=c=re*8;continue}if(c>E){if(s)throw"unexpected EOF";break}}r&&a(u+131072);for(var he=(1<<m)-1,Q=(1<<g)-1,ge=c;;ge=c){var F=d[qo(n,c)&he],de=F>>>4;if(c+=F&15,c>E){if(s)throw"unexpected EOF";break}if(!F)throw"invalid length/literal";if(de<256)e[u++]=de;else if(de==256){ge=c,d=null;break}else{var Ce=de-254;if(de>264){var N=de-257,Be=cf[N];Ce=Gn(n,c,(1<<Be)-1)+df[N],c+=Be}var et=p[qo(n,c)&Q],ie=et>>>4;if(!et)throw"invalid distance";c+=et&15;var ne=IS[ie];if(ie>3){var Be=lf[ie];ne+=qo(n,c)&(1<<Be)-1,c+=Be}if(c>E){if(s)throw"unexpected EOF";break}r&&a(u+131072);for(var me=u+Ce;u<me;u+=4)e[u]=e[u-ne],e[u+1]=e[u+1-ne],e[u+2]=e[u+2-ne],e[u+3]=e[u+3-ne];u=me}}t.l=d,t.p=ge,t.b=u,d&&(o=1,t.m=m,t.d=p,t.n=g)}while(!o);return u==e.length?e:FS(e,0,u)},zS=new Un(0),HS=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function va(n,e){return BS((HS(n),n.subarray(2,-4)),e)}var GS=typeof TextDecoder<"u"&&new TextDecoder,kS=0;try{GS.decode(zS,{stream:!0}),kS=1}catch{}const as=CS>=152;class Ch extends nd{constructor(e){super(e),this.type=Vt}parse(e){const t=Math.pow(2.7182818,2.2);function i(l,h){for(var f=0,S=0;S<65536;++S)(S==0||l[S>>3]&1<<(S&7))&&(h[f++]=S);for(var x=f-1;f<65536;)h[f++]=0;return x}function r(l){for(var h=0;h<16384;h++)l[h]={},l[h].len=0,l[h].lit=0,l[h].p=null}const s={l:0,c:0,lc:0};function a(l,h,f,S,x){for(;f<l;)h=h<<8|Oe(S,x),f+=8;f-=l,s.l=h>>f&(1<<l)-1,s.c=h,s.lc=f}const o=new Array(59);function c(l){for(var h=0;h<=58;++h)o[h]=0;for(var h=0;h<65537;++h)o[l[h]]+=1;for(var f=0,h=58;h>0;--h){var S=f+o[h]>>1;o[h]=f,f=S}for(var h=0;h<65537;++h){var x=l[h];x>0&&(l[h]=x|o[x]++<<6)}}function u(l,h,f,S,x,M,L){for(var P=f,X=0,k=0;x<=M;x++){if(P.value-f.value>S)return!1;a(6,X,k,l,P);var j=s.l;if(X=s.c,k=s.lc,L[x]=j,j==63){if(P.value-f.value>S)throw"Something wrong with hufUnpackEncTable";a(8,X,k,l,P);var G=s.l+6;if(X=s.c,k=s.lc,x+G>M+1)throw"Something wrong with hufUnpackEncTable";for(;G--;)L[x++]=0;x--}else if(j>=59){var G=j-59+2;if(x+G>M+1)throw"Something wrong with hufUnpackEncTable";for(;G--;)L[x++]=0;x--}}c(L)}function d(l){return l&63}function p(l){return l>>6}function m(l,h,f,S){for(;h<=f;h++){var x=p(l[h]),M=d(l[h]);if(x>>M)throw"Invalid table entry";if(M>14){var L=S[x>>M-14];if(L.len)throw"Invalid table entry";if(L.lit++,L.p){var P=L.p;L.p=new Array(L.lit);for(var X=0;X<L.lit-1;++X)L.p[X]=P[X]}else L.p=new Array(1);L.p[L.lit-1]=h}else if(M)for(var k=0,X=1<<14-M;X>0;X--){var L=S[(x<<14-M)+k];if(L.len||L.p)throw"Invalid table entry";L.len=M,L.lit=h,k++}}return!0}const g={c:0,lc:0};function E(l,h,f,S){l=l<<8|Oe(f,S),h+=8,g.c=l,g.lc=h}const T={c:0,lc:0};function _(l,h,f,S,x,M,L,P,X,k){if(l==h){S<8&&(E(f,S,x,L),f=g.c,S=g.lc),S-=8;var j=f>>S,j=new Uint8Array([j])[0];if(X.value+j>k)return!1;for(var G=P[X.value-1];j-- >0;)P[X.value++]=G}else if(X.value<k)P[X.value++]=l;else return!1;T.c=f,T.lc=S}function v(l){return l&65535}function U(l){var h=v(l);return h>32767?h-65536:h}const b={a:0,b:0};function R(l,h){var f=U(l),S=U(h),x=S,M=f+(x&1)+(x>>1),L=M,P=M-x;b.a=L,b.b=P}function N(l,h){var f=v(l),S=v(h),x=f-(S>>1)&65535,M=S+x-32768&65535;b.a=M,b.b=x}function B(l,h,f,S,x,M,L){for(var P=L<16384,X=f>x?x:f,k=1,j;k<=X;)k<<=1;for(k>>=1,j=k,k>>=1;k>=1;){for(var G=0,Ue=G+M*(x-j),se=M*k,fe=M*j,Se=S*k,Me=S*j,We,st,qe,ft;G<=Ue;G+=fe){for(var Xe=G,Pt=G+S*(f-j);Xe<=Pt;Xe+=Me){var vt=Xe+Se,lt=Xe+se,Ht=lt+Se;P?(R(l[Xe+h],l[lt+h]),We=b.a,qe=b.b,R(l[vt+h],l[Ht+h]),st=b.a,ft=b.b,R(We,st),l[Xe+h]=b.a,l[vt+h]=b.b,R(qe,ft),l[lt+h]=b.a,l[Ht+h]=b.b):(N(l[Xe+h],l[lt+h]),We=b.a,qe=b.b,N(l[vt+h],l[Ht+h]),st=b.a,ft=b.b,N(We,st),l[Xe+h]=b.a,l[vt+h]=b.b,N(qe,ft),l[lt+h]=b.a,l[Ht+h]=b.b)}if(f&k){var lt=Xe+se;P?R(l[Xe+h],l[lt+h]):N(l[Xe+h],l[lt+h]),We=b.a,l[lt+h]=b.b,l[Xe+h]=We}}if(x&k)for(var Xe=G,Pt=G+S*(f-j);Xe<=Pt;Xe+=Me){var vt=Xe+Se;P?R(l[Xe+h],l[vt+h]):N(l[Xe+h],l[vt+h]),We=b.a,l[vt+h]=b.b,l[Xe+h]=We}j=k,k>>=1}return G}function O(l,h,f,S,x,M,L,P,X,k){for(var j=0,G=0,Ue=P,se=Math.trunc(x.value+(M+7)/8);x.value<se;)for(E(j,G,f,x),j=g.c,G=g.lc;G>=14;){var fe=j>>G-14&16383,Se=h[fe];if(Se.len)G-=Se.len,_(Se.lit,L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;else{if(!Se.p)throw"hufDecode issues";var Me;for(Me=0;Me<Se.lit;Me++){for(var We=d(l[Se.p[Me]]);G<We&&x.value<se;)E(j,G,f,x),j=g.c,G=g.lc;if(G>=We&&p(l[Se.p[Me]])==(j>>G-We&(1<<We)-1)){G-=We,_(Se.p[Me],L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;break}}if(Me==Se.lit)throw"hufDecode issues"}}var st=8-M&7;for(j>>=st,G-=st;G>0;){var Se=h[j<<14-G&16383];if(Se.len)G-=Se.len,_(Se.lit,L,j,G,f,S,x,X,k,Ue),j=T.c,G=T.lc;else throw"hufDecode issues"}return!0}function W(l,h,f,S,x,M){var L={value:0},P=f.value,X=je(h,f),k=je(h,f);f.value+=4;var j=je(h,f);if(f.value+=4,X<0||X>=65537||k<0||k>=65537)throw"Something wrong with HUF_ENCSIZE";var G=new Array(65537),Ue=new Array(16384);r(Ue);var se=S-(f.value-P);if(u(l,h,f,se,X,k,G),j>8*(S-(f.value-P)))throw"Something wrong with hufUncompress";m(G,X,k,Ue),O(G,Ue,l,h,f,j,k,M,x,L)}function C(l,h,f){for(var S=0;S<f;++S)h[S]=l[h[S]]}function w(l){for(var h=1;h<l.length;h++){var f=l[h-1]+l[h]-128;l[h]=f}}function F(l,h){for(var f=0,S=Math.floor((l.length+1)/2),x=0,M=l.length-1;!(x>M||(h[x++]=l[f++],x>M));)h[x++]=l[S++]}function te(l){for(var h=l.byteLength,f=new Array,S=0,x=new DataView(l);h>0;){var M=x.getInt8(S++);if(M<0){var L=-M;h-=L+1;for(var P=0;P<L;P++)f.push(x.getUint8(S++))}else{var L=M;h-=2;for(var X=x.getUint8(S++),P=0;P<L+1;P++)f.push(X)}}return f}function J(l,h,f,S,x,M){var L=new DataView(M.buffer),P=f[l.idx[0]].width,X=f[l.idx[0]].height,k=3,j=Math.floor(P/8),G=Math.ceil(P/8),Ue=Math.ceil(X/8),se=P-(G-1)*8,fe=X-(Ue-1)*8,Se={value:0},Me=new Array(k),We=new Array(k),st=new Array(k),qe=new Array(k),ft=new Array(k);for(let Ke=0;Ke<k;++Ke)ft[Ke]=h[l.idx[Ke]],Me[Ke]=Ke<1?0:Me[Ke-1]+G*Ue,We[Ke]=new Float32Array(64),st[Ke]=new Uint16Array(64),qe[Ke]=new Uint16Array(G*64);for(let Ke=0;Ke<Ue;++Ke){var Xe=8;Ke==Ue-1&&(Xe=fe);var Pt=8;for(let Je=0;Je<G;++Je){Je==G-1&&(Pt=se);for(let y=0;y<k;++y)st[y].fill(0),st[y][0]=x[Me[y]++],ne(Se,S,st[y]),ce(st[y],We[y]),re(We[y]);he(We);for(let y=0;y<k;++y)Q(We[y],qe[y],Je*64)}let at=0;for(let Je=0;Je<k;++Je){const y=f[l.idx[Je]].type;for(let V=8*Ke;V<8*Ke+Xe;++V){at=ft[Je][V];for(let Z=0;Z<j;++Z){const $=Z*64+(V&7)*8;L.setUint16(at+0*2*y,qe[Je][$+0],!0),L.setUint16(at+1*2*y,qe[Je][$+1],!0),L.setUint16(at+2*2*y,qe[Je][$+2],!0),L.setUint16(at+3*2*y,qe[Je][$+3],!0),L.setUint16(at+4*2*y,qe[Je][$+4],!0),L.setUint16(at+5*2*y,qe[Je][$+5],!0),L.setUint16(at+6*2*y,qe[Je][$+6],!0),L.setUint16(at+7*2*y,qe[Je][$+7],!0),at+=8*2*y}}if(j!=G)for(let V=8*Ke;V<8*Ke+Xe;++V){const Z=ft[Je][V]+8*j*2*y,$=j*64+(V&7)*8;for(let Y=0;Y<Pt;++Y)L.setUint16(Z+Y*2*y,qe[Je][$+Y],!0)}}}for(var vt=new Uint16Array(P),L=new DataView(M.buffer),lt=0;lt<k;++lt){f[l.idx[lt]].decoded=!0;var Ht=f[l.idx[lt]].type;if(f[lt].type==2)for(var xn=0;xn<X;++xn){const at=ft[lt][xn];for(var Ct=0;Ct<P;++Ct)vt[Ct]=L.getUint16(at+Ct*2*Ht,!0);for(var Ct=0;Ct<P;++Ct)L.setFloat32(at+Ct*2*Ht,q(vt[Ct]),!0)}}}function ne(l,h,f){for(var S,x=1;x<64;)S=h[l.value],S==65280?x=64:S>>8==255?x+=S&255:(f[x]=S,x++),l.value++}function ce(l,h){h[0]=q(l[0]),h[1]=q(l[1]),h[2]=q(l[5]),h[3]=q(l[6]),h[4]=q(l[14]),h[5]=q(l[15]),h[6]=q(l[27]),h[7]=q(l[28]),h[8]=q(l[2]),h[9]=q(l[4]),h[10]=q(l[7]),h[11]=q(l[13]),h[12]=q(l[16]),h[13]=q(l[26]),h[14]=q(l[29]),h[15]=q(l[42]),h[16]=q(l[3]),h[17]=q(l[8]),h[18]=q(l[12]),h[19]=q(l[17]),h[20]=q(l[25]),h[21]=q(l[30]),h[22]=q(l[41]),h[23]=q(l[43]),h[24]=q(l[9]),h[25]=q(l[11]),h[26]=q(l[18]),h[27]=q(l[24]),h[28]=q(l[31]),h[29]=q(l[40]),h[30]=q(l[44]),h[31]=q(l[53]),h[32]=q(l[10]),h[33]=q(l[19]),h[34]=q(l[23]),h[35]=q(l[32]),h[36]=q(l[39]),h[37]=q(l[45]),h[38]=q(l[52]),h[39]=q(l[54]),h[40]=q(l[20]),h[41]=q(l[22]),h[42]=q(l[33]),h[43]=q(l[38]),h[44]=q(l[46]),h[45]=q(l[51]),h[46]=q(l[55]),h[47]=q(l[60]),h[48]=q(l[21]),h[49]=q(l[34]),h[50]=q(l[37]),h[51]=q(l[47]),h[52]=q(l[50]),h[53]=q(l[56]),h[54]=q(l[59]),h[55]=q(l[61]),h[56]=q(l[35]),h[57]=q(l[36]),h[58]=q(l[48]),h[59]=q(l[49]),h[60]=q(l[57]),h[61]=q(l[58]),h[62]=q(l[62]),h[63]=q(l[63])}function re(l){const h=.5*Math.cos(.7853975),f=.5*Math.cos(3.14159/16),S=.5*Math.cos(3.14159/8),x=.5*Math.cos(3*3.14159/16),M=.5*Math.cos(5*3.14159/16),L=.5*Math.cos(3*3.14159/8),P=.5*Math.cos(7*3.14159/16);for(var X=new Array(4),k=new Array(4),j=new Array(4),G=new Array(4),Ue=0;Ue<8;++Ue){var se=Ue*8;X[0]=S*l[se+2],X[1]=L*l[se+2],X[2]=S*l[se+6],X[3]=L*l[se+6],k[0]=f*l[se+1]+x*l[se+3]+M*l[se+5]+P*l[se+7],k[1]=x*l[se+1]-P*l[se+3]-f*l[se+5]-M*l[se+7],k[2]=M*l[se+1]-f*l[se+3]+P*l[se+5]+x*l[se+7],k[3]=P*l[se+1]-M*l[se+3]+x*l[se+5]-f*l[se+7],j[0]=h*(l[se+0]+l[se+4]),j[3]=h*(l[se+0]-l[se+4]),j[1]=X[0]+X[3],j[2]=X[1]-X[2],G[0]=j[0]+j[1],G[1]=j[3]+j[2],G[2]=j[3]-j[2],G[3]=j[0]-j[1],l[se+0]=G[0]+k[0],l[se+1]=G[1]+k[1],l[se+2]=G[2]+k[2],l[se+3]=G[3]+k[3],l[se+4]=G[3]-k[3],l[se+5]=G[2]-k[2],l[se+6]=G[1]-k[1],l[se+7]=G[0]-k[0]}for(var fe=0;fe<8;++fe)X[0]=S*l[16+fe],X[1]=L*l[16+fe],X[2]=S*l[48+fe],X[3]=L*l[48+fe],k[0]=f*l[8+fe]+x*l[24+fe]+M*l[40+fe]+P*l[56+fe],k[1]=x*l[8+fe]-P*l[24+fe]-f*l[40+fe]-M*l[56+fe],k[2]=M*l[8+fe]-f*l[24+fe]+P*l[40+fe]+x*l[56+fe],k[3]=P*l[8+fe]-M*l[24+fe]+x*l[40+fe]-f*l[56+fe],j[0]=h*(l[fe]+l[32+fe]),j[3]=h*(l[fe]-l[32+fe]),j[1]=X[0]+X[3],j[2]=X[1]-X[2],G[0]=j[0]+j[1],G[1]=j[3]+j[2],G[2]=j[3]-j[2],G[3]=j[0]-j[1],l[0+fe]=G[0]+k[0],l[8+fe]=G[1]+k[1],l[16+fe]=G[2]+k[2],l[24+fe]=G[3]+k[3],l[32+fe]=G[3]-k[3],l[40+fe]=G[2]-k[2],l[48+fe]=G[1]-k[1],l[56+fe]=G[0]-k[0]}function he(l){for(var h=0;h<64;++h){var f=l[0][h],S=l[1][h],x=l[2][h];l[0][h]=f+1.5747*x,l[1][h]=f-.1873*S-.4682*x,l[2][h]=f+1.8556*S}}function Q(l,h,f){for(var S=0;S<64;++S)h[f+S]=Ca.toHalfFloat(ge(l[S]))}function ge(l){return l<=1?Math.sign(l)*Math.pow(Math.abs(l),2.2):Math.sign(l)*Math.pow(t,Math.abs(l)-1)}function de(l){return new DataView(l.array.buffer,l.offset.value,l.size)}function Ce(l){var h=l.viewer.buffer.slice(l.offset.value,l.offset.value+l.size),f=new Uint8Array(te(h)),S=new Uint8Array(f.length);return w(f),F(f,S),new DataView(S.buffer)}function Be(l){var h=l.array.slice(l.offset.value,l.offset.value+l.size),f=va(h),S=new Uint8Array(f.length);return w(f),F(f,S),new DataView(S.buffer)}function et(l){for(var h=l.viewer,f={value:l.offset.value},S=new Uint16Array(l.width*l.scanlineBlockSize*(l.channels*l.type)),x=new Uint8Array(8192),M=0,L=new Array(l.channels),P=0;P<l.channels;P++)L[P]={},L[P].start=M,L[P].end=L[P].start,L[P].nx=l.width,L[P].ny=l.lines,L[P].size=l.type,M+=L[P].nx*L[P].ny*L[P].size;var X=we(h,f),k=we(h,f);if(k>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(X<=k)for(var P=0;P<k-X+1;P++)x[P+X]=Te(h,f);var j=new Uint16Array(65536),G=i(x,j),Ue=je(h,f);W(l.array,h,f,Ue,S,M);for(var P=0;P<l.channels;++P)for(var se=L[P],fe=0;fe<L[P].size;++fe)B(S,se.start+fe,se.nx,se.size,se.ny,se.nx*se.size,G);C(j,S,M);for(var Se=0,Me=new Uint8Array(S.buffer.byteLength),We=0;We<l.lines;We++)for(var st=0;st<l.channels;st++){var se=L[st],qe=se.nx*se.size,ft=new Uint8Array(S.buffer,se.end*2,qe*2);Me.set(ft,Se),Se+=qe*2,se.end+=qe}return new DataView(Me.buffer)}function ie(l){var h=l.array.slice(l.offset.value,l.offset.value+l.size),f=va(h);const S=l.lines*l.channels*l.width,x=l.type==1?new Uint16Array(S):new Uint32Array(S);let M=0,L=0;const P=new Array(4);for(let X=0;X<l.lines;X++)for(let k=0;k<l.channels;k++){let j=0;switch(l.type){case 1:P[0]=M,P[1]=P[0]+l.width,M=P[1]+l.width;for(let G=0;G<l.width;++G){const Ue=f[P[0]++]<<8|f[P[1]++];j+=Ue,x[L]=j,L++}break;case 2:P[0]=M,P[1]=P[0]+l.width,P[2]=P[1]+l.width,M=P[2]+l.width;for(let G=0;G<l.width;++G){const Ue=f[P[0]++]<<24|f[P[1]++]<<16|f[P[2]++]<<8;j+=Ue,x[L]=j,L++}break}}return new DataView(x.buffer)}function me(l){var h=l.viewer,f={value:l.offset.value},S=new Uint8Array(l.width*l.lines*(l.channels*l.type*2)),x={version:I(h,f),unknownUncompressedSize:I(h,f),unknownCompressedSize:I(h,f),acCompressedSize:I(h,f),dcCompressedSize:I(h,f),rleCompressedSize:I(h,f),rleUncompressedSize:I(h,f),rleRawSize:I(h,f),totalAcUncompressedCount:I(h,f),totalDcUncompressedCount:I(h,f),acCompression:I(h,f)};if(x.version<2)throw"EXRLoader.parse: "+Ve.compression+" version "+x.version+" is unsupported";for(var M=new Array,L=we(h,f)-2;L>0;){var P=Ee(h.buffer,f),X=Te(h,f),k=X>>2&3,j=(X>>4)-1,G=new Int8Array([j])[0],Ue=Te(h,f);M.push({name:P,index:G,type:Ue,compression:k}),L-=P.length+3}for(var se=Ve.channels,fe=new Array(l.channels),Se=0;Se<l.channels;++Se){var Me=fe[Se]={},We=se[Se];Me.name=We.name,Me.compression=0,Me.decoded=!1,Me.type=We.pixelType,Me.pLinear=We.pLinear,Me.width=l.width,Me.height=l.lines}for(var st={idx:new Array(3)},qe=0;qe<l.channels;++qe)for(var Me=fe[qe],Se=0;Se<M.length;++Se){var ft=M[Se];Me.name==ft.name&&(Me.compression=ft.compression,ft.index>=0&&(st.idx[ft.index]=qe),Me.offset=qe)}if(x.acCompressedSize>0)switch(x.acCompression){case 0:var vt=new Uint16Array(x.totalAcUncompressedCount);W(l.array,h,f,x.acCompressedSize,vt,x.totalAcUncompressedCount);break;case 1:var Xe=l.array.slice(f.value,f.value+x.totalAcUncompressedCount),Pt=va(Xe),vt=new Uint16Array(Pt.buffer);f.value+=x.totalAcUncompressedCount;break}if(x.dcCompressedSize>0){var lt={array:l.array,offset:f,size:x.dcCompressedSize},Ht=new Uint16Array(Be(lt).buffer);f.value+=x.dcCompressedSize}if(x.rleRawSize>0){var Xe=l.array.slice(f.value,f.value+x.rleCompressedSize),Pt=va(Xe),xn=te(Pt.buffer);f.value+=x.rleCompressedSize}for(var Ct=0,Ke=new Array(fe.length),Se=0;Se<Ke.length;++Se)Ke[Se]=new Array;for(var at=0;at<l.lines;++at)for(var Je=0;Je<fe.length;++Je)Ke[Je].push(Ct),Ct+=fe[Je].width*l.type*2;J(st,Ke,fe,vt,Ht,S);for(var Se=0;Se<fe.length;++Se){var Me=fe[Se];if(!Me.decoded)switch(Me.compression){case 2:for(var y=0,V=0,at=0;at<l.lines;++at){for(var Z=Ke[Se][y],$=0;$<Me.width;++$){for(var Y=0;Y<2*Me.type;++Y)S[Z++]=xn[V+Y*Me.width*Me.height];V++}y++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(S.buffer)}function Ee(l,h){for(var f=new Uint8Array(l),S=0;f[h.value+S]!=0;)S+=1;var x=new TextDecoder().decode(f.slice(h.value,h.value+S));return h.value=h.value+S+1,x}function xe(l,h,f){var S=new TextDecoder().decode(new Uint8Array(l).slice(h.value,h.value+f));return h.value=h.value+f,S}function ze(l,h){var f=De(l,h),S=je(l,h);return[f,S]}function ee(l,h){var f=je(l,h),S=je(l,h);return[f,S]}function De(l,h){var f=l.getInt32(h.value,!0);return h.value=h.value+4,f}function je(l,h){var f=l.getUint32(h.value,!0);return h.value=h.value+4,f}function Oe(l,h){var f=l[h.value];return h.value=h.value+1,f}function Te(l,h){var f=l.getUint8(h.value);return h.value=h.value+1,f}const I=function(l,h){let f;return"getBigInt64"in DataView.prototype?f=Number(l.getBigInt64(h.value,!0)):f=l.getUint32(h.value+4,!0)+Number(l.getUint32(h.value,!0)<<32),h.value+=8,f};function Le(l,h){var f=l.getFloat32(h.value,!0);return h.value+=4,f}function Ye(l,h){return Ca.toHalfFloat(Le(l,h))}function q(l){var h=(l&31744)>>10,f=l&1023;return(l>>15?-1:1)*(h?h===31?f?NaN:1/0:Math.pow(2,h-15)*(1+f/1024):6103515625e-14*(f/1024))}function we(l,h){var f=l.getUint16(h.value,!0);return h.value+=2,f}function mt(l,h){return q(we(l,h))}function Ne(l,h,f,S){for(var x=f.value,M=[];f.value<x+S-1;){var L=Ee(h,f),P=De(l,f),X=Te(l,f);f.value+=3;var k=De(l,f),j=De(l,f);M.push({name:L,pixelType:P,pLinear:X,xSampling:k,ySampling:j})}return f.value+=1,M}function D(l,h){var f=Le(l,h),S=Le(l,h),x=Le(l,h),M=Le(l,h),L=Le(l,h),P=Le(l,h),X=Le(l,h),k=Le(l,h);return{redX:f,redY:S,greenX:x,greenY:M,blueX:L,blueY:P,whiteX:X,whiteY:k}}function A(l,h){var f=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],S=Te(l,h);return f[S]}function K(l,h){var f=je(l,h),S=je(l,h),x=je(l,h),M=je(l,h);return{xMin:f,yMin:S,xMax:x,yMax:M}}function ue(l,h){var f=["INCREASING_Y"],S=Te(l,h);return f[S]}function pe(l,h){var f=Le(l,h),S=Le(l,h);return[f,S]}function le(l,h){var f=Le(l,h),S=Le(l,h),x=Le(l,h);return[f,S,x]}function He(l,h,f,S,x){if(S==="string"||S==="stringvector"||S==="iccProfile")return xe(h,f,x);if(S==="chlist")return Ne(l,h,f,x);if(S==="chromaticities")return D(l,f);if(S==="compression")return A(l,f);if(S==="box2i")return K(l,f);if(S==="lineOrder")return ue(l,f);if(S==="float")return Le(l,f);if(S==="v2f")return pe(l,f);if(S==="v3f")return le(l,f);if(S==="int")return De(l,f);if(S==="rational")return ze(l,f);if(S==="timecode")return ee(l,f);if(S==="preview")return f.value+=x,"skipped";f.value+=x}function ye(l,h,f){const S={};if(l.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";S.version=l.getUint8(4);const x=l.getUint8(5);S.spec={singleTile:!!(x&2),longName:!!(x&4),deepFormat:!!(x&8),multiPart:!!(x&16)},f.value=8;for(var M=!0;M;){var L=Ee(h,f);if(L==0)M=!1;else{var P=Ee(h,f),X=je(l,f),k=He(l,h,f,P,X);k===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${P}'.`):S[L]=k}}if((x&-5)!=0)throw console.error("EXRHeader:",S),"THREE.EXRLoader: provided file is currently unsupported.";return S}function Ie(l,h,f,S,x){const M={size:0,viewer:h,array:f,offset:S,width:l.dataWindow.xMax-l.dataWindow.xMin+1,height:l.dataWindow.yMax-l.dataWindow.yMin+1,channels:l.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:l.channels[0].pixelType,uncompress:null,getter:null,format:null,[as?"colorSpace":"encoding"]:null};switch(l.compression){case"NO_COMPRESSION":M.lines=1,M.uncompress=de;break;case"RLE_COMPRESSION":M.lines=1,M.uncompress=Ce;break;case"ZIPS_COMPRESSION":M.lines=1,M.uncompress=Be;break;case"ZIP_COMPRESSION":M.lines=16,M.uncompress=Be;break;case"PIZ_COMPRESSION":M.lines=32,M.uncompress=et;break;case"PXR24_COMPRESSION":M.lines=16,M.uncompress=ie;break;case"DWAA_COMPRESSION":M.lines=32,M.uncompress=me;break;case"DWAB_COMPRESSION":M.lines=256,M.uncompress=me;break;default:throw"EXRLoader.parse: "+l.compression+" is unsupported"}if(M.scanlineBlockSize=M.lines,M.type==1)switch(x){case Wt:M.getter=mt,M.inputSize=2;break;case Vt:M.getter=we,M.inputSize=2;break}else if(M.type==2)switch(x){case Wt:M.getter=Le,M.inputSize=4;break;case Vt:M.getter=Ye,M.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+M.type+" for "+l.compression+".";M.blockCount=(l.dataWindow.yMax+1)/M.scanlineBlockSize;for(var L=0;L<M.blockCount;L++)I(h,S);M.outputChannels=M.channels==3?4:M.channels;const P=M.width*M.height*M.outputChannels;switch(x){case Wt:M.byteArray=new Float32Array(P),M.channels<M.outputChannels&&M.byteArray.fill(1,0,P);break;case Vt:M.byteArray=new Uint16Array(P),M.channels<M.outputChannels&&M.byteArray.fill(15360,0,P);break;default:console.error("THREE.EXRLoader: unsupported type: ",x);break}return M.bytesPerLine=M.width*M.inputSize*M.channels,M.outputChannels==4?M.format=_n:M.format=Wa,as?M.colorSpace="srgb-linear":M.encoding=3e3,M}const nt=new DataView(e),ve=new Uint8Array(e),Ae={value:0},Ve=ye(nt,e,Ae),oe=Ie(Ve,nt,ve,Ae,this.type),Re={value:0},H={R:0,G:1,B:2,A:3,Y:0};for(let l=0;l<oe.height/oe.scanlineBlockSize;l++){const h=je(nt,Ae);oe.size=je(nt,Ae),oe.lines=h+oe.scanlineBlockSize>oe.height?oe.height-h:oe.scanlineBlockSize;const f=oe.size<oe.lines*oe.bytesPerLine?oe.uncompress(oe):de(oe);Ae.value+=oe.size;for(let S=0;S<oe.scanlineBlockSize;S++){const x=S+l*oe.scanlineBlockSize;if(x>=oe.height)break;for(let M=0;M<oe.channels;M++){const L=H[Ve.channels[M].name];for(let P=0;P<oe.width;P++){Re.value=(S*(oe.channels*oe.width)+M*oe.width+P)*oe.inputSize;const X=(oe.height-1-x)*(oe.width*oe.outputChannels)+P*oe.outputChannels+L;oe.byteArray[X]=oe.getter(f,Re)}}}}return{header:Ve,width:oe.width,height:oe.height,data:oe.byteArray,format:oe.format,[as?"colorSpace":"encoding"]:oe[as?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(a,o){as?a.colorSpace=o.colorSpace:a.encoding=o.encoding,a.minFilter=Nt,a.magFilter=Nt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,i,r)}}function VS(n){var e=[];if(n.length===0)return"";if(typeof n[0]!="string")throw new TypeError("Url must be a string. Received "+n[0]);if(n[0].match(/^[^/:]+:\/*$/)&&n.length>1){var t=n.shift();n[0]=t+n[0]}n[0].match(/^file:\/\/\//)?n[0]=n[0].replace(/^([^/:]+):\/*/,"$1:///"):n[0]=n[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<n.length;i++){var r=n[i];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(i>0&&(r=r.replace(/^[\/]+/,"")),i<n.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),e.push(r))}var s=e.join("/");s=s.replace(/\/(\?|&|#[^!])/g,"$1");var a=s.split("?");return s=a.shift()+(a.length>0?"?":"")+a.join("&"),s}function WS(){var n;return typeof arguments[0]=="object"?n=arguments[0]:n=[].slice.call(arguments),VS(n)}class XS extends Hi{constructor(){super(...arguments),this.format="exr",this.type=Vt}setTypeFromRenderer(e){return this.type=e.getContext().getExtension("OES_texture_float_linear")==null?Vt:Wt,this}load(e,t,i,r){const s={},a=(o,{loader:c,extension:u})=>{c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(WS(e,`${o}${u}`),d=>{d.minFilter=Nt,d.magFilter=Nt,d.type=this.type,this.type===Wt&&(d.image.data=new Float32Array(new At(d.image.data.buffer))),s[`${o}Texture`]=d,s.irradianceTexture!=null&&s.scatteringTexture!=null&&s.transmittanceTexture!=null&&t(s)},i,r)};this.format==="exr"?(a("irradiance",{loader:new Ch(this.manager),extension:".exr"}),a("scattering",{loader:new Xx(this.manager).setDepth(Sh),extension:".exr"}),a("transmittance",{loader:new Ch(this.manager),extension:".exr"})):(a("irradiance",{loader:xh(ko,{width:Ja,height:Qa}),extension:".bin"}),a("scattering",{loader:Ax(ko,{width:p3,height:m3,depth:Sh}),extension:".bin"}),a("transmittance",{loader:xh(ko,{width:eo,height:to}),extension:".bin"}))}}function YS({topRadius:n,bottomRadius:e},t,i,r){const s=(t-e)/(n-e),a=i*.5+.5;return r.set(Ha(a,Ja),Ha(s,Qa))}const qS=1/Math.sqrt(Math.PI),jo=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),jS=new z,$o=new z,$S=new ke,ZS=new rt,KS={ellipsoid:Si.WGS84,correctAltitude:!0,photometric:!0};class JS extends um{constructor(e,t=Ls.DEFAULT){super(),this.atmosphere=t,this.ellipsoidCenter=new z,this.ellipsoidMatrix=new rt;const{irradianceTexture:i=null,ellipsoid:r,correctAltitude:s,photometric:a,sunDirection:o}={...KS,...e};this.irradianceTexture=i,this.ellipsoid=r,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new z}update(){if(this.irradianceTexture==null)return;const e=ZS.copy(this.ellipsoidMatrix).invert(),t=this.getWorldPosition(jS).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const u=this.ellipsoid.projectOnSurface(t,$o);u!=null&&t.sub(Gl(u,this.atmosphere.bottomRadius,this.ellipsoid,$o))}const i=t.length(),r=t.dot(this.sunDirection)/i,s=YS(this.atmosphere,i,r,$S),a=of(this.irradianceTexture,s,$o);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(t).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(qS),c[1].copy(a).multiplyScalar(jo*o.y),c[2].copy(a).multiplyScalar(jo*o.z),c[3].copy(a).multiplyScalar(jo*o.x)}}const QS=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI (0.3183098861837907)

#include "core/raySphereIntersection"
#include "parameters"
#include "functions"
#include "sky"

uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);

  #ifdef GROUND_ALBEDO

  bool intersectsGround = rayIntersectsGround(cameraPosition, rayDirection);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      u_bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      u_bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,eE=`precision highp float;
precision highp sampler3D;

#include "parameters"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var tE=Object.defineProperty,mf=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&tE(e,t,r),r};const nE={...kl,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class ql extends Vl{constructor(e){const{sun:t,moon:i,moonDirection:r,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...nE,...e};super({name:"SkyMaterial",glslVersion:Aa,vertexShader:Ei(eE,{parameters:Wr}),fragmentShader:Ei(QS,{core:{raySphereIntersection:qd},parameters:Wr,functions:Ol,sky:$d}),...c,uniforms:{inverseProjectionMatrix:new ae(new rt),inverseViewMatrix:new ae(new rt),moonDirection:new ae((r==null?void 0:r.clone())??new z),moonAngularRadius:new ae(s),lunarRadianceScale:new ae(a),groundAlbedo:new ae((o==null?void 0:o.clone())??new pt(0)),shadowLengthBuffer:new ae(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i}onBeforeRender(e,t,i,r,s,a){super.onBeforeRender(e,t,i,r,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const u=c.PERSPECTIVE_CAMERA!=null,d=i.isPerspectiveCamera===!0;d!==u&&(d?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const p=this.groundAlbedo,m=c.GROUND_ALBEDO!=null,g=p.r!==0||p.g!==0||p.b!==0;g!==m&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const E=this.shadowLength,T=c.HAS_SHADOW_LENGTH!=null,_=E!=null;_!==T&&(_?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),_&&(o.shadowLengthBuffer.value=E.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}mf([en("SUN")],ql.prototype,"sun");mf([en("MOON")],ql.prototype,"moon");const iE=`precision highp float;
precision highp sampler3D;

#include "parameters"
#include "functions"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;

  if (RayIntersectsGround(r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition - vEllipsoidCenter,
    normalize(vRayDirection),
    0.0,
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,rE=`precision highp float;
precision highp sampler3D;

#include "parameters"

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float radianceScale;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(radianceScale * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * cameraPosition * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * worldDirection;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var sE=Object.defineProperty,aE=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&sE(e,t,r),r};const oE={...kl,pointSize:1,radianceScale:1,background:!0};class cE extends Vl{constructor(e){const{pointSize:t,radianceScale:i,background:r,...s}={...oE,...e};super({name:"StarsMaterial",glslVersion:Aa,vertexShader:Ei(rE,{parameters:Wr}),fragmentShader:Ei(iE,{parameters:Wr,functions:Ol}),...s,uniforms:{projectionMatrix:new ae(new rt),modelViewMatrix:new ae(new rt),viewMatrix:new ae(new rt),matrixWorld:new ae(new rt),cameraFar:new ae(0),pointSize:new ae(0),magnitudeRange:new ae(new ke(-2,8)),radianceScale:new ae(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=t,this.background=r}onBeforeRender(e,t,i,r,s,a){super.onBeforeRender(e,t,i,r,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}aE([en("BACKGROUND")],cE.prototype,"background");const lE=new z,uE=new rt,hE={ellipsoid:Si.WGS84,correctAltitude:!0,photometric:!0,distance:1};class dE extends cm{constructor(e,t=Ls.DEFAULT){super(),this.atmosphere=t,this.ellipsoidCenter=new z,this.ellipsoidMatrix=new rt;const{irradianceTexture:i=null,ellipsoid:r,correctAltitude:s,photometric:a,sunDirection:o,distance:c}={...hE,...e};this.transmittanceTexture=i,this.ellipsoid=r,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new z,this.distance=c}update(){if(this.position.copy(this.sunDirection).applyMatrix4(this.ellipsoidMatrix).normalize().multiplyScalar(this.distance).add(this.target.position),this.transmittanceTexture==null)return;const e=uE.copy(this.ellipsoidMatrix).invert(),t=this.target.getWorldPosition(lE).applyMatrix4(e).sub(this.ellipsoidCenter);RS(this.transmittanceTexture,t,this.sunDirection,this.color,{ellipsoid:this.ellipsoid,correctAltitude:this.correctAltitude,photometric:this.photometric},this.atmosphere)}}const fE=`#include "core/depth"
#include "core/turbo"

uniform float near;
uniform float far;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  float depth = readDepth(uv);
  depth = reverseLogDepth(depth, cameraNear, cameraFar);
  depth = linearizeDepth(depth, near, far) / far;

  #ifdef USE_TURBO
  vec3 color = turbo(1.0 - depth);
  #else // USE_TURBO
  vec3 color = vec3(depth);
  #endif // USE_TURBO

  outputColor = vec4(color, inputColor.a);
}
`;var pE=Object.defineProperty,mE=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&pE(e,t,r),r};const vE={blendFunction:ot.SRC,useTurbo:!1,near:1,far:1e3};class gE extends $r{constructor(e){const{blendFunction:t,useTurbo:i,near:r,far:s}={...vE,...e};super("DepthEffect",Ei(fE,{core:{depth:Nl,turbo:u3}}),{blendFunction:t,attributes:Yn.DEPTH,uniforms:new Map(Object.entries({near:new ae(r),far:new ae(s)}))}),this.useTurbo=i}get near(){return this.uniforms.get("near").value}set near(e){this.uniforms.get("near").value=e}get far(){return this.uniforms.get("far").value}set far(e){this.uniforms.get("far").value=e}}mE([en("USE_TURBO")],gE.prototype,"useTurbo");const _E=`#define DITHERING

#include <dithering_pars_fragment>

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  outputColor = vec4(saturate(dithering(inputColor.rgb)), inputColor.a);
}
`,xE={blendFunction:ot.NORMAL};class SE extends $r{constructor(e){const{blendFunction:t}={...xE,...e};super("DitheringEffect",_E,{blendFunction:t})}}const EE=`#include <common>

uniform sampler2D inputBuffer;

uniform float thresholdLevel;
uniform float thresholdRange;

in vec2 vCenterUv1;
in vec2 vCenterUv2;
in vec2 vCenterUv3;
in vec2 vCenterUv4;
in vec2 vRowUv1;
in vec2 vRowUv2;
in vec2 vRowUv3;
in vec2 vRowUv4;
in vec2 vRowUv5;
in vec2 vRowUv6;
in vec2 vRowUv7;
in vec2 vRowUv8;
in vec2 vRowUv9;

float clampToBorder(const vec2 uv) {
  return float(uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0);
}

// Reference: https://learnopengl.com/Guest-Articles/2022/Phys.-Based-Bloom
void main() {
  vec3 color = 0.125 * texture(inputBuffer, vec2(vRowUv5)).rgb;
  vec4 weight =
    0.03125 *
    vec4(
      clampToBorder(vRowUv1),
      clampToBorder(vRowUv3),
      clampToBorder(vRowUv7),
      clampToBorder(vRowUv9)
    );
  color += weight.x * texture(inputBuffer, vec2(vRowUv1)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vRowUv3)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vRowUv7)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vRowUv9)).rgb;

  weight =
    0.0625 *
    vec4(
      clampToBorder(vRowUv2),
      clampToBorder(vRowUv4),
      clampToBorder(vRowUv6),
      clampToBorder(vRowUv8)
    );
  color += weight.x * texture(inputBuffer, vec2(vRowUv2)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vRowUv4)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vRowUv6)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vRowUv8)).rgb;

  weight =
    0.125 *
    vec4(
      clampToBorder(vRowUv2),
      clampToBorder(vRowUv4),
      clampToBorder(vRowUv6),
      clampToBorder(vRowUv8)
    );
  color += weight.x * texture(inputBuffer, vec2(vCenterUv1)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vCenterUv2)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vCenterUv3)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vCenterUv4)).rgb;

  // WORKAROUND: Avoid screen flashes if the input buffer contains NaN texels.
  // See: https://github.com/takram-design-engineering/three-geospatial/issues/7
  if (any(isnan(color))) {
    gl_FragColor = vec4(vec3(0.0), 1.0);
    return;
  }

  float l = luminance(color);
  float scale = saturate(smoothstep(thresholdLevel, thresholdLevel + thresholdRange, l));
  gl_FragColor = vec4(color * scale, 1.0);
}
`,ME=`uniform vec2 texelSize;

out vec2 vCenterUv1;
out vec2 vCenterUv2;
out vec2 vCenterUv3;
out vec2 vCenterUv4;
out vec2 vRowUv1;
out vec2 vRowUv2;
out vec2 vRowUv3;
out vec2 vRowUv4;
out vec2 vRowUv5;
out vec2 vRowUv6;
out vec2 vRowUv7;
out vec2 vRowUv8;
out vec2 vRowUv9;

void main() {
  vec2 uv = position.xy * 0.5 + 0.5;
  vCenterUv1 = uv + texelSize * vec2(-1.0, 1.0);
  vCenterUv2 = uv + texelSize * vec2(1.0, 1.0);
  vCenterUv3 = uv + texelSize * vec2(-1.0, -1.0);
  vCenterUv4 = uv + texelSize * vec2(1.0, -1.0);
  vRowUv1 = uv + texelSize * vec2(-2.0, 2.0);
  vRowUv2 = uv + texelSize * vec2(0.0, 2.0);
  vRowUv3 = uv + texelSize * vec2(2.0, 2.0);
  vRowUv4 = uv + texelSize * vec2(-2.0, 0.0);
  vRowUv5 = uv + texelSize;
  vRowUv6 = uv + texelSize * vec2(2.0, 0.0);
  vRowUv7 = uv + texelSize * vec2(-2.0, -2.0);
  vRowUv8 = uv + texelSize * vec2(0.0, -2.0);
  vRowUv9 = uv + texelSize * vec2(2.0, -2.0);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,yE={thresholdLevel:10,thresholdRange:1};class TE extends Yt{constructor(e){const{inputBuffer:t=null,thresholdLevel:i,thresholdRange:r,...s}={...yE,...e};super({name:"DownsampleThresholdMaterial",fragmentShader:EE,vertexShader:ME,blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,...s,uniforms:{inputBuffer:new ae(t),texelSize:new ae(new ke),thresholdLevel:new ae(i),thresholdRange:new ae(r),...s.uniforms}})}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){this.uniforms.inputBuffer.value=e}get thresholdLevel(){return this.uniforms.thresholdLevel.value}set thresholdLevel(e){this.uniforms.thresholdLevel.value=e}get thresholdRange(){return this.uniforms.thresholdRange.value}set thresholdRange(e){this.uniforms.thresholdRange.value=e}}const wE=`#include <common>

#define SQRT_2 (0.7071067811865476)

uniform sampler2D inputBuffer;

uniform vec2 texelSize;
uniform float ghostAmount;
uniform float haloAmount;
uniform float chromaticAberration;

in vec2 vUv;
in vec2 vAspectRatio;

vec3 sampleGhost(const vec2 direction, const vec3 color, const float offset) {
  vec2 suv = clamp(1.0 - vUv + direction * offset, 0.0, 1.0);
  vec3 result = texture(inputBuffer, suv).rgb * color;

  // Falloff at the perimeter.
  float d = clamp(length(0.5 - suv) / (0.5 * SQRT_2), 0.0, 1.0);
  result *= pow(1.0 - d, 3.0);
  return result;
}

vec4 sampleGhosts(float amount) {
  vec3 color = vec3(0.0);
  vec2 direction = vUv - 0.5;
  color += sampleGhost(direction, vec3(0.8, 0.8, 1.0), -5.0);
  color += sampleGhost(direction, vec3(1.0, 0.8, 0.4), -1.5);
  color += sampleGhost(direction, vec3(0.9, 1.0, 0.8), -0.4);
  color += sampleGhost(direction, vec3(1.0, 0.8, 0.4), -0.2);
  color += sampleGhost(direction, vec3(0.9, 0.7, 0.7), -0.1);
  color += sampleGhost(direction, vec3(0.5, 1.0, 0.4), 0.7);
  color += sampleGhost(direction, vec3(0.5, 0.5, 0.5), 1.0);
  color += sampleGhost(direction, vec3(1.0, 1.0, 0.6), 2.5);
  color += sampleGhost(direction, vec3(0.5, 0.8, 1.0), 10.0);
  return vec4(color * amount, 1.0);
}

// Reference: https://john-chapman.github.io/2017/11/05/pseudo-lens-flare.html
float cubicRingMask(const float x, const float radius, const float thickness) {
  float v = min(abs(x - radius) / thickness, 1.0);
  return 1.0 - v * v * (3.0 - 2.0 * v);
}

vec3 sampleHalo(const float radius) {
  vec2 direction = normalize((vUv - 0.5) / vAspectRatio) * vAspectRatio;
  vec3 offset = vec3(texelSize.x * chromaticAberration) * vec3(-1.0, 0.0, 1.0);
  vec2 suv = fract(1.0 - vUv + direction * radius);
  vec3 result = vec3(
    texture(inputBuffer, suv + direction * offset.r).r,
    texture(inputBuffer, suv + direction * offset.g).g,
    texture(inputBuffer, suv + direction * offset.b).b
  );

  // Falloff at the center and perimeter.
  vec2 wuv = (vUv - vec2(0.5, 0.0)) / vAspectRatio + vec2(0.5, 0.0);
  float d = saturate(distance(wuv, vec2(0.5)));
  result *= cubicRingMask(d, 0.45, 0.25);
  return result;
}

vec4 sampleHalos(const float amount) {
  vec3 color = vec3(0.0);
  color += sampleHalo(0.3);
  return vec4(color, 1.0) * amount;
}

void main() {
  gl_FragColor += sampleGhosts(ghostAmount);
  gl_FragColor += sampleHalos(haloAmount);
}

`,AE=`uniform vec2 texelSize;

out vec2 vUv;
out vec2 vAspectRatio;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vAspectRatio = vec2(texelSize.x / texelSize.y, 1.0);
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,bE={ghostAmount:.001,haloAmount:.001,chromaticAberration:10};class RE extends Yt{constructor(e){const{inputBuffer:t=null,ghostAmount:i,haloAmount:r,chromaticAberration:s,...a}={...bE,...e};super({name:"LensFlareFeaturesMaterial",fragmentShader:wE,vertexShader:AE,blending:rn,toneMapped:!1,depthWrite:!1,depthTest:!1,uniforms:{inputBuffer:new ae(t),texelSize:new ae(new ke),ghostAmount:new ae(i),haloAmount:new ae(r),chromaticAberration:new ae(s),...a.uniforms}})}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){this.uniforms.inputBuffer.value=e}get ghostAmount(){return this.uniforms.ghostAmount.value}set ghostAmount(e){this.uniforms.ghostAmount.value=e}get haloAmount(){return this.uniforms.haloAmount.value}set haloAmount(e){this.uniforms.haloAmount.value=e}get chromaticAberration(){return this.uniforms.chromaticAberration.value}set chromaticAberration(e){this.uniforms.chromaticAberration.value=e}}const CE=`uniform sampler2D bloomBuffer;
uniform sampler2D featuresBuffer;
uniform float intensity;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  vec3 bloom = texture(bloomBuffer, uv).rgb;
  vec3 features = texture(featuresBuffer, uv).rgb;
  outputColor = vec4(inputColor.rgb + (bloom + features) * intensity, inputColor.a);
}
`,PE={blendFunction:ot.NORMAL,resolutionScale:.5,width:Kn.AUTO_SIZE,height:Kn.AUTO_SIZE,intensity:.005};class DE extends $r{constructor(e){const{blendFunction:t,resolutionScale:i,width:r,height:s,resolutionX:a=r,resolutionY:o=s,intensity:c}={...PE,...e};super("LensFlareEffect",CE,{blendFunction:t,attributes:Yn.CONVOLUTION,uniforms:new Map(Object.entries({bloomBuffer:new ae(null),featuresBuffer:new ae(null),intensity:new ae(1)}))}),this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.renderTarget1=new Jt(1,1,{depthBuffer:!1,stencilBuffer:!1,type:Vt}),this.renderTarget1.texture.name="LensFlare.Target1",this.renderTarget2=new Jt(1,1,{depthBuffer:!1,stencilBuffer:!1,type:Vt}),this.renderTarget2.texture.name="LensFlare.Target2",this.thresholdMaterial=new TE,this.thresholdPass=new Zu(this.thresholdMaterial),this.blurPass=new J_,this.blurPass.levels=8,this.preBlurPass=new k_({kernelSize:Al.SMALL}),this.featuresMaterial=new RE,this.featuresPass=new Zu(this.featuresMaterial),this.uniforms.get("bloomBuffer").value=this.blurPass.texture,this.uniforms.get("featuresBuffer").value=this.renderTarget1.texture,this.resolution=new Kn(this,a,o,i),this.resolution.addEventListener("change",this.onResolutionChange),this.intensity=c}initialize(e,t,i){this.thresholdPass.initialize(e,t,i),this.blurPass.initialize(e,t,i),this.preBlurPass.initialize(e,t,i),this.featuresPass.initialize(e,t,i)}update(e,t,i){this.thresholdPass.render(e,t,this.renderTarget1),this.blurPass.render(e,this.renderTarget1,null),this.preBlurPass.render(e,this.renderTarget1,this.renderTarget2),this.featuresPass.render(e,this.renderTarget2,this.renderTarget1)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t);const{width:r,height:s}=i;this.renderTarget1.setSize(r,s),this.renderTarget2.setSize(r,s),this.thresholdMaterial.setSize(r,s),this.blurPass.setSize(r,s),this.preBlurPass.setSize(r,s),this.featuresMaterial.setSize(r,s)}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}get thresholdLevel(){return this.thresholdMaterial.thresholdLevel}set thresholdLevel(e){this.thresholdMaterial.thresholdLevel=e}get thresholdRange(){return this.thresholdMaterial.thresholdRange}set thresholdRange(e){this.thresholdMaterial.thresholdRange=e}}const UE=`#include "core/depth"
#include "core/packing"
#include "core/transform"

uniform highp sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 inverseProjectionMatrix;

vec3 reconstructNormal(const vec2 uv) {
  float depth = readDepth(uv);
  depth = reverseLogDepth(depth, cameraNear, cameraFar);
  vec3 position = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 dx = dFdx(position);
  vec3 dy = dFdy(position);
  return normalize(cross(dx, dy));
}

vec3 readNormal(const vec2 uv) {
  #ifdef OCT_ENCODED
  return unpackVec2ToNormal(texture(normalBuffer, uv).xy);
  #else // OCT_ENCODED
  return 2.0 * texture(normalBuffer, uv).xyz - 1.0;
  #endif // OCT_ENCODED
}

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef RECONSTRUCT_FROM_DEPTH
  vec3 normal = reconstructNormal(uv);
  #else // RECONSTRUCT_FROM_DEPTH
  vec3 normal = readNormal(uv);
  #endif // RECONSTRUCT_FROM_DEPTH

  outputColor = vec4(normal * 0.5 + 0.5, inputColor.a);
}
`;var IE=Object.defineProperty,vf=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&IE(e,t,r),r};const LE={blendFunction:ot.SRC,octEncoded:!1,reconstructFromDepth:!1};class gf extends $r{constructor(e,t){const{blendFunction:i,normalBuffer:r=null,octEncoded:s,reconstructFromDepth:a}={...LE,...t};super("NormalEffect",Ei(UE,{core:{depth:Nl,packing:Yd,transform:jd}}),{blendFunction:i,attributes:Yn.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new ae(r),projectionMatrix:new ae(new rt),inverseProjectionMatrix:new ae(new rt)}))}),this.camera=e,e!=null&&(this.mainCamera=e),this.octEncoded=s,this.reconstructFromDepth=a}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}update(e,t,i){const r=this.uniforms,s=r.get("projectionMatrix"),a=r.get("inverseProjectionMatrix"),o=this.camera;o!=null&&(s.value.copy(o.projectionMatrix),a.value.copy(o.projectionMatrixInverse))}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}}vf([en("OCT_ENCODED")],gf.prototype,"octEncoded");vf([en("RECONSTRUCT_FROM_DEPTH")],gf.prototype,"reconstructFromDepth");let Pn,jn,ps,_f,$i,As,Ir,nn,Ga,ms;const os=new z,Ph=new z,NE=new Date("2000-06-01T10:00:00Z"),OE=new fd(0,Bd(67),1e3),Tr=OE.toECEF(),FE=Si.WGS84.getSurfaceNormal(Tr);function BE(){const n=document.getElementById("container");_2(n!=null);const e=window.innerWidth/window.innerHeight;jn=new ln(75,e,10,1e6),jn.position.copy(Tr),jn.up.copy(FE),ps=new v2(jn,n),ps.enableDamping=!0,ps.minDistance=1e3,ps.target.copy(Tr),_f=new dm,$i=new Nc,As=new ql;const t=new In(new Ps(2,2),As);t.frustumCulled=!1,$i.add(t),Ir=new JS,Ir.position.copy(Tr),$i.add(Ir),nn=new dE({distance:300}),nn.target.position.copy(Tr),nn.castShadow=!0,nn.shadow.camera.top=300,nn.shadow.camera.bottom=-300,nn.shadow.camera.left=-300,nn.shadow.camera.right=300,nn.shadow.camera.near=0,nn.shadow.camera.far=600,nn.shadow.mapSize.width=2048,nn.shadow.mapSize.height=2048,nn.shadow.normalBias=1,$i.add(nn),$i.add(nn.target);const i=new cs;Si.WGS84.getEastNorthUpFrame(Tr).decompose(i.position,i.quaternion,i.scale),$i.add(i);const r=new In(new yl(200,60,256,64),new em({color:"white",roughness:.5,ior:1.45,clearcoat:1,clearcoatRoughness:.1}));r.castShadow=!0,r.receiveShadow=!0,i.add(r),Ga=new An(jn),Pn=new $g({depth:!1,logarithmicDepthBuffer:!0}),Pn.setPixelRatio(window.devicePixelRatio),Pn.setSize(window.innerWidth,window.innerHeight),Pn.toneMapping=vi,Pn.toneMappingExposure=10,Pn.shadowMap.enabled=!0,Pn.shadowMap.type=Uh,ms=new n_(Pn,{frameBufferType:Vt,multisampling:8}),ms.addPass(new Q_($i,jn)),ms.addPass(new Ju(jn,Ga)),ms.addPass(new Ju(jn,new DE,new r2({mode:vn.AGX}),new SE)),new XS().setTypeFromRenderer(Pn).load("/assets/textures/atmosphere",zE),n.appendChild(Pn.domElement),window.addEventListener("resize",HE)}function zE(n){Object.assign(As,n),nn.transmittanceTexture=n.transmittanceTexture,Ir.irradianceTexture=n.irradianceTexture,Object.assign(Ga,n),Pn.setAnimationLoop(GE)}function HE(){jn.aspect=window.innerWidth/window.innerHeight,jn.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight)}function GE(){const n=+NE+_f.getElapsedTime()*5e6%864e5;vS(n,os),gS(n,Ph),As.sunDirection.copy(os),As.moonDirection.copy(Ph),nn.sunDirection.copy(os),Ir.sunDirection.copy(os),Ga.sunDirection.copy(os),nn.update(),Ir.update(),ps.update(),ms.render()}window.addEventListener("load",BE);
