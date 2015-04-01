lib.headerslider = COA
lib.headerslider {
10 = HMENU
10 {
    entryLevel = 0
    wrap = <ul id="nav">|</ul>

1 = TMENU
1.NO {
     wrapItemAndSub = <li>|</li>
     doNotShowLink = 1
     before.cObject = TEXT
     before.cObject.field = nav_title//title
     before.cObject.typolink.parameter.data = TSFE:id
     before.cObject.typolink.additionalParams.field = uid
     before.cObject.typolink.additionalParams.wrap = &tx_ipresentyou_ipresentyouplugin[ipd]=|
     before.cObject.typolink.ATagParams.field = uid
     before.cObject.typolink.ATagParams.wrap =id="nav-|"
} 

}
}
[loginUser = *]
lib.navigation = COA
lib.navigation {
    10 = HMENU
    10 {
        entryLevel = 0
        wrap = <ul id="nav">|</ul>
    
    1 = TMENU
    1.NO {
         wrapItemAndSub = <li>|</li>
         doNotShowLink = 1
         before.cObject = TEXT
         before.cObject.field = nav_title//title
         before.cObject.typolink.parameter.data = TSFE:id
         before.cObject.typolink.additionalParams.field = uid
         before.cObject.typolink.additionalParams.wrap = &tx_test_editorplugin[ipd]=|
         before.cObject.typolink.ATagParams.field = uid
         before.cObject.typolink.ATagParams.wrap =id="nav-|"
    } 
    
    }
}
[end]
