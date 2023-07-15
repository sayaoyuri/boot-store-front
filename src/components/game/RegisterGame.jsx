import { useState } from "react";
import { Form, Input } from "../../assets/styles/GlobalStyle";
import { server } from "../../utils/core";

export default function RegisterGame () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [platform, setPlatform] = useState('');

  const register = (ev) => {
    ev.preventDefault();

    const body = { name, description, category, price, image, platform };

    server.post('/register-game', body)
      .then(res => {
        alert("Cadastro realizado com sucesso!");
        setName('');
        setDescription('');
        setCategory('');
        setPrice('');
        setImage('');
        setPlatform('');
      })
      .catch(err => alert(err.response.message));
  };

  return (
    <Form onSubmit={register}>
      <Input 
        type="text" 
        placeholder="Nome do jogo" 
        minLength={4} 
        maxLength={40} 
        required 
        onChange={ev => setName(ev.target.value)}
        value={name}
      />
      <Input 
        type="text" 
        placeholder="Descição" 
        minLength={4} 
        maxLength={200} 
        required 
        onChange={ev => setDescription(ev.target.value)}
        value={description}
      />
      <Input 
        type="text" 
        placeholder="Categoria" 
        minLength={4} 
        maxLength={15} 
        required 
        onChange={ev => setCategory(ev.target.value)}
        value={category}
      />
      <Input 
        type="number" 
        placeholder="Preço"
        required
        onChange={ev => setPrice(ev.target.value)}
        value={price}
      />
      <Input 
        type="text" 
        placeholder="Imagem" 
        required
        onChange={ev => setImage(ev.target.value)}
        value={image}
      />
      <Input 
        type="text" 
        placeholder="Plataforma" 
        minLength={4} 
        maxLength={15} 
        required
        onChange={ev => setPlatform(ev.target.value)}
        value={platform}
      />
      <Input type="submit" value="Salvar" />
    </Form>
  );
};