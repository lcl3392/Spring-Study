import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddItem(props) {
    //useState 훅을 사용 상태 변수를 초기화
  const [open, setOpen] = React.useState(false);    //open 상태는 다이얼로그의 열림/닫힘 상태
  const [item, setItem] = React.useState({          //item 상태는 새 항목을 제품,금액 저장
    product: '', 
    amount:''
  });
  
  const handleOpen = () => {    //Add Item" 버튼을 클릭할 때 실행되어 다이얼로그를 열도록 open 상태
    setOpen(true);
  }
    
  const handleClose = () => {   // 다이얼로그의 닫기 버튼을 클릭하거나 취소할 때 실행되어 다이얼로그를 닫는다.
    setOpen(false);
  }
    
  const handleChange = (e) => {       //TextField에서 입력값이 변경될 때 실행되어 item 상태의 해당 필드를 업데이트
    setItem({...item, [e.target.name]: e.target.value})
  }

  const addItem = () => {      //addItem 함수를 호출하여 새 항목을 추가
    props.addItem(item);
    setItem({product: '', amount: ''});   //item 상태를 초기화하고 다이얼로그를 닫음
    handleClose();
  }    
   
  return(
    <div>
      <Button variant='outlined' onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField value={item.product} margin="dense"
            onChange={handleChange} name="product" label="Product" fullWidth />
          <TextField value={item.amount} margin="dense"
            onChange={handleChange} name="amount" label="Amount" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> 
            Cancel
          </Button>
          <Button onClick={addItem}> 
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItem;