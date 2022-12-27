
function convArabico() {
  let arabico = (document.getElementById("arabico").value);
  let num = arabico.length;
  let romano = '';
  
  if (isNaN(num)) {
      alert("Digite um número !!!");
      return;
  }

  if (num == 1) {
      romano = um(arabico);        
  } else if(num == 2) {        
      romano = dois(arabico);
  } else if( num == 3) {
      romano = tres(arabico);
  } else if( num == 4) {
      romano = quatro(arabico);
  } else {
      alert("Digite um número !!!");
      return;
  }
  
  document.getElementById("algromano").value = romano;
  
}


function um(arabico) {
  let unidade = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let um ='';
  for (let i = 0; i < 10; i++)  {
      if (i == parseInt(arabico)) {
          um += unidade[i];
          return um;
      }
  }    
}

function dois(arabico) {
  let unidade = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let dezena = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let um = arabico.substring(2,1);
  let dois = arabico.substring(0,1)
  
  for (let i = 0; i < 10; i++)  {
      if (i == parseInt(dois)) {
          dois = dezena[i];          
      }
  }   
  for (let x = 0; x < 10; x++)  {
      if (x == parseInt(um)) {
          um = unidade[x];        
      }
  }
  return(dois + um);   
}

function tres(arabico) {
  let unidade = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let dezena = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let centena = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  
  let um = arabico.substring(3,2);
  let dois = arabico.substring(2,1);
  let tres = arabico.substring(0,1);

  for (let y = 0; y < 10; y++)  {
      if (y == parseInt(tres)) {
          tres = centena[y];        
      }
  }   

  for (let i = 0; i < 10; i++)  {
      if (i == parseInt(dois)) {
          dois = dezena[i];         
      }
  }   
  for (let x = 0; x < 10; x++)  {
      if (x == parseInt(um)) {
          um = unidade[x];        
      }
  }
  return(tres + dois + um);   
}

function quatro(arabico) {
  let unidade = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let dezena = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let centena = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let milhar = ['', 'M', 'MM', 'MMM', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  
  let um = arabico.substring(4,3);
  let dois = arabico.substring(3,2);
  let tres = arabico.substring(2,1);
  let quatro = arabico.substring(0,1);

  for (let z = 0; z < 10; z++)  {
      if (z == parseInt(quatro)) {
          quatro = milhar[z];        
      }
  }   

  for (let y = 0; y < 10; y++)  {
      if (y == parseInt(tres)) {
          tres = centena[y];          
      }
  }   

  for (let i = 0; i < 10; i++)  {
      if (i == parseInt(dois)) {
          dois = dezena[i];         
      }
  }   
  for (let x = 0; x < 10; x++)  {
      if (x == parseInt(um)) {
          um = unidade[x];        
      }
  }
  return(quatro + tres + dois + um);   
}
  
function convRomano() {
  
  let algromanos = document.getElementById("romano").value;
  let romanos = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let arabicos = ['1000', '500', '100', '50', '10', '5', '1'];
  algromanos = algromanos.toUpperCase();
  let entrada = algromanos.split('');
  let tam = entrada.length;
  let ant = 0;
  let post =0;
  let control = '';     
  let soma = 0;
  
  if (algromanos === '') {
      alert("Digite um algarismo romano !!!.  ('I', 'V', 'X', 'L', 'C', 'D', 'M')");
      return;
  }

  
  for (let r = 0; r < tam; r++) {
      if (r < tam) {
          control = entrada[ r + 1];            
      }
      for (let s = 0; s < romanos.length; s++) {
                      
          if (control === romanos[s]) {
              post = parseInt(arabicos[s]);
                                
          }                
      }
      for (let i = 0; i < romanos.length; i++) {

          if (entrada[r] === romanos[i]) {
              ant = parseInt(arabicos[i]);
              
              if (post > ant) {
                  soma-= ant;
                  
              } else {
                  soma+=ant;
              }    
          }           
      }
      if (soma === 0) {
        alert("Digite um algarismo romano !!!.  ('I', 'V', 'X', 'L', 'C', 'D', 'M')");
      return;
      } 
  }
  
  document.getElementById("decimal").value = soma;
  
  
}