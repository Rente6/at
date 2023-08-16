import Alert from 'react-bootstrap/Alert';

function Rodape() {
  return (
    <>
      {[
        
        
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
        Bem vindo {variant} ao BabyFun!
          Encontre bos melhores produtos para seu neném.
        </Alert>
      ))}
    </>
  );
}

export default Rodape;