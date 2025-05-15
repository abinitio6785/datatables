/**
 * Created by beraaksoy on 2/6/17.
 * https://github.com/baksoy/datatables
 */
$(document).ready(function () {


    if( $('#maintable').length )
    {
        console.log($('#filter_v').val());
        //console.log($('#filter_v2').val());
       /*  DataTable.defaults.layout = {
            topStart: null,
            topEnd: null,
            bottomStart: null,
            bottomEnd: null
        };
 */
        var table = $('#maintable').DataTable({
            scrollX: true,
            ordering: false,
            processing: true,
            serverSide: true,
            searching: false,
            responsive: false,
            ajax: {
                url: 's_proc.php',
                type: 'POST',
                data: function(d) {
                    d.search.value = $('#filter_v').val()
                    //d.search2.value = $('#filter_v2').val()
                    d.searchtype = $('#filter_type').val()
                    d.myKey="test"

                }
            },
            columDefs: [{
                targets: '-1',
                visible: false
            }],
            top: ['pageLength', 'info', 'paging'],
            bottom: ['info', 'paging'],
            layout: {
                topStart: ['pageLength', 'info'],
                topEnd:  ['paging']

            }
        });

    }

    if( $('#searchleads').length )
        {
            console.log($('#filter_v').val());
           /*  DataTable.defaults.layout = {
                topStart: null,
                topEnd: null,
                bottomStart: null,
                bottomEnd: null
            };
     */
            iphone = '';
            iemail = '';
            iphone = $('#iphone').val();
            iemail = $('#iemail').val();
            igender = $('#igender').val();
            iemp    = $('#iemp').val();
            isale   = $('#isale').val();
            /* if ($('#iphone').is(':checked'))
            {
                iphone = $('#iphone').val();
            }
            if ($('#iemail').is(':checked'))
            {
                    iemail = $('#iemail').val();
            } */
            var table = $('#searchleads').DataTable({
                scrollX: true,
                ordering: false,
                processing: true,
                serverSide: true,
                searching: false,
                responsive: false,
                ajax: {
                    url: 's_proc.php',
                    type: 'POST',
                    data: function(d) {
                        d.search.value = "istate="+$('#istate').val()+"&icity="+$('#icity').val()+"&iind="+$('#iind').val()+"&irevenue="+$('#irevenue').val()+"&iemail="+iemail+"&iphone="+iphone+"&mrevenue="+$('#mrevenue').val()+"&igender="+igender+"&iemp="+iemp+"&isale="+isale
                        d.searchtype = $('#filter_type').val()
                        d.myKey="test"

                    }
                },
                columDefs: [{
                    targets: '-1',
                    visible: false
                }],
                top: ['pageLength', 'info', 'paging'],
                bottom: ['info', 'paging'],
                layout: {
                    topStart: ['pageLength', 'info'],
                    topEnd:  ['paging']

                }
            });

        }

        if( $('#emailtable').length )
            {
                console.log($('#filter_v').val());
               /*  DataTable.defaults.layout = {
                    topStart: null,
                    topEnd: null,
                    bottomStart: null,
                    bottomEnd: null
                };
         */
                var table = $('#emailtable').DataTable({
                    scrollX: true,
                    ordering: false,
                    processing: true,
                    serverSide: true,
                    searching: true,
                    responsive: false,
                    ajax: {
                        url: 's_proc_email.php',
                        type: 'POST',
                       /*  data: function(d) {
                            d.search.value = $('#filter_v').val()
                            d.searchtype = $('#filter_type').val()
                            d.myKey="test"

                        } */
                    },
                    columDefs: [{
                        targets: '-1',
                        visible: false
                    }],
                    /* top: ['pageLength', 'info', 'paging'],
                    bottom: ['info', 'paging'],
                    layout: {
                        topStart: ['pageLength', 'info'],
                        topEnd:  ['paging']

                    } */
                });

            }
    if( $('#maintable2').length )
        {
            var table2 = $('#maintable2').DataTable({
                mark: true,
                dom: 'Bfrtip',
                ajax: './upload/data.json',
                lengthMenu: [
                    [10, 25, 50, 100, -1],
                    ['10 rows', '25 rows', '50 rows', '100 rows', 'Show All']
                ],
                processing: true,
                order: [[0, 'desc']],
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

})