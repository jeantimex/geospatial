import{e as Pe,x as bt,y as Je,z as eo,A as to,F as ro,I as Ba,k as dt,L as ft,J as mn,U as R,K as no,E as Ii,X as za,q as Fa,S as ta,f as Ha,b as io,Y as gn,Z as Hr,_ as Gr,$ as Ut,a0 as ao,a1 as Gt,a2 as Or,a as so,a3 as or,a4 as vr,g as Ga,a5 as oo,a6 as ra,h as na,a7 as co,V as B,M as Re,a8 as Rt,Q as uo,v as lo,a9 as Nr,D as ka,aa as Va,H as et,ab as Mt,ac as Ui,l as Di,ad as an,ae as fo,af as ho,ag as vo,ah as po,ai as mo,aj as go,p as Fn,i as Wa,R as _o,ak as So,al as wo}from"./three.module-BQ-k8xsV.js";/**
 * postprocessing v6.37.2 build Fri Mar 28 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Hn=1/1e3,yo=1e3,xo=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<"u"&&document.hidden!==void 0&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return this._delta*Hn}get fixedDelta(){return this._fixedDelta*Hn}set fixedDelta(e){this._fixedDelta=e*yo}get elapsed(){return this._elapsed*Hn}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e!==void 0?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Eo=(()=>{const e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),r=new oo;return r.setAttribute("position",new ra(e,3)),r.setAttribute("uv",new ra(t,2)),r})(),tt=class ii{static get fullscreenGeometry(){return Eo}constructor(t="Pass",r=new ta,i=new Ha){this.name=t,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let r=this.screen;r!==null?r.material=t:(r=new io(ii.fullscreenGeometry,t),r.frustumCulled=!1,this.scene===null&&(this.scene=new ta),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,r=mn){}render(t,r,i,s,o){throw new Error("Render method not implemented!")}setSize(t,r){}initialize(t,r,i){}dispose(){for(const t of Object.keys(this)){const r=this[t];(r instanceof dt||r instanceof vr||r instanceof Ga||r instanceof ii)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},To=class extends tt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,r,i,s){const o=e.state.buffers.stencil;o.setLocked(!1),o.setTest(!1)}},Ro=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Oi="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",$a=class extends Ut{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new R(null),opacity:new R(1)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ro,vertexShader:Oi})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},ja=class extends tt{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new $a,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new dt(1,1,{minFilter:ft,magFilter:ft,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,r,i,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,r){r!==void 0&&(this.renderTarget.texture.type=r,r!==bt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":e!==null&&e.outputColorSpace===Je&&(this.renderTarget.texture.colorSpace=Je))}},ia=new gn,Xa=class extends tt{constructor(e=!0,t=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,r){this.color=e,this.depth=t,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,r,i,s){const o=this.overrideClearColor,c=this.overrideClearAlpha,d=e.getClearAlpha(),l=o!==null,m=c>=0;l?(e.getClearColor(ia),e.setClearColor(o,m?c:d)):m&&e.setClearAlpha(c),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),l?e.setClearColor(ia,d):m&&e.setClearAlpha(d)}},Ao=class extends tt{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new Xa(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,r,i,s){const o=e.getContext(),c=e.state.buffers,d=this.scene,l=this.camera,m=this.clearPass,S=this.inverted?0:1,x=1-S;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.stencil.setFunc(o.ALWAYS,S,4294967295),c.stencil.setClear(x),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(e,null):(m.render(e,t),m.render(e,r))),this.renderToScreen?(e.setRenderTarget(null),e.render(d,l)):(e.setRenderTarget(t),e.render(d,l),e.setRenderTarget(r),e.render(d,l)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(o.EQUAL,1,4294967295),c.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.stencil.setLocked(!0)}},Q1=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,r,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ja,this.depthTexture=null,this.passes=[],this.timer=new xo,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const t=this.inputBuffer,r=this.multisampling;r>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):r!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new Pe),r=e.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===bt&&e.outputColorSpace===Je&&(this.inputBuffer.texture.colorSpace=Je,this.outputBuffer.texture.colorSpace=Je,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const s of this.passes)s.initialize(e,r,i)}}replaceRenderer(e,t=!0){const r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(e),t&&i!==null&&(i.removeChild(r.domElement),i.appendChild(e.domElement)),r}createDepthTexture(){const e=this.depthTexture=new eo;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=to,e.type=ro):e.type=Ba,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,t,r,i){const s=this.renderer,o=s===null?new Pe:s.getDrawingBufferSize(new Pe),c={minFilter:ft,magFilter:ft,stencilBuffer:t,depthBuffer:e,type:r},d=new dt(o.width,o.height,c);return i>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=i),r===bt&&s!==null&&s.outputColorSpace===Je&&(d.texture.colorSpace=Je),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const r=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new Pe),o=i.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(e.setRenderer(i),e.setSize(s.width,s.height),e.initialize(i,o,c),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?r.splice(t,0,e):r.push(e),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(e of r)e.setDepthTexture(d)}else e.setDepthTexture(this.depthTexture)}removePass(e){const t=this.passes,r=t.indexOf(e);if(r!==-1&&t.splice(r,1).length>0){if(this.depthTexture!==null){const o=(d,l)=>d||l.needsDepthTexture;t.reduce(o,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&r===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,r=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,o=!1,c,d,l;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(t,i,s,e,o),m.needsSwap&&(o&&(r.renderToScreen=m.renderToScreen,c=t.getContext(),d=t.state.buffers.stencil,d.setFunc(c.NOTEQUAL,1,4294967295),r.render(t,i,s,e,o),d.setFunc(c.EQUAL,1,4294967295)),l=i,i=s,s=l),m instanceof Ao?o=!0:m instanceof To&&(o=!1))}setSize(e,t,r){const i=this.renderer,s=i.getSize(new Pe);(e===void 0||t===void 0)&&(e=s.width,t=s.height),(s.width!==e||s.height!==t)&&i.setSize(e,t,r);const o=i.getDrawingBufferSize(new Pe);this.inputBuffer.setSize(o.width,o.height),this.outputBuffer.setSize(o.width,o.height);for(const c of this.passes)c.setSize(o.width,o.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),tt.fullscreenGeometry.dispose()}},Tt={NONE:0,DEPTH:1,CONVOLUTION:2},ce={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Co=class{constructor(){this.shaderParts=new Map([[ce.FRAGMENT_HEAD,null],[ce.FRAGMENT_MAIN_UV,null],[ce.FRAGMENT_MAIN_IMAGE,null],[ce.VERTEX_HEAD,null],[ce.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Tt.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=za}},Gn=!1,aa=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let r;if(t.material.flatShading)switch(t.material.side){case Gr:r=this.materialsFlatShadedDoubleSide;break;case Hr:r=this.materialsFlatShadedBackSide;break;default:r=this.materialsFlatShaded;break}else switch(t.material.side){case Gr:r=this.materialsDoubleSide;break;case Hr:r=this.materialsBackSide;break;default:r=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=r[2]:t.isInstancedMesh?t.material=r[1]:t.material=r[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof Ut))return e.clone();const t=e.uniforms,r=new Map;for(const s in t){const o=t[s].value;o.isRenderTargetTexture&&(t[s].value=null,r.set(s,o))}const i=e.clone();for(const s of r)t[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){const t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(const r of t)r.uniforms=Object.assign({},e.uniforms),r.side=ao;t[2].skinning=!0,this.materialsBackSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.side=Hr,i}),this.materialsDoubleSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.side=Gr,i}),this.materialsFlatShaded=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=Hr,i}),this.materialsFlatShadedDoubleSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=Gr,i})}}render(e,t,r){const i=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,Gn){const s=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,r);for(const o of s)o[0].material=o[1];this.meshCount!==s.size&&s.clear()}else{const s=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,r),t.overrideMaterial=s}e.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Gn}static set workaroundEnabled(e){Gn=e}},kt=-1,it=class extends Ii{constructor(e,t=kt,r=kt,i=1){super(),this.resizable=e,this.baseSize=new Pe(1,1),this.preferredSize=new Pe(t,r),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const e=this.baseSize,t=this.preferredSize,r=this.effectiveSize,i=this.scale;t.width!==kt?r.width=t.width:t.height!==kt?r.width=Math.round(t.height*(e.width/Math.max(e.height,1))):r.width=Math.round(e.width*i),t.height!==kt?r.height=t.height:t.width!==kt?r.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):r.height=Math.round(e.height*i)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(kt),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return kt}},J={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Mo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",bo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Io="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",Uo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Do="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",Oo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",No="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Po="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Lo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Bo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",zo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",Fo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Ho="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Go="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",ko="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",Vo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",Wo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",$o="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",jo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",Xo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Yo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",qo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Zo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",Ko="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Qo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Jo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",ec="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",tc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",rc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",nc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",ic="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",ac="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",sc=new Map([[J.ADD,Mo],[J.ALPHA,bo],[J.AVERAGE,Io],[J.COLOR,Uo],[J.COLOR_BURN,Do],[J.COLOR_DODGE,Oo],[J.DARKEN,No],[J.DIFFERENCE,Po],[J.DIVIDE,Lo],[J.DST,null],[J.EXCLUSION,Bo],[J.HARD_LIGHT,zo],[J.HARD_MIX,Fo],[J.HUE,Ho],[J.INVERT,Go],[J.INVERT_RGB,ko],[J.LIGHTEN,Vo],[J.LINEAR_BURN,Wo],[J.LINEAR_DODGE,$o],[J.LINEAR_LIGHT,jo],[J.LUMINOSITY,Xo],[J.MULTIPLY,Yo],[J.NEGATION,qo],[J.NORMAL,Zo],[J.OVERLAY,Ko],[J.PIN_LIGHT,Qo],[J.REFLECT,Jo],[J.SATURATION,ec],[J.SCREEN,tc],[J.SOFT_LIGHT,rc],[J.SRC,nc],[J.SUBTRACT,ic],[J.VIVID_LIGHT,ac]]),oc=class extends Ii{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new R(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return sc.get(this.blendFunction)}},pr=class extends Ii{constructor(e,t,{attributes:r=Tt.NONE,blendFunction:i=J.NORMAL,defines:s=new Map,uniforms:o=new Map,extensions:c=null,vertexShader:d=null}={}){super(),this.name=e,this.renderer=null,this.attributes=r,this.fragmentShader=t,this.vertexShader=d,this.defines=s,this.uniforms=o,this.extensions=c,this.blendMode=new oc(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=za,this._outputColorSpace=Fa}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=mn){}update(e,t,r){}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof dt||t instanceof vr||t instanceof Ga||t instanceof tt)&&this[e].dispose()}}},Ni={SMALL:1,MEDIUM:2},cc=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,uc="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",lc=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],dc=class extends Ut{constructor(e=new na){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new R(null),texelSize:new R(new na),scale:new R(1),kernel:new R(0)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:cc,vertexShader:uc}),this.setTexelSize(e.x,e.y),this.kernelSize=Ni.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return lc[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){const r=1/e,i=1/t;this.uniforms.texelSize.value.set(r,i,r*.5,i*.5)}},fc=class extends tt{constructor({kernelSize:e=Ni.MEDIUM,resolutionScale:t=.5,width:r=it.AUTO_SIZE,height:i=it.AUTO_SIZE,resolutionX:s=r,resolutionY:o=i}={}){super("KawaseBlurPass"),this.renderTargetA=new dt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const c=this.resolution=new it(this,s,o,t);c.addEventListener("change",d=>this.setSize(c.baseWidth,c.baseHeight)),this._blurMaterial=new dc,this._blurMaterial.kernelSize=e,this.copyMaterial=new $a}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){const o=this.scene,c=this.camera,d=this.renderTargetA,l=this.renderTargetB,m=this.blurMaterial,S=m.kernelSequence;let x=t;this.fullscreenMaterial=m;for(let b=0,U=S.length;b<U;++b){const L=(b&1)===0?d:l;m.kernel=S[b],m.inputBuffer=x.texture,e.setRenderTarget(L),e.render(o,c),x=L}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=x.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,c)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t);const i=r.width,s=r.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(e,t)}initialize(e,t,r){r!==void 0&&(this.renderTargetA.texture.type=r,this.renderTargetB.texture.type=r,r!==bt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):e!==null&&e.outputColorSpace===Je&&(this.renderTargetA.texture.colorSpace=Je,this.renderTargetB.texture.colorSpace=Je))}static get AUTO_SIZE(){return it.AUTO_SIZE}},hc=`#include <common>
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
}`,vc=class extends Ut{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Or.replace(/\D+/g,"")},uniforms:{inputBuffer:new R(null),threshold:new R(0),smoothing:new R(1),range:new R(null)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hc,vertexShader:Oi}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},pc=class extends tt{constructor({renderTarget:e,luminanceRange:t,colorOutput:r,resolutionScale:i=1,width:s=it.AUTO_SIZE,height:o=it.AUTO_SIZE,resolutionX:c=s,resolutionY:d=o}={}){super("LuminancePass"),this.fullscreenMaterial=new vc(r,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new dt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new it(this,c,d,i);l.addEventListener("change",m=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,r,i,s){const o=this.fullscreenMaterial;o.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}initialize(e,t,r){r!==void 0&&r!==bt&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},mc=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,gc="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",_c=class extends Ut{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new R(null),texelSize:new R(new Pe)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mc,vertexShader:gc})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Sc=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,wc="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",yc=class extends Ut{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new R(null),supportBuffer:new R(null),texelSize:new R(new Pe),radius:new R(.85)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Sc,vertexShader:wc})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},xc=class extends tt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new dt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new _c,this.upsamplingMaterial=new yc,this.resolution=new Pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let r=0;r<e;++r){const i=t.clone();i.texture.name="Downsampling.Mipmap"+r,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(t);for(let r=1,i=e-1;r<i;++r){const s=t.clone();s.texture.name="Upsampling.Mipmap"+r,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,r,i,s){const{scene:o,camera:c}=this,{downsamplingMaterial:d,upsamplingMaterial:l}=this,{downsamplingMipmaps:m,upsamplingMipmaps:S}=this;let x=t;this.fullscreenMaterial=d;for(let b=0,U=m.length;b<U;++b){const L=m[b];d.setSize(x.width,x.height),d.inputBuffer=x.texture,e.setRenderTarget(L),e.render(o,c),x=L}this.fullscreenMaterial=l;for(let b=S.length-1;b>=0;--b){const U=S[b];l.setSize(x.width,x.height),l.inputBuffer=x.texture,l.supportBuffer=m[b].texture,e.setRenderTarget(U),e.render(o,c),x=U}}setSize(e,t){const r=this.resolution;r.set(e,t);let i=r.width,s=r.height;for(let o=0,c=this.downsamplingMipmaps.length;o<c;++o)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[o].setSize(i,s),o<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[o].setSize(i,s)}initialize(e,t,r){if(r!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=r;if(r!==bt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(e!==null&&e.outputColorSpace===Je)for(const s of i)s.texture.colorSpace=Je}}dispose(){super.dispose();for(const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},sa=class extends tt{constructor(e,t="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=e,this.input=t}setInput(e){this.input=e}render(e,t,r,i,s){const o=this.fullscreenMaterial.uniforms;t!==null&&o!==void 0&&o[this.input]!==void 0&&(o[this.input].value=t.texture),e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}initialize(e,t,r){r!==void 0&&r!==bt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Ec=class extends tt{constructor(e,t,r=null){super("RenderPass",e,t),this.needsSwap=!1,this.clearPass=new Xa,this.overrideMaterialManager=r===null?null:new aa(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){const e=this.overrideMaterialManager;return e!==null?e.material:null}set overrideMaterial(e){const t=this.overrideMaterialManager;e!==null?t!==null?t.setMaterial(e):this.overrideMaterialManager=new aa(e):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,r,i,s){const o=this.scene,c=this.camera,d=this.selection,l=c.layers.mask,m=o.background,S=e.shadowMap.autoUpdate,x=this.renderToScreen?null:t;d!==null&&c.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(o.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(x),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(e,o,c):e.render(o,c),c.layers.mask=l,o.background=m,e.shadowMap.autoUpdate=S}},rt={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Tc=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Rc=class extends Ut{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new R(null),luminanceBuffer1:new R(null),minLuminance:new R(.01),deltaTime:new R(0),tau:new R(1)},extensions:{shaderTextureLOD:!0},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Tc,vertexShader:Oi})}set luminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}setLuminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}set luminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}setLuminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}set mipLevel1x1(e){this.defines.MIP_LEVEL_1X1=e.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(e){this.mipLevel1x1=e}set deltaTime(e){this.uniforms.deltaTime.value=e}setDeltaTime(e){this.uniforms.deltaTime.value=e}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(e){this.uniforms.minLuminance.value=e}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(e){this.uniforms.minLuminance.value=e}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(e){this.uniforms.tau.value=e}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(e){this.uniforms.tau.value=e}},Ac=class extends tt{constructor(e,{minLuminance:t=.01,adaptationRate:r=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Rc,this.needsSwap=!1,this.renderTargetPrevious=new dt(1,1,{minFilter:or,magFilter:or,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=e,i.minLuminance=t,i.adaptationRate=r,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new ja(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(e){this.fullscreenMaterial.mipLevel1x1=e}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(e){this.fullscreenMaterial.adaptationRate=e}render(e,t,r,i,s){this.fullscreenMaterial.deltaTime=i,e.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),e.render(this.scene,this.camera),this.copyPass.render(e,this.renderTargetAdapted)}},Cc=`#include <tonemapping_pars_fragment>
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
}`,J1=class extends pr{constructor({blendFunction:e=J.SRC,adaptive:t=!1,mode:r=t?rt.REINHARD2_ADAPTIVE:rt.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:o=s,middleGrey:c=.6,minLuminance:d=.01,averageLuminance:l=1,adaptationRate:m=1}={}){super("ToneMappingEffect",Cc,{blendFunction:e,uniforms:new Map([["luminanceBuffer",new R(null)],["maxLuminance",new R(s)],["whitePoint",new R(o)],["middleGrey",new R(c)],["averageLuminance",new R(l)]])}),this.renderTargetLuminance=new dt(1,1,{minFilter:no,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new pc({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Ac(this.luminancePass.texture,{minLuminance:d,adaptationRate:m}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=r}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(e){if(this.mode===e)return;const r=Or.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",e.toFixed(0)),e){case rt.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case rt.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case rt.CINEON:case rt.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",r);break;case rt.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case rt.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case rt.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=e===rt.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(e){this.mode=e}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(e){this.uniforms.get("whitePoint").value=e}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(e){this.uniforms.get("middleGrey").value=e}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(e){this.uniforms.get("averageLuminance").value=e}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(e){const t=Math.max(0,Math.ceil(Math.log2(e))),r=Math.pow(2,t);this.luminancePass.resolution.setPreferredSize(r,r),this.adaptiveLuminanceMaterial.mipLevel1x1=t}getResolution(){return this.resolution}setResolution(e){this.resolution=e}get adaptive(){return this.mode===rt.REINHARD2_ADAPTIVE}set adaptive(e){this.mode=e?rt.REINHARD2_ADAPTIVE:rt.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(e){this.adaptiveLuminanceMaterial.adaptationRate=e}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(e){console.warn(this.name,"distinction was removed.")}update(e,t,r){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(e,t),this.adaptiveLuminancePass.render(e,null,null,r))}initialize(e,t,r){this.adaptiveLuminancePass.initialize(e,t,r)}},Mc=`#include <common>
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
}`,bc="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Ic=class extends Ut{constructor(e,t,r,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Or.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new R(null),depthBuffer:new R(null),resolution:new R(new Pe),texelSize:new R(new Pe),cameraNear:new R(.3),cameraFar:new R(1e3),aspect:new R(1),time:new R(0)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),e&&this.setShaderParts(e),t&&this.setDefines(t),r&&this.setUniforms(r),this.copyCameraSettings(i)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=mn){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=Mc.replace(ce.FRAGMENT_HEAD,e.get(ce.FRAGMENT_HEAD)||"").replace(ce.FRAGMENT_MAIN_UV,e.get(ce.FRAGMENT_MAIN_UV)||"").replace(ce.FRAGMENT_MAIN_IMAGE,e.get(ce.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=bc.replace(ce.VERTEX_HEAD,e.get(ce.VERTEX_HEAD)||"").replace(ce.VERTEX_MAIN_SUPPORT,e.get(ce.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(const t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(const t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(const t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof so?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){const r=this.uniforms;r.resolution.value.set(e,t),r.texelSize.value.set(1/e,1/t),r.aspect.value=e/t}static get Section(){return ce}};function oa(e,t,r){for(const i of t){const s="$1"+e+i.charAt(0).toUpperCase()+i.slice(1),o=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const c of r.entries())c[1]!==null&&r.set(c[0],c[1].replace(o,s))}}function Uc(e,t,r){let i=t.getFragmentShader(),s=t.getVertexShader();const o=i!==void 0&&/mainImage/.test(i),c=i!==void 0&&/mainUv/.test(i);if(r.attributes|=t.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(c&&(r.attributes&Tt.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!o&&!c)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=r.shaderParts;let m=l.get(ce.FRAGMENT_HEAD)||"",S=l.get(ce.FRAGMENT_MAIN_UV)||"",x=l.get(ce.FRAGMENT_MAIN_IMAGE)||"",b=l.get(ce.VERTEX_HEAD)||"",U=l.get(ce.VERTEX_MAIN_SUPPORT)||"";const L=new Set,O=new Set;if(c&&(S+=`	${e}MainUv(UV);
`,r.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const q=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);U+=`	${e}MainSupport(`,U+=q?`vUv);
`:`);
`;for(const I of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const Z of I[1].split(/\s*,\s*/))r.varyings.add(Z),L.add(Z),O.add(Z);for(const I of s.matchAll(d))O.add(I[1])}for(const q of i.matchAll(d))O.add(q[1]);for(const q of t.defines.keys())O.add(q.replace(/\([\w\s,]*\)/g,""));for(const q of t.uniforms.keys())O.add(q);O.delete("while"),O.delete("for"),O.delete("if"),t.uniforms.forEach((q,I)=>r.uniforms.set(e+I.charAt(0).toUpperCase()+I.slice(1),q)),t.defines.forEach((q,I)=>r.defines.set(e+I.charAt(0).toUpperCase()+I.slice(1),q));const Y=new Map([["fragment",i],["vertex",s]]);oa(e,O,r.defines),oa(e,O,Y),i=Y.get("fragment"),s=Y.get("vertex");const ee=t.blendMode;if(r.blendModes.set(ee.blendFunction,ee),o){t.inputColorSpace!==null&&t.inputColorSpace!==r.colorSpace&&(x+=t.inputColorSpace===Je?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==Fa?r.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(r.colorSpace=t.inputColorSpace);const q=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;x+=`${e}MainImage(color0, UV, `,(r.attributes&Tt.DEPTH)!==0&&q.test(i)&&(x+="depth, ",r.readDepth=!0),x+=`color1);
	`;const I=e+"BlendOpacity";r.uniforms.set(I,ee.opacity),x+=`color0 = blend${ee.blendFunction}(color0, color1, ${I});

	`,m+=`uniform float ${I};

`}if(m+=i+`
`,s!==null&&(b+=s+`
`),l.set(ce.FRAGMENT_HEAD,m),l.set(ce.FRAGMENT_MAIN_UV,S),l.set(ce.FRAGMENT_MAIN_IMAGE,x),l.set(ce.VERTEX_HEAD,b),l.set(ce.VERTEX_MAIN_SUPPORT,U),t.extensions!==null)for(const q of t.extensions)r.extensions.add(q)}}var ed=class extends tt{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new Ic(null,null,null,e),this.listener=r=>this.handleEvent(r),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(e){for(const t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(const t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){const t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=e.sort((t,r)=>r.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const e=new Co;let t=0;for(const c of this.effects)if(c.blendMode.blendFunction===J.DST)e.attributes|=c.getAttributes()&Tt.DEPTH;else{if((e.attributes&c.getAttributes()&Tt.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);Uc("e"+t++,c,e)}let r=e.shaderParts.get(ce.FRAGMENT_HEAD),i=e.shaderParts.get(ce.FRAGMENT_MAIN_IMAGE),s=e.shaderParts.get(ce.FRAGMENT_MAIN_UV);const o=/\bblend\b/g;for(const c of e.blendModes.values())r+=c.getShaderCode().replace(o,`blend${c.blendFunction}`)+`
`;(e.attributes&Tt.DEPTH)!==0?(e.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,e.colorSpace===Je&&(i+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(ce.FRAGMENT_HEAD,r),e.shaderParts.set(ce.FRAGMENT_MAIN_IMAGE,i),e.shaderParts.set(ce.FRAGMENT_MAIN_UV,s);for(const[c,d]of e.shaderParts)d!==null&&e.shaderParts.set(c,d.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=mn){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(const r of this.effects)r.setDepthTexture(e,t)}render(e,t,r,i,s){for(const o of this.effects)o.update(e,t,i);if(!this.skipRendering||this.renderToScreen){const o=this.fullscreenMaterial;o.inputBuffer=t.texture,o.time+=i*this.timeScale,e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(const r of this.effects)r.setSize(e,t)}initialize(e,t,r){this.renderer=e;for(const i of this.effects)i.initialize(e,t,r);this.updateMaterial(),r!==void 0&&r!==bt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const e of this.effects)e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){switch(e.type){case"change":this.recompile();break}}},td=class extends tt{constructor(e,t,{renderTarget:r,resolutionScale:i=1,width:s=it.AUTO_SIZE,height:o=it.AUTO_SIZE,resolutionX:c=s,resolutionY:d=o}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Ec(e,t,new co);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const m=l.getClearPass();m.overrideClearColor=new gn(7829503),m.overrideClearAlpha=1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new dt(1,1,{minFilter:or,magFilter:or}),this.renderTarget.texture.name="NormalPass.Target");const S=this.resolution=new it(this,c,d,i);S.addEventListener("change",x=>this.setSize(S.baseWidth,S.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){const o=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,o,o)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}};const Dc=new B;function Ya(e,t,r=new B,i){const{x:s,y:o,z:c}=e,d=t.x,l=t.y,m=t.z,S=s*s*d,x=o*o*l,b=c*c*m,U=S+x+b,L=Math.sqrt(1/U);if(!Number.isFinite(L))return;const O=Dc.copy(e).multiplyScalar(L);if(U<((i==null?void 0:i.centerTolerance)??.1))return r.copy(O);const Y=O.multiply(t).multiplyScalar(2);let ee=(1-L)*e.length()/(Y.length()/2),q=0,I,Z,F,Ae;do{ee-=q,I=1/(1+ee*d),Z=1/(1+ee*l),F=1/(1+ee*m);const be=I*I,Be=Z*Z,ze=F*F,se=be*I,pe=Be*Z,Ie=ze*F;Ae=S*be+x*Be+b*ze-1,q=Ae/((S*se*d+x*pe*l+b*Ie*m)*-2)}while(Math.abs(Ae)>1e-12);return r.set(s*I,o*Z,c*F)}const kr=new B,ca=new B,ua=new B,ai=class{constructor(t,r,i){this.radii=new B(t,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(t=new B){const{x:r,y:i,z:s}=this.radii;return t.set(1/r,1/i,1/s)}reciprocalRadiiSquared(t=new B){const{x:r,y:i,z:s}=this.radii;return t.set(1/r**2,1/i**2,1/s**2)}projectOnSurface(t,r=new B,i){return Ya(t,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(t,r=new B){return r.multiplyVectors(this.reciprocalRadiiSquared(kr),t).normalize()}getEastNorthUpVectors(t,r=new B,i=new B,s=new B){this.getSurfaceNormal(t,s),r.set(-t.y,t.x,0).normalize(),i.crossVectors(s,r).normalize()}getEastNorthUpFrame(t,r=new Re){const i=kr,s=ca,o=ua;return this.getEastNorthUpVectors(t,i,s,o),r.makeBasis(i,s,o).setPosition(t)}getIntersection(t,r=new B){const i=this.reciprocalRadii(kr),s=ca.copy(i).multiply(t.origin),o=ua.copy(i).multiply(t.direction),c=s.lengthSq(),d=o.lengthSq(),l=s.dot(o),m=l**2-d*(c-1);if(c===1)return r.copy(t.origin);if(c>1){if(l>=0||m<0)return;const S=Math.sqrt(m),x=(-l-S)/d,b=(-l+S)/d;return t.at(Math.min(x,b),r)}if(c<1){const S=l**2-d*(c-1),x=Math.sqrt(S),b=(-l+x)/d;return t.at(b,r)}if(l<0)return t.at(-l/d,r)}getOsculatingSphereCenter(t,r,i=new B){const s=this.radii.x**2,o=kr.set(t.x/s,t.y/s,t.z/this.radii.z**2).normalize();return i.copy(o.multiplyScalar(-r).add(t))}};ai.WGS84=new ai(6378137,6378137,6356752314245179e-9);let zt=ai;const Vr=new B,la=new B,Tr=class si{constructor(t=0,r=0,i=0){this.longitude=t,this.latitude=r,this.height=i}set(t,r,i){return this.longitude=t,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new si(this.longitude,this.latitude,this.height)}copy(t){return this.longitude=t.longitude,this.latitude=t.latitude,this.height=t.height,this}equals(t){return t.longitude===this.longitude&&t.latitude===this.latitude&&t.height===this.height}setLongitude(t){return this.longitude=t,this}setLatitude(t){return this.latitude=t,this}setHeight(t){return this.height=t,this}normalize(){return this.longitude<si.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(t,r){const i=((r==null?void 0:r.ellipsoid)??zt.WGS84).reciprocalRadiiSquared(Vr),s=Ya(t,i,la,r);if(s==null)throw new Error(`Could not project position to ellipsoid surface: ${t.toArray()}`);const o=Vr.multiplyVectors(s,i).normalize();this.longitude=Math.atan2(o.y,o.x),this.latitude=Math.asin(o.z);const c=Vr.subVectors(t,s);return this.height=Math.sign(c.dot(t))*c.length(),this}toECEF(t=new B,r){const i=(r==null?void 0:r.ellipsoid)??zt.WGS84,s=Vr.multiplyVectors(i.radii,i.radii),o=Math.cos(this.latitude),c=la.set(o*Math.cos(this.longitude),o*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return t.multiplyVectors(s,c),t.divideScalar(Math.sqrt(c.dot(t))).add(c.multiplyScalar(this.height))}fromArray(t,r=0){return this.longitude=t[r],this.latitude=t[r+1],this.height=t[r+2],this}toArray(t=[],r=0){return t[r]=this.longitude,t[r+1]=this.latitude,t[r+2]=this.height,t}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Tr.MIN_LONGITUDE=-Math.PI,Tr.MAX_LONGITUDE=Math.PI,Tr.MIN_LATITUDE=-Math.PI/2,Tr.MAX_LATITUDE=Math.PI/2;let Oc=Tr;var Nc="Invariant failed";function qa(e,t){if(!e)throw new Error(Nc)}let Pc=class extends Nr{load(t,r,i,s){const o=new mo(this.manager);o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{qa(c instanceof ArrayBuffer);try{r(c)}catch(d){s!=null?s(d):console.error(d),this.manager.itemError(t)}},i,s)}};const Lc=128,Bc=128,zc=64,Fc="This is not an object",Hc="This is not a Float16Array object",da="This constructor is not a subclass of Float16Array",Za="The constructor property value is not an object",Gc="Species constructor didn't return TypedArray object",kc="Derived constructor created TypedArray object which was too small length",Mr="Attempting to access detached ArrayBuffer",oi="Cannot convert undefined or null to object",ci="Cannot mix BigInt and other types, use explicit conversions",fa="@@iterator property is not callable",ha="Reduce of empty array with no initial value",Vc="The comparison function must be either a function or undefined",kn="Offset is out of bounds";function _e(e){return(t,...r)=>Qe(e,t,r)}function mr(e,t){return _e(cr(e,t).get)}const{apply:Qe,construct:Rr,defineProperty:Wc,get:Vn,getOwnPropertyDescriptor:cr,getPrototypeOf:Pr,has:ui,ownKeys:Ka,set:va,setPrototypeOf:Qa}=Reflect,$c=Proxy,{EPSILON:jc,MAX_SAFE_INTEGER:pa,isFinite:Ja,isNaN:ur}=Number,{iterator:It,species:Xc,toStringTag:Pi,for:Yc}=Symbol,lr=Object,{create:_n,defineProperty:Lr,freeze:qc,is:ma}=lr,li=lr.prototype,Zc=li.__lookupGetter__?_e(li.__lookupGetter__):(e,t)=>{if(e==null)throw Te(oi);let r=lr(e);do{const i=cr(r,t);if(i!==void 0)return Bt(i,"get")?i.get:void 0}while((r=Pr(r))!==null)},Bt=lr.hasOwn||_e(li.hasOwnProperty),es=Array,ts=es.isArray,Sn=es.prototype,Kc=_e(Sn.join),Qc=_e(Sn.push),Jc=_e(Sn.toLocaleString),Li=Sn[It],eu=_e(Li),{abs:tu,trunc:rs}=Math,wn=ArrayBuffer,ru=wn.isView,ns=wn.prototype,nu=_e(ns.slice),iu=mr(ns,"byteLength"),di=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,au=di&&mr(di.prototype,"byteLength"),Bi=Pr(Uint8Array),su=Bi.from,He=Bi.prototype,ou=He[It],cu=_e(He.keys),uu=_e(He.values),lu=_e(He.entries),du=_e(He.set),ga=_e(He.reverse),fu=_e(He.fill),hu=_e(He.copyWithin),_a=_e(He.sort),Sr=_e(He.slice),vu=_e(He.subarray),Fe=mr(He,"buffer"),Yt=mr(He,"byteOffset"),fe=mr(He,"length"),is=mr(He,Pi),pu=Uint8Array,nt=Uint16Array,Sa=(...e)=>Qe(su,nt,e),zi=Uint32Array,mu=Float32Array,Qt=Pr([][It]()),yn=_e(Qt.next),gu=_e(function*(){}().next),_u=Pr(Qt),Su=DataView.prototype,wu=_e(Su.getUint16),Te=TypeError,Wn=RangeError,as=WeakSet,ss=as.prototype,yu=_e(ss.add),xu=_e(ss.has),xn=WeakMap,Fi=xn.prototype,sn=_e(Fi.get),Eu=_e(Fi.has),Hi=_e(Fi.set),os=new xn,Tu=_n(null,{next:{value:function(){const e=sn(os,this);return yn(e)}},[It]:{value:function(){return this}}});function Ar(e){if(e[It]===Li&&Qt.next===yn)return e;const t=_n(Tu);return Hi(os,t,eu(e)),t}const cs=new xn,us=_n(_u,{next:{value:function(){const e=sn(cs,this);return gu(e)},writable:!0,configurable:!0}});for(const e of Ka(Qt))e!=="next"&&Lr(us,e,cr(Qt,e));function wa(e){const t=_n(us);return Hi(cs,t,e),t}function on(e){return e!==null&&typeof e=="object"||typeof e=="function"}function ya(e){return e!==null&&typeof e=="object"}function cn(e){return is(e)!==void 0}function fi(e){const t=is(e);return t==="BigInt64Array"||t==="BigUint64Array"}function Ru(e){try{return ts(e)?!1:(iu(e),!0)}catch{return!1}}function ls(e){if(di===null)return!1;try{return au(e),!0}catch{return!1}}function Au(e){return Ru(e)||ls(e)}function xa(e){return ts(e)?e[It]===Li&&Qt.next===yn:!1}function Cu(e){return cn(e)?e[It]===ou&&Qt.next===yn:!1}function Wr(e){if(typeof e!="string")return!1;const t=+e;return e!==t+""||!Ja(t)?!1:t===rs(t)}const un=Yc("__Float16Array__");function Mu(e){if(!ya(e))return!1;const t=Pr(e);if(!ya(t))return!1;const r=t.constructor;if(r===void 0)return!1;if(!on(r))throw Te(Za);return ui(r,un)}const hi=1/jc;function bu(e){return e+hi-hi}const ds=6103515625e-14,Iu=65504,fs=.0009765625,Ea=fs*ds,Uu=fs*hi;function Du(e){const t=+e;if(!Ja(t)||t===0)return t;const r=t>0?1:-1,i=tu(t);if(i<ds)return r*bu(i/Ea)*Ea;const s=(1+Uu)*i,o=s-(s-i);return o>Iu||ur(o)?r*(1/0):r*o}const hs=new wn(4),vs=new mu(hs),ps=new zi(hs),yt=new nt(512),xt=new pu(512);for(let e=0;e<256;++e){const t=e-127;t<-24?(yt[e]=0,yt[e|256]=32768,xt[e]=24,xt[e|256]=24):t<-14?(yt[e]=1024>>-t-14,yt[e|256]=1024>>-t-14|32768,xt[e]=-t-1,xt[e|256]=-t-1):t<=15?(yt[e]=t+15<<10,yt[e|256]=t+15<<10|32768,xt[e]=13,xt[e|256]=13):t<128?(yt[e]=31744,yt[e|256]=64512,xt[e]=24,xt[e|256]=24):(yt[e]=31744,yt[e|256]=64512,xt[e]=13,xt[e|256]=13)}function Ct(e){vs[0]=Du(e);const t=ps[0],r=t>>23&511;return yt[r]+((t&8388607)>>xt[r])}const Gi=new zi(2048);for(let e=1;e<1024;++e){let t=e<<13,r=0;for(;(t&8388608)===0;)t<<=1,r-=8388608;t&=-8388609,r+=947912704,Gi[e]=t|r}for(let e=1024;e<2048;++e)Gi[e]=939524096+(e-1024<<13);const gr=new zi(64);for(let e=1;e<31;++e)gr[e]=e<<23;gr[31]=1199570944;gr[32]=2147483648;for(let e=33;e<63;++e)gr[e]=2147483648+(e-32<<23);gr[63]=3347054592;const ms=new nt(64);for(let e=1;e<64;++e)e!==32&&(ms[e]=1024);function he(e){const t=e>>10;return ps[0]=Gi[ms[t]+(e&1023)]+gr[t],vs[0]}function Nt(e){const t=+e;return ur(t)||t===0?0:rs(t)}function $n(e){const t=Nt(e);return t<0?0:t<pa?t:pa}function $r(e,t){if(!on(e))throw Te(Fc);const r=e.constructor;if(r===void 0)return t;if(!on(r))throw Te(Za);return r[Xc]??t}function br(e){if(ls(e))return!1;try{return nu(e,0,0),!1}catch{}return!0}function Ta(e,t){const r=ur(e),i=ur(t);if(r&&i)return 0;if(r)return 1;if(i||e<t)return-1;if(e>t)return 1;if(e===0&&t===0){const s=ma(e,0),o=ma(t,0);if(!s&&o)return-1;if(s&&!o)return 1}return 0}const ki=2,ln=new xn;function rr(e){return Eu(ln,e)||!ru(e)&&Mu(e)}function de(e){if(!rr(e))throw Te(Hc)}function jr(e,t){const r=rr(e),i=cn(e);if(!r&&!i)throw Te(Gc);if(typeof t=="number"){let s;if(r){const o=re(e);s=fe(o)}else s=fe(e);if(s<t)throw Te(kc)}if(fi(e))throw Te(ci)}function re(e){const t=sn(ln,e);if(t!==void 0){const s=Fe(t);if(br(s))throw Te(Mr);return t}const r=e.buffer;if(br(r))throw Te(Mr);const i=Rr(ve,[r,e.byteOffset,e.length],e.constructor);return sn(ln,i)}function Ra(e){const t=fe(e),r=[];for(let i=0;i<t;++i)r[i]=he(e[i]);return r}const gs=new as;for(const e of Ka(He)){if(e===Pi)continue;const t=cr(He,e);Bt(t,"get")&&typeof t.get=="function"&&yu(gs,t.get)}const Ou=qc({get(e,t,r){return Wr(t)&&Bt(e,t)?he(Vn(e,t)):xu(gs,Zc(e,t))?Vn(e,t):Vn(e,t,r)},set(e,t,r,i){return Wr(t)&&Bt(e,t)?va(e,t,Ct(r)):va(e,t,r,i)},getOwnPropertyDescriptor(e,t){if(Wr(t)&&Bt(e,t)){const r=cr(e,t);return r.value=he(r.value),r}return cr(e,t)},defineProperty(e,t,r){return Wr(t)&&Bt(e,t)&&Bt(r,"value")&&(r.value=Ct(r.value)),Wc(e,t,r)}});class ve{constructor(t,r,i){let s;if(rr(t))s=Rr(nt,[re(t)],new.target);else if(on(t)&&!Au(t)){let c,d;if(cn(t)){c=t,d=fe(t);const l=Fe(t);if(br(l))throw Te(Mr);if(fi(t))throw Te(ci);const m=new wn(d*ki);s=Rr(nt,[m],new.target)}else{const l=t[It];if(l!=null&&typeof l!="function")throw Te(fa);l!=null?xa(t)?(c=t,d=t.length):(c=[...t],d=c.length):(c=t,d=$n(c.length)),s=Rr(nt,[d],new.target)}for(let l=0;l<d;++l)s[l]=Ct(c[l])}else s=Rr(nt,arguments,new.target);const o=new $c(s,Ou);return Hi(ln,o,s),o}static from(t,...r){const i=this;if(!ui(i,un))throw Te(da);if(i===ve){if(rr(t)&&r.length===0){const S=re(t),x=new nt(Fe(S),Yt(S),fe(S));return new ve(Fe(Sr(x)))}if(r.length===0)return new ve(Fe(Sa(t,Ct)));const l=r[0],m=r[1];return new ve(Fe(Sa(t,function(S,...x){return Ct(Qe(l,this,[S,...Ar(x)]))},m)))}let s,o;const c=t[It];if(c!=null&&typeof c!="function")throw Te(fa);if(c!=null)xa(t)?(s=t,o=t.length):Cu(t)?(s=t,o=fe(t)):(s=[...t],o=s.length);else{if(t==null)throw Te(oi);s=lr(t),o=$n(s.length)}const d=new i(o);if(r.length===0)for(let l=0;l<o;++l)d[l]=s[l];else{const l=r[0],m=r[1];for(let S=0;S<o;++S)d[S]=Qe(l,m,[s[S],S])}return d}static of(...t){const r=this;if(!ui(r,un))throw Te(da);const i=t.length;if(r===ve){const o=new ve(i),c=re(o);for(let d=0;d<i;++d)c[d]=Ct(t[d]);return o}const s=new r(i);for(let o=0;o<i;++o)s[o]=t[o];return s}keys(){de(this);const t=re(this);return cu(t)}values(){de(this);const t=re(this);return wa(function*(){for(const r of uu(t))yield he(r)}())}entries(){de(this);const t=re(this);return wa(function*(){for(const[r,i]of lu(t))yield[r,he(i)]}())}at(t){de(this);const r=re(this),i=fe(r),s=Nt(t),o=s>=0?s:i+s;if(!(o<0||o>=i))return he(r[o])}with(t,r){de(this);const i=re(this),s=fe(i),o=Nt(t),c=o>=0?o:s+o,d=+r;if(c<0||c>=s)throw Wn(kn);const l=new nt(Fe(i),Yt(i),fe(i)),m=new ve(Fe(Sr(l))),S=re(m);return S[c]=Ct(d),m}map(t,...r){de(this);const i=re(this),s=fe(i),o=r[0],c=$r(i,ve);if(c===ve){const l=new ve(s),m=re(l);for(let S=0;S<s;++S){const x=he(i[S]);m[S]=Ct(Qe(t,o,[x,S,this]))}return l}const d=new c(s);jr(d,s);for(let l=0;l<s;++l){const m=he(i[l]);d[l]=Qe(t,o,[m,l,this])}return d}filter(t,...r){de(this);const i=re(this),s=fe(i),o=r[0],c=[];for(let m=0;m<s;++m){const S=he(i[m]);Qe(t,o,[S,m,this])&&Qc(c,S)}const d=$r(i,ve),l=new d(c);return jr(l),l}reduce(t,...r){de(this);const i=re(this),s=fe(i);if(s===0&&r.length===0)throw Te(ha);let o,c;r.length===0?(o=he(i[0]),c=1):(o=r[0],c=0);for(let d=c;d<s;++d)o=t(o,he(i[d]),d,this);return o}reduceRight(t,...r){de(this);const i=re(this),s=fe(i);if(s===0&&r.length===0)throw Te(ha);let o,c;r.length===0?(o=he(i[s-1]),c=s-2):(o=r[0],c=s-1);for(let d=c;d>=0;--d)o=t(o,he(i[d]),d,this);return o}forEach(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=0;c<s;++c)Qe(t,o,[he(i[c]),c,this])}find(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=0;c<s;++c){const d=he(i[c]);if(Qe(t,o,[d,c,this]))return d}}findIndex(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=0;c<s;++c){const d=he(i[c]);if(Qe(t,o,[d,c,this]))return c}return-1}findLast(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=s-1;c>=0;--c){const d=he(i[c]);if(Qe(t,o,[d,c,this]))return d}}findLastIndex(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=s-1;c>=0;--c){const d=he(i[c]);if(Qe(t,o,[d,c,this]))return c}return-1}every(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=0;c<s;++c)if(!Qe(t,o,[he(i[c]),c,this]))return!1;return!0}some(t,...r){de(this);const i=re(this),s=fe(i),o=r[0];for(let c=0;c<s;++c)if(Qe(t,o,[he(i[c]),c,this]))return!0;return!1}set(t,...r){de(this);const i=re(this),s=Nt(r[0]);if(s<0)throw Wn(kn);if(t==null)throw Te(oi);if(fi(t))throw Te(ci);if(rr(t))return du(re(this),re(t),s);if(cn(t)){const l=Fe(t);if(br(l))throw Te(Mr)}const o=fe(i),c=lr(t),d=$n(c.length);if(s===1/0||d+s>o)throw Wn(kn);for(let l=0;l<d;++l)i[l+s]=Ct(c[l])}reverse(){de(this);const t=re(this);return ga(t),this}toReversed(){de(this);const t=re(this),r=new nt(Fe(t),Yt(t),fe(t)),i=new ve(Fe(Sr(r))),s=re(i);return ga(s),i}fill(t,...r){de(this);const i=re(this);return fu(i,Ct(t),...Ar(r)),this}copyWithin(t,r,...i){de(this);const s=re(this);return hu(s,t,r,...Ar(i)),this}sort(t){de(this);const r=re(this),i=t!==void 0?t:Ta;return _a(r,(s,o)=>i(he(s),he(o))),this}toSorted(t){de(this);const r=re(this);if(t!==void 0&&typeof t!="function")throw new Te(Vc);const i=t!==void 0?t:Ta,s=new nt(Fe(r),Yt(r),fe(r)),o=new ve(Fe(Sr(s))),c=re(o);return _a(c,(d,l)=>i(he(d),he(l))),o}slice(t,r){de(this);const i=re(this),s=$r(i,ve);if(s===ve){const L=new nt(Fe(i),Yt(i),fe(i));return new ve(Fe(Sr(L,t,r)))}const o=fe(i),c=Nt(t),d=r===void 0?o:Nt(r);let l;c===-1/0?l=0:c<0?l=o+c>0?o+c:0:l=o<c?o:c;let m;d===-1/0?m=0:d<0?m=o+d>0?o+d:0:m=o<d?o:d;const S=m-l>0?m-l:0,x=new s(S);if(jr(x,S),S===0)return x;const b=Fe(i);if(br(b))throw Te(Mr);let U=0;for(;l<m;)x[U]=he(i[l]),++l,++U;return x}subarray(t,r){de(this);const i=re(this),s=$r(i,ve),o=new nt(Fe(i),Yt(i),fe(i)),c=vu(o,t,r),d=new s(Fe(c),Yt(c),fe(c));return jr(d),d}indexOf(t,...r){de(this);const i=re(this),s=fe(i);let o=Nt(r[0]);if(o===1/0)return-1;o<0&&(o+=s,o<0&&(o=0));for(let c=o;c<s;++c)if(Bt(i,c)&&he(i[c])===t)return c;return-1}lastIndexOf(t,...r){de(this);const i=re(this),s=fe(i);let o=r.length>=1?Nt(r[0]):s-1;if(o===-1/0)return-1;o>=0?o=o<s-1?o:s-1:o+=s;for(let c=o;c>=0;--c)if(Bt(i,c)&&he(i[c])===t)return c;return-1}includes(t,...r){de(this);const i=re(this),s=fe(i);let o=Nt(r[0]);if(o===1/0)return!1;o<0&&(o+=s,o<0&&(o=0));const c=ur(t);for(let d=o;d<s;++d){const l=he(i[d]);if(c&&ur(l)||l===t)return!0}return!1}join(t){de(this);const r=re(this),i=Ra(r);return Kc(i,t)}toLocaleString(...t){de(this);const r=re(this),i=Ra(r);return Jc(i,...Ar(t))}get[Pi](){if(rr(this))return"Float16Array"}}Lr(ve,"BYTES_PER_ELEMENT",{value:ki});Lr(ve,un,{});Qa(ve,Bi);const dn=ve.prototype;Lr(dn,"BYTES_PER_ELEMENT",{value:ki});Lr(dn,It,{value:dn.values,writable:!0,configurable:!0});Qa(dn,He);function Nu(e,t,...r){return he(wu(e,t,...Ar(r)))}function Pu(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof ve||e instanceof Float32Array||e instanceof Float64Array}class Lu extends Nr{load(t,r,i,s){const o=new Pc(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{try{r(this.parseTypedArray(c))}catch(d){s!=null?s(d):console.error(d),this.manager.itemError(t)}},i,s)}}function Bu(e){return class extends Lu{constructor(){super(...arguments),this.parseTypedArray=e}}}function zu(e){const t=e instanceof Int8Array?fo:e instanceof Uint8Array?bt:e instanceof Uint8ClampedArray?bt:e instanceof Int16Array?ho:e instanceof Uint16Array?vo:e instanceof Int32Array?po:e instanceof Uint32Array?Ba:e instanceof ve?et:e instanceof Float32Array?Mt:e instanceof Float64Array?Mt:null;return qa(t!=null),t}const Fu={format:Ui,minFilter:ft,magFilter:ft};class Hu extends Nr{constructor(){super(...arguments),this.parameters={}}load(t,r,i,s){const o=new this.Texture,c=new this.TypedArrayLoader(this.manager);c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(t,d=>{o.image.data=d instanceof ve?new Uint16Array(d.buffer):d;const{width:l,height:m,depth:S,...x}=this.parameters;l!=null&&(o.image.width=l),m!=null&&(o.image.height=m),"depth"in o.image&&S!=null&&(o.image.depth=S),o.type=zu(d),Object.assign(o,x),o.needsUpdate=!0,r(o)},i,s)}}function _s(e,t,r){return class extends Hu{constructor(){super(...arguments),this.Texture=e,this.TypedArrayLoader=Bu(t),this.parameters={...Fu,...r}}}}function Ss(e,t){return _s(ka,e,t)}function Gu(e,t){return _s(go,e,t)}function ku(e,t){return new(Ss(e,t))}function Aa(e,t){return new(Gu(e,t))}const Jt=Rt.clamp;Rt.euclideanModulo;Rt.inverseLerp;const id=Rt.lerp,Vu=Rt.degToRad;Rt.radToDeg;Rt.isPowerOfTwo;Rt.ceilPowerOfTwo;Rt.floorPowerOfTwo;Rt.normalize;function Wu(e,t,r,i=0,s=1){return Rt.mapLinear(e,t,r,i,s)}function $u(e){return Math.min(Math.max(e,0),1)}function Ge(e){return(t,r)=>{t instanceof vr?Object.defineProperty(t,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[e])!=null},set(i){var s;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[e]="1"):(s=this.defines)==null||delete s[e],this.needsUpdate=!0)}}):Object.defineProperty(t,r,{enumerable:!0,get(){return this.defines.has(e)},set(i){i!==this[r]&&(i?this.defines.set(e,"1"):this.defines.delete(e),this.setChanged())}})}}function ju(e,{min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,s)=>{i instanceof vr?Object.defineProperty(i,s,{enumerable:!0,get(){var o;const c=(o=this.defines)==null?void 0:o[e];return c!=null?parseInt(c):0},set(o){const c=this[s];o!==c&&(this.defines??(this.defines={}),this.defines[e]=Jt(o,t,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,s,{enumerable:!0,get(){const o=this.defines.get(e);return o!=null?parseInt(o):0},set(o){const c=this[s];o!==c&&(this.defines.set(e,Jt(o,t,r).toFixed(0)),this.setChanged())}})}}function ad(e,{min:t=-1/0,max:r=1/0,precision:i=7}={}){return(s,o)=>{s instanceof vr?Object.defineProperty(s,o,{enumerable:!0,get(){var c;const d=(c=this.defines)==null?void 0:c[e];return d!=null?parseFloat(d):0},set(c){const d=this[o];c!==d&&(this.defines??(this.defines={}),this.defines[e]=Jt(c,t,r).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(s,o,{enumerable:!0,get(){const c=this.defines.get(e);return c!=null?parseFloat(c):0},set(c){const d=this[o];c!==d&&(this.defines.set(e,Jt(c,t,r).toFixed(i)),this.setChanged())}})}}function sd(e,{validate:t}={}){return(r,i)=>{r instanceof vr?Object.defineProperty(r,i,{enumerable:!0,get(){var s;return((s=this.defines)==null?void 0:s[e])??""},set(s){if(s!==this[i]){if((t==null?void 0:t(s))===!1){console.error(`Expression validation failed: ${s}`);return}this.defines??(this.defines={}),this.defines[e]=s,this.needsUpdate=!0}}}):Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines.get(e)??""},set(s){if(s!==this[i]){if((t==null?void 0:t(s))===!1){console.error(`Expression validation failed: ${s}`);return}this.defines.set(e,s),this.setChanged()}}})}}function od(e,...t){const r={};for(let i=0;i<t.length;i+=2){const s=t[i],o=t[i+1];for(const c of o)r[c]={enumerable:!0,get:()=>s[c],set:d=>{s[c]=d}}}return Object.defineProperties(e,r),e}function cd(e,t,r){const i={};for(const s of r)i[s]={enumerable:!0,get:()=>t.uniforms[s].value,set:o=>{t.uniforms[s].value=o}};return Object.defineProperties(e,i),e}const Xu=parseInt(Or.replace(/\D+/g,""));var ut=Uint8Array,Zt=Uint16Array,vi=Uint32Array,ws=new ut([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ys=new ut([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yu=new ut([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xs=function(e,t){for(var r=new Zt(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var s=new vi(r[30]),i=1;i<30;++i)for(var o=r[i];o<r[i+1];++o)s[o]=o-r[i]<<5|i;return[r,s]},Es=xs(ws,2),Ts=Es[0],qu=Es[1];Ts[28]=258,qu[258]=28;var Zu=xs(ys,0),Ku=Zu[0],Rs=new Zt(32768);for(var ye=0;ye<32768;++ye){var Vt=(ye&43690)>>>1|(ye&21845)<<1;Vt=(Vt&52428)>>>2|(Vt&13107)<<2,Vt=(Vt&61680)>>>4|(Vt&3855)<<4,Rs[ye]=((Vt&65280)>>>8|(Vt&255)<<8)>>>1}var Ir=function(e,t,r){for(var i=e.length,s=0,o=new Zt(t);s<i;++s)++o[e[s]-1];var c=new Zt(t);for(s=0;s<t;++s)c[s]=c[s-1]+o[s-1]<<1;var d;{d=new Zt(1<<t);var l=15-t;for(s=0;s<i;++s)if(e[s])for(var m=s<<4|e[s],S=t-e[s],x=c[e[s]-1]++<<S,b=x|(1<<S)-1;x<=b;++x)d[Rs[x]>>>l]=m}return d},Br=new ut(288);for(var ye=0;ye<144;++ye)Br[ye]=8;for(var ye=144;ye<256;++ye)Br[ye]=9;for(var ye=256;ye<280;++ye)Br[ye]=7;for(var ye=280;ye<288;++ye)Br[ye]=8;var As=new ut(32);for(var ye=0;ye<32;++ye)As[ye]=5;var Qu=Ir(Br,9),Ju=Ir(As,5),jn=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},St=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},Xn=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},el=function(e){return(e/8|0)+(e&7&&1)},tl=function(e,t,r){(r==null||r>e.length)&&(r=e.length);var i=new(e instanceof Zt?Zt:e instanceof vi?vi:ut)(r-t);return i.set(e.subarray(t,r)),i},rl=function(e,t,r){var i=e.length;if(!i||r&&!r.l&&i<5)return t||new ut(0);var s=!t||r,o=!r||r.i;r||(r={}),t||(t=new ut(i*3));var c=function(Ne){var pt=t.length;if(Ne>pt){var ct=new ut(Math.max(pt*2,Ne));ct.set(t),t=ct}},d=r.f||0,l=r.p||0,m=r.b||0,S=r.l,x=r.d,b=r.m,U=r.n,L=i*8;do{if(!S){r.f=d=St(e,l,1);var O=St(e,l+1,3);if(l+=3,O)if(O==1)S=Qu,x=Ju,b=9,U=5;else if(O==2){var Y=St(e,l,31)+257,ee=St(e,l+10,15)+4,q=Y+St(e,l+5,31)+1;l+=14;for(var I=new ut(q),Z=new ut(19),F=0;F<ee;++F)Z[Yu[F]]=St(e,l+F*3,7);l+=ee*3;for(var Ae=jn(Z),be=(1<<Ae)-1,Be=Ir(Z,Ae),F=0;F<q;){var ze=Be[St(e,l,be)];l+=ze&15;var se=ze>>>4;if(se<16)I[F++]=se;else{var pe=0,Ie=0;for(se==16?(Ie=3+St(e,l,3),l+=2,pe=I[F-1]):se==17?(Ie=3+St(e,l,7),l+=3):se==18&&(Ie=11+St(e,l,127),l+=7);Ie--;)I[F++]=pe}}var at=I.subarray(0,Y),Ee=I.subarray(Y);b=jn(at),U=jn(Ee),S=Ir(at,b),x=Ir(Ee,U)}else throw"invalid block type";else{var se=el(l)+4,Ve=e[se-4]|e[se-3]<<8,We=se+Ve;if(We>i){if(o)throw"unexpected EOF";break}s&&c(m+Ve),t.set(e.subarray(se,We),m),r.b=m+=Ve,r.p=l=We*8;continue}if(l>L){if(o)throw"unexpected EOF";break}}s&&c(m+131072);for(var st=(1<<b)-1,ot=(1<<U)-1,Ze=l;;Ze=l){var pe=S[Xn(e,l)&st],K=pe>>>4;if(l+=pe&15,l>L){if(o)throw"unexpected EOF";break}if(!pe)throw"invalid length/literal";if(K<256)t[m++]=K;else if(K==256){Ze=l,S=null;break}else{var Ke=K-254;if(K>264){var F=K-257,Ce=ws[F];Ke=St(e,l,(1<<Ce)-1)+Ts[F],l+=Ce}var je=x[Xn(e,l)&ot],Xe=je>>>4;if(!je)throw"invalid distance";l+=je&15;var Ee=Ku[Xe];if(Xe>3){var Ce=ys[Xe];Ee+=Xn(e,l)&(1<<Ce)-1,l+=Ce}if(l>L){if(o)throw"unexpected EOF";break}s&&c(m+131072);for(var Ye=m+Ke;m<Ye;m+=4)t[m]=t[m-Ee],t[m+1]=t[m+1-Ee],t[m+2]=t[m+2-Ee],t[m+3]=t[m+3-Ee];m=Ye}}r.l=S,r.p=Ze,r.b=m,S&&(d=1,r.m=b,r.d=x,r.n=U)}while(!d);return m==t.length?t:tl(t,0,m)},nl=new ut(0),il=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(e[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Xr(e,t){return rl((il(e),e.subarray(2,-4)),t)}var al=typeof TextDecoder<"u"&&new TextDecoder,sl=0;try{al.decode(nl,{stream:!0}),sl=1}catch{}const wr=Xu>=152;class ol extends Va{constructor(t){super(t),this.type=et}parse(t){const r=Math.pow(2.7182818,2.2);function i(n,a){for(var u=0,f=0;f<65536;++f)(f==0||n[f>>3]&1<<(f&7))&&(a[u++]=f);for(var v=u-1;u<65536;)a[u++]=0;return v}function s(n){for(var a=0;a<16384;a++)n[a]={},n[a].len=0,n[a].lit=0,n[a].p=null}const o={l:0,c:0,lc:0};function c(n,a,u,f,v){for(;u<n;)a=a<<8|ie(f,v),u+=8;u-=n,o.l=a>>u&(1<<n)-1,o.c=a,o.lc=u}const d=new Array(59);function l(n){for(var a=0;a<=58;++a)d[a]=0;for(var a=0;a<65537;++a)d[n[a]]+=1;for(var u=0,a=58;a>0;--a){var f=u+d[a]>>1;d[a]=u,u=f}for(var a=0;a<65537;++a){var v=n[a];v>0&&(n[a]=v|d[v]++<<6)}}function m(n,a,u,f,v,h,g){for(var p=u,T=0,_=0;v<=h;v++){if(p.value-u.value>f)return!1;c(6,T,_,n,p);var y=o.l;if(T=o.c,_=o.lc,g[v]=y,y==63){if(p.value-u.value>f)throw"Something wrong with hufUnpackEncTable";c(8,T,_,n,p);var w=o.l+6;if(T=o.c,_=o.lc,v+w>h+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[v++]=0;v--}else if(y>=59){var w=y-59+2;if(v+w>h+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[v++]=0;v--}}l(g)}function S(n){return n&63}function x(n){return n>>6}function b(n,a,u,f){for(;a<=u;a++){var v=x(n[a]),h=S(n[a]);if(v>>h)throw"Invalid table entry";if(h>14){var g=f[v>>h-14];if(g.len)throw"Invalid table entry";if(g.lit++,g.p){var p=g.p;g.p=new Array(g.lit);for(var T=0;T<g.lit-1;++T)g.p[T]=p[T]}else g.p=new Array(1);g.p[g.lit-1]=a}else if(h)for(var _=0,T=1<<14-h;T>0;T--){var g=f[(v<<14-h)+_];if(g.len||g.p)throw"Invalid table entry";g.len=h,g.lit=a,_++}}return!0}const U={c:0,lc:0};function L(n,a,u,f){n=n<<8|ie(u,f),a+=8,U.c=n,U.lc=a}const O={c:0,lc:0};function Y(n,a,u,f,v,h,g,p,T,_){if(n==a){f<8&&(L(u,f,v,g),u=U.c,f=U.lc),f-=8;var y=u>>f,y=new Uint8Array([y])[0];if(T.value+y>_)return!1;for(var w=p[T.value-1];y-- >0;)p[T.value++]=w}else if(T.value<_)p[T.value++]=n;else return!1;O.c=u,O.lc=f}function ee(n){return n&65535}function q(n){var a=ee(n);return a>32767?a-65536:a}const I={a:0,b:0};function Z(n,a){var u=q(n),f=q(a),v=f,h=u+(v&1)+(v>>1),g=h,p=h-v;I.a=g,I.b=p}function F(n,a){var u=ee(n),f=ee(a),v=u-(f>>1)&65535,h=f+v-32768&65535;I.a=h,I.b=v}function Ae(n,a,u,f,v,h,g){for(var p=g<16384,T=u>v?v:u,_=1,y;_<=T;)_<<=1;for(_>>=1,y=_,_>>=1;_>=1;){for(var w=0,V=w+h*(v-y),A=h*_,M=h*y,D=f*_,N=f*y,H,Q,W,oe;w<=V;w+=M){for(var G=w,Oe=w+f*(u-y);G<=Oe;G+=N){var le=G+D,ae=G+A,Le=ae+D;p?(Z(n[G+a],n[ae+a]),H=I.a,W=I.b,Z(n[le+a],n[Le+a]),Q=I.a,oe=I.b,Z(H,Q),n[G+a]=I.a,n[le+a]=I.b,Z(W,oe),n[ae+a]=I.a,n[Le+a]=I.b):(F(n[G+a],n[ae+a]),H=I.a,W=I.b,F(n[le+a],n[Le+a]),Q=I.a,oe=I.b,F(H,Q),n[G+a]=I.a,n[le+a]=I.b,F(W,oe),n[ae+a]=I.a,n[Le+a]=I.b)}if(u&_){var ae=G+A;p?Z(n[G+a],n[ae+a]):F(n[G+a],n[ae+a]),H=I.a,n[ae+a]=I.b,n[G+a]=H}}if(v&_)for(var G=w,Oe=w+f*(u-y);G<=Oe;G+=N){var le=G+D;p?Z(n[G+a],n[le+a]):F(n[G+a],n[le+a]),H=I.a,n[le+a]=I.b,n[G+a]=H}y=_,_>>=1}return w}function be(n,a,u,f,v,h,g,p,T,_){for(var y=0,w=0,V=p,A=Math.trunc(v.value+(h+7)/8);v.value<A;)for(L(y,w,u,v),y=U.c,w=U.lc;w>=14;){var M=y>>w-14&16383,D=a[M];if(D.len)w-=D.len,Y(D.lit,g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;else{if(!D.p)throw"hufDecode issues";var N;for(N=0;N<D.lit;N++){for(var H=S(n[D.p[N]]);w<H&&v.value<A;)L(y,w,u,v),y=U.c,w=U.lc;if(w>=H&&x(n[D.p[N]])==(y>>w-H&(1<<H)-1)){w-=H,Y(D.p[N],g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;break}}if(N==D.lit)throw"hufDecode issues"}}var Q=8-h&7;for(y>>=Q,w-=Q;w>0;){var D=a[y<<14-w&16383];if(D.len)w-=D.len,Y(D.lit,g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;else throw"hufDecode issues"}return!0}function Be(n,a,u,f,v,h){var g={value:0},p=u.value,T=ue(a,u),_=ue(a,u);u.value+=4;var y=ue(a,u);if(u.value+=4,T<0||T>=65537||_<0||_>=65537)throw"Something wrong with HUF_ENCSIZE";var w=new Array(65537),V=new Array(16384);s(V);var A=f-(u.value-p);if(m(n,a,u,A,T,_,w),y>8*(f-(u.value-p)))throw"Something wrong with hufUncompress";b(w,T,_,V),be(w,V,n,a,u,y,_,h,v,g)}function ze(n,a,u){for(var f=0;f<u;++f)a[f]=n[a[f]]}function se(n){for(var a=1;a<n.length;a++){var u=n[a-1]+n[a]-128;n[a]=u}}function pe(n,a){for(var u=0,f=Math.floor((n.length+1)/2),v=0,h=n.length-1;!(v>h||(a[v++]=n[u++],v>h));)a[v++]=n[f++]}function Ie(n){for(var a=n.byteLength,u=new Array,f=0,v=new DataView(n);a>0;){var h=v.getInt8(f++);if(h<0){var g=-h;a-=g+1;for(var p=0;p<g;p++)u.push(v.getUint8(f++))}else{var g=h;a-=2;for(var T=v.getUint8(f++),p=0;p<g+1;p++)u.push(T)}}return u}function at(n,a,u,f,v,h){var g=new DataView(h.buffer),p=u[n.idx[0]].width,T=u[n.idx[0]].height,_=3,y=Math.floor(p/8),w=Math.ceil(p/8),V=Math.ceil(T/8),A=p-(w-1)*8,M=T-(V-1)*8,D={value:0},N=new Array(_),H=new Array(_),Q=new Array(_),W=new Array(_),oe=new Array(_);for(let $=0;$<_;++$)oe[$]=a[n.idx[$]],N[$]=$<1?0:N[$-1]+w*V,H[$]=new Float32Array(64),Q[$]=new Uint16Array(64),W[$]=new Uint16Array(w*64);for(let $=0;$<V;++$){var G=8;$==V-1&&(G=M);var Oe=8;for(let j=0;j<w;++j){j==w-1&&(Oe=A);for(let z=0;z<_;++z)Q[z].fill(0),Q[z][0]=v[N[z]++],Ee(D,f,Q[z]),Ve(Q[z],H[z]),We(H[z]);st(H);for(let z=0;z<_;++z)ot(H[z],W[z],j*64)}let ne=0;for(let j=0;j<_;++j){const z=u[n.idx[j]].type;for(let we=8*$;we<8*$+G;++we){ne=oe[j][we];for(let qe=0;qe<y;++qe){const ge=qe*64+(we&7)*8;g.setUint16(ne+0*2*z,W[j][ge+0],!0),g.setUint16(ne+1*2*z,W[j][ge+1],!0),g.setUint16(ne+2*2*z,W[j][ge+2],!0),g.setUint16(ne+3*2*z,W[j][ge+3],!0),g.setUint16(ne+4*2*z,W[j][ge+4],!0),g.setUint16(ne+5*2*z,W[j][ge+5],!0),g.setUint16(ne+6*2*z,W[j][ge+6],!0),g.setUint16(ne+7*2*z,W[j][ge+7],!0),ne+=8*2*z}}if(y!=w)for(let we=8*$;we<8*$+G;++we){const qe=oe[j][we]+8*y*2*z,ge=y*64+(we&7)*8;for(let ke=0;ke<Oe;++ke)g.setUint16(qe+ke*2*z,W[j][ge+ke],!0)}}}for(var le=new Uint16Array(p),g=new DataView(h.buffer),ae=0;ae<_;++ae){u[n.idx[ae]].decoded=!0;var Le=u[n.idx[ae]].type;if(u[ae].type==2)for(var _t=0;_t<T;++_t){const ne=oe[ae][_t];for(var Se=0;Se<p;++Se)le[Se]=g.getUint16(ne+Se*2*Le,!0);for(var Se=0;Se<p;++Se)g.setFloat32(ne+Se*2*Le,E(le[Se]),!0)}}}function Ee(n,a,u){for(var f,v=1;v<64;)f=a[n.value],f==65280?v=64:f>>8==255?v+=f&255:(u[v]=f,v++),n.value++}function Ve(n,a){a[0]=E(n[0]),a[1]=E(n[1]),a[2]=E(n[5]),a[3]=E(n[6]),a[4]=E(n[14]),a[5]=E(n[15]),a[6]=E(n[27]),a[7]=E(n[28]),a[8]=E(n[2]),a[9]=E(n[4]),a[10]=E(n[7]),a[11]=E(n[13]),a[12]=E(n[16]),a[13]=E(n[26]),a[14]=E(n[29]),a[15]=E(n[42]),a[16]=E(n[3]),a[17]=E(n[8]),a[18]=E(n[12]),a[19]=E(n[17]),a[20]=E(n[25]),a[21]=E(n[30]),a[22]=E(n[41]),a[23]=E(n[43]),a[24]=E(n[9]),a[25]=E(n[11]),a[26]=E(n[18]),a[27]=E(n[24]),a[28]=E(n[31]),a[29]=E(n[40]),a[30]=E(n[44]),a[31]=E(n[53]),a[32]=E(n[10]),a[33]=E(n[19]),a[34]=E(n[23]),a[35]=E(n[32]),a[36]=E(n[39]),a[37]=E(n[45]),a[38]=E(n[52]),a[39]=E(n[54]),a[40]=E(n[20]),a[41]=E(n[22]),a[42]=E(n[33]),a[43]=E(n[38]),a[44]=E(n[46]),a[45]=E(n[51]),a[46]=E(n[55]),a[47]=E(n[60]),a[48]=E(n[21]),a[49]=E(n[34]),a[50]=E(n[37]),a[51]=E(n[47]),a[52]=E(n[50]),a[53]=E(n[56]),a[54]=E(n[59]),a[55]=E(n[61]),a[56]=E(n[35]),a[57]=E(n[36]),a[58]=E(n[48]),a[59]=E(n[49]),a[60]=E(n[57]),a[61]=E(n[58]),a[62]=E(n[62]),a[63]=E(n[63])}function We(n){const a=.5*Math.cos(.7853975),u=.5*Math.cos(3.14159/16),f=.5*Math.cos(3.14159/8),v=.5*Math.cos(3*3.14159/16),h=.5*Math.cos(5*3.14159/16),g=.5*Math.cos(3*3.14159/8),p=.5*Math.cos(7*3.14159/16);for(var T=new Array(4),_=new Array(4),y=new Array(4),w=new Array(4),V=0;V<8;++V){var A=V*8;T[0]=f*n[A+2],T[1]=g*n[A+2],T[2]=f*n[A+6],T[3]=g*n[A+6],_[0]=u*n[A+1]+v*n[A+3]+h*n[A+5]+p*n[A+7],_[1]=v*n[A+1]-p*n[A+3]-u*n[A+5]-h*n[A+7],_[2]=h*n[A+1]-u*n[A+3]+p*n[A+5]+v*n[A+7],_[3]=p*n[A+1]-h*n[A+3]+v*n[A+5]-u*n[A+7],y[0]=a*(n[A+0]+n[A+4]),y[3]=a*(n[A+0]-n[A+4]),y[1]=T[0]+T[3],y[2]=T[1]-T[2],w[0]=y[0]+y[1],w[1]=y[3]+y[2],w[2]=y[3]-y[2],w[3]=y[0]-y[1],n[A+0]=w[0]+_[0],n[A+1]=w[1]+_[1],n[A+2]=w[2]+_[2],n[A+3]=w[3]+_[3],n[A+4]=w[3]-_[3],n[A+5]=w[2]-_[2],n[A+6]=w[1]-_[1],n[A+7]=w[0]-_[0]}for(var M=0;M<8;++M)T[0]=f*n[16+M],T[1]=g*n[16+M],T[2]=f*n[48+M],T[3]=g*n[48+M],_[0]=u*n[8+M]+v*n[24+M]+h*n[40+M]+p*n[56+M],_[1]=v*n[8+M]-p*n[24+M]-u*n[40+M]-h*n[56+M],_[2]=h*n[8+M]-u*n[24+M]+p*n[40+M]+v*n[56+M],_[3]=p*n[8+M]-h*n[24+M]+v*n[40+M]-u*n[56+M],y[0]=a*(n[M]+n[32+M]),y[3]=a*(n[M]-n[32+M]),y[1]=T[0]+T[3],y[2]=T[1]-T[2],w[0]=y[0]+y[1],w[1]=y[3]+y[2],w[2]=y[3]-y[2],w[3]=y[0]-y[1],n[0+M]=w[0]+_[0],n[8+M]=w[1]+_[1],n[16+M]=w[2]+_[2],n[24+M]=w[3]+_[3],n[32+M]=w[3]-_[3],n[40+M]=w[2]-_[2],n[48+M]=w[1]-_[1],n[56+M]=w[0]-_[0]}function st(n){for(var a=0;a<64;++a){var u=n[0][a],f=n[1][a],v=n[2][a];n[0][a]=u+1.5747*v,n[1][a]=u-.1873*f-.4682*v,n[2][a]=u+1.8556*f}}function ot(n,a,u){for(var f=0;f<64;++f)a[u+f]=an.toHalfFloat(Ze(n[f]))}function Ze(n){return n<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(r,Math.abs(n)-1)}function K(n){return new DataView(n.array.buffer,n.offset.value,n.size)}function Ke(n){var a=n.viewer.buffer.slice(n.offset.value,n.offset.value+n.size),u=new Uint8Array(Ie(a)),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Ce(n){var a=n.array.slice(n.offset.value,n.offset.value+n.size),u=Xr(a),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function je(n){for(var a=n.viewer,u={value:n.offset.value},f=new Uint16Array(n.width*n.scanlineBlockSize*(n.channels*n.type)),v=new Uint8Array(8192),h=0,g=new Array(n.channels),p=0;p<n.channels;p++)g[p]={},g[p].start=h,g[p].end=g[p].start,g[p].nx=n.width,g[p].ny=n.lines,g[p].size=n.type,h+=g[p].nx*g[p].ny*g[p].size;var T=De(a,u),_=De(a,u);if(_>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(T<=_)for(var p=0;p<_-T+1;p++)v[p+T]=te(a,u);var y=new Uint16Array(65536),w=i(v,y),V=ue(a,u);Be(n.array,a,u,V,f,h);for(var p=0;p<n.channels;++p)for(var A=g[p],M=0;M<g[p].size;++M)Ae(f,A.start+M,A.nx,A.size,A.ny,A.nx*A.size,w);ze(y,f,h);for(var D=0,N=new Uint8Array(f.buffer.byteLength),H=0;H<n.lines;H++)for(var Q=0;Q<n.channels;Q++){var A=g[Q],W=A.nx*A.size,oe=new Uint8Array(f.buffer,A.end*2,W*2);N.set(oe,D),D+=W*2,A.end+=W}return new DataView(N.buffer)}function Xe(n){var a=n.array.slice(n.offset.value,n.offset.value+n.size),u=Xr(a);const f=n.lines*n.channels*n.width,v=n.type==1?new Uint16Array(f):new Uint32Array(f);let h=0,g=0;const p=new Array(4);for(let T=0;T<n.lines;T++)for(let _=0;_<n.channels;_++){let y=0;switch(n.type){case 1:p[0]=h,p[1]=p[0]+n.width,h=p[1]+n.width;for(let w=0;w<n.width;++w){const V=u[p[0]++]<<8|u[p[1]++];y+=V,v[g]=y,g++}break;case 2:p[0]=h,p[1]=p[0]+n.width,p[2]=p[1]+n.width,h=p[2]+n.width;for(let w=0;w<n.width;++w){const V=u[p[0]++]<<24|u[p[1]++]<<16|u[p[2]++]<<8;y+=V,v[g]=y,g++}break}}return new DataView(v.buffer)}function Ye(n){var a=n.viewer,u={value:n.offset.value},f=new Uint8Array(n.width*n.lines*(n.channels*n.type*2)),v={version:X(a,u),unknownUncompressedSize:X(a,u),unknownCompressedSize:X(a,u),acCompressedSize:X(a,u),dcCompressedSize:X(a,u),rleCompressedSize:X(a,u),rleUncompressedSize:X(a,u),rleRawSize:X(a,u),totalAcUncompressedCount:X(a,u),totalDcUncompressedCount:X(a,u),acCompression:X(a,u)};if(v.version<2)throw"EXRLoader.parse: "+gt.compression+" version "+v.version+" is unsupported";for(var h=new Array,g=De(a,u)-2;g>0;){var p=Ne(a.buffer,u),T=te(a,u),_=T>>2&3,y=(T>>4)-1,w=new Int8Array([y])[0],V=te(a,u);h.push({name:p,index:w,type:V,compression:_}),g-=p.length+3}for(var A=gt.channels,M=new Array(n.channels),D=0;D<n.channels;++D){var N=M[D]={},H=A[D];N.name=H.name,N.compression=0,N.decoded=!1,N.type=H.pixelType,N.pLinear=H.pLinear,N.width=n.width,N.height=n.lines}for(var Q={idx:new Array(3)},W=0;W<n.channels;++W)for(var N=M[W],D=0;D<h.length;++D){var oe=h[D];N.name==oe.name&&(N.compression=oe.compression,oe.index>=0&&(Q.idx[oe.index]=W),N.offset=W)}if(v.acCompressedSize>0)switch(v.acCompression){case 0:var le=new Uint16Array(v.totalAcUncompressedCount);Be(n.array,a,u,v.acCompressedSize,le,v.totalAcUncompressedCount);break;case 1:var G=n.array.slice(u.value,u.value+v.totalAcUncompressedCount),Oe=Xr(G),le=new Uint16Array(Oe.buffer);u.value+=v.totalAcUncompressedCount;break}if(v.dcCompressedSize>0){var ae={array:n.array,offset:u,size:v.dcCompressedSize},Le=new Uint16Array(Ce(ae).buffer);u.value+=v.dcCompressedSize}if(v.rleRawSize>0){var G=n.array.slice(u.value,u.value+v.rleCompressedSize),Oe=Xr(G),_t=Ie(Oe.buffer);u.value+=v.rleCompressedSize}for(var Se=0,$=new Array(M.length),D=0;D<$.length;++D)$[D]=new Array;for(var ne=0;ne<n.lines;++ne)for(var j=0;j<M.length;++j)$[j].push(Se),Se+=M[j].width*n.type*2;at(Q,$,M,le,Le,f);for(var D=0;D<M.length;++D){var N=M[D];if(!N.decoded)switch(N.compression){case 2:for(var z=0,we=0,ne=0;ne<n.lines;++ne){for(var qe=$[D][z],ge=0;ge<N.width;++ge){for(var ke=0;ke<2*N.type;++ke)f[qe++]=_t[we+ke*N.width*N.height];we++}z++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(f.buffer)}function Ne(n,a){for(var u=new Uint8Array(n),f=0;u[a.value+f]!=0;)f+=1;var v=new TextDecoder().decode(u.slice(a.value,a.value+f));return a.value=a.value+f+1,v}function pt(n,a,u){var f=new TextDecoder().decode(new Uint8Array(n).slice(a.value,a.value+u));return a.value=a.value+u,f}function ct(n,a){var u=Me(n,a),f=ue(n,a);return[u,f]}function C(n,a){var u=ue(n,a),f=ue(n,a);return[u,f]}function Me(n,a){var u=n.getInt32(a.value,!0);return a.value=a.value+4,u}function ue(n,a){var u=n.getUint32(a.value,!0);return a.value=a.value+4,u}function ie(n,a){var u=n[a.value];return a.value=a.value+1,u}function te(n,a){var u=n.getUint8(a.value);return a.value=a.value+1,u}const X=function(n,a){let u;return"getBigInt64"in DataView.prototype?u=Number(n.getBigInt64(a.value,!0)):u=n.getUint32(a.value+4,!0)+Number(n.getUint32(a.value,!0)<<32),a.value+=8,u};function k(n,a){var u=n.getFloat32(a.value,!0);return a.value+=4,u}function Ue(n,a){return an.toHalfFloat(k(n,a))}function E(n){var a=(n&31744)>>10,u=n&1023;return(n>>15?-1:1)*(a?a===31?u?NaN:1/0:Math.pow(2,a-15)*(1+u/1024):6103515625e-14*(u/1024))}function De(n,a){var u=n.getUint16(a.value,!0);return a.value+=2,u}function Xt(n,a){return E(De(n,a))}function At(n,a,u,f){for(var v=u.value,h=[];u.value<v+f-1;){var g=Ne(a,u),p=Me(n,u),T=te(n,u);u.value+=3;var _=Me(n,u),y=Me(n,u);h.push({name:g,pixelType:p,pLinear:T,xSampling:_,ySampling:y})}return u.value+=1,h}function Mn(n,a){var u=k(n,a),f=k(n,a),v=k(n,a),h=k(n,a),g=k(n,a),p=k(n,a),T=k(n,a),_=k(n,a);return{redX:u,redY:f,greenX:v,greenY:h,blueX:g,blueY:p,whiteX:T,whiteY:_}}function bn(n,a){var u=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],f=te(n,a);return u[f]}function In(n,a){var u=ue(n,a),f=ue(n,a),v=ue(n,a),h=ue(n,a);return{xMin:u,yMin:f,xMax:v,yMax:h}}function Un(n,a){var u=["INCREASING_Y"],f=te(n,a);return u[f]}function Dn(n,a){var u=k(n,a),f=k(n,a);return[u,f]}function On(n,a){var u=k(n,a),f=k(n,a),v=k(n,a);return[u,f,v]}function Nn(n,a,u,f,v){if(f==="string"||f==="stringvector"||f==="iccProfile")return pt(a,u,v);if(f==="chlist")return At(n,a,u,v);if(f==="chromaticities")return Mn(n,u);if(f==="compression")return bn(n,u);if(f==="box2i")return In(n,u);if(f==="lineOrder")return Un(n,u);if(f==="float")return k(n,u);if(f==="v2f")return Dn(n,u);if(f==="v3f")return On(n,u);if(f==="int")return Me(n,u);if(f==="rational")return ct(n,u);if(f==="timecode")return C(n,u);if(f==="preview")return u.value+=v,"skipped";u.value+=v}function Pn(n,a,u){const f={};if(n.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";f.version=n.getUint8(4);const v=n.getUint8(5);f.spec={singleTile:!!(v&2),longName:!!(v&4),deepFormat:!!(v&8),multiPart:!!(v&16)},u.value=8;for(var h=!0;h;){var g=Ne(a,u);if(g==0)h=!1;else{var p=Ne(a,u),T=ue(n,u),_=Nn(n,a,u,p,T);_===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${p}'.`):f[g]=_}}if((v&-5)!=0)throw console.error("EXRHeader:",f),"THREE.EXRLoader: provided file is currently unsupported.";return f}function Ln(n,a,u,f,v){const h={size:0,viewer:a,array:u,offset:f,width:n.dataWindow.xMax-n.dataWindow.xMin+1,height:n.dataWindow.yMax-n.dataWindow.yMin+1,channels:n.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:n.channels[0].pixelType,uncompress:null,getter:null,format:null,[wr?"colorSpace":"encoding"]:null};switch(n.compression){case"NO_COMPRESSION":h.lines=1,h.uncompress=K;break;case"RLE_COMPRESSION":h.lines=1,h.uncompress=Ke;break;case"ZIPS_COMPRESSION":h.lines=1,h.uncompress=Ce;break;case"ZIP_COMPRESSION":h.lines=16,h.uncompress=Ce;break;case"PIZ_COMPRESSION":h.lines=32,h.uncompress=je;break;case"PXR24_COMPRESSION":h.lines=16,h.uncompress=Xe;break;case"DWAA_COMPRESSION":h.lines=32,h.uncompress=Ye;break;case"DWAB_COMPRESSION":h.lines=256,h.uncompress=Ye;break;default:throw"EXRLoader.parse: "+n.compression+" is unsupported"}if(h.scanlineBlockSize=h.lines,h.type==1)switch(v){case Mt:h.getter=Xt,h.inputSize=2;break;case et:h.getter=De,h.inputSize=2;break}else if(h.type==2)switch(v){case Mt:h.getter=k,h.inputSize=4;break;case et:h.getter=Ue,h.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+h.type+" for "+n.compression+".";h.blockCount=(n.dataWindow.yMax+1)/h.scanlineBlockSize;for(var g=0;g<h.blockCount;g++)X(a,f);h.outputChannels=h.channels==3?4:h.channels;const p=h.width*h.height*h.outputChannels;switch(v){case Mt:h.byteArray=new Float32Array(p),h.channels<h.outputChannels&&h.byteArray.fill(1,0,p);break;case et:h.byteArray=new Uint16Array(p),h.channels<h.outputChannels&&h.byteArray.fill(15360,0,p);break;default:console.error("THREE.EXRLoader: unsupported type: ",v);break}return h.bytesPerLine=h.width*h.inputSize*h.channels,h.outputChannels==4?h.format=Ui:h.format=Di,wr?h.colorSpace="srgb-linear":h.encoding=3e3,h}const Dt=new DataView(t),Bn=new Uint8Array(t),mt={value:0},gt=Pn(Dt,t,mt),P=Ln(gt,Dt,Bn,mt,this.type),_r={value:0},zn={R:0,G:1,B:2,A:3,Y:0};for(let n=0;n<P.height/P.scanlineBlockSize;n++){const a=ue(Dt,mt);P.size=ue(Dt,mt),P.lines=a+P.scanlineBlockSize>P.height?P.height-a:P.scanlineBlockSize;const u=P.size<P.lines*P.bytesPerLine?P.uncompress(P):K(P);mt.value+=P.size;for(let f=0;f<P.scanlineBlockSize;f++){const v=f+n*P.scanlineBlockSize;if(v>=P.height)break;for(let h=0;h<P.channels;h++){const g=zn[gt.channels[h].name];for(let p=0;p<P.width;p++){_r.value=(f*(P.channels*P.width)+h*P.width+p)*P.inputSize;const T=(P.height-1-v)*(P.width*P.outputChannels)+p*P.outputChannels+g;P.byteArray[T]=P.getter(u,_r)}}}}return{header:gt,width:P.width,height:P.height,data:P.byteArray,format:P.format,[wr?"colorSpace":"encoding"]:P[wr?"colorSpace":"encoding"],type:this.type}}setDataType(t){return this.type=t,this}load(t,r,i,s){function o(c,d){wr?c.colorSpace=d.colorSpace:c.encoding=d.encoding,c.minFilter=ft,c.magFilter=ft,c.generateMipmaps=!1,c.flipY=!1,r&&r(c,d)}return super.load(t,o,i,s)}}class cl extends Nr{setDepth(t){return this.depth=t,this}load(t,r,i,s){const o=new ol(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{const{data:d,width:l,height:m}=c.image,S=this.depth??Math.sqrt(m),x=new ka(d,l,m/S,S);x.type=c.type,x.format=c.format,x.colorSpace=c.colorSpace,x.needsUpdate=!0;try{r(x)}catch(b){s!=null?s(b):console.error(b),this.manager.itemError(t)}},i,s)}}const Yn=1e-6,Yr=new B,qr=new B,Ot=new B,yr=new B,qn=new B,ul=new B,ll=new Re,dl=new uo,fl=new lo;class Cs{constructor(t=0,r=0,i=0,s=0){this.distance=t,this.heading=r,this.pitch=i,this.roll=s}get distance(){return this._distance}set distance(t){this._distance=Math.max(t,Yn)}get pitch(){return this._pitch}set pitch(t){this._pitch=Jt(t,-Math.PI/2+Yn,Math.PI/2-Yn)}set(t,r,i,s){return this.distance=t,this.heading=r,this.pitch=i,s!=null&&(this.roll=s),this}clone(){return new Cs(this.distance,this.heading,this.pitch,this.roll)}copy(t){return this.distance=t.distance,this.heading=t.heading,this.pitch=t.pitch,this.roll=t.roll,this}equals(t){return t.distance===this.distance&&t.heading===this.heading&&t.pitch===this.pitch&&t.roll===this.roll}decompose(t,r,i,s,o=zt.WGS84){o.getEastNorthUpVectors(t,Yr,qr,Ot),s==null||s.copy(Ot);const c=yr.copy(Yr).multiplyScalar(Math.cos(this.heading)).add(qn.copy(qr).multiplyScalar(Math.sin(this.heading))).multiplyScalar(Math.cos(this.pitch)).add(qn.copy(Ot).multiplyScalar(Math.sin(this.pitch))).normalize().multiplyScalar(this.distance);if(r.copy(t).sub(c),this.roll!==0){const d=yr.copy(t).sub(r).normalize();Ot.applyQuaternion(dl.setFromAxisAngle(d,this.roll))}i.setFromRotationMatrix(ll.lookAt(r,t,Ot))}setFromCamera(t,r=zt.WGS84){const i=yr.setFromMatrixPosition(t.matrixWorld),s=qn.set(0,0,.5).unproject(t).sub(i).normalize(),o=r.getIntersection(fl.set(i,s));if(o==null)return;this.distance=i.distanceTo(o),r.getEastNorthUpVectors(o,Yr,qr,Ot),this.heading=Math.atan2(qr.dot(s),Yr.dot(s)),this.pitch=Math.asin(Ot.dot(s));const c=yr.copy(t.up).applyQuaternion(t.quaternion),d=ul.copy(s).multiplyScalar(-c.dot(s)).add(c).normalize(),l=yr.copy(s).multiplyScalar(-Ot.dot(s)).add(Ot).normalize(),m=l.dot(d),S=s.dot(l.cross(d));return this.roll=Math.atan2(S,m),this}}const hl=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ft(e,t){return e.replace(hl,(r,i)=>{const s=i.split("/").reduce((o,c)=>typeof o!="string"&&o!=null?o[c]:void 0,t);if(typeof s!="string")throw new Error(`Could not find include for ${i}.`);return Ft(s,t)})}let Zr;function vl(){if(Zr!=null)return Zr;const e=new Uint32Array([268435456]);return Zr=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)[0]===0,Zr}function pl(e,t,r,i=!0){if(i===vl())return new t(e);const s=Object.assign(new DataView(e),{getFloat16(c,d){return Nu(this,c,d)}}),o=new t(s.byteLength/t.BYTES_PER_ELEMENT);for(let c=0,d=0;c<o.length;++c,d+=t.BYTES_PER_ELEMENT)o[c]=s[r](d,i);return o}const ml=e=>new Uint8Array(e),Zn=(e,t)=>pl(e,ve,"getFloat16",t),ud=Ss(ml,{format:Di,minFilter:or,magFilter:or,wrapS:Fn,wrapT:Fn,wrapR:Fn,width:Lc,height:Bc,depth:zc}),gl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(e,t,r,i){let s="";for(let o=parseInt(t);o<parseInt(r);++o)s+=i.replace(/\[\s*i\s*\]/g,"["+o+"]").replace(/UNROLLED_LOOP_INDEX/g,`${o}`);return s}function Sl(e){return e.replace(gl,_l)}const wl=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,yl=`// cSpell:words logdepthbuf

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
`,xl=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,El=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Tl=`#if !defined(saturate)
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
`,Rl=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Al=`float raySphereFirstIntersection(
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
`,Cl=`vec3 screenToView(
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
`,Ml=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,bl=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Il=wl,Vi=yl,ld=xl,Ul=El,Dl=Tl,Ms=Rl,bs=Al,Is=Cl,Ol=Ml,Nl=bl,Wi=`// Based on the following work and adapted to Three.js.
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
`,dr=`uniform vec3 u_solar_irradiance;
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
`,Pl=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Ll(e,t){if(t!=null)for(const r of Pl){const i=t[r];i!=null&&(e[r]instanceof B?e[r].copy(i):e[r]=i)}}const pi=class{constructor(t){this.solarIrradiance=new B(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new B(.005802,.013558,.0331),this.mieScattering=new B(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Vu(120)),this.skyRadianceToLuminance=new B(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new B(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new B(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new B,this.sunRadianceToRelativeLuminance=new B,Ll(this,t);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};pi.DEFAULT=new pi;let zr=pi;const En=64,Tn=16,$i=32,ji=128,Xi=32,Yi=8,Bl=Yi*Xi,zl=ji,Ca=$i,Rn=256,An=64,ar=1/1e3,Fl=new B;function qi(e,t,r,i,s=!0){const o=r.projectOnSurface(e,Fl);return o!=null?r.getOsculatingSphereCenter(!s||o.lengthSq()<e.lengthSq()?o:e,t,i):i.setScalar(0)}const Hl=`precision highp sampler2DArray;

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
`,Gl=`uniform mat4 inverseViewMatrix;
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
`,Us=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var kl=Object.defineProperty,ht=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&kl(t,r,s),s};const Vl=new B,Wl=new B,$l=new Oc,jl={blendFunction:J.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:zt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class vt extends pr{constructor(t=new Ha,r,i=zr.DEFAULT){const{blendFunction:s,normalBuffer:o=null,octEncodedNormal:c,reconstructNormal:d,irradianceTexture:l=null,scatteringTexture:m=null,transmittanceTexture:S=null,ellipsoid:x,correctAltitude:b,correctGeometricError:U,photometric:L,sunDirection:O,sunIrradiance:Y,skyIrradiance:ee,transmittance:q,inscatter:I,irradianceScale:Z,sky:F,sun:Ae,moon:be,moonDirection:Be,moonAngularRadius:ze,lunarRadianceScale:se}={...jl,...r};super("AerialPerspectiveEffect",Sl(Ft(Hl,{core:{depth:Vi,packing:Ms,math:Dl,transform:Is,raySphereIntersection:bs,cascadedShadowMaps:Il,interleavedGradientNoise:Ul,vogelDisk:Nl},parameters:dr,functions:Wi,sky:Us})),{blendFunction:s,vertexShader:Ft(Gl,{parameters:dr}),attributes:Tt.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new R(o),projectionMatrix:new R(new Re),viewMatrix:new R(new Re),inverseProjectionMatrix:new R(new Re),inverseViewMatrix:new R(new Re),cameraPosition:new R(new B),bottomRadius:new R(i.bottomRadius),ellipsoidRadii:new R(new B),ellipsoidCenter:new R(new B),inverseEllipsoidMatrix:new R(new Re),altitudeCorrection:new R(new B),sunDirection:new R((O==null?void 0:O.clone())??new B),irradianceScale:new R(Z),idealSphereAlpha:new R(0),moonDirection:new R((Be==null?void 0:Be.clone())??new B),moonAngularRadius:new R(ze),lunarRadianceScale:new R(se),overlayBuffer:new R(null),shadowBuffer:new R(null),shadowMapSize:new R(new Pe),shadowIntervals:new R([]),shadowMatrices:new R([]),inverseShadowMatrices:new R([]),shadowFar:new R(0),shadowTopHeight:new R(0),shadowRadius:new R(3),stbnTexture:new R(null),frame:new R(0),shadowLengthBuffer:new R(null),u_solar_irradiance:new R(i.solarIrradiance),u_sun_angular_radius:new R(i.sunAngularRadius),u_bottom_radius:new R(i.bottomRadius*ar),u_top_radius:new R(i.topRadius*ar),u_rayleigh_scattering:new R(i.rayleighScattering),u_mie_scattering:new R(i.mieScattering),u_mie_phase_function_g:new R(i.miePhaseFunctionG),u_mu_s_min:new R(i.muSMin),u_irradiance_texture:new R(l),u_scattering_texture:new R(m),u_single_mie_scattering_texture:new R(m),u_transmittance_texture:new R(S)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Rn.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",An.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",$i.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",ji.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Xi.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Yi.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",En.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Tn.toFixed(0)],["METER_TO_LENGTH_UNIT",ar.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(pe=>pe.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(pe=>pe.toFixed(12)).join(",")})`]])}),this.camera=t,this.atmosphere=i,this.ellipsoidMatrix=new Re,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=c,this.reconstructNormal=d,this.ellipsoid=x,this.correctAltitude=b,this.correctGeometricError=U,this.photometric=L,this.sunIrradiance=Y,this.skyIrradiance=ee,this.transmittance=q,this.inscatter=I,this.sky=F,this.sun=Ae,this.moon=be}get mainCamera(){return this.camera}set mainCamera(t){this.camera=t}copyCameraSettings(t){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:s,matrixWorld:o}=t,c=this.uniforms;c.get("projectionMatrix").value.copy(r),c.get("viewMatrix").value.copy(i),c.get("inverseProjectionMatrix").value.copy(s),c.get("inverseViewMatrix").value.copy(o);const d=t.getWorldPosition(c.get("cameraPosition").value),l=c.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),m=Vl.copy(d).applyMatrix4(l).sub(c.get("ellipsoidCenter").value);try{const x=$l.setFromECEF(m).height,b=Wl.set(0,this.ellipsoid.maximumRadius,-x).applyMatrix4(r);c.get("idealSphereAlpha").value=$u(Wu(b.y,41.5,13.8,0,1))}catch{return}const S=c.get("altitudeCorrection");this.correctAltitude?qi(m,this.atmosphere.bottomRadius,this.ellipsoid,S.value):S.value.setScalar(0)}updateComposition(){const{uniforms:t,defines:r,overlay:i,shadow:s,shadowLength:o}=this,c=r.has("HAS_OVERLAY"),d=i!=null;d!==c&&(d?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),this.setChanged()),d&&(t.get("overlayBuffer").value=i.map);const l=r.has("HAS_SHADOW"),m=s!=null;if(m!==l&&(m?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),this.setChanged()),m){const b=r.get("SHADOW_CASCADE_COUNT"),U=`${s.cascadeCount}`;b!==U&&(r.set("SHADOW_CASCADE_COUNT",s.cascadeCount.toFixed(0)),this.setChanged()),t.get("shadowBuffer").value=s.map,t.get("shadowMapSize").value=s.mapSize,t.get("shadowIntervals").value=s.intervals,t.get("shadowMatrices").value=s.matrices,t.get("inverseShadowMatrices").value=s.inverseMatrices,t.get("shadowFar").value=s.far,t.get("shadowTopHeight").value=s.topHeight}const S=r.has("HAS_SHADOW_LENGTH"),x=o!=null;x!==S&&(x?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),this.setChanged()),x&&(t.get("shadowLengthBuffer").value=o.map)}update(t,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(t){this.uniforms.get("normalBuffer").value=t}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(t){this.uniforms.get("u_irradiance_texture").value=t}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(t){this.uniforms.get("u_scattering_texture").value=t,this.uniforms.get("u_single_mie_scattering_texture").value=t}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(t){this.uniforms.get("u_transmittance_texture").value=t}get ellipsoid(){return this._ellipsoid}set ellipsoid(t){this._ellipsoid=t,this.uniforms.get("ellipsoidRadii").value.copy(t.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(t){this.uniforms.get("irradianceScale").value=t}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(t){this.uniforms.get("moonAngularRadius").value=t}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(t){this.uniforms.get("lunarRadianceScale").value=t}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(t){this.uniforms.get("stbnTexture").value=t}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(t){this.uniforms.get("shadowRadius").value=t}}ht([Ge("OCT_ENCODED_NORMAL")],vt.prototype,"octEncodedNormal");ht([Ge("RECONSTRUCT_NORMAL")],vt.prototype,"reconstructNormal");ht([Ge("CORRECT_GEOMETRIC_ERROR")],vt.prototype,"correctGeometricError");ht([Ge("PHOTOMETRIC")],vt.prototype,"photometric");ht([Ge("SUN_IRRADIANCE")],vt.prototype,"sunIrradiance");ht([Ge("SKY_IRRADIANCE")],vt.prototype,"skyIrradiance");ht([Ge("TRANSMITTANCE")],vt.prototype,"transmittance");ht([Ge("INSCATTER")],vt.prototype,"inscatter");ht([Ge("SKY")],vt.prototype,"sky");ht([Ge("SUN")],vt.prototype,"sun");ht([Ge("MOON")],vt.prototype,"moon");ht([ju("SHADOW_SAMPLE_COUNT",{min:1,max:16})],vt.prototype,"shadowSampleCount");var Xl=Object.defineProperty,Yl=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&Xl(t,r,s),s};const ql=new B;function Zl(e,t){let r="",i="";for(let s=1;s<t;++s)r+=`layout(location = ${s}) out float renderTarget${s};
`,i+=`renderTarget${s} = 0.0;
`;return e.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const Zi={ellipsoid:zt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ki extends _o{constructor(t,r=zr.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:s=null,transmittanceTexture:o=null,ellipsoid:c,correctAltitude:d,photometric:l,sunDirection:m,sunAngularRadius:S,renderTargetCount:x,...b}={...Zi,...t};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...b,uniforms:{cameraPosition:new R(new B),ellipsoidCenter:new R(new B),inverseEllipsoidMatrix:new R(new Re),altitudeCorrection:new R(new B),sunDirection:new R((m==null?void 0:m.clone())??new B),u_solar_irradiance:new R(r.solarIrradiance),u_sun_angular_radius:new R(S??r.sunAngularRadius),u_bottom_radius:new R(r.bottomRadius*ar),u_top_radius:new R(r.topRadius*ar),u_rayleigh_scattering:new R(r.rayleighScattering),u_mie_scattering:new R(r.mieScattering),u_mie_phase_function_g:new R(r.miePhaseFunctionG),u_mu_s_min:new R(r.muSMin),u_irradiance_texture:new R(i),u_scattering_texture:new R(s),u_single_mie_scattering_texture:new R(s),u_transmittance_texture:new R(o),...b.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Rn.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:An.toFixed(0),SCATTERING_TEXTURE_R_SIZE:$i.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:ji.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Xi.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Yi.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:En.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Tn.toFixed(0),METER_TO_LENGTH_UNIT:ar.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(U=>U.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(U=>U.toFixed(12)).join(",")})`,...b.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new Re,this.atmosphere=r,this.ellipsoid=c,this.correctAltitude=d,this.photometric=l,this.renderTargetCount=x}copyCameraSettings(t){const r=this.uniforms,i=t.getWorldPosition(r.cameraPosition.value),s=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),o=ql.copy(i).applyMatrix4(s).sub(r.ellipsoidCenter.value),c=r.altitudeCorrection.value;this.correctAltitude?qi(o,this.atmosphere.bottomRadius,this.ellipsoid,c):c.setScalar(0)}onBeforeCompile(t,r){t.fragmentShader=Zl(t.fragmentShader,this.renderTargetCount)}onBeforeRender(t,r,i,s,o,c){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(t){this.uniforms.u_irradiance_texture.value=t}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(t){this.uniforms.u_scattering_texture.value=t,this.uniforms.u_single_mie_scattering_texture.value=t}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(t){this.uniforms.u_transmittance_texture.value=t}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(t){this.uniforms.u_sun_angular_radius.value=t}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(t){t!==this.renderTargetCount&&(this._renderTargetCount=t,this.needsUpdate=!0)}}Yl([Ge("PHOTOMETRIC")],Ki.prototype,"photometric");/**
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
 */const Kl=173.1446326846693,Ql=14959787069098932e-8,fr=.017453292519943295,Jl=365.24217,Ma=new Date("2000-01-01T12:00:00Z"),Pt=2*Math.PI,Wt=3600*(180/Math.PI),nr=484813681109536e-20,e0=180*60*60,t0=2*e0,r0=6378.1366,n0=r0/Ql,i0=81.30056,Qi=.0002959122082855911,mi=2825345909524226e-22,gi=8459715185680659e-23,_i=1292024916781969e-23,Si=1524358900784276e-23;function Kn(e){if(!Number.isFinite(e))throw console.trace(),`Value is not a finite number: ${e}`;return e}function tr(e){return e-Math.floor(e)}var me;(function(e){e.Sun="Sun",e.Moon="Moon",e.Mercury="Mercury",e.Venus="Venus",e.Earth="Earth",e.Mars="Mars",e.Jupiter="Jupiter",e.Saturn="Saturn",e.Uranus="Uranus",e.Neptune="Neptune",e.Pluto="Pluto",e.SSB="SSB",e.EMB="EMB",e.Star1="Star1",e.Star2="Star2",e.Star3="Star3",e.Star4="Star4",e.Star5="Star5",e.Star6="Star6",e.Star7="Star7",e.Star8="Star8"})(me||(me={}));const a0=[me.Star1,me.Star2,me.Star3,me.Star4,me.Star5,me.Star6,me.Star7,me.Star8],s0=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function o0(e){const t=a0.indexOf(e);return t>=0?s0[t]:null}function Ds(e){const t=o0(e);return t&&t.dist>0?t:null}var Ht;(function(e){e[e.From2000=0]="From2000",e[e.Into2000=1]="Into2000"})(Ht||(Ht={}));const ir={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function c0(e){var t,r,i,s,o,c,d;const l=2e3+(e-14)/Jl;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,r=t*t,i=t*r,s=r*r,o=r*i,c=i*i,10583.6-1014.41*t+33.78311*r-5.952053*i-.1798452*s+.022174192*o+.0090316521*c):l<1600?(t=(l-1e3)/100,r=t*t,i=t*r,s=r*r,o=r*i,c=i*i,1574.2-556.01*t+71.23472*r+.319781*i-.8503463*s-.005050998*o+.0083572073*c):l<1700?(t=l-1600,r=t*t,i=t*r,120-.9808*t-.01532*r+i/7129):l<1800?(t=l-1700,r=t*t,i=t*r,s=r*r,8.83+.1603*t-.0059285*r+13336e-8*i-s/1174e3):l<1860?(t=l-1800,r=t*t,i=t*r,s=r*r,o=r*i,c=i*i,d=i*s,13.72-.332447*t+.0068612*r+.0041116*i-37436e-8*s+121272e-10*o-1699e-10*c+875e-12*d):l<1900?(t=l-1860,r=t*t,i=t*r,s=r*r,o=r*i,7.62+.5737*t-.251754*r+.01680668*i-.0004473624*s+o/233174):l<1920?(t=l-1900,r=t*t,i=t*r,s=r*r,-2.79+1.494119*t-.0598939*r+.0061966*i-197e-6*s):l<1941?(t=l-1920,r=t*t,i=t*r,21.2+.84493*t-.0761*r+.0020936*i):l<1961?(t=l-1950,r=t*t,i=t*r,29.07+.407*t-r/233+i/2547):l<1986?(t=l-1975,r=t*t,i=t*r,45.45+1.067*t-r/260-i/718):l<2005?(t=l-2e3,r=t*t,i=t*r,s=r*r,o=r*i,63.86+.3345*t-.060374*r+.0017275*i+651814e-9*s+2373599e-11*o):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let u0=c0;function ba(e){return e+u0(e)/86400}class jt{constructor(t){if(t instanceof jt){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const r=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Ma.getTime())/r,this.tt=ba(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Ma.getTime()+t*r),this.ut=t,this.tt=ba(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let r=new jt(t);for(;;){const i=t-r.tt;if(Math.abs(i)<1e-12)return r;r=r.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new jt(this.ut+t)}}function er(e){return e instanceof jt?e:new jt(e)}function l0(e){function t(b){return b%t0*nr}const r=e.tt/36525,i=t(128710479305e-5+r*1295965810481e-4),s=t(335779.526232+r*17395272628478e-4),o=t(107226070369e-5+r*1602961601209e-3),c=t(450160.398036-r*69628905431e-4);let d=Math.sin(c),l=Math.cos(c),m=(-172064161-174666*r)*d+33386*l,S=(92052331+9086*r)*l+15377*d,x=2*(s-o+c);return d=Math.sin(x),l=Math.cos(x),m+=(-13170906-1675*r)*d-13696*l,S+=(5730336-3015*r)*l-4587*d,x=2*(s+c),d=Math.sin(x),l=Math.cos(x),m+=(-2276413-234*r)*d+2796*l,S+=(978459-485*r)*l+1374*d,x=2*c,d=Math.sin(x),l=Math.cos(x),m+=(2074554+207*r)*d-698*l,S+=(-897492+470*r)*l-291*d,d=Math.sin(i),l=Math.cos(i),m+=(1475877-3633*r)*d+11817*l,S+=(73871-184*r)*l-1924*d,{dpsi:-135e-6+m*1e-7,deps:388e-6+S*1e-7}}function Os(e){var t=e.tt/36525,r=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return r/3600}var Kr;function Ns(e){if(!Kr||Math.abs(Kr.tt-e.tt)>1e-6){const t=l0(e),r=Os(e),i=r+t.deps/3600;Kr={tt:e.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(r*fr)/15,mobl:r,tobl:i}}return Kr}function d0(e,t){const r=e*fr,i=Math.cos(r),s=Math.sin(r);return[t[0],t[1]*i-t[2]*s,t[1]*s+t[2]*i]}function f0(e,t){return d0(Os(e),t)}function h0(e){const t=e.tt/36525;function r(ie,te){const X=[];let k;for(k=0;k<=te-ie;++k)X.push(0);return{min:ie,array:X}}function i(ie,te,X,k){const Ue=[];for(let E=0;E<=te-ie;++E)Ue.push(r(X,k));return{min:ie,array:Ue}}function s(ie,te,X){const k=ie.array[te-ie.min];return k.array[X-k.min]}function o(ie,te,X,k){const Ue=ie.array[te-ie.min];Ue.array[X-Ue.min]=k}let c,d,l,m,S,x,b,U,L,O,Y,ee,q,I,Z,F,Ae,be,Be,ze,se,pe,Ie,at=i(-6,6,1,4),Ee=i(-6,6,1,4);function Ve(ie,te){return s(at,ie,te)}function We(ie,te){return s(Ee,ie,te)}function st(ie,te,X){return o(at,ie,te,X)}function ot(ie,te,X){return o(Ee,ie,te,X)}function Ze(ie,te,X,k,Ue){Ue(ie*X-te*k,te*X+ie*k)}function K(ie){return Math.sin(Pt*ie)}b=t*t,L=0,Ie=0,Y=0,ee=3422.7;var Ke=K(.19833+.05611*t),Ce=K(.27869+.04508*t),je=K(.16827-.36903*t),Xe=K(.34734-5.37261*t),Ye=K(.10498-5.37899*t),Ne=K(.42681-.41855*t),pt=K(.14943-5.37511*t);for(be=.84*Ke+.31*Ce+14.27*je+7.26*Xe+.28*Ye+.24*Ne,Be=2.94*Ke+.31*Ce+14.27*je+9.34*Xe+1.12*Ye+.83*Ne,ze=-6.4*Ke-1.89*Ne,se=.21*Ke+.31*Ce+14.27*je-88.7*Xe-15.3*Ye+.24*Ne-1.86*pt,pe=be-ze,U=-3332e-9*K(.59734-5.37261*t)-539e-9*K(.35498-5.37899*t)-64e-9*K(.39943-5.37511*t),q=Pt*tr(.60643382+1336.85522467*t-313e-8*b)+be/Wt,I=Pt*tr(.37489701+1325.55240982*t+2565e-8*b)+Be/Wt,Z=Pt*tr(.99312619+99.99735956*t-44e-8*b)+ze/Wt,F=Pt*tr(.25909118+1342.2278298*t-892e-8*b)+se/Wt,Ae=Pt*tr(.82736186+1236.85308708*t-397e-8*b)+pe/Wt,S=1;S<=4;++S){switch(S){case 1:l=I,d=4,m=1.000002208;break;case 2:l=Z,d=3,m=.997504612-.002495388*t;break;case 3:l=F,d=4,m=1.000002708+139.978*U;break;case 4:l=Ae,d=6,m=1;break;default:throw`Internal error: I = ${S}`}for(st(0,S,1),st(1,S,Math.cos(l)*m),ot(0,S,0),ot(1,S,Math.sin(l)*m),x=2;x<=d;++x)Ze(Ve(x-1,S),We(x-1,S),Ve(1,S),We(1,S),(ie,te)=>(st(x,S,ie),ot(x,S,te)));for(x=1;x<=d;++x)st(-x,S,Ve(x,S)),ot(-x,S,-We(x,S))}function ct(ie,te,X,k){for(var Ue={x:1,y:0},E=[0,ie,te,X,k],De=1;De<=4;++De)E[De]!==0&&Ze(Ue.x,Ue.y,Ve(E[De],De),We(E[De],De),(Xt,At)=>(Ue.x=Xt,Ue.y=At));return Ue}function C(ie,te,X,k,Ue,E,De,Xt){var At=ct(Ue,E,De,Xt);L+=ie*At.y,Ie+=te*At.y,Y+=X*At.x,ee+=k*At.x}C(13.902,14.06,-.001,.2607,0,0,0,4),C(.403,-4.01,.394,.0023,0,0,0,3),C(2369.912,2373.36,.601,28.2333,0,0,0,2),C(-125.154,-112.79,-.725,-.9781,0,0,0,1),C(1.979,6.98,-.445,.0433,1,0,0,4),C(191.953,192.72,.029,3.0861,1,0,0,2),C(-8.466,-13.51,.455,-.1093,1,0,0,1),C(22639.5,22609.07,.079,186.5398,1,0,0,0),C(18.609,3.59,-.094,.0118,1,0,0,-1),C(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),C(3.215,5.44,.192,-.0386,1,0,0,-3),C(-38.428,-38.64,.001,.6008,1,0,0,-4),C(-.393,-1.43,-.092,.0086,1,0,0,-6),C(-.289,-1.59,.123,-.0053,0,1,0,4),C(-24.42,-25.1,.04,-.3,0,1,0,2),C(18.023,17.93,.007,.1494,0,1,0,1),C(-668.146,-126.98,-1.302,-.3997,0,1,0,0),C(.56,.32,-.001,-.0037,0,1,0,-1),C(-165.145,-165.06,.054,1.9178,0,1,0,-2),C(-1.877,-6.46,-.416,.0339,0,1,0,-4),C(.213,1.02,-.074,.0054,2,0,0,4),C(14.387,14.78,-.017,.2833,2,0,0,2),C(-.586,-1.2,.054,-.01,2,0,0,1),C(769.016,767.96,.107,10.1657,2,0,0,0),C(1.75,2.01,-.018,.0155,2,0,0,-1),C(-211.656,-152.53,5.679,-.3039,2,0,0,-2),C(1.225,.91,-.03,-.0088,2,0,0,-3),C(-30.773,-34.07,-.308,.3722,2,0,0,-4),C(-.57,-1.4,-.074,.0109,2,0,0,-6),C(-2.921,-11.75,.787,-.0484,1,1,0,2),C(1.267,1.52,-.022,.0164,1,1,0,1),C(-109.673,-115.18,.461,-.949,1,1,0,0),C(-205.962,-182.36,2.056,1.4437,1,1,0,-2),C(.233,.36,.012,-.0025,1,1,0,-3),C(-4.391,-9.66,-.471,.0673,1,1,0,-4),C(.283,1.53,-.111,.006,1,-1,0,4),C(14.577,31.7,-1.54,.2302,1,-1,0,2),C(147.687,138.76,.679,1.1528,1,-1,0,0),C(-1.089,.55,.021,0,1,-1,0,-1),C(28.475,23.59,-.443,-.2257,1,-1,0,-2),C(-.276,-.38,-.006,-.0036,1,-1,0,-3),C(.636,2.27,.146,-.0102,1,-1,0,-4),C(-.189,-1.68,.131,-.0028,0,2,0,2),C(-7.486,-.66,-.037,-.0086,0,2,0,0),C(-8.096,-16.35,-.74,.0918,0,2,0,-2),C(-5.741,-.04,0,-9e-4,0,0,2,2),C(.255,0,0,0,0,0,2,1),C(-411.608,-.2,0,-.0124,0,0,2,0),C(.584,.84,0,.0071,0,0,2,-1),C(-55.173,-52.14,0,-.1052,0,0,2,-2),C(.254,.25,0,-.0017,0,0,2,-3),C(.025,-1.67,0,.0031,0,0,2,-4),C(1.06,2.96,-.166,.0243,3,0,0,2),C(36.124,50.64,-1.3,.6215,3,0,0,0),C(-13.193,-16.4,.258,-.1187,3,0,0,-2),C(-1.187,-.74,.042,.0074,3,0,0,-4),C(-.293,-.31,-.002,.0046,3,0,0,-6),C(-.29,-1.45,.116,-.0051,2,1,0,2),C(-7.649,-10.56,.259,-.1038,2,1,0,0),C(-8.627,-7.59,.078,-.0192,2,1,0,-2),C(-2.74,-2.54,.022,.0324,2,1,0,-4),C(1.181,3.32,-.212,.0213,2,-1,0,2),C(9.703,11.67,-.151,.1268,2,-1,0,0),C(-.352,-.37,.001,-.0028,2,-1,0,-1),C(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),C(.36,.2,-.012,-.0043,2,-1,0,-4),C(-1.167,-1.25,.008,-.0106,1,2,0,0),C(-7.412,-6.12,.117,.0484,1,2,0,-2),C(-.311,-.65,-.032,.0044,1,2,0,-4),C(.757,1.82,-.105,.0112,1,-2,0,2),C(2.58,2.32,.027,.0196,1,-2,0,0),C(2.533,2.4,-.014,-.0212,1,-2,0,-2),C(-.344,-.57,-.025,.0036,0,3,0,-2),C(-.992,-.02,0,0,1,0,2,2),C(-45.099,-.02,0,-.001,1,0,2,0),C(-.179,-9.52,0,-.0833,1,0,2,-2),C(-.301,-.33,0,.0014,1,0,2,-4),C(-6.382,-3.37,0,-.0481,1,0,-2,2),C(39.528,85.13,0,-.7136,1,0,-2,0),C(9.366,.71,0,-.0112,1,0,-2,-2),C(.202,.02,0,0,1,0,-2,-4),C(.415,.1,0,.0013,0,1,2,0),C(-2.152,-2.26,0,-.0066,0,1,2,-2),C(-1.44,-1.3,0,.0014,0,1,-2,2),C(.384,-.04,0,0,0,1,-2,-2),C(1.938,3.6,-.145,.0401,4,0,0,0),C(-.952,-1.58,.052,-.013,4,0,0,-2),C(-.551,-.94,.032,-.0097,3,1,0,0),C(-.482,-.57,.005,-.0045,3,1,0,-2),C(.681,.96,-.026,.0115,3,-1,0,0),C(-.297,-.27,.002,-9e-4,2,2,0,-2),C(.254,.21,-.003,0,2,-2,0,-2),C(-.25,-.22,.004,.0014,1,3,0,-2),C(-3.996,0,0,4e-4,2,0,2,0),C(.557,-.75,0,-.009,2,0,2,-2),C(-.459,-.38,0,-.0053,2,0,-2,2),C(-1.298,.74,0,4e-4,2,0,-2,0),C(.538,1.14,0,-.0141,2,0,-2,-2),C(.263,.02,0,0,1,1,2,0),C(.426,.07,0,-6e-4,1,1,-2,-2),C(-.304,.03,0,3e-4,1,-1,2,0),C(-.372,-.19,0,-.0027,1,-1,-2,2),C(.418,0,0,0,0,0,4,0),C(-.33,-.04,0,0,3,0,2,0);function Me(ie,te,X,k,Ue){return ie*ct(te,X,k,Ue).y}O=0,O+=Me(-526.069,0,0,1,-2),O+=Me(-3.352,0,0,1,-4),O+=Me(44.297,1,0,1,-2),O+=Me(-6,1,0,1,-4),O+=Me(20.599,-1,0,1,0),O+=Me(-30.598,-1,0,1,-2),O+=Me(-24.649,-2,0,1,0),O+=Me(-2,-2,0,1,-2),O+=Me(-22.571,0,1,1,-2),O+=Me(10.985,0,-1,1,-2),L+=.82*K(.7736-62.5512*t)+.31*K(.0466-125.1025*t)+.35*K(.5785-25.1042*t)+.66*K(.4591+1335.8075*t)+.64*K(.313-91.568*t)+1.14*K(.148+1331.2898*t)+.21*K(.5918+1056.5859*t)+.44*K(.5784+1322.8595*t)+.24*K(.2275-5.7374*t)+.28*K(.2965+2.6929*t)+.33*K(.3132+6.3368*t),c=F+Ie/Wt;let ue=(1.000002708+139.978*U)*(18518.511+1.189+Y)*Math.sin(c)-6.24*Math.sin(3*c)+O;return{geo_eclip_lon:Pt*tr((q+L/Wt)/Pt),geo_eclip_lat:Math.PI/(180*3600)*ue,distance_au:Wt*n0/(.999953253*ee)}}function v0(e,t){return[e.rot[0][0]*t[0]+e.rot[1][0]*t[1]+e.rot[2][0]*t[2],e.rot[0][1]*t[0]+e.rot[1][1]*t[1]+e.rot[2][1]*t[2],e.rot[0][2]*t[0]+e.rot[1][2]*t[1]+e.rot[2][2]*t[2]]}function p0(e,t,r){const i=Ps(t,r);return v0(i,e)}function Ps(e,t){const r=e.tt/36525;let i=84381.406,s=((((-951e-10*r+132851e-9)*r-.00114045)*r-1.0790069)*r+5038.481507)*r,o=((((3337e-10*r-467e-9)*r-.00772503)*r+.0512623)*r-.025754)*r+i,c=((((-56e-9*r+170663e-9)*r-.00121197)*r-2.3814292)*r+10.556403)*r;i*=nr,s*=nr,o*=nr,c*=nr;const d=Math.sin(i),l=Math.cos(i),m=Math.sin(-s),S=Math.cos(-s),x=Math.sin(-o),b=Math.cos(-o),U=Math.sin(c),L=Math.cos(c),O=L*S-m*U*b,Y=L*m*l+U*b*S*l-d*U*x,ee=L*m*d+U*b*S*d+l*U*x,q=-U*S-m*L*b,I=-U*m*l+L*b*S*l-d*L*x,Z=-U*m*d+L*b*S*d+l*L*x,F=m*x,Ae=-x*S*l-d*b,be=-x*S*d+b*l;if(t===Ht.Into2000)return new hr([[O,Y,ee],[q,I,Z],[F,Ae,be]]);if(t===Ht.From2000)return new hr([[O,q,F],[Y,I,Ae],[ee,Z,be]]);throw"Invalid precess direction"}function m0(e){const t=.779057273264+.00273781191135448*e.ut,r=e.ut%1;let i=360*((t+r)%1);return i<0&&(i+=360),i}let Qr;function g0(e){if(!Qr||Qr.tt!==e.tt){const t=e.tt/36525;let r=15*Ns(e).ee;const i=m0(e);let s=((r+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;s<0&&(s+=24),Qr={tt:e.tt,st:s}}return Qr.st}function _0(e){const t=er(e);return g0(t)}function S0(e,t){const r=Ns(e),i=r.mobl*fr,s=r.tobl*fr,o=r.dpsi*nr,c=Math.cos(i),d=Math.sin(i),l=Math.cos(s),m=Math.sin(s),S=Math.cos(o),x=Math.sin(o),b=S,U=-x*c,L=-x*d,O=x*l,Y=S*c*l+d*m,ee=S*d*l-c*m,q=x*m,I=S*c*m-d*l,Z=S*d*m+c*l;if(t===Ht.From2000)return new hr([[b,O,q],[U,Y,I],[L,ee,Z]]);if(t===Ht.Into2000)return new hr([[b,U,L],[O,Y,ee],[q,I,Z]]);throw"Invalid precess direction"}class Et{constructor(t,r,i,s){this.x=t,this.y=r,this.z=i,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class w0{constructor(t,r,i,s,o,c,d){this.x=t,this.y=r,this.z=i,this.vx=s,this.vy=o,this.vz=c,this.t=d}}class y0{constructor(t,r,i){this.lat=Kn(t),this.lon=Kn(r),this.dist=Kn(i)}}class hr{constructor(t){this.rot=t}}function wi(e){const t=er(e),r=h0(t),i=r.distance_au*Math.cos(r.geo_eclip_lat),s=[i*Math.cos(r.geo_eclip_lon),i*Math.sin(r.geo_eclip_lon),r.distance_au*Math.sin(r.geo_eclip_lat)],o=f0(t,s),c=p0(o,t,Ht.Into2000);return new Et(c[0],c[1],c[2],t)}function sr(e,t,r){let i=1,s=0;for(let o of e){let c=0;for(let[l,m,S]of o)c+=l*Math.cos(m+t*S);let d=i*c;r&&(d%=Pt),s+=d,i*=t}return s}function Qn(e,t){let r=1,i=0,s=0,o=0;for(let c of e){let d=0,l=0;for(let[m,S,x]of c){let b=S+t*x;d+=m*x*Math.sin(b),o>0&&(l+=m*Math.cos(b))}s+=o*i*l-r*d,i=r,r*=t,++o}return s}const Cr=365250,yi=0,xi=1,Ei=2;function Ti(e){return new $e(e[0]+44036e-11*e[1]-190919e-12*e[2],-479966e-12*e[0]+.917482137087*e[1]-.397776982902*e[2],.397776982902*e[1]+.917482137087*e[2])}function Ls(e,t,r){const i=r*Math.cos(t),s=Math.cos(e),o=Math.sin(e);return[i*s,i*o,r*Math.sin(t)]}function nn(e,t){const r=t.tt/Cr,i=sr(e[yi],r,!0),s=sr(e[xi],r,!1),o=sr(e[Ei],r,!1),c=Ls(i,s,o);return Ti(c).ToAstroVector(t)}function x0(e,t){const r=t/Cr,i=sr(e[yi],r,!0),s=sr(e[xi],r,!1),o=sr(e[Ei],r,!1),c=Qn(e[yi],r),d=Qn(e[xi],r),l=Qn(e[Ei],r),m=Math.cos(i),S=Math.sin(i),x=Math.cos(s),b=Math.sin(s),U=+(l*x*m)-o*b*m*d-o*x*S*c,L=+(l*x*S)-o*b*S*d+o*x*m*c,O=+(l*b)+o*x*d,Y=Ls(i,s,o),ee=[U/Cr,L/Cr,O/Cr],q=Ti(Y),I=Ti(ee);return new hn(t,q,I)}function Jr(e,t,r,i){const s=i/(i+Qi),o=nn(ir[r],t);e.x+=s*o.x,e.y+=s*o.y,e.z+=s*o.z}function E0(e){const t=new Et(0,0,0,e);return Jr(t,e,me.Jupiter,mi),Jr(t,e,me.Saturn,gi),Jr(t,e,me.Uranus,_i),Jr(t,e,me.Neptune,Si),t}const Ri=51,T0=29200,fn=146,Lt=201,qt=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class $e{constructor(t,r,i){this.x=t,this.y=r,this.z=i}clone(){return new $e(this.x,this.y,this.z)}ToAstroVector(t){return new Et(this.x,this.y,this.z,t)}static zero(){return new $e(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new $e(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new $e(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new $e(t*this.x,t*this.y,t*this.z)}div(t){return new $e(this.x/t,this.y/t,this.z/t)}mean(t){return new $e((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new $e(-this.x,-this.y,-this.z)}}let hn=class Ai{constructor(t,r,i){this.tt=t,this.r=r,this.v=i}clone(){return new Ai(this.tt,this.r,this.v)}sub(t){return new Ai(this.tt,this.r.sub(t.r),this.v.sub(t.v))}};function R0(e){let[t,[r,i,s],[o,c,d]]=e;return new hn(t,new $e(r,i,s),new $e(o,c,d))}function en(e,t,r,i){const s=i/(i+Qi),o=x0(ir[r],t);return e.r.incr(o.r.mul(s)),e.v.incr(o.v.mul(s)),o}function xr(e,t,r){const i=r.sub(e),s=i.quadrature();return i.mul(t/(s*Math.sqrt(s)))}class Ji{constructor(t){let r=new hn(t,new $e(0,0,0),new $e(0,0,0));this.Jupiter=en(r,t,me.Jupiter,mi),this.Saturn=en(r,t,me.Saturn,gi),this.Uranus=en(r,t,me.Uranus,_i),this.Neptune=en(r,t,me.Neptune,Si),this.Jupiter.r.decr(r.r),this.Jupiter.v.decr(r.v),this.Saturn.r.decr(r.r),this.Saturn.v.decr(r.v),this.Uranus.r.decr(r.r),this.Uranus.v.decr(r.v),this.Neptune.r.decr(r.r),this.Neptune.v.decr(r.v),this.Sun=new hn(t,r.r.mul(-1),r.v.mul(-1))}Acceleration(t){let r=xr(t,Qi,this.Sun.r);return r.incr(xr(t,mi,this.Jupiter.r)),r.incr(xr(t,gi,this.Saturn.r)),r.incr(xr(t,_i,this.Uranus.r)),r.incr(xr(t,Si,this.Neptune.r)),r}}class Cn{constructor(t,r,i,s){this.tt=t,this.r=r,this.v=i,this.a=s}clone(){return new Cn(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Bs{constructor(t,r){this.bary=t,this.grav=r}}function vn(e,t,r,i){return new $e(t.x+e*(r.x+e*i.x/2),t.y+e*(r.y+e*i.y/2),t.z+e*(r.z+e*i.z/2))}function Ia(e,t,r){return new $e(t.x+e*r.x,t.y+e*r.y,t.z+e*r.z)}function Ci(e,t){const r=e-t.tt,i=new Ji(e),s=vn(r,t.r,t.v,t.a),o=i.Acceleration(s).mean(t.a),c=vn(r,t.r,t.v,o),d=t.v.add(o.mul(r)),l=i.Acceleration(c),m=new Cn(e,c,d,l);return new Bs(i,m)}const A0=[];function zs(e,t){const r=Math.floor(e);return r<0?0:r>=t?t-1:r}function Mi(e){const t=R0(e),r=new Ji(t.tt),i=t.r.add(r.Sun.r),s=t.v.add(r.Sun.v),o=r.Acceleration(i),c=new Cn(t.tt,i,s,o);return new Bs(r,c)}function C0(e,t){const r=qt[0][0];if(t<r||t>qt[Ri-1][0])return null;const i=zs((t-r)/T0,Ri-1);if(!e[i]){const o=e[i]=[];o[0]=Mi(qt[i]).grav,o[Lt-1]=Mi(qt[i+1]).grav;let c,d=o[0].tt;for(c=1;c<Lt-1;++c)o[c]=Ci(d+=fn,o[c-1]).grav;d=o[Lt-1].tt;var s=[];for(s[Lt-1]=o[Lt-1],c=Lt-2;c>0;--c)s[c]=Ci(d-=fn,s[c+1]).grav;for(c=Lt-2;c>0;--c){const l=c/(Lt-1);o[c].r=o[c].r.mul(1-l).add(s[c].r.mul(l)),o[c].v=o[c].v.mul(1-l).add(s[c].v.mul(l)),o[c].a=o[c].a.mul(1-l).add(s[c].a.mul(l))}}return e[i]}function Ua(e,t,r){let i=Mi(e);const s=Math.ceil((t-i.grav.tt)/r);for(let o=0;o<s;++o)i=Ci(o+1===s?t:i.grav.tt+r,i.grav);return i}function M0(e,t){let r,i,s;const o=C0(A0,e.tt);if(o){const c=zs((e.tt-o[0].tt)/fn,Lt-1),d=o[c],l=o[c+1],m=d.a.mean(l.a),S=vn(e.tt-d.tt,d.r,d.v,m),x=Ia(e.tt-d.tt,d.v,m),b=vn(e.tt-l.tt,l.r,l.v,m),U=Ia(e.tt-l.tt,l.v,m),L=(e.tt-d.tt)/fn;r=S.mul(1-L).add(b.mul(L)),i=x.mul(1-L).add(U.mul(L))}else{let c;e.tt<qt[0][0]?c=Ua(qt[0],e.tt,-146):c=Ua(qt[Ri-1],e.tt,146),r=c.grav.r,i=c.grav.v,s=c.bary}return s||(s=new Ji(e.tt)),r=r.sub(s.Sun.r),i=i.sub(s.Sun.v),new w0(r.x,r.y,r.z,i.x,i.y,i.z,e)}function Ur(e,t){var r=er(t);if(e in ir)return nn(ir[e],r);if(e===me.Pluto){const c=M0(r);return new Et(c.x,c.y,c.z,r)}if(e===me.Sun)return new Et(0,0,0,r);if(e===me.Moon){var i=nn(ir.Earth,r),s=wi(r);return new Et(i.x+s.x,i.y+s.y,i.z+s.z,r)}if(e===me.EMB){const c=nn(ir.Earth,r),d=wi(r),l=1+i0;return new Et(c.x+d.x/l,c.y+d.y/l,c.z+d.z/l,r)}if(e===me.SSB)return E0(r);const o=Ds(e);if(o){const c=new y0(o.dec,15*o.ra,o.dist);return O0(c,r)}throw`HelioVector: Unknown body "${e}"`}function b0(e,t){let r=t,i=0;for(let s=0;s<10;++s){const o=e(r),c=o.Length()/Kl;if(c>1)throw"Object is too distant for light-travel solver.";const d=t.AddDays(-c);if(i=Math.abs(d.tt-r.tt),i<1e-9)return o;r=d}throw`Light-travel time solver did not converge: dt = ${i}`}class I0{constructor(t,r,i,s){this.observerBody=t,this.targetBody=r,this.aberration=i,this.observerPos=s}Position(t){this.aberration&&(this.observerPos=Ur(this.observerBody,t));const r=Ur(this.targetBody,t);return new Et(r.x-this.observerPos.x,r.y-this.observerPos.y,r.z-this.observerPos.z,t)}}function U0(e,t,r,i){const s=er(e);if(Ds(r)){const d=Ur(r,s),l=Ur(t,s);return new Et(d.x-l.x,d.y-l.y,d.z-l.z,s)}let o;o=Ur(t,s);const c=new I0(t,r,i,o);return b0(d=>c.Position(d),s)}function D0(e,t,r){const i=er(t);switch(e){case me.Earth:return new Et(0,0,0,i);case me.Moon:return wi(i);default:const s=U0(i,me.Earth,e,r);return s.t=i,s}}var Da;(function(e){e[e.Pericenter=0]="Pericenter",e[e.Apocenter=1]="Apocenter"})(Da||(Da={}));function Fs(e,t){return new hr([[t.rot[0][0]*e.rot[0][0]+t.rot[1][0]*e.rot[0][1]+t.rot[2][0]*e.rot[0][2],t.rot[0][1]*e.rot[0][0]+t.rot[1][1]*e.rot[0][1]+t.rot[2][1]*e.rot[0][2],t.rot[0][2]*e.rot[0][0]+t.rot[1][2]*e.rot[0][1]+t.rot[2][2]*e.rot[0][2]],[t.rot[0][0]*e.rot[1][0]+t.rot[1][0]*e.rot[1][1]+t.rot[2][0]*e.rot[1][2],t.rot[0][1]*e.rot[1][0]+t.rot[1][1]*e.rot[1][1]+t.rot[2][1]*e.rot[1][2],t.rot[0][2]*e.rot[1][0]+t.rot[1][2]*e.rot[1][1]+t.rot[2][2]*e.rot[1][2]],[t.rot[0][0]*e.rot[2][0]+t.rot[1][0]*e.rot[2][1]+t.rot[2][0]*e.rot[2][2],t.rot[0][1]*e.rot[2][0]+t.rot[1][1]*e.rot[2][1]+t.rot[2][1]*e.rot[2][2],t.rot[0][2]*e.rot[2][0]+t.rot[1][2]*e.rot[2][1]+t.rot[2][2]*e.rot[2][2]]])}function O0(e,t){t=er(t);const r=e.lat*fr,i=e.lon*fr,s=e.dist*Math.cos(r);return new Et(s*Math.cos(i),s*Math.sin(i),e.dist*Math.sin(r),t)}function N0(e){e=er(e);const t=Ps(e,Ht.From2000),r=S0(e,Ht.From2000);return Fs(t,r)}var Oa;(function(e){e.Penumbral="penumbral",e.Partial="partial",e.Annular="annular",e.Total="total"})(Oa||(Oa={}));var Na;(function(e){e[e.Invalid=0]="Invalid",e[e.Ascending=1]="Ascending",e[e.Descending=-1]="Descending"})(Na||(Na={}));const P0=new Re;function L0(e){const t=Math.cos(e),r=Math.sin(e);return new hr([[t,-r,0],[r,t,0],[0,0,1]])}function ea(e){return e instanceof jt?e:new jt(e instanceof Date?e:new Date(e))}function B0(e,t=new Re){const r=ea(e),i=N0(r),s=L0(_0(r)*(-Math.PI/12)),{rot:o}=Fs(i,s);return t.set(o[0][0],o[0][1],o[0][2],0,o[1][0],o[1][1],o[1][2],0,o[2][0],o[2][1],o[2][2],0,0,0,0,1)}function z0(e,t,r){const{x:i,y:s,z:o}=D0(e,t,!1);return r.set(i,s,o).normalize()}function Hs(e,t,r){const i=B0(t,P0);return z0(e,t,r).applyMatrix4(i)}function fd(e,t=new B){return Hs(me.Sun,ea(e),t)}function hd(e,t=new B){return Hs(me.Moon,ea(e),t)}function Gs(e){return Math.sqrt(Math.max(e,0))}function F0(e){return Math.max(e,0)}function H0(e,t,r){const{bottomRadius:i}=e;return r<0&&t**2*(r**2-1)+i**2>=0}function G0(e,t,r){const{topRadius:i}=e,s=t**2*(r**2-1)+i**2;return F0(-t*r+Gs(s))}function pn(e,t){return .5/t+e*(1-1/t)}var k0="Invariant failed";function V0(e,t){if(!e)throw new Error(k0)}const W0=new B,Pa=new B,$0=new B;function tn(e,t,r){const i=t*4;return r.set(e[i],e[i+1],e[i+2])}function ks(e,t,r){const{width:i,height:s}=e.image;V0(Pu(e.image.data));let o=e.image.data;e.type===et&&o instanceof Uint16Array&&(o=new ve(o.buffer));const c=Jt(t.x,0,1)*(i-1),d=Jt(t.y,0,1)*(s-1),l=Math.floor(c),m=Math.floor(d),S=c-l,x=d-m,b=S,U=x,L=l%i,O=(L+1)%i,Y=m%s,ee=(Y+1)%s,q=tn(o,Y*i+L,W0),I=tn(o,Y*i+O,Pa),Z=q.lerp(I,b),F=tn(o,ee*i+L,Pa),Ae=tn(o,ee*i+O,$0),be=F.lerp(Ae,b);return r.copy(Z.lerp(be,U))}function j0(e,t,r,i){const{topRadius:s,bottomRadius:o}=e,c=Math.sqrt(s**2-o**2),d=Gs(t**2-o**2),l=G0(e,t,r),m=s-t,S=d+c,x=(l-m)/(S-m),b=d/c;return i.set(pn(x,Rn),pn(b,An))}const X0=new B,Jn=new B,Y0=new Pe;function q0(e,t,r,i=new gn,{ellipsoid:s=zt.WGS84,correctAltitude:o=!0,photometric:c=!0}={},d=zr.DEFAULT){const l=X0.copy(t);if(o){const O=s.projectOnSurface(t,Jn);O!=null&&l.sub(s.getOsculatingSphereCenter(O,d.bottomRadius,Jn))}const m=Jn;let S=l.length(),x=l.dot(r);const{topRadius:b}=d,U=-x-Math.sqrt(x**2-S**2+b**2);if(U>0&&(S=b,x+=U),S>b)m.set(1,1,1);else{const O=x/S;if(H0(d,S,O))m.setScalar(0);else{const Y=j0(d,S,O,Y0);ks(e,Y,m)}}const L=m.multiply(d.solarIrradiance);return c&&L.multiply(d.sunRadianceToRelativeLuminance),i.setFromVector3(L)}const Z0=parseInt(Or.replace(/\D+/g,""));var lt=Uint8Array,Kt=Uint16Array,bi=Uint32Array,Vs=new lt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ws=new lt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),K0=new lt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$s=function(e,t){for(var r=new Kt(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var s=new bi(r[30]),i=1;i<30;++i)for(var o=r[i];o<r[i+1];++o)s[o]=o-r[i]<<5|i;return[r,s]},js=$s(Vs,2),Xs=js[0],Q0=js[1];Xs[28]=258,Q0[258]=28;var J0=$s(Ws,0),e1=J0[0],Ys=new Kt(32768);for(var xe=0;xe<32768;++xe){var $t=(xe&43690)>>>1|(xe&21845)<<1;$t=($t&52428)>>>2|($t&13107)<<2,$t=($t&61680)>>>4|($t&3855)<<4,Ys[xe]=(($t&65280)>>>8|($t&255)<<8)>>>1}var Dr=function(e,t,r){for(var i=e.length,s=0,o=new Kt(t);s<i;++s)++o[e[s]-1];var c=new Kt(t);for(s=0;s<t;++s)c[s]=c[s-1]+o[s-1]<<1;var d;{d=new Kt(1<<t);var l=15-t;for(s=0;s<i;++s)if(e[s])for(var m=s<<4|e[s],S=t-e[s],x=c[e[s]-1]++<<S,b=x|(1<<S)-1;x<=b;++x)d[Ys[x]>>>l]=m}return d},Fr=new lt(288);for(var xe=0;xe<144;++xe)Fr[xe]=8;for(var xe=144;xe<256;++xe)Fr[xe]=9;for(var xe=256;xe<280;++xe)Fr[xe]=7;for(var xe=280;xe<288;++xe)Fr[xe]=8;var qs=new lt(32);for(var xe=0;xe<32;++xe)qs[xe]=5;var t1=Dr(Fr,9),r1=Dr(qs,5),ei=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},wt=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},ti=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},n1=function(e){return(e/8|0)+(e&7&&1)},i1=function(e,t,r){(r==null||r>e.length)&&(r=e.length);var i=new(e instanceof Kt?Kt:e instanceof bi?bi:lt)(r-t);return i.set(e.subarray(t,r)),i},a1=function(e,t,r){var i=e.length;if(!i||r&&!r.l&&i<5)return t||new lt(0);var s=!t||r,o=!r||r.i;r||(r={}),t||(t=new lt(i*3));var c=function(Ne){var pt=t.length;if(Ne>pt){var ct=new lt(Math.max(pt*2,Ne));ct.set(t),t=ct}},d=r.f||0,l=r.p||0,m=r.b||0,S=r.l,x=r.d,b=r.m,U=r.n,L=i*8;do{if(!S){r.f=d=wt(e,l,1);var O=wt(e,l+1,3);if(l+=3,O)if(O==1)S=t1,x=r1,b=9,U=5;else if(O==2){var Y=wt(e,l,31)+257,ee=wt(e,l+10,15)+4,q=Y+wt(e,l+5,31)+1;l+=14;for(var I=new lt(q),Z=new lt(19),F=0;F<ee;++F)Z[K0[F]]=wt(e,l+F*3,7);l+=ee*3;for(var Ae=ei(Z),be=(1<<Ae)-1,Be=Dr(Z,Ae),F=0;F<q;){var ze=Be[wt(e,l,be)];l+=ze&15;var se=ze>>>4;if(se<16)I[F++]=se;else{var pe=0,Ie=0;for(se==16?(Ie=3+wt(e,l,3),l+=2,pe=I[F-1]):se==17?(Ie=3+wt(e,l,7),l+=3):se==18&&(Ie=11+wt(e,l,127),l+=7);Ie--;)I[F++]=pe}}var at=I.subarray(0,Y),Ee=I.subarray(Y);b=ei(at),U=ei(Ee),S=Dr(at,b),x=Dr(Ee,U)}else throw"invalid block type";else{var se=n1(l)+4,Ve=e[se-4]|e[se-3]<<8,We=se+Ve;if(We>i){if(o)throw"unexpected EOF";break}s&&c(m+Ve),t.set(e.subarray(se,We),m),r.b=m+=Ve,r.p=l=We*8;continue}if(l>L){if(o)throw"unexpected EOF";break}}s&&c(m+131072);for(var st=(1<<b)-1,ot=(1<<U)-1,Ze=l;;Ze=l){var pe=S[ti(e,l)&st],K=pe>>>4;if(l+=pe&15,l>L){if(o)throw"unexpected EOF";break}if(!pe)throw"invalid length/literal";if(K<256)t[m++]=K;else if(K==256){Ze=l,S=null;break}else{var Ke=K-254;if(K>264){var F=K-257,Ce=Vs[F];Ke=wt(e,l,(1<<Ce)-1)+Xs[F],l+=Ce}var je=x[ti(e,l)&ot],Xe=je>>>4;if(!je)throw"invalid distance";l+=je&15;var Ee=e1[Xe];if(Xe>3){var Ce=Ws[Xe];Ee+=ti(e,l)&(1<<Ce)-1,l+=Ce}if(l>L){if(o)throw"unexpected EOF";break}s&&c(m+131072);for(var Ye=m+Ke;m<Ye;m+=4)t[m]=t[m-Ee],t[m+1]=t[m+1-Ee],t[m+2]=t[m+2-Ee],t[m+3]=t[m+3-Ee];m=Ye}}r.l=S,r.p=Ze,r.b=m,S&&(d=1,r.m=b,r.d=x,r.n=U)}while(!d);return m==t.length?t:i1(t,0,m)},s1=new lt(0),o1=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(e[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function rn(e,t){return a1((o1(e),e.subarray(2,-4)),t)}var c1=typeof TextDecoder<"u"&&new TextDecoder,u1=0;try{c1.decode(s1,{stream:!0}),u1=1}catch{}const Er=Z0>=152;class La extends Va{constructor(t){super(t),this.type=et}parse(t){const r=Math.pow(2.7182818,2.2);function i(n,a){for(var u=0,f=0;f<65536;++f)(f==0||n[f>>3]&1<<(f&7))&&(a[u++]=f);for(var v=u-1;u<65536;)a[u++]=0;return v}function s(n){for(var a=0;a<16384;a++)n[a]={},n[a].len=0,n[a].lit=0,n[a].p=null}const o={l:0,c:0,lc:0};function c(n,a,u,f,v){for(;u<n;)a=a<<8|ie(f,v),u+=8;u-=n,o.l=a>>u&(1<<n)-1,o.c=a,o.lc=u}const d=new Array(59);function l(n){for(var a=0;a<=58;++a)d[a]=0;for(var a=0;a<65537;++a)d[n[a]]+=1;for(var u=0,a=58;a>0;--a){var f=u+d[a]>>1;d[a]=u,u=f}for(var a=0;a<65537;++a){var v=n[a];v>0&&(n[a]=v|d[v]++<<6)}}function m(n,a,u,f,v,h,g){for(var p=u,T=0,_=0;v<=h;v++){if(p.value-u.value>f)return!1;c(6,T,_,n,p);var y=o.l;if(T=o.c,_=o.lc,g[v]=y,y==63){if(p.value-u.value>f)throw"Something wrong with hufUnpackEncTable";c(8,T,_,n,p);var w=o.l+6;if(T=o.c,_=o.lc,v+w>h+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[v++]=0;v--}else if(y>=59){var w=y-59+2;if(v+w>h+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[v++]=0;v--}}l(g)}function S(n){return n&63}function x(n){return n>>6}function b(n,a,u,f){for(;a<=u;a++){var v=x(n[a]),h=S(n[a]);if(v>>h)throw"Invalid table entry";if(h>14){var g=f[v>>h-14];if(g.len)throw"Invalid table entry";if(g.lit++,g.p){var p=g.p;g.p=new Array(g.lit);for(var T=0;T<g.lit-1;++T)g.p[T]=p[T]}else g.p=new Array(1);g.p[g.lit-1]=a}else if(h)for(var _=0,T=1<<14-h;T>0;T--){var g=f[(v<<14-h)+_];if(g.len||g.p)throw"Invalid table entry";g.len=h,g.lit=a,_++}}return!0}const U={c:0,lc:0};function L(n,a,u,f){n=n<<8|ie(u,f),a+=8,U.c=n,U.lc=a}const O={c:0,lc:0};function Y(n,a,u,f,v,h,g,p,T,_){if(n==a){f<8&&(L(u,f,v,g),u=U.c,f=U.lc),f-=8;var y=u>>f,y=new Uint8Array([y])[0];if(T.value+y>_)return!1;for(var w=p[T.value-1];y-- >0;)p[T.value++]=w}else if(T.value<_)p[T.value++]=n;else return!1;O.c=u,O.lc=f}function ee(n){return n&65535}function q(n){var a=ee(n);return a>32767?a-65536:a}const I={a:0,b:0};function Z(n,a){var u=q(n),f=q(a),v=f,h=u+(v&1)+(v>>1),g=h,p=h-v;I.a=g,I.b=p}function F(n,a){var u=ee(n),f=ee(a),v=u-(f>>1)&65535,h=f+v-32768&65535;I.a=h,I.b=v}function Ae(n,a,u,f,v,h,g){for(var p=g<16384,T=u>v?v:u,_=1,y;_<=T;)_<<=1;for(_>>=1,y=_,_>>=1;_>=1;){for(var w=0,V=w+h*(v-y),A=h*_,M=h*y,D=f*_,N=f*y,H,Q,W,oe;w<=V;w+=M){for(var G=w,Oe=w+f*(u-y);G<=Oe;G+=N){var le=G+D,ae=G+A,Le=ae+D;p?(Z(n[G+a],n[ae+a]),H=I.a,W=I.b,Z(n[le+a],n[Le+a]),Q=I.a,oe=I.b,Z(H,Q),n[G+a]=I.a,n[le+a]=I.b,Z(W,oe),n[ae+a]=I.a,n[Le+a]=I.b):(F(n[G+a],n[ae+a]),H=I.a,W=I.b,F(n[le+a],n[Le+a]),Q=I.a,oe=I.b,F(H,Q),n[G+a]=I.a,n[le+a]=I.b,F(W,oe),n[ae+a]=I.a,n[Le+a]=I.b)}if(u&_){var ae=G+A;p?Z(n[G+a],n[ae+a]):F(n[G+a],n[ae+a]),H=I.a,n[ae+a]=I.b,n[G+a]=H}}if(v&_)for(var G=w,Oe=w+f*(u-y);G<=Oe;G+=N){var le=G+D;p?Z(n[G+a],n[le+a]):F(n[G+a],n[le+a]),H=I.a,n[le+a]=I.b,n[G+a]=H}y=_,_>>=1}return w}function be(n,a,u,f,v,h,g,p,T,_){for(var y=0,w=0,V=p,A=Math.trunc(v.value+(h+7)/8);v.value<A;)for(L(y,w,u,v),y=U.c,w=U.lc;w>=14;){var M=y>>w-14&16383,D=a[M];if(D.len)w-=D.len,Y(D.lit,g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;else{if(!D.p)throw"hufDecode issues";var N;for(N=0;N<D.lit;N++){for(var H=S(n[D.p[N]]);w<H&&v.value<A;)L(y,w,u,v),y=U.c,w=U.lc;if(w>=H&&x(n[D.p[N]])==(y>>w-H&(1<<H)-1)){w-=H,Y(D.p[N],g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;break}}if(N==D.lit)throw"hufDecode issues"}}var Q=8-h&7;for(y>>=Q,w-=Q;w>0;){var D=a[y<<14-w&16383];if(D.len)w-=D.len,Y(D.lit,g,y,w,u,f,v,T,_,V),y=O.c,w=O.lc;else throw"hufDecode issues"}return!0}function Be(n,a,u,f,v,h){var g={value:0},p=u.value,T=ue(a,u),_=ue(a,u);u.value+=4;var y=ue(a,u);if(u.value+=4,T<0||T>=65537||_<0||_>=65537)throw"Something wrong with HUF_ENCSIZE";var w=new Array(65537),V=new Array(16384);s(V);var A=f-(u.value-p);if(m(n,a,u,A,T,_,w),y>8*(f-(u.value-p)))throw"Something wrong with hufUncompress";b(w,T,_,V),be(w,V,n,a,u,y,_,h,v,g)}function ze(n,a,u){for(var f=0;f<u;++f)a[f]=n[a[f]]}function se(n){for(var a=1;a<n.length;a++){var u=n[a-1]+n[a]-128;n[a]=u}}function pe(n,a){for(var u=0,f=Math.floor((n.length+1)/2),v=0,h=n.length-1;!(v>h||(a[v++]=n[u++],v>h));)a[v++]=n[f++]}function Ie(n){for(var a=n.byteLength,u=new Array,f=0,v=new DataView(n);a>0;){var h=v.getInt8(f++);if(h<0){var g=-h;a-=g+1;for(var p=0;p<g;p++)u.push(v.getUint8(f++))}else{var g=h;a-=2;for(var T=v.getUint8(f++),p=0;p<g+1;p++)u.push(T)}}return u}function at(n,a,u,f,v,h){var g=new DataView(h.buffer),p=u[n.idx[0]].width,T=u[n.idx[0]].height,_=3,y=Math.floor(p/8),w=Math.ceil(p/8),V=Math.ceil(T/8),A=p-(w-1)*8,M=T-(V-1)*8,D={value:0},N=new Array(_),H=new Array(_),Q=new Array(_),W=new Array(_),oe=new Array(_);for(let $=0;$<_;++$)oe[$]=a[n.idx[$]],N[$]=$<1?0:N[$-1]+w*V,H[$]=new Float32Array(64),Q[$]=new Uint16Array(64),W[$]=new Uint16Array(w*64);for(let $=0;$<V;++$){var G=8;$==V-1&&(G=M);var Oe=8;for(let j=0;j<w;++j){j==w-1&&(Oe=A);for(let z=0;z<_;++z)Q[z].fill(0),Q[z][0]=v[N[z]++],Ee(D,f,Q[z]),Ve(Q[z],H[z]),We(H[z]);st(H);for(let z=0;z<_;++z)ot(H[z],W[z],j*64)}let ne=0;for(let j=0;j<_;++j){const z=u[n.idx[j]].type;for(let we=8*$;we<8*$+G;++we){ne=oe[j][we];for(let qe=0;qe<y;++qe){const ge=qe*64+(we&7)*8;g.setUint16(ne+0*2*z,W[j][ge+0],!0),g.setUint16(ne+1*2*z,W[j][ge+1],!0),g.setUint16(ne+2*2*z,W[j][ge+2],!0),g.setUint16(ne+3*2*z,W[j][ge+3],!0),g.setUint16(ne+4*2*z,W[j][ge+4],!0),g.setUint16(ne+5*2*z,W[j][ge+5],!0),g.setUint16(ne+6*2*z,W[j][ge+6],!0),g.setUint16(ne+7*2*z,W[j][ge+7],!0),ne+=8*2*z}}if(y!=w)for(let we=8*$;we<8*$+G;++we){const qe=oe[j][we]+8*y*2*z,ge=y*64+(we&7)*8;for(let ke=0;ke<Oe;++ke)g.setUint16(qe+ke*2*z,W[j][ge+ke],!0)}}}for(var le=new Uint16Array(p),g=new DataView(h.buffer),ae=0;ae<_;++ae){u[n.idx[ae]].decoded=!0;var Le=u[n.idx[ae]].type;if(u[ae].type==2)for(var _t=0;_t<T;++_t){const ne=oe[ae][_t];for(var Se=0;Se<p;++Se)le[Se]=g.getUint16(ne+Se*2*Le,!0);for(var Se=0;Se<p;++Se)g.setFloat32(ne+Se*2*Le,E(le[Se]),!0)}}}function Ee(n,a,u){for(var f,v=1;v<64;)f=a[n.value],f==65280?v=64:f>>8==255?v+=f&255:(u[v]=f,v++),n.value++}function Ve(n,a){a[0]=E(n[0]),a[1]=E(n[1]),a[2]=E(n[5]),a[3]=E(n[6]),a[4]=E(n[14]),a[5]=E(n[15]),a[6]=E(n[27]),a[7]=E(n[28]),a[8]=E(n[2]),a[9]=E(n[4]),a[10]=E(n[7]),a[11]=E(n[13]),a[12]=E(n[16]),a[13]=E(n[26]),a[14]=E(n[29]),a[15]=E(n[42]),a[16]=E(n[3]),a[17]=E(n[8]),a[18]=E(n[12]),a[19]=E(n[17]),a[20]=E(n[25]),a[21]=E(n[30]),a[22]=E(n[41]),a[23]=E(n[43]),a[24]=E(n[9]),a[25]=E(n[11]),a[26]=E(n[18]),a[27]=E(n[24]),a[28]=E(n[31]),a[29]=E(n[40]),a[30]=E(n[44]),a[31]=E(n[53]),a[32]=E(n[10]),a[33]=E(n[19]),a[34]=E(n[23]),a[35]=E(n[32]),a[36]=E(n[39]),a[37]=E(n[45]),a[38]=E(n[52]),a[39]=E(n[54]),a[40]=E(n[20]),a[41]=E(n[22]),a[42]=E(n[33]),a[43]=E(n[38]),a[44]=E(n[46]),a[45]=E(n[51]),a[46]=E(n[55]),a[47]=E(n[60]),a[48]=E(n[21]),a[49]=E(n[34]),a[50]=E(n[37]),a[51]=E(n[47]),a[52]=E(n[50]),a[53]=E(n[56]),a[54]=E(n[59]),a[55]=E(n[61]),a[56]=E(n[35]),a[57]=E(n[36]),a[58]=E(n[48]),a[59]=E(n[49]),a[60]=E(n[57]),a[61]=E(n[58]),a[62]=E(n[62]),a[63]=E(n[63])}function We(n){const a=.5*Math.cos(.7853975),u=.5*Math.cos(3.14159/16),f=.5*Math.cos(3.14159/8),v=.5*Math.cos(3*3.14159/16),h=.5*Math.cos(5*3.14159/16),g=.5*Math.cos(3*3.14159/8),p=.5*Math.cos(7*3.14159/16);for(var T=new Array(4),_=new Array(4),y=new Array(4),w=new Array(4),V=0;V<8;++V){var A=V*8;T[0]=f*n[A+2],T[1]=g*n[A+2],T[2]=f*n[A+6],T[3]=g*n[A+6],_[0]=u*n[A+1]+v*n[A+3]+h*n[A+5]+p*n[A+7],_[1]=v*n[A+1]-p*n[A+3]-u*n[A+5]-h*n[A+7],_[2]=h*n[A+1]-u*n[A+3]+p*n[A+5]+v*n[A+7],_[3]=p*n[A+1]-h*n[A+3]+v*n[A+5]-u*n[A+7],y[0]=a*(n[A+0]+n[A+4]),y[3]=a*(n[A+0]-n[A+4]),y[1]=T[0]+T[3],y[2]=T[1]-T[2],w[0]=y[0]+y[1],w[1]=y[3]+y[2],w[2]=y[3]-y[2],w[3]=y[0]-y[1],n[A+0]=w[0]+_[0],n[A+1]=w[1]+_[1],n[A+2]=w[2]+_[2],n[A+3]=w[3]+_[3],n[A+4]=w[3]-_[3],n[A+5]=w[2]-_[2],n[A+6]=w[1]-_[1],n[A+7]=w[0]-_[0]}for(var M=0;M<8;++M)T[0]=f*n[16+M],T[1]=g*n[16+M],T[2]=f*n[48+M],T[3]=g*n[48+M],_[0]=u*n[8+M]+v*n[24+M]+h*n[40+M]+p*n[56+M],_[1]=v*n[8+M]-p*n[24+M]-u*n[40+M]-h*n[56+M],_[2]=h*n[8+M]-u*n[24+M]+p*n[40+M]+v*n[56+M],_[3]=p*n[8+M]-h*n[24+M]+v*n[40+M]-u*n[56+M],y[0]=a*(n[M]+n[32+M]),y[3]=a*(n[M]-n[32+M]),y[1]=T[0]+T[3],y[2]=T[1]-T[2],w[0]=y[0]+y[1],w[1]=y[3]+y[2],w[2]=y[3]-y[2],w[3]=y[0]-y[1],n[0+M]=w[0]+_[0],n[8+M]=w[1]+_[1],n[16+M]=w[2]+_[2],n[24+M]=w[3]+_[3],n[32+M]=w[3]-_[3],n[40+M]=w[2]-_[2],n[48+M]=w[1]-_[1],n[56+M]=w[0]-_[0]}function st(n){for(var a=0;a<64;++a){var u=n[0][a],f=n[1][a],v=n[2][a];n[0][a]=u+1.5747*v,n[1][a]=u-.1873*f-.4682*v,n[2][a]=u+1.8556*f}}function ot(n,a,u){for(var f=0;f<64;++f)a[u+f]=an.toHalfFloat(Ze(n[f]))}function Ze(n){return n<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(r,Math.abs(n)-1)}function K(n){return new DataView(n.array.buffer,n.offset.value,n.size)}function Ke(n){var a=n.viewer.buffer.slice(n.offset.value,n.offset.value+n.size),u=new Uint8Array(Ie(a)),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Ce(n){var a=n.array.slice(n.offset.value,n.offset.value+n.size),u=rn(a),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function je(n){for(var a=n.viewer,u={value:n.offset.value},f=new Uint16Array(n.width*n.scanlineBlockSize*(n.channels*n.type)),v=new Uint8Array(8192),h=0,g=new Array(n.channels),p=0;p<n.channels;p++)g[p]={},g[p].start=h,g[p].end=g[p].start,g[p].nx=n.width,g[p].ny=n.lines,g[p].size=n.type,h+=g[p].nx*g[p].ny*g[p].size;var T=De(a,u),_=De(a,u);if(_>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(T<=_)for(var p=0;p<_-T+1;p++)v[p+T]=te(a,u);var y=new Uint16Array(65536),w=i(v,y),V=ue(a,u);Be(n.array,a,u,V,f,h);for(var p=0;p<n.channels;++p)for(var A=g[p],M=0;M<g[p].size;++M)Ae(f,A.start+M,A.nx,A.size,A.ny,A.nx*A.size,w);ze(y,f,h);for(var D=0,N=new Uint8Array(f.buffer.byteLength),H=0;H<n.lines;H++)for(var Q=0;Q<n.channels;Q++){var A=g[Q],W=A.nx*A.size,oe=new Uint8Array(f.buffer,A.end*2,W*2);N.set(oe,D),D+=W*2,A.end+=W}return new DataView(N.buffer)}function Xe(n){var a=n.array.slice(n.offset.value,n.offset.value+n.size),u=rn(a);const f=n.lines*n.channels*n.width,v=n.type==1?new Uint16Array(f):new Uint32Array(f);let h=0,g=0;const p=new Array(4);for(let T=0;T<n.lines;T++)for(let _=0;_<n.channels;_++){let y=0;switch(n.type){case 1:p[0]=h,p[1]=p[0]+n.width,h=p[1]+n.width;for(let w=0;w<n.width;++w){const V=u[p[0]++]<<8|u[p[1]++];y+=V,v[g]=y,g++}break;case 2:p[0]=h,p[1]=p[0]+n.width,p[2]=p[1]+n.width,h=p[2]+n.width;for(let w=0;w<n.width;++w){const V=u[p[0]++]<<24|u[p[1]++]<<16|u[p[2]++]<<8;y+=V,v[g]=y,g++}break}}return new DataView(v.buffer)}function Ye(n){var a=n.viewer,u={value:n.offset.value},f=new Uint8Array(n.width*n.lines*(n.channels*n.type*2)),v={version:X(a,u),unknownUncompressedSize:X(a,u),unknownCompressedSize:X(a,u),acCompressedSize:X(a,u),dcCompressedSize:X(a,u),rleCompressedSize:X(a,u),rleUncompressedSize:X(a,u),rleRawSize:X(a,u),totalAcUncompressedCount:X(a,u),totalDcUncompressedCount:X(a,u),acCompression:X(a,u)};if(v.version<2)throw"EXRLoader.parse: "+gt.compression+" version "+v.version+" is unsupported";for(var h=new Array,g=De(a,u)-2;g>0;){var p=Ne(a.buffer,u),T=te(a,u),_=T>>2&3,y=(T>>4)-1,w=new Int8Array([y])[0],V=te(a,u);h.push({name:p,index:w,type:V,compression:_}),g-=p.length+3}for(var A=gt.channels,M=new Array(n.channels),D=0;D<n.channels;++D){var N=M[D]={},H=A[D];N.name=H.name,N.compression=0,N.decoded=!1,N.type=H.pixelType,N.pLinear=H.pLinear,N.width=n.width,N.height=n.lines}for(var Q={idx:new Array(3)},W=0;W<n.channels;++W)for(var N=M[W],D=0;D<h.length;++D){var oe=h[D];N.name==oe.name&&(N.compression=oe.compression,oe.index>=0&&(Q.idx[oe.index]=W),N.offset=W)}if(v.acCompressedSize>0)switch(v.acCompression){case 0:var le=new Uint16Array(v.totalAcUncompressedCount);Be(n.array,a,u,v.acCompressedSize,le,v.totalAcUncompressedCount);break;case 1:var G=n.array.slice(u.value,u.value+v.totalAcUncompressedCount),Oe=rn(G),le=new Uint16Array(Oe.buffer);u.value+=v.totalAcUncompressedCount;break}if(v.dcCompressedSize>0){var ae={array:n.array,offset:u,size:v.dcCompressedSize},Le=new Uint16Array(Ce(ae).buffer);u.value+=v.dcCompressedSize}if(v.rleRawSize>0){var G=n.array.slice(u.value,u.value+v.rleCompressedSize),Oe=rn(G),_t=Ie(Oe.buffer);u.value+=v.rleCompressedSize}for(var Se=0,$=new Array(M.length),D=0;D<$.length;++D)$[D]=new Array;for(var ne=0;ne<n.lines;++ne)for(var j=0;j<M.length;++j)$[j].push(Se),Se+=M[j].width*n.type*2;at(Q,$,M,le,Le,f);for(var D=0;D<M.length;++D){var N=M[D];if(!N.decoded)switch(N.compression){case 2:for(var z=0,we=0,ne=0;ne<n.lines;++ne){for(var qe=$[D][z],ge=0;ge<N.width;++ge){for(var ke=0;ke<2*N.type;++ke)f[qe++]=_t[we+ke*N.width*N.height];we++}z++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(f.buffer)}function Ne(n,a){for(var u=new Uint8Array(n),f=0;u[a.value+f]!=0;)f+=1;var v=new TextDecoder().decode(u.slice(a.value,a.value+f));return a.value=a.value+f+1,v}function pt(n,a,u){var f=new TextDecoder().decode(new Uint8Array(n).slice(a.value,a.value+u));return a.value=a.value+u,f}function ct(n,a){var u=Me(n,a),f=ue(n,a);return[u,f]}function C(n,a){var u=ue(n,a),f=ue(n,a);return[u,f]}function Me(n,a){var u=n.getInt32(a.value,!0);return a.value=a.value+4,u}function ue(n,a){var u=n.getUint32(a.value,!0);return a.value=a.value+4,u}function ie(n,a){var u=n[a.value];return a.value=a.value+1,u}function te(n,a){var u=n.getUint8(a.value);return a.value=a.value+1,u}const X=function(n,a){let u;return"getBigInt64"in DataView.prototype?u=Number(n.getBigInt64(a.value,!0)):u=n.getUint32(a.value+4,!0)+Number(n.getUint32(a.value,!0)<<32),a.value+=8,u};function k(n,a){var u=n.getFloat32(a.value,!0);return a.value+=4,u}function Ue(n,a){return an.toHalfFloat(k(n,a))}function E(n){var a=(n&31744)>>10,u=n&1023;return(n>>15?-1:1)*(a?a===31?u?NaN:1/0:Math.pow(2,a-15)*(1+u/1024):6103515625e-14*(u/1024))}function De(n,a){var u=n.getUint16(a.value,!0);return a.value+=2,u}function Xt(n,a){return E(De(n,a))}function At(n,a,u,f){for(var v=u.value,h=[];u.value<v+f-1;){var g=Ne(a,u),p=Me(n,u),T=te(n,u);u.value+=3;var _=Me(n,u),y=Me(n,u);h.push({name:g,pixelType:p,pLinear:T,xSampling:_,ySampling:y})}return u.value+=1,h}function Mn(n,a){var u=k(n,a),f=k(n,a),v=k(n,a),h=k(n,a),g=k(n,a),p=k(n,a),T=k(n,a),_=k(n,a);return{redX:u,redY:f,greenX:v,greenY:h,blueX:g,blueY:p,whiteX:T,whiteY:_}}function bn(n,a){var u=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],f=te(n,a);return u[f]}function In(n,a){var u=ue(n,a),f=ue(n,a),v=ue(n,a),h=ue(n,a);return{xMin:u,yMin:f,xMax:v,yMax:h}}function Un(n,a){var u=["INCREASING_Y"],f=te(n,a);return u[f]}function Dn(n,a){var u=k(n,a),f=k(n,a);return[u,f]}function On(n,a){var u=k(n,a),f=k(n,a),v=k(n,a);return[u,f,v]}function Nn(n,a,u,f,v){if(f==="string"||f==="stringvector"||f==="iccProfile")return pt(a,u,v);if(f==="chlist")return At(n,a,u,v);if(f==="chromaticities")return Mn(n,u);if(f==="compression")return bn(n,u);if(f==="box2i")return In(n,u);if(f==="lineOrder")return Un(n,u);if(f==="float")return k(n,u);if(f==="v2f")return Dn(n,u);if(f==="v3f")return On(n,u);if(f==="int")return Me(n,u);if(f==="rational")return ct(n,u);if(f==="timecode")return C(n,u);if(f==="preview")return u.value+=v,"skipped";u.value+=v}function Pn(n,a,u){const f={};if(n.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";f.version=n.getUint8(4);const v=n.getUint8(5);f.spec={singleTile:!!(v&2),longName:!!(v&4),deepFormat:!!(v&8),multiPart:!!(v&16)},u.value=8;for(var h=!0;h;){var g=Ne(a,u);if(g==0)h=!1;else{var p=Ne(a,u),T=ue(n,u),_=Nn(n,a,u,p,T);_===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${p}'.`):f[g]=_}}if((v&-5)!=0)throw console.error("EXRHeader:",f),"THREE.EXRLoader: provided file is currently unsupported.";return f}function Ln(n,a,u,f,v){const h={size:0,viewer:a,array:u,offset:f,width:n.dataWindow.xMax-n.dataWindow.xMin+1,height:n.dataWindow.yMax-n.dataWindow.yMin+1,channels:n.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:n.channels[0].pixelType,uncompress:null,getter:null,format:null,[Er?"colorSpace":"encoding"]:null};switch(n.compression){case"NO_COMPRESSION":h.lines=1,h.uncompress=K;break;case"RLE_COMPRESSION":h.lines=1,h.uncompress=Ke;break;case"ZIPS_COMPRESSION":h.lines=1,h.uncompress=Ce;break;case"ZIP_COMPRESSION":h.lines=16,h.uncompress=Ce;break;case"PIZ_COMPRESSION":h.lines=32,h.uncompress=je;break;case"PXR24_COMPRESSION":h.lines=16,h.uncompress=Xe;break;case"DWAA_COMPRESSION":h.lines=32,h.uncompress=Ye;break;case"DWAB_COMPRESSION":h.lines=256,h.uncompress=Ye;break;default:throw"EXRLoader.parse: "+n.compression+" is unsupported"}if(h.scanlineBlockSize=h.lines,h.type==1)switch(v){case Mt:h.getter=Xt,h.inputSize=2;break;case et:h.getter=De,h.inputSize=2;break}else if(h.type==2)switch(v){case Mt:h.getter=k,h.inputSize=4;break;case et:h.getter=Ue,h.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+h.type+" for "+n.compression+".";h.blockCount=(n.dataWindow.yMax+1)/h.scanlineBlockSize;for(var g=0;g<h.blockCount;g++)X(a,f);h.outputChannels=h.channels==3?4:h.channels;const p=h.width*h.height*h.outputChannels;switch(v){case Mt:h.byteArray=new Float32Array(p),h.channels<h.outputChannels&&h.byteArray.fill(1,0,p);break;case et:h.byteArray=new Uint16Array(p),h.channels<h.outputChannels&&h.byteArray.fill(15360,0,p);break;default:console.error("THREE.EXRLoader: unsupported type: ",v);break}return h.bytesPerLine=h.width*h.inputSize*h.channels,h.outputChannels==4?h.format=Ui:h.format=Di,Er?h.colorSpace="srgb-linear":h.encoding=3e3,h}const Dt=new DataView(t),Bn=new Uint8Array(t),mt={value:0},gt=Pn(Dt,t,mt),P=Ln(gt,Dt,Bn,mt,this.type),_r={value:0},zn={R:0,G:1,B:2,A:3,Y:0};for(let n=0;n<P.height/P.scanlineBlockSize;n++){const a=ue(Dt,mt);P.size=ue(Dt,mt),P.lines=a+P.scanlineBlockSize>P.height?P.height-a:P.scanlineBlockSize;const u=P.size<P.lines*P.bytesPerLine?P.uncompress(P):K(P);mt.value+=P.size;for(let f=0;f<P.scanlineBlockSize;f++){const v=f+n*P.scanlineBlockSize;if(v>=P.height)break;for(let h=0;h<P.channels;h++){const g=zn[gt.channels[h].name];for(let p=0;p<P.width;p++){_r.value=(f*(P.channels*P.width)+h*P.width+p)*P.inputSize;const T=(P.height-1-v)*(P.width*P.outputChannels)+p*P.outputChannels+g;P.byteArray[T]=P.getter(u,_r)}}}}return{header:gt,width:P.width,height:P.height,data:P.byteArray,format:P.format,[Er?"colorSpace":"encoding"]:P[Er?"colorSpace":"encoding"],type:this.type}}setDataType(t){return this.type=t,this}load(t,r,i,s){function o(c,d){Er?c.colorSpace=d.colorSpace:c.encoding=d.encoding,c.minFilter=ft,c.magFilter=ft,c.generateMipmaps=!1,c.flipY=!1,r&&r(c,d)}return super.load(t,o,i,s)}}function l1(e){var t=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<e.length;i++){var s=e[i];if(typeof s!="string")throw new TypeError("Url must be a string. Received "+s);s!==""&&(i>0&&(s=s.replace(/^[\/]+/,"")),i<e.length-1?s=s.replace(/[\/]+$/,""):s=s.replace(/[\/]+$/,"/"),t.push(s))}var o=t.join("/");o=o.replace(/\/(\?|&|#[^!])/g,"$1");var c=o.split("?");return o=c.shift()+(c.length>0?"?":"")+c.join("&"),o}function d1(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),l1(e)}class vd extends Nr{constructor(){super(...arguments),this.format="exr",this.type=et}setTypeFromRenderer(t){return this.type=t.getContext().getExtension("OES_texture_float_linear")==null?et:Mt,this}load(t,r,i,s){const o={},c=(d,{loader:l,extension:m})=>{l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(d1(t,`${d}${m}`),S=>{S.minFilter=ft,S.magFilter=ft,S.type=this.type,this.type===Mt&&(S.image.data=new Float32Array(new ve(S.image.data.buffer))),o[`${d}Texture`]=S,o.irradianceTexture!=null&&o.scatteringTexture!=null&&o.transmittanceTexture!=null&&r(o)},i,s)};this.format==="exr"?(c("irradiance",{loader:new La(this.manager),extension:".exr"}),c("scattering",{loader:new cl(this.manager).setDepth(Ca),extension:".exr"}),c("transmittance",{loader:new La(this.manager),extension:".exr"})):(c("irradiance",{loader:Aa(Zn,{width:En,height:Tn}),extension:".bin"}),c("scattering",{loader:ku(Zn,{width:Bl,height:zl,depth:Ca}),extension:".bin"}),c("transmittance",{loader:Aa(Zn,{width:Rn,height:An}),extension:".bin"}))}}function f1({topRadius:e,bottomRadius:t},r,i,s){const o=(r-t)/(e-t),c=i*.5+.5;return s.set(pn(c,En),pn(o,Tn))}const h1=1/Math.sqrt(Math.PI),ri=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),v1=new B,ni=new B,p1=new Pe,m1=new Re,g1={ellipsoid:zt.WGS84,correctAltitude:!0,photometric:!0};class pd extends So{constructor(t,r=zr.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new B,this.ellipsoidMatrix=new Re;const{irradianceTexture:i=null,ellipsoid:s,correctAltitude:o,photometric:c,sunDirection:d}={...g1,...t};this.irradianceTexture=i,this.ellipsoid=s,this.correctAltitude=o,this.photometric=c,this.sunDirection=(d==null?void 0:d.clone())??new B}update(){if(this.irradianceTexture==null)return;const t=m1.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(v1).applyMatrix4(t).sub(this.ellipsoidCenter);if(this.correctAltitude){const m=this.ellipsoid.projectOnSurface(r,ni);m!=null&&r.sub(qi(m,this.atmosphere.bottomRadius,this.ellipsoid,ni))}const i=r.length(),s=r.dot(this.sunDirection)/i,o=f1(this.atmosphere,i,s,p1),c=ks(this.irradianceTexture,o,ni);this.photometric&&c.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const d=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),l=this.sh.coefficients;l[0].copy(c).multiplyScalar(h1),l[1].copy(c).multiplyScalar(ri*d.y),l[2].copy(c).multiplyScalar(ri*d.z),l[3].copy(c).multiplyScalar(ri*d.x)}}const _1=`precision highp float;
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
`,S1=`precision highp float;
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
`;var w1=Object.defineProperty,Zs=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&w1(t,r,s),s};const y1={...Zi,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ks extends Ki{constructor(t){const{sun:r,moon:i,moonDirection:s,moonAngularRadius:o,lunarRadianceScale:c,groundAlbedo:d,...l}={...y1,...t};super({name:"SkyMaterial",glslVersion:Wa,vertexShader:Ft(S1,{parameters:dr}),fragmentShader:Ft(_1,{core:{raySphereIntersection:bs},parameters:dr,functions:Wi,sky:Us}),...l,uniforms:{inverseProjectionMatrix:new R(new Re),inverseViewMatrix:new R(new Re),moonDirection:new R((s==null?void 0:s.clone())??new B),moonAngularRadius:new R(o),lunarRadianceScale:new R(c),groundAlbedo:new R((d==null?void 0:d.clone())??new gn(0)),shadowLengthBuffer:new R(null),...l.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(t,r,i,s,o,c){super.onBeforeRender(t,r,i,s,o,c);const{uniforms:d,defines:l}=this;d.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),d.inverseViewMatrix.value.copy(i.matrixWorld);const m=l.PERSPECTIVE_CAMERA!=null,S=i.isPerspectiveCamera===!0;S!==m&&(S?l.PERSPECTIVE_CAMERA="1":delete l.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const x=this.groundAlbedo,b=l.GROUND_ALBEDO!=null,U=x.r!==0||x.g!==0||x.b!==0;U!==b&&(U?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const L=this.shadowLength,O=l.HAS_SHADOW_LENGTH!=null,Y=L!=null;Y!==O&&(Y?l.HAS_SHADOW_LENGTH="1":(delete l.HAS_SHADOW_LENGTH,d.shadowLengthBuffer.value=null),this.needsUpdate=!0),Y&&(d.shadowLengthBuffer.value=L.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(t){this.uniforms.moonAngularRadius.value=t}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(t){this.uniforms.lunarRadianceScale.value=t}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Zs([Ge("SUN")],Ks.prototype,"sun");Zs([Ge("MOON")],Ks.prototype,"moon");const x1=`precision highp float;
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
`,E1=`precision highp float;
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
`;var T1=Object.defineProperty,R1=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&T1(t,r,s),s};const A1={...Zi,pointSize:1,radianceScale:1,background:!0};class C1 extends Ki{constructor(t){const{pointSize:r,radianceScale:i,background:s,...o}={...A1,...t};super({name:"StarsMaterial",glslVersion:Wa,vertexShader:Ft(E1,{parameters:dr}),fragmentShader:Ft(x1,{parameters:dr,functions:Wi}),...o,uniforms:{projectionMatrix:new R(new Re),modelViewMatrix:new R(new Re),viewMatrix:new R(new Re),matrixWorld:new R(new Re),cameraFar:new R(0),pointSize:new R(0),magnitudeRange:new R(new Pe(-2,8)),radianceScale:new R(i),...o.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=s}onBeforeRender(t,r,i,s,o,c){super.onBeforeRender(t,r,i,s,o,c);const d=this.uniforms;d.projectionMatrix.value.copy(i.projectionMatrix),d.modelViewMatrix.value.copy(i.modelViewMatrix),d.viewMatrix.value.copy(i.matrixWorldInverse),d.matrixWorld.value.copy(o.matrixWorld),d.cameraFar.value=i.far,d.pointSize.value=this.pointSize*t.getPixelRatio();const l=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==l&&(l?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(t){this.uniforms.radianceScale.value=t}}R1([Ge("BACKGROUND")],C1.prototype,"background");const M1=new B,b1=new Re,I1={ellipsoid:zt.WGS84,correctAltitude:!0,photometric:!0,distance:1};class md extends wo{constructor(t,r=zr.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new B,this.ellipsoidMatrix=new Re;const{irradianceTexture:i=null,ellipsoid:s,correctAltitude:o,photometric:c,sunDirection:d,distance:l}={...I1,...t};this.transmittanceTexture=i,this.ellipsoid=s,this.correctAltitude=o,this.photometric=c,this.sunDirection=(d==null?void 0:d.clone())??new B,this.distance=l}update(){if(this.position.copy(this.sunDirection).applyMatrix4(this.ellipsoidMatrix).normalize().multiplyScalar(this.distance).add(this.target.position),this.transmittanceTexture==null)return;const t=b1.copy(this.ellipsoidMatrix).invert(),r=this.target.getWorldPosition(M1).applyMatrix4(t).sub(this.ellipsoidCenter);q0(this.transmittanceTexture,r,this.sunDirection,this.color,{ellipsoid:this.ellipsoid,correctAltitude:this.correctAltitude,photometric:this.photometric},this.atmosphere)}}const U1=`#include "core/depth"
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
`;var D1=Object.defineProperty,O1=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&D1(t,r,s),s};const N1={blendFunction:J.SRC,useTurbo:!1,near:1,far:1e3};class P1 extends pr{constructor(t){const{blendFunction:r,useTurbo:i,near:s,far:o}={...N1,...t};super("DepthEffect",Ft(U1,{core:{depth:Vi,turbo:Ol}}),{blendFunction:r,attributes:Tt.DEPTH,uniforms:new Map(Object.entries({near:new R(s),far:new R(o)}))}),this.useTurbo=i}get near(){return this.uniforms.get("near").value}set near(t){this.uniforms.get("near").value=t}get far(){return this.uniforms.get("far").value}set far(t){this.uniforms.get("far").value=t}}O1([Ge("USE_TURBO")],P1.prototype,"useTurbo");const L1=`#define DITHERING

#include <dithering_pars_fragment>

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  outputColor = vec4(saturate(dithering(inputColor.rgb)), inputColor.a);
}
`,B1={blendFunction:J.NORMAL};class gd extends pr{constructor(t){const{blendFunction:r}={...B1,...t};super("DitheringEffect",L1,{blendFunction:r})}}const z1=`#include <common>

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
`,F1=`uniform vec2 texelSize;

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
`,H1={thresholdLevel:10,thresholdRange:1};class G1 extends Ut{constructor(t){const{inputBuffer:r=null,thresholdLevel:i,thresholdRange:s,...o}={...H1,...t};super({name:"DownsampleThresholdMaterial",fragmentShader:z1,vertexShader:F1,blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,...o,uniforms:{inputBuffer:new R(r),texelSize:new R(new Pe),thresholdLevel:new R(i),thresholdRange:new R(s),...o.uniforms}})}setSize(t,r){this.uniforms.texelSize.value.set(1/t,1/r)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){this.uniforms.inputBuffer.value=t}get thresholdLevel(){return this.uniforms.thresholdLevel.value}set thresholdLevel(t){this.uniforms.thresholdLevel.value=t}get thresholdRange(){return this.uniforms.thresholdRange.value}set thresholdRange(t){this.uniforms.thresholdRange.value=t}}const k1=`#include <common>

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

`,V1=`uniform vec2 texelSize;

out vec2 vUv;
out vec2 vAspectRatio;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vAspectRatio = vec2(texelSize.x / texelSize.y, 1.0);
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,W1={ghostAmount:.001,haloAmount:.001,chromaticAberration:10};class $1 extends Ut{constructor(t){const{inputBuffer:r=null,ghostAmount:i,haloAmount:s,chromaticAberration:o,...c}={...W1,...t};super({name:"LensFlareFeaturesMaterial",fragmentShader:k1,vertexShader:V1,blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,uniforms:{inputBuffer:new R(r),texelSize:new R(new Pe),ghostAmount:new R(i),haloAmount:new R(s),chromaticAberration:new R(o),...c.uniforms}})}setSize(t,r){this.uniforms.texelSize.value.set(1/t,1/r)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){this.uniforms.inputBuffer.value=t}get ghostAmount(){return this.uniforms.ghostAmount.value}set ghostAmount(t){this.uniforms.ghostAmount.value=t}get haloAmount(){return this.uniforms.haloAmount.value}set haloAmount(t){this.uniforms.haloAmount.value=t}get chromaticAberration(){return this.uniforms.chromaticAberration.value}set chromaticAberration(t){this.uniforms.chromaticAberration.value=t}}const j1=`uniform sampler2D bloomBuffer;
uniform sampler2D featuresBuffer;
uniform float intensity;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  vec3 bloom = texture(bloomBuffer, uv).rgb;
  vec3 features = texture(featuresBuffer, uv).rgb;
  outputColor = vec4(inputColor.rgb + (bloom + features) * intensity, inputColor.a);
}
`,X1={blendFunction:J.NORMAL,resolutionScale:.5,width:it.AUTO_SIZE,height:it.AUTO_SIZE,intensity:.005};class _d extends pr{constructor(t){const{blendFunction:r,resolutionScale:i,width:s,height:o,resolutionX:c=s,resolutionY:d=o,intensity:l}={...X1,...t};super("LensFlareEffect",j1,{blendFunction:r,attributes:Tt.CONVOLUTION,uniforms:new Map(Object.entries({bloomBuffer:new R(null),featuresBuffer:new R(null),intensity:new R(1)}))}),this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.renderTarget1=new dt(1,1,{depthBuffer:!1,stencilBuffer:!1,type:et}),this.renderTarget1.texture.name="LensFlare.Target1",this.renderTarget2=new dt(1,1,{depthBuffer:!1,stencilBuffer:!1,type:et}),this.renderTarget2.texture.name="LensFlare.Target2",this.thresholdMaterial=new G1,this.thresholdPass=new sa(this.thresholdMaterial),this.blurPass=new xc,this.blurPass.levels=8,this.preBlurPass=new fc({kernelSize:Ni.SMALL}),this.featuresMaterial=new $1,this.featuresPass=new sa(this.featuresMaterial),this.uniforms.get("bloomBuffer").value=this.blurPass.texture,this.uniforms.get("featuresBuffer").value=this.renderTarget1.texture,this.resolution=new it(this,c,d,i),this.resolution.addEventListener("change",this.onResolutionChange),this.intensity=l}initialize(t,r,i){this.thresholdPass.initialize(t,r,i),this.blurPass.initialize(t,r,i),this.preBlurPass.initialize(t,r,i),this.featuresPass.initialize(t,r,i)}update(t,r,i){this.thresholdPass.render(t,r,this.renderTarget1),this.blurPass.render(t,this.renderTarget1,null),this.preBlurPass.render(t,this.renderTarget1,this.renderTarget2),this.featuresPass.render(t,this.renderTarget2,this.renderTarget1)}setSize(t,r){const i=this.resolution;i.setBaseSize(t,r);const{width:s,height:o}=i;this.renderTarget1.setSize(s,o),this.renderTarget2.setSize(s,o),this.thresholdMaterial.setSize(s,o),this.blurPass.setSize(s,o),this.preBlurPass.setSize(s,o),this.featuresMaterial.setSize(s,o)}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}get thresholdLevel(){return this.thresholdMaterial.thresholdLevel}set thresholdLevel(t){this.thresholdMaterial.thresholdLevel=t}get thresholdRange(){return this.thresholdMaterial.thresholdRange}set thresholdRange(t){this.thresholdMaterial.thresholdRange=t}}const Y1=`#include "core/depth"
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
`;var q1=Object.defineProperty,Qs=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=c(t,r,s)||s);return s&&q1(t,r,s),s};const Z1={blendFunction:J.SRC,octEncoded:!1,reconstructFromDepth:!1};class Js extends pr{constructor(t,r){const{blendFunction:i,normalBuffer:s=null,octEncoded:o,reconstructFromDepth:c}={...Z1,...r};super("NormalEffect",Ft(Y1,{core:{depth:Vi,packing:Ms,transform:Is}}),{blendFunction:i,attributes:Tt.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new R(s),projectionMatrix:new R(new Re),inverseProjectionMatrix:new R(new Re)}))}),this.camera=t,t!=null&&(this.mainCamera=t),this.octEncoded=o,this.reconstructFromDepth=c}get mainCamera(){return this.camera}set mainCamera(t){this.camera=t}update(t,r,i){const s=this.uniforms,o=s.get("projectionMatrix"),c=s.get("inverseProjectionMatrix"),d=this.camera;d!=null&&(o.value.copy(d.projectionMatrix),c.value.copy(d.projectionMatrixInverse))}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(t){this.uniforms.get("normalBuffer").value=t}}Qs([Ge("OCT_ENCODED")],Js.prototype,"octEncoded");Qs([Ge("RECONSTRUCT_FROM_DEPTH")],Js.prototype,"reconstructFromDepth");export{Ol as A,Vi as B,Vu as C,td as D,Q1 as E,md as F,ad as G,ju as H,Ss as I,ud as J,ml as K,pd as L,vt as N,fd as O,vd as P,Oc as R,sa as S,J1 as T,hd as U,sd as W,Cs as X,cd as Y,Ge as Z,Nl as _,Ec as a,ed as b,_d as c,rt as d,Ic as e,zt as f,pr as g,zr as h,Tt as i,od as j,it as k,qi as l,id as m,Wi as n,tt as o,Sl as p,Ft as q,bs as r,Dl as s,dr as t,gd as u,Ki as v,Ul as w,Ks as x,Il as y,ld as z};
