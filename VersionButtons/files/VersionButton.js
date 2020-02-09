$(document).ready(function () {
    var versionDiv = document.getElementById('project-versions-div');
    var copyForm = versionDiv.getElementsByClassName('widget-toolbox padding-8 clearfix')[0];
    var formToClone = document.getElementById('manage-project-add-version-form').cloneNode(true);
    copyForm.appendChild(formToClone);
});

