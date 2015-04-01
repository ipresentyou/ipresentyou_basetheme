lib.colmain = COA
lib.colmain {

    10 = COA
    10 {
        10 = CONTENT 
	    10 {
            table = tt_content
            select.orderBy = sorting
            select.where = colPos = 1
	       }
        #wrap = <div id="content" class="grid flex">|</div>
    }
    15 = COA
    15 {
            18 = CONTENT
            18 {
                table = tt_content
                select.orderBy = sorting
                select.where = colPos = 420815
            }
          #  wrap = <div id="head" class="col_12">|</div>
   }
}
