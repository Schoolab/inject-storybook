import folders from "../../components/tables/folders.html";
import views from "../../components/tables/views.html";
import filters from "../../components/tables/filters.html";
import content from "../../components/tables/skewed.html";

import { script } from "../../utils/script.js"
import {datatables} from '../../utils/datatables.js'

export const createTables = () => {

  const applicationSection = document.createElement('div');
  applicationSection.className = 'd-flex flex-column p-24px gap-16px';

  applicationSection.insertAdjacentHTML('beforeend',views);
  applicationSection.insertAdjacentHTML('beforeend',filters);
  applicationSection.insertAdjacentHTML('beforeend',content);

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
  });

  return applicationSection;
};
