Para este proyecto se uso React con la librería
de Uikit.

En el formulario, se usa Formik para enviar la 
información y Yup para la parte de la 
validación.

Mi idea es que haya una doble validación, tanto
en el front como en el back (con el Schema)

Lo único que sigo pensando como validar, es la 
parte de incluir una validación específica para
que el teléfono de contacto sea de Chile. 

Aún no he creado el back, ya que justo pense
la mejor forma de abordarlo, utilizando lo que 
ya se de node y express, pero quisiera intentar
con Firebase, que apenas estoy aprendiendo.

Voy a probar utilizarlo para la prueba técnica,
solo requeriría de uno o dos días más para 
aprenderlo.

De momento estoy simulando el POST con un Json
por medio de una alerta para que se vea cómo
se enviaran los datos del formulario a la base 
de datos una vez teniendo todo funcionando.

Cosas a mejorar: 

Se puede refactorizar el código y descomponerlo
aún en más componentes pequeños y en el caso de
la sección de elige una carrera, puede hacerse
de forma más ordenada con props.
 
solo cambiar la imagen y/o título, 
crear un componente dummy y usar
props para agregar la información completa.
 
Estoy teniendo problemas con el deployment....
