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