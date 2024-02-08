export const usersColumnsDefinition = [
  {
    title: 'NOMBRE',
    field: 'name',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'USUARIO',
    field: 'username',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'CORREO ELECTRONICO',
    field: 'email',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  /*{
    title: 'TELEFONO',
    field: 'phone',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'EMPRESA',
    field: 'bussines',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },
  {
    title: 'ROL',
    field: 'rol',
    align: 'center',
    width: 150,
    cellRenderer: (data) => data ?  `<div class="d-flex w-100 align-items-center justify-content-center" '>${data}</div>` : '-'
  },*/
]
