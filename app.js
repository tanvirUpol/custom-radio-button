function addBorder(element) {
    
    // remove the "selected" class from all labels
    var labels = document.querySelectorAll('.custom-radio');
    labels.forEach(function(label) {
        label.classList.remove('selected');
      });
      console.log(labels);
    // add the "selected" class to the label of the clicked radio button
    element.parentNode.classList.add('selected');
  }
  