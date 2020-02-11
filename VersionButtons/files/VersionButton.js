$(document).ready(function () {
    // Get all the stuff you need
    var versionDiv = document.getElementById('project-versions-div');
    var copyToolBoxDiv = versionDiv.getElementsByClassName('widget-toolbox padding-8 clearfix')[0];
    var copyForm = document.getElementById('manage-project-version-copy-form');
    var addForm = document.getElementById('manage-project-add-version-form').cloneNode(true);
    var wrapperCopyForm = document.createElement('div');
    var wrapperAddForm = document.createElement('div');
   
    //set new class definition
    copyToolBoxDiv.classList.add("form-row");
    wrapperCopyForm.classList.add("form-group", "col-md-6");
    wrapperAddForm.classList.add("form-group", "col-md-6");
    
    //Build new structure
    copyToolBoxDiv.replaceChild(wrapperCopyForm,copyForm);
    wrapperCopyForm.appendChild(copyForm);
    copyToolBoxDiv.appendChild(wrapperAddForm);
    wrapperAddForm.appendChild(addForm);
});

