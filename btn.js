$('#btn_guardar').click(function(){
    Swal.fire(
    'Exito!',
    'Se guardo correctamente',
    'success'
    )
});
$('#btn_actualizar').click(function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se actualizo el registro correctamente',
        showConfirmButton: false,
        timer: 1500
      })
});
$('#btn_eliminar').click(function(){
    Swal.fire({
        title: '¿Esta seguro de eliminar el registro?',
        text: "Verifique antes de continuar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'Se elimino su registro correctamente',
            'success'
          )
        }
      })
});