/**
 * Created by beraaksoy on 2/6/17.
 */
$(document).ready(function () {

    // 1) Basic Table
    // Uncomment the next line and comment everything else for a basic table pagination and search
    // $('#maintable').DataTable();

    // 2) Hide columns 3 and 4
    // Use when you want to show a different view
    // $('#maintable').dataTable({
    //     "columnDefs": [
    //         {
    //             "targets": [2],
    //             "visible": false,
    //             "searchable": false
    //         },
    //         {
    //             "targets": [3],
    //             "visible": false
    //         }
    //     ]
    // });

    // 3) Add the following buttons:
    // - Show 10, 25, 50, 100, All rows
    // - Copy rows to clipboard
    // - Export to Excel
    // - Export to CSV
    // - Printable view
    // - Export to PDF
    // - Set column visibility
    if( $('#maintable').length )    
    {
        var table = $('#maintable').DataTable({
            mark: true,
            dom: 'Bfrtip',
            ajax: './upload/data.json',
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ['10 rows', '25 rows', '50 rows', '100 rows', 'Show All']
            ],
            order: [[0, 'desc']],
            processing: true,
            oLanguage: {sProcessing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading..n.</span> '},
            language: {
                        processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading..n.</span> '},
            
            buttons: [
                'pageLength',
            /*  {
                    extend: 'copyHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                }, */
                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'csvHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
            /*   {
                    extend: 'print',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'pdfHtml5',
                    download: 'open',
                    exportOptions: {
                        columns: ':visible'
                    }
                }, */
                'colvis'
            ],
            columDefs: [{
                targets: -1,
                visible: false
            }]
        });
        //console.log(table)
        //console.log(table.columns())
        // 4) Search on Multiple Columns
        $('#maintable thead th').each(function () {
            var title = $('#maintable thead th').eq($(this).index()).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        table.columns().eq(0).each(function (colIdx) {
            $('input', table.column(colIdx).header()).on('keyup change', function () {
                table
                    .column(colIdx)
                    .search(this.value)
                    .draw();
            });
        });
    }
    if( $('#maintable2').length )    
    {
        var table2 = $('#maintable2').DataTable({
            mark: true,
            dom: 'Bfrtip',
            ajax: './upload/data2.json',
            lengthMenu: [
                [10, 25, 50, 100, -1],
                ['10 rows', '25 rows', '50 rows', '100 rows', 'Show All']
            ],
            processing: true,
            oLanguage: {sProcessing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading..n.</span> '},
            "language": {
                        processing: '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading..n.</span> '},
    
            buttons: [
                'pageLength',
            
                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'csvHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
            
                'colvis'
            ],
            columDefs: [{
                targets: -1,
                visible: false
            }]
        });
        console.log(table2.columns())
        // 4) Search on Multiple Columns
        $('#maintable2 thead th').each(function () {
            var title = $('#maintable2 thead th').eq($(this).index()).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        table2.columns().eq(0).each(function (colIdx) {
            $('input', table2.column(colIdx).header()).on('keyup change', function () {
                table2
                    .column(colIdx)
                    .search(this.value)
                    .draw();
            });
        });

    }

});
