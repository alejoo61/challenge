# Two number sum

Esta función encuentra y devuelve un par de números del array de entrada que suman al valor objetivo. Si no se encuentra ningún par, devuelve un array vacío.

Workflow:

1. Esta función toma dos parámetros, numbers (un array de números) y sumNumber (la suma objetivo que se está buscando).

2. Creación de un conjunto (Set): Se inicializa un conjunto numSet que se utilizará para almacenar los números a medida que se recorren.

3. Recorrido del array numbers: La función realiza un bucle for para recorrer cada número en el array numbers.

4. Cálculo del complemento: Para cada número, se calcula su complemento restando el número actual (num) de la suma objetivo (sumNumber). Esto representa el otro número necesario para que la suma sea igual a sumNumber.

5. Verificación en el conjunto (Set): Se verifica si el complemento calculado ya está presente en el conjunto numSet. Si es así, se ha encontrado un par de números cuya suma es igual a sumNumber, y se devuelve ese par como un array [complement, num].

6. Almacenamiento en el conjunto: Si el complemento no está presente en el conjunto, se agrega el número actual al conjunto numSet.

7. Retorno de un array vacío si no se encuentra ningún par: Si el bucle completo termina sin encontrar ningún par de números que sumen sumNumber, la función retorna un array vacío [] para indicar que no se encontró ningún par.
