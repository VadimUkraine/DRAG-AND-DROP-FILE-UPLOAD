var dropForm=document.getElementById("main-wrap"),dropArea=document.getElementsByClassName("drop_wrap")[0],dropDrag=document.getElementsByClassName("drop-form")[0],dropGallery=document.getElementsByClassName("drop_thumbnails_wrap")[0],labelInput=document.getElementsByTagName("label")[0];function preventDefaults(e){e.preventDefault(),e.stopPropagation()}function highlight(e){dropArea.classList.add("highlight"),dropDrag.classList.add("hidden"),dropGallery.classList.add("hidden"),document.getElementsByClassName("attention")[0].classList.remove("display")}function unhighlight(e){dropArea.classList.remove("highlight"),dropDrag.classList.remove("hidden"),dropGallery.classList.remove("hidden")}function leaveDropZone(e){var t=document.elementFromPoint(e.clientX,e.clientY);null===t?unhighlight():t.classList.contains("wrapper")&&unhighlight()}function handleDrop(e){handleFiles(e.dataTransfer.files)}function handleFiles(e){for(var t=0;t<e.length;t++)previewFile(e[t])}function previewFile(a){var r=new FileReader;r.readAsDataURL(a),r.onloadend=function(){if("application/pdf"===a.type){(t=document.createElement("div")).className="item-drag-img",t.innerHTML='<img class="drop-img" src="images/pdf.png">',dropGallery.appendChild(t)}else{if("image/jpg"!==a.type&&"image/jpeg"!==a.type&&"image/gif"!==a.type&&"image/png"!==a.type){var e=document.getElementsByClassName("attention")[0];return e.classList.add("display"),setTimeout(function(){e.classList.remove("display")},6e3),!1}var t;(t=document.createElement("div")).className="item-drag-img",t.innerHTML='<img class="drop-img" src="'+r.result+'">',dropGallery.appendChild(t)}}}dropForm.addEventListener("dragenter",preventDefaults,!1),dropForm.addEventListener("dragleave",preventDefaults,!1),dropForm.addEventListener("dragover",preventDefaults,!1),dropForm.addEventListener("drop",preventDefaults,!1),labelInput.addEventListener("click",preventDefaults,!1),dropForm.addEventListener("dragenter",highlight,!1),dropForm.addEventListener("drop",unhighlight,!1),dropForm.addEventListener("dragleave",leaveDropZone,!1),dropArea.addEventListener("drop",handleDrop,!1),dropArea.addEventListener("click",unhighlight,!1);