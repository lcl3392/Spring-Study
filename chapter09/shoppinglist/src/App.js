import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddItem from './AddItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function App() {
  const [items, setItems] = useState([]);   // 상태 변수를 초기화, items 상태는 쇼핑 목록을 저장

  const addItem = (item) => {     //AddItem에서 새 항목을 추가할 때 실행되어 items 상태를 업데이트
    setItems([item, ...items]);
  }

  const deleteItem = (index) => {   //항목을 삭제할 때 실행되어 items 상태에서 해당 항목을 제거
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Shopping List
        </Typography>
      </Toolbar>
    </AppBar>
    <Stack alignItems="center">
        <AddItem addItem={addItem} />
        <List>
        {
          items.map((item, index) => 
            <ListItem key={index} divider>
              <ListItemText primary={item.product} secondary={item.amount}/>
              <Button onClick={() => deleteItem(index)}>Delete</Button>
            </ListItem>
          )
        }
        </List>
    </Stack>    
  </Container>
  );
}

export default App;
