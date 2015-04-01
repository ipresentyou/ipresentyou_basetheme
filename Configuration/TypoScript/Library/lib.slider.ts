lib.slider = FILES
lib.slider {
  references {
    table = pages
    uid.data = tsfe:id
    fieldName = media
  }
  
  #begin = 0
  #maxItems = 2
  #minItems = 3
  
  renderObj = IMAGE
  renderObj {
    file.import.data = file:current:publicUrl
    file.width = 300c
    file.height = 180c
    titleText.data = file:current:title
    wrap = <div class="col-xs-4 img">|</div>
  }
 stdWrap.wrap = <div class="container-fluid"><div class="row">|</div></div>
}


