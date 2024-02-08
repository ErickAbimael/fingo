export const dashboardColumnsDefinition  =[
  /*{
    title: 'ID',
    field: 'identifier',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
    },*/
  {
    title: 'NOMBRE',
    field: 'nameCompany',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ? `<div class="d-flex w-100 align-items-center justify-content-center" '> ${data}</div>` : '-'
  },
  {
    title: 'CALLE',
    field: 'address',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ? `<div class="d-flex w-100 align-items-center justify-content-center" '> ${data}</div>` : '-'
  },
  {
    title: 'TELÉFONO',
    field: 'telephoneNumber',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ? `<div class="d-flex w-100 align-items-center justify-content-center" '> ${data}</div>` : '-'
  },
  {
    title: 'TIPO',
    field: 'typeCompany',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ? `<div class="d-flex w-100 align-items-center justify-content-center" '> ${data}</div>` : '-'
  },
  {
    title: 'CONTACTO',
    field: 'nameContact',
    align: 'center',
    width: 155,
    cellRenderer: (data) => data ? `<div class="d-flex w-100 align-items-center justify-content-center" '> ${data}</div>` : '-'
  }
]
