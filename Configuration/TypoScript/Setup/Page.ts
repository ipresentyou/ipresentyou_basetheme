page = PAGE
page {

# Page template
    10 = FLUIDTEMPLATE
    10 {
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout

        default = TEXT
        default.value = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}main.html

        1 = TEXT
        1.value = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}ipresentyouRoot.html

        2 = TEXT
        2.value = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}3spalten7525.html

        3 = TEXT
        3.value = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}3spalten.html

        4 = TEXT
        4.value = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}5spalten.html

}
partialRootPath = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}Partials/
layoutRootPath = {$plugin.tx_ipresentyou_basetheme.filepaths.templates}Layouts/
variables {
# Insert variables here
}
}

# FavIcon
shortcutIcon = {$plugin.tx_ipresentyou_basetheme.filepaths.images}Icons/ipresentyou_basetheme-logo.ico

# Include CSS Files
includeCSS {
    style1 = {$plugin.tx_ipresentyou_basetheme.filepaths.css}normalize.css
style2 = {$plugin.tx_ipresentyou_basetheme.filepaths.css}style.css
style3 = {$plugin.tx_ipresentyou_basetheme.filepaths.css}grid.css
style.media = all
}

# Include JS Files
includeJS {

}

includeJSFooter {
}

# Meta
meta {
    viewport = width=device-width, initial-scale=1.0
}

}

# Google Analytics
    [globalVar = LIT:1 = {$plugin.tx_ipresentyou_basetheme.settings.analyticsEnable}]
page.footerData.555 = TEXT
page.footerData.555.value (
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '{$plugin.tx_ipresentyou_basetheme.settings.analyticsUA}', '{$plugin.tx_ipresentyou_basetheme.settings.analyticsUrl}');
ga('send', 'pageview');

</script>
)
[global]

# Content Elemente Stylen
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
tt_content.text.20.wrap = <div class="bodytext">|</div>
## CE
# Frames: für Redakteure im BackEnd wählbare Rahmen um Inhaltselememte
tt_content.stdWrap.innerWrap.cObject {
    2 = TEXT
    2.value = |
    2.dataWrap = <div id="c{field:uid}" class="bg">|</div>

    3 = TEXT
    3.value = |
    3.dataWrap = <div id="c{field:uid}" class="invert">|</div>
}