# Para tener en cuenta y repasar.
## Algunos comandos básicos de GIT:
1. git init --> Inicializa el repo de Git. Debe usarse una vez por proyecto
2. git add 'nombre del archivo' --> Prepara un archivo para ser comitiado
3. git add .  --> Prepara todos los archivos que han sido midificados para ser commitiados
4. git reset . --> cancela o baja del staging area todos los archivos que preparamos para comitiar
5. git commit --> los comiteas y te manda a una consola para que agregues un comentario
6. git commit -m 'comentario del commit' --> los comitea y evita la consola anterior
7. git commit --amend --> Permite cambiar el comentario de algun comit
8. git commit -am 'comentario de commit' --> prepara el archivo y lo comitea directamente
9. git checkout --> Restaura a la ultima version commitiada de un archivo
10. git checkout master --> cambia a la rama master
11. git checkout -b 'nombre de la rama' --> crea una nueva rama de trabajo
12. git branch --> muestra las ramas del proyecto
13. git branch -d 'nombre de la rama' --> borra una rama
14. git log --> te muestra un historial en detalle de los commits realizados
15. git log --oneline --> muestra el historial de commits de una forma más resumida
16. git reset --hard [codigo id del commit] --> Te devuelve a la version que elijas
17. git status --> muestra el estado de los archivos en forma detallada
18. git status -s --> muestra solo el estatus de los archivos
19. git merge 'nombre de la rama' --> fuciona la rama master con esta nueva rama
20. git diff [nombre archivo] --> muestra las diferencias o modificaciones que ha sufrido el archivo

## Algunos comandos básicos de consola:
1. pwd --> muestra la posición actual, donde estas parado
2. ls --> lista el contenido de un directorio
3. ls -l --> lista los archivos y los directorios que pueden haber en un directorio
4. ls -la --> lista todo el contenido e incluye los archivos ocultos
5. cd --> te regresa a la carpeta home
6. cd ~ --> te regresa a la carpeta home
7. cd .. --> retrocede un directorio
8. cd [nombre directorio] --> avanza hasta ese directorio
9. mkdir [nombre directorio] --> Crea un nuevo directorio
10. touch [nombre archivo] --> Crea un archivo. Puede poseer cualquier extensión
11. rm [nombre archivo] --> elimina el archivo de forma permanente
12. rm -rf [nombre directorio] --> Fuerza la eliminacion de un directorio
13. clear --> Limpia los comandos ejecutados en la consola. No elimina ningun proceso, solo la pone en blanco de nuevo
14. cat [nombre archivo] --> muestra el contenido de un archivo que no es muy extenso
15. cat [nombre archivo] | more --> va a mostrar por partes el contenido de un archivo que sea más extenso
16. less [nombre archivo] --> combina a cat y more permitiendo moverse con el teclado
17. man [nombre comando] --> muestra explicacion del comando y algunos ejemplos de uso
18. cp [archivo origen] [archivo destino] --> copia el archivo de origen en el archivo de destino
19. mv [nombre archivo] / [nombre directorio] --> Mueve un archivo a un directorio
20. mv [nombre directorio] [nuevo nombre] --> renombra al directorio
