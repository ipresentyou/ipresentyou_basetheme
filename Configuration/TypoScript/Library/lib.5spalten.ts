lib.5spalten = COA
lib.5spalten {
    50 = FILES
    50 {
        references {
            table = pages
            uid.data = tsfe:id
            fieldName = media
        }
        begin = 0
        maxItems = 1
        minItems = 1

        renderObj = TEXT
        renderObj {
            data = file:current:publicUrl
            wrap = |
        }
        stdWrap.wrap = <header id="header" style="background-image: url('/|')!important;"></header>
    }
    60 = COA
    60 {
        10 = COA
        10 {
            10 = CONTENT
            10 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 1
            }
            wrap = <div id="content-1" class="col_12">|</div>
        }
        20 = COA
        20 {
            tt_content.image.20.maxW.cObject = CASE
            tt_content.image.20.maxW.cObject {
            key.field = colPos
            ## Normal
                0 = TEXT
                0.value = 440c
            ## Left
                1 = TEXT
                1.value = 340
            ## Right
                2 = TEXT
                2.value = 190
            ## Border
                3 = TEXT
                3.value = 220
            }
            20 = CONTENT
            20 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 2
            }
            wrap = <div id="content-2" class="col_3">|</div>
        }
        40 = COA
        40 {
            30 = CONTENT
            30 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 3
            }
            wrap = <div id="content-3" class="col_3">|</div>
        }
        50 = COA
        50 {
            30 = CONTENT
            30 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 4
            }
            wrap = <div id="content-4" class="col_3">|</div>
        }
        60 = COA
        60 {
            30 = CONTENT
            30 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 5
            }
            wrap = <div id="content-5" class="col_3">|</div>
        }
        70 = COA
        70 {
            30 = CONTENT
            30 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 6
            }
            wrap = <div id="content-6" class="col_12">|</div>
        }
        wrap = <div class="ipresentyoucontent grid flex">|</div>
    }
}
