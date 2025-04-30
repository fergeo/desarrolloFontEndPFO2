# Desarrollo de la Practica Formativa 2. Practica para el uso de JavaScript.

Link Github Pages: https://fergeo.github.io/desarrolloFontEndPFO2

Checklist - Práctica Formativa Obligatoria 2

# 1. Validación de Formulario:
- [X] Validar los campos obligatorios del formulario de contacto (Nombre, Apellido, Email, Teléfono) antes de enviarlo.
- [X] Mostrar mensajes de error si algún campo está incompleto.
Las validaciones se realizaron en cada campo ademas de las que ya de por si realiza html.
Para lo que es nombre y apellido se verifica que no se ingresen numeros.
El mail que tenga el formato correcto.
Y en el telefono que solo sean numeros.

# 2. Modo Oscuro/Claro:
- [X] Implementar un botón o switch que permita alternar entre los modos oscuro y claro de la página.
- [X] Recordar la preferencia del usuario utilizando LocalStorage.
Esto se implementa cambiando color de fondo y que el color de letra se pueda ver segun el fondo, aplicando estilo desde JavaScript.

# 3. Pop-up de Confirmación de Envío:
- [X] Mostrar un pop-up que indique que el formulario se envió correctamente.
Se realizo la ventana en una porción del codigo html y se lo invoca segun sea necesario cuando los campos del formulario estan correctamente cargados.

# 4. Ocultar y/o Mostrar Contenido:
- [X] Crear un botón que permita ocultar o mostrar contenido en cualquier sección, como en la presentación personal o las tarjetas.
Se implemento agregando una imagen que hace referencia si va a ocultar o mostrar la seccion, en caso de ocultar solo queda el titulo.

# 6. Galería de Imágenes:
- [X] Implementar una galería dinámica con imágenes que se puedan navegar (por ejemplo, utilizando flechas para avanzar o retroceder).
Se navega las peliculas de peliculas favoritas, a medida que se avanza o se retrocecede con los botones de anterior o siguiente segun correspoonda
tabiem incrementa o decrementa el número de pagina segun corresponda.
Para que se muestren diferentes peliculas se utilizo la API de TMDB que es sobre peliculas, pero tiene un limite de peliculas.

# 7. Creación de Contenido Dinámico:
- [X] Generar dinámicamente las tarjetas, el listado de habilidades o las películas favoritas utilizando datos de un array en JavaScript.
Esto se va creando desde JavaScrpt cada parte correspondiente a las tarjetas.

# 8. Filtros en el Contenido:
- [X] Crear un sistema de filtros (por ejemplo, en la galería de imágenes o las tarjetas) para mostrar contenido específico según ciertas categorías.
El filtrado de hace de forma dinamica a menida que se ingresa un texto en el imput, busca las peliculas que contectan el texto ingresado.
El filtrado solo muestra hasta tres resultados, ya que no se realizo que se pueda avanzar los resultados, y si luego del filtrado se le da a siguiente
vuelve a mostrar todo ootra vez.

# 9. Temporizador o Reloj:
- [X] Incluir un temporizador que indique el tiempo restante para la entrega del trabajo práctico.
Se agrego debajo del titulo un temporizador que cuenta en forma regresiva el tiempo que queda para la entrega.

# 10. Contador de Visitas:
- [X] Implementar un contador de visitas a la página utilizando JavaScript y LocalStorage.
Cuenta las visitas que tiene la pagina.

# 11. Animaciones Dinámicas:
- [X] Usar JavaScript para agregar animaciones a elementos específicos, como las tarjetas o los botones.
Se agrego una animación de parpadeo al titulo principal.
Y tambien se le agrego a la sección de peluclas favoritas un zoom-in.


# Modificaciones con el proyecto anterior.
- Se dividio en diferentes archivos los estilos que corresponde a cada sección, para los archivos de estilo bi seaab tab estebsis.
- Se modifico en la barra de navegacion que tenga un hover y focus, y que cada uno de los items de la barra de navegación sea un boton.
- Se cambio los iconos de redes sociales por imagenes para poder personalizarlas con mayor facilidad.

Versión anterior:
![Screenshot 2025-04-30 at 15-36-00 Portfolio Personal](https://github.com/user-attachments/assets/fd057080-4763-40be-be60-ffca0989af9d)

