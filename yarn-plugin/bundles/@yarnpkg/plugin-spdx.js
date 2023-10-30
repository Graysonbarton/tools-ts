/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-spdx",
factory: function (require) {
var plugin=(()=>{var lt=Object.create;var J=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var gt=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty;var f=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),K=(e,t)=>{for(var r in t)J(e,r,{get:t[r],enumerable:!0})},ye=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of pt(t))!ht.call(e,i)&&i!==r&&J(e,i,{get:()=>t[i],enumerable:!(n=mt(t,i))||n.enumerable});return e};var Re=(e,t,r)=>(r=e!=null?lt(gt(e)):{},ye(t||!e||!e.__esModule?J(r,"default",{value:e,enumerable:!0}):r,e)),Dt=e=>ye(J({},"__esModule",{value:!0}),e);var xe=p(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.default=It;var Et=xt(f("crypto"));function xt(e){return e&&e.__esModule?e:{default:e}}var z=new Uint8Array(256),G=z.length;function It(){return G>z.length-16&&(Et.default.randomFillSync(z),G=0),z.slice(G,G+=16)}});var Le=p(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var Pt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;W.default=Pt});var U=p(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var _t=Ot(Le());function Ot(e){return e&&e.__esModule?e:{default:e}}function vt(e){return typeof e=="string"&&_t.default.test(e)}var Ct=vt;Q.default=Ct});var q=p(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;B.unsafeStringify=Te;var kt=At(U());function At(e){return e&&e.__esModule?e:{default:e}}var l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function Te(e,t=0){return l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]}function St(e,t=0){let r=Te(e,t);if(!(0,kt.default)(r))throw TypeError("Stringified UUID is invalid");return r}var Nt=St;B.default=Nt});var we=p($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.default=void 0;var yt=Ft(xe()),Rt=q();function Ft(e){return e&&e.__esModule?e:{default:e}}var Me,Ie,Pe=0,_e=0;function Lt(e,t,r){let n=t&&r||0,i=t||new Array(16);e=e||{};let o=e.node||Me,a=e.clockseq!==void 0?e.clockseq:Ie;if(o==null||a==null){let m=e.random||(e.rng||yt.default)();o==null&&(o=Me=[m[0]|1,m[1],m[2],m[3],m[4],m[5]]),a==null&&(a=Ie=(m[6]<<8|m[7])&16383)}let s=e.msecs!==void 0?e.msecs:Date.now(),u=e.nsecs!==void 0?e.nsecs:_e+1,c=s-Pe+(u-_e)/1e4;if(c<0&&e.clockseq===void 0&&(a=a+1&16383),(c<0||s>Pe)&&e.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Pe=s,_e=u,Ie=a,s+=122192928e5;let d=((s&268435455)*1e4+u)%4294967296;i[n++]=d>>>24&255,i[n++]=d>>>16&255,i[n++]=d>>>8&255,i[n++]=d&255;let g=s/4294967296*1e4&268435455;i[n++]=g>>>8&255,i[n++]=g&255,i[n++]=g>>>24&15|16,i[n++]=g>>>16&255,i[n++]=a>>>8|128,i[n++]=a&255;for(let m=0;m<6;++m)i[n+m]=o[m];return t||(0,Rt.unsafeStringify)(i)}var Tt=Lt;$.default=Tt});var Oe=p(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.default=void 0;var Mt=wt(U());function wt(e){return e&&e.__esModule?e:{default:e}}function Vt(e){if(!(0,Mt.default)(e))throw TypeError("Invalid UUID");let t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var Ut=Vt;Z.default=Ut});var ve=p(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.URL=O.DNS=void 0;O.default=Yt;var Bt=q(),qt=Ht(Oe());function Ht(e){return e&&e.__esModule?e:{default:e}}function bt(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}var Ve="6ba7b810-9dad-11d1-80b4-00c04fd430c8";O.DNS=Ve;var Ue="6ba7b811-9dad-11d1-80b4-00c04fd430c8";O.URL=Ue;function Yt(e,t,r){function n(i,o,a,s){var u;if(typeof i=="string"&&(i=bt(i)),typeof o=="string"&&(o=(0,qt.default)(o)),((u=o)===null||u===void 0?void 0:u.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+i.length);if(c.set(o),c.set(i,o.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,a){s=s||0;for(let d=0;d<16;++d)a[s+d]=c[d];return a}return(0,Bt.unsafeStringify)(c)}try{n.name=e}catch{}return n.DNS=Ve,n.URL=Ue,n}});var Be=p(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.default=void 0;var Xt=Jt(f("crypto"));function Jt(e){return e&&e.__esModule?e:{default:e}}function Kt(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Xt.default.createHash("md5").update(e).digest()}var jt=Kt;ee.default=jt});var He=p(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var Gt=qe(ve()),zt=qe(Be());function qe(e){return e&&e.__esModule?e:{default:e}}var Wt=(0,Gt.default)("v3",48,zt.default),Qt=Wt;te.default=Qt});var be=p(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var $t=Zt(f("crypto"));function Zt(e){return e&&e.__esModule?e:{default:e}}var er={randomUUID:$t.default.randomUUID};re.default=er});var Je=p(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var Ye=Xe(be()),tr=Xe(xe()),rr=q();function Xe(e){return e&&e.__esModule?e:{default:e}}function nr(e,t,r){if(Ye.default.randomUUID&&!t&&!e)return Ye.default.randomUUID();e=e||{};let n=e.random||(e.rng||tr.default)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=n[i];return t}return(0,rr.unsafeStringify)(n)}var ir=nr;ne.default=ir});var Ke=p(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=void 0;var sr=or(f("crypto"));function or(e){return e&&e.__esModule?e:{default:e}}function ar(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),sr.default.createHash("sha1").update(e).digest()}var cr=ar;ie.default=cr});var Ge=p(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.default=void 0;var ur=je(ve()),dr=je(Ke());function je(e){return e&&e.__esModule?e:{default:e}}var fr=(0,ur.default)("v5",80,dr.default),lr=fr;se.default=lr});var ze=p(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=void 0;var mr="00000000-0000-0000-0000-000000000000";oe.default=mr});var We=p(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=void 0;var pr=gr(U());function gr(e){return e&&e.__esModule?e:{default:e}}function hr(e){if(!(0,pr.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}var Dr=hr;ae.default=Dr});var Qe=p(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});Object.defineProperty(h,"NIL",{enumerable:!0,get:function(){return _r.default}});Object.defineProperty(h,"parse",{enumerable:!0,get:function(){return kr.default}});Object.defineProperty(h,"stringify",{enumerable:!0,get:function(){return Cr.default}});Object.defineProperty(h,"v1",{enumerable:!0,get:function(){return Er.default}});Object.defineProperty(h,"v3",{enumerable:!0,get:function(){return xr.default}});Object.defineProperty(h,"v4",{enumerable:!0,get:function(){return Ir.default}});Object.defineProperty(h,"v5",{enumerable:!0,get:function(){return Pr.default}});Object.defineProperty(h,"validate",{enumerable:!0,get:function(){return vr.default}});Object.defineProperty(h,"version",{enumerable:!0,get:function(){return Or.default}});var Er=P(we()),xr=P(He()),Ir=P(Je()),Pr=P(Ge()),_r=P(ze()),Or=P(We()),vr=P(U()),Cr=P(q()),kr=P(Oe());function P(e){return e&&e.__esModule?e:{default:e}}});var qr={};K(qr,{default:()=>Br});var pe=f("@yarnpkg/cli"),ge=f("@yarnpkg/core");var Fe=(n=>(n.Person="Person",n.Organization="Organization",n.Tool="Tool",n))(Fe||{}),I=class{type;name;email;constructor(t,r,n){this.name=t,this.email=n??void 0,this.type=r}static fromCreator(t){let r=Fe[t.type];if(!r)throw new Error("Invalid actor type: "+t.type);return new I(t.name,r,t.email)}static tools(){return new I("SPDX Tools TS","Tool")}toString(){return this.type.valueOf()+": "+this.name+(this.email?" ("+this.email+")":"")}};var j=class{spdxElementId;relatedSpdxElementId;relationshipType;comment;constructor(t,r,n,i){this.spdxElementId=t,this.relatedSpdxElementId=r,this.relationshipType=n,this.comment=i?.comment}};var E=Re(Qe(),1),cn=E.default.v1,un=E.default.v3,k=E.default.v4,dn=E.default.v5,fn=E.default.NIL,ln=E.default.version,mn=E.default.validate,pn=E.default.stringify,gn=E.default.parse;var ce=class{name;downloadLocation;spdxId;version;fileName;supplier;originator;filesAnalyzed;verificationCode;checksums;homepage;sourceInfo;licenseConcluded;licenseInfoFromFiles;licenseDeclared;licenseComment;copyrightText;summary;description;comment;externalReferences;attributionTexts;primaryPackagePurpose;releaseDate;builtDate;validUntilDate;constructor(t,r,n){this.name=t,this.downloadLocation=r,this.spdxId=n?.spdxId??"SPDXRef-"+k(),this.version=n?.version??void 0,this.fileName=n?.fileName??void 0,this.supplier=n?.supplier??void 0,this.originator=n?.originator??void 0,this.filesAnalyzed=n?.filesAnalyzed??!0,this.verificationCode=n?.verificationCode??void 0,this.checksums=n?.checksums??[],this.homepage=n?.homepage??void 0,this.sourceInfo=n?.sourceInfo??void 0,this.licenseConcluded=n?.licenseConcluded??void 0,this.licenseInfoFromFiles=n?.licenseInfoFromFiles??[],this.licenseDeclared=n?.licenseDeclared??void 0,this.licenseComment=n?.licenseComment??void 0,this.copyrightText=n?.copyrightText??void 0,this.summary=n?.summary??void 0,this.description=n?.description??void 0,this.comment=n?.comment??void 0,this.externalReferences=n?.externalReferences??[],this.attributionTexts=n?.attributionTexts??[],this.primaryPackagePurpose=n?.primaryPackagePurpose??void 0,this.releaseDate=n?.releaseDate??void 0,this.builtDate=n?.builtDate??void 0,this.validUntilDate=n?.validUntilDate??void 0}};function $e(e){return e.toISOString().split(".")[0]+"Z"}var A=class{created;creators;comment;licenseListVersion;constructor(t,r,n,i){this.created=t,this.creators=r,this.comment=n,this.licenseListVersion=i}static fromDocument(t){return new A($e(t.creationInfo.created),t.creationInfo.creators.map(r=>r.toString()),t.creationInfo.creatorComment??void 0,t.creationInfo.licenseListVersion??void 0)}};var x=class{algorithm;checksumValue;constructor(t,r){this.algorithm=t,this.checksumValue=r}static fromChecksum(t){return new x(t.algorithm,t.value)}};var S=class{packageVerificationCodeValue;packageVerificationCodeExcludedFiles;constructor(t,r){this.packageVerificationCodeValue=t,this.packageVerificationCodeExcludedFiles=r}static fromPackageVerificationCode(t){return new S(t.value,t.excludedFiles)}};var N=class{name;downloadLocation;SPDXID;filesAnalyzed;packageVerificationCode;checksums;licenseInfoFromFiles;externalRefs;attributionTexts;constructor(t,r,n,i,o,a,s,u,c){this.name=t,this.downloadLocation=r,this.SPDXID=n,this.filesAnalyzed=i,this.packageVerificationCode=c,this.checksums=o,this.licenseInfoFromFiles=a,this.externalRefs=s,this.attributionTexts=u}static fromPackage(t){let r=t.checksums.length>0?t.checksums.map(i=>x.fromChecksum(i)):void 0,n=t.verificationCode?S.fromPackageVerificationCode(t.verificationCode):void 0;return new N(t.name,t.downloadLocation.toString(),t.spdxId,t.filesAnalyzed,r,void 0,void 0,void 0,n)}};var y=class{spdxElementId;relatedSpdxElement;relationshipType;comment;constructor(t,r,n,i){this.spdxElementId=t,this.comment=i,this.relatedSpdxElement=r,this.relationshipType=n}static fromRelationship(t){return new y(t.spdxElementId,t.relatedSpdxElementId,t.relationshipType)}};var R=class{checksum;externalDocumentId;spdxDocument;constructor(t,r,n){this.checksum=t,this.externalDocumentId=r,this.spdxDocument=n}static fromExternalDocumentRef(t){let r=x.fromChecksum(t.checksum);return new R(r,t.documentRefId,t.documentUri)}};var F=class{SPDXID;fileName;checksums;fileTypes;constructor(t,r,n,i){this.SPDXID=t,this.fileName=r,this.checksums=n,this.fileTypes=i}static fromFile(t){let r=t.checksums.map(n=>x.fromChecksum(n));return new F(t.spdxId,t.name,r,t.fileTypes)}};var L=class{SPDXID;comment;creationInfo;dataLicense;externalDocumentRefs;name;spdxVersion;documentNamespace;packages;files;relationships;constructor(t,r,n,i,o,a,s,u,c,d,g){this.SPDXID=t,this.spdxVersion=r,this.name=n,this.documentNamespace=i,this.dataLicense=o,this.creationInfo=a,this.packages=s,this.files=u,this.relationships=c,this.externalDocumentRefs=d,this.comment=g}static fromDocument(t){let r=A.fromDocument(t),n=t.packages.length>0?t.packages.map(s=>N.fromPackage(s)):void 0,i=t.files.length>0?t.files.map(s=>F.fromFile(s)):void 0,o=t.relationships.length>0?t.relationships.map(s=>y.fromRelationship(s)):void 0,a=t.creationInfo.externalDocumentRefs?.length>0?t.creationInfo.externalDocumentRefs.map(s=>R.fromExternalDocumentRef(s)):void 0;return new L(t.creationInfo.spdxId,t.creationInfo.spdxVersion,t.creationInfo.name,t.creationInfo.documentNamespace,t.creationInfo.dataLicense,r,n,i,o,a,t.creationInfo.documentComment)}};var Ze=Re(f("fs/promises"),1),H=class{creationInfo;packages;files;snippets;annotations;relationships;otherLicensingInfo;constructor(t,r){this.creationInfo=t,this.packages=r?.packages??[],this.files=r?.files??[],this.snippets=r?.snippets??[],this.annotations=r?.annotations??[],this.relationships=r?.relationships??[],this.otherLicensingInfo=r?.otherLicensingInfo??[]}hasMissingDescribesRelationships(){let t=this.packages.length===1&&this.files.length===0&&this.snippets.length===0,r=this.relationships.filter(i=>i.relationshipType==="DESCRIBES"),n=this.relationships.filter(i=>i.relationshipType==="DESCRIBED_BY");return!(t||r.length>0||n.length>0)}hasDuplicateSpdxIds(){let t=[];return this.packages.forEach(r=>{if(t.includes(r.spdxId))return!0;t.push(r.spdxId)}),this.relationships.forEach(r=>{if(t.includes(r.spdxElementId))return!0;t.push(r.spdxElementId)}),!1}validate(){let t=[];return this.creationInfo.spdxVersion!=="SPDX-2.3"&&t.concat("Invalid SPDX version. Currently only SPDX-2.3 is supported."),this.hasMissingDescribesRelationships()&&t.concat("Missing DESCRIBES or DESCRIBED_BY relationships.","Document must have at least one DESCRIBES and one DESCRIBED_BY relationship, if there is not exactly one package present."),this.hasDuplicateSpdxIds()&&t.concat("Duplicate SPDX IDs for packages, files, snippets or relationships."),t}async writeFile(t){let r=L.fromDocument(this),n=JSON.stringify(r,null,2);await Ze.default.writeFile(t,n)}};var ue=class{spdxVersion;dataLicense="CC0-1.0";spdxId;name;documentNamespace;externalDocumentRefs;licenseListVersion;creators;created;creatorComment;documentComment;constructor(t,r,n,i,o,a){this.spdxVersion=t,this.name=r,this.documentNamespace=n,this.creators=i,this.created=o,this.externalDocumentRefs=a?.externalDocumentRefs??[],this.creatorComment=a?.creatorComment??void 0,this.licenseListVersion=a?.licenseListVersion??void 0,this.documentComment=a?.documentComment??void 0,this.spdxId=a?.spdxId??"SPDXRef-DOCUMENT"}};var de=class{documentRefId;documentUri;checksum;constructor(t,r,n){this.documentRefId=t,this.documentUri=r,this.checksum=n}};var T=class{algorithm;value;constructor(t,r){this.algorithm=t,this.value=r}};var fe=class{name;spdxId;checksums;fileTypes;constructor(t,r,n){this.name=t,this.spdxId="SPDXRef-"+k(),this.checksums=r,this.fileTypes=n?.fileTypes??[]}};var M=class extends H{static formatCreators(t){return t?Array.isArray(t)?t.map(r=>I.fromCreator(r)):[I.fromCreator(t)]:[]}static formatSpdxVersion(t){return"SPDX-"+(t??"2.3")}static generateNamespace(t){return"urn:"+(t.replace(/^[^A-Za-z0-9]+/,"").replace(/[^A-Za-z0-9-]/g,"-")??"document")+":"+k()}static formatExternalDocumentRefs(t){return t?t.map(r=>new de(r.documentRefId,r.documentUri,new T(r.checksum_algorithm,r.checksum_value))):void 0}static createDocument(t,r){let n=new ue(this.formatSpdxVersion(r?.spdxVersion),t,r?.namespace??this.generateNamespace(t),this.formatCreators(r?.creators).concat(I.tools()),r?.created??new Date,{...r,externalDocumentRefs:this.formatExternalDocumentRefs(r?.externalDocumentRefs)});return new M(n)}addPackage(t,r,n){let i=new ce(t,r,n);return this.packages=this.packages.concat(i),i}addFile(t,r,n){let i=Array.isArray(r)?r.map(s=>new T(s.checksumAlgorithm,s.checksumValue)):[new T(r.checksumAlgorithm,r.checksumValue)],o=n?.fileTypes?n.fileTypes.map(s=>s):void 0,a=new fe(t,i,{spdxId:n?.spdxId??void 0,fileTypes:o});return this.files=this.files.concat(a),a}addRelationship(t,r,n,i){function o(s){return typeof s=="string"?s:s instanceof H?s.creationInfo.spdxId:s.spdxId}let a=new j(o(t),o(r),n,{comment:i?.comment});return this.relationships=this.relationships.concat(a),this}async write(t,r=!1){let n=this.validate();n.length>0&&(console.error(`Document is invalid: ${n.join(`
`)}`),!r)||await this.writeFile(t)}writeSync(t,r=!1){let n=this.validate();n.length>0&&(console.error(`Document is invalid: ${n.join(`
`)}`),!r)||this.writeFile(t).then(()=>{console.log("Wrote SBOM successfully: "+t)}).catch(i=>{console.error("Error writing sample SBOM: "+i)})}};function Ar(e){return parseInt(e.split(".")[0])}function et(e,t){let r=t?.spdxVersion;if(!r||Ar(r)===2)return M.createDocument(e,t);throw new Error("Unsupported SPDX version")}var X=f("clipanion");var D=f("@yarnpkg/core"),tt=async(e,t,r)=>{let n=new Map,i;if(t){if(r){for(let c of e.workspaces)c.manifest.devDependencies.clear();let s=await D.Cache.find(e.configuration),u=new D.ThrowReport;await e.resolveEverything({report:u,cache:s})}i=e.storedDescriptors.values()}else i=e.workspaces.flatMap(s=>{let u=[s.anchoredDescriptor];for(let[c,d]of s.anchoredPackage.dependencies.entries())r&&s.manifest.devDependencies.has(c)||u.push(d);return u});let o=D.miscUtils.sortMap(i,[s=>D.structUtils.stringifyIdent(s),s=>D.structUtils.isVirtualDescriptor(s)?"0":"1",s=>s.range]),a=new Set;for(let s of o.values()){let u=e.storedResolutions.get(s.descriptorHash);if(!u)continue;let c=e.storedPackages.get(u);if(!c)continue;let{descriptorHash:d}=D.structUtils.isVirtualDescriptor(s)?D.structUtils.devirtualizeDescriptor(s):s;a.has(d)||(a.add(d),n.set(s,c))}return n};var ke={};K(ke,{fs:()=>Rr,getPackagePath:()=>Nr});var rt=f("@yarnpkg/plugin-pnp"),le=f("@yarnpkg/core"),nt=f("@yarnpkg/fslib");var w=()=>({os:[process.platform],cpu:[process.arch],libc:[]});var Nr=async(e,t)=>{if(yr(e),!le.structUtils.isPackageCompatible(t,w()))return null;let r=le.structUtils.convertPackageToLocator(t),n={name:le.structUtils.stringifyIdent(r),reference:r.reference},i=Ce.getPackageInformation(n);if(!i)return null;let{packageLocation:o}=i;return o},Ce,yr=e=>{Ce||(Ce=module.require((0,rt.getPnpPath)(e).cjs))},Rr=new nt.VirtualFS({});var b={};K(b,{_getYarnStateAliases:()=>ot,fs:()=>Tr,getPackagePath:()=>Fr});var v=f("@yarnpkg/core"),it=f("@yarnpkg/parsers"),_=f("@yarnpkg/fslib");var Fr=async(e,t)=>{if(await Lr(e),!v.structUtils.isPackageCompatible(t,w()))return null;let r=v.structUtils.convertPackageToLocator(t),n=v.structUtils.stringifyLocator(r),i=me[n]||st[n];if(!i)return null;let o=i.locations[0];return o?_.ppath.join(e.cwd,o):e.cwd},me,st,Lr=async e=>{if(!me){let t=_.ppath.join(e.configuration.projectCwd,_.Filename.nodeModules,".yarn-state.yml");me=(0,it.parseSyml)(await _.xfs.readFilePromise(t,"utf8")),st=ot(me)}},Tr=_.xfs,ot=e=>Object.entries(e).reduce((t,[r,n])=>{if(!n.aliases)return t;let i=v.structUtils.parseLocator(r);for(let o of n.aliases){let a=v.structUtils.makeLocator(i,o),s=v.structUtils.stringifyLocator(a);t[s]=n}return t},{});var Ae={};K(Ae,{fs:()=>wr,getPackagePath:()=>Mr});var Y=f("@yarnpkg/core"),C=f("@yarnpkg/fslib");var Mr=async(e,t)=>{if(!Y.structUtils.isPackageCompatible(t,w()))return null;let r=Y.structUtils.convertPackageToLocator(t),n=Y.structUtils.slugifyLocator(r),i=Y.structUtils.stringifyIdent(r),o=e.tryWorkspaceByLocator(r);return o?o.cwd:C.ppath.join(e.configuration.projectCwd,C.Filename.nodeModules,".store",n,C.Filename.nodeModules,i)},wr=C.xfs;var at=e=>{switch(e){case"pnp":return ke;case"node-modules":return b;case"pnpm":return Ae;default:throw new Error("Unsupported linker")}};var he=f("@yarnpkg/fslib"),V=class extends pe.BaseCommand{constructor(){super(...arguments);this.recursive=X.Option.Boolean("-R,--recursive",!0,{description:"Include transitive dependencies (dependencies of direct dependencies)"});this.production=X.Option.Boolean("--production",!0,{description:"Exclude development dependencies"})}async execute(){let r=await ge.Configuration.find(this.context.cwd,this.context.plugins),{project:n,workspace:i}=await ge.Project.find(r,this.context.cwd);if(!i)throw new pe.WorkspaceRequiredError(n.cwd,this.context.cwd);await n.restoreInstallState();let o=et(i.manifest.name?.name??"spdx"),a=await tt(n,this.recursive,this.production),s=[...a].flatMap(([,d])=>[...d.dependencies].flatMap(([,g])=>g.descriptorHash)),u=n.configuration.get("nodeLinker"),c;typeof u=="string"?c=at(u):c=b;for(let[d,g]of a.entries()){let m=await c.getPackagePath(n,g);if(m===null)continue;let ut=JSON.parse(await c.fs.readFilePromise(he.ppath.join(m,he.Filename.manifest),"utf8")),{repository:dt}=ut,ft=Vr(dt),De=ct(d.descriptorHash);o.addPackage(g.name,ft,{spdxId:De});for(let[,Se]of g.dependencies.entries()){let Ne=n.storedResolutions.get(Se.descriptorHash);!Ne||!n.storedPackages.get(Ne)||o.addRelationship(De,ct(Se.descriptorHash),"DEPENDS_ON")}s.includes(d.descriptorHash)||o.addRelationship(o,De,"DESCRIBES")}o.writeSync((i.manifest.name?.name??"")+".spdx.json")}};V.paths=[["spdx"]],V.usage=X.Command.Usage({description:"Generate SPDX document for the project",details:`
        This command generates an SPDX document for the project. By default, the document will be placed in the root of the project.

        If \`-R,--recursive\` is set, the listing will include transitive dependencies (dependencies of direct dependencies).

        If \`--production\` is set, the listing will exclude development dependencies.`,examples:[["Generate SPDX document","$0 spdx"],["Generate SPDX document with only direct dependencies","$0 spdx --recursive false"],["Generate SPDX document with only production dependencies","$0 spdx --production false"]]});function Vr(e){return e?typeof e=="object"?e.url:e:"unknown"}function ct(e){return"SPDXRef-"+e}var Ur={commands:[V]},Br=Ur;return Dt(qr);})();
return plugin;
}
};