lib.content7525 = COA
lib.content7525 {
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
            wrap = <div id="content-1" class="col_8">|</div>
        }
        15 = COA
        15 {
            10 = CONTENT
            10 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 2
            }
            wrap = <div id="content-2" class="col_4">|</div>
        }
        20 = COA
        20 {
            20 = CONTENT
            20 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 3
            }
            wrap = <div id="content-3" class="col_4">|</div>
        }
        40 = COA
        40 {
            30 = CONTENT
            30 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 4
            }
            wrap = <div id="content-4" class="col_8">|</div>
        }
        wrap = <div class="ipresentyoucontent grid flex">|</div>
    }
}
