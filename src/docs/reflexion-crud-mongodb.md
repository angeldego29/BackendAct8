1. ¿Qué operación de Mongoose corresponde a cada letra de CRUD?

C (Create): create() o save().
 R (Read): find() o findById().
 U (Update): findByIdAndUpdate().
 D (Delete): findByIdAndDelete().

2. ¿Por qué se usa PATCH y no un reemplazo completo del documento?

PATCH permite modificar solo los campos necesarios.
 Así se evita reemplazar todo el documento y perder información.

3. ¿Qué problema evita $set?

Evita sobrescribir el documento completo.
 Solo actualiza los campos indicados en la solicitud.

4. ¿Qué efecto tienen new: true y runValidators: true?

new: true devuelve el documento actualizado.
 runValidators: true aplica las validaciones del esquema al actualizar.

5. ¿Por qué un cuerpo vacío debe rechazarse?

Porque no contiene datos para actualizar.
 Aceptar la petición no tendría ningún efecto útil.

6. ¿Qué diferencia existe entre INVALID_ID y TASK_NOT_FOUND?

INVALID_ID indica que el formato del ID es incorrecto.
 TASK_NOT_FOUND indica que el ID es válido, pero la tarea no existe.

7. ¿Qué responsabilidad cumple validateTaskUpdate y cuál cumple TaskModel?

validateTaskUpdate valida los datos recibidos del cliente.
 TaskModel define la estructura y reglas de la colección en MongoDB.

8. ¿Cómo llega un error de updateTask al errorHandler de Express 5?

Express 5 captura automáticamente errores en funciones async.
 Luego los envía al middleware errorHandler.

9. ¿Por qué DELETE responde 204 sin cuerpo?

Porque la eliminación fue exitosa.
 El código 204 indica que no hay contenido para devolver.

10. ¿Qué prueba demuestra que el CRUD es persistente y no solo funcional en memoria?

Crear o modificar una tarea, reiniciar el servidor y verificar que sigue existiendo.
 Eso demuestra que los datos quedaron guardados en la base de datos.