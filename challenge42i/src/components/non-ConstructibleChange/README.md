# Non-Constructible Change

Esta función encuentra y devuelve el cambio mínimo que no se puede crear con el conjunto de monedas dado. Ordena las monedas, luego itera sobre ellas acumulando el valor en currentMinChange hasta que encuentra una moneda que hace que no sea posible crear la siguiente cantidad.

Workflow:

1. Función minChange: Esta función toma un array coins como entrada, que representa los valores de monedas disponibles.

2. Ordenamiento del array coins: Se ordena el array coins de manera ascendente utilizando el método sort. Esto es crucial para el funcionamiento correcto del algoritmo, ya que nos permite tratar con las monedas de menor valor primero.

3. Inicialización de currentMinChange: Se inicializa una variable currentMinChange en 0. Esta variable llevará un registro del cambio mínimo que no se puede crear con las monedas dadas.

4. Bucle a través de las monedas: Se itera sobre cada moneda en el array coins mediante un bucle for...of.

5. Verificación del valor de la moneda: Para cada moneda, se verifica si su valor es mayor que currentMinChange + 1. Si es así, significa que no podemos crear la cantidad exacta currentMinChange + 1 con las monedas actuales, y se devuelve currentMinChange + 1 como el cambio mínimo que no se puede crear.

6. Actualización de currentMinChange: Si la moneda actual es menor o igual a currentMinChange + 1, se suma su valor a currentMinChange. Esto significa que ahora podemos crear todas las cantidades hasta currentMinChange + coin, ya que hemos considerado la moneda actual.

7. Retorno del cambio mínimo al final del bucle: Si el bucle se completa sin devolver nada, significa que todas las cantidades hasta currentMinChange se pueden crear con las monedas dadas. En este caso, la función retorna currentMinChange + 1 como el cambio mínimo que no se puede crear.
