var dialogBox=document.createElement("div"),LargedialogBox=document.createElement("div"),RightBox=document.createElement("div"),LeftBox=document.createElement("div"),heading=document.createElement("div"),divider=document.createElement("div"),subHeading1=document.createElement("div"),subHeading2=document.createElement("div"),linkPreview=document.createElement("div"),linkDisplayImage=document.createElement("img"),linkDisplayTitle=document.createElement("div"),linkDisplay=document.createElement("div"),pageTitleHeading=document.createElement("div"),pageTitleInput=document.createElement("input"),pageDataBaseHeading=document.createElement("div"),saveFullpageScreenshotButton=document.createElement("div"),cancelButton=document.createElement("div"),backdrop=document.createElement("div"),AddToHeading=document.createElement("div"),AddTo=document.createElement("div"),backButton=document.createElement("div"),searchInput=document.createElement("input"),notionDataBox=document.createElement("div"),notionDbBox=document.createElement("div"),notionPagesBox=document.createElement("div"),notionDbBoxSearched=document.createElement("div"),notionPagesBoxSearched=document.createElement("div");function makingScreenshotFullpageModal(){LargedialogBox.id="prototionBigDialogBox",LeftBox.classList.remove("notion-clipper-left"),LeftBox.classList.add("notion-clipper-left-full-page-ss"),RightBox.classList.add("notion-clipper-right"),heading.classList.add("notion-clipper-heading"),divider.classList.add("notion-clipper-divider"),subHeading2.classList.add("notion-clipper-subHeading"),subHeading2.innerHTML="Title",pageTitleHeading.classList.add("notion-clipper-subHeading"),pageTitleHeading.innerHTML="Title",pageTitleInput.classList.add("notion-clipper-input-style"),AddToHeading.classList.add("notion-clipper-subHeading"),AddToHeading.innerText="Adding to",AddTo.classList.add("AddTo"),AddTo.innerHTML=`<span>${selectedDB.name}</span>`,AddTo.addEventListener("click",(()=>{RightBox.classList.add("search-active")})),backButton.addEventListener("click",(()=>{RightBox.classList.remove("search-active")})),notionDbBoxSearched.classList.add("hideComplete"),notionPagesBoxSearched.classList.add("hideComplete"),searchInput.addEventListener("keyup",(e=>{0===e.target.value.length?(notionDbBox.classList.remove("hideComplete"),notionPagesBox.classList.remove("hideComplete"),notionDbBoxSearched.classList.add("hideComplete"),notionPagesBoxSearched.classList.add("hideComplete")):(notionDbBox.classList.add("hideComplete"),notionPagesBox.classList.add("hideComplete"),notionDbBoxSearched.classList.remove("hideComplete"),notionPagesBoxSearched.classList.remove("hideComplete"))}));const e=((e,t)=>{let o;return function(){const i=this,n=arguments;clearTimeout(o),o=setTimeout((()=>{e.apply(i,[n])}),t)}})((e=>{chrome.runtime.sendMessage({message:"get_pages",payload:{query:e[0].target.value}},(e=>{notionDbBoxSearched.innerHTML="",notionPagesBoxSearched.innerHTML="",e.forEach((e=>{if("collection_view"===e.record.type){var t=document.createElement("div"),o=(i=document.createElement("span")).cloneNode(!0);n=e.record.iconEmoji?e.record.iconEmoji:"✨",t.classList.add("listItem"),t.appendChild(i),t.appendChild(o),t.id=e.record.id,t.firstChild.innerHTML=n,t.childNodes[1].innerHTML=e.record.name,notionDbBoxSearched.appendChild(t),t.addEventListener("click",(()=>{AddTo.innerHTML=`<span>${e.record.name}</span>`,selectedDB=e.record,chrome.storage.local.set({selectedDB:{type:"collection",id:e.record.collectionId,parentId:e.record.id,name:e.record.name,icon:n}}),document.querySelector("#prototionDialogBox")?dialogBox.classList.remove("search-active"):document.querySelector("#prototionBigDialogBox")&&document.querySelector(".notion-clipper-right").classList.remove("search-active"),searchInput.value="",notionDbBox.classList.remove("hideComplete"),notionPagesBox.classList.remove("hideComplete"),notionDbBoxSearched.classList.add("hideComplete"),notionPagesBoxSearched.classList.add("hideComplete")}))}else if("page"===e.record.type){var i,n;t=document.createElement("div"),o=(i=document.createElement("span")).cloneNode(!0);n=e.record.iconEmoji?e.record.iconEmoji:"✨",t.classList.add("listItem"),t.appendChild(i),t.appendChild(o),t.id=e.record.id,t.firstChild.innerHTML=n,t.childNodes[1].innerHTML=e.record.name,notionPagesBoxSearched.appendChild(t),t.addEventListener("click",(()=>{AddTo.innerHTML=`<span>${e.record.name}</span>`,selectedDB=e.record,chrome.storage.local.set({selectedDB:{type:"block",id:e.record.id,parentId:e.record.id,name:e.record.name,icon:n}}),document.querySelector("#prototionDialogBox")?dialogBox.classList.remove("search-active"):document.querySelector("#prototionBigDialogBox")&&document.querySelector(".notion-clipper-right").classList.remove("search-active"),searchInput.value="",notionDbBox.classList.remove("hideComplete"),notionPagesBox.classList.remove("hideComplete"),notionDbBoxSearched.classList.add("hideComplete"),notionPagesBoxSearched.classList.add("hideComplete")}))}}))}))}),500);searchInput.addEventListener("input",e),backButton.classList.add("backButton"),backButton.innerHTML="&#171;&nbsp;&nbsp;Go Back",searchInput.classList.add("notion-clipper-search-input"),searchInput.setAttribute("placeholder","Search for pages..."),notionDataBox.classList.add("notionDataBox"),notionDbBox.classList.add("notionDbBox"),notionPagesBox.classList.add("notionPagesBox"),notionDbBoxSearched.classList.add("notionDbBoxSearched"),notionPagesBoxSearched.classList.add("notionPagesBoxSearched"),saveFullpageScreenshotButton.classList.add("notion-clipper-button-primary"),saveFullpageScreenshotButton.innerHTML="Save",saveFullpageScreenshotButton.style.pointerEvents="auto",cancelButton.classList.add("notion-clipper-button-secondary"),cancelButton.innerHTML="Cancel",backdrop.setAttribute("class","prototionBackdropWrapper"),LargedialogBox.appendChild(LeftBox),LargedialogBox.appendChild(RightBox),backdrop.appendChild(LargedialogBox),document.querySelector("body").appendChild(backdrop)}function saveFullpageImage(e,t){if(!document.body.getAttribute("prototion-web-clipper")){document.body.setAttribute("prototion-web-clipper",!0);const e=pageTitleInput.value,o=window.location.href;if(e&&o){AddTo.innerHTML=`<span>${selectedDB.name}</span>`;const i="https://res.cloudinary.com/skynox-tech/image/upload/v1631102330/Notion%20Pro%20Clipper/static/success_mcyvc3.gif";LargedialogBox.innerHTML=`\n            <div class="lottie-container">\n            <div class="lottie-imageContainer">\n            <img src=${i}></img>\n            </div>\n              <p>Image Saved To Notion<p>\n            </div>\n          `,chrome.runtime.sendMessage({message:"save-image-request",payload:{title:e,url:o,imageSrc:t}},(e=>{if("save_image_success"===e.message)cancelScreenshotFullpage(),document.body.removeAttribute("prototion-web-clipper");else if("save_image_failure"===e.message){const e="https://res.cloudinary.com/skynox-tech/image/upload/v1631102409/Notion%20Pro%20Clipper/static/error_azjn51.gif";LargedialogBox.innerHTML=`\n            <div class="lottie-container">\n            <div class="lottie-imageContainer">\n            <img src=${e}></img>\n            </div>\n              <p>Oops! Something Went Wrong. Please report this issue, We will get it fixed as soon as possible.<p>\n              <div class="notion-pro-clipper-error-container">\n              <div class="notion-pro-clipper-report notion-clipper-button-primary-report">Report</div>\n              <div class="ignore-btn-notion-pro-clipper notion-clipper-button-secondary-ignore">Ignore</div>\n              </div>\n            </div>\n          `,document.querySelector(".notion-pro-clipper-report").addEventListener("click",(()=>{cancelScreenshotFullpage(),window.open("https://forms.clickup.com/f/1rz92-8524/INOKPBNXCK5O3NE46S","_blank")})),document.querySelector(".ignore-btn-notion-pro-clipper").addEventListener("click",(()=>{cancelScreenshotFullpage(),document.body.removeAttribute("prototion-web-clipper")}))}}))}}}function cancelScreenshotFullpage(e){document.body.style.overflowY=null,LargedialogBox.innerHTML="",LargedialogBox.remove(),saveFullpageScreenshotButton.remove(),document.querySelector(".lottie-container")&&document.querySelector(".lottie-container").remove(),document.querySelector(".prototionBackdropWrapper")&&document.querySelector(".prototionBackdropWrapper").remove()}function renderFullpageDialog(e,t){makingScreenshotFullpageModal(),heading.innerText=e.heading,pageTitleInput.value=e.pageTitle,LeftBox.innerHTML="",LeftBox.appendChild(t),RightBox.appendChild(heading),RightBox.appendChild(divider),RightBox.appendChild(pageTitleHeading),RightBox.appendChild(pageTitleInput),RightBox.appendChild(AddToHeading),RightBox.appendChild(AddTo),RightBox.appendChild(backButton),RightBox.appendChild(pageDataBaseHeading),RightBox.appendChild(searchInput),RightBox.appendChild(notionDataBox),notionDataBox.appendChild(notionDbBox),notionDataBox.appendChild(notionPagesBox),notionDataBox.appendChild(notionDbBoxSearched),notionDataBox.appendChild(notionPagesBoxSearched),RightBox.appendChild(saveFullpageScreenshotButton),RightBox.appendChild(cancelButton),void 0!==typeof window&&window.scroll(0,0),cancelButton.addEventListener("click",cancelScreenshotFullpage),saveFullpageScreenshotButton.addEventListener("click",(()=>{saveFullpageScreenshotButton.innerHTML=getSpinnerHTML(),saveFullpageScreenshotButton.style.pointerEvents="none",saveFullpageImage(e,t.getAttribute("src"))}))}function getSpinnerHTML(){return'\n  <div class="sk-fading-circle">\n  <div class="sk-circle1 sk-circle"></div>\n  <div class="sk-circle2 sk-circle"></div>\n  <div class="sk-circle3 sk-circle"></div>\n  <div class="sk-circle4 sk-circle"></div>\n  <div class="sk-circle5 sk-circle"></div>\n  <div class="sk-circle6 sk-circle"></div>\n  <div class="sk-circle7 sk-circle"></div>\n  <div class="sk-circle8 sk-circle"></div>\n  <div class="sk-circle9 sk-circle"></div>\n  <div class="sk-circle10 sk-circle"></div>\n  <div class="sk-circle11 sk-circle"></div>\n  <div class="sk-circle12 sk-circle"></div>\n</div>\n  '}chrome.runtime.onMessage.addListener((function(e,t,o){if("fullpage"===e.message){var i={canvas:null,context:null,scrollBy:0,size:{height:0,width:0},originalParams:{overflow:null,scrollTop:0},request:null,initialize(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.request=e,this.bindEvents()},bindEvents(){var e={width:Math.max(document.documentElement.clientWidth,document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth),height:Math.max(document.documentElement.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight)};this.size=e,this.scrollBy=window&&window.innerHeight,this.originalParams={overflow:document.querySelector("body").style.overflow,scrollTop:document.documentElement.scrollTop},this.canvas.height=this.size.height,this.canvas.width=this.size.width,this.scrollScreen(0)},scrollScreen(e){var t=!1;void 0!==typeof window&&window.scrollTo(0,e);let o=e;0===e&&(document.querySelector("body").style.overflow="hidden"),this.size.height<=e&&(t=!0,o=this.size.height-(window&&window.innerHeight)),this.capturePage(o,t)},capturePage(e,t){var o=this;setTimeout((()=>{chrome.runtime.sendMessage({type:"coords"},(function(i){const n=i.imgSrc,a=document.createElement("img");a.onload=function(){if(o.context.drawImage(a,0,0,this.width*(window&&window.devicePixelRatio),this.height*(window&&window.devicePixelRatio),0,e,this.width,this.height),t){o.resetPage();const e=document.createElement("img");e.setAttribute("src",o.canvas.toDataURL("image/png")),renderFullpageDialog(o.request.payload.data,e)}else o.scrollScreen(e+o.scrollBy)},a.src=n}))}),500)},resetPage(){void 0!==typeof window&&window.scrollTo(0,this.originalParams.scrollTop),document.querySelector("body").style.overflow=this.originalParams.overflow}};i.initialize(e)}return!0}));