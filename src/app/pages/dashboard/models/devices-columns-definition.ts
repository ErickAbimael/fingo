export const devicesColumnsDefinition = [
  {
    title: 'UUID',
    field: 'locationUuid',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'EMPRESA',
    field: 'nameDistribution',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  /*{
    title: 'USUARIO',
    field: 'user',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },*/
  {
    title: 'VEHICULO',
    field: 'descriptionVehicle',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'MODELO',
    field: 'keyCode',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  }
]
