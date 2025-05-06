import{n as Me,t as He,i as Fe,j as ge,k as ze,l as k,m as We,o as j,p as Be,q as ye,r as Se,s as Ge,_ as Ve,v as ke,w as je,y as Ye,z as xe,A as qe}from"./shared-eb7iGhRc.js";import{m,n as P,o as X,p as we,U as o,V as p,M as v,E as Ze,q as oe,Y as ne,s as Ce,t as se,D as ce,O as le,u as Xe,w as x,x as K,y as F,z,A as N,F as Ke,H as Te,d as H,R as Je,I as $e,g as Qe,J as De,Z as C}from"./index-DDLoJ-mC.js";const ue=Me,he=He;class W{constructor(e=0,t=0,a=0,i=0){this.expTerm=e,this.exponent=t,this.linearTerm=a,this.constantTerm=i}set(e=0,t=0,a=0,i=0){return this.expTerm=e,this.exponent=t,this.linearTerm=a,this.constantTerm=i,this}clone(){return new W(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}}const et=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function tt(n,e){if(e!=null)for(const t of et){const a=e[t];a!=null&&(n[t]instanceof W?n[t].copy(a):n[t]=a)}}const Y=class Ee{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new W(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return tt(this,e),this}clone(){return new Ee(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};Y.DEFAULT=new Y;let E=Y;const _=Array.from({length:8},()=>({value:0,flag:0})),I=Array.from({length:3},()=>({min:0,max:0}));function at(n,e){return n.value!==e.value?n.value-e.value:n.flag-e.flag}const q=class Ae extends Array{constructor(e){super(new E(e==null?void 0:e[0]),new E(e==null?void 0:e[1]),new E(e==null?void 0:e[2]),new E(e==null?void 0:e[3]))}set(e){return this[0].set(e==null?void 0:e[0]),this[1].set(e==null?void 0:e[1]),this[2].set(e==null?void 0:e[2]),this[3].set(e==null?void 0:e[3]),this}reset(){return this[0].copy(E.DEFAULT),this[1].copy(E.DEFAULT),this[2].copy(E.DEFAULT),this[3].copy(E.DEFAULT),this}clone(){return new Ae(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,a){return a.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let s=0;s<4;++s){const c=this[s];let u=_[s];u.value=c.altitude,u.flag=0,u=_[s+4],u.value=c.altitude+c.height,u.flag=1}_.sort(at);let a=0,i=0;for(let s=0;s<_.length;++s){const{value:c,flag:u}=_[s];if(i===0&&s>0){const h=I[a++];h.min=_[s-1].value,h.max=c}i+=u===0?1:-1}for(;a<3;++a){const s=I[a];s.min=0,s.max=0}let r=I[0];e.x=r.min,t.x=r.max,r=I[1],e.y=r.min,t.y=r.max,r=I[2],e.z=r.min,t.z=r.max}};q.DEFAULT=new q([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);let it=q;var rt="Invariant failed";function A(n,e){if(!n)throw new Error(rt)}class b{constructor(e,t){this.near=[new p,new p,new p,new p],this.far=[new p,new p,new p,new p],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new b().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){const a=e.isOrthographicCamera===!0,i=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let r=0;r<4;++r)this.near[r].applyMatrix4(i);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let r=0;r<4;++r){const s=this.far[r];s.applyMatrix4(i);const c=Math.abs(s.z);a?s.z*=Math.min(t/c,1):s.multiplyScalar(Math.min(t/c,1))}return this}split(e,t=[]){for(let a=0;a<e.length;++a){const i=t[a]??(t[a]=new b);if(a===0)for(let r=0;r<4;++r)i.near[r].copy(this.near[r]);else for(let r=0;r<4;++r)i.near[r].lerpVectors(this.near[r],this.far[r],e[a-1]);if(a===e.length-1)for(let r=0;r<4;++r)i.far[r].copy(this.far[r]);else for(let r=0;r<4;++r)i.far[r].lerpVectors(this.near[r],this.far[r],e[a])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}}const ot={uniform:(n,e,t,a,i=[])=>{for(let r=0;r<n;++r)i[r]=(e+(t-e)*(r+1)/n)/t;return i.length=n,i},logarithmic:(n,e,t,a,i=[])=>{for(let r=0;r<n;++r)i[r]=e*(t/e)**((r+1)/n)/t;return i.length=n,i},practical:(n,e,t,a=.5,i=[])=>{for(let r=0;r<n;++r){const s=(e+(t-e)*(r+1)/n)/t,c=e*(t/e)**((r+1)/n)/t;i[r]=Ce(s,c,a)}return i.length=n,i}};function nt(n,e,t,a,i,r=[]){return ot[n](e,t,a,i,r)}const de=new p,pe=new p,st=new v,me=new v,ct=new b,lt=new Xe,ut={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0};class ht{constructor(e){this.cascades=[],this.mapSize=new m,this.cameraFrustum=new b,this.frusta=[],this.splits=[],this._far=0;const{cascadeCount:t,mapSize:a,maxFar:i,farScale:r,splitMode:s,splitLambda:c,margin:u,fade:h}={...ut,...e};this.cascadeCount=t,this.mapSize.copy(a),this.maxFar=i,this.farScale=r,this.splitMode=s,this.splitLambda=c,this.margin=u,this.fade=h}get cascadeCount(){return this.cascades.length}set cascadeCount(e){var t;if(e!==this.cascadeCount){for(let a=0;a<e;++a)(t=this.cascades)[a]??(t[a]={interval:new m,matrix:new v,inverseMatrix:new v,projectionMatrix:new v,inverseProjectionMatrix:new v,viewMatrix:new v,inverseViewMatrix:new v});this.cascades.length=e}}get far(){return this._far}updateIntervals(e){const t=this.cascadeCount,a=this.splits,i=this.far;nt(this.splitMode,t,e.near,i,this.splitLambda,a),this.cameraFrustum.setFromCamera(e,i),this.cameraFrustum.split(a,this.frusta);const r=this.cascades;for(let s=0;s<t;++s)r[s].interval.set(a[s-1]??0,a[s]??0)}getFrustumRadius(e,t){const a=t.near,i=t.far;let r=Math.max(i[0].distanceTo(i[2]),i[0].distanceTo(a[2]));if(this.fade){const s=e.near,c=this.far,u=i[0].z/(c-s);r+=.25*u**2*(c-s)}return r*.5}updateMatrices(e,t,a=1){const i=st.lookAt(de.setScalar(0),pe.copy(t).multiplyScalar(-1),le.DEFAULT_UP),r=me.multiplyMatrices(me.copy(i).invert(),e.matrixWorld),s=this.frusta,c=this.cascades;A(s.length===c.length);const u=this.margin,h=this.mapSize;for(let d=0;d<s.length;++d){const f=s[d],y=c[d],g=this.getFrustumRadius(e,s[d]),$=-g,Q=g,ee=g,te=-g;y.projectionMatrix.makeOrthographic($,Q,ee,te,-this.margin,g*2+this.margin);const{near:be,far:Ue}=ct.copy(f).applyMatrix4(r),U=lt.makeEmpty();for(let M=0;M<4;M++)U.expandByPoint(be[M]),U.expandByPoint(Ue[M]);const D=U.getCenter(de);D.z=U.max.z+u;const ae=(Q-$)/h.width,ie=(ee-te)/h.height;D.x=Math.round(D.x/ae)*ae,D.y=Math.round(D.y/ie)*ie,D.applyMatrix4(i);const re=pe.copy(t).multiplyScalar(a).add(D);y.inverseViewMatrix.lookAt(D,re,le.DEFAULT_UP).setPosition(re)}}update(e,t,a){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,a);const i=this.cascades,r=this.cascadeCount;for(let s=0;s<r;++s){const{matrix:c,inverseMatrix:u,projectionMatrix:h,inverseProjectionMatrix:d,viewMatrix:f,inverseViewMatrix:y}=i[s];d.copy(h).invert(),f.copy(y).invert(),c.copy(h).multiply(f),u.copy(y).multiply(d)}}}const fe=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Oe=fe.reduce((n,e,t)=>{const a=new m;for(let i=0;i<16;++i)if(fe[i]===t){a.set((i%4+.5)/4,(Math.floor(i/4)+.5)/4);break}return[...n,a]},[]),dt={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyIrradiance:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new m(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},l=dt,pt={low:{...l,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...l.clouds,accurateSunSkyIrradiance:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...l.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new m(256,256)}},medium:{...l,lightShafts:!1,turbulence:!1,clouds:{...l.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyIrradiance:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...l.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new m(256,256)}},high:l,ultra:{...l,clouds:{...l.clouds,minStepSize:10},shadow:{...l.shadow,mapSize:new m(1024,1024)}}},mt=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#include "atmosphere/parameters"
#include "atmosphere/functions"
#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 (0.07957747154594767)
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyIrradianceScale;
uniform float groundIrradianceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vEllipsoidCenter;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float readDepth(const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ECEFToWorld(const vec3 positionECEF) {
  return mat3(ellipsoidMatrix) * (positionECEF + vEllipsoidCenter);
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ECEFToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ECEFToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ECEFToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE (0)
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_IRRADIANCE
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_IRRADIANCE
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_IRRADIANCE
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_IRRADIANCE
  return GetSunAndSkyIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_IRRADIANCE
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_IRRADIANCE
}

#ifdef GROUND_IRRADIANCE
vec3 approximateIrradianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance * RECIPROCAL_PI2;
  vec3 bouncedLight = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  vec3 bouncedIrradiance = bouncedLight * exp(-opticalDepthToGround);
  return albedo * bouncedIrradiance * RECIPROCAL_PI4 * groundIrradianceScale;
}
#endif // GROUND_IRRADIANCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      float scattering = approximateMultipleScattering(opticalDepth, cosTheta);
      vec3 radiance = albedo * sunIrradiance * scattering;

      #ifdef GROUND_IRRADIANCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        radiance += approximateIrradianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
      }
      #endif // GROUND_IRRADIANCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(0.5 + weather.heightFraction, media.weight);
      radiance += albedo * skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyIrradianceScale;

      // Finally multiply by extinction (redundant but kept for clarity).
      radiance *= media.extinction;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 1e-3;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;

    // Hack to prevent over-integration of shadow length. The shadow should be
    // attenuated by the inscatter as the ray travels further.
    attenuation *= attenuationFactor;
    if (attenuation < 1e-5) {
      break;
    }

    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normalize(rayOrigin), rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float linearTerm = density / hazeExponent / angle;
  float opticalDepth = expTerm * linearTerm;
  float effectiveOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 irradiance = sunIrradiance * phaseFunction(cosTheta);
  irradiance += skyIrradiance * RECIPROCAL_PI4 * skyIrradianceScale;
  vec3 inscatter = albedo * irradiance * saturate(1.0 - exp(-effectiveOpticalDepth));

  // Inscatter is attenuated by shadow length, but transmittance is not.
  return vec4(inscatter, saturate(1.0 - exp(-opticalDepth)));
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  float clampedAlpha = max(color.a, 1e-7);
  color.rgb = mix(vec3(0.0), color.rgb * transmittance / clampedAlpha + inscatter, color.a);
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection) {
  float depth = readDepth(vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    float viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  return -1.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float rayDistanceToScene = getRayDistanceToScene(rayDirection);
  if (rayDistanceToScene >= 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    if (marchedFrontDepth >= 0.0) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE
    }

    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Apply aerial perspective.
    vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
    applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

    // Velocity for temporal resolution.
    vec3 frontPositionWorld = ECEFToWorld(frontPosition);
    vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = (vUv - prevUv) * resolution;
    depthVelocity = vec3(frontDepth, velocity);

  } else {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // TODO: We can calculate velocity to reduce occlusion errors at the edges,
    // but suffers from floating-point precision errors on near objects.

    // if (intersectsScene) {
    //   vec3 frontPosition = cameraPosition + rayNearFar.y * rayDirection;
    //   vec3 frontPositionWorld = ECEFToWorld(frontPosition);
    //   vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
    //   prevClip /= prevClip.w;
    //   vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    //   vec2 velocity = (vUv - prevUv) * resolution;
    //   depthVelocity = vec3(rayNearFar.y, velocity);
    // }

  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color = color * (1.0 - haze.a) + haze;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,_e=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Nicely decrease the density at the bottom.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,ft=`precision highp float;
precision highp sampler3D;

#include "atmosphere/parameters"
#include "atmosphere/functions"
#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vEllipsoidCenter;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
  vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * cameraPosition;
  vCameraDirection = rotation * normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vRayDirection = rotation * worldDirection.xyz;
  vEllipsoidCenter = ellipsoidCenter + altitudeCorrection;

  sampleSunSkyIrradiance(vCameraPosition - vEllipsoidCenter);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Pe=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 ellipsoidMatrix;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;
uniform vec3 albedo;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform DensityProfile densityProfile;
`,Z=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct DensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`;var vt=Object.defineProperty,w=(n,e,t,a)=>{for(var i=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(i=s(e,t,i)||i);return i&&vt(e,t,i),i};const gt=new p,yt=new Je;class S extends Ge{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a},i=ge.DEFAULT){super({name:"CloudsMaterial",glslVersion:z,vertexShader:N(ft,{atmosphere:{parameters:he,functions:ue},types:Z}),fragmentShader:F(N(mt,{core:{depth:qe,math:Se,turbo:xe,generators:Ye,raySphereIntersection:ye,cascadedShadowMaps:je,interleavedGradientNoise:ke,vogelDisk:Ve},atmosphere:{parameters:he,functions:ue},types:Z,parameters:Pe,clouds:_e})),uniforms:{...e,...t,...a,depthBuffer:new o(null),viewMatrix:new o(new v),inverseProjectionMatrix:new o(new v),inverseViewMatrix:new o(new v),reprojectionMatrix:new o(new v),resolution:new o(new m),cameraNear:new o(0),cameraFar:new o(0),cameraHeight:new o(0),frame:new o(0),temporalJitter:new o(new m),targetUvScale:new o(new m),mipLevelScale:new o(1),stbnTexture:new o(null),albedo:new o(new p),skyIrradianceScale:new o(2.5),groundIrradianceScale:new o(3),powderScale:new o(.8),powderExponent:new o(150),maxIterationCount:new o(l.clouds.maxIterationCount),minStepSize:new o(l.clouds.minStepSize),maxStepSize:new o(l.clouds.maxStepSize),maxRayDistance:new o(l.clouds.maxRayDistance),perspectiveStepScale:new o(l.clouds.perspectiveStepScale),minDensity:new o(l.clouds.minDensity),minExtinction:new o(l.clouds.minExtinction),minTransmittance:new o(l.clouds.minTransmittance),maxIterationCountToSun:new o(l.clouds.maxIterationCountToSun),maxIterationCountToGround:new o(l.clouds.maxIterationCountToGround),minSecondaryStepSize:new o(l.clouds.minSecondaryStepSize),secondaryStepScale:new o(l.clouds.secondaryStepScale),shadowBuffer:new o(null),shadowTexelSize:new o(new m),shadowIntervals:new o(Array.from({length:4},()=>new m)),shadowMatrices:new o(Array.from({length:4},()=>new v)),shadowFar:new o(0),maxShadowFilterRadius:new o(6),shadowLayerMask:new o(new x().setScalar(1)),maxShadowLengthIterationCount:new o(l.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new o(l.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new o(l.clouds.maxShadowLengthRayDistance),hazeDensityScale:new o(3e-5),hazeExponent:new o(.001)}},i),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=l.shapeDetail,this.turbulence=l.turbulence,this.shadowLength=l.lightShafts,this.haze=l.haze,this.multiScatteringOctaves=l.clouds.multiScatteringOctaves,this.accurateSunSkyIrradiance=l.clouds.accurateSunSkyIrradiance,this.accuratePhaseFunction=l.clouds.accuratePhaseFunction,this.shadowCascadeCount=l.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,a,i,r,s){const c=this.uniforms;c.albedo.value.setScalar(c.scatteringCoefficient.value/(c.absorptionCoefficient.value+c.scatteringCoefficient.value));const u=this.defines.POWDER!=null,h=this.uniforms.powderScale.value>0;h!==u&&(h?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);const d=this.defines.GROUND_IRRADIANCE!=null;(this.uniforms.groundIrradianceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==d&&(h?this.defines.GROUND_IRRADIANCE="1":delete this.defines.GROUND_IRRADIANCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);const a=this.previousProjectionMatrix??e.projectionMatrix,i=this.previousViewMatrix??e.matrixWorldInverse,r=t.inverseProjectionMatrix.value,s=t.reprojectionMatrix.value;if(this.temporalUpscale){const h=t.frame.value%16,d=t.resolution.value,f=Oe[h],y=(f.x-.5)/d.x*4,g=(f.y-.5)/d.y*4;t.temporalJitter.value.set(y,g),t.mipLevelScale.value=.25,r.copy(e.projectionMatrix),r.elements[8]+=y*2,r.elements[9]+=g*2,r.invert(),s.copy(a),s.elements[8]+=y*2,s.elements[9]+=g*2,s.multiply(i)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,r.copy(e.projectionMatrixInverse),s.copy(a).multiply(i);t.cameraNear.value=e.near,t.cameraFar.value=e.far;const c=e.getWorldPosition(t.cameraPosition.value),u=gt.copy(c).applyMatrix4(t.inverseEllipsoidMatrix.value).sub(t.ellipsoidCenter.value);try{t.cameraHeight.value=yt.setFromECEF(u).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??(this.previousProjectionMatrix=new v),this.previousViewMatrix??(this.previousViewMatrix=new v),this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,a,i){this.uniforms.resolution.value.set(e,t),a!=null&&i!=null?this.uniforms.targetUvScale.value.set(e/a,t/i):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}}w([P("DEPTH_PACKING")],S.prototype,"depthPacking");w([De("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],S.prototype,"localWeatherChannels");w([C("SHAPE_DETAIL")],S.prototype,"shapeDetail");w([C("TURBULENCE")],S.prototype,"turbulence");w([C("SHADOW_LENGTH")],S.prototype,"shadowLength");w([C("HAZE")],S.prototype,"haze");w([P("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],S.prototype,"multiScatteringOctaves");w([C("ACCURATE_SUN_SKY_IRRADIANCE")],S.prototype,"accurateSunSkyIrradiance");w([C("ACCURATE_PHASE_FUNCTION")],S.prototype,"accuratePhaseFunction");w([P("SHADOW_CASCADE_COUNT",{min:1,max:4})],S.prototype,"shadowCascadeCount");w([P("SHADOW_SAMPLE_COUNT",{min:1,max:16})],S.prototype,"shadowSampleCount");w([X("SCATTER_ANISOTROPY_1")],S.prototype,"scatterAnisotropy1");w([X("SCATTER_ANISOTROPY_2")],S.prototype,"scatterAnisotropy2");w([X("SCATTER_ANISOTROPY_MIX")],S.prototype,"scatterAnisotropyMix");const St=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,xt=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec2 getUnjitteredUv(ivec2 coord) {
  return (vec2(coord) + 0.5 - jitterOffset) * texelSize;
}

vec4 getClosestFragment(const vec2 uv) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = textureOffset(depthVelocityBuffer, uv, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  #if !defined(DEBUG_SHOW_VELOCITY)
  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = texelFetch(colorBuffer, lowResCoord, 0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = texelFetch(shadowLengthBuffer, lowResCoord, 0).r;
    #endif // SHADOW_LENGTH
    return;
  }
  #endif // !defined(DEBUG_SHOW_VELOCITY)

  vec2 unjitteredUv = getUnjitteredUv(coord);
  vec4 currentColor = texture(colorBuffer, unjitteredUv);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texture(shadowLengthBuffer, unjitteredUv).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(unjitteredUv);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(velocity), 0.0);
  #endif // DEBUG_SHOW_VELOCITY

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(velocity), 0.0);
  #endif // DEBUG_SHOW_VELOCITY

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
}
`,wt=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Re=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT (8)
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT (4)
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`;var Ct=Object.defineProperty,Ie=(n,e,t,a)=>{for(var i=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(i=s(e,t,i)||i);return i&&Ct(e,t,i),i};class J extends K{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:a=null,colorHistoryBuffer:i=null,shadowLengthHistoryBuffer:r=null}={}){super({name:"CloudsResolveMaterial",glslVersion:z,vertexShader:wt,fragmentShader:F(N(xt,{core:{turbo:xe},catmullRomSampling:St,varianceClipping:Re})),uniforms:{colorBuffer:new o(e),depthVelocityBuffer:new o(t),shadowLengthBuffer:new o(a),colorHistoryBuffer:new o(i),shadowLengthHistoryBuffer:new o(r),texelSize:new o(new m),frame:new o(0),jitterOffset:new o(new m),varianceGamma:new o(2),temporalAlpha:new o(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,a,i,r,s){const c=this.uniforms.frame.value%16,u=Oe[c],h=(u.x-.5)*4,d=(u.y-.5)*4;this.uniforms.jitterOffset.value.set(h,d)}}Ie([C("TEMPORAL_UPSCALE")],J.prototype,"temporalUpscale");Ie([C("SHADOW_LENGTH")],J.prototype,"shadowLength");class Le extends Be{constructor(e,t){super(e),this._mainCamera=new we;const{shadow:a}=t;this.shadow=a}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}}function B(n,{depthVelocity:e,shadowLength:t}){const a=new $e(1,1,{depthBuffer:!1,stencilBuffer:!1,type:Te});a.texture.minFilter=H,a.texture.magFilter=H,a.texture.name=n;let i;e&&(i=a.texture.clone(),i.isRenderTargetTexture=!0,a.depthVelocity=i,a.textures.push(i));let r;return t&&(r=a.texture.clone(),r.isRenderTargetTexture=!0,r.format=Qe,a.shadowLength=r,a.textures.push(r)),Object.assign(a,{depthVelocity:i??null,shadowLength:r??null})}class Tt extends Le{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a,...i},r){super("CloudsPass",i),this.atmosphere=r,this.width=0,this.height=0,this.currentMaterial=new S({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a},r),this.currentPass=new j(this.currentMaterial),this.resolveMaterial=new J,this.resolvePass=new j(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:l.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,a){this.currentPass.initialize(e,t,a),this.resolvePass.initialize(e,t,a)}initRenderTargets(e){var t,a,i;(t=this.currentRenderTarget)==null||t.dispose(),(a=this.resolveRenderTarget)==null||a.dispose(),(i=this.historyRenderTarget)==null||i.dispose();const r=B("Clouds",e),s=B("Clouds.A",{...e,depthVelocity:!1}),c=B("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=r,this.resolveRenderTarget=s,this.historyRenderTarget=c;const u=this.resolveMaterial.uniforms;u.colorBuffer.value=r.texture,u.depthVelocityBuffer.value=r.depthVelocity,u.shadowLengthBuffer.value=r.shadowLength,u.colorHistoryBuffer.value=c.texture,u.shadowLengthHistoryBuffer.value=c.shadowLength}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const i=e.cascades[a];t.shadowIntervals.value[a].copy(i.interval),t.shadowMatrices.value[a].copy(i.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;const a=this.resolveMaterial.uniforms;a.colorHistoryBuffer.value=t.texture,a.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,a){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){const a=Math.ceil(e/4),i=Math.ceil(t/4);this.currentRenderTarget.setSize(a,i),this.currentMaterial.setSize(a*4,i*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,a){this.currentMaterial.shadowCascadeCount=a,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}}function Dt(n,e){const t=n.properties.get(e.texture).__webglTexture,a=n.getContext();A(a instanceof WebGL2RenderingContext),n.setRenderTarget(e);const i=[];if(t!=null)for(let r=0;r<e.depth;++r)a.framebufferTextureLayer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+r,t,0,r),i.push(a.COLOR_ATTACHMENT0+r);a.drawBuffers(i)}class ve extends j{render(e,t,a,i,r){const s=this.fullscreenMaterial.uniforms;t!==null&&(s==null?void 0:s[this.input])!=null&&(s[this.input].value=t.texture),Dt(e,a),e.render(this.scene,this.camera)}}const Et=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = mat3(inverseEllipsoidMatrix) * point.xyz - vEllipsoidCenter;

  // The sun direction is in ECEF. Since the view matrix is constructed with the
  // ellipsoid matrix already applied, there's no need to apply the inverse
  // matrix here.
  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = mat3(ellipsoidMatrix) * (frontPosition + vEllipsoidCenter);
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,At=`precision highp float;

uniform vec3 ellipsoidCenter;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vEllipsoidCenter;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vEllipsoidCenter = ellipsoidCenter + altitudeCorrection;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Ot=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`;var _t=Object.defineProperty,R=(n,e,t,a)=>{for(var i=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(i=s(e,t,i)||i);return i&&_t(e,t,i),i};class O extends K{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a}){super({name:"ShadowMaterial",glslVersion:z,vertexShader:At,fragmentShader:F(N(Et,{core:{math:Se,raySphereIntersection:ye},types:Z,parameters:Pe,structuredSampling:Ot,clouds:_e})),uniforms:{...e,...t,...a,inverseShadowMatrices:new o(Array.from({length:4},()=>new v)),reprojectionMatrices:new o(Array.from({length:4},()=>new v)),resolution:new o(new m),frame:new o(0),stbnTexture:new o(null),maxIterationCount:new o(l.shadow.maxIterationCount),minStepSize:new o(l.shadow.minStepSize),maxStepSize:new o(l.shadow.maxStepSize),minDensity:new o(l.shadow.minDensity),minExtinction:new o(l.shadow.minExtinction),minTransmittance:new o(l.shadow.minTransmittance),opticalDepthTailScale:new o(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=l.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=l.shapeDetail,this.turbulence=l.turbulence,this.cascadeCount=l.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}}R([De("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],O.prototype,"localWeatherChannels");R([P("CASCADE_COUNT",{min:1,max:4})],O.prototype,"cascadeCount");R([C("TEMPORAL_PASS")],O.prototype,"temporalPass");R([C("TEMPORAL_JITTER")],O.prototype,"temporalJitter");R([C("SHAPE_DETAIL")],O.prototype,"shapeDetail");R([C("TURBULENCE")],O.prototype,"turbulence");const Pt=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES (1)
#define VARIANCE_SAMPLER_ARRAY (1)

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,Rt=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var It=Object.defineProperty,Lt=(n,e,t,a)=>{for(var i=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(i=s(e,t,i)||i);return i&&It(e,t,i),i};class Ne extends K{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:z,vertexShader:Rt,fragmentShader:F(N(Pt,{varianceClipping:Re})),uniforms:{inputBuffer:new o(e),historyBuffer:new o(t),texelSize:new o(new m),varianceGamma:new o(1),temporalAlpha:new o(.01)},defines:{}}),this.cascadeCount=l.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}}Lt([P("CASCADE_COUNT",{min:1,max:4})],Ne.prototype,"cascadeCount");function G(n){const e=new Ke(1,1,1,{depthBuffer:!1,stencilBuffer:!1});return e.texture.type=Te,e.texture.minFilter=H,e.texture.magFilter=H,e.texture.name=n,e}class Nt extends Le{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a,...i}){super("ShadowPass",i),this.width=0,this.height=0,this.currentMaterial=new O({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a}),this.currentPass=new ve(this.currentMaterial),this.resolveMaterial=new Ne,this.resolvePass=new ve(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,a){this.currentPass.initialize(e,t,a),this.resolvePass.initialize(e,t,a)}initRenderTargets(){var e,t,a;(e=this.currentRenderTarget)==null||e.dispose(),(t=this.resolveRenderTarget)==null||t.dispose(),(a=this.historyRenderTarget)==null||a.dispose();const i=G("Shadow"),r=this.temporalPass?G("Shadow.A"):null,s=this.temporalPass?G("Shadow.B"):null;this.currentRenderTarget=i,this.resolveRenderTarget=r,this.historyRenderTarget=s;const c=this.resolveMaterial.uniforms;c.inputBuffer.value=i.texture,c.historyBuffer.value=(s==null?void 0:s.texture)??null}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const i=e.cascades[a];t.inverseShadowMatrices.value[a].copy(i.inverseMatrix)}}copyReprojection(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const i=e.cascades[a];t.reprojectionMatrices.value[a].copy(i.matrix)}}swapBuffers(){A(this.historyRenderTarget!=null),A(this.resolveRenderTarget!=null);const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,a){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(A(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,a=this.shadow.cascadeCount){var i,r;this.width=e,this.height=t,this.currentMaterial.cascadeCount=a,this.resolveMaterial.cascadeCount=a,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?a*2:a),(i=this.resolveRenderTarget)==null||i.setSize(e,t,a),(r=this.historyRenderTarget)==null||r.setSize(e,t,a)}get outputBuffer(){return this.temporalPass?(A(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}}function bt(n){return{scatteringCoefficient:new o(1),absorptionCoefficient:new o(0),coverage:new o(.3),localWeatherTexture:new o(n.localWeatherTexture),localWeatherRepeat:new o(n.localWeatherRepeat),localWeatherOffset:new o(n.localWeatherOffset),shapeTexture:new o(n.shapeTexture),shapeRepeat:new o(n.shapeRepeat),shapeOffset:new o(n.shapeOffset),shapeDetailTexture:new o(n.shapeDetailTexture),shapeDetailRepeat:new o(n.shapeDetailRepeat),shapeDetailOffset:new o(n.shapeDetailOffset),turbulenceTexture:new o(n.turbulenceTexture),turbulenceRepeat:new o(n.turbulenceRepeat),turbulenceDisplacement:new o(350)}}function Ut(){return{minLayerHeights:new o(new x),maxLayerHeights:new o(new x),minIntervalHeights:new o(new p),maxIntervalHeights:new o(new p),densityScales:new o(new x),shapeAmounts:new o(new x),shapeDetailAmounts:new o(new x),weatherExponents:new o(new x),shapeAlteringBiases:new o(new x),coverageFilterWidths:new o(new x),minHeight:new o(0),maxHeight:new o(0),shadowTopHeight:new o(0),shadowBottomHeight:new o(0),shadowLayerMask:new o(new x),densityProfile:new o({expTerms:new x,exponents:new x,linearTerms:new x,constantTerms:new x})}}const V=[0,0,0,0];function Mt(n,e){e.packValues("altitude",n.minLayerHeights.value),e.packSums("altitude","height",n.maxLayerHeights.value),e.packIntervalHeights(n.minIntervalHeights.value,n.maxIntervalHeights.value),e.packValues("densityScale",n.densityScales.value),e.packValues("shapeAmount",n.shapeAmounts.value),e.packValues("shapeDetailAmount",n.shapeDetailAmounts.value),e.packValues("weatherExponent",n.weatherExponents.value),e.packValues("shapeAlteringBias",n.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",n.coverageFilterWidths.value);const t=n.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let a=1/0,i=0,r=1/0,s=0;V.fill(0);for(let c=0;c<e.length;++c){const{altitude:u,height:h,shadow:d}=e[c],f=u+h;h>0&&(u<a&&(a=u),d&&u<r&&(r=u),f>i&&(i=f),d&&f>s&&(s=f)),V[c]=d?1:0}a!==1/0?(n.minHeight.value=a,n.maxHeight.value=i):(A(i===0),n.minHeight.value=0),r!==1/0?(n.shadowBottomHeight.value=r,n.shadowTopHeight.value=s):(A(s===0),n.shadowBottomHeight.value=0),n.shadowLayerMask.value.fromArray(V)}function Ht(n,e){return{bottomRadius:new o(n.bottomRadius),topRadius:new o(n.topRadius),ellipsoidCenter:new o(e.ellipsoidCenter),ellipsoidMatrix:new o(e.ellipsoidMatrix),inverseEllipsoidMatrix:new o(e.inverseEllipsoidMatrix),altitudeCorrection:new o(e.altitudeCorrection),sunDirection:new o(e.sunDirection)}}const Ft=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`;var zt=Object.defineProperty,Wt=(n,e,t,a)=>{for(var i=void 0,r=n.length-1,s;r>=0;r--)(s=n[r])&&(i=s(e,t,i)||i);return i&&zt(e,t,i),i};const L=new p,Bt=new m,Gt=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent"],Vt=["multiScatteringOctaves","accurateSunSkyIrradiance","accuratePhaseFunction"],kt=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],jt=["temporalJitter"],Yt=["temporalPass"],qt=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],T={type:"change"},Zt={resolutionScale:l.resolutionScale,width:k.AUTO_SIZE,height:k.AUTO_SIZE};class Xt extends Fe{constructor(e=new we,t,a=ge.DEFAULT){var i,r,s,c;super("CloudsEffect",Ft,{attributes:ze.DEPTH,uniforms:new Map([["cloudsBuffer",new o(null)]])}),this.camera=e,this.atmosphere=a,this.cloudLayers=it.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new m().setScalar(100),this.localWeatherOffset=new m,this.shapeRepeat=new p().setScalar(3e-4),this.shapeOffset=new p,this.shapeDetailRepeat=new p().setScalar(.006),this.shapeDetailOffset=new p,this.turbulenceRepeat=new m().setScalar(20),this.ellipsoidCenter=new p,this.ellipsoidMatrix=new v,this.inverseEllipsoidMatrix=new v,this.altitudeCorrection=new p,this.sunDirection=new p,this.localWeatherVelocity=new m,this.shapeVelocity=new p,this.shapeDetailVelocity=new p,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new Ze,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new m,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;const{resolutionScale:u,width:h,height:d,resolutionX:f=h,resolutionY:y=d}={...Zt,...t};this.shadowMaps=new ht({cascadeCount:l.shadow.cascadeCount,mapSize:l.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=bt({localWeatherTexture:((i=this.proceduralLocalWeather)==null?void 0:i.texture)??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:((r=this.proceduralShape)==null?void 0:r.texture)??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:((s=this.proceduralShapeDetail)==null?void 0:s.texture)??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:((c=this.proceduralTurbulence)==null?void 0:c.texture)??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=Ut(),this.atmosphereUniforms=Ht(a,{ellipsoidCenter:this.ellipsoidCenter,ellipsoidMatrix:this.ellipsoidMatrix,inverseEllipsoidMatrix:this.inverseEllipsoidMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});const g={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new Nt(g),this.shadowPass.mainCamera=e,this.cloudsPass=new Tt(g,a),this.cloudsPass.mainCamera=e,this.clouds=oe(ne({},this.cloudsPass.currentMaterial,Gt),this.cloudsPass.currentMaterial,Vt),this.shadow=oe(ne({},this.shadowPass.currentMaterial,kt),this.shadowPass.currentMaterial,jt,this.shadowPass,Yt,this.shadowMaps,qt),this.resolution=new k(this,f,y,u),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,a){this.shadowPass.initialize(e,t,a),this.cloudsPass.initialize(e,t,a)}updateSharedUniforms(e){Mt(this.layerUniforms,this.cloudLayers);const{parameterUniforms:t}=this;t.localWeatherOffset.value.add(Bt.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(L.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(L.copy(this.shapeDetailVelocity).multiplyScalar(e));const a=this.inverseEllipsoidMatrix.copy(this.ellipsoidMatrix).invert(),i=this.camera.getWorldPosition(L).applyMatrix4(a).sub(this.ellipsoidCenter),r=this.altitudeCorrection;this.correctAltitude?We(i,this.atmosphere.bottomRadius,this.ellipsoid,r,!1):r.setScalar(0);const s=this.ellipsoid.getSurfaceNormal(i,L),c=this.sunDirection.dot(s),u=Ce(1e6,1e3,c);this.shadowMaps.update(this.camera,L.copy(this.sunDirection).applyMatrix4(this.ellipsoidMatrix),u)}updateWeatherTextureChannels(){const e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){const{shadowMaps:e,shadowPass:t,cloudsPass:a}=this,i=t.currentMaterial.uniforms,r=a.currentMaterial.uniforms,s=this._atmosphereOverlay,c=Object.assign(this._atmosphereOverlay??{},{map:a.outputBuffer});s!==c&&(this._atmosphereOverlay=c,T.target=this,T.property="atmosphereOverlay",this.events.dispatchEvent(T));const u=this._atmosphereShadow,h=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:r.shadowIntervals.value,matrices:r.shadowMatrices.value,inverseMatrices:i.inverseShadowMatrices.value,far:e.far,topHeight:r.shadowTopHeight.value});u!==h&&(this._atmosphereShadow=h,T.target=this,T.property="atmosphereShadow",this.events.dispatchEvent(T));const d=this._atmosphereShadowLength,f=a.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:a.shadowLengthBuffer}):null;d!==f&&(this._atmosphereShadowLength=f,T.target=this,T.property="atmosphereShadowLength",this.events.dispatchEvent(T))}update(e,t,a=0){var i,r,s,c;const{shadowMaps:u,shadowPass:h,cloudsPass:d}=this;if(u.cascadeCount!==this.shadowCascadeCount||!u.mapSize.equals(this.shadowMapSize)){const{width:f,height:y}=u.mapSize,g=u.cascadeCount;this.shadowMapSize.set(f,y),this.shadowCascadeCount=g,h.setSize(f,y,g),d.setShadowSize(f,y,g)}(i=this.proceduralLocalWeather)==null||i.render(e,a),(r=this.proceduralShape)==null||r.render(e,a),(s=this.proceduralShapeDetail)==null||s.render(e,a),(c=this.proceduralTurbulence)==null||c.render(e,a),++this.frame,this.updateSharedUniforms(a),this.updateWeatherTextureChannels(),h.update(e,this.frame,a),d.shadowBuffer=h.outputBuffer,d.update(e,this.frame,a),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){const{resolution:a}=this;a.setBaseSize(e,t);const{width:i,height:r}=a;this.cloudsPass.setSize(i,r)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){const{clouds:t,shadow:a,...i}=pt[e];Object.assign(this,i),Object.assign(this.clouds,t),Object.assign(this.shadow,a)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof se||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof ce||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof ce||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof se||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyIrradianceScale(){return this.cloudsPass.currentMaterial.uniforms.skyIrradianceScale.value}set skyIrradianceScale(e){this.cloudsPass.currentMaterial.uniforms.skyIrradianceScale.value=e}get groundIrradianceScale(){return this.cloudsPass.currentMaterial.uniforms.groundIrradianceScale.value}set groundIrradianceScale(e){this.cloudsPass.currentMaterial.uniforms.groundIrradianceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get photometric(){return this.cloudsPass.currentMaterial.photometric}set photometric(e){this.cloudsPass.currentMaterial.photometric=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}}Wt([C("SKIP_RENDERING")],Xt.prototype,"skipRendering");const $t=128,Qt=32;export{Qt as n,Xt as q,$t as t};
