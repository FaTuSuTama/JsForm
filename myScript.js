var emailCount = 1;
var phnCount = 1;


function createField(type, ph, nam, teid){
       var typeAttribute = type;
       var placeholderAttribute = ph;
       var nameAttribute = nam;
       var targetElementId = teid;
    
        var liNode = document.createElement("LI");
        var inputTag = document.createElement("INPUT");
        inputTag.setAttribute("type", typeAttribute);
        inputTag.setAttribute("placeholder", placeholderAttribute);
        inputTag.setAttribute("name", nameAttribute);

        liNode.appendChild(inputTag);
        console.log(liNode.appendChild(inputTag));
        var targetElement = document.getElementById(targetElementId);
        targetElement.appendChild(liNode); 
}

