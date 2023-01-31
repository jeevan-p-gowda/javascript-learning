// Reading JSON 
let text = '{"employess":[' +
    '{"firstName":"John","lastName":"Doe"},' +
    '{"firstName":"Anna","lastName":"Smith"},' +
    '{"firstName":"Peter","lastName":"Jones"}]}';

   let obj= JSON.parse(text);
   console.log(obj);

