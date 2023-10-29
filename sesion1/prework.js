function solution(arr) {
    const seen = new Set();
  
    for (let num of arr) {
      if (seen.has(num)) {
        return num; // Si encontramos un duplicado, lo devolvemos
      }
      seen.add(num); // Agregamos el número al conjunto de números vistos
    }
  
    return -1; // Si no se encuentra ningún duplicado, devolvemos -1
  }
  
  // Ejemplos de uso
  const a1 = [2, 1, 3, 5, 3, 2];
  console.log(solution(a1)); // Output: 3
  
  const a2 = [2, 2];
  console.log(solution(a2)); // Output: 2
  
  const a3 = [2, 4, 3, 5, 1];
  console.log(solution(a3)); // Output: -1
  

  const a4 = [2, 1, 3, 5, 7, 9];
  console.log(solution(a4)); // Output: -1



  const a5 = [2, 1, 3, 5, 7, 7];
  console.log(solution(a5)); // Output: 7