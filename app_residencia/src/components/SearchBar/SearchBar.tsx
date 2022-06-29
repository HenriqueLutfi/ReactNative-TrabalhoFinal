import React, {useState}from 'react';
import { SearchBar } from 'react-native-elements';

function ProdutosCard({produto}) {
    
const [search, setSearch] = useState('');

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

  render() {
    

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(te)=>setSearch()}
        value={search}
      />
    );
  }
}