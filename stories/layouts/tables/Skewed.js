
import tablesHTML from '../../components/tables/skewed.html';

import { script } from "../../utils/script.js"
import { datatables } from '../../utils/datatables.js'

export const createTables = () => {
  const tables = tablesHTML;
  script();
  // datatables();
  
  $(function () {    
    
    //tables       
    var table = new DataTable('.table', {
      fixedColumns: {
        left: 2
      },
      responsive: {
        fixedColumns: false
      },
      paging: false,
      info: false,
      searching: false,
      scrollCollapse: true,
      scrollX: true,
      // scrollY: "75vh",
      columnDefs: [
        { targets: 0, type: 'string', orthogonal: 'data-content', orderable: true },
        { targets: '_all', orderable: false } // other columns non orderable
      ],
      order: [[0, 'desc']],
    }); 
    jQuery(window).on('resize', function () {
      var win = jQuery(this); //this = window
      if (win.width() >= 1200) {
        table.fixedColumns().left('1');
      }
      else {
        table.fixedColumns().left('0');                           
      }
    });
    table.on( 'draw', function () {
      console.log( 'Redraw occurred at: '+new Date().getTime() );
    } );
    
    
    $('.table').on('show.bs.dropdown', (event) => {           
      let thisTable = event.target.closest('table');         
      thisTable.classList.add('dropdowns-opened'); 
      $(thisTable).find('tr').addClass('non-dropdown');  
      event.target.closest('tr').classList.remove('non-dropdown');
    });
    
    $('.table').on('hidden.bs.dropdown', (event) => {
      let thisTable = event.target.closest('table');
      thisTable.classList.remove('dropdowns-opened');
      $(thisTable).find('tr').removeClass('non-dropdown');
    });        
  })
  
  return tables;
};