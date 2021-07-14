(()=>{var __webpack_modules__={351:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const a=o(n(87));const s=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+a.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const f="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=f+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${f}${escapeData(this.message)}`;return e}}function escapeData(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var a=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const s=n(351);const f=n(717);const c=n(278);const u=o(n(87));const l=o(n(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=c.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${u.EOL}${n}${u.EOL}${t}`;f.issueCommand("ENV",r)}else{s.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){f.issueCommand("PATH",e)}else{s.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter((e=>e!==""));return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const r=["false","False","FALSE"];const i=getInput(e,t);if(n.includes(i))return true;if(r.includes(i))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(u.EOL);s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){s.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){s.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return a(this,void 0,void 0,(function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n}))}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const a=o(n(747));const s=o(n(87));const f=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!a.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}a.appendFileSync(n,`${f.toCommandValue(t)}${s.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},761:(e,t,n)=>{const r=n(182);const i=n(622);const o=n(57);const a=n(744);const s=r.FileSystem.require();s.existsSync=s.existsSync||i.existsSync;const f={readEntries:false,method:r.Constants.NONE};function canonical(e){var t=i.posix.normalize("/"+e.split("\\").join("/"));return i.join(".",t)}e.exports=function(e,t){let n=null;const c=Object.assign(Object.create(null),f);if(e&&"object"===typeof e){if(!(e instanceof Uint8Array)){Object.assign(c,e);e=c.input?c.input:undefined;if(c.input)delete c.input}if(e instanceof Uint8Array){n=e;c.method=r.Constants.BUFFER;e=undefined}}Object.assign(c,t);if(e&&"string"===typeof e){if(s.existsSync(e)){c.method=r.Constants.FILE;c.filename=e;n=s.readFileSync(e)}else{throw new Error(r.Errors.INVALID_FILENAME)}}const u=new a(n,c);function sanitize(e,t){e=i.resolve(i.normalize(e));var n=t.split("/");for(var r=0,o=n.length;r<o;r++){var a=i.normalize(i.join(e,n.slice(r,o).join(i.sep)));if(a.indexOf(e)===0){return a}}return i.normalize(i.join(e,i.basename(t)))}function getEntry(e){if(e&&u){var t;if(typeof e==="string")t=u.getEntry(e);if(typeof e==="object"&&typeof e.entryName!=="undefined"&&typeof e.header!=="undefined")t=u.getEntry(e.entryName);if(t){return t}}return null}function fixPath(e){const{join:t,normalize:n,sep:r}=i.posix;return t(".",n(r+e.split("\\").join(r)+r))}return{readFile:function(e,t){var n=getEntry(e);return n&&n.getData(t)||null},readFileAsync:function(e,t){var n=getEntry(e);if(n){n.getDataAsync(t)}else{t(null,"getEntry failed for:"+e)}},readAsText:function(e,t){var n=getEntry(e);if(n){var r=n.getData();if(r&&r.length){return r.toString(t||"utf8")}}return""},readAsTextAsync:function(e,t,n){var r=getEntry(e);if(r){r.getDataAsync((function(e,r){if(r){t(e,r);return}if(e&&e.length){t(e.toString(n||"utf8"))}else{t("")}}))}else{t("")}},deleteFile:function(e){var t=getEntry(e);if(t){u.deleteEntry(t.entryName)}},addZipComment:function(e){u.comment=e},getZipComment:function(){return u.comment||""},addZipEntryComment:function(e,t){var n=getEntry(e);if(n){n.comment=t}},getZipEntryComment:function(e){var t=getEntry(e);if(t){return t.comment||""}return""},updateFile:function(e,t){var n=getEntry(e);if(n){n.setData(t)}},addLocalFile:function(e,t,n,i){if(s.existsSync(e)){t=t?fixPath(t):"";var o=e.split("\\").join("/").split("/").pop();t+=n?n:o;const r=s.statSync(e);this.addFile(t,s.readFileSync(e),i,r)}else{throw new Error(r.Errors.FILE_NOT_FOUND.replace("%s",e))}},addLocalFolder:function(e,t,n){if(n instanceof RegExp){n=function(e){return function(t){return e.test(t)}}(n)}else if("function"!==typeof n){n=function(){return true}}t=t?fixPath(t):"";e=i.normalize(e);if(s.existsSync(e)){var o=r.findFiles(e),a=this;if(o.length){o.forEach((function(r){var o=i.relative(e,r).split("\\").join("/");if(n(o)){var f=s.statSync(r);if(f.isFile()){a.addFile(t+o,s.readFileSync(r),"",f)}else{a.addFile(t+o+"/",Buffer.alloc(0),"",f)}}}))}}else{throw new Error(r.Errors.FILE_NOT_FOUND.replace("%s",e))}},addLocalFolderAsync:function(e,t,n,o){if(o instanceof RegExp){o=function(e){return function(t){return e.test(t)}}(o)}else if("function"!==typeof o){o=function(){return true}}n=n?fixPath(n):"";e=i.normalize(e);var a=this;s.open(e,"r",(function(f){if(f&&f.code==="ENOENT"){t(undefined,r.Errors.FILE_NOT_FOUND.replace("%s",e))}else if(f){t(undefined,f)}else{var c=r.findFiles(e);var u=-1;var next=function(){u+=1;if(u<c.length){var r=c[u];var f=i.relative(e,r).split("\\").join("/");f=f.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g,"");if(o(f)){s.stat(r,(function(e,i){if(e)t(undefined,e);if(i.isFile()){s.readFile(r,(function(e,r){if(e){t(undefined,e)}else{a.addFile(n+f,r,"",i);next()}}))}else{a.addFile(n+f+"/",Buffer.alloc(0),"",i);next()}}))}else{next()}}else{t(true,undefined)}};next()}}))},addLocalFolderPromise:function(e,t){return new Promise(((n,r)=>{const{filter:i,zipPath:o}=Object.assign({},t);this.addLocalFolderAsync(e,((e,t)=>{if(t)r(t);if(e)n(this)}),o,i)}))},addFile:function(e,t,n,r){let i=getEntry(e);const a=i!=null;if(!a){i=new o;i.entryName=e}i.comment=n||"";const f="object"===typeof r&&r instanceof s.Stats;if(f){i.header.time=r.mtime}var c=i.isDirectory?16:0;if("win32"!==process.platform){let e=i.isDirectory?16384:32768;if(f){e|=4095&r.mode}else if("number"===typeof r){e|=4095&r}else{e|=i.isDirectory?493:420}c=(c|e<<16)>>>0}i.attr=c;i.setData(t);if(!a)u.setEntry(i)},getEntries:function(){if(u){return u.entries}else{return[]}},getEntry:function(e){return getEntry(e)},getEntryCount:function(){return u.getEntryCount()},forEach:function(e){return u.forEach(e)},extractEntryTo:function(e,t,n,o,a){o=o||false;n=typeof n==="undefined"?true:n;var f=getEntry(e);if(!f){throw new Error(r.Errors.NO_ENTRY)}var c=canonical(f.entryName);var l=sanitize(t,a&&!f.isDirectory?a:n?c:i.basename(c));if(f.isDirectory){l=i.resolve(l,"..");var d=u.getEntryChildren(f);d.forEach((function(e){if(e.isDirectory)return;var a=e.getData();if(!a){throw new Error(r.Errors.CANT_EXTRACT_FILE)}var s=canonical(e.entryName);var f=sanitize(t,n?s:i.basename(s));var c=e.attr?(e.attr>>>0|0)>>16&4095:0;r.writeFileTo(f,a,o,c)}));return true}var E=f.getData();if(!E)throw new Error(r.Errors.CANT_EXTRACT_FILE);if(s.existsSync(l)&&!o){throw new Error(r.Errors.CANT_OVERRIDE)}var p=f.attr?(f.attr>>>0|0)>>16&4095:0;r.writeFileTo(l,E,o,p);return true},test:function(e){if(!u){return false}for(var t in u.entries){try{if(t.isDirectory){continue}var n=u.entries[t].getData(e);if(!n){return false}}catch(e){return false}}return true},extractAllTo:function(e,t,n){t=t||false;if(!u){throw new Error(r.Errors.NO_ZIP)}u.entries.forEach((function(i){var o=sanitize(e,canonical(i.entryName.toString()));if(i.isDirectory){r.makeDir(o);return}var a=i.getData(n);if(!a){throw new Error(r.Errors.CANT_EXTRACT_FILE)}var f=i.attr?(i.attr>>>0|0)>>16&4095:0;r.writeFileTo(o,a,t,f);try{s.utimesSync(o,i.header.time,i.header.time)}catch(e){throw new Error(r.Errors.CANT_EXTRACT_FILE)}}))},extractAllToAsync:function(e,t,n){if(!n){n=function(){}}t=t||false;if(!u){n(new Error(r.Errors.NO_ZIP));return}var o=u.entries;var a=o.length;o.forEach((function(o){if(a<=0)return;var f=i.normalize(canonical(o.entryName.toString()));if(o.isDirectory){r.makeDir(sanitize(e,f));if(--a===0)n(undefined);return}o.getDataAsync((function(c,u){if(a<=0)return;if(u){n(new Error(u));return}if(!c){a=0;n(new Error(r.Errors.CANT_EXTRACT_FILE));return}var l=o.attr?(o.attr>>>0|0)>>16&4095:0;r.writeFileToAsync(sanitize(e,f),c,t,l,(function(t){try{s.utimesSync(i.resolve(e,f),o.header.time,o.header.time)}catch(e){n(new Error("Unable to set utimes"))}if(a<=0)return;if(!t){a=0;n(new Error("Unable to write"));return}if(--a===0)n(undefined)}))}))}))},writeZip:function(e,t){if(arguments.length===1){if(typeof e==="function"){t=e;e=""}}if(!e&&c.filename){e=c.filename}if(!e)return;var n=u.compressToBuffer();if(n){var i=r.writeFileTo(e,n,true);if(typeof t==="function")t(!i?new Error("failed"):null,"")}},writeZipPromise:function(e,t){const{overwrite:n,perm:i}=Object.assign({overwrite:true},t);return new Promise(((t,o)=>{if(!e&&c.filename)e=c.filename;if(!e)o("ADM-ZIP: ZIP File Name Missing");this.toBufferPromise().then((a=>{const ret=e=>e?t(e):o("ADM-ZIP: Wasn't able to write zip file");r.writeFileToAsync(e,a,n,i,ret)}),o)}))},toBufferPromise:function(){return new Promise(((e,t)=>{u.toAsyncBuffer(e,t)}))},toBuffer:function(e,t,n,r){this.valueOf=2;if(typeof e==="function"){u.toAsyncBuffer(e,t,n,r);return null}return u.compressToBuffer()}}}},32:(e,t,n)=>{var r=n(182),i=r.Constants;e.exports=function(){var e=20,t=10,n=0,o=0,a=0,s=0,f=0,c=0,u=0,l=0,d=0,E=0,p=0,m=0,g=0;switch(process.platform){case"win32":e|=2560;default:e|=768}var h={};function setTime(e){e=new Date(e);a=(e.getFullYear()-1980&127)<<25|e.getMonth()+1<<21|e.getDate()<<16|e.getHours()<<11|e.getMinutes()<<5|e.getSeconds()>>1}setTime(+new Date);return{get made(){return e},set made(t){e=t},get version(){return t},set version(e){t=e},get flags(){return n},set flags(e){n=e},get method(){return o},set method(e){switch(e){case i.STORED:this.version=10;case i.DEFLATED:default:this.version=20}o=e},get time(){return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(a&31)<<1)},set time(e){setTime(e)},get crc(){return s},set crc(e){s=e},get compressedSize(){return f},set compressedSize(e){f=e},get size(){return c},set size(e){c=e},get fileNameLength(){return u},set fileNameLength(e){u=e},get extraLength(){return l},set extraLength(e){l=e},get commentLength(){return d},set commentLength(e){d=e},get diskNumStart(){return E},set diskNumStart(e){E=e},get inAttr(){return p},set inAttr(e){p=e},get attr(){return m},set attr(e){m=e},get offset(){return g},set offset(e){g=e},get encripted(){return(n&1)===1},get entryHeaderSize(){return i.CENHDR+u+l+d},get realDataOffset(){return g+i.LOCHDR+h.fnameLen+h.extraLen},get dataHeader(){return h},loadDataHeaderFromBinary:function(e){var t=e.slice(g,g+i.LOCHDR);if(t.readUInt32LE(0)!==i.LOCSIG){throw new Error(r.Errors.INVALID_LOC)}h={version:t.readUInt16LE(i.LOCVER),flags:t.readUInt16LE(i.LOCFLG),method:t.readUInt16LE(i.LOCHOW),time:t.readUInt32LE(i.LOCTIM),crc:t.readUInt32LE(i.LOCCRC),compressedSize:t.readUInt32LE(i.LOCSIZ),size:t.readUInt32LE(i.LOCLEN),fnameLen:t.readUInt16LE(i.LOCNAM),extraLen:t.readUInt16LE(i.LOCEXT)}},loadFromBinary:function(h){if(h.length!==i.CENHDR||h.readUInt32LE(0)!==i.CENSIG){throw new Error(r.Errors.INVALID_CEN)}e=h.readUInt16LE(i.CENVEM);t=h.readUInt16LE(i.CENVER);n=h.readUInt16LE(i.CENFLG);o=h.readUInt16LE(i.CENHOW);a=h.readUInt32LE(i.CENTIM);s=h.readUInt32LE(i.CENCRC);f=h.readUInt32LE(i.CENSIZ);c=h.readUInt32LE(i.CENLEN);u=h.readUInt16LE(i.CENNAM);l=h.readUInt16LE(i.CENEXT);d=h.readUInt16LE(i.CENCOM);E=h.readUInt16LE(i.CENDSK);p=h.readUInt16LE(i.CENATT);m=h.readUInt32LE(i.CENATX);g=h.readUInt32LE(i.CENOFF)},dataHeaderToBinary:function(){var e=Buffer.alloc(i.LOCHDR);e.writeUInt32LE(i.LOCSIG,0);e.writeUInt16LE(t,i.LOCVER);e.writeUInt16LE(n,i.LOCFLG);e.writeUInt16LE(o,i.LOCHOW);e.writeUInt32LE(a,i.LOCTIM);e.writeUInt32LE(s,i.LOCCRC);e.writeUInt32LE(f,i.LOCSIZ);e.writeUInt32LE(c,i.LOCLEN);e.writeUInt16LE(u,i.LOCNAM);e.writeUInt16LE(l,i.LOCEXT);return e},entryHeaderToBinary:function(){var r=Buffer.alloc(i.CENHDR+u+l+d);r.writeUInt32LE(i.CENSIG,0);r.writeUInt16LE(e,i.CENVEM);r.writeUInt16LE(t,i.CENVER);r.writeUInt16LE(n,i.CENFLG);r.writeUInt16LE(o,i.CENHOW);r.writeUInt32LE(a,i.CENTIM);r.writeUInt32LE(s,i.CENCRC);r.writeUInt32LE(f,i.CENSIZ);r.writeUInt32LE(c,i.CENLEN);r.writeUInt16LE(u,i.CENNAM);r.writeUInt16LE(l,i.CENEXT);r.writeUInt16LE(d,i.CENCOM);r.writeUInt16LE(E,i.CENDSK);r.writeUInt16LE(p,i.CENATT);r.writeUInt32LE(m,i.CENATX);r.writeUInt32LE(g,i.CENOFF);r.fill(0,i.CENHDR);return r},toString:function(){return"{\n"+'\t"made" : '+e+",\n"+'\t"version" : '+t+",\n"+'\t"flags" : '+n+",\n"+'\t"method" : '+r.methodToString(o)+",\n"+'\t"time" : '+this.time+",\n"+'\t"crc" : 0x'+s.toString(16).toUpperCase()+",\n"+'\t"compressedSize" : '+f+" bytes,\n"+'\t"size" : '+c+" bytes,\n"+'\t"fileNameLength" : '+u+",\n"+'\t"extraLength" : '+l+" bytes,\n"+'\t"commentLength" : '+d+" bytes,\n"+'\t"diskNumStart" : '+E+",\n"+'\t"inAttr" : '+p+",\n"+'\t"attr" : '+m+",\n"+'\t"offset" : '+g+",\n"+'\t"entryHeaderSize" : '+(i.CENHDR+u+l+d)+" bytes\n"+"}"}}}},958:(e,t,n)=>{t.EntryHeader=n(32);t.MainHeader=n(408)},408:(e,t,n)=>{var r=n(182),i=r.Constants;e.exports=function(){var e=0,t=0,n=0,o=0,a=0;return{get diskEntries(){return e},set diskEntries(n){e=t=n},get totalEntries(){return t},set totalEntries(n){t=e=n},get size(){return n},set size(e){n=e},get offset(){return o},set offset(e){o=e},get commentLength(){return a},set commentLength(e){a=e},get mainHeaderSize(){return i.ENDHDR+a},loadFromBinary:function(s){if((s.length!==i.ENDHDR||s.readUInt32LE(0)!==i.ENDSIG)&&(s.length<i.ZIP64HDR||s.readUInt32LE(0)!==i.ZIP64SIG)){throw new Error(r.Errors.INVALID_END)}if(s.readUInt32LE(0)===i.ENDSIG){e=s.readUInt16LE(i.ENDSUB);t=s.readUInt16LE(i.ENDTOT);n=s.readUInt32LE(i.ENDSIZ);o=s.readUInt32LE(i.ENDOFF);a=s.readUInt16LE(i.ENDCOM)}else{e=r.readBigUInt64LE(s,i.ZIP64SUB);t=r.readBigUInt64LE(s,i.ZIP64TOT);n=r.readBigUInt64LE(s,i.ZIP64SIZ);o=r.readBigUInt64LE(s,i.ZIP64OFF);a=0}},toBinary:function(){var r=Buffer.alloc(i.ENDHDR+a);r.writeUInt32LE(i.ENDSIG,0);r.writeUInt32LE(0,4);r.writeUInt16LE(e,i.ENDSUB);r.writeUInt16LE(t,i.ENDTOT);r.writeUInt32LE(n,i.ENDSIZ);r.writeUInt32LE(o,i.ENDOFF);r.writeUInt16LE(a,i.ENDCOM);r.fill(" ",i.ENDHDR);return r},toString:function(){return"{\n"+'\t"diskEntries" : '+e+",\n"+'\t"totalEntries" : '+t+",\n"+'\t"size" : '+n+" bytes,\n"+'\t"offset" : 0x'+o.toString(16).toUpperCase()+",\n"+'\t"commentLength" : 0x'+a+"\n"+"}"}}}},686:(e,t,n)=>{e.exports=function(e){var t=n(903);var r={chunkSize:(parseInt(e.length/1024)+1)*1024};return{deflate:function(){return t.deflateRawSync(e,r)},deflateAsync:function(n){var i=t.createDeflateRaw(r),o=[],a=0;i.on("data",(function(e){o.push(e);a+=e.length}));i.on("end",(function(){var e=Buffer.alloc(a),t=0;e.fill(0);for(var r=0;r<o.length;r++){var i=o[r];i.copy(e,t);t+=i.length}n&&n(e)}));i.end(e)}}}},928:(e,t,n)=>{t.Deflater=n(686);t.Inflater=n(153);t.ZipCrypto=n(228)},153:(e,t,n)=>{e.exports=function(e){var t=n(903);return{inflate:function(){return t.inflateRawSync(e)},inflateAsync:function(n){var r=t.createInflateRaw(),i=[],o=0;r.on("data",(function(e){i.push(e);o+=e.length}));r.on("end",(function(){var e=Buffer.alloc(o),t=0;e.fill(0);for(var r=0;r<i.length;r++){var a=i[r];a.copy(e,t);t+=a.length}n&&n(e)}));r.end(e)}}}},228:(e,t,n)=>{const{randomFillSync:r}=n(417);"use strict";const i=new Uint32Array(256).map(((e,t)=>{for(let e=0;e<8;e++){if(0!==(t&1)){t=t>>>1^3988292384}else{t>>>=1}}return t>>>0}));const uMul=(e,t)=>Math.imul(e,t)>>>0;const crc32update=(e,t)=>i[(e^t)&255]^e>>>8;const genSalt=()=>{if("function"===typeof r){return r(Buffer.alloc(12))}else{return genSalt.node()}};genSalt.node=()=>{const e=Buffer.alloc(12);const t=e.length;for(let n=0;n<t;n++)e[n]=Math.random()*256&255;return e};const o={genSalt:genSalt};function Initkeys(e){const t=Buffer.isBuffer(e)?e:Buffer.from(e);this.keys=new Uint32Array([305419896,591751049,878082192]);for(let e=0;e<t.length;e++){this.updateKeys(t[e])}}Initkeys.prototype.updateKeys=function(e){const t=this.keys;t[0]=crc32update(t[0],e);t[1]+=t[0]&255;t[1]=uMul(t[1],134775813)+1;t[2]=crc32update(t[2],t[1]>>>24);return e};Initkeys.prototype.next=function(){const e=(this.keys[2]|2)>>>0;return uMul(e,e^1)>>8&255};function make_decrypter(e){const t=new Initkeys(e);return function(e){const n=Buffer.alloc(e.length);let r=0;for(let i of e){n[r++]=t.updateKeys(i^t.next())}return n}}function make_encrypter(e){const t=new Initkeys(e);return function(e,n,r=0){if(!n)n=Buffer.alloc(e.length);for(let i of e){const e=t.next();n[r++]=i^e;t.updateKeys(i)}return n}}function decrypt(e,t,n){if(!e||!Buffer.isBuffer(e)||e.length<12){return Buffer.alloc(0)}const r=make_decrypter(n);const i=r(e.slice(0,12));if(i[11]!==t.crc>>>24){throw"ADM-ZIP: Wrong Password"}return r(e.slice(12))}function _salter(e){if(Buffer.isBuffer(e)&&e.length>=12){o.genSalt=function(){return e.slice(0,12)}}else if(e==="node"){o.genSalt=genSalt.node}else{o.genSalt=genSalt}}function encrypt(e,t,n,r=false){if(e==null)e=Buffer.alloc(0);if(!Buffer.isBuffer(e))e=Buffer.from(e.toString());const i=make_encrypter(n);const a=o.genSalt();a[11]=t.crc>>>24&255;if(r)a[10]=t.crc>>>16&255;const s=Buffer.alloc(e.length+12);i(a,s);return i(e,s,12)}e.exports={decrypt:decrypt,encrypt:encrypt,_salter:_salter}},522:e=>{e.exports={LOCHDR:30,LOCSIG:67324752,LOCVER:4,LOCFLG:6,LOCHOW:8,LOCTIM:10,LOCCRC:14,LOCSIZ:18,LOCLEN:22,LOCNAM:26,LOCEXT:28,EXTSIG:134695760,EXTHDR:16,EXTCRC:4,EXTSIZ:8,EXTLEN:12,CENHDR:46,CENSIG:33639248,CENVEM:4,CENVER:6,CENFLG:8,CENHOW:10,CENTIM:12,CENCRC:16,CENSIZ:20,CENLEN:24,CENNAM:28,CENEXT:30,CENCOM:32,CENDSK:34,CENATT:36,CENATX:38,CENOFF:42,ENDHDR:22,ENDSIG:101010256,ENDSUB:8,ENDTOT:10,ENDSIZ:12,ENDOFF:16,ENDCOM:20,END64HDR:20,END64SIG:117853008,END64START:4,END64OFF:8,END64NUMDISKS:16,ZIP64SIG:101075792,ZIP64HDR:56,ZIP64LEAD:12,ZIP64SIZE:4,ZIP64VEM:12,ZIP64VER:14,ZIP64DSK:16,ZIP64DSKDIR:20,ZIP64SUB:24,ZIP64TOT:32,ZIP64SIZB:40,ZIP64OFF:48,ZIP64EXTRA:56,STORED:0,SHRUNK:1,REDUCED1:2,REDUCED2:3,REDUCED3:4,REDUCED4:5,IMPLODED:6,DEFLATED:8,ENHANCED_DEFLATED:9,PKWARE:10,BZIP2:12,LZMA:14,IBM_TERSE:18,IBM_LZ77:19,FLG_ENC:0,FLG_COMP1:1,FLG_COMP2:2,FLG_DESC:4,FLG_ENH:8,FLG_STR:16,FLG_LNG:1024,FLG_MSK:4096,FILE:2,BUFFER:1,NONE:0,EF_ID:0,EF_SIZE:2,ID_ZIP64:1,ID_AVINFO:7,ID_PFS:8,ID_OS2:9,ID_NTFS:10,ID_OPENVMS:12,ID_UNIX:13,ID_FORK:14,ID_PATCH:15,ID_X509_PKCS7:20,ID_X509_CERTID_F:21,ID_X509_CERTID_C:22,ID_STRONGENC:23,ID_RECORD_MGT:24,ID_X509_PKCS7_RL:25,ID_IBM1:101,ID_IBM2:102,ID_POSZIP:18064,EF_ZIP64_OR_32:4294967295,EF_ZIP64_OR_16:65535,EF_ZIP64_SUNCOMP:0,EF_ZIP64_SCOMP:8,EF_ZIP64_RHO:16,EF_ZIP64_DSN:24}},255:e=>{e.exports={INVALID_LOC:"Invalid LOC header (bad signature)",INVALID_CEN:"Invalid CEN header (bad signature)",INVALID_END:"Invalid END header (bad signature)",NO_DATA:"Nothing to decompress",BAD_CRC:"CRC32 checksum failed",FILE_IN_THE_WAY:"There is a file in the way: %s",UNKNOWN_METHOD:"Invalid/unsupported compression method",AVAIL_DATA:"inflate::Available inflate data did not terminate",INVALID_DISTANCE:"inflate::Invalid literal/length or distance code in fixed or dynamic block",TO_MANY_CODES:"inflate::Dynamic block code description: too many length or distance codes",INVALID_REPEAT_LEN:"inflate::Dynamic block code description: repeat more than specified lengths",INVALID_REPEAT_FIRST:"inflate::Dynamic block code description: repeat lengths with no first length",INCOMPLETE_CODES:"inflate::Dynamic block code description: code lengths codes incomplete",INVALID_DYN_DISTANCE:"inflate::Dynamic block code description: invalid distance code lengths",INVALID_CODES_LEN:"inflate::Dynamic block code description: invalid literal/length code lengths",INVALID_STORE_BLOCK:"inflate::Stored block length did not match one's complement",INVALID_BLOCK_TYPE:"inflate::Invalid block type (type == 3)",CANT_EXTRACT_FILE:"Could not extract the file",CANT_OVERRIDE:"Target file already exists",NO_ZIP:"No zip file was loaded",NO_ENTRY:"Entry doesn't exist",DIRECTORY_CONTENT_ERROR:"A directory cannot have content",FILE_NOT_FOUND:"File not found: %s",NOT_IMPLEMENTED:"Not implemented",INVALID_FILENAME:"Invalid filename",INVALID_FORMAT:"Invalid or unsupported zip format. No END header found"}},321:(e,t,n)=>{var r=n(895).require(),i=n(622);r.existsSync=r.existsSync||i.existsSync;e.exports=function(e){var t=e||"",n=0,o=newAttr(),a=null;function newAttr(){return{directory:false,readonly:false,hidden:false,executable:false,mtime:0,atime:0}}if(t&&r.existsSync(t)){a=r.statSync(t);o.directory=a.isDirectory();o.mtime=a.mtime;o.atime=a.atime;o.executable=(73&a.mode)!=0;o.readonly=(128&a.mode)==0;o.hidden=i.basename(t)[0]==="."}else{console.warn("Invalid path: "+t)}return{get directory(){return o.directory},get readOnly(){return o.readonly},get hidden(){return o.hidden},get mtime(){return o.mtime},get atime(){return o.atime},get executable(){return o.executable},decodeAttributes:function(e){},encodeAttributes:function(e){},toString:function(){return"{\n"+'\t"path" : "'+t+",\n"+'\t"isDirectory" : '+o.directory+",\n"+'\t"isReadOnly" : '+o.readonly+",\n"+'\t"isHidden" : '+o.hidden+",\n"+'\t"isExecutable" : '+o.executable+",\n"+'\t"mTime" : '+o.mtime+"\n"+'\t"aTime" : '+o.atime+"\n"+"}"}}}},895:(e,t,n)=>{t.require=function(){var e=n(747);if(process&&process.versions&&process.versions["electron"]){try{originalFs=n(941);if(Object.keys(originalFs).length>0){e=originalFs}}catch(e){}}return e}},182:(e,t,n)=>{e.exports=n(291);e.exports.FileSystem=n(895);e.exports.Constants=n(522);e.exports.Errors=n(255);e.exports.FileAttr=n(321)},291:(e,t,n)=>{var r=n(895).require(),i=n(622);r.existsSync=r.existsSync||i.existsSync;e.exports=function(){var e=[],t=n(522),o=n(255),a=i.sep;function mkdirSync(e){var t=e.split(a)[0];e.split(a).forEach((function(e){if(!e||e.substr(-1,1)===":")return;t+=a+e;var n;try{n=r.statSync(t)}catch(e){r.mkdirSync(t)}if(n&&n.isFile())throw o.FILE_IN_THE_WAY.replace("%s",t)}))}function findSync(e,t,n){if(typeof t==="boolean"){n=t;t=undefined}var o=[];r.readdirSync(e).forEach((function(s){var f=i.join(e,s);if(r.statSync(f).isDirectory()&&n)o=o.concat(findSync(f,t,n));if(!t||t.test(f)){o.push(i.normalize(f)+(r.statSync(f).isDirectory()?a:""))}}));return o}function readBigUInt64LE(e,t){var n=Buffer.from(e.slice(t,t+8));n.swap64();return parseInt(`0x${n.toString("hex")}`)}return{makeDir:function(e){mkdirSync(e)},crc32:function(t){if(typeof t==="string"){t=Buffer.from(t)}var n=Buffer.alloc(4);if(!e.length){for(var r=0;r<256;r++){var i=r;for(var o=8;--o>=0;)if((i&1)!==0){i=3988292384^i>>>1}else{i=i>>>1}if(i<0){n.writeInt32LE(i,0);i=n.readUInt32LE(0)}e[r]=i}}var a=0,s=0,f=t.length,c=~a;while(--f>=0)c=e[(c^t[s++])&255]^c>>>8;a=~c;n.writeInt32LE(a&4294967295,0);return n.readUInt32LE(0)},methodToString:function(e){switch(e){case t.STORED:return"STORED ("+e+")";case t.DEFLATED:return"DEFLATED ("+e+")";default:return"UNSUPPORTED ("+e+")"}},writeFileTo:function(e,t,n,o){if(r.existsSync(e)){if(!n)return false;var a=r.statSync(e);if(a.isDirectory()){return false}}var s=i.dirname(e);if(!r.existsSync(s)){mkdirSync(s)}var f;try{f=r.openSync(e,"w",438)}catch(t){r.chmodSync(e,438);f=r.openSync(e,"w",438)}if(f){try{r.writeSync(f,t,0,t.length,0)}catch(e){throw e}finally{r.closeSync(f)}}r.chmodSync(e,o||438);return true},writeFileToAsync:function(e,t,n,o,a){if(typeof o==="function"){a=o;o=undefined}r.exists(e,(function(s){if(s&&!n)return a(false);r.stat(e,(function(n,f){if(s&&f.isDirectory()){return a(false)}var c=i.dirname(e);r.exists(c,(function(n){if(!n)mkdirSync(c);r.open(e,"w",438,(function(n,i){if(n){r.chmod(e,438,(function(){r.open(e,"w",438,(function(n,i){r.write(i,t,0,t.length,0,(function(){r.close(i,(function(){r.chmod(e,o||438,(function(){a(true)}))}))}))}))}))}else{if(i){r.write(i,t,0,t.length,0,(function(){r.close(i,(function(){r.chmod(e,o||438,(function(){a(true)}))}))}))}else{r.chmod(e,o||438,(function(){a(true)}))}}}))}))}))}))},findFiles:function(e){return findSync(e,true)},getAttributes:function(e){},setAttributes:function(e){},toBuffer:function(e){if(Buffer.isBuffer(e)){return e}else{if(e.length===0){return Buffer.alloc(0)}return Buffer.from(e,"utf8")}},readBigUInt64LE:readBigUInt64LE,Constants:t,Errors:o}}()},57:(e,t,n)=>{var r=n(182),i=n(958),o=r.Constants,a=n(928);e.exports=function(e){var t=new i.EntryHeader,n=Buffer.alloc(0),s=Buffer.alloc(0),f=false,c=null,u=Buffer.alloc(0);function getCompressedDataFromZip(){if(!e||!Buffer.isBuffer(e)){return Buffer.alloc(0)}t.loadDataHeaderFromBinary(e);return e.slice(t.realDataOffset,t.realDataOffset+t.compressedSize)}function crc32OK(e){if((t.flags&8)!==8){if(r.crc32(e)!==t.dataHeader.crc){return false}}else{}return true}function decompress(e,i,o){if(typeof i==="undefined"&&typeof e==="string"){o=e;e=void 0}if(f){if(e&&i){i(Buffer.alloc(0),r.Errors.DIRECTORY_CONTENT_ERROR)}return Buffer.alloc(0)}var s=getCompressedDataFromZip();if(s.length===0){if(e&&i)i(s);return s}if(t.encripted){if("string"!==typeof o&&!Buffer.isBuffer(o)){throw new Error("ADM-ZIP: Incompatible password parameter")}s=a.ZipCrypto.decrypt(s,t,o)}var c=Buffer.alloc(t.size);switch(t.method){case r.Constants.STORED:s.copy(c);if(!crc32OK(c)){if(e&&i)i(c,r.Errors.BAD_CRC);throw new Error(r.Errors.BAD_CRC)}else{if(e&&i)i(c);return c}case r.Constants.DEFLATED:var u=new a.Inflater(s);if(!e){var l=u.inflate(c);l.copy(c,0);if(!crc32OK(c)){throw new Error(r.Errors.BAD_CRC+" "+n.toString())}return c}else{u.inflateAsync((function(e){e.copy(c,0);if(!crc32OK(c)){if(i)i(c,r.Errors.BAD_CRC)}else{if(i)i(c)}}))}break;default:if(e&&i)i(Buffer.alloc(0),r.Errors.UNKNOWN_METHOD);throw new Error(r.Errors.UNKNOWN_METHOD)}}function compress(n,i){if((!c||!c.length)&&Buffer.isBuffer(e)){if(n&&i)i(getCompressedDataFromZip());return getCompressedDataFromZip()}if(c.length&&!f){var o;switch(t.method){case r.Constants.STORED:t.compressedSize=t.size;o=Buffer.alloc(c.length);c.copy(o);if(n&&i)i(o);return o;default:case r.Constants.DEFLATED:var s=new a.Deflater(c);if(!n){var u=s.deflate();t.compressedSize=u.length;return u}else{s.deflateAsync((function(e){o=Buffer.alloc(e.length);t.compressedSize=e.length;e.copy(o);i&&i(o)}))}s=null;break}}else{if(n&&i){i(Buffer.alloc(0))}else{return Buffer.alloc(0)}}}function readUInt64LE(e,t){return(e.readUInt32LE(t+4)<<4)+e.readUInt32LE(t)}function parseExtra(e){var t=0;var n,r,i;while(t<e.length){n=e.readUInt16LE(t);t+=2;r=e.readUInt16LE(t);t+=2;i=e.slice(t,t+r);t+=r;if(o.ID_ZIP64===n){parseZip64ExtendedInformation(i)}}}function parseZip64ExtendedInformation(e){var n,r,i,a;if(e.length>=o.EF_ZIP64_SCOMP){n=readUInt64LE(e,o.EF_ZIP64_SUNCOMP);if(t.size===o.EF_ZIP64_OR_32){t.size=n}}if(e.length>=o.EF_ZIP64_RHO){r=readUInt64LE(e,o.EF_ZIP64_SCOMP);if(t.compressedSize===o.EF_ZIP64_OR_32){t.compressedSize=r}}if(e.length>=o.EF_ZIP64_DSN){i=readUInt64LE(e,o.EF_ZIP64_RHO);if(t.offset===o.EF_ZIP64_OR_32){t.offset=i}}if(e.length>=o.EF_ZIP64_DSN+4){a=e.readUInt32LE(o.EF_ZIP64_DSN);if(t.diskNumStart===o.EF_ZIP64_OR_16){t.diskNumStart=a}}}return{get entryName(){return n.toString()},get rawEntryName(){return n},set entryName(e){n=r.toBuffer(e);var i=n[n.length-1];f=i===47||i===92;t.fileNameLength=n.length},get extra(){return u},set extra(e){u=e;t.extraLength=e.length;parseExtra(e)},get comment(){return s.toString()},set comment(e){s=r.toBuffer(e);t.commentLength=s.length},get name(){var e=n.toString();return f?e.substr(e.length-1).split("/").pop():e.split("/").pop()},get isDirectory(){return f},getCompressedData:function(){return compress(false,null)},getCompressedDataAsync:function(e){compress(true,e)},setData:function(e){c=r.toBuffer(e);if(!f&&c.length){t.size=c.length;t.method=r.Constants.DEFLATED;t.crc=r.crc32(e);t.changed=true}else{t.method=r.Constants.STORED}},getData:function(e){if(t.changed){return c}else{return decompress(false,null,e)}},getDataAsync:function(e,n){if(t.changed){e(c)}else{decompress(true,e,n)}},set attr(e){t.attr=e},get attr(){return t.attr},set header(e){t.loadFromBinary(e)},get header(){return t},packHeader:function(){var e=t.entryHeaderToBinary();var i=r.Constants.CENHDR;n.copy(e,i);i+=n.length;if(t.extraLength){u.copy(e,i);i+=t.extraLength}if(t.commentLength){s.copy(e,i)}return e},toString:function(){return"{\n"+'\t"entryName" : "'+n.toString()+'",\n'+'\t"name" : "'+(f?n.toString().replace(/\/$/,"").split("/").pop():n.toString().split("/").pop())+'",\n'+'\t"comment" : "'+s.toString()+'",\n'+'\t"isDirectory" : '+f+",\n"+'\t"header" : '+t.toString().replace(/\t/gm,"\t\t").replace(/}/gm,"\t}")+",\n"+'\t"compressedData" : <'+(e&&e.length+" bytes buffer"||"null")+">\n"+'\t"data" : <'+(c&&c.length+" bytes buffer"||"null")+">\n"+"}"}}}},744:(e,t,n)=>{const r=n(57);const i=n(958);const o=n(182);e.exports=function(e,t){var n=[],a={},s=Buffer.alloc(0),f=new i.MainHeader,c=false;const u=Object.assign(Object.create(null),t);if(e){readMainHeader(u.readEntries)}else{c=true}function iterateEntries(t){const n=f.diskEntries;let i=f.offset;for(let a=0;a<n;a++){let n=i;const a=new r(e);a.header=e.slice(n,n+=o.Constants.CENHDR);a.entryName=e.slice(n,n+=a.header.fileNameLength);i+=a.header.entryHeaderSize;t(a)}}function readEntries(){c=true;a={};n=new Array(f.diskEntries);var t=f.offset;for(var i=0;i<n.length;i++){var s=t,u=new r(e);u.header=e.slice(s,s+=o.Constants.CENHDR);u.entryName=e.slice(s,s+=u.header.fileNameLength);if(u.header.extraLength){u.extra=e.slice(s,s+=u.header.extraLength)}if(u.header.commentLength)u.comment=e.slice(s,s+u.header.commentLength);t+=u.header.entryHeaderSize;n[i]=u;a[u.entryName]=u}}function readMainHeader(t){var n=e.length-o.Constants.ENDHDR,r=Math.max(0,n-65535),i=r,a=e.length,c=-1,u=0;for(n;n>=i;n--){if(e[n]!==80)continue;if(e.readUInt32LE(n)===o.Constants.ENDSIG){c=n;u=n;a=n+o.Constants.ENDHDR;i=n-o.Constants.END64HDR;continue}if(e.readUInt32LE(n)===o.Constants.END64SIG){i=r;continue}if(e.readUInt32LE(n)==o.Constants.ZIP64SIG){c=n;a=n+o.readBigUInt64LE(e,n+o.Constants.ZIP64SIZE)+o.Constants.ZIP64LEAD;break}}if(!~c)throw new Error(o.Errors.INVALID_FORMAT);f.loadFromBinary(e.slice(c,a));if(f.commentLength){s=e.slice(u+o.Constants.ENDHDR)}if(t)readEntries()}return{get entries(){if(!c){readEntries()}return n},get comment(){return s.toString()},set comment(e){s=o.toBuffer(e);f.commentLength=s.length},getEntryCount:function(){if(!c){return f.diskEntries}return n.length},forEach:function(e){if(!c){iterateEntries(e);return}n.forEach(e)},getEntry:function(e){if(!c){readEntries()}return a[e]||null},setEntry:function(e){if(!c){readEntries()}n.push(e);a[e.entryName]=e;f.totalEntries=n.length},deleteEntry:function(e){if(!c){readEntries()}var t=a[e];if(t&&t.isDirectory){var r=this;this.getEntryChildren(t).forEach((function(t){if(t.entryName!==e){r.deleteEntry(t.entryName)}}))}n.splice(n.indexOf(t),1);delete a[e];f.totalEntries=n.length},getEntryChildren:function(e){if(!c){readEntries()}if(e.isDirectory){var t=[],r=e.entryName,i=r.length;n.forEach((function(e){if(e.entryName.substr(0,i)===r){t.push(e)}}));return t}return[]},compressToBuffer:function(){if(!c){readEntries()}if(n.length>1){n.sort((function(e,t){var n=e.entryName.toLowerCase();var r=t.entryName.toLowerCase();if(n<r){return-1}if(n>r){return 1}return 0}))}var e=0,t=[],r=[],i=0;f.size=0;f.offset=0;n.forEach((function(n){var o=n.getCompressedData();n.header.offset=i;var a=n.header.dataHeaderToBinary();var s=n.rawEntryName.length;var c=n.extra.toString();var u=Buffer.alloc(s+c.length);n.rawEntryName.copy(u,0);u.fill(c,s);var l=a.length+u.length+o.length;i+=l;t.push(a);t.push(u);t.push(o);var d=n.packHeader();r.push(d);f.size+=d.length;e+=l+d.length}));e+=f.mainHeaderSize;f.offset=i;i=0;var a=Buffer.alloc(e);t.forEach((function(e){e.copy(a,i);i+=e.length}));r.forEach((function(e){e.copy(a,i);i+=e.length}));var u=f.toBinary();if(s){Buffer.from(s).copy(u,o.Constants.ENDHDR)}u.copy(a,i);return a},toAsyncBuffer:function(e,t,r,i){if(!c){readEntries()}if(n.length>1){n.sort((function(e,t){var n=e.entryName.toLowerCase();var r=t.entryName.toLowerCase();if(n>r){return-1}if(n<r){return 1}return 0}))}var a=0,u=[],l=[],d=0;f.size=0;f.offset=0;var compress=function(t){var n=arguments.callee;if(t.length){var c=t.pop();var E=c.entryName+c.extra.toString();if(r)r(E);c.getCompressedDataAsync((function(r){if(i)i(E);c.header.offset=d;var p=c.header.dataHeaderToBinary();var m;try{m=Buffer.alloc(E.length,E)}catch(e){m=new Buffer(E)}var g=p.length+m.length+r.length;d+=g;u.push(p);u.push(m);u.push(r);var h=c.packHeader();l.push(h);f.size+=h.length;a+=g+h.length;if(t.length){n(t)}else{a+=f.mainHeaderSize;f.offset=d;d=0;var I=Buffer.alloc(a);u.forEach((function(e){e.copy(I,d);d+=e.length}));l.forEach((function(e){e.copy(I,d);d+=e.length}));var y=f.toBinary();if(s){s.copy(y,o.Constants.ENDHDR)}y.copy(I,d);e(I)}}))}};compress(n)}}}},941:module=>{module.exports=eval("require")("original-fs")},417:e=>{"use strict";e.exports=require("crypto")},747:e=>{"use strict";e.exports=require("fs")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},903:e=>{"use strict";e.exports=require("zlib")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var n=__webpack_module_cache__[e]={exports:{}};var r=true;try{__webpack_modules__[e].call(n.exports,n,n.exports,__nccwpck_require__);r=false}finally{if(r)delete __webpack_module_cache__[e]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{const e=__nccwpck_require__(747);const t=__nccwpck_require__(622);const n=__nccwpck_require__(186);const r=__nccwpck_require__(761);const i="upload";const o="install.xml";const a=n.getInput("module-name");const s=n.getInput("files");const f=n.getInput("modification-file");const c=`${a}.ocmod.zip`;const u=t.join(process.env.GITHUB_WORKSPACE,c);console.log(`Ready to zip ${s} into ${c}`);const l=new r;s.split(" ").forEach((n=>{const r=t.join(process.env.GITHUB_WORKSPACE,n);if(!e.existsSync(r)){console.log(`  - ${n} (Not Found)`);return}const o=t.dirname(n);const a=e.lstatSync(r);if(a.isDirectory()){const e=o==="."?n:o;l.addLocalFolder(r,t.join(i,e))}else{const e=o==="."?"":o;l.addLocalFile(r,t.join(i,e))}console.log(`  - ${n}`)}));if(f){const n=t.join(process.env.GITHUB_WORKSPACE,f);if(!e.existsSync(n)){console.log(`Modification file - ${n} (Not Found)`)}l.addLocalFile(n,o)}l.writeZip(u);n.setOutput("output_name",c);n.setOutput("output_file",u);console.log(`\nZipped file ${c} successfully`)})();module.exports=__webpack_exports__})();