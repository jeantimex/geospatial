import{U as y,V as _,x as je,F as ze,H as $e,D as or,L as Ne,y as bt,f as Ie,z as pt,A as lo,I as fo,J as ho,K as ja,l as ct,X as mr,Y as vo,Z as Ar,_ as po,h as dn,E as Fi,$ as fn,q as Ka,a0 as cr,a1 as Xn,a2 as Za,S as ua,g as Ja,b as go,a3 as Vr,a4 as Xr,a5 as gt,a6 as mo,a7 as It,a8 as wr,a as Ao,a9 as Er,aa as wo,ab as la,i as da,ac as Eo,M as ye,ad as Mt,Q as xo,v as So,ae as Hr,af as qa,m as Hi,ag as hn,ah as Co,ai as To,aj as yo,ak as Do,al as Ro,p as Wn,j as $a,R as Io,am as Mo,an as Bo}from"./three.module-BKe-Rvw6.js";/**
 * postprocessing v6.37.2 build Fri Mar 28 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var jn=1/1e3,Oo=1e3,bo=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<"u"&&document.hidden!==void 0&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return this._delta*jn}get fixedDelta(){return this._fixedDelta*jn}set fixedDelta(e){this._fixedDelta=e*Oo}get elapsed(){return this._elapsed*jn}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e!==void 0?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Po=(()=>{const e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),r=new wo;return r.setAttribute("position",new la(e,3)),r.setAttribute("uv",new la(t,2)),r})(),nt=class fi{static get fullscreenGeometry(){return Po}constructor(t="Pass",r=new ua,i=new Ja){this.name=t,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let r=this.screen;r!==null?r.material=t:(r=new go(fi.fullscreenGeometry,t),r.frustumCulled=!1,this.scene===null&&(this.scene=new ua),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,r=mr){}render(t,r,i,a,o){throw new Error("Render method not implemented!")}setSize(t,r){}initialize(t,r,i){}dispose(){for(const t of Object.keys(this)){const r=this[t];(r instanceof ct||r instanceof Er||r instanceof dn||r instanceof fi)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Uo=class extends nt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,r,i,a){const o=e.state.buffers.stencil;o.setLocked(!1),o.setTest(!1)}},Lo=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Gi="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",es=class extends gt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new y(null),opacity:new y(1)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Lo,vertexShader:Gi})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},ts=class extends nt{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new es,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new ct(1,1,{minFilter:Ne,magFilter:Ne,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,r,i,a){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,r){r!==void 0&&(this.renderTarget.texture.type=r,r!==pt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":e!==null&&e.outputColorSpace===je&&(this.renderTarget.texture.colorSpace=je))}},fa=new Ar,zi=class extends nt{constructor(e=!0,t=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,r){this.color=e,this.depth=t,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,r,i,a){const o=this.overrideClearColor,c=this.overrideClearAlpha,d=e.getClearAlpha(),l=o!==null,p=c>=0;l?(e.getClearColor(fa),e.setClearColor(o,p?c:d)):p&&e.setClearAlpha(c),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),l?e.setClearColor(fa,d):p&&e.setClearAlpha(d)}},No=class extends nt{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new zi(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,r,i,a){const o=e.getContext(),c=e.state.buffers,d=this.scene,l=this.camera,p=this.clearPass,m=this.inverted?0:1,x=1-m;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.stencil.setFunc(o.ALWAYS,m,4294967295),c.stencil.setClear(x),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(e,null):(p.render(e,t),p.render(e,r))),this.renderToScreen?(e.setRenderTarget(null),e.render(d,l)):(e.setRenderTarget(t),e.render(d,l),e.setRenderTarget(r),e.render(d,l)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(o.EQUAL,1,4294967295),c.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.stencil.setLocked(!0)}},Sd=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:a}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,r,a,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ts,this.depthTexture=null,this.passes=[],this.timer=new bo,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const t=this.inputBuffer,r=this.multisampling;r>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):r!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new Ie),r=e.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===pt&&e.outputColorSpace===je&&(this.inputBuffer.texture.colorSpace=je,this.outputBuffer.texture.colorSpace=je,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const a of this.passes)a.initialize(e,r,i)}}replaceRenderer(e,t=!0){const r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(e),t&&i!==null&&(i.removeChild(r.domElement),i.appendChild(e.domElement)),r}createDepthTexture(){const e=this.depthTexture=new lo;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=fo,e.type=ho):e.type=ja,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,t,r,i){const a=this.renderer,o=a===null?new Ie:a.getDrawingBufferSize(new Ie),c={minFilter:Ne,magFilter:Ne,stencilBuffer:t,depthBuffer:e,type:r},d=new ct(o.width,o.height,c);return i>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=i),r===pt&&a!==null&&a.outputColorSpace===je&&(d.texture.colorSpace=je),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const r=this.passes,i=this.renderer,a=i.getDrawingBufferSize(new Ie),o=i.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(e.setRenderer(i),e.setSize(a.width,a.height),e.initialize(i,o,c),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?r.splice(t,0,e):r.push(e),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(e of r)e.setDepthTexture(d)}else e.setDepthTexture(this.depthTexture)}removePass(e){const t=this.passes,r=t.indexOf(e);if(r!==-1&&t.splice(r,1).length>0){if(this.depthTexture!==null){const o=(d,l)=>d||l.needsDepthTexture;t.reduce(o,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&r===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,r=this.copyPass;let i=this.inputBuffer,a=this.outputBuffer,o=!1,c,d,l;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(t,i,a,e,o),p.needsSwap&&(o&&(r.renderToScreen=p.renderToScreen,c=t.getContext(),d=t.state.buffers.stencil,d.setFunc(c.NOTEQUAL,1,4294967295),r.render(t,i,a,e,o),d.setFunc(c.EQUAL,1,4294967295)),l=i,i=a,a=l),p instanceof No?o=!0:p instanceof Uo&&(o=!1))}setSize(e,t,r){const i=this.renderer,a=i.getSize(new Ie);(e===void 0||t===void 0)&&(e=a.width,t=a.height),(a.width!==e||a.height!==t)&&i.setSize(e,t,r);const o=i.getDrawingBufferSize(new Ie);this.inputBuffer.setSize(o.width,o.height),this.outputBuffer.setSize(o.width,o.height);for(const c of this.passes)c.setSize(o.width,o.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),nt.fullscreenGeometry.dispose()}},ot={NONE:0,DEPTH:1,CONVOLUTION:2},ce={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},_o=class{constructor(){this.shaderParts=new Map([[ce.FRAGMENT_HEAD,null],[ce.FRAGMENT_MAIN_UV,null],[ce.FRAGMENT_MAIN_IMAGE,null],[ce.VERTEX_HEAD,null],[ce.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ot.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=fn}},Kn=!1,ha=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let r;if(t.material.flatShading)switch(t.material.side){case Xr:r=this.materialsFlatShadedDoubleSide;break;case Vr:r=this.materialsFlatShadedBackSide;break;default:r=this.materialsFlatShaded;break}else switch(t.material.side){case Xr:r=this.materialsDoubleSide;break;case Vr:r=this.materialsBackSide;break;default:r=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=r[2]:t.isInstancedMesh?t.material=r[1]:t.material=r[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof gt))return e.clone();const t=e.uniforms,r=new Map;for(const a in t){const o=t[a].value;o.isRenderTargetTexture&&(t[a].value=null,r.set(a,o))}const i=e.clone();for(const a of r)t[a[0]].value=a[1],i.uniforms[a[0]].value=a[1];return i}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){const t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(const r of t)r.uniforms=Object.assign({},e.uniforms),r.side=mo;t[2].skinning=!0,this.materialsBackSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.side=Vr,i}),this.materialsDoubleSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.side=Xr,i}),this.materialsFlatShaded=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=Vr,i}),this.materialsFlatShadedDoubleSide=t.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},e.uniforms),i.flatShading=!0,i.side=Xr,i})}}render(e,t,r){const i=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,Kn){const a=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,r);for(const o of a)o[0].material=o[1];this.meshCount!==a.size&&a.clear()}else{const a=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,r),t.overrideMaterial=a}e.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Kn}static set workaroundEnabled(e){Kn=e}},Qt=-1,st=class extends Fi{constructor(e,t=Qt,r=Qt,i=1){super(),this.resizable=e,this.baseSize=new Ie(1,1),this.preferredSize=new Ie(t,r),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ie,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const e=this.baseSize,t=this.preferredSize,r=this.effectiveSize,i=this.scale;t.width!==Qt?r.width=t.width:t.height!==Qt?r.width=Math.round(t.height*(e.width/Math.max(e.height,1))):r.width=Math.round(e.width*i),t.height!==Qt?r.height=t.height:t.width!==Qt?r.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):r.height=Math.round(e.height*i)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(Qt),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Qt}},q={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Fo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",Ho="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Go="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",zo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",ko="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",Qo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",Yo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Vo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Xo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Wo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",jo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",Ko="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Zo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Jo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",qo="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",$o="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",ec="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",tc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",rc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",nc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",ic="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",ac="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",sc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",oc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",cc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",uc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",lc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",dc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",fc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",hc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",vc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",pc="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",gc=new Map([[q.ADD,Fo],[q.ALPHA,Ho],[q.AVERAGE,Go],[q.COLOR,zo],[q.COLOR_BURN,ko],[q.COLOR_DODGE,Qo],[q.DARKEN,Yo],[q.DIFFERENCE,Vo],[q.DIVIDE,Xo],[q.DST,null],[q.EXCLUSION,Wo],[q.HARD_LIGHT,jo],[q.HARD_MIX,Ko],[q.HUE,Zo],[q.INVERT,Jo],[q.INVERT_RGB,qo],[q.LIGHTEN,$o],[q.LINEAR_BURN,ec],[q.LINEAR_DODGE,tc],[q.LINEAR_LIGHT,rc],[q.LUMINOSITY,nc],[q.MULTIPLY,ic],[q.NEGATION,ac],[q.NORMAL,sc],[q.OVERLAY,oc],[q.PIN_LIGHT,cc],[q.REFLECT,uc],[q.SATURATION,lc],[q.SCREEN,dc],[q.SOFT_LIGHT,fc],[q.SRC,hc],[q.SUBTRACT,vc],[q.VIVID_LIGHT,pc]]),mc=class extends Fi{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new y(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return gc.get(this.blendFunction)}},jt=class extends Fi{constructor(e,t,{attributes:r=ot.NONE,blendFunction:i=q.NORMAL,defines:a=new Map,uniforms:o=new Map,extensions:c=null,vertexShader:d=null}={}){super(),this.name=e,this.renderer=null,this.attributes=r,this.fragmentShader=t,this.vertexShader=d,this.defines=a,this.uniforms=o,this.extensions=c,this.blendMode=new mc(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=fn,this._outputColorSpace=Ka}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=mr){}update(e,t,r){}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof ct||t instanceof Er||t instanceof dn||t instanceof nt)&&this[e].dispose()}}},ki={SMALL:1,MEDIUM:2},Ac=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,wc="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Ec=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],xc=class extends gt{constructor(e=new da){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new y(null),texelSize:new y(new da),scale:new y(1),kernel:new y(0)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ac,vertexShader:wc}),this.setTexelSize(e.x,e.y),this.kernelSize=ki.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return Ec[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){const r=1/e,i=1/t;this.uniforms.texelSize.value.set(r,i,r*.5,i*.5)}},Sc=class extends nt{constructor({kernelSize:e=ki.MEDIUM,resolutionScale:t=.5,width:r=st.AUTO_SIZE,height:i=st.AUTO_SIZE,resolutionX:a=r,resolutionY:o=i}={}){super("KawaseBlurPass"),this.renderTargetA=new ct(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const c=this.resolution=new st(this,a,o,t);c.addEventListener("change",d=>this.setSize(c.baseWidth,c.baseHeight)),this._blurMaterial=new xc,this._blurMaterial.kernelSize=e,this.copyMaterial=new es}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,a){const o=this.scene,c=this.camera,d=this.renderTargetA,l=this.renderTargetB,p=this.blurMaterial,m=p.kernelSequence;let x=t;this.fullscreenMaterial=p;for(let I=0,O=m.length;I<O;++I){const L=(I&1)===0?d:l;p.kernel=m[I],p.inputBuffer=x.texture,e.setRenderTarget(L),e.render(o,c),x=L}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=x.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,c)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t);const i=r.width,a=r.height;this.renderTargetA.setSize(i,a),this.renderTargetB.setSize(i,a),this.blurMaterial.setSize(e,t)}initialize(e,t,r){r!==void 0&&(this.renderTargetA.texture.type=r,this.renderTargetB.texture.type=r,r!==pt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):e!==null&&e.outputColorSpace===je&&(this.renderTargetA.texture.colorSpace=je,this.renderTargetB.texture.colorSpace=je))}static get AUTO_SIZE(){return st.AUTO_SIZE}},Cc=`#include <common>
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
}`,Tc=class extends gt{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:wr.replace(/\D+/g,"")},uniforms:{inputBuffer:new y(null),threshold:new y(0),smoothing:new y(1),range:new y(null)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Cc,vertexShader:Gi}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},yc=class extends nt{constructor({renderTarget:e,luminanceRange:t,colorOutput:r,resolutionScale:i=1,width:a=st.AUTO_SIZE,height:o=st.AUTO_SIZE,resolutionX:c=a,resolutionY:d=o}={}){super("LuminancePass"),this.fullscreenMaterial=new Tc(r,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new st(this,c,d,i);l.addEventListener("change",p=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,r,i,a){const o=this.fullscreenMaterial;o.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}initialize(e,t,r){r!==void 0&&r!==pt&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Dc=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Rc="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ic=class extends gt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new y(null),texelSize:new y(new Ie)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Dc,vertexShader:Rc})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Mc=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Bc="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Oc=class extends gt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new y(null),supportBuffer:new y(null),texelSize:new y(new Ie),radius:new y(.85)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Mc,vertexShader:Bc})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},bc=class extends nt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new ct(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Ic,this.upsamplingMaterial=new Oc,this.resolution=new Ie}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let r=0;r<e;++r){const i=t.clone();i.texture.name="Downsampling.Mipmap"+r,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(t);for(let r=1,i=e-1;r<i;++r){const a=t.clone();a.texture.name="Upsampling.Mipmap"+r,this.upsamplingMipmaps.push(a)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,r,i,a){const{scene:o,camera:c}=this,{downsamplingMaterial:d,upsamplingMaterial:l}=this,{downsamplingMipmaps:p,upsamplingMipmaps:m}=this;let x=t;this.fullscreenMaterial=d;for(let I=0,O=p.length;I<O;++I){const L=p[I];d.setSize(x.width,x.height),d.inputBuffer=x.texture,e.setRenderTarget(L),e.render(o,c),x=L}this.fullscreenMaterial=l;for(let I=m.length-1;I>=0;--I){const O=m[I];l.setSize(x.width,x.height),l.inputBuffer=x.texture,l.supportBuffer=p[I].texture,e.setRenderTarget(O),e.render(o,c),x=O}}setSize(e,t){const r=this.resolution;r.set(e,t);let i=r.width,a=r.height;for(let o=0,c=this.downsamplingMipmaps.length;o<c;++o)i=Math.round(i*.5),a=Math.round(a*.5),this.downsamplingMipmaps[o].setSize(i,a),o<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[o].setSize(i,a)}initialize(e,t,r){if(r!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const a of i)a.texture.type=r;if(r!==pt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(e!==null&&e.outputColorSpace===je)for(const a of i)a.texture.colorSpace=je}}dispose(){super.dispose();for(const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},vn=class extends nt{constructor(e,t="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=e,this.input=t}setInput(e){this.input=e}render(e,t,r,i,a){const o=this.fullscreenMaterial.uniforms;t!==null&&o!==void 0&&o[this.input]!==void 0&&(o[this.input].value=t.texture),e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}initialize(e,t,r){r!==void 0&&r!==pt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Pc=class extends nt{constructor(e,t,r=null){super("RenderPass",e,t),this.needsSwap=!1,this.clearPass=new zi,this.overrideMaterialManager=r===null?null:new ha(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){const e=this.overrideMaterialManager;return e!==null?e.material:null}set overrideMaterial(e){const t=this.overrideMaterialManager;e!==null?t!==null?t.setMaterial(e):this.overrideMaterialManager=new ha(e):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,r,i,a){const o=this.scene,c=this.camera,d=this.selection,l=c.layers.mask,p=o.background,m=e.shadowMap.autoUpdate,x=this.renderToScreen?null:t;d!==null&&c.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(o.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(x),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(e,o,c):e.render(o,c),c.layers.mask=l,o.background=p,e.shadowMap.autoUpdate=m}},Uc={SCALE_UP:"lut.scaleup"};function va(e,t,r){const i=document.createElement("canvas"),a=i.getContext("2d");if(i.width=e,i.height=t,r instanceof Image)a.drawImage(r,0,0);else{const o=a.createImageData(e,t);o.data.set(r),a.putImageData(o,0,0)}return i}var Lc=class rs{constructor(t=0,r=0,i=null){this.width=t,this.height=r,this.data=i}toCanvas(){return typeof document>"u"?null:va(this.width,this.height,this.data)}static from(t){const{width:r,height:i}=t;let a;if(t instanceof Image){const o=va(r,i,t);o!==null&&(a=o.getContext("2d").getImageData(0,0,r,i).data)}else a=t.data;return new rs(r,i,a)}},Nc=`"use strict";(()=>{var O={SCALE_UP:"lut.scaleup"};var _=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function d(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function V(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function k(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)V(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=_[0];P[0]=s,P[1]=F,P[2]=f;let o=_[1],L=x-w,S=u-c,U=b-l;o[0]=L*M[0]+w,o[1]=S*M[1]+c,o[2]=U*M[2]+l,V(a,t,o[0],o[1],o[2],n[0]),o[0]=L*g[0]+w,o[1]=S*g[1]+c,o[2]=U*g[2]+l,V(a,t,o[0],o[1],o[2],n[1]),o[0]=L*X[0]+w,o[1]=S*X[1]+c,o[2]=U*X[2]+l,V(a,t,o[0],o[1],o[2],n[2]),o[0]=L*Y[0]+w,o[1]=S*Y[1]+c,o[2]=U*Y[2]+l,V(a,t,o[0],o[1],o[2],n[3]);let T=d(g,X,Y,P)*6,q=d(M,X,Y,P)*6,C=d(M,g,Y,P)*6,E=d(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=q,n[1][1]*=q,n[1][2]*=q,n[2][0]*=C,n[2][1]*=C,n[2][2]*=C,n[3][0]*=E,n[3][1]*=E,n[3][2]*=E,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var v=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(r**3*4),y=t instanceof Uint8Array?255:1,h=r**2,A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;k(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case O.SCALE_UP:r=v.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();
`,pa=new Ar,_c=class un extends or{constructor(t,r){super(t,r,r,r),this.type=ze,this.format=cr,this.minFilter=Ne,this.magFilter=Ne,this.wrapS=Xn,this.wrapT=Xn,this.wrapR=Xn,this.unpackAlignment=1,this.needsUpdate=!0,this.colorSpace=fn,this.domainMin=new _(0,0,0),this.domainMax=new _(1,1,1)}get isLookupTexture3D(){return!0}scaleUp(t,r=!0){const i=this.image;let a;return t<=i.width?a=Promise.reject(new Error("The target size must be greater than the current size")):a=new Promise((o,c)=>{const d=URL.createObjectURL(new Blob([Nc],{type:"text/javascript"})),l=new Worker(d);l.addEventListener("error",m=>c(m.error)),l.addEventListener("message",m=>{const x=new un(m.data,t);this.colorSpace=x.colorSpace,x.type=this.type,x.name=this.name,URL.revokeObjectURL(d),o(x)});const p=r?[i.data.buffer]:[];l.postMessage({operation:Uc.SCALE_UP,data:i.data,size:t},p)}),a}applyLUT(t){const r=this.image,i=t.image,a=Math.min(r.width,r.height,r.depth),o=Math.min(i.width,i.height,i.depth);if(a!==o)console.error("Size mismatch");else if(t.type!==ze||this.type!==ze)console.error("Both LUTs must be FloatType textures");else if(t.format!==cr||this.format!==cr)console.error("Both LUTs must be RGBA textures");else{const c=r.data,d=i.data,l=a,p=l**2,m=l-1;for(let x=0,I=l**3;x<I;++x){const O=x*4,L=c[O+0]*m,P=c[O+1]*m,W=c[O+2]*m,Z=Math.round(L+P*l+W*p)*4;c[O+0]=d[Z+0],c[O+1]=d[Z+1],c[O+2]=d[Z+2]}this.needsUpdate=!0}return this}convertToUint8(){if(this.type===ze){const t=this.image.data,r=new Uint8Array(t.length);for(let i=0,a=t.length;i<a;++i)r[i]=t[i]*255+.5;this.image.data=r,this.type=pt,this.needsUpdate=!0}return this}convertToFloat(){if(this.type===pt){const t=this.image.data,r=new Float32Array(t.length);for(let i=0,a=t.length;i<a;++i)r[i]=t[i]/255;this.image.data=r,this.type=ze,this.needsUpdate=!0}return this}convertToRGBA(){return console.warn("LookupTexture","convertToRGBA() is deprecated, LUTs are now RGBA by default"),this}convertLinearToSRGB(){const t=this.image.data;if(this.type===ze){for(let r=0,i=t.length;r<i;r+=4)pa.fromArray(t,r).convertLinearToSRGB().toArray(t,r);this.colorSpace=je,this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}convertSRGBToLinear(){const t=this.image.data;if(this.type===ze){for(let r=0,i=t.length;r<i;r+=4)pa.fromArray(t,r).convertSRGBToLinear().toArray(t,r);this.colorSpace=fn,this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}toDataTexture(){const t=this.image.width,r=this.image.height*this.image.depth,i=new Za(this.image.data,t,r);return i.name=this.name,i.type=this.type,i.format=this.format,i.minFilter=Ne,i.magFilter=Ne,i.wrapS=this.wrapS,i.wrapT=this.wrapT,i.generateMipmaps=!1,i.needsUpdate=!0,this.colorSpace=i.colorSpace,i}static from(t){const r=t.image,{width:i,height:a}=r,o=Math.min(i,a);let c;if(r instanceof Image){const p=Lc.from(r).data;if(i>a){c=new Uint8Array(p.length);for(let m=0;m<o;++m)for(let x=0;x<o;++x)for(let I=0;I<o;++I){const O=(I+m*o+x*o*o)*4,L=(I+x*o+m*o*o)*4;c[L+0]=p[O+0],c[L+1]=p[O+1],c[L+2]=p[O+2],c[L+3]=p[O+3]}}else c=new Uint8Array(p.buffer)}else c=r.data.slice();const d=new un(c,o);return d.type=t.type,d.name=t.name,t.colorSpace=d.colorSpace,d}static createNeutral(t){const r=new Float32Array(t**3*4),i=t**2,a=1/(t-1);for(let c=0;c<t;++c)for(let d=0;d<t;++d)for(let l=0;l<t;++l){const p=(c+d*t+l*i)*4;r[p+0]=c*a,r[p+1]=d*a,r[p+2]=l*a,r[p+3]=1}const o=new un(r,t);return o.name="neutral",o}},Fc=`uniform vec3 scale;uniform vec3 offset;
#ifdef CUSTOM_INPUT_DOMAIN
uniform vec3 domainMin;uniform vec3 domainMax;
#endif
#ifdef LUT_3D
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler3D lut;
#else
uniform mediump sampler3D lut;
#endif
#else
uniform lowp sampler3D lut;
#endif
vec4 applyLUT(const in vec3 rgb){
#ifdef TETRAHEDRAL_INTERPOLATION
vec3 p=floor(rgb);vec3 f=rgb-p;vec3 v1=(p+0.5)*LUT_TEXEL_WIDTH;vec3 v4=(p+1.5)*LUT_TEXEL_WIDTH;vec3 v2,v3;vec3 frac;if(f.r>=f.g){if(f.g>f.b){frac=f.rgb;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else if(f.r>=f.b){frac=f.rbg;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v1.y,v4.z);}else{frac=f.brg;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v4.x,v1.y,v4.z);}}else{if(f.b>f.g){frac=f.bgr;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v1.x,v4.y,v4.z);}else if(f.r>=f.b){frac=f.grb;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else{frac=f.gbr;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v1.x,v4.y,v4.z);}}vec4 n1=texture(lut,v1);vec4 n2=texture(lut,v2);vec4 n3=texture(lut,v3);vec4 n4=texture(lut,v4);vec4 weights=vec4(1.0-frac.x,frac.x-frac.y,frac.y-frac.z,frac.z);vec4 result=weights*mat4(vec4(n1.r,n2.r,n3.r,n4.r),vec4(n1.g,n2.g,n3.g,n4.g),vec4(n1.b,n2.b,n3.b,n4.b),vec4(1.0));return vec4(result.rgb,1.0);
#else
return texture(lut,rgb);
#endif
}
#else
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D lut;
#else
uniform mediump sampler2D lut;
#endif
#else
uniform lowp sampler2D lut;
#endif
vec4 applyLUT(const in vec3 rgb){float slice=rgb.b*LUT_SIZE;float slice0=floor(slice);float interp=slice-slice0;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);
#ifdef LUT_STRIP_HORIZONTAL
float xOffset=clamp(rgb.r*LUT_TEXEL_HEIGHT,LUT_TEXEL_WIDTH*0.5,LUT_TEXEL_HEIGHT-LUT_TEXEL_WIDTH*0.5);vec2 uv0=vec2(slice0*LUT_TEXEL_HEIGHT+xOffset,rgb.g);vec2 uv1=vec2(slice1*LUT_TEXEL_HEIGHT+xOffset,rgb.g);
#else
float yOffset=clamp(rgb.g*LUT_TEXEL_WIDTH,LUT_TEXEL_HEIGHT*0.5,LUT_TEXEL_WIDTH-LUT_TEXEL_HEIGHT*0.5);vec2 uv0=vec2(rgb.r,slice0*LUT_TEXEL_WIDTH+yOffset);vec2 uv1=vec2(rgb.r,slice1*LUT_TEXEL_WIDTH+yOffset);
#endif
vec4 sample0=texture2D(lut,uv0);vec4 sample1=texture2D(lut,uv1);return mix(sample0,sample1,abs(centeredInterp));}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 c=inputColor.rgb;
#ifdef CUSTOM_INPUT_DOMAIN
if(c.r>=domainMin.r&&c.g>=domainMin.g&&c.b>=domainMin.b&&c.r<=domainMax.r&&c.g<=domainMax.g&&c.b<=domainMax.b){c=applyLUT(scale*c+offset).rgb;}else{c=inputColor.rgb;}
#else
#if !defined(LUT_3D) || defined(TETRAHEDRAL_INTERPOLATION)
c=clamp(c,0.0,1.0);
#endif
c=applyLUT(scale*c+offset).rgb;
#endif
outputColor=vec4(c,inputColor.a);}`,Cd=class extends jt{constructor(e,{blendFunction:t=q.SRC,tetrahedralInterpolation:r=!1,inputColorSpace:i=je}={}){super("LUT3DEffect",Fc,{blendFunction:t,uniforms:new Map([["lut",new y(null)],["scale",new y(new _)],["offset",new y(new _)],["domainMin",new y(null)],["domainMax",new y(null)]])}),this.tetrahedralInterpolation=r,this.inputColorSpace=i,this.lut=e}get lut(){return this.uniforms.get("lut").value}set lut(e){const t=this.defines,r=this.uniforms;if(this.lut!==e&&(r.get("lut").value=e,e!==null)){const i=e.image,a=this.tetrahedralInterpolation;if(t.clear(),t.set("LUT_SIZE",Math.min(i.width,i.height).toFixed(16)),t.set("LUT_TEXEL_WIDTH",(1/i.width).toFixed(16)),t.set("LUT_TEXEL_HEIGHT",(1/i.height).toFixed(16)),r.get("domainMin").value=null,r.get("domainMax").value=null,(e.type===ze||e.type===$e)&&t.set("LUT_PRECISION_HIGH","1"),i.width>i.height?t.set("LUT_STRIP_HORIZONTAL","1"):e instanceof or&&t.set("LUT_3D","1"),e instanceof _c){const o=e.domainMin,c=e.domainMax;(o.x!==0||o.y!==0||o.z!==0||c.x!==1||c.y!==1||c.z!==1)&&(t.set("CUSTOM_INPUT_DOMAIN","1"),r.get("domainMin").value=o.clone(),r.get("domainMax").value=c.clone())}this.tetrahedralInterpolation=a}}getLUT(){return this.lut}setLUT(e){this.lut=e}updateScaleOffset(){const e=this.lut;if(e!==null){const t=Math.min(e.image.width,e.image.height),r=this.uniforms.get("scale").value,i=this.uniforms.get("offset").value;if(this.tetrahedralInterpolation&&e instanceof or)if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const a=e.domainMax.clone().sub(e.domainMin);r.setScalar(t-1).divide(a),i.copy(e.domainMin).negate().multiply(r)}else r.setScalar(t-1),i.setScalar(0);else if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const a=e.domainMax.clone().sub(e.domainMin).multiplyScalar(t);r.setScalar(t-1).divide(a),i.copy(e.domainMin).negate().multiply(r).addScalar(1/(2*t))}else r.setScalar((t-1)/t),i.setScalar(1/(2*t))}}configureTetrahedralInterpolation(){const e=this.lut;e!==null&&(e.minFilter=Ne,e.magFilter=Ne,this.tetrahedralInterpolation&&(e instanceof or?(e.minFilter=bt,e.magFilter=bt):console.warn("Tetrahedral interpolation requires a 3D texture")),e.needsUpdate=!0)}get tetrahedralInterpolation(){return this.defines.has("TETRAHEDRAL_INTERPOLATION")}set tetrahedralInterpolation(e){e?this.defines.set("TETRAHEDRAL_INTERPOLATION","1"):this.defines.delete("TETRAHEDRAL_INTERPOLATION"),this.configureTetrahedralInterpolation(),this.updateScaleOffset(),this.setChanged()}setTetrahedralInterpolationEnabled(e){this.tetrahedralInterpolation=e}},ns={COLOR:2},Hc={DISABLED:0},Tr={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},it={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Gc=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,zc=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,kc=class extends gt{constructor(e=new Ie,t=ns.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:wr.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new y(null),depthBuffer:new y(null),predicationBuffer:new y(null),texelSize:new y(e)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Gc,vertexShader:zc}),this.edgeDetectionMode=t}set depthBuffer(e){this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=mr){this.depthBuffer=e,this.depthPacking=t}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(e){this.defines.EDGE_DETECTION_MODE=e.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(e){this.edgeDetectionMode=e}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(e){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=e.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(e){this.localContrastAdaptationFactor=e}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(e){this.defines.EDGE_THRESHOLD=e.toFixed("6"),this.defines.DEPTH_THRESHOLD=(e*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(e){this.edgeDetectionThreshold=e}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(e){this.defines.PREDICATION_MODE=e.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(e){this.predicationMode=e}set predicationBuffer(e){this.uniforms.predicationBuffer.value=e}setPredicationBuffer(e){this.uniforms.predicationBuffer.value=e}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(e){this.defines.PREDICATION_THRESHOLD=e.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(e){this.predicationThreshold=e}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(e){this.defines.PREDICATION_SCALE=e.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(e){this.predicationScale=e}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(e){this.defines.PREDICATION_STRENGTH=e.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(e){this.predicationStrength=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Qc=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,Yc="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Vc=class extends gt{constructor(e=new Ie,t=new Ie){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new y(null),searchTexture:new y(null),areaTexture:new y(null),resolution:new y(t),texelSize:new y(e)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qc,vertexShader:Yc})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(e){this.uniforms.searchTexture.value=e}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(e){this.uniforms.areaTexture.value=e}setLookupTextures(e,t){this.searchTexture=e,this.areaTexture=t}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(e){const t=Math.min(Math.max(e,0),112);this.defines.MAX_SEARCH_STEPS_INT=t.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=t.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(e){this.orthogonalSearchSteps=e}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(e){const t=Math.min(Math.max(e,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=t.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=t.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(e){this.diagonalSearchSteps=e}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(e){e?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(e){this.diagonalDetection=e}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(e){const t=Math.min(Math.max(e,0),100);this.defines.CORNER_ROUNDING=t.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(t/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(e){this.cornerRounding=e}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(e){e?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(e){this.cornerDetection=e}setSize(e,t){const r=this.uniforms;r.texelSize.value.set(1/e,1/t),r.resolution.value.set(e,t)}},ga="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",ma="data:image/png;base64,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",Xc="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",Wc="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Td=class extends jt{constructor({blendFunction:e=q.SRC,preset:t=Tr.MEDIUM,edgeDetectionMode:r=ns.COLOR,predicationMode:i=Hc.DISABLED}={}){super("SMAAEffect",Xc,{vertexShader:Wc,blendFunction:e,attributes:ot.CONVOLUTION|ot.DEPTH,uniforms:new Map([["weightMap",new y(null)]])});let a,o;arguments.length>1&&(a=arguments[0],o=arguments[1],arguments.length>2&&(t=arguments[2]),arguments.length>3&&(r=arguments[3])),this.renderTargetEdges=new ct(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new zi(!0,!1,!1),this.clearPass.overrideClearColor=new Ar(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new vn(new kc),this.edgeDetectionMaterial.edgeDetectionMode=r,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new vn(new Vc);const c=new po;c.onLoad=()=>{const d=new dn(a);d.name="SMAA.Search",d.magFilter=bt,d.minFilter=bt,d.generateMipmaps=!1,d.needsUpdate=!0,d.flipY=!0,this.weightsMaterial.searchTexture=d;const l=new dn(o);l.name="SMAA.Area",l.magFilter=Ne,l.minFilter=Ne,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},c.itemStart("search"),c.itemStart("area"),a!==void 0&&o!==void 0?(c.itemEnd("search"),c.itemEnd("area")):typeof Image<"u"&&(a=new Image,o=new Image,a.addEventListener("load",()=>c.itemEnd("search")),o.addEventListener("load",()=>c.itemEnd("area")),a.src=ga,o.src=ma),this.applyPreset(t)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(e){this.edgeDetectionMaterial.edgeDetectionThreshold=e}setOrthogonalSearchSteps(e){this.weightsMaterial.orthogonalSearchSteps=e}applyPreset(e){const t=this.edgeDetectionMaterial,r=this.weightsMaterial;switch(e){case Tr.LOW:t.edgeDetectionThreshold=.15,r.orthogonalSearchSteps=4,r.diagonalDetection=!1,r.cornerDetection=!1;break;case Tr.MEDIUM:t.edgeDetectionThreshold=.1,r.orthogonalSearchSteps=8,r.diagonalDetection=!1,r.cornerDetection=!1;break;case Tr.HIGH:t.edgeDetectionThreshold=.1,r.orthogonalSearchSteps=16,r.diagonalSearchSteps=8,r.cornerRounding=25,r.diagonalDetection=!0,r.cornerDetection=!0;break;case Tr.ULTRA:t.edgeDetectionThreshold=.05,r.orthogonalSearchSteps=32,r.diagonalSearchSteps=16,r.cornerRounding=25,r.diagonalDetection=!0,r.cornerDetection=!0;break}}setDepthTexture(e,t=mr){this.edgeDetectionMaterial.depthBuffer=e,this.edgeDetectionMaterial.depthPacking=t}update(e,t,r){this.clearPass.render(e,this.renderTargetEdges),this.edgeDetectionPass.render(e,t,this.renderTargetEdges),this.weightsPass.render(e,this.renderTargetEdges,this.renderTargetWeights)}setSize(e,t){this.edgeDetectionMaterial.setSize(e,t),this.weightsMaterial.setSize(e,t),this.renderTargetEdges.setSize(e,t),this.renderTargetWeights.setSize(e,t)}dispose(){const{searchTexture:e,areaTexture:t}=this.weightsMaterial;e!==null&&t!==null&&(e.dispose(),t.dispose()),super.dispose()}static get searchImageDataURL(){return ga}static get areaImageDataURL(){return ma}},jc=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Kc=class extends gt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new y(null),luminanceBuffer1:new y(null),minLuminance:new y(.01),deltaTime:new y(0),tau:new y(1)},extensions:{shaderTextureLOD:!0},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jc,vertexShader:Gi})}set luminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}setLuminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}set luminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}setLuminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}set mipLevel1x1(e){this.defines.MIP_LEVEL_1X1=e.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(e){this.mipLevel1x1=e}set deltaTime(e){this.uniforms.deltaTime.value=e}setDeltaTime(e){this.uniforms.deltaTime.value=e}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(e){this.uniforms.minLuminance.value=e}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(e){this.uniforms.minLuminance.value=e}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(e){this.uniforms.tau.value=e}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(e){this.uniforms.tau.value=e}},Zc=class extends nt{constructor(e,{minLuminance:t=.01,adaptationRate:r=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Kc,this.needsSwap=!1,this.renderTargetPrevious=new ct(1,1,{minFilter:bt,magFilter:bt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=e,i.minLuminance=t,i.adaptationRate=r,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new ts(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(e){this.fullscreenMaterial.mipLevel1x1=e}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(e){this.fullscreenMaterial.adaptationRate=e}render(e,t,r,i,a){this.fullscreenMaterial.deltaTime=i,e.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),e.render(this.scene,this.camera),this.copyPass.render(e,this.renderTargetAdapted)}},Jc=`#include <tonemapping_pars_fragment>
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
}`,yd=class extends jt{constructor({blendFunction:e=q.SRC,adaptive:t=!1,mode:r=t?it.REINHARD2_ADAPTIVE:it.AGX,resolution:i=256,maxLuminance:a=4,whitePoint:o=a,middleGrey:c=.6,minLuminance:d=.01,averageLuminance:l=1,adaptationRate:p=1}={}){super("ToneMappingEffect",Jc,{blendFunction:e,uniforms:new Map([["luminanceBuffer",new y(null)],["maxLuminance",new y(a)],["whitePoint",new y(o)],["middleGrey",new y(c)],["averageLuminance",new y(l)]])}),this.renderTargetLuminance=new ct(1,1,{minFilter:vo,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new yc({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Zc(this.luminancePass.texture,{minLuminance:d,adaptationRate:p}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=r}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(e){if(this.mode===e)return;const r=wr.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",e.toFixed(0)),e){case it.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case it.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case it.CINEON:case it.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",r);break;case it.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case it.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case it.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=e===it.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(e){this.mode=e}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(e){this.uniforms.get("whitePoint").value=e}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(e){this.uniforms.get("middleGrey").value=e}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(e){this.uniforms.get("averageLuminance").value=e}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(e){const t=Math.max(0,Math.ceil(Math.log2(e))),r=Math.pow(2,t);this.luminancePass.resolution.setPreferredSize(r,r),this.adaptiveLuminanceMaterial.mipLevel1x1=t}getResolution(){return this.resolution}setResolution(e){this.resolution=e}get adaptive(){return this.mode===it.REINHARD2_ADAPTIVE}set adaptive(e){this.mode=e?it.REINHARD2_ADAPTIVE:it.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(e){this.adaptiveLuminanceMaterial.adaptationRate=e}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(e){console.warn(this.name,"distinction was removed.")}update(e,t,r){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(e,t),this.adaptiveLuminancePass.render(e,null,null,r))}initialize(e,t,r){this.adaptiveLuminancePass.initialize(e,t,r)}},qc=`#include <common>
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
}`,$c="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",eu=class extends gt{constructor(e,t,r,i,a=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:wr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new y(null),depthBuffer:new y(null),resolution:new y(new Ie),texelSize:new y(new Ie),cameraNear:new y(.3),cameraFar:new y(1e3),aspect:new y(1),time:new y(0)},blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:a}),e&&this.setShaderParts(e),t&&this.setDefines(t),r&&this.setUniforms(r),this.copyCameraSettings(i)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=mr){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=qc.replace(ce.FRAGMENT_HEAD,e.get(ce.FRAGMENT_HEAD)||"").replace(ce.FRAGMENT_MAIN_UV,e.get(ce.FRAGMENT_MAIN_UV)||"").replace(ce.FRAGMENT_MAIN_IMAGE,e.get(ce.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=$c.replace(ce.VERTEX_HEAD,e.get(ce.VERTEX_HEAD)||"").replace(ce.VERTEX_MAIN_SUPPORT,e.get(ce.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(const t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(const t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(const t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof Ao?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){const r=this.uniforms;r.resolution.value.set(e,t),r.texelSize.value.set(1/e,1/t),r.aspect.value=e/t}static get Section(){return ce}};function Aa(e,t,r){for(const i of t){const a="$1"+e+i.charAt(0).toUpperCase()+i.slice(1),o=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const c of r.entries())c[1]!==null&&r.set(c[0],c[1].replace(o,a))}}function tu(e,t,r){let i=t.getFragmentShader(),a=t.getVertexShader();const o=i!==void 0&&/mainImage/.test(i),c=i!==void 0&&/mainUv/.test(i);if(r.attributes|=t.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(c&&(r.attributes&ot.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!o&&!c)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=r.shaderParts;let p=l.get(ce.FRAGMENT_HEAD)||"",m=l.get(ce.FRAGMENT_MAIN_UV)||"",x=l.get(ce.FRAGMENT_MAIN_IMAGE)||"",I=l.get(ce.VERTEX_HEAD)||"",O=l.get(ce.VERTEX_MAIN_SUPPORT)||"";const L=new Set,P=new Set;if(c&&(m+=`	${e}MainUv(UV);
`,r.uvTransformation=!0),a!==null&&/mainSupport/.test(a)){const K=/mainSupport *\([\w\s]*?uv\s*?\)/.test(a);O+=`	${e}MainSupport(`,O+=K?`vUv);
`:`);
`;for(const B of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const J of B[1].split(/\s*,\s*/))r.varyings.add(J),L.add(J),P.add(J);for(const B of a.matchAll(d))P.add(B[1])}for(const K of i.matchAll(d))P.add(K[1]);for(const K of t.defines.keys())P.add(K.replace(/\([\w\s,]*\)/g,""));for(const K of t.uniforms.keys())P.add(K);P.delete("while"),P.delete("for"),P.delete("if"),t.uniforms.forEach((K,B)=>r.uniforms.set(e+B.charAt(0).toUpperCase()+B.slice(1),K)),t.defines.forEach((K,B)=>r.defines.set(e+B.charAt(0).toUpperCase()+B.slice(1),K));const W=new Map([["fragment",i],["vertex",a]]);Aa(e,P,r.defines),Aa(e,P,W),i=W.get("fragment"),a=W.get("vertex");const Z=t.blendMode;if(r.blendModes.set(Z.blendFunction,Z),o){t.inputColorSpace!==null&&t.inputColorSpace!==r.colorSpace&&(x+=t.inputColorSpace===je?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==Ka?r.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(r.colorSpace=t.inputColorSpace);const K=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;x+=`${e}MainImage(color0, UV, `,(r.attributes&ot.DEPTH)!==0&&K.test(i)&&(x+="depth, ",r.readDepth=!0),x+=`color1);
	`;const B=e+"BlendOpacity";r.uniforms.set(B,Z.opacity),x+=`color0 = blend${Z.blendFunction}(color0, color1, ${B});

	`,p+=`uniform float ${B};

`}if(p+=i+`
`,a!==null&&(I+=a+`
`),l.set(ce.FRAGMENT_HEAD,p),l.set(ce.FRAGMENT_MAIN_UV,m),l.set(ce.FRAGMENT_MAIN_IMAGE,x),l.set(ce.VERTEX_HEAD,I),l.set(ce.VERTEX_MAIN_SUPPORT,O),t.extensions!==null)for(const K of t.extensions)r.extensions.add(K)}}var Dd=class extends nt{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new eu(null,null,null,e),this.listener=r=>this.handleEvent(r),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(e){for(const t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(const t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){const t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=e.sort((t,r)=>r.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const e=new _o;let t=0;for(const c of this.effects)if(c.blendMode.blendFunction===q.DST)e.attributes|=c.getAttributes()&ot.DEPTH;else{if((e.attributes&c.getAttributes()&ot.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);tu("e"+t++,c,e)}let r=e.shaderParts.get(ce.FRAGMENT_HEAD),i=e.shaderParts.get(ce.FRAGMENT_MAIN_IMAGE),a=e.shaderParts.get(ce.FRAGMENT_MAIN_UV);const o=/\bblend\b/g;for(const c of e.blendModes.values())r+=c.getShaderCode().replace(o,`blend${c.blendFunction}`)+`
`;(e.attributes&ot.DEPTH)!==0?(e.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,e.colorSpace===je&&(i+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(a=`vec2 transformedUv = vUv;
`+a,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(ce.FRAGMENT_HEAD,r),e.shaderParts.set(ce.FRAGMENT_MAIN_IMAGE,i),e.shaderParts.set(ce.FRAGMENT_MAIN_UV,a);for(const[c,d]of e.shaderParts)d!==null&&e.shaderParts.set(c,d.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=mr){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(const r of this.effects)r.setDepthTexture(e,t)}render(e,t,r,i,a){for(const o of this.effects)o.update(e,t,i);if(!this.skipRendering||this.renderToScreen){const o=this.fullscreenMaterial;o.inputBuffer=t.texture,o.time+=i*this.timeScale,e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(const r of this.effects)r.setSize(e,t)}initialize(e,t,r){this.renderer=e;for(const i of this.effects)i.initialize(e,t,r);this.updateMaterial(),r!==void 0&&r!==pt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const e of this.effects)e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){switch(e.type){case"change":this.recompile();break}}},Rd=class extends nt{constructor(e,t,{renderTarget:r,resolutionScale:i=1,width:a=st.AUTO_SIZE,height:o=st.AUTO_SIZE,resolutionX:c=a,resolutionY:d=o}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Pc(e,t,new Eo);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const p=l.getClearPass();p.overrideClearColor=new Ar(7829503),p.overrideClearAlpha=1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new ct(1,1,{minFilter:bt,magFilter:bt}),this.renderTarget.texture.name="NormalPass.Target");const m=this.resolution=new st(this,c,d,i);m.addEventListener("change",x=>this.setSize(m.baseWidth,m.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,a){const o=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,o,o)}setSize(e,t){const r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}};const ru=new _;function is(e,t,r=new _,i){const{x:a,y:o,z:c}=e,d=t.x,l=t.y,p=t.z,m=a*a*d,x=o*o*l,I=c*c*p,O=m+x+I,L=Math.sqrt(1/O);if(!Number.isFinite(L))return;const P=ru.copy(e).multiplyScalar(L);if(O<((i==null?void 0:i.centerTolerance)??.1))return r.copy(P);const W=P.multiply(t).multiplyScalar(2);let Z=(1-L)*e.length()/(W.length()/2),K=0,B,J,H,De;do{Z-=K,B=1/(1+Z*d),J=1/(1+Z*l),H=1/(1+Z*p);const Be=B*B,Fe=J*J,He=H*H,se=Be*B,pe=Fe*J,Oe=He*H;De=m*Be+x*Fe+I*He-1,K=De/((m*se*d+x*pe*l+I*Oe*p)*-2)}while(Math.abs(De)>1e-12);return r.set(a*B,o*J,c*H)}const Wr=new _,wa=new _,Ea=new _,hi=class{constructor(t,r,i){this.radii=new _(t,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(t=new _){const{x:r,y:i,z:a}=this.radii;return t.set(1/r,1/i,1/a)}reciprocalRadiiSquared(t=new _){const{x:r,y:i,z:a}=this.radii;return t.set(1/r**2,1/i**2,1/a**2)}projectOnSurface(t,r=new _,i){return is(t,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(t,r=new _){return r.multiplyVectors(this.reciprocalRadiiSquared(Wr),t).normalize()}getEastNorthUpVectors(t,r=new _,i=new _,a=new _){this.getSurfaceNormal(t,a),r.set(-t.y,t.x,0).normalize(),i.crossVectors(a,r).normalize()}getEastNorthUpFrame(t,r=new ye){const i=Wr,a=wa,o=Ea;return this.getEastNorthUpVectors(t,i,a,o),r.makeBasis(i,a,o).setPosition(t)}getIntersection(t,r=new _){const i=this.reciprocalRadii(Wr),a=wa.copy(i).multiply(t.origin),o=Ea.copy(i).multiply(t.direction),c=a.lengthSq(),d=o.lengthSq(),l=a.dot(o),p=l**2-d*(c-1);if(c===1)return r.copy(t.origin);if(c>1){if(l>=0||p<0)return;const m=Math.sqrt(p),x=(-l-m)/d,I=(-l+m)/d;return t.at(Math.min(x,I),r)}if(c<1){const m=l**2-d*(c-1),x=Math.sqrt(m),I=(-l+x)/d;return t.at(I,r)}if(l<0)return t.at(-l/d,r)}getOsculatingSphereCenter(t,r,i=new _){const a=this.radii.x**2,o=Wr.set(t.x/a,t.y/a,t.z/this.radii.z**2).normalize();return i.copy(o.multiplyScalar(-r).add(t))}};hi.WGS84=new hi(6378137,6378137,6356752314245179e-9);let Gt=hi;const jr=new _,xa=new _,Br=class vi{constructor(t=0,r=0,i=0){this.longitude=t,this.latitude=r,this.height=i}set(t,r,i){return this.longitude=t,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new vi(this.longitude,this.latitude,this.height)}copy(t){return this.longitude=t.longitude,this.latitude=t.latitude,this.height=t.height,this}equals(t){return t.longitude===this.longitude&&t.latitude===this.latitude&&t.height===this.height}setLongitude(t){return this.longitude=t,this}setLatitude(t){return this.latitude=t,this}setHeight(t){return this.height=t,this}normalize(){return this.longitude<vi.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(t,r){const i=((r==null?void 0:r.ellipsoid)??Gt.WGS84).reciprocalRadiiSquared(jr),a=is(t,i,xa,r);if(a==null)throw new Error(`Could not project position to ellipsoid surface: ${t.toArray()}`);const o=jr.multiplyVectors(a,i).normalize();this.longitude=Math.atan2(o.y,o.x),this.latitude=Math.asin(o.z);const c=jr.subVectors(t,a);return this.height=Math.sign(c.dot(t))*c.length(),this}toECEF(t=new _,r){const i=(r==null?void 0:r.ellipsoid)??Gt.WGS84,a=jr.multiplyVectors(i.radii,i.radii),o=Math.cos(this.latitude),c=xa.set(o*Math.cos(this.longitude),o*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return t.multiplyVectors(a,c),t.divideScalar(Math.sqrt(c.dot(t))).add(c.multiplyScalar(this.height))}fromArray(t,r=0){return this.longitude=t[r],this.latitude=t[r+1],this.height=t[r+2],this}toArray(t=[],r=0){return t[r]=this.longitude,t[r+1]=this.latitude,t[r+2]=this.height,t}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Br.MIN_LONGITUDE=-Math.PI,Br.MAX_LONGITUDE=Math.PI,Br.MIN_LATITUDE=-Math.PI/2,Br.MAX_LATITUDE=Math.PI/2;let nu=Br;var iu="Invariant failed";function as(e,t){if(!e)throw new Error(iu)}let au=class extends Hr{load(t,r,i,a){const o=new Ro(this.manager);o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{as(c instanceof ArrayBuffer);try{r(c)}catch(d){a!=null?a(d):console.error(d),this.manager.itemError(t)}},i,a)}};const su=128,ou=128,cu=64,uu="This is not an object",lu="This is not a Float16Array object",Sa="This constructor is not a subclass of Float16Array",ss="The constructor property value is not an object",du="Species constructor didn't return TypedArray object",fu="Derived constructor created TypedArray object which was too small length",Ur="Attempting to access detached ArrayBuffer",pi="Cannot convert undefined or null to object",gi="Cannot mix BigInt and other types, use explicit conversions",Ca="@@iterator property is not callable",Ta="Reduce of empty array with no initial value",hu="The comparison function must be either a function or undefined",Zn="Offset is out of bounds";function Ae(e){return(t,...r)=>rt(e,t,r)}function xr(e,t){return Ae(dr(e,t).get)}const{apply:rt,construct:Or,defineProperty:vu,get:Jn,getOwnPropertyDescriptor:dr,getPrototypeOf:Gr,has:mi,ownKeys:os,set:ya,setPrototypeOf:cs}=Reflect,pu=Proxy,{EPSILON:gu,MAX_SAFE_INTEGER:Da,isFinite:us,isNaN:fr}=Number,{iterator:Pt,species:mu,toStringTag:Qi,for:Au}=Symbol,hr=Object,{create:yn,defineProperty:zr,freeze:wu,is:Ra}=hr,Ai=hr.prototype,Eu=Ai.__lookupGetter__?Ae(Ai.__lookupGetter__):(e,t)=>{if(e==null)throw Te(pi);let r=hr(e);do{const i=dr(r,t);if(i!==void 0)return Ht(i,"get")?i.get:void 0}while((r=Gr(r))!==null)},Ht=hr.hasOwn||Ae(Ai.hasOwnProperty),ls=Array,ds=ls.isArray,Dn=ls.prototype,xu=Ae(Dn.join),Su=Ae(Dn.push),Cu=Ae(Dn.toLocaleString),Yi=Dn[Pt],Tu=Ae(Yi),{abs:yu,trunc:fs}=Math,Rn=ArrayBuffer,Du=Rn.isView,hs=Rn.prototype,Ru=Ae(hs.slice),Iu=xr(hs,"byteLength"),wi=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Mu=wi&&xr(wi.prototype,"byteLength"),Vi=Gr(Uint8Array),Bu=Vi.from,ke=Vi.prototype,Ou=ke[Pt],bu=Ae(ke.keys),Pu=Ae(ke.values),Uu=Ae(ke.entries),Lu=Ae(ke.set),Ia=Ae(ke.reverse),Nu=Ae(ke.fill),_u=Ae(ke.copyWithin),Ma=Ae(ke.sort),yr=Ae(ke.slice),Fu=Ae(ke.subarray),Ge=xr(ke,"buffer"),Zt=xr(ke,"byteOffset"),fe=xr(ke,"length"),vs=xr(ke,Qi),Hu=Uint8Array,at=Uint16Array,Ba=(...e)=>rt(Bu,at,e),Xi=Uint32Array,Gu=Float32Array,er=Gr([][Pt]()),In=Ae(er.next),zu=Ae(function*(){}().next),ku=Gr(er),Qu=DataView.prototype,Yu=Ae(Qu.getUint16),Te=TypeError,qn=RangeError,ps=WeakSet,gs=ps.prototype,Vu=Ae(gs.add),Xu=Ae(gs.has),Mn=WeakMap,Wi=Mn.prototype,pn=Ae(Wi.get),Wu=Ae(Wi.has),ji=Ae(Wi.set),ms=new Mn,ju=yn(null,{next:{value:function(){const e=pn(ms,this);return In(e)}},[Pt]:{value:function(){return this}}});function br(e){if(e[Pt]===Yi&&er.next===In)return e;const t=yn(ju);return ji(ms,t,Tu(e)),t}const As=new Mn,ws=yn(ku,{next:{value:function(){const e=pn(As,this);return zu(e)},writable:!0,configurable:!0}});for(const e of os(er))e!=="next"&&zr(ws,e,dr(er,e));function Oa(e){const t=yn(ws);return ji(As,t,e),t}function gn(e){return e!==null&&typeof e=="object"||typeof e=="function"}function ba(e){return e!==null&&typeof e=="object"}function mn(e){return vs(e)!==void 0}function Ei(e){const t=vs(e);return t==="BigInt64Array"||t==="BigUint64Array"}function Ku(e){try{return ds(e)?!1:(Iu(e),!0)}catch{return!1}}function Es(e){if(wi===null)return!1;try{return Mu(e),!0}catch{return!1}}function Zu(e){return Ku(e)||Es(e)}function Pa(e){return ds(e)?e[Pt]===Yi&&er.next===In:!1}function Ju(e){return mn(e)?e[Pt]===Ou&&er.next===In:!1}function Kr(e){if(typeof e!="string")return!1;const t=+e;return e!==t+""||!us(t)?!1:t===fs(t)}const An=Au("__Float16Array__");function qu(e){if(!ba(e))return!1;const t=Gr(e);if(!ba(t))return!1;const r=t.constructor;if(r===void 0)return!1;if(!gn(r))throw Te(ss);return mi(r,An)}const xi=1/gu;function $u(e){return e+xi-xi}const xs=6103515625e-14,el=65504,Ss=.0009765625,Ua=Ss*xs,tl=Ss*xi;function rl(e){const t=+e;if(!us(t)||t===0)return t;const r=t>0?1:-1,i=yu(t);if(i<xs)return r*$u(i/Ua)*Ua;const a=(1+tl)*i,o=a-(a-i);return o>el||fr(o)?r*(1/0):r*o}const Cs=new Rn(4),Ts=new Gu(Cs),ys=new Xi(Cs),yt=new at(512),Dt=new Hu(512);for(let e=0;e<256;++e){const t=e-127;t<-24?(yt[e]=0,yt[e|256]=32768,Dt[e]=24,Dt[e|256]=24):t<-14?(yt[e]=1024>>-t-14,yt[e|256]=1024>>-t-14|32768,Dt[e]=-t-1,Dt[e|256]=-t-1):t<=15?(yt[e]=t+15<<10,yt[e|256]=t+15<<10|32768,Dt[e]=13,Dt[e|256]=13):t<128?(yt[e]=31744,yt[e|256]=64512,Dt[e]=24,Dt[e|256]=24):(yt[e]=31744,yt[e|256]=64512,Dt[e]=13,Dt[e|256]=13)}function Ot(e){Ts[0]=rl(e);const t=ys[0],r=t>>23&511;return yt[r]+((t&8388607)>>Dt[r])}const Ki=new Xi(2048);for(let e=1;e<1024;++e){let t=e<<13,r=0;for(;(t&8388608)===0;)t<<=1,r-=8388608;t&=-8388609,r+=947912704,Ki[e]=t|r}for(let e=1024;e<2048;++e)Ki[e]=939524096+(e-1024<<13);const Sr=new Xi(64);for(let e=1;e<31;++e)Sr[e]=e<<23;Sr[31]=1199570944;Sr[32]=2147483648;for(let e=33;e<63;++e)Sr[e]=2147483648+(e-32<<23);Sr[63]=3347054592;const Ds=new at(64);for(let e=1;e<64;++e)e!==32&&(Ds[e]=1024);function he(e){const t=e>>10;return ys[0]=Ki[Ds[t]+(e&1023)]+Sr[t],Ts[0]}function Nt(e){const t=+e;return fr(t)||t===0?0:fs(t)}function $n(e){const t=Nt(e);return t<0?0:t<Da?t:Da}function Zr(e,t){if(!gn(e))throw Te(uu);const r=e.constructor;if(r===void 0)return t;if(!gn(r))throw Te(ss);return r[mu]??t}function Lr(e){if(Es(e))return!1;try{return Ru(e,0,0),!1}catch{}return!0}function La(e,t){const r=fr(e),i=fr(t);if(r&&i)return 0;if(r)return 1;if(i||e<t)return-1;if(e>t)return 1;if(e===0&&t===0){const a=Ra(e,0),o=Ra(t,0);if(!a&&o)return-1;if(a&&!o)return 1}return 0}const Zi=2,wn=new Mn;function ir(e){return Wu(wn,e)||!Du(e)&&qu(e)}function de(e){if(!ir(e))throw Te(lu)}function Jr(e,t){const r=ir(e),i=mn(e);if(!r&&!i)throw Te(du);if(typeof t=="number"){let a;if(r){const o=re(e);a=fe(o)}else a=fe(e);if(a<t)throw Te(fu)}if(Ei(e))throw Te(gi)}function re(e){const t=pn(wn,e);if(t!==void 0){const a=Ge(t);if(Lr(a))throw Te(Ur);return t}const r=e.buffer;if(Lr(r))throw Te(Ur);const i=Or(ve,[r,e.byteOffset,e.length],e.constructor);return pn(wn,i)}function Na(e){const t=fe(e),r=[];for(let i=0;i<t;++i)r[i]=he(e[i]);return r}const Rs=new ps;for(const e of os(ke)){if(e===Qi)continue;const t=dr(ke,e);Ht(t,"get")&&typeof t.get=="function"&&Vu(Rs,t.get)}const nl=wu({get(e,t,r){return Kr(t)&&Ht(e,t)?he(Jn(e,t)):Xu(Rs,Eu(e,t))?Jn(e,t):Jn(e,t,r)},set(e,t,r,i){return Kr(t)&&Ht(e,t)?ya(e,t,Ot(r)):ya(e,t,r,i)},getOwnPropertyDescriptor(e,t){if(Kr(t)&&Ht(e,t)){const r=dr(e,t);return r.value=he(r.value),r}return dr(e,t)},defineProperty(e,t,r){return Kr(t)&&Ht(e,t)&&Ht(r,"value")&&(r.value=Ot(r.value)),vu(e,t,r)}});class ve{constructor(t,r,i){let a;if(ir(t))a=Or(at,[re(t)],new.target);else if(gn(t)&&!Zu(t)){let c,d;if(mn(t)){c=t,d=fe(t);const l=Ge(t);if(Lr(l))throw Te(Ur);if(Ei(t))throw Te(gi);const p=new Rn(d*Zi);a=Or(at,[p],new.target)}else{const l=t[Pt];if(l!=null&&typeof l!="function")throw Te(Ca);l!=null?Pa(t)?(c=t,d=t.length):(c=[...t],d=c.length):(c=t,d=$n(c.length)),a=Or(at,[d],new.target)}for(let l=0;l<d;++l)a[l]=Ot(c[l])}else a=Or(at,arguments,new.target);const o=new pu(a,nl);return ji(wn,o,a),o}static from(t,...r){const i=this;if(!mi(i,An))throw Te(Sa);if(i===ve){if(ir(t)&&r.length===0){const m=re(t),x=new at(Ge(m),Zt(m),fe(m));return new ve(Ge(yr(x)))}if(r.length===0)return new ve(Ge(Ba(t,Ot)));const l=r[0],p=r[1];return new ve(Ge(Ba(t,function(m,...x){return Ot(rt(l,this,[m,...br(x)]))},p)))}let a,o;const c=t[Pt];if(c!=null&&typeof c!="function")throw Te(Ca);if(c!=null)Pa(t)?(a=t,o=t.length):Ju(t)?(a=t,o=fe(t)):(a=[...t],o=a.length);else{if(t==null)throw Te(pi);a=hr(t),o=$n(a.length)}const d=new i(o);if(r.length===0)for(let l=0;l<o;++l)d[l]=a[l];else{const l=r[0],p=r[1];for(let m=0;m<o;++m)d[m]=rt(l,p,[a[m],m])}return d}static of(...t){const r=this;if(!mi(r,An))throw Te(Sa);const i=t.length;if(r===ve){const o=new ve(i),c=re(o);for(let d=0;d<i;++d)c[d]=Ot(t[d]);return o}const a=new r(i);for(let o=0;o<i;++o)a[o]=t[o];return a}keys(){de(this);const t=re(this);return bu(t)}values(){de(this);const t=re(this);return Oa(function*(){for(const r of Pu(t))yield he(r)}())}entries(){de(this);const t=re(this);return Oa(function*(){for(const[r,i]of Uu(t))yield[r,he(i)]}())}at(t){de(this);const r=re(this),i=fe(r),a=Nt(t),o=a>=0?a:i+a;if(!(o<0||o>=i))return he(r[o])}with(t,r){de(this);const i=re(this),a=fe(i),o=Nt(t),c=o>=0?o:a+o,d=+r;if(c<0||c>=a)throw qn(Zn);const l=new at(Ge(i),Zt(i),fe(i)),p=new ve(Ge(yr(l))),m=re(p);return m[c]=Ot(d),p}map(t,...r){de(this);const i=re(this),a=fe(i),o=r[0],c=Zr(i,ve);if(c===ve){const l=new ve(a),p=re(l);for(let m=0;m<a;++m){const x=he(i[m]);p[m]=Ot(rt(t,o,[x,m,this]))}return l}const d=new c(a);Jr(d,a);for(let l=0;l<a;++l){const p=he(i[l]);d[l]=rt(t,o,[p,l,this])}return d}filter(t,...r){de(this);const i=re(this),a=fe(i),o=r[0],c=[];for(let p=0;p<a;++p){const m=he(i[p]);rt(t,o,[m,p,this])&&Su(c,m)}const d=Zr(i,ve),l=new d(c);return Jr(l),l}reduce(t,...r){de(this);const i=re(this),a=fe(i);if(a===0&&r.length===0)throw Te(Ta);let o,c;r.length===0?(o=he(i[0]),c=1):(o=r[0],c=0);for(let d=c;d<a;++d)o=t(o,he(i[d]),d,this);return o}reduceRight(t,...r){de(this);const i=re(this),a=fe(i);if(a===0&&r.length===0)throw Te(Ta);let o,c;r.length===0?(o=he(i[a-1]),c=a-2):(o=r[0],c=a-1);for(let d=c;d>=0;--d)o=t(o,he(i[d]),d,this);return o}forEach(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=0;c<a;++c)rt(t,o,[he(i[c]),c,this])}find(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=0;c<a;++c){const d=he(i[c]);if(rt(t,o,[d,c,this]))return d}}findIndex(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=0;c<a;++c){const d=he(i[c]);if(rt(t,o,[d,c,this]))return c}return-1}findLast(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=a-1;c>=0;--c){const d=he(i[c]);if(rt(t,o,[d,c,this]))return d}}findLastIndex(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=a-1;c>=0;--c){const d=he(i[c]);if(rt(t,o,[d,c,this]))return c}return-1}every(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=0;c<a;++c)if(!rt(t,o,[he(i[c]),c,this]))return!1;return!0}some(t,...r){de(this);const i=re(this),a=fe(i),o=r[0];for(let c=0;c<a;++c)if(rt(t,o,[he(i[c]),c,this]))return!0;return!1}set(t,...r){de(this);const i=re(this),a=Nt(r[0]);if(a<0)throw qn(Zn);if(t==null)throw Te(pi);if(Ei(t))throw Te(gi);if(ir(t))return Lu(re(this),re(t),a);if(mn(t)){const l=Ge(t);if(Lr(l))throw Te(Ur)}const o=fe(i),c=hr(t),d=$n(c.length);if(a===1/0||d+a>o)throw qn(Zn);for(let l=0;l<d;++l)i[l+a]=Ot(c[l])}reverse(){de(this);const t=re(this);return Ia(t),this}toReversed(){de(this);const t=re(this),r=new at(Ge(t),Zt(t),fe(t)),i=new ve(Ge(yr(r))),a=re(i);return Ia(a),i}fill(t,...r){de(this);const i=re(this);return Nu(i,Ot(t),...br(r)),this}copyWithin(t,r,...i){de(this);const a=re(this);return _u(a,t,r,...br(i)),this}sort(t){de(this);const r=re(this),i=t!==void 0?t:La;return Ma(r,(a,o)=>i(he(a),he(o))),this}toSorted(t){de(this);const r=re(this);if(t!==void 0&&typeof t!="function")throw new Te(hu);const i=t!==void 0?t:La,a=new at(Ge(r),Zt(r),fe(r)),o=new ve(Ge(yr(a))),c=re(o);return Ma(c,(d,l)=>i(he(d),he(l))),o}slice(t,r){de(this);const i=re(this),a=Zr(i,ve);if(a===ve){const L=new at(Ge(i),Zt(i),fe(i));return new ve(Ge(yr(L,t,r)))}const o=fe(i),c=Nt(t),d=r===void 0?o:Nt(r);let l;c===-1/0?l=0:c<0?l=o+c>0?o+c:0:l=o<c?o:c;let p;d===-1/0?p=0:d<0?p=o+d>0?o+d:0:p=o<d?o:d;const m=p-l>0?p-l:0,x=new a(m);if(Jr(x,m),m===0)return x;const I=Ge(i);if(Lr(I))throw Te(Ur);let O=0;for(;l<p;)x[O]=he(i[l]),++l,++O;return x}subarray(t,r){de(this);const i=re(this),a=Zr(i,ve),o=new at(Ge(i),Zt(i),fe(i)),c=Fu(o,t,r),d=new a(Ge(c),Zt(c),fe(c));return Jr(d),d}indexOf(t,...r){de(this);const i=re(this),a=fe(i);let o=Nt(r[0]);if(o===1/0)return-1;o<0&&(o+=a,o<0&&(o=0));for(let c=o;c<a;++c)if(Ht(i,c)&&he(i[c])===t)return c;return-1}lastIndexOf(t,...r){de(this);const i=re(this),a=fe(i);let o=r.length>=1?Nt(r[0]):a-1;if(o===-1/0)return-1;o>=0?o=o<a-1?o:a-1:o+=a;for(let c=o;c>=0;--c)if(Ht(i,c)&&he(i[c])===t)return c;return-1}includes(t,...r){de(this);const i=re(this),a=fe(i);let o=Nt(r[0]);if(o===1/0)return!1;o<0&&(o+=a,o<0&&(o=0));const c=fr(t);for(let d=o;d<a;++d){const l=he(i[d]);if(c&&fr(l)||l===t)return!0}return!1}join(t){de(this);const r=re(this),i=Na(r);return xu(i,t)}toLocaleString(...t){de(this);const r=re(this),i=Na(r);return Cu(i,...br(t))}get[Qi](){if(ir(this))return"Float16Array"}}zr(ve,"BYTES_PER_ELEMENT",{value:Zi});zr(ve,An,{});cs(ve,Vi);const En=ve.prototype;zr(En,"BYTES_PER_ELEMENT",{value:Zi});zr(En,Pt,{value:En.values,writable:!0,configurable:!0});cs(En,ke);function il(e,t,...r){return he(Yu(e,t,...br(r)))}function al(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof ve||e instanceof Float32Array||e instanceof Float64Array}class sl extends Hr{load(t,r,i,a){const o=new au(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{try{r(this.parseTypedArray(c))}catch(d){a!=null?a(d):console.error(d),this.manager.itemError(t)}},i,a)}}function ol(e){return class extends sl{constructor(){super(...arguments),this.parseTypedArray=e}}}function cl(e){const t=e instanceof Int8Array?Co:e instanceof Uint8Array?pt:e instanceof Uint8ClampedArray?pt:e instanceof Int16Array?To:e instanceof Uint16Array?yo:e instanceof Int32Array?Do:e instanceof Uint32Array?ja:e instanceof ve?$e:e instanceof Float32Array?ze:e instanceof Float64Array?ze:null;return as(t!=null),t}const ul={format:cr,minFilter:Ne,magFilter:Ne};class ll extends Hr{constructor(){super(...arguments),this.parameters={}}load(t,r,i,a){const o=new this.Texture,c=new this.TypedArrayLoader(this.manager);c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(t,d=>{o.image.data=d instanceof ve?new Uint16Array(d.buffer):d;const{width:l,height:p,depth:m,...x}=this.parameters;l!=null&&(o.image.width=l),p!=null&&(o.image.height=p),"depth"in o.image&&m!=null&&(o.image.depth=m),o.type=cl(d),Object.assign(o,x),o.needsUpdate=!0,r(o)},i,a)}}function Is(e,t,r){return class extends ll{constructor(){super(...arguments),this.Texture=e,this.TypedArrayLoader=ol(t),this.parameters={...ul,...r}}}}function Ms(e,t){return Is(or,e,t)}function dl(e,t){return Is(Za,e,t)}function fl(e,t){return new(Ms(e,t))}function _a(e,t){return new(dl(e,t))}const tr=Mt.clamp;Mt.euclideanModulo;Mt.inverseLerp;const Bd=Mt.lerp,hl=Mt.degToRad;Mt.radToDeg;Mt.isPowerOfTwo;Mt.ceilPowerOfTwo;Mt.floorPowerOfTwo;Mt.normalize;function vl(e,t,r,i=0,a=1){return Mt.mapLinear(e,t,r,i,a)}function pl(e){return Math.min(Math.max(e,0),1)}function Qe(e){return(t,r)=>{t instanceof Er?Object.defineProperty(t,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[e])!=null},set(i){var a;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[e]="1"):(a=this.defines)==null||delete a[e],this.needsUpdate=!0)}}):Object.defineProperty(t,r,{enumerable:!0,get(){return this.defines.has(e)},set(i){i!==this[r]&&(i?this.defines.set(e,"1"):this.defines.delete(e),this.setChanged())}})}}function gl(e,{min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,a)=>{i instanceof Er?Object.defineProperty(i,a,{enumerable:!0,get(){var o;const c=(o=this.defines)==null?void 0:o[e];return c!=null?parseInt(c):0},set(o){const c=this[a];o!==c&&(this.defines??(this.defines={}),this.defines[e]=tr(o,t,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,a,{enumerable:!0,get(){const o=this.defines.get(e);return o!=null?parseInt(o):0},set(o){const c=this[a];o!==c&&(this.defines.set(e,tr(o,t,r).toFixed(0)),this.setChanged())}})}}function Od(e,{min:t=-1/0,max:r=1/0,precision:i=7}={}){return(a,o)=>{a instanceof Er?Object.defineProperty(a,o,{enumerable:!0,get(){var c;const d=(c=this.defines)==null?void 0:c[e];return d!=null?parseFloat(d):0},set(c){const d=this[o];c!==d&&(this.defines??(this.defines={}),this.defines[e]=tr(c,t,r).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(a,o,{enumerable:!0,get(){const c=this.defines.get(e);return c!=null?parseFloat(c):0},set(c){const d=this[o];c!==d&&(this.defines.set(e,tr(c,t,r).toFixed(i)),this.setChanged())}})}}function bd(e,{validate:t}={}){return(r,i)=>{r instanceof Er?Object.defineProperty(r,i,{enumerable:!0,get(){var a;return((a=this.defines)==null?void 0:a[e])??""},set(a){if(a!==this[i]){if((t==null?void 0:t(a))===!1){console.error(`Expression validation failed: ${a}`);return}this.defines??(this.defines={}),this.defines[e]=a,this.needsUpdate=!0}}}):Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines.get(e)??""},set(a){if(a!==this[i]){if((t==null?void 0:t(a))===!1){console.error(`Expression validation failed: ${a}`);return}this.defines.set(e,a),this.setChanged()}}})}}function Pd(e,...t){const r={};for(let i=0;i<t.length;i+=2){const a=t[i],o=t[i+1];for(const c of o)r[c]={enumerable:!0,get:()=>a[c],set:d=>{a[c]=d}}}return Object.defineProperties(e,r),e}function Ud(e,t,r){const i={};for(const a of r)i[a]={enumerable:!0,get:()=>t.uniforms[a].value,set:o=>{t.uniforms[a].value=o}};return Object.defineProperties(e,i),e}const ml=parseInt(wr.replace(/\D+/g,""));var ht=Uint8Array,qt=Uint16Array,Si=Uint32Array,Bs=new ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Os=new ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Al=new ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bs=function(e,t){for(var r=new qt(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var a=new Si(r[30]),i=1;i<30;++i)for(var o=r[i];o<r[i+1];++o)a[o]=o-r[i]<<5|i;return[r,a]},Ps=bs(Bs,2),Us=Ps[0],wl=Ps[1];Us[28]=258,wl[258]=28;var El=bs(Os,0),xl=El[0],Ls=new qt(32768);for(var xe=0;xe<32768;++xe){var Yt=(xe&43690)>>>1|(xe&21845)<<1;Yt=(Yt&52428)>>>2|(Yt&13107)<<2,Yt=(Yt&61680)>>>4|(Yt&3855)<<4,Ls[xe]=((Yt&65280)>>>8|(Yt&255)<<8)>>>1}var Nr=function(e,t,r){for(var i=e.length,a=0,o=new qt(t);a<i;++a)++o[e[a]-1];var c=new qt(t);for(a=0;a<t;++a)c[a]=c[a-1]+o[a-1]<<1;var d;{d=new qt(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var p=a<<4|e[a],m=t-e[a],x=c[e[a]-1]++<<m,I=x|(1<<m)-1;x<=I;++x)d[Ls[x]>>>l]=p}return d},kr=new ht(288);for(var xe=0;xe<144;++xe)kr[xe]=8;for(var xe=144;xe<256;++xe)kr[xe]=9;for(var xe=256;xe<280;++xe)kr[xe]=7;for(var xe=280;xe<288;++xe)kr[xe]=8;var Ns=new ht(32);for(var xe=0;xe<32;++xe)Ns[xe]=5;var Sl=Nr(kr,9),Cl=Nr(Ns,5),ei=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},Ct=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},ti=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Tl=function(e){return(e/8|0)+(e&7&&1)},yl=function(e,t,r){(r==null||r>e.length)&&(r=e.length);var i=new(e instanceof qt?qt:e instanceof Si?Si:ht)(r-t);return i.set(e.subarray(t,r)),i},Dl=function(e,t,r){var i=e.length;if(!i||r&&!r.l&&i<5)return t||new ht(0);var a=!t||r,o=!r||r.i;r||(r={}),t||(t=new ht(i*3));var c=function(Le){var wt=t.length;if(Le>wt){var ft=new ht(Math.max(wt*2,Le));ft.set(t),t=ft}},d=r.f||0,l=r.p||0,p=r.b||0,m=r.l,x=r.d,I=r.m,O=r.n,L=i*8;do{if(!m){r.f=d=Ct(e,l,1);var P=Ct(e,l+1,3);if(l+=3,P)if(P==1)m=Sl,x=Cl,I=9,O=5;else if(P==2){var W=Ct(e,l,31)+257,Z=Ct(e,l+10,15)+4,K=W+Ct(e,l+5,31)+1;l+=14;for(var B=new ht(K),J=new ht(19),H=0;H<Z;++H)J[Al[H]]=Ct(e,l+H*3,7);l+=Z*3;for(var De=ei(J),Be=(1<<De)-1,Fe=Nr(J,De),H=0;H<K;){var He=Fe[Ct(e,l,Be)];l+=He&15;var se=He>>>4;if(se<16)B[H++]=se;else{var pe=0,Oe=0;for(se==16?(Oe=3+Ct(e,l,3),l+=2,pe=B[H-1]):se==17?(Oe=3+Ct(e,l,7),l+=3):se==18&&(Oe=11+Ct(e,l,127),l+=7);Oe--;)B[H++]=pe}}var ut=B.subarray(0,W),Ce=B.subarray(W);I=ei(ut),O=ei(Ce),m=Nr(ut,I),x=Nr(Ce,O)}else throw"invalid block type";else{var se=Tl(l)+4,Ve=e[se-4]|e[se-3]<<8,Xe=se+Ve;if(Xe>i){if(o)throw"unexpected EOF";break}a&&c(p+Ve),t.set(e.subarray(se,Xe),p),r.b=p+=Ve,r.p=l=Xe*8;continue}if(l>L){if(o)throw"unexpected EOF";break}}a&&c(p+131072);for(var lt=(1<<I)-1,dt=(1<<O)-1,et=l;;et=l){var pe=m[ti(e,l)&lt],$=pe>>>4;if(l+=pe&15,l>L){if(o)throw"unexpected EOF";break}if(!pe)throw"invalid length/literal";if($<256)t[p++]=$;else if($==256){et=l,m=null;break}else{var tt=$-254;if($>264){var H=$-257,Re=Bs[H];tt=Ct(e,l,(1<<Re)-1)+Us[H],l+=Re}var Ke=x[ti(e,l)&dt],Ze=Ke>>>4;if(!Ke)throw"invalid distance";l+=Ke&15;var Ce=xl[Ze];if(Ze>3){var Re=Os[Ze];Ce+=ti(e,l)&(1<<Re)-1,l+=Re}if(l>L){if(o)throw"unexpected EOF";break}a&&c(p+131072);for(var Je=p+tt;p<Je;p+=4)t[p]=t[p-Ce],t[p+1]=t[p+1-Ce],t[p+2]=t[p+2-Ce],t[p+3]=t[p+3-Ce];p=Je}}r.l=m,r.p=et,r.b=p,m&&(d=1,r.m=I,r.d=x,r.n=O)}while(!d);return p==t.length?t:yl(t,0,p)},Rl=new ht(0),Il=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(e[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function qr(e,t){return Dl((Il(e),e.subarray(2,-4)),t)}var Ml=typeof TextDecoder<"u"&&new TextDecoder,Bl=0;try{Ml.decode(Rl,{stream:!0}),Bl=1}catch{}const Dr=ml>=152;class Ol extends qa{constructor(t){super(t),this.type=$e}parse(t){const r=Math.pow(2.7182818,2.2);function i(n,s){for(var u=0,f=0;f<65536;++f)(f==0||n[f>>3]&1<<(f&7))&&(s[u++]=f);for(var v=u-1;u<65536;)s[u++]=0;return v}function a(n){for(var s=0;s<16384;s++)n[s]={},n[s].len=0,n[s].lit=0,n[s].p=null}const o={l:0,c:0,lc:0};function c(n,s,u,f,v){for(;u<n;)s=s<<8|ie(f,v),u+=8;u-=n,o.l=s>>u&(1<<n)-1,o.c=s,o.lc=u}const d=new Array(59);function l(n){for(var s=0;s<=58;++s)d[s]=0;for(var s=0;s<65537;++s)d[n[s]]+=1;for(var u=0,s=58;s>0;--s){var f=u+d[s]>>1;d[s]=u,u=f}for(var s=0;s<65537;++s){var v=n[s];v>0&&(n[s]=v|d[v]++<<6)}}function p(n,s,u,f,v,h,A){for(var g=u,T=0,w=0;v<=h;v++){if(g.value-u.value>f)return!1;c(6,T,w,n,g);var S=o.l;if(T=o.c,w=o.lc,A[v]=S,S==63){if(g.value-u.value>f)throw"Something wrong with hufUnpackEncTable";c(8,T,w,n,g);var E=o.l+6;if(T=o.c,w=o.lc,v+E>h+1)throw"Something wrong with hufUnpackEncTable";for(;E--;)A[v++]=0;v--}else if(S>=59){var E=S-59+2;if(v+E>h+1)throw"Something wrong with hufUnpackEncTable";for(;E--;)A[v++]=0;v--}}l(A)}function m(n){return n&63}function x(n){return n>>6}function I(n,s,u,f){for(;s<=u;s++){var v=x(n[s]),h=m(n[s]);if(v>>h)throw"Invalid table entry";if(h>14){var A=f[v>>h-14];if(A.len)throw"Invalid table entry";if(A.lit++,A.p){var g=A.p;A.p=new Array(A.lit);for(var T=0;T<A.lit-1;++T)A.p[T]=g[T]}else A.p=new Array(1);A.p[A.lit-1]=s}else if(h)for(var w=0,T=1<<14-h;T>0;T--){var A=f[(v<<14-h)+w];if(A.len||A.p)throw"Invalid table entry";A.len=h,A.lit=s,w++}}return!0}const O={c:0,lc:0};function L(n,s,u,f){n=n<<8|ie(u,f),s+=8,O.c=n,O.lc=s}const P={c:0,lc:0};function W(n,s,u,f,v,h,A,g,T,w){if(n==s){f<8&&(L(u,f,v,A),u=O.c,f=O.lc),f-=8;var S=u>>f,S=new Uint8Array([S])[0];if(T.value+S>w)return!1;for(var E=g[T.value-1];S-- >0;)g[T.value++]=E}else if(T.value<w)g[T.value++]=n;else return!1;P.c=u,P.lc=f}function Z(n){return n&65535}function K(n){var s=Z(n);return s>32767?s-65536:s}const B={a:0,b:0};function J(n,s){var u=K(n),f=K(s),v=f,h=u+(v&1)+(v>>1),A=h,g=h-v;B.a=A,B.b=g}function H(n,s){var u=Z(n),f=Z(s),v=u-(f>>1)&65535,h=f+v-32768&65535;B.a=h,B.b=v}function De(n,s,u,f,v,h,A){for(var g=A<16384,T=u>v?v:u,w=1,S;w<=T;)w<<=1;for(w>>=1,S=w,w>>=1;w>=1;){for(var E=0,Q=E+h*(v-S),D=h*w,M=h*S,b=f*w,U=f*S,G,ee,Y,oe;E<=Q;E+=M){for(var z=E,Ue=E+f*(u-S);z<=Ue;z+=U){var le=z+b,ae=z+D,_e=ae+b;g?(J(n[z+s],n[ae+s]),G=B.a,Y=B.b,J(n[le+s],n[_e+s]),ee=B.a,oe=B.b,J(G,ee),n[z+s]=B.a,n[le+s]=B.b,J(Y,oe),n[ae+s]=B.a,n[_e+s]=B.b):(H(n[z+s],n[ae+s]),G=B.a,Y=B.b,H(n[le+s],n[_e+s]),ee=B.a,oe=B.b,H(G,ee),n[z+s]=B.a,n[le+s]=B.b,H(Y,oe),n[ae+s]=B.a,n[_e+s]=B.b)}if(u&w){var ae=z+D;g?J(n[z+s],n[ae+s]):H(n[z+s],n[ae+s]),G=B.a,n[ae+s]=B.b,n[z+s]=G}}if(v&w)for(var z=E,Ue=E+f*(u-S);z<=Ue;z+=U){var le=z+b;g?J(n[z+s],n[le+s]):H(n[z+s],n[le+s]),G=B.a,n[le+s]=B.b,n[z+s]=G}S=w,w>>=1}return E}function Be(n,s,u,f,v,h,A,g,T,w){for(var S=0,E=0,Q=g,D=Math.trunc(v.value+(h+7)/8);v.value<D;)for(L(S,E,u,v),S=O.c,E=O.lc;E>=14;){var M=S>>E-14&16383,b=s[M];if(b.len)E-=b.len,W(b.lit,A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;else{if(!b.p)throw"hufDecode issues";var U;for(U=0;U<b.lit;U++){for(var G=m(n[b.p[U]]);E<G&&v.value<D;)L(S,E,u,v),S=O.c,E=O.lc;if(E>=G&&x(n[b.p[U]])==(S>>E-G&(1<<G)-1)){E-=G,W(b.p[U],A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;break}}if(U==b.lit)throw"hufDecode issues"}}var ee=8-h&7;for(S>>=ee,E-=ee;E>0;){var b=s[S<<14-E&16383];if(b.len)E-=b.len,W(b.lit,A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;else throw"hufDecode issues"}return!0}function Fe(n,s,u,f,v,h){var A={value:0},g=u.value,T=ue(s,u),w=ue(s,u);u.value+=4;var S=ue(s,u);if(u.value+=4,T<0||T>=65537||w<0||w>=65537)throw"Something wrong with HUF_ENCSIZE";var E=new Array(65537),Q=new Array(16384);a(Q);var D=f-(u.value-g);if(p(n,s,u,D,T,w,E),S>8*(f-(u.value-g)))throw"Something wrong with hufUncompress";I(E,T,w,Q),Be(E,Q,n,s,u,S,w,h,v,A)}function He(n,s,u){for(var f=0;f<u;++f)s[f]=n[s[f]]}function se(n){for(var s=1;s<n.length;s++){var u=n[s-1]+n[s]-128;n[s]=u}}function pe(n,s){for(var u=0,f=Math.floor((n.length+1)/2),v=0,h=n.length-1;!(v>h||(s[v++]=n[u++],v>h));)s[v++]=n[f++]}function Oe(n){for(var s=n.byteLength,u=new Array,f=0,v=new DataView(n);s>0;){var h=v.getInt8(f++);if(h<0){var A=-h;s-=A+1;for(var g=0;g<A;g++)u.push(v.getUint8(f++))}else{var A=h;s-=2;for(var T=v.getUint8(f++),g=0;g<A+1;g++)u.push(T)}}return u}function ut(n,s,u,f,v,h){var A=new DataView(h.buffer),g=u[n.idx[0]].width,T=u[n.idx[0]].height,w=3,S=Math.floor(g/8),E=Math.ceil(g/8),Q=Math.ceil(T/8),D=g-(E-1)*8,M=T-(Q-1)*8,b={value:0},U=new Array(w),G=new Array(w),ee=new Array(w),Y=new Array(w),oe=new Array(w);for(let V=0;V<w;++V)oe[V]=s[n.idx[V]],U[V]=V<1?0:U[V-1]+E*Q,G[V]=new Float32Array(64),ee[V]=new Uint16Array(64),Y[V]=new Uint16Array(E*64);for(let V=0;V<Q;++V){var z=8;V==Q-1&&(z=M);var Ue=8;for(let X=0;X<E;++X){X==E-1&&(Ue=D);for(let F=0;F<w;++F)ee[F].fill(0),ee[F][0]=v[U[F]++],Ce(b,f,ee[F]),Ve(ee[F],G[F]),Xe(G[F]);lt(G);for(let F=0;F<w;++F)dt(G[F],Y[F],X*64)}let ne=0;for(let X=0;X<w;++X){const F=u[n.idx[X]].type;for(let Ee=8*V;Ee<8*V+z;++Ee){ne=oe[X][Ee];for(let qe=0;qe<S;++qe){const me=qe*64+(Ee&7)*8;A.setUint16(ne+0*2*F,Y[X][me+0],!0),A.setUint16(ne+1*2*F,Y[X][me+1],!0),A.setUint16(ne+2*2*F,Y[X][me+2],!0),A.setUint16(ne+3*2*F,Y[X][me+3],!0),A.setUint16(ne+4*2*F,Y[X][me+4],!0),A.setUint16(ne+5*2*F,Y[X][me+5],!0),A.setUint16(ne+6*2*F,Y[X][me+6],!0),A.setUint16(ne+7*2*F,Y[X][me+7],!0),ne+=8*2*F}}if(S!=E)for(let Ee=8*V;Ee<8*V+z;++Ee){const qe=oe[X][Ee]+8*S*2*F,me=S*64+(Ee&7)*8;for(let Ye=0;Ye<Ue;++Ye)A.setUint16(qe+Ye*2*F,Y[X][me+Ye],!0)}}}for(var le=new Uint16Array(g),A=new DataView(h.buffer),ae=0;ae<w;++ae){u[n.idx[ae]].decoded=!0;var _e=u[n.idx[ae]].type;if(u[ae].type==2)for(var St=0;St<T;++St){const ne=oe[ae][St];for(var we=0;we<g;++we)le[we]=A.getUint16(ne+we*2*_e,!0);for(var we=0;we<g;++we)A.setFloat32(ne+we*2*_e,C(le[we]),!0)}}}function Ce(n,s,u){for(var f,v=1;v<64;)f=s[n.value],f==65280?v=64:f>>8==255?v+=f&255:(u[v]=f,v++),n.value++}function Ve(n,s){s[0]=C(n[0]),s[1]=C(n[1]),s[2]=C(n[5]),s[3]=C(n[6]),s[4]=C(n[14]),s[5]=C(n[15]),s[6]=C(n[27]),s[7]=C(n[28]),s[8]=C(n[2]),s[9]=C(n[4]),s[10]=C(n[7]),s[11]=C(n[13]),s[12]=C(n[16]),s[13]=C(n[26]),s[14]=C(n[29]),s[15]=C(n[42]),s[16]=C(n[3]),s[17]=C(n[8]),s[18]=C(n[12]),s[19]=C(n[17]),s[20]=C(n[25]),s[21]=C(n[30]),s[22]=C(n[41]),s[23]=C(n[43]),s[24]=C(n[9]),s[25]=C(n[11]),s[26]=C(n[18]),s[27]=C(n[24]),s[28]=C(n[31]),s[29]=C(n[40]),s[30]=C(n[44]),s[31]=C(n[53]),s[32]=C(n[10]),s[33]=C(n[19]),s[34]=C(n[23]),s[35]=C(n[32]),s[36]=C(n[39]),s[37]=C(n[45]),s[38]=C(n[52]),s[39]=C(n[54]),s[40]=C(n[20]),s[41]=C(n[22]),s[42]=C(n[33]),s[43]=C(n[38]),s[44]=C(n[46]),s[45]=C(n[51]),s[46]=C(n[55]),s[47]=C(n[60]),s[48]=C(n[21]),s[49]=C(n[34]),s[50]=C(n[37]),s[51]=C(n[47]),s[52]=C(n[50]),s[53]=C(n[56]),s[54]=C(n[59]),s[55]=C(n[61]),s[56]=C(n[35]),s[57]=C(n[36]),s[58]=C(n[48]),s[59]=C(n[49]),s[60]=C(n[57]),s[61]=C(n[58]),s[62]=C(n[62]),s[63]=C(n[63])}function Xe(n){const s=.5*Math.cos(.7853975),u=.5*Math.cos(3.14159/16),f=.5*Math.cos(3.14159/8),v=.5*Math.cos(3*3.14159/16),h=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),g=.5*Math.cos(7*3.14159/16);for(var T=new Array(4),w=new Array(4),S=new Array(4),E=new Array(4),Q=0;Q<8;++Q){var D=Q*8;T[0]=f*n[D+2],T[1]=A*n[D+2],T[2]=f*n[D+6],T[3]=A*n[D+6],w[0]=u*n[D+1]+v*n[D+3]+h*n[D+5]+g*n[D+7],w[1]=v*n[D+1]-g*n[D+3]-u*n[D+5]-h*n[D+7],w[2]=h*n[D+1]-u*n[D+3]+g*n[D+5]+v*n[D+7],w[3]=g*n[D+1]-h*n[D+3]+v*n[D+5]-u*n[D+7],S[0]=s*(n[D+0]+n[D+4]),S[3]=s*(n[D+0]-n[D+4]),S[1]=T[0]+T[3],S[2]=T[1]-T[2],E[0]=S[0]+S[1],E[1]=S[3]+S[2],E[2]=S[3]-S[2],E[3]=S[0]-S[1],n[D+0]=E[0]+w[0],n[D+1]=E[1]+w[1],n[D+2]=E[2]+w[2],n[D+3]=E[3]+w[3],n[D+4]=E[3]-w[3],n[D+5]=E[2]-w[2],n[D+6]=E[1]-w[1],n[D+7]=E[0]-w[0]}for(var M=0;M<8;++M)T[0]=f*n[16+M],T[1]=A*n[16+M],T[2]=f*n[48+M],T[3]=A*n[48+M],w[0]=u*n[8+M]+v*n[24+M]+h*n[40+M]+g*n[56+M],w[1]=v*n[8+M]-g*n[24+M]-u*n[40+M]-h*n[56+M],w[2]=h*n[8+M]-u*n[24+M]+g*n[40+M]+v*n[56+M],w[3]=g*n[8+M]-h*n[24+M]+v*n[40+M]-u*n[56+M],S[0]=s*(n[M]+n[32+M]),S[3]=s*(n[M]-n[32+M]),S[1]=T[0]+T[3],S[2]=T[1]-T[2],E[0]=S[0]+S[1],E[1]=S[3]+S[2],E[2]=S[3]-S[2],E[3]=S[0]-S[1],n[0+M]=E[0]+w[0],n[8+M]=E[1]+w[1],n[16+M]=E[2]+w[2],n[24+M]=E[3]+w[3],n[32+M]=E[3]-w[3],n[40+M]=E[2]-w[2],n[48+M]=E[1]-w[1],n[56+M]=E[0]-w[0]}function lt(n){for(var s=0;s<64;++s){var u=n[0][s],f=n[1][s],v=n[2][s];n[0][s]=u+1.5747*v,n[1][s]=u-.1873*f-.4682*v,n[2][s]=u+1.8556*f}}function dt(n,s,u){for(var f=0;f<64;++f)s[u+f]=hn.toHalfFloat(et(n[f]))}function et(n){return n<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(r,Math.abs(n)-1)}function $(n){return new DataView(n.array.buffer,n.offset.value,n.size)}function tt(n){var s=n.viewer.buffer.slice(n.offset.value,n.offset.value+n.size),u=new Uint8Array(Oe(s)),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Re(n){var s=n.array.slice(n.offset.value,n.offset.value+n.size),u=qr(s),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Ke(n){for(var s=n.viewer,u={value:n.offset.value},f=new Uint16Array(n.width*n.scanlineBlockSize*(n.channels*n.type)),v=new Uint8Array(8192),h=0,A=new Array(n.channels),g=0;g<n.channels;g++)A[g]={},A[g].start=h,A[g].end=A[g].start,A[g].nx=n.width,A[g].ny=n.lines,A[g].size=n.type,h+=A[g].nx*A[g].ny*A[g].size;var T=Pe(s,u),w=Pe(s,u);if(w>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(T<=w)for(var g=0;g<w-T+1;g++)v[g+T]=te(s,u);var S=new Uint16Array(65536),E=i(v,S),Q=ue(s,u);Fe(n.array,s,u,Q,f,h);for(var g=0;g<n.channels;++g)for(var D=A[g],M=0;M<A[g].size;++M)De(f,D.start+M,D.nx,D.size,D.ny,D.nx*D.size,E);He(S,f,h);for(var b=0,U=new Uint8Array(f.buffer.byteLength),G=0;G<n.lines;G++)for(var ee=0;ee<n.channels;ee++){var D=A[ee],Y=D.nx*D.size,oe=new Uint8Array(f.buffer,D.end*2,Y*2);U.set(oe,b),b+=Y*2,D.end+=Y}return new DataView(U.buffer)}function Ze(n){var s=n.array.slice(n.offset.value,n.offset.value+n.size),u=qr(s);const f=n.lines*n.channels*n.width,v=n.type==1?new Uint16Array(f):new Uint32Array(f);let h=0,A=0;const g=new Array(4);for(let T=0;T<n.lines;T++)for(let w=0;w<n.channels;w++){let S=0;switch(n.type){case 1:g[0]=h,g[1]=g[0]+n.width,h=g[1]+n.width;for(let E=0;E<n.width;++E){const Q=u[g[0]++]<<8|u[g[1]++];S+=Q,v[A]=S,A++}break;case 2:g[0]=h,g[1]=g[0]+n.width,g[2]=g[1]+n.width,h=g[2]+n.width;for(let E=0;E<n.width;++E){const Q=u[g[0]++]<<24|u[g[1]++]<<16|u[g[2]++]<<8;S+=Q,v[A]=S,A++}break}}return new DataView(v.buffer)}function Je(n){var s=n.viewer,u={value:n.offset.value},f=new Uint8Array(n.width*n.lines*(n.channels*n.type*2)),v={version:j(s,u),unknownUncompressedSize:j(s,u),unknownCompressedSize:j(s,u),acCompressedSize:j(s,u),dcCompressedSize:j(s,u),rleCompressedSize:j(s,u),rleUncompressedSize:j(s,u),rleRawSize:j(s,u),totalAcUncompressedCount:j(s,u),totalDcUncompressedCount:j(s,u),acCompression:j(s,u)};if(v.version<2)throw"EXRLoader.parse: "+xt.compression+" version "+v.version+" is unsupported";for(var h=new Array,A=Pe(s,u)-2;A>0;){var g=Le(s.buffer,u),T=te(s,u),w=T>>2&3,S=(T>>4)-1,E=new Int8Array([S])[0],Q=te(s,u);h.push({name:g,index:E,type:Q,compression:w}),A-=g.length+3}for(var D=xt.channels,M=new Array(n.channels),b=0;b<n.channels;++b){var U=M[b]={},G=D[b];U.name=G.name,U.compression=0,U.decoded=!1,U.type=G.pixelType,U.pLinear=G.pLinear,U.width=n.width,U.height=n.lines}for(var ee={idx:new Array(3)},Y=0;Y<n.channels;++Y)for(var U=M[Y],b=0;b<h.length;++b){var oe=h[b];U.name==oe.name&&(U.compression=oe.compression,oe.index>=0&&(ee.idx[oe.index]=Y),U.offset=Y)}if(v.acCompressedSize>0)switch(v.acCompression){case 0:var le=new Uint16Array(v.totalAcUncompressedCount);Fe(n.array,s,u,v.acCompressedSize,le,v.totalAcUncompressedCount);break;case 1:var z=n.array.slice(u.value,u.value+v.totalAcUncompressedCount),Ue=qr(z),le=new Uint16Array(Ue.buffer);u.value+=v.totalAcUncompressedCount;break}if(v.dcCompressedSize>0){var ae={array:n.array,offset:u,size:v.dcCompressedSize},_e=new Uint16Array(Re(ae).buffer);u.value+=v.dcCompressedSize}if(v.rleRawSize>0){var z=n.array.slice(u.value,u.value+v.rleCompressedSize),Ue=qr(z),St=Oe(Ue.buffer);u.value+=v.rleCompressedSize}for(var we=0,V=new Array(M.length),b=0;b<V.length;++b)V[b]=new Array;for(var ne=0;ne<n.lines;++ne)for(var X=0;X<M.length;++X)V[X].push(we),we+=M[X].width*n.type*2;ut(ee,V,M,le,_e,f);for(var b=0;b<M.length;++b){var U=M[b];if(!U.decoded)switch(U.compression){case 2:for(var F=0,Ee=0,ne=0;ne<n.lines;++ne){for(var qe=V[b][F],me=0;me<U.width;++me){for(var Ye=0;Ye<2*U.type;++Ye)f[qe++]=St[Ee+Ye*U.width*U.height];Ee++}F++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(f.buffer)}function Le(n,s){for(var u=new Uint8Array(n),f=0;u[s.value+f]!=0;)f+=1;var v=new TextDecoder().decode(u.slice(s.value,s.value+f));return s.value=s.value+f+1,v}function wt(n,s,u){var f=new TextDecoder().decode(new Uint8Array(n).slice(s.value,s.value+u));return s.value=s.value+u,f}function ft(n,s){var u=Me(n,s),f=ue(n,s);return[u,f]}function R(n,s){var u=ue(n,s),f=ue(n,s);return[u,f]}function Me(n,s){var u=n.getInt32(s.value,!0);return s.value=s.value+4,u}function ue(n,s){var u=n.getUint32(s.value,!0);return s.value=s.value+4,u}function ie(n,s){var u=n[s.value];return s.value=s.value+1,u}function te(n,s){var u=n.getUint8(s.value);return s.value=s.value+1,u}const j=function(n,s){let u;return"getBigInt64"in DataView.prototype?u=Number(n.getBigInt64(s.value,!0)):u=n.getUint32(s.value+4,!0)+Number(n.getUint32(s.value,!0)<<32),s.value+=8,u};function k(n,s){var u=n.getFloat32(s.value,!0);return s.value+=4,u}function be(n,s){return hn.toHalfFloat(k(n,s))}function C(n){var s=(n&31744)>>10,u=n&1023;return(n>>15?-1:1)*(s?s===31?u?NaN:1/0:Math.pow(2,s-15)*(1+u/1024):6103515625e-14*(u/1024))}function Pe(n,s){var u=n.getUint16(s.value,!0);return s.value+=2,u}function Kt(n,s){return C(Pe(n,s))}function Bt(n,s,u,f){for(var v=u.value,h=[];u.value<v+f-1;){var A=Le(s,u),g=Me(n,u),T=te(n,u);u.value+=3;var w=Me(n,u),S=Me(n,u);h.push({name:A,pixelType:g,pLinear:T,xSampling:w,ySampling:S})}return u.value+=1,h}function Ln(n,s){var u=k(n,s),f=k(n,s),v=k(n,s),h=k(n,s),A=k(n,s),g=k(n,s),T=k(n,s),w=k(n,s);return{redX:u,redY:f,greenX:v,greenY:h,blueX:A,blueY:g,whiteX:T,whiteY:w}}function Nn(n,s){var u=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],f=te(n,s);return u[f]}function _n(n,s){var u=ue(n,s),f=ue(n,s),v=ue(n,s),h=ue(n,s);return{xMin:u,yMin:f,xMax:v,yMax:h}}function Fn(n,s){var u=["INCREASING_Y"],f=te(n,s);return u[f]}function Hn(n,s){var u=k(n,s),f=k(n,s);return[u,f]}function Gn(n,s){var u=k(n,s),f=k(n,s),v=k(n,s);return[u,f,v]}function zn(n,s,u,f,v){if(f==="string"||f==="stringvector"||f==="iccProfile")return wt(s,u,v);if(f==="chlist")return Bt(n,s,u,v);if(f==="chromaticities")return Ln(n,u);if(f==="compression")return Nn(n,u);if(f==="box2i")return _n(n,u);if(f==="lineOrder")return Fn(n,u);if(f==="float")return k(n,u);if(f==="v2f")return Hn(n,u);if(f==="v3f")return Gn(n,u);if(f==="int")return Me(n,u);if(f==="rational")return ft(n,u);if(f==="timecode")return R(n,u);if(f==="preview")return u.value+=v,"skipped";u.value+=v}function kn(n,s,u){const f={};if(n.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";f.version=n.getUint8(4);const v=n.getUint8(5);f.spec={singleTile:!!(v&2),longName:!!(v&4),deepFormat:!!(v&8),multiPart:!!(v&16)},u.value=8;for(var h=!0;h;){var A=Le(s,u);if(A==0)h=!1;else{var g=Le(s,u),T=ue(n,u),w=zn(n,s,u,g,T);w===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${g}'.`):f[A]=w}}if((v&-5)!=0)throw console.error("EXRHeader:",f),"THREE.EXRLoader: provided file is currently unsupported.";return f}function Qn(n,s,u,f,v){const h={size:0,viewer:s,array:u,offset:f,width:n.dataWindow.xMax-n.dataWindow.xMin+1,height:n.dataWindow.yMax-n.dataWindow.yMin+1,channels:n.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:n.channels[0].pixelType,uncompress:null,getter:null,format:null,[Dr?"colorSpace":"encoding"]:null};switch(n.compression){case"NO_COMPRESSION":h.lines=1,h.uncompress=$;break;case"RLE_COMPRESSION":h.lines=1,h.uncompress=tt;break;case"ZIPS_COMPRESSION":h.lines=1,h.uncompress=Re;break;case"ZIP_COMPRESSION":h.lines=16,h.uncompress=Re;break;case"PIZ_COMPRESSION":h.lines=32,h.uncompress=Ke;break;case"PXR24_COMPRESSION":h.lines=16,h.uncompress=Ze;break;case"DWAA_COMPRESSION":h.lines=32,h.uncompress=Je;break;case"DWAB_COMPRESSION":h.lines=256,h.uncompress=Je;break;default:throw"EXRLoader.parse: "+n.compression+" is unsupported"}if(h.scanlineBlockSize=h.lines,h.type==1)switch(v){case ze:h.getter=Kt,h.inputSize=2;break;case $e:h.getter=Pe,h.inputSize=2;break}else if(h.type==2)switch(v){case ze:h.getter=k,h.inputSize=4;break;case $e:h.getter=be,h.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+h.type+" for "+n.compression+".";h.blockCount=(n.dataWindow.yMax+1)/h.scanlineBlockSize;for(var A=0;A<h.blockCount;A++)j(s,f);h.outputChannels=h.channels==3?4:h.channels;const g=h.width*h.height*h.outputChannels;switch(v){case ze:h.byteArray=new Float32Array(g),h.channels<h.outputChannels&&h.byteArray.fill(1,0,g);break;case $e:h.byteArray=new Uint16Array(g),h.channels<h.outputChannels&&h.byteArray.fill(15360,0,g);break;default:console.error("THREE.EXRLoader: unsupported type: ",v);break}return h.bytesPerLine=h.width*h.inputSize*h.channels,h.outputChannels==4?h.format=cr:h.format=Hi,Dr?h.colorSpace="srgb-linear":h.encoding=3e3,h}const Ut=new DataView(t),Yn=new Uint8Array(t),Et={value:0},xt=kn(Ut,t,Et),N=Qn(xt,Ut,Yn,Et,this.type),Cr={value:0},Vn={R:0,G:1,B:2,A:3,Y:0};for(let n=0;n<N.height/N.scanlineBlockSize;n++){const s=ue(Ut,Et);N.size=ue(Ut,Et),N.lines=s+N.scanlineBlockSize>N.height?N.height-s:N.scanlineBlockSize;const u=N.size<N.lines*N.bytesPerLine?N.uncompress(N):$(N);Et.value+=N.size;for(let f=0;f<N.scanlineBlockSize;f++){const v=f+n*N.scanlineBlockSize;if(v>=N.height)break;for(let h=0;h<N.channels;h++){const A=Vn[xt.channels[h].name];for(let g=0;g<N.width;g++){Cr.value=(f*(N.channels*N.width)+h*N.width+g)*N.inputSize;const T=(N.height-1-v)*(N.width*N.outputChannels)+g*N.outputChannels+A;N.byteArray[T]=N.getter(u,Cr)}}}}return{header:xt,width:N.width,height:N.height,data:N.byteArray,format:N.format,[Dr?"colorSpace":"encoding"]:N[Dr?"colorSpace":"encoding"],type:this.type}}setDataType(t){return this.type=t,this}load(t,r,i,a){function o(c,d){Dr?c.colorSpace=d.colorSpace:c.encoding=d.encoding,c.minFilter=Ne,c.magFilter=Ne,c.generateMipmaps=!1,c.flipY=!1,r&&r(c,d)}return super.load(t,o,i,a)}}class bl extends Hr{setDepth(t){return this.depth=t,this}load(t,r,i,a){const o=new Ol(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,c=>{const{data:d,width:l,height:p}=c.image,m=this.depth??Math.sqrt(p),x=new or(d,l,p/m,m);x.type=c.type,x.format=c.format,x.colorSpace=c.colorSpace,x.needsUpdate=!0;try{r(x)}catch(I){a!=null?a(I):console.error(I),this.manager.itemError(t)}},i,a)}}const ri=1e-6,$r=new _,en=new _,Lt=new _,Rr=new _,ni=new _,Pl=new _,Ul=new ye,Ll=new xo,Nl=new So;class _s{constructor(t=0,r=0,i=0,a=0){this.distance=t,this.heading=r,this.pitch=i,this.roll=a}get distance(){return this._distance}set distance(t){this._distance=Math.max(t,ri)}get pitch(){return this._pitch}set pitch(t){this._pitch=tr(t,-Math.PI/2+ri,Math.PI/2-ri)}set(t,r,i,a){return this.distance=t,this.heading=r,this.pitch=i,a!=null&&(this.roll=a),this}clone(){return new _s(this.distance,this.heading,this.pitch,this.roll)}copy(t){return this.distance=t.distance,this.heading=t.heading,this.pitch=t.pitch,this.roll=t.roll,this}equals(t){return t.distance===this.distance&&t.heading===this.heading&&t.pitch===this.pitch&&t.roll===this.roll}decompose(t,r,i,a,o=Gt.WGS84){o.getEastNorthUpVectors(t,$r,en,Lt),a==null||a.copy(Lt);const c=Rr.copy($r).multiplyScalar(Math.cos(this.heading)).add(ni.copy(en).multiplyScalar(Math.sin(this.heading))).multiplyScalar(Math.cos(this.pitch)).add(ni.copy(Lt).multiplyScalar(Math.sin(this.pitch))).normalize().multiplyScalar(this.distance);if(r.copy(t).sub(c),this.roll!==0){const d=Rr.copy(t).sub(r).normalize();Lt.applyQuaternion(Ll.setFromAxisAngle(d,this.roll))}i.setFromRotationMatrix(Ul.lookAt(r,t,Lt))}setFromCamera(t,r=Gt.WGS84){const i=Rr.setFromMatrixPosition(t.matrixWorld),a=ni.set(0,0,.5).unproject(t).sub(i).normalize(),o=r.getIntersection(Nl.set(i,a));if(o==null)return;this.distance=i.distanceTo(o),r.getEastNorthUpVectors(o,$r,en,Lt),this.heading=Math.atan2(en.dot(a),$r.dot(a)),this.pitch=Math.asin(Lt.dot(a));const c=Rr.copy(t.up).applyQuaternion(t.quaternion),d=Pl.copy(a).multiplyScalar(-c.dot(a)).add(c).normalize(),l=Rr.copy(a).multiplyScalar(-Lt.dot(a)).add(Lt).normalize(),p=l.dot(d),m=a.dot(l.cross(d));return this.roll=Math.atan2(m,p),this}}const _l=/^[ \t]*#include +"([\w\d./]+)"/gm;function zt(e,t){return e.replace(_l,(r,i)=>{const a=i.split("/").reduce((o,c)=>typeof o!="string"&&o!=null?o[c]:void 0,t);if(typeof a!="string")throw new Error(`Could not find include for ${i}.`);return zt(a,t)})}let tn;function Fl(){if(tn!=null)return tn;const e=new Uint32Array([268435456]);return tn=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)[0]===0,tn}function Hl(e,t,r,i=!0){if(i===Fl())return new t(e);const a=Object.assign(new DataView(e),{getFloat16(c,d){return il(this,c,d)}}),o=new t(a.byteLength/t.BYTES_PER_ELEMENT);for(let c=0,d=0;c<o.length;++c,d+=t.BYTES_PER_ELEMENT)o[c]=a[r](d,i);return o}const Gl=e=>new Uint8Array(e),ii=(e,t)=>Hl(e,ve,"getFloat16",t),Ld=Ms(Gl,{format:Hi,minFilter:bt,magFilter:bt,wrapS:Wn,wrapT:Wn,wrapR:Wn,width:su,height:ou,depth:cu}),zl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(e,t,r,i){let a="";for(let o=parseInt(t);o<parseInt(r);++o)a+=i.replace(/\[\s*i\s*\]/g,"["+o+"]").replace(/UNROLLED_LOOP_INDEX/g,`${o}`);return a}function Ql(e){return e.replace(zl,kl)}const Yl=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Vl=`// cSpell:words logdepthbuf

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
`,Xl=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,Wl=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,jl=`#if !defined(saturate)
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
`,Kl=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Zl=`float raySphereFirstIntersection(
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
`,Jl=`vec3 screenToView(
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
`,ql=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,$l=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,e0=Yl,Ji=Vl,Nd=Xl,t0=Wl,r0=jl,Fs=Kl,Hs=Zl,Gs=Jl,n0=ql,i0=$l,qi=`// Based on the following work and adapted to Three.js.
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
`,vr=`uniform vec3 u_solar_irradiance;
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
`,a0=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function s0(e,t){if(t!=null)for(const r of a0){const i=t[r];i!=null&&(e[r]instanceof _?e[r].copy(i):e[r]=i)}}const Ci=class{constructor(t){this.solarIrradiance=new _(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new _(.005802,.013558,.0331),this.mieScattering=new _(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(hl(120)),this.skyRadianceToLuminance=new _(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new _(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new _(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new _,this.sunRadianceToRelativeLuminance=new _,s0(this,t);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};Ci.DEFAULT=new Ci;let Qr=Ci;const Bn=64,On=16,$i=32,ea=128,ta=32,ra=8,o0=ra*ta,c0=ea,Fa=$i,bn=256,Pn=64,ur=1/1e3,u0=new _;function na(e,t,r,i,a=!0){const o=r.projectOnSurface(e,u0);return o!=null?r.getOsculatingSphereCenter(!a||o.lengthSq()<e.lengthSq()?o:e,t,i):i.setScalar(0)}const l0=`precision highp sampler2DArray;

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
`,d0=`uniform mat4 inverseViewMatrix;
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
`,zs=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var f0=Object.defineProperty,mt=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&f0(t,r,a),a};const h0=new _,v0=new _,p0=new nu,g0={blendFunction:q.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:Gt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class At extends jt{constructor(t=new Ja,r,i=Qr.DEFAULT){const{blendFunction:a,normalBuffer:o=null,octEncodedNormal:c,reconstructNormal:d,irradianceTexture:l=null,scatteringTexture:p=null,transmittanceTexture:m=null,ellipsoid:x,correctAltitude:I,correctGeometricError:O,photometric:L,sunDirection:P,sunIrradiance:W,skyIrradiance:Z,transmittance:K,inscatter:B,irradianceScale:J,sky:H,sun:De,moon:Be,moonDirection:Fe,moonAngularRadius:He,lunarRadianceScale:se}={...g0,...r};super("AerialPerspectiveEffect",Ql(zt(l0,{core:{depth:Ji,packing:Fs,math:r0,transform:Gs,raySphereIntersection:Hs,cascadedShadowMaps:e0,interleavedGradientNoise:t0,vogelDisk:i0},parameters:vr,functions:qi,sky:zs})),{blendFunction:a,vertexShader:zt(d0,{parameters:vr}),attributes:ot.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new y(o),projectionMatrix:new y(new ye),viewMatrix:new y(new ye),inverseProjectionMatrix:new y(new ye),inverseViewMatrix:new y(new ye),cameraPosition:new y(new _),bottomRadius:new y(i.bottomRadius),ellipsoidRadii:new y(new _),ellipsoidCenter:new y(new _),inverseEllipsoidMatrix:new y(new ye),altitudeCorrection:new y(new _),sunDirection:new y((P==null?void 0:P.clone())??new _),irradianceScale:new y(J),idealSphereAlpha:new y(0),moonDirection:new y((Fe==null?void 0:Fe.clone())??new _),moonAngularRadius:new y(He),lunarRadianceScale:new y(se),overlayBuffer:new y(null),shadowBuffer:new y(null),shadowMapSize:new y(new Ie),shadowIntervals:new y([]),shadowMatrices:new y([]),inverseShadowMatrices:new y([]),shadowFar:new y(0),shadowTopHeight:new y(0),shadowRadius:new y(3),stbnTexture:new y(null),frame:new y(0),shadowLengthBuffer:new y(null),u_solar_irradiance:new y(i.solarIrradiance),u_sun_angular_radius:new y(i.sunAngularRadius),u_bottom_radius:new y(i.bottomRadius*ur),u_top_radius:new y(i.topRadius*ur),u_rayleigh_scattering:new y(i.rayleighScattering),u_mie_scattering:new y(i.mieScattering),u_mie_phase_function_g:new y(i.miePhaseFunctionG),u_mu_s_min:new y(i.muSMin),u_irradiance_texture:new y(l),u_scattering_texture:new y(p),u_single_mie_scattering_texture:new y(p),u_transmittance_texture:new y(m)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",bn.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Pn.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",$i.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",ea.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",ta.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",ra.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Bn.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",On.toFixed(0)],["METER_TO_LENGTH_UNIT",ur.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(pe=>pe.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(pe=>pe.toFixed(12)).join(",")})`]])}),this.camera=t,this.atmosphere=i,this.ellipsoidMatrix=new ye,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=c,this.reconstructNormal=d,this.ellipsoid=x,this.correctAltitude=I,this.correctGeometricError=O,this.photometric=L,this.sunIrradiance=W,this.skyIrradiance=Z,this.transmittance=K,this.inscatter=B,this.sky=H,this.sun=De,this.moon=Be}get mainCamera(){return this.camera}set mainCamera(t){this.camera=t}copyCameraSettings(t){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:a,matrixWorld:o}=t,c=this.uniforms;c.get("projectionMatrix").value.copy(r),c.get("viewMatrix").value.copy(i),c.get("inverseProjectionMatrix").value.copy(a),c.get("inverseViewMatrix").value.copy(o);const d=t.getWorldPosition(c.get("cameraPosition").value),l=c.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),p=h0.copy(d).applyMatrix4(l).sub(c.get("ellipsoidCenter").value);try{const x=p0.setFromECEF(p).height,I=v0.set(0,this.ellipsoid.maximumRadius,-x).applyMatrix4(r);c.get("idealSphereAlpha").value=pl(vl(I.y,41.5,13.8,0,1))}catch{return}const m=c.get("altitudeCorrection");this.correctAltitude?na(p,this.atmosphere.bottomRadius,this.ellipsoid,m.value):m.value.setScalar(0)}updateComposition(){const{uniforms:t,defines:r,overlay:i,shadow:a,shadowLength:o}=this,c=r.has("HAS_OVERLAY"),d=i!=null;d!==c&&(d?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),this.setChanged()),d&&(t.get("overlayBuffer").value=i.map);const l=r.has("HAS_SHADOW"),p=a!=null;if(p!==l&&(p?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),this.setChanged()),p){const I=r.get("SHADOW_CASCADE_COUNT"),O=`${a.cascadeCount}`;I!==O&&(r.set("SHADOW_CASCADE_COUNT",a.cascadeCount.toFixed(0)),this.setChanged()),t.get("shadowBuffer").value=a.map,t.get("shadowMapSize").value=a.mapSize,t.get("shadowIntervals").value=a.intervals,t.get("shadowMatrices").value=a.matrices,t.get("inverseShadowMatrices").value=a.inverseMatrices,t.get("shadowFar").value=a.far,t.get("shadowTopHeight").value=a.topHeight}const m=r.has("HAS_SHADOW_LENGTH"),x=o!=null;x!==m&&(x?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),this.setChanged()),x&&(t.get("shadowLengthBuffer").value=o.map)}update(t,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(t){this.uniforms.get("normalBuffer").value=t}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(t){this.uniforms.get("u_irradiance_texture").value=t}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(t){this.uniforms.get("u_scattering_texture").value=t,this.uniforms.get("u_single_mie_scattering_texture").value=t}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(t){this.uniforms.get("u_transmittance_texture").value=t}get ellipsoid(){return this._ellipsoid}set ellipsoid(t){this._ellipsoid=t,this.uniforms.get("ellipsoidRadii").value.copy(t.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(t){this.uniforms.get("irradianceScale").value=t}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(t){this.uniforms.get("moonAngularRadius").value=t}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(t){this.uniforms.get("lunarRadianceScale").value=t}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(t){this.uniforms.get("stbnTexture").value=t}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(t){this.uniforms.get("shadowRadius").value=t}}mt([Qe("OCT_ENCODED_NORMAL")],At.prototype,"octEncodedNormal");mt([Qe("RECONSTRUCT_NORMAL")],At.prototype,"reconstructNormal");mt([Qe("CORRECT_GEOMETRIC_ERROR")],At.prototype,"correctGeometricError");mt([Qe("PHOTOMETRIC")],At.prototype,"photometric");mt([Qe("SUN_IRRADIANCE")],At.prototype,"sunIrradiance");mt([Qe("SKY_IRRADIANCE")],At.prototype,"skyIrradiance");mt([Qe("TRANSMITTANCE")],At.prototype,"transmittance");mt([Qe("INSCATTER")],At.prototype,"inscatter");mt([Qe("SKY")],At.prototype,"sky");mt([Qe("SUN")],At.prototype,"sun");mt([Qe("MOON")],At.prototype,"moon");mt([gl("SHADOW_SAMPLE_COUNT",{min:1,max:16})],At.prototype,"shadowSampleCount");var m0=Object.defineProperty,A0=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&m0(t,r,a),a};const w0=new _;function E0(e,t){let r="",i="";for(let a=1;a<t;++a)r+=`layout(location = ${a}) out float renderTarget${a};
`,i+=`renderTarget${a} = 0.0;
`;return e.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const ia={ellipsoid:Gt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class aa extends Io{constructor(t,r=Qr.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:a=null,transmittanceTexture:o=null,ellipsoid:c,correctAltitude:d,photometric:l,sunDirection:p,sunAngularRadius:m,renderTargetCount:x,...I}={...ia,...t};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...I,uniforms:{cameraPosition:new y(new _),ellipsoidCenter:new y(new _),inverseEllipsoidMatrix:new y(new ye),altitudeCorrection:new y(new _),sunDirection:new y((p==null?void 0:p.clone())??new _),u_solar_irradiance:new y(r.solarIrradiance),u_sun_angular_radius:new y(m??r.sunAngularRadius),u_bottom_radius:new y(r.bottomRadius*ur),u_top_radius:new y(r.topRadius*ur),u_rayleigh_scattering:new y(r.rayleighScattering),u_mie_scattering:new y(r.mieScattering),u_mie_phase_function_g:new y(r.miePhaseFunctionG),u_mu_s_min:new y(r.muSMin),u_irradiance_texture:new y(i),u_scattering_texture:new y(a),u_single_mie_scattering_texture:new y(a),u_transmittance_texture:new y(o),...I.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:bn.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Pn.toFixed(0),SCATTERING_TEXTURE_R_SIZE:$i.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:ea.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:ta.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:ra.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Bn.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:On.toFixed(0),METER_TO_LENGTH_UNIT:ur.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(O=>O.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(O=>O.toFixed(12)).join(",")})`,...I.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new ye,this.atmosphere=r,this.ellipsoid=c,this.correctAltitude=d,this.photometric=l,this.renderTargetCount=x}copyCameraSettings(t){const r=this.uniforms,i=t.getWorldPosition(r.cameraPosition.value),a=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),o=w0.copy(i).applyMatrix4(a).sub(r.ellipsoidCenter.value),c=r.altitudeCorrection.value;this.correctAltitude?na(o,this.atmosphere.bottomRadius,this.ellipsoid,c):c.setScalar(0)}onBeforeCompile(t,r){t.fragmentShader=E0(t.fragmentShader,this.renderTargetCount)}onBeforeRender(t,r,i,a,o,c){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(t){this.uniforms.u_irradiance_texture.value=t}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(t){this.uniforms.u_scattering_texture.value=t,this.uniforms.u_single_mie_scattering_texture.value=t}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(t){this.uniforms.u_transmittance_texture.value=t}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(t){this.uniforms.u_sun_angular_radius.value=t}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(t){t!==this.renderTargetCount&&(this._renderTargetCount=t,this.needsUpdate=!0)}}A0([Qe("PHOTOMETRIC")],aa.prototype,"photometric");/**
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
 */const x0=173.1446326846693,S0=14959787069098932e-8,pr=.017453292519943295,C0=365.24217,Ha=new Date("2000-01-01T12:00:00Z"),_t=2*Math.PI,Vt=3600*(180/Math.PI),ar=484813681109536e-20,T0=180*60*60,y0=2*T0,D0=6378.1366,R0=D0/S0,I0=81.30056,sa=.0002959122082855911,Ti=2825345909524226e-22,yi=8459715185680659e-23,Di=1292024916781969e-23,Ri=1524358900784276e-23;function ai(e){if(!Number.isFinite(e))throw console.trace(),`Value is not a finite number: ${e}`;return e}function nr(e){return e-Math.floor(e)}var ge;(function(e){e.Sun="Sun",e.Moon="Moon",e.Mercury="Mercury",e.Venus="Venus",e.Earth="Earth",e.Mars="Mars",e.Jupiter="Jupiter",e.Saturn="Saturn",e.Uranus="Uranus",e.Neptune="Neptune",e.Pluto="Pluto",e.SSB="SSB",e.EMB="EMB",e.Star1="Star1",e.Star2="Star2",e.Star3="Star3",e.Star4="Star4",e.Star5="Star5",e.Star6="Star6",e.Star7="Star7",e.Star8="Star8"})(ge||(ge={}));const M0=[ge.Star1,ge.Star2,ge.Star3,ge.Star4,ge.Star5,ge.Star6,ge.Star7,ge.Star8],B0=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function O0(e){const t=M0.indexOf(e);return t>=0?B0[t]:null}function ks(e){const t=O0(e);return t&&t.dist>0?t:null}var kt;(function(e){e[e.From2000=0]="From2000",e[e.Into2000=1]="Into2000"})(kt||(kt={}));const sr={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function b0(e){var t,r,i,a,o,c,d;const l=2e3+(e-14)/C0;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,r=t*t,i=t*r,a=r*r,o=r*i,c=i*i,10583.6-1014.41*t+33.78311*r-5.952053*i-.1798452*a+.022174192*o+.0090316521*c):l<1600?(t=(l-1e3)/100,r=t*t,i=t*r,a=r*r,o=r*i,c=i*i,1574.2-556.01*t+71.23472*r+.319781*i-.8503463*a-.005050998*o+.0083572073*c):l<1700?(t=l-1600,r=t*t,i=t*r,120-.9808*t-.01532*r+i/7129):l<1800?(t=l-1700,r=t*t,i=t*r,a=r*r,8.83+.1603*t-.0059285*r+13336e-8*i-a/1174e3):l<1860?(t=l-1800,r=t*t,i=t*r,a=r*r,o=r*i,c=i*i,d=i*a,13.72-.332447*t+.0068612*r+.0041116*i-37436e-8*a+121272e-10*o-1699e-10*c+875e-12*d):l<1900?(t=l-1860,r=t*t,i=t*r,a=r*r,o=r*i,7.62+.5737*t-.251754*r+.01680668*i-.0004473624*a+o/233174):l<1920?(t=l-1900,r=t*t,i=t*r,a=r*r,-2.79+1.494119*t-.0598939*r+.0061966*i-197e-6*a):l<1941?(t=l-1920,r=t*t,i=t*r,21.2+.84493*t-.0761*r+.0020936*i):l<1961?(t=l-1950,r=t*t,i=t*r,29.07+.407*t-r/233+i/2547):l<1986?(t=l-1975,r=t*t,i=t*r,45.45+1.067*t-r/260-i/718):l<2005?(t=l-2e3,r=t*t,i=t*r,a=r*r,o=r*i,63.86+.3345*t-.060374*r+.0017275*i+651814e-9*a+2373599e-11*o):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let P0=b0;function Ga(e){return e+P0(e)/86400}class Wt{constructor(t){if(t instanceof Wt){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const r=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Ha.getTime())/r,this.tt=Ga(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Ha.getTime()+t*r),this.ut=t,this.tt=Ga(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let r=new Wt(t);for(;;){const i=t-r.tt;if(Math.abs(i)<1e-12)return r;r=r.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(t){return new Wt(this.ut+t)}}function rr(e){return e instanceof Wt?e:new Wt(e)}function U0(e){function t(I){return I%y0*ar}const r=e.tt/36525,i=t(128710479305e-5+r*1295965810481e-4),a=t(335779.526232+r*17395272628478e-4),o=t(107226070369e-5+r*1602961601209e-3),c=t(450160.398036-r*69628905431e-4);let d=Math.sin(c),l=Math.cos(c),p=(-172064161-174666*r)*d+33386*l,m=(92052331+9086*r)*l+15377*d,x=2*(a-o+c);return d=Math.sin(x),l=Math.cos(x),p+=(-13170906-1675*r)*d-13696*l,m+=(5730336-3015*r)*l-4587*d,x=2*(a+c),d=Math.sin(x),l=Math.cos(x),p+=(-2276413-234*r)*d+2796*l,m+=(978459-485*r)*l+1374*d,x=2*c,d=Math.sin(x),l=Math.cos(x),p+=(2074554+207*r)*d-698*l,m+=(-897492+470*r)*l-291*d,d=Math.sin(i),l=Math.cos(i),p+=(1475877-3633*r)*d+11817*l,m+=(73871-184*r)*l-1924*d,{dpsi:-135e-6+p*1e-7,deps:388e-6+m*1e-7}}function Qs(e){var t=e.tt/36525,r=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return r/3600}var rn;function Ys(e){if(!rn||Math.abs(rn.tt-e.tt)>1e-6){const t=U0(e),r=Qs(e),i=r+t.deps/3600;rn={tt:e.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(r*pr)/15,mobl:r,tobl:i}}return rn}function L0(e,t){const r=e*pr,i=Math.cos(r),a=Math.sin(r);return[t[0],t[1]*i-t[2]*a,t[1]*a+t[2]*i]}function N0(e,t){return L0(Qs(e),t)}function _0(e){const t=e.tt/36525;function r(ie,te){const j=[];let k;for(k=0;k<=te-ie;++k)j.push(0);return{min:ie,array:j}}function i(ie,te,j,k){const be=[];for(let C=0;C<=te-ie;++C)be.push(r(j,k));return{min:ie,array:be}}function a(ie,te,j){const k=ie.array[te-ie.min];return k.array[j-k.min]}function o(ie,te,j,k){const be=ie.array[te-ie.min];be.array[j-be.min]=k}let c,d,l,p,m,x,I,O,L,P,W,Z,K,B,J,H,De,Be,Fe,He,se,pe,Oe,ut=i(-6,6,1,4),Ce=i(-6,6,1,4);function Ve(ie,te){return a(ut,ie,te)}function Xe(ie,te){return a(Ce,ie,te)}function lt(ie,te,j){return o(ut,ie,te,j)}function dt(ie,te,j){return o(Ce,ie,te,j)}function et(ie,te,j,k,be){be(ie*j-te*k,te*j+ie*k)}function $(ie){return Math.sin(_t*ie)}I=t*t,L=0,Oe=0,W=0,Z=3422.7;var tt=$(.19833+.05611*t),Re=$(.27869+.04508*t),Ke=$(.16827-.36903*t),Ze=$(.34734-5.37261*t),Je=$(.10498-5.37899*t),Le=$(.42681-.41855*t),wt=$(.14943-5.37511*t);for(Be=.84*tt+.31*Re+14.27*Ke+7.26*Ze+.28*Je+.24*Le,Fe=2.94*tt+.31*Re+14.27*Ke+9.34*Ze+1.12*Je+.83*Le,He=-6.4*tt-1.89*Le,se=.21*tt+.31*Re+14.27*Ke-88.7*Ze-15.3*Je+.24*Le-1.86*wt,pe=Be-He,O=-3332e-9*$(.59734-5.37261*t)-539e-9*$(.35498-5.37899*t)-64e-9*$(.39943-5.37511*t),K=_t*nr(.60643382+1336.85522467*t-313e-8*I)+Be/Vt,B=_t*nr(.37489701+1325.55240982*t+2565e-8*I)+Fe/Vt,J=_t*nr(.99312619+99.99735956*t-44e-8*I)+He/Vt,H=_t*nr(.25909118+1342.2278298*t-892e-8*I)+se/Vt,De=_t*nr(.82736186+1236.85308708*t-397e-8*I)+pe/Vt,m=1;m<=4;++m){switch(m){case 1:l=B,d=4,p=1.000002208;break;case 2:l=J,d=3,p=.997504612-.002495388*t;break;case 3:l=H,d=4,p=1.000002708+139.978*O;break;case 4:l=De,d=6,p=1;break;default:throw`Internal error: I = ${m}`}for(lt(0,m,1),lt(1,m,Math.cos(l)*p),dt(0,m,0),dt(1,m,Math.sin(l)*p),x=2;x<=d;++x)et(Ve(x-1,m),Xe(x-1,m),Ve(1,m),Xe(1,m),(ie,te)=>(lt(x,m,ie),dt(x,m,te)));for(x=1;x<=d;++x)lt(-x,m,Ve(x,m)),dt(-x,m,-Xe(x,m))}function ft(ie,te,j,k){for(var be={x:1,y:0},C=[0,ie,te,j,k],Pe=1;Pe<=4;++Pe)C[Pe]!==0&&et(be.x,be.y,Ve(C[Pe],Pe),Xe(C[Pe],Pe),(Kt,Bt)=>(be.x=Kt,be.y=Bt));return be}function R(ie,te,j,k,be,C,Pe,Kt){var Bt=ft(be,C,Pe,Kt);L+=ie*Bt.y,Oe+=te*Bt.y,W+=j*Bt.x,Z+=k*Bt.x}R(13.902,14.06,-.001,.2607,0,0,0,4),R(.403,-4.01,.394,.0023,0,0,0,3),R(2369.912,2373.36,.601,28.2333,0,0,0,2),R(-125.154,-112.79,-.725,-.9781,0,0,0,1),R(1.979,6.98,-.445,.0433,1,0,0,4),R(191.953,192.72,.029,3.0861,1,0,0,2),R(-8.466,-13.51,.455,-.1093,1,0,0,1),R(22639.5,22609.07,.079,186.5398,1,0,0,0),R(18.609,3.59,-.094,.0118,1,0,0,-1),R(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),R(3.215,5.44,.192,-.0386,1,0,0,-3),R(-38.428,-38.64,.001,.6008,1,0,0,-4),R(-.393,-1.43,-.092,.0086,1,0,0,-6),R(-.289,-1.59,.123,-.0053,0,1,0,4),R(-24.42,-25.1,.04,-.3,0,1,0,2),R(18.023,17.93,.007,.1494,0,1,0,1),R(-668.146,-126.98,-1.302,-.3997,0,1,0,0),R(.56,.32,-.001,-.0037,0,1,0,-1),R(-165.145,-165.06,.054,1.9178,0,1,0,-2),R(-1.877,-6.46,-.416,.0339,0,1,0,-4),R(.213,1.02,-.074,.0054,2,0,0,4),R(14.387,14.78,-.017,.2833,2,0,0,2),R(-.586,-1.2,.054,-.01,2,0,0,1),R(769.016,767.96,.107,10.1657,2,0,0,0),R(1.75,2.01,-.018,.0155,2,0,0,-1),R(-211.656,-152.53,5.679,-.3039,2,0,0,-2),R(1.225,.91,-.03,-.0088,2,0,0,-3),R(-30.773,-34.07,-.308,.3722,2,0,0,-4),R(-.57,-1.4,-.074,.0109,2,0,0,-6),R(-2.921,-11.75,.787,-.0484,1,1,0,2),R(1.267,1.52,-.022,.0164,1,1,0,1),R(-109.673,-115.18,.461,-.949,1,1,0,0),R(-205.962,-182.36,2.056,1.4437,1,1,0,-2),R(.233,.36,.012,-.0025,1,1,0,-3),R(-4.391,-9.66,-.471,.0673,1,1,0,-4),R(.283,1.53,-.111,.006,1,-1,0,4),R(14.577,31.7,-1.54,.2302,1,-1,0,2),R(147.687,138.76,.679,1.1528,1,-1,0,0),R(-1.089,.55,.021,0,1,-1,0,-1),R(28.475,23.59,-.443,-.2257,1,-1,0,-2),R(-.276,-.38,-.006,-.0036,1,-1,0,-3),R(.636,2.27,.146,-.0102,1,-1,0,-4),R(-.189,-1.68,.131,-.0028,0,2,0,2),R(-7.486,-.66,-.037,-.0086,0,2,0,0),R(-8.096,-16.35,-.74,.0918,0,2,0,-2),R(-5.741,-.04,0,-9e-4,0,0,2,2),R(.255,0,0,0,0,0,2,1),R(-411.608,-.2,0,-.0124,0,0,2,0),R(.584,.84,0,.0071,0,0,2,-1),R(-55.173,-52.14,0,-.1052,0,0,2,-2),R(.254,.25,0,-.0017,0,0,2,-3),R(.025,-1.67,0,.0031,0,0,2,-4),R(1.06,2.96,-.166,.0243,3,0,0,2),R(36.124,50.64,-1.3,.6215,3,0,0,0),R(-13.193,-16.4,.258,-.1187,3,0,0,-2),R(-1.187,-.74,.042,.0074,3,0,0,-4),R(-.293,-.31,-.002,.0046,3,0,0,-6),R(-.29,-1.45,.116,-.0051,2,1,0,2),R(-7.649,-10.56,.259,-.1038,2,1,0,0),R(-8.627,-7.59,.078,-.0192,2,1,0,-2),R(-2.74,-2.54,.022,.0324,2,1,0,-4),R(1.181,3.32,-.212,.0213,2,-1,0,2),R(9.703,11.67,-.151,.1268,2,-1,0,0),R(-.352,-.37,.001,-.0028,2,-1,0,-1),R(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),R(.36,.2,-.012,-.0043,2,-1,0,-4),R(-1.167,-1.25,.008,-.0106,1,2,0,0),R(-7.412,-6.12,.117,.0484,1,2,0,-2),R(-.311,-.65,-.032,.0044,1,2,0,-4),R(.757,1.82,-.105,.0112,1,-2,0,2),R(2.58,2.32,.027,.0196,1,-2,0,0),R(2.533,2.4,-.014,-.0212,1,-2,0,-2),R(-.344,-.57,-.025,.0036,0,3,0,-2),R(-.992,-.02,0,0,1,0,2,2),R(-45.099,-.02,0,-.001,1,0,2,0),R(-.179,-9.52,0,-.0833,1,0,2,-2),R(-.301,-.33,0,.0014,1,0,2,-4),R(-6.382,-3.37,0,-.0481,1,0,-2,2),R(39.528,85.13,0,-.7136,1,0,-2,0),R(9.366,.71,0,-.0112,1,0,-2,-2),R(.202,.02,0,0,1,0,-2,-4),R(.415,.1,0,.0013,0,1,2,0),R(-2.152,-2.26,0,-.0066,0,1,2,-2),R(-1.44,-1.3,0,.0014,0,1,-2,2),R(.384,-.04,0,0,0,1,-2,-2),R(1.938,3.6,-.145,.0401,4,0,0,0),R(-.952,-1.58,.052,-.013,4,0,0,-2),R(-.551,-.94,.032,-.0097,3,1,0,0),R(-.482,-.57,.005,-.0045,3,1,0,-2),R(.681,.96,-.026,.0115,3,-1,0,0),R(-.297,-.27,.002,-9e-4,2,2,0,-2),R(.254,.21,-.003,0,2,-2,0,-2),R(-.25,-.22,.004,.0014,1,3,0,-2),R(-3.996,0,0,4e-4,2,0,2,0),R(.557,-.75,0,-.009,2,0,2,-2),R(-.459,-.38,0,-.0053,2,0,-2,2),R(-1.298,.74,0,4e-4,2,0,-2,0),R(.538,1.14,0,-.0141,2,0,-2,-2),R(.263,.02,0,0,1,1,2,0),R(.426,.07,0,-6e-4,1,1,-2,-2),R(-.304,.03,0,3e-4,1,-1,2,0),R(-.372,-.19,0,-.0027,1,-1,-2,2),R(.418,0,0,0,0,0,4,0),R(-.33,-.04,0,0,3,0,2,0);function Me(ie,te,j,k,be){return ie*ft(te,j,k,be).y}P=0,P+=Me(-526.069,0,0,1,-2),P+=Me(-3.352,0,0,1,-4),P+=Me(44.297,1,0,1,-2),P+=Me(-6,1,0,1,-4),P+=Me(20.599,-1,0,1,0),P+=Me(-30.598,-1,0,1,-2),P+=Me(-24.649,-2,0,1,0),P+=Me(-2,-2,0,1,-2),P+=Me(-22.571,0,1,1,-2),P+=Me(10.985,0,-1,1,-2),L+=.82*$(.7736-62.5512*t)+.31*$(.0466-125.1025*t)+.35*$(.5785-25.1042*t)+.66*$(.4591+1335.8075*t)+.64*$(.313-91.568*t)+1.14*$(.148+1331.2898*t)+.21*$(.5918+1056.5859*t)+.44*$(.5784+1322.8595*t)+.24*$(.2275-5.7374*t)+.28*$(.2965+2.6929*t)+.33*$(.3132+6.3368*t),c=H+Oe/Vt;let ue=(1.000002708+139.978*O)*(18518.511+1.189+W)*Math.sin(c)-6.24*Math.sin(3*c)+P;return{geo_eclip_lon:_t*nr((K+L/Vt)/_t),geo_eclip_lat:Math.PI/(180*3600)*ue,distance_au:Vt*R0/(.999953253*Z)}}function F0(e,t){return[e.rot[0][0]*t[0]+e.rot[1][0]*t[1]+e.rot[2][0]*t[2],e.rot[0][1]*t[0]+e.rot[1][1]*t[1]+e.rot[2][1]*t[2],e.rot[0][2]*t[0]+e.rot[1][2]*t[1]+e.rot[2][2]*t[2]]}function H0(e,t,r){const i=Vs(t,r);return F0(i,e)}function Vs(e,t){const r=e.tt/36525;let i=84381.406,a=((((-951e-10*r+132851e-9)*r-.00114045)*r-1.0790069)*r+5038.481507)*r,o=((((3337e-10*r-467e-9)*r-.00772503)*r+.0512623)*r-.025754)*r+i,c=((((-56e-9*r+170663e-9)*r-.00121197)*r-2.3814292)*r+10.556403)*r;i*=ar,a*=ar,o*=ar,c*=ar;const d=Math.sin(i),l=Math.cos(i),p=Math.sin(-a),m=Math.cos(-a),x=Math.sin(-o),I=Math.cos(-o),O=Math.sin(c),L=Math.cos(c),P=L*m-p*O*I,W=L*p*l+O*I*m*l-d*O*x,Z=L*p*d+O*I*m*d+l*O*x,K=-O*m-p*L*I,B=-O*p*l+L*I*m*l-d*L*x,J=-O*p*d+L*I*m*d+l*L*x,H=p*x,De=-x*m*l-d*I,Be=-x*m*d+I*l;if(t===kt.Into2000)return new gr([[P,W,Z],[K,B,J],[H,De,Be]]);if(t===kt.From2000)return new gr([[P,K,H],[W,B,De],[Z,J,Be]]);throw"Invalid precess direction"}function G0(e){const t=.779057273264+.00273781191135448*e.ut,r=e.ut%1;let i=360*((t+r)%1);return i<0&&(i+=360),i}let nn;function z0(e){if(!nn||nn.tt!==e.tt){const t=e.tt/36525;let r=15*Ys(e).ee;const i=G0(e);let a=((r+.014506+((((-368e-10*t-29956e-9)*t-44e-8)*t+1.3915817)*t+4612.156534)*t)/3600+i)%360/15;a<0&&(a+=24),nn={tt:e.tt,st:a}}return nn.st}function k0(e){const t=rr(e);return z0(t)}function Q0(e,t){const r=Ys(e),i=r.mobl*pr,a=r.tobl*pr,o=r.dpsi*ar,c=Math.cos(i),d=Math.sin(i),l=Math.cos(a),p=Math.sin(a),m=Math.cos(o),x=Math.sin(o),I=m,O=-x*c,L=-x*d,P=x*l,W=m*c*l+d*p,Z=m*d*l-c*p,K=x*p,B=m*c*p-d*l,J=m*d*p+c*l;if(t===kt.From2000)return new gr([[I,P,K],[O,W,B],[L,Z,J]]);if(t===kt.Into2000)return new gr([[I,O,L],[P,W,Z],[K,B,J]]);throw"Invalid precess direction"}class Rt{constructor(t,r,i,a){this.x=t,this.y=r,this.z=i,this.t=a}Length(){return Math.hypot(this.x,this.y,this.z)}}class Y0{constructor(t,r,i,a,o,c,d){this.x=t,this.y=r,this.z=i,this.vx=a,this.vy=o,this.vz=c,this.t=d}}class V0{constructor(t,r,i){this.lat=ai(t),this.lon=ai(r),this.dist=ai(i)}}class gr{constructor(t){this.rot=t}}function Ii(e){const t=rr(e),r=_0(t),i=r.distance_au*Math.cos(r.geo_eclip_lat),a=[i*Math.cos(r.geo_eclip_lon),i*Math.sin(r.geo_eclip_lon),r.distance_au*Math.sin(r.geo_eclip_lat)],o=N0(t,a),c=H0(o,t,kt.Into2000);return new Rt(c[0],c[1],c[2],t)}function lr(e,t,r){let i=1,a=0;for(let o of e){let c=0;for(let[l,p,m]of o)c+=l*Math.cos(p+t*m);let d=i*c;r&&(d%=_t),a+=d,i*=t}return a}function si(e,t){let r=1,i=0,a=0,o=0;for(let c of e){let d=0,l=0;for(let[p,m,x]of c){let I=m+t*x;d+=p*x*Math.sin(I),o>0&&(l+=p*Math.cos(I))}a+=o*i*l-r*d,i=r,r*=t,++o}return a}const Pr=365250,Mi=0,Bi=1,Oi=2;function bi(e){return new We(e[0]+44036e-11*e[1]-190919e-12*e[2],-479966e-12*e[0]+.917482137087*e[1]-.397776982902*e[2],.397776982902*e[1]+.917482137087*e[2])}function Xs(e,t,r){const i=r*Math.cos(t),a=Math.cos(e),o=Math.sin(e);return[i*a,i*o,r*Math.sin(t)]}function ln(e,t){const r=t.tt/Pr,i=lr(e[Mi],r,!0),a=lr(e[Bi],r,!1),o=lr(e[Oi],r,!1),c=Xs(i,a,o);return bi(c).ToAstroVector(t)}function X0(e,t){const r=t/Pr,i=lr(e[Mi],r,!0),a=lr(e[Bi],r,!1),o=lr(e[Oi],r,!1),c=si(e[Mi],r),d=si(e[Bi],r),l=si(e[Oi],r),p=Math.cos(i),m=Math.sin(i),x=Math.cos(a),I=Math.sin(a),O=+(l*x*p)-o*I*p*d-o*x*m*c,L=+(l*x*m)-o*I*m*d+o*x*p*c,P=+(l*I)+o*x*d,W=Xs(i,a,o),Z=[O/Pr,L/Pr,P/Pr],K=bi(W),B=bi(Z);return new Sn(t,K,B)}function an(e,t,r,i){const a=i/(i+sa),o=ln(sr[r],t);e.x+=a*o.x,e.y+=a*o.y,e.z+=a*o.z}function W0(e){const t=new Rt(0,0,0,e);return an(t,e,ge.Jupiter,Ti),an(t,e,ge.Saturn,yi),an(t,e,ge.Uranus,Di),an(t,e,ge.Neptune,Ri),t}const Pi=51,j0=29200,xn=146,Ft=201,Jt=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class We{constructor(t,r,i){this.x=t,this.y=r,this.z=i}clone(){return new We(this.x,this.y,this.z)}ToAstroVector(t){return new Rt(this.x,this.y,this.z,t)}static zero(){return new We(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new We(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new We(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new We(t*this.x,t*this.y,t*this.z)}div(t){return new We(this.x/t,this.y/t,this.z/t)}mean(t){return new We((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new We(-this.x,-this.y,-this.z)}}let Sn=class Ui{constructor(t,r,i){this.tt=t,this.r=r,this.v=i}clone(){return new Ui(this.tt,this.r,this.v)}sub(t){return new Ui(this.tt,this.r.sub(t.r),this.v.sub(t.v))}};function K0(e){let[t,[r,i,a],[o,c,d]]=e;return new Sn(t,new We(r,i,a),new We(o,c,d))}function sn(e,t,r,i){const a=i/(i+sa),o=X0(sr[r],t);return e.r.incr(o.r.mul(a)),e.v.incr(o.v.mul(a)),o}function Ir(e,t,r){const i=r.sub(e),a=i.quadrature();return i.mul(t/(a*Math.sqrt(a)))}class oa{constructor(t){let r=new Sn(t,new We(0,0,0),new We(0,0,0));this.Jupiter=sn(r,t,ge.Jupiter,Ti),this.Saturn=sn(r,t,ge.Saturn,yi),this.Uranus=sn(r,t,ge.Uranus,Di),this.Neptune=sn(r,t,ge.Neptune,Ri),this.Jupiter.r.decr(r.r),this.Jupiter.v.decr(r.v),this.Saturn.r.decr(r.r),this.Saturn.v.decr(r.v),this.Uranus.r.decr(r.r),this.Uranus.v.decr(r.v),this.Neptune.r.decr(r.r),this.Neptune.v.decr(r.v),this.Sun=new Sn(t,r.r.mul(-1),r.v.mul(-1))}Acceleration(t){let r=Ir(t,sa,this.Sun.r);return r.incr(Ir(t,Ti,this.Jupiter.r)),r.incr(Ir(t,yi,this.Saturn.r)),r.incr(Ir(t,Di,this.Uranus.r)),r.incr(Ir(t,Ri,this.Neptune.r)),r}}class Un{constructor(t,r,i,a){this.tt=t,this.r=r,this.v=i,this.a=a}clone(){return new Un(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Ws{constructor(t,r){this.bary=t,this.grav=r}}function Cn(e,t,r,i){return new We(t.x+e*(r.x+e*i.x/2),t.y+e*(r.y+e*i.y/2),t.z+e*(r.z+e*i.z/2))}function za(e,t,r){return new We(t.x+e*r.x,t.y+e*r.y,t.z+e*r.z)}function Li(e,t){const r=e-t.tt,i=new oa(e),a=Cn(r,t.r,t.v,t.a),o=i.Acceleration(a).mean(t.a),c=Cn(r,t.r,t.v,o),d=t.v.add(o.mul(r)),l=i.Acceleration(c),p=new Un(e,c,d,l);return new Ws(i,p)}const Z0=[];function js(e,t){const r=Math.floor(e);return r<0?0:r>=t?t-1:r}function Ni(e){const t=K0(e),r=new oa(t.tt),i=t.r.add(r.Sun.r),a=t.v.add(r.Sun.v),o=r.Acceleration(i),c=new Un(t.tt,i,a,o);return new Ws(r,c)}function J0(e,t){const r=Jt[0][0];if(t<r||t>Jt[Pi-1][0])return null;const i=js((t-r)/j0,Pi-1);if(!e[i]){const o=e[i]=[];o[0]=Ni(Jt[i]).grav,o[Ft-1]=Ni(Jt[i+1]).grav;let c,d=o[0].tt;for(c=1;c<Ft-1;++c)o[c]=Li(d+=xn,o[c-1]).grav;d=o[Ft-1].tt;var a=[];for(a[Ft-1]=o[Ft-1],c=Ft-2;c>0;--c)a[c]=Li(d-=xn,a[c+1]).grav;for(c=Ft-2;c>0;--c){const l=c/(Ft-1);o[c].r=o[c].r.mul(1-l).add(a[c].r.mul(l)),o[c].v=o[c].v.mul(1-l).add(a[c].v.mul(l)),o[c].a=o[c].a.mul(1-l).add(a[c].a.mul(l))}}return e[i]}function ka(e,t,r){let i=Ni(e);const a=Math.ceil((t-i.grav.tt)/r);for(let o=0;o<a;++o)i=Li(o+1===a?t:i.grav.tt+r,i.grav);return i}function q0(e,t){let r,i,a;const o=J0(Z0,e.tt);if(o){const c=js((e.tt-o[0].tt)/xn,Ft-1),d=o[c],l=o[c+1],p=d.a.mean(l.a),m=Cn(e.tt-d.tt,d.r,d.v,p),x=za(e.tt-d.tt,d.v,p),I=Cn(e.tt-l.tt,l.r,l.v,p),O=za(e.tt-l.tt,l.v,p),L=(e.tt-d.tt)/xn;r=m.mul(1-L).add(I.mul(L)),i=x.mul(1-L).add(O.mul(L))}else{let c;e.tt<Jt[0][0]?c=ka(Jt[0],e.tt,-146):c=ka(Jt[Pi-1],e.tt,146),r=c.grav.r,i=c.grav.v,a=c.bary}return a||(a=new oa(e.tt)),r=r.sub(a.Sun.r),i=i.sub(a.Sun.v),new Y0(r.x,r.y,r.z,i.x,i.y,i.z,e)}function _r(e,t){var r=rr(t);if(e in sr)return ln(sr[e],r);if(e===ge.Pluto){const c=q0(r);return new Rt(c.x,c.y,c.z,r)}if(e===ge.Sun)return new Rt(0,0,0,r);if(e===ge.Moon){var i=ln(sr.Earth,r),a=Ii(r);return new Rt(i.x+a.x,i.y+a.y,i.z+a.z,r)}if(e===ge.EMB){const c=ln(sr.Earth,r),d=Ii(r),l=1+I0;return new Rt(c.x+d.x/l,c.y+d.y/l,c.z+d.z/l,r)}if(e===ge.SSB)return W0(r);const o=ks(e);if(o){const c=new V0(o.dec,15*o.ra,o.dist);return n1(c,r)}throw`HelioVector: Unknown body "${e}"`}function $0(e,t){let r=t,i=0;for(let a=0;a<10;++a){const o=e(r),c=o.Length()/x0;if(c>1)throw"Object is too distant for light-travel solver.";const d=t.AddDays(-c);if(i=Math.abs(d.tt-r.tt),i<1e-9)return o;r=d}throw`Light-travel time solver did not converge: dt = ${i}`}class e1{constructor(t,r,i,a){this.observerBody=t,this.targetBody=r,this.aberration=i,this.observerPos=a}Position(t){this.aberration&&(this.observerPos=_r(this.observerBody,t));const r=_r(this.targetBody,t);return new Rt(r.x-this.observerPos.x,r.y-this.observerPos.y,r.z-this.observerPos.z,t)}}function t1(e,t,r,i){const a=rr(e);if(ks(r)){const d=_r(r,a),l=_r(t,a);return new Rt(d.x-l.x,d.y-l.y,d.z-l.z,a)}let o;o=_r(t,a);const c=new e1(t,r,i,o);return $0(d=>c.Position(d),a)}function r1(e,t,r){const i=rr(t);switch(e){case ge.Earth:return new Rt(0,0,0,i);case ge.Moon:return Ii(i);default:const a=t1(i,ge.Earth,e,r);return a.t=i,a}}var Qa;(function(e){e[e.Pericenter=0]="Pericenter",e[e.Apocenter=1]="Apocenter"})(Qa||(Qa={}));function Ks(e,t){return new gr([[t.rot[0][0]*e.rot[0][0]+t.rot[1][0]*e.rot[0][1]+t.rot[2][0]*e.rot[0][2],t.rot[0][1]*e.rot[0][0]+t.rot[1][1]*e.rot[0][1]+t.rot[2][1]*e.rot[0][2],t.rot[0][2]*e.rot[0][0]+t.rot[1][2]*e.rot[0][1]+t.rot[2][2]*e.rot[0][2]],[t.rot[0][0]*e.rot[1][0]+t.rot[1][0]*e.rot[1][1]+t.rot[2][0]*e.rot[1][2],t.rot[0][1]*e.rot[1][0]+t.rot[1][1]*e.rot[1][1]+t.rot[2][1]*e.rot[1][2],t.rot[0][2]*e.rot[1][0]+t.rot[1][2]*e.rot[1][1]+t.rot[2][2]*e.rot[1][2]],[t.rot[0][0]*e.rot[2][0]+t.rot[1][0]*e.rot[2][1]+t.rot[2][0]*e.rot[2][2],t.rot[0][1]*e.rot[2][0]+t.rot[1][1]*e.rot[2][1]+t.rot[2][1]*e.rot[2][2],t.rot[0][2]*e.rot[2][0]+t.rot[1][2]*e.rot[2][1]+t.rot[2][2]*e.rot[2][2]]])}function n1(e,t){t=rr(t);const r=e.lat*pr,i=e.lon*pr,a=e.dist*Math.cos(r);return new Rt(a*Math.cos(i),a*Math.sin(i),e.dist*Math.sin(r),t)}function i1(e){e=rr(e);const t=Vs(e,kt.From2000),r=Q0(e,kt.From2000);return Ks(t,r)}var Ya;(function(e){e.Penumbral="penumbral",e.Partial="partial",e.Annular="annular",e.Total="total"})(Ya||(Ya={}));var Va;(function(e){e[e.Invalid=0]="Invalid",e[e.Ascending=1]="Ascending",e[e.Descending=-1]="Descending"})(Va||(Va={}));const a1=new ye;function s1(e){const t=Math.cos(e),r=Math.sin(e);return new gr([[t,-r,0],[r,t,0],[0,0,1]])}function ca(e){return e instanceof Wt?e:new Wt(e instanceof Date?e:new Date(e))}function o1(e,t=new ye){const r=ca(e),i=i1(r),a=s1(k0(r)*(-Math.PI/12)),{rot:o}=Ks(i,a);return t.set(o[0][0],o[0][1],o[0][2],0,o[1][0],o[1][1],o[1][2],0,o[2][0],o[2][1],o[2][2],0,0,0,0,1)}function c1(e,t,r){const{x:i,y:a,z:o}=r1(e,t,!1);return r.set(i,a,o).normalize()}function Zs(e,t,r){const i=o1(t,a1);return c1(e,t,r).applyMatrix4(i)}function Fd(e,t=new _){return Zs(ge.Sun,ca(e),t)}function Hd(e,t=new _){return Zs(ge.Moon,ca(e),t)}function Js(e){return Math.sqrt(Math.max(e,0))}function u1(e){return Math.max(e,0)}function l1(e,t,r){const{bottomRadius:i}=e;return r<0&&t**2*(r**2-1)+i**2>=0}function d1(e,t,r){const{topRadius:i}=e,a=t**2*(r**2-1)+i**2;return u1(-t*r+Js(a))}function Tn(e,t){return .5/t+e*(1-1/t)}var f1="Invariant failed";function h1(e,t){if(!e)throw new Error(f1)}const v1=new _,Xa=new _,p1=new _;function on(e,t,r){const i=t*4;return r.set(e[i],e[i+1],e[i+2])}function qs(e,t,r){const{width:i,height:a}=e.image;h1(al(e.image.data));let o=e.image.data;e.type===$e&&o instanceof Uint16Array&&(o=new ve(o.buffer));const c=tr(t.x,0,1)*(i-1),d=tr(t.y,0,1)*(a-1),l=Math.floor(c),p=Math.floor(d),m=c-l,x=d-p,I=m,O=x,L=l%i,P=(L+1)%i,W=p%a,Z=(W+1)%a,K=on(o,W*i+L,v1),B=on(o,W*i+P,Xa),J=K.lerp(B,I),H=on(o,Z*i+L,Xa),De=on(o,Z*i+P,p1),Be=H.lerp(De,I);return r.copy(J.lerp(Be,O))}function g1(e,t,r,i){const{topRadius:a,bottomRadius:o}=e,c=Math.sqrt(a**2-o**2),d=Js(t**2-o**2),l=d1(e,t,r),p=a-t,m=d+c,x=(l-p)/(m-p),I=d/c;return i.set(Tn(x,bn),Tn(I,Pn))}const m1=new _,oi=new _,A1=new Ie;function w1(e,t,r,i=new Ar,{ellipsoid:a=Gt.WGS84,correctAltitude:o=!0,photometric:c=!0}={},d=Qr.DEFAULT){const l=m1.copy(t);if(o){const P=a.projectOnSurface(t,oi);P!=null&&l.sub(a.getOsculatingSphereCenter(P,d.bottomRadius,oi))}const p=oi;let m=l.length(),x=l.dot(r);const{topRadius:I}=d,O=-x-Math.sqrt(x**2-m**2+I**2);if(O>0&&(m=I,x+=O),m>I)p.set(1,1,1);else{const P=x/m;if(l1(d,m,P))p.setScalar(0);else{const W=g1(d,m,P,A1);qs(e,W,p)}}const L=p.multiply(d.solarIrradiance);return c&&L.multiply(d.sunRadianceToRelativeLuminance),i.setFromVector3(L)}const E1=parseInt(wr.replace(/\D+/g,""));var vt=Uint8Array,$t=Uint16Array,_i=Uint32Array,$s=new vt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),eo=new vt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x1=new vt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),to=function(e,t){for(var r=new $t(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var a=new _i(r[30]),i=1;i<30;++i)for(var o=r[i];o<r[i+1];++o)a[o]=o-r[i]<<5|i;return[r,a]},ro=to($s,2),no=ro[0],S1=ro[1];no[28]=258,S1[258]=28;var C1=to(eo,0),T1=C1[0],io=new $t(32768);for(var Se=0;Se<32768;++Se){var Xt=(Se&43690)>>>1|(Se&21845)<<1;Xt=(Xt&52428)>>>2|(Xt&13107)<<2,Xt=(Xt&61680)>>>4|(Xt&3855)<<4,io[Se]=((Xt&65280)>>>8|(Xt&255)<<8)>>>1}var Fr=function(e,t,r){for(var i=e.length,a=0,o=new $t(t);a<i;++a)++o[e[a]-1];var c=new $t(t);for(a=0;a<t;++a)c[a]=c[a-1]+o[a-1]<<1;var d;{d=new $t(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var p=a<<4|e[a],m=t-e[a],x=c[e[a]-1]++<<m,I=x|(1<<m)-1;x<=I;++x)d[io[x]>>>l]=p}return d},Yr=new vt(288);for(var Se=0;Se<144;++Se)Yr[Se]=8;for(var Se=144;Se<256;++Se)Yr[Se]=9;for(var Se=256;Se<280;++Se)Yr[Se]=7;for(var Se=280;Se<288;++Se)Yr[Se]=8;var ao=new vt(32);for(var Se=0;Se<32;++Se)ao[Se]=5;var y1=Fr(Yr,9),D1=Fr(ao,5),ci=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},Tt=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},ui=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},R1=function(e){return(e/8|0)+(e&7&&1)},I1=function(e,t,r){(r==null||r>e.length)&&(r=e.length);var i=new(e instanceof $t?$t:e instanceof _i?_i:vt)(r-t);return i.set(e.subarray(t,r)),i},M1=function(e,t,r){var i=e.length;if(!i||r&&!r.l&&i<5)return t||new vt(0);var a=!t||r,o=!r||r.i;r||(r={}),t||(t=new vt(i*3));var c=function(Le){var wt=t.length;if(Le>wt){var ft=new vt(Math.max(wt*2,Le));ft.set(t),t=ft}},d=r.f||0,l=r.p||0,p=r.b||0,m=r.l,x=r.d,I=r.m,O=r.n,L=i*8;do{if(!m){r.f=d=Tt(e,l,1);var P=Tt(e,l+1,3);if(l+=3,P)if(P==1)m=y1,x=D1,I=9,O=5;else if(P==2){var W=Tt(e,l,31)+257,Z=Tt(e,l+10,15)+4,K=W+Tt(e,l+5,31)+1;l+=14;for(var B=new vt(K),J=new vt(19),H=0;H<Z;++H)J[x1[H]]=Tt(e,l+H*3,7);l+=Z*3;for(var De=ci(J),Be=(1<<De)-1,Fe=Fr(J,De),H=0;H<K;){var He=Fe[Tt(e,l,Be)];l+=He&15;var se=He>>>4;if(se<16)B[H++]=se;else{var pe=0,Oe=0;for(se==16?(Oe=3+Tt(e,l,3),l+=2,pe=B[H-1]):se==17?(Oe=3+Tt(e,l,7),l+=3):se==18&&(Oe=11+Tt(e,l,127),l+=7);Oe--;)B[H++]=pe}}var ut=B.subarray(0,W),Ce=B.subarray(W);I=ci(ut),O=ci(Ce),m=Fr(ut,I),x=Fr(Ce,O)}else throw"invalid block type";else{var se=R1(l)+4,Ve=e[se-4]|e[se-3]<<8,Xe=se+Ve;if(Xe>i){if(o)throw"unexpected EOF";break}a&&c(p+Ve),t.set(e.subarray(se,Xe),p),r.b=p+=Ve,r.p=l=Xe*8;continue}if(l>L){if(o)throw"unexpected EOF";break}}a&&c(p+131072);for(var lt=(1<<I)-1,dt=(1<<O)-1,et=l;;et=l){var pe=m[ui(e,l)&lt],$=pe>>>4;if(l+=pe&15,l>L){if(o)throw"unexpected EOF";break}if(!pe)throw"invalid length/literal";if($<256)t[p++]=$;else if($==256){et=l,m=null;break}else{var tt=$-254;if($>264){var H=$-257,Re=$s[H];tt=Tt(e,l,(1<<Re)-1)+no[H],l+=Re}var Ke=x[ui(e,l)&dt],Ze=Ke>>>4;if(!Ke)throw"invalid distance";l+=Ke&15;var Ce=T1[Ze];if(Ze>3){var Re=eo[Ze];Ce+=ui(e,l)&(1<<Re)-1,l+=Re}if(l>L){if(o)throw"unexpected EOF";break}a&&c(p+131072);for(var Je=p+tt;p<Je;p+=4)t[p]=t[p-Ce],t[p+1]=t[p+1-Ce],t[p+2]=t[p+2-Ce],t[p+3]=t[p+3-Ce];p=Je}}r.l=m,r.p=et,r.b=p,m&&(d=1,r.m=I,r.d=x,r.n=O)}while(!d);return p==t.length?t:I1(t,0,p)},B1=new vt(0),O1=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(e[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function cn(e,t){return M1((O1(e),e.subarray(2,-4)),t)}var b1=typeof TextDecoder<"u"&&new TextDecoder,P1=0;try{b1.decode(B1,{stream:!0}),P1=1}catch{}const Mr=E1>=152;class Wa extends qa{constructor(t){super(t),this.type=$e}parse(t){const r=Math.pow(2.7182818,2.2);function i(n,s){for(var u=0,f=0;f<65536;++f)(f==0||n[f>>3]&1<<(f&7))&&(s[u++]=f);for(var v=u-1;u<65536;)s[u++]=0;return v}function a(n){for(var s=0;s<16384;s++)n[s]={},n[s].len=0,n[s].lit=0,n[s].p=null}const o={l:0,c:0,lc:0};function c(n,s,u,f,v){for(;u<n;)s=s<<8|ie(f,v),u+=8;u-=n,o.l=s>>u&(1<<n)-1,o.c=s,o.lc=u}const d=new Array(59);function l(n){for(var s=0;s<=58;++s)d[s]=0;for(var s=0;s<65537;++s)d[n[s]]+=1;for(var u=0,s=58;s>0;--s){var f=u+d[s]>>1;d[s]=u,u=f}for(var s=0;s<65537;++s){var v=n[s];v>0&&(n[s]=v|d[v]++<<6)}}function p(n,s,u,f,v,h,A){for(var g=u,T=0,w=0;v<=h;v++){if(g.value-u.value>f)return!1;c(6,T,w,n,g);var S=o.l;if(T=o.c,w=o.lc,A[v]=S,S==63){if(g.value-u.value>f)throw"Something wrong with hufUnpackEncTable";c(8,T,w,n,g);var E=o.l+6;if(T=o.c,w=o.lc,v+E>h+1)throw"Something wrong with hufUnpackEncTable";for(;E--;)A[v++]=0;v--}else if(S>=59){var E=S-59+2;if(v+E>h+1)throw"Something wrong with hufUnpackEncTable";for(;E--;)A[v++]=0;v--}}l(A)}function m(n){return n&63}function x(n){return n>>6}function I(n,s,u,f){for(;s<=u;s++){var v=x(n[s]),h=m(n[s]);if(v>>h)throw"Invalid table entry";if(h>14){var A=f[v>>h-14];if(A.len)throw"Invalid table entry";if(A.lit++,A.p){var g=A.p;A.p=new Array(A.lit);for(var T=0;T<A.lit-1;++T)A.p[T]=g[T]}else A.p=new Array(1);A.p[A.lit-1]=s}else if(h)for(var w=0,T=1<<14-h;T>0;T--){var A=f[(v<<14-h)+w];if(A.len||A.p)throw"Invalid table entry";A.len=h,A.lit=s,w++}}return!0}const O={c:0,lc:0};function L(n,s,u,f){n=n<<8|ie(u,f),s+=8,O.c=n,O.lc=s}const P={c:0,lc:0};function W(n,s,u,f,v,h,A,g,T,w){if(n==s){f<8&&(L(u,f,v,A),u=O.c,f=O.lc),f-=8;var S=u>>f,S=new Uint8Array([S])[0];if(T.value+S>w)return!1;for(var E=g[T.value-1];S-- >0;)g[T.value++]=E}else if(T.value<w)g[T.value++]=n;else return!1;P.c=u,P.lc=f}function Z(n){return n&65535}function K(n){var s=Z(n);return s>32767?s-65536:s}const B={a:0,b:0};function J(n,s){var u=K(n),f=K(s),v=f,h=u+(v&1)+(v>>1),A=h,g=h-v;B.a=A,B.b=g}function H(n,s){var u=Z(n),f=Z(s),v=u-(f>>1)&65535,h=f+v-32768&65535;B.a=h,B.b=v}function De(n,s,u,f,v,h,A){for(var g=A<16384,T=u>v?v:u,w=1,S;w<=T;)w<<=1;for(w>>=1,S=w,w>>=1;w>=1;){for(var E=0,Q=E+h*(v-S),D=h*w,M=h*S,b=f*w,U=f*S,G,ee,Y,oe;E<=Q;E+=M){for(var z=E,Ue=E+f*(u-S);z<=Ue;z+=U){var le=z+b,ae=z+D,_e=ae+b;g?(J(n[z+s],n[ae+s]),G=B.a,Y=B.b,J(n[le+s],n[_e+s]),ee=B.a,oe=B.b,J(G,ee),n[z+s]=B.a,n[le+s]=B.b,J(Y,oe),n[ae+s]=B.a,n[_e+s]=B.b):(H(n[z+s],n[ae+s]),G=B.a,Y=B.b,H(n[le+s],n[_e+s]),ee=B.a,oe=B.b,H(G,ee),n[z+s]=B.a,n[le+s]=B.b,H(Y,oe),n[ae+s]=B.a,n[_e+s]=B.b)}if(u&w){var ae=z+D;g?J(n[z+s],n[ae+s]):H(n[z+s],n[ae+s]),G=B.a,n[ae+s]=B.b,n[z+s]=G}}if(v&w)for(var z=E,Ue=E+f*(u-S);z<=Ue;z+=U){var le=z+b;g?J(n[z+s],n[le+s]):H(n[z+s],n[le+s]),G=B.a,n[le+s]=B.b,n[z+s]=G}S=w,w>>=1}return E}function Be(n,s,u,f,v,h,A,g,T,w){for(var S=0,E=0,Q=g,D=Math.trunc(v.value+(h+7)/8);v.value<D;)for(L(S,E,u,v),S=O.c,E=O.lc;E>=14;){var M=S>>E-14&16383,b=s[M];if(b.len)E-=b.len,W(b.lit,A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;else{if(!b.p)throw"hufDecode issues";var U;for(U=0;U<b.lit;U++){for(var G=m(n[b.p[U]]);E<G&&v.value<D;)L(S,E,u,v),S=O.c,E=O.lc;if(E>=G&&x(n[b.p[U]])==(S>>E-G&(1<<G)-1)){E-=G,W(b.p[U],A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;break}}if(U==b.lit)throw"hufDecode issues"}}var ee=8-h&7;for(S>>=ee,E-=ee;E>0;){var b=s[S<<14-E&16383];if(b.len)E-=b.len,W(b.lit,A,S,E,u,f,v,T,w,Q),S=P.c,E=P.lc;else throw"hufDecode issues"}return!0}function Fe(n,s,u,f,v,h){var A={value:0},g=u.value,T=ue(s,u),w=ue(s,u);u.value+=4;var S=ue(s,u);if(u.value+=4,T<0||T>=65537||w<0||w>=65537)throw"Something wrong with HUF_ENCSIZE";var E=new Array(65537),Q=new Array(16384);a(Q);var D=f-(u.value-g);if(p(n,s,u,D,T,w,E),S>8*(f-(u.value-g)))throw"Something wrong with hufUncompress";I(E,T,w,Q),Be(E,Q,n,s,u,S,w,h,v,A)}function He(n,s,u){for(var f=0;f<u;++f)s[f]=n[s[f]]}function se(n){for(var s=1;s<n.length;s++){var u=n[s-1]+n[s]-128;n[s]=u}}function pe(n,s){for(var u=0,f=Math.floor((n.length+1)/2),v=0,h=n.length-1;!(v>h||(s[v++]=n[u++],v>h));)s[v++]=n[f++]}function Oe(n){for(var s=n.byteLength,u=new Array,f=0,v=new DataView(n);s>0;){var h=v.getInt8(f++);if(h<0){var A=-h;s-=A+1;for(var g=0;g<A;g++)u.push(v.getUint8(f++))}else{var A=h;s-=2;for(var T=v.getUint8(f++),g=0;g<A+1;g++)u.push(T)}}return u}function ut(n,s,u,f,v,h){var A=new DataView(h.buffer),g=u[n.idx[0]].width,T=u[n.idx[0]].height,w=3,S=Math.floor(g/8),E=Math.ceil(g/8),Q=Math.ceil(T/8),D=g-(E-1)*8,M=T-(Q-1)*8,b={value:0},U=new Array(w),G=new Array(w),ee=new Array(w),Y=new Array(w),oe=new Array(w);for(let V=0;V<w;++V)oe[V]=s[n.idx[V]],U[V]=V<1?0:U[V-1]+E*Q,G[V]=new Float32Array(64),ee[V]=new Uint16Array(64),Y[V]=new Uint16Array(E*64);for(let V=0;V<Q;++V){var z=8;V==Q-1&&(z=M);var Ue=8;for(let X=0;X<E;++X){X==E-1&&(Ue=D);for(let F=0;F<w;++F)ee[F].fill(0),ee[F][0]=v[U[F]++],Ce(b,f,ee[F]),Ve(ee[F],G[F]),Xe(G[F]);lt(G);for(let F=0;F<w;++F)dt(G[F],Y[F],X*64)}let ne=0;for(let X=0;X<w;++X){const F=u[n.idx[X]].type;for(let Ee=8*V;Ee<8*V+z;++Ee){ne=oe[X][Ee];for(let qe=0;qe<S;++qe){const me=qe*64+(Ee&7)*8;A.setUint16(ne+0*2*F,Y[X][me+0],!0),A.setUint16(ne+1*2*F,Y[X][me+1],!0),A.setUint16(ne+2*2*F,Y[X][me+2],!0),A.setUint16(ne+3*2*F,Y[X][me+3],!0),A.setUint16(ne+4*2*F,Y[X][me+4],!0),A.setUint16(ne+5*2*F,Y[X][me+5],!0),A.setUint16(ne+6*2*F,Y[X][me+6],!0),A.setUint16(ne+7*2*F,Y[X][me+7],!0),ne+=8*2*F}}if(S!=E)for(let Ee=8*V;Ee<8*V+z;++Ee){const qe=oe[X][Ee]+8*S*2*F,me=S*64+(Ee&7)*8;for(let Ye=0;Ye<Ue;++Ye)A.setUint16(qe+Ye*2*F,Y[X][me+Ye],!0)}}}for(var le=new Uint16Array(g),A=new DataView(h.buffer),ae=0;ae<w;++ae){u[n.idx[ae]].decoded=!0;var _e=u[n.idx[ae]].type;if(u[ae].type==2)for(var St=0;St<T;++St){const ne=oe[ae][St];for(var we=0;we<g;++we)le[we]=A.getUint16(ne+we*2*_e,!0);for(var we=0;we<g;++we)A.setFloat32(ne+we*2*_e,C(le[we]),!0)}}}function Ce(n,s,u){for(var f,v=1;v<64;)f=s[n.value],f==65280?v=64:f>>8==255?v+=f&255:(u[v]=f,v++),n.value++}function Ve(n,s){s[0]=C(n[0]),s[1]=C(n[1]),s[2]=C(n[5]),s[3]=C(n[6]),s[4]=C(n[14]),s[5]=C(n[15]),s[6]=C(n[27]),s[7]=C(n[28]),s[8]=C(n[2]),s[9]=C(n[4]),s[10]=C(n[7]),s[11]=C(n[13]),s[12]=C(n[16]),s[13]=C(n[26]),s[14]=C(n[29]),s[15]=C(n[42]),s[16]=C(n[3]),s[17]=C(n[8]),s[18]=C(n[12]),s[19]=C(n[17]),s[20]=C(n[25]),s[21]=C(n[30]),s[22]=C(n[41]),s[23]=C(n[43]),s[24]=C(n[9]),s[25]=C(n[11]),s[26]=C(n[18]),s[27]=C(n[24]),s[28]=C(n[31]),s[29]=C(n[40]),s[30]=C(n[44]),s[31]=C(n[53]),s[32]=C(n[10]),s[33]=C(n[19]),s[34]=C(n[23]),s[35]=C(n[32]),s[36]=C(n[39]),s[37]=C(n[45]),s[38]=C(n[52]),s[39]=C(n[54]),s[40]=C(n[20]),s[41]=C(n[22]),s[42]=C(n[33]),s[43]=C(n[38]),s[44]=C(n[46]),s[45]=C(n[51]),s[46]=C(n[55]),s[47]=C(n[60]),s[48]=C(n[21]),s[49]=C(n[34]),s[50]=C(n[37]),s[51]=C(n[47]),s[52]=C(n[50]),s[53]=C(n[56]),s[54]=C(n[59]),s[55]=C(n[61]),s[56]=C(n[35]),s[57]=C(n[36]),s[58]=C(n[48]),s[59]=C(n[49]),s[60]=C(n[57]),s[61]=C(n[58]),s[62]=C(n[62]),s[63]=C(n[63])}function Xe(n){const s=.5*Math.cos(.7853975),u=.5*Math.cos(3.14159/16),f=.5*Math.cos(3.14159/8),v=.5*Math.cos(3*3.14159/16),h=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),g=.5*Math.cos(7*3.14159/16);for(var T=new Array(4),w=new Array(4),S=new Array(4),E=new Array(4),Q=0;Q<8;++Q){var D=Q*8;T[0]=f*n[D+2],T[1]=A*n[D+2],T[2]=f*n[D+6],T[3]=A*n[D+6],w[0]=u*n[D+1]+v*n[D+3]+h*n[D+5]+g*n[D+7],w[1]=v*n[D+1]-g*n[D+3]-u*n[D+5]-h*n[D+7],w[2]=h*n[D+1]-u*n[D+3]+g*n[D+5]+v*n[D+7],w[3]=g*n[D+1]-h*n[D+3]+v*n[D+5]-u*n[D+7],S[0]=s*(n[D+0]+n[D+4]),S[3]=s*(n[D+0]-n[D+4]),S[1]=T[0]+T[3],S[2]=T[1]-T[2],E[0]=S[0]+S[1],E[1]=S[3]+S[2],E[2]=S[3]-S[2],E[3]=S[0]-S[1],n[D+0]=E[0]+w[0],n[D+1]=E[1]+w[1],n[D+2]=E[2]+w[2],n[D+3]=E[3]+w[3],n[D+4]=E[3]-w[3],n[D+5]=E[2]-w[2],n[D+6]=E[1]-w[1],n[D+7]=E[0]-w[0]}for(var M=0;M<8;++M)T[0]=f*n[16+M],T[1]=A*n[16+M],T[2]=f*n[48+M],T[3]=A*n[48+M],w[0]=u*n[8+M]+v*n[24+M]+h*n[40+M]+g*n[56+M],w[1]=v*n[8+M]-g*n[24+M]-u*n[40+M]-h*n[56+M],w[2]=h*n[8+M]-u*n[24+M]+g*n[40+M]+v*n[56+M],w[3]=g*n[8+M]-h*n[24+M]+v*n[40+M]-u*n[56+M],S[0]=s*(n[M]+n[32+M]),S[3]=s*(n[M]-n[32+M]),S[1]=T[0]+T[3],S[2]=T[1]-T[2],E[0]=S[0]+S[1],E[1]=S[3]+S[2],E[2]=S[3]-S[2],E[3]=S[0]-S[1],n[0+M]=E[0]+w[0],n[8+M]=E[1]+w[1],n[16+M]=E[2]+w[2],n[24+M]=E[3]+w[3],n[32+M]=E[3]-w[3],n[40+M]=E[2]-w[2],n[48+M]=E[1]-w[1],n[56+M]=E[0]-w[0]}function lt(n){for(var s=0;s<64;++s){var u=n[0][s],f=n[1][s],v=n[2][s];n[0][s]=u+1.5747*v,n[1][s]=u-.1873*f-.4682*v,n[2][s]=u+1.8556*f}}function dt(n,s,u){for(var f=0;f<64;++f)s[u+f]=hn.toHalfFloat(et(n[f]))}function et(n){return n<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(r,Math.abs(n)-1)}function $(n){return new DataView(n.array.buffer,n.offset.value,n.size)}function tt(n){var s=n.viewer.buffer.slice(n.offset.value,n.offset.value+n.size),u=new Uint8Array(Oe(s)),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Re(n){var s=n.array.slice(n.offset.value,n.offset.value+n.size),u=cn(s),f=new Uint8Array(u.length);return se(u),pe(u,f),new DataView(f.buffer)}function Ke(n){for(var s=n.viewer,u={value:n.offset.value},f=new Uint16Array(n.width*n.scanlineBlockSize*(n.channels*n.type)),v=new Uint8Array(8192),h=0,A=new Array(n.channels),g=0;g<n.channels;g++)A[g]={},A[g].start=h,A[g].end=A[g].start,A[g].nx=n.width,A[g].ny=n.lines,A[g].size=n.type,h+=A[g].nx*A[g].ny*A[g].size;var T=Pe(s,u),w=Pe(s,u);if(w>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(T<=w)for(var g=0;g<w-T+1;g++)v[g+T]=te(s,u);var S=new Uint16Array(65536),E=i(v,S),Q=ue(s,u);Fe(n.array,s,u,Q,f,h);for(var g=0;g<n.channels;++g)for(var D=A[g],M=0;M<A[g].size;++M)De(f,D.start+M,D.nx,D.size,D.ny,D.nx*D.size,E);He(S,f,h);for(var b=0,U=new Uint8Array(f.buffer.byteLength),G=0;G<n.lines;G++)for(var ee=0;ee<n.channels;ee++){var D=A[ee],Y=D.nx*D.size,oe=new Uint8Array(f.buffer,D.end*2,Y*2);U.set(oe,b),b+=Y*2,D.end+=Y}return new DataView(U.buffer)}function Ze(n){var s=n.array.slice(n.offset.value,n.offset.value+n.size),u=cn(s);const f=n.lines*n.channels*n.width,v=n.type==1?new Uint16Array(f):new Uint32Array(f);let h=0,A=0;const g=new Array(4);for(let T=0;T<n.lines;T++)for(let w=0;w<n.channels;w++){let S=0;switch(n.type){case 1:g[0]=h,g[1]=g[0]+n.width,h=g[1]+n.width;for(let E=0;E<n.width;++E){const Q=u[g[0]++]<<8|u[g[1]++];S+=Q,v[A]=S,A++}break;case 2:g[0]=h,g[1]=g[0]+n.width,g[2]=g[1]+n.width,h=g[2]+n.width;for(let E=0;E<n.width;++E){const Q=u[g[0]++]<<24|u[g[1]++]<<16|u[g[2]++]<<8;S+=Q,v[A]=S,A++}break}}return new DataView(v.buffer)}function Je(n){var s=n.viewer,u={value:n.offset.value},f=new Uint8Array(n.width*n.lines*(n.channels*n.type*2)),v={version:j(s,u),unknownUncompressedSize:j(s,u),unknownCompressedSize:j(s,u),acCompressedSize:j(s,u),dcCompressedSize:j(s,u),rleCompressedSize:j(s,u),rleUncompressedSize:j(s,u),rleRawSize:j(s,u),totalAcUncompressedCount:j(s,u),totalDcUncompressedCount:j(s,u),acCompression:j(s,u)};if(v.version<2)throw"EXRLoader.parse: "+xt.compression+" version "+v.version+" is unsupported";for(var h=new Array,A=Pe(s,u)-2;A>0;){var g=Le(s.buffer,u),T=te(s,u),w=T>>2&3,S=(T>>4)-1,E=new Int8Array([S])[0],Q=te(s,u);h.push({name:g,index:E,type:Q,compression:w}),A-=g.length+3}for(var D=xt.channels,M=new Array(n.channels),b=0;b<n.channels;++b){var U=M[b]={},G=D[b];U.name=G.name,U.compression=0,U.decoded=!1,U.type=G.pixelType,U.pLinear=G.pLinear,U.width=n.width,U.height=n.lines}for(var ee={idx:new Array(3)},Y=0;Y<n.channels;++Y)for(var U=M[Y],b=0;b<h.length;++b){var oe=h[b];U.name==oe.name&&(U.compression=oe.compression,oe.index>=0&&(ee.idx[oe.index]=Y),U.offset=Y)}if(v.acCompressedSize>0)switch(v.acCompression){case 0:var le=new Uint16Array(v.totalAcUncompressedCount);Fe(n.array,s,u,v.acCompressedSize,le,v.totalAcUncompressedCount);break;case 1:var z=n.array.slice(u.value,u.value+v.totalAcUncompressedCount),Ue=cn(z),le=new Uint16Array(Ue.buffer);u.value+=v.totalAcUncompressedCount;break}if(v.dcCompressedSize>0){var ae={array:n.array,offset:u,size:v.dcCompressedSize},_e=new Uint16Array(Re(ae).buffer);u.value+=v.dcCompressedSize}if(v.rleRawSize>0){var z=n.array.slice(u.value,u.value+v.rleCompressedSize),Ue=cn(z),St=Oe(Ue.buffer);u.value+=v.rleCompressedSize}for(var we=0,V=new Array(M.length),b=0;b<V.length;++b)V[b]=new Array;for(var ne=0;ne<n.lines;++ne)for(var X=0;X<M.length;++X)V[X].push(we),we+=M[X].width*n.type*2;ut(ee,V,M,le,_e,f);for(var b=0;b<M.length;++b){var U=M[b];if(!U.decoded)switch(U.compression){case 2:for(var F=0,Ee=0,ne=0;ne<n.lines;++ne){for(var qe=V[b][F],me=0;me<U.width;++me){for(var Ye=0;Ye<2*U.type;++Ye)f[qe++]=St[Ee+Ye*U.width*U.height];Ee++}F++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(f.buffer)}function Le(n,s){for(var u=new Uint8Array(n),f=0;u[s.value+f]!=0;)f+=1;var v=new TextDecoder().decode(u.slice(s.value,s.value+f));return s.value=s.value+f+1,v}function wt(n,s,u){var f=new TextDecoder().decode(new Uint8Array(n).slice(s.value,s.value+u));return s.value=s.value+u,f}function ft(n,s){var u=Me(n,s),f=ue(n,s);return[u,f]}function R(n,s){var u=ue(n,s),f=ue(n,s);return[u,f]}function Me(n,s){var u=n.getInt32(s.value,!0);return s.value=s.value+4,u}function ue(n,s){var u=n.getUint32(s.value,!0);return s.value=s.value+4,u}function ie(n,s){var u=n[s.value];return s.value=s.value+1,u}function te(n,s){var u=n.getUint8(s.value);return s.value=s.value+1,u}const j=function(n,s){let u;return"getBigInt64"in DataView.prototype?u=Number(n.getBigInt64(s.value,!0)):u=n.getUint32(s.value+4,!0)+Number(n.getUint32(s.value,!0)<<32),s.value+=8,u};function k(n,s){var u=n.getFloat32(s.value,!0);return s.value+=4,u}function be(n,s){return hn.toHalfFloat(k(n,s))}function C(n){var s=(n&31744)>>10,u=n&1023;return(n>>15?-1:1)*(s?s===31?u?NaN:1/0:Math.pow(2,s-15)*(1+u/1024):6103515625e-14*(u/1024))}function Pe(n,s){var u=n.getUint16(s.value,!0);return s.value+=2,u}function Kt(n,s){return C(Pe(n,s))}function Bt(n,s,u,f){for(var v=u.value,h=[];u.value<v+f-1;){var A=Le(s,u),g=Me(n,u),T=te(n,u);u.value+=3;var w=Me(n,u),S=Me(n,u);h.push({name:A,pixelType:g,pLinear:T,xSampling:w,ySampling:S})}return u.value+=1,h}function Ln(n,s){var u=k(n,s),f=k(n,s),v=k(n,s),h=k(n,s),A=k(n,s),g=k(n,s),T=k(n,s),w=k(n,s);return{redX:u,redY:f,greenX:v,greenY:h,blueX:A,blueY:g,whiteX:T,whiteY:w}}function Nn(n,s){var u=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],f=te(n,s);return u[f]}function _n(n,s){var u=ue(n,s),f=ue(n,s),v=ue(n,s),h=ue(n,s);return{xMin:u,yMin:f,xMax:v,yMax:h}}function Fn(n,s){var u=["INCREASING_Y"],f=te(n,s);return u[f]}function Hn(n,s){var u=k(n,s),f=k(n,s);return[u,f]}function Gn(n,s){var u=k(n,s),f=k(n,s),v=k(n,s);return[u,f,v]}function zn(n,s,u,f,v){if(f==="string"||f==="stringvector"||f==="iccProfile")return wt(s,u,v);if(f==="chlist")return Bt(n,s,u,v);if(f==="chromaticities")return Ln(n,u);if(f==="compression")return Nn(n,u);if(f==="box2i")return _n(n,u);if(f==="lineOrder")return Fn(n,u);if(f==="float")return k(n,u);if(f==="v2f")return Hn(n,u);if(f==="v3f")return Gn(n,u);if(f==="int")return Me(n,u);if(f==="rational")return ft(n,u);if(f==="timecode")return R(n,u);if(f==="preview")return u.value+=v,"skipped";u.value+=v}function kn(n,s,u){const f={};if(n.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";f.version=n.getUint8(4);const v=n.getUint8(5);f.spec={singleTile:!!(v&2),longName:!!(v&4),deepFormat:!!(v&8),multiPart:!!(v&16)},u.value=8;for(var h=!0;h;){var A=Le(s,u);if(A==0)h=!1;else{var g=Le(s,u),T=ue(n,u),w=zn(n,s,u,g,T);w===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${g}'.`):f[A]=w}}if((v&-5)!=0)throw console.error("EXRHeader:",f),"THREE.EXRLoader: provided file is currently unsupported.";return f}function Qn(n,s,u,f,v){const h={size:0,viewer:s,array:u,offset:f,width:n.dataWindow.xMax-n.dataWindow.xMin+1,height:n.dataWindow.yMax-n.dataWindow.yMin+1,channels:n.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:n.channels[0].pixelType,uncompress:null,getter:null,format:null,[Mr?"colorSpace":"encoding"]:null};switch(n.compression){case"NO_COMPRESSION":h.lines=1,h.uncompress=$;break;case"RLE_COMPRESSION":h.lines=1,h.uncompress=tt;break;case"ZIPS_COMPRESSION":h.lines=1,h.uncompress=Re;break;case"ZIP_COMPRESSION":h.lines=16,h.uncompress=Re;break;case"PIZ_COMPRESSION":h.lines=32,h.uncompress=Ke;break;case"PXR24_COMPRESSION":h.lines=16,h.uncompress=Ze;break;case"DWAA_COMPRESSION":h.lines=32,h.uncompress=Je;break;case"DWAB_COMPRESSION":h.lines=256,h.uncompress=Je;break;default:throw"EXRLoader.parse: "+n.compression+" is unsupported"}if(h.scanlineBlockSize=h.lines,h.type==1)switch(v){case ze:h.getter=Kt,h.inputSize=2;break;case $e:h.getter=Pe,h.inputSize=2;break}else if(h.type==2)switch(v){case ze:h.getter=k,h.inputSize=4;break;case $e:h.getter=be,h.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+h.type+" for "+n.compression+".";h.blockCount=(n.dataWindow.yMax+1)/h.scanlineBlockSize;for(var A=0;A<h.blockCount;A++)j(s,f);h.outputChannels=h.channels==3?4:h.channels;const g=h.width*h.height*h.outputChannels;switch(v){case ze:h.byteArray=new Float32Array(g),h.channels<h.outputChannels&&h.byteArray.fill(1,0,g);break;case $e:h.byteArray=new Uint16Array(g),h.channels<h.outputChannels&&h.byteArray.fill(15360,0,g);break;default:console.error("THREE.EXRLoader: unsupported type: ",v);break}return h.bytesPerLine=h.width*h.inputSize*h.channels,h.outputChannels==4?h.format=cr:h.format=Hi,Mr?h.colorSpace="srgb-linear":h.encoding=3e3,h}const Ut=new DataView(t),Yn=new Uint8Array(t),Et={value:0},xt=kn(Ut,t,Et),N=Qn(xt,Ut,Yn,Et,this.type),Cr={value:0},Vn={R:0,G:1,B:2,A:3,Y:0};for(let n=0;n<N.height/N.scanlineBlockSize;n++){const s=ue(Ut,Et);N.size=ue(Ut,Et),N.lines=s+N.scanlineBlockSize>N.height?N.height-s:N.scanlineBlockSize;const u=N.size<N.lines*N.bytesPerLine?N.uncompress(N):$(N);Et.value+=N.size;for(let f=0;f<N.scanlineBlockSize;f++){const v=f+n*N.scanlineBlockSize;if(v>=N.height)break;for(let h=0;h<N.channels;h++){const A=Vn[xt.channels[h].name];for(let g=0;g<N.width;g++){Cr.value=(f*(N.channels*N.width)+h*N.width+g)*N.inputSize;const T=(N.height-1-v)*(N.width*N.outputChannels)+g*N.outputChannels+A;N.byteArray[T]=N.getter(u,Cr)}}}}return{header:xt,width:N.width,height:N.height,data:N.byteArray,format:N.format,[Mr?"colorSpace":"encoding"]:N[Mr?"colorSpace":"encoding"],type:this.type}}setDataType(t){return this.type=t,this}load(t,r,i,a){function o(c,d){Mr?c.colorSpace=d.colorSpace:c.encoding=d.encoding,c.minFilter=Ne,c.magFilter=Ne,c.generateMipmaps=!1,c.flipY=!1,r&&r(c,d)}return super.load(t,o,i,a)}}function U1(e){var t=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<e.length;i++){var a=e[i];if(typeof a!="string")throw new TypeError("Url must be a string. Received "+a);a!==""&&(i>0&&(a=a.replace(/^[\/]+/,"")),i<e.length-1?a=a.replace(/[\/]+$/,""):a=a.replace(/[\/]+$/,"/"),t.push(a))}var o=t.join("/");o=o.replace(/\/(\?|&|#[^!])/g,"$1");var c=o.split("?");return o=c.shift()+(c.length>0?"?":"")+c.join("&"),o}function L1(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),U1(e)}class Gd extends Hr{constructor(){super(...arguments),this.format="exr",this.type=$e}setTypeFromRenderer(t){return this.type=t.getContext().getExtension("OES_texture_float_linear")==null?$e:ze,this}load(t,r,i,a){const o={},c=(d,{loader:l,extension:p})=>{l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(L1(t,`${d}${p}`),m=>{m.minFilter=Ne,m.magFilter=Ne,m.type=this.type,this.type===ze&&(m.image.data=new Float32Array(new ve(m.image.data.buffer))),o[`${d}Texture`]=m,o.irradianceTexture!=null&&o.scatteringTexture!=null&&o.transmittanceTexture!=null&&r(o)},i,a)};this.format==="exr"?(c("irradiance",{loader:new Wa(this.manager),extension:".exr"}),c("scattering",{loader:new bl(this.manager).setDepth(Fa),extension:".exr"}),c("transmittance",{loader:new Wa(this.manager),extension:".exr"})):(c("irradiance",{loader:_a(ii,{width:Bn,height:On}),extension:".bin"}),c("scattering",{loader:fl(ii,{width:o0,height:c0,depth:Fa}),extension:".bin"}),c("transmittance",{loader:_a(ii,{width:bn,height:Pn}),extension:".bin"}))}}function N1({topRadius:e,bottomRadius:t},r,i,a){const o=(r-t)/(e-t),c=i*.5+.5;return a.set(Tn(c,Bn),Tn(o,On))}const _1=1/Math.sqrt(Math.PI),li=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),F1=new _,di=new _,H1=new Ie,G1=new ye,z1={ellipsoid:Gt.WGS84,correctAltitude:!0,photometric:!0};class zd extends Mo{constructor(t,r=Qr.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new _,this.ellipsoidMatrix=new ye;const{irradianceTexture:i=null,ellipsoid:a,correctAltitude:o,photometric:c,sunDirection:d}={...z1,...t};this.irradianceTexture=i,this.ellipsoid=a,this.correctAltitude=o,this.photometric=c,this.sunDirection=(d==null?void 0:d.clone())??new _}update(){if(this.irradianceTexture==null)return;const t=G1.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(F1).applyMatrix4(t).sub(this.ellipsoidCenter);if(this.correctAltitude){const p=this.ellipsoid.projectOnSurface(r,di);p!=null&&r.sub(na(p,this.atmosphere.bottomRadius,this.ellipsoid,di))}const i=r.length(),a=r.dot(this.sunDirection)/i,o=N1(this.atmosphere,i,a,H1),c=qs(this.irradianceTexture,o,di);this.photometric&&c.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const d=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),l=this.sh.coefficients;l[0].copy(c).multiplyScalar(_1),l[1].copy(c).multiplyScalar(li*d.y),l[2].copy(c).multiplyScalar(li*d.z),l[3].copy(c).multiplyScalar(li*d.x)}}const k1=`precision highp float;
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
`,Q1=`precision highp float;
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
`;var Y1=Object.defineProperty,so=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&Y1(t,r,a),a};const V1={...ia,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class oo extends aa{constructor(t){const{sun:r,moon:i,moonDirection:a,moonAngularRadius:o,lunarRadianceScale:c,groundAlbedo:d,...l}={...V1,...t};super({name:"SkyMaterial",glslVersion:$a,vertexShader:zt(Q1,{parameters:vr}),fragmentShader:zt(k1,{core:{raySphereIntersection:Hs},parameters:vr,functions:qi,sky:zs}),...l,uniforms:{inverseProjectionMatrix:new y(new ye),inverseViewMatrix:new y(new ye),moonDirection:new y((a==null?void 0:a.clone())??new _),moonAngularRadius:new y(o),lunarRadianceScale:new y(c),groundAlbedo:new y((d==null?void 0:d.clone())??new Ar(0)),shadowLengthBuffer:new y(null),...l.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(t,r,i,a,o,c){super.onBeforeRender(t,r,i,a,o,c);const{uniforms:d,defines:l}=this;d.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),d.inverseViewMatrix.value.copy(i.matrixWorld);const p=l.PERSPECTIVE_CAMERA!=null,m=i.isPerspectiveCamera===!0;m!==p&&(m?l.PERSPECTIVE_CAMERA="1":delete l.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const x=this.groundAlbedo,I=l.GROUND_ALBEDO!=null,O=x.r!==0||x.g!==0||x.b!==0;O!==I&&(O?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const L=this.shadowLength,P=l.HAS_SHADOW_LENGTH!=null,W=L!=null;W!==P&&(W?l.HAS_SHADOW_LENGTH="1":(delete l.HAS_SHADOW_LENGTH,d.shadowLengthBuffer.value=null),this.needsUpdate=!0),W&&(d.shadowLengthBuffer.value=L.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(t){this.uniforms.moonAngularRadius.value=t}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(t){this.uniforms.lunarRadianceScale.value=t}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}so([Qe("SUN")],oo.prototype,"sun");so([Qe("MOON")],oo.prototype,"moon");const X1=`precision highp float;
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
`,W1=`precision highp float;
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
`;var j1=Object.defineProperty,K1=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&j1(t,r,a),a};const Z1={...ia,pointSize:1,radianceScale:1,background:!0};class J1 extends aa{constructor(t){const{pointSize:r,radianceScale:i,background:a,...o}={...Z1,...t};super({name:"StarsMaterial",glslVersion:$a,vertexShader:zt(W1,{parameters:vr}),fragmentShader:zt(X1,{parameters:vr,functions:qi}),...o,uniforms:{projectionMatrix:new y(new ye),modelViewMatrix:new y(new ye),viewMatrix:new y(new ye),matrixWorld:new y(new ye),cameraFar:new y(0),pointSize:new y(0),magnitudeRange:new y(new Ie(-2,8)),radianceScale:new y(i),...o.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=a}onBeforeRender(t,r,i,a,o,c){super.onBeforeRender(t,r,i,a,o,c);const d=this.uniforms;d.projectionMatrix.value.copy(i.projectionMatrix),d.modelViewMatrix.value.copy(i.modelViewMatrix),d.viewMatrix.value.copy(i.matrixWorldInverse),d.matrixWorld.value.copy(o.matrixWorld),d.cameraFar.value=i.far,d.pointSize.value=this.pointSize*t.getPixelRatio();const l=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==l&&(l?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(t){this.uniforms.radianceScale.value=t}}K1([Qe("BACKGROUND")],J1.prototype,"background");const q1=new _,$1=new ye,ed={ellipsoid:Gt.WGS84,correctAltitude:!0,photometric:!0,distance:1};class kd extends Bo{constructor(t,r=Qr.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new _,this.ellipsoidMatrix=new ye;const{irradianceTexture:i=null,ellipsoid:a,correctAltitude:o,photometric:c,sunDirection:d,distance:l}={...ed,...t};this.transmittanceTexture=i,this.ellipsoid=a,this.correctAltitude=o,this.photometric=c,this.sunDirection=(d==null?void 0:d.clone())??new _,this.distance=l}update(){if(this.position.copy(this.sunDirection).applyMatrix4(this.ellipsoidMatrix).normalize().multiplyScalar(this.distance).add(this.target.position),this.transmittanceTexture==null)return;const t=$1.copy(this.ellipsoidMatrix).invert(),r=this.target.getWorldPosition(q1).applyMatrix4(t).sub(this.ellipsoidCenter);w1(this.transmittanceTexture,r,this.sunDirection,this.color,{ellipsoid:this.ellipsoid,correctAltitude:this.correctAltitude,photometric:this.photometric},this.atmosphere)}}const td=`#include "core/depth"
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
`;var rd=Object.defineProperty,nd=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&rd(t,r,a),a};const id={blendFunction:q.SRC,useTurbo:!1,near:1,far:1e3};class ad extends jt{constructor(t){const{blendFunction:r,useTurbo:i,near:a,far:o}={...id,...t};super("DepthEffect",zt(td,{core:{depth:Ji,turbo:n0}}),{blendFunction:r,attributes:ot.DEPTH,uniforms:new Map(Object.entries({near:new y(a),far:new y(o)}))}),this.useTurbo=i}get near(){return this.uniforms.get("near").value}set near(t){this.uniforms.get("near").value=t}get far(){return this.uniforms.get("far").value}set far(t){this.uniforms.get("far").value=t}}nd([Qe("USE_TURBO")],ad.prototype,"useTurbo");const sd=`#define DITHERING

#include <dithering_pars_fragment>

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  outputColor = vec4(saturate(dithering(inputColor.rgb)), inputColor.a);
}
`,od={blendFunction:q.NORMAL};class Qd extends jt{constructor(t){const{blendFunction:r}={...od,...t};super("DitheringEffect",sd,{blendFunction:r})}}const cd=`#include <common>

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
`,ud=`uniform vec2 texelSize;

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
`,ld={thresholdLevel:10,thresholdRange:1};class dd extends gt{constructor(t){const{inputBuffer:r=null,thresholdLevel:i,thresholdRange:a,...o}={...ld,...t};super({name:"DownsampleThresholdMaterial",fragmentShader:cd,vertexShader:ud,blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,...o,uniforms:{inputBuffer:new y(r),texelSize:new y(new Ie),thresholdLevel:new y(i),thresholdRange:new y(a),...o.uniforms}})}setSize(t,r){this.uniforms.texelSize.value.set(1/t,1/r)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){this.uniforms.inputBuffer.value=t}get thresholdLevel(){return this.uniforms.thresholdLevel.value}set thresholdLevel(t){this.uniforms.thresholdLevel.value=t}get thresholdRange(){return this.uniforms.thresholdRange.value}set thresholdRange(t){this.uniforms.thresholdRange.value=t}}const fd=`#include <common>

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

`,hd=`uniform vec2 texelSize;

out vec2 vUv;
out vec2 vAspectRatio;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vAspectRatio = vec2(texelSize.x / texelSize.y, 1.0);
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,vd={ghostAmount:.001,haloAmount:.001,chromaticAberration:10};class pd extends gt{constructor(t){const{inputBuffer:r=null,ghostAmount:i,haloAmount:a,chromaticAberration:o,...c}={...vd,...t};super({name:"LensFlareFeaturesMaterial",fragmentShader:fd,vertexShader:hd,blending:It,toneMapped:!1,depthWrite:!1,depthTest:!1,uniforms:{inputBuffer:new y(r),texelSize:new y(new Ie),ghostAmount:new y(i),haloAmount:new y(a),chromaticAberration:new y(o),...c.uniforms}})}setSize(t,r){this.uniforms.texelSize.value.set(1/t,1/r)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){this.uniforms.inputBuffer.value=t}get ghostAmount(){return this.uniforms.ghostAmount.value}set ghostAmount(t){this.uniforms.ghostAmount.value=t}get haloAmount(){return this.uniforms.haloAmount.value}set haloAmount(t){this.uniforms.haloAmount.value=t}get chromaticAberration(){return this.uniforms.chromaticAberration.value}set chromaticAberration(t){this.uniforms.chromaticAberration.value=t}}const gd=`uniform sampler2D bloomBuffer;
uniform sampler2D featuresBuffer;
uniform float intensity;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  vec3 bloom = texture(bloomBuffer, uv).rgb;
  vec3 features = texture(featuresBuffer, uv).rgb;
  outputColor = vec4(inputColor.rgb + (bloom + features) * intensity, inputColor.a);
}
`,md={blendFunction:q.NORMAL,resolutionScale:.5,width:st.AUTO_SIZE,height:st.AUTO_SIZE,intensity:.005};class Yd extends jt{constructor(t){const{blendFunction:r,resolutionScale:i,width:a,height:o,resolutionX:c=a,resolutionY:d=o,intensity:l}={...md,...t};super("LensFlareEffect",gd,{blendFunction:r,attributes:ot.CONVOLUTION,uniforms:new Map(Object.entries({bloomBuffer:new y(null),featuresBuffer:new y(null),intensity:new y(1)}))}),this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.renderTarget1=new ct(1,1,{depthBuffer:!1,stencilBuffer:!1,type:$e}),this.renderTarget1.texture.name="LensFlare.Target1",this.renderTarget2=new ct(1,1,{depthBuffer:!1,stencilBuffer:!1,type:$e}),this.renderTarget2.texture.name="LensFlare.Target2",this.thresholdMaterial=new dd,this.thresholdPass=new vn(this.thresholdMaterial),this.blurPass=new bc,this.blurPass.levels=8,this.preBlurPass=new Sc({kernelSize:ki.SMALL}),this.featuresMaterial=new pd,this.featuresPass=new vn(this.featuresMaterial),this.uniforms.get("bloomBuffer").value=this.blurPass.texture,this.uniforms.get("featuresBuffer").value=this.renderTarget1.texture,this.resolution=new st(this,c,d,i),this.resolution.addEventListener("change",this.onResolutionChange),this.intensity=l}initialize(t,r,i){this.thresholdPass.initialize(t,r,i),this.blurPass.initialize(t,r,i),this.preBlurPass.initialize(t,r,i),this.featuresPass.initialize(t,r,i)}update(t,r,i){this.thresholdPass.render(t,r,this.renderTarget1),this.blurPass.render(t,this.renderTarget1,null),this.preBlurPass.render(t,this.renderTarget1,this.renderTarget2),this.featuresPass.render(t,this.renderTarget2,this.renderTarget1)}setSize(t,r){const i=this.resolution;i.setBaseSize(t,r);const{width:a,height:o}=i;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o),this.thresholdMaterial.setSize(a,o),this.blurPass.setSize(a,o),this.preBlurPass.setSize(a,o),this.featuresMaterial.setSize(a,o)}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}get thresholdLevel(){return this.thresholdMaterial.thresholdLevel}set thresholdLevel(t){this.thresholdMaterial.thresholdLevel=t}get thresholdRange(){return this.thresholdMaterial.thresholdRange}set thresholdRange(t){this.thresholdMaterial.thresholdRange=t}}const Ad=`#include "core/depth"
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
`;var wd=Object.defineProperty,co=(e,t,r,i)=>{for(var a=void 0,o=e.length-1,c;o>=0;o--)(c=e[o])&&(a=c(t,r,a)||a);return a&&wd(t,r,a),a};const Ed={blendFunction:q.SRC,octEncoded:!1,reconstructFromDepth:!1};class uo extends jt{constructor(t,r){const{blendFunction:i,normalBuffer:a=null,octEncoded:o,reconstructFromDepth:c}={...Ed,...r};super("NormalEffect",zt(Ad,{core:{depth:Ji,packing:Fs,transform:Gs}}),{blendFunction:i,attributes:ot.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new y(a),projectionMatrix:new y(new ye),inverseProjectionMatrix:new y(new ye)}))}),this.camera=t,t!=null&&(this.mainCamera=t),this.octEncoded=o,this.reconstructFromDepth=c}get mainCamera(){return this.camera}set mainCamera(t){this.camera=t}update(t,r,i){const a=this.uniforms,o=a.get("projectionMatrix"),c=a.get("inverseProjectionMatrix"),d=this.camera;d!=null&&(o.value.copy(d.projectionMatrix),c.value.copy(d.projectionMatrixInverse))}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(t){this.uniforms.get("normalBuffer").value=t}}co([Qe("OCT_ENCODED")],uo.prototype,"octEncoded");co([Qe("RECONSTRUCT_FROM_DEPTH")],uo.prototype,"reconstructFromDepth");export{Gl as $,aa as A,t0 as B,hl as C,e0 as D,Sd as E,kd as F,Od as G,gl as H,Nd as I,n0 as J,Ji as K,_c as L,Rd as M,At as N,Fd as O,Gd as P,Ms as Q,Lc as R,Td as S,yd as T,Hd as U,Ld as V,bd as W,_s as X,Ud as Y,Qe as Z,i0 as _,nu as a,Cd as b,Pc as c,Dd as d,Yd as e,it as f,eu as g,Gt as h,zd as i,jt as j,Qr as k,ot as l,Pd as m,qi as n,st as o,na as p,Bd as q,vn as r,nt as s,vr as t,Qd as u,Ql as v,zt as w,oo as x,Hs as y,r0 as z};
