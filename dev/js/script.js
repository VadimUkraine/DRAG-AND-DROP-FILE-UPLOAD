// loading files  - drag and drop

var dropForm = document.getElementById('main-wrap');
var dropArea = document.getElementsByClassName('drop_wrap')[0];
var dropDrag = document.getElementsByClassName('drop-form')[0];
var dropGallery = document.getElementsByClassName('drop_thumbnails_wrap')[0];
var labelInput = document.getElementsByTagName('label')[0];


dropForm.addEventListener('dragenter', preventDefaults, false);
dropForm.addEventListener('dragleave', preventDefaults, false);
dropForm.addEventListener('dragover', preventDefaults, false);
dropForm.addEventListener('drop', preventDefaults, false);
labelInput.addEventListener('click', preventDefaults, false);

function preventDefaults (e) {
  e.preventDefault();
  e.stopPropagation();
};

dropForm.addEventListener('dragenter', highlight, false);
dropForm.addEventListener('drop',  unhighlight, false);
dropForm.addEventListener('dragleave', leaveDropZone, false);
dropArea.addEventListener('drop', handleDrop, false);
dropArea.addEventListener('click', unhighlight, false);


function highlight(e) {
  dropArea.classList.add('highlight');
  dropDrag.classList.add('hidden');
  dropGallery.classList.add('hidden');
  document.getElementsByClassName('attention')[0].classList.remove('display');
};

function unhighlight(e) {
  dropArea.classList.remove('highlight');
  dropDrag.classList.remove('hidden');
  dropGallery.classList.remove('hidden');
};


function leaveDropZone(event) {
  var elem = document.elementFromPoint(event.clientX, event.clientY);
  if(elem === null){
     unhighlight();
  }else if(elem.classList.contains('wrapper')){
     unhighlight();
  } 
};

function handleDrop(e) {
  var dt = e.dataTransfer;
  var files = dt.files;
  handleFiles(files);
};

function handleFiles(files) {  
  	for (var i = 0; i < files.length; i++) {
	    previewFile(files[i]); 	    
  	}
};

function previewFile(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function(){
    if(file.type === "application/pdf"){
      var div = document.createElement('div');
      div.className = 'item-drag-img';
      div.innerHTML = '<img class="drop-img" src="images/pdf.png">';
      dropGallery.appendChild(div);
    }else if(file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png'){
      var div = document.createElement('div');
      div.className = 'item-drag-img';
      div.innerHTML = '<img class="drop-img" src="'+reader.result+'">';
      dropGallery.appendChild(div);
    }else{
      var attention = document.getElementsByClassName('attention')[0];
      attention.classList.add('display');
      setTimeout(function(){
          attention.classList.remove('display');
      }, 6000);
      return false;
    }
  }
};