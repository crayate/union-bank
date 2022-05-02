import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { OperationContext } from '../../context/operationsContext';

const Withdraw = () => {
    const {balance, setBalance, transactions, setTransactions} = useContext(OperationContext);
    const [withdraw, setWithdraw] = useState(0);
  
    const handleChange = (e) => {
      e.target.value > balance ? alert("non-sufficient funds") : setWithdraw(e.target.value);
    }
  
    const handleSubmit = (event) => {
      setBalance(balance - withdraw);
      setTransactions([...transactions, -withdraw]);
      console.log(transactions);
      alert('Your withdraw was processed');
      event.preventDefault();
    }
      
    return (
      <Card className='text-center' style={{ width: '40rem', margin:"20px", padding:"0"}}>
        <Card.Header>Make a withdraw</Card.Header>
        <Card.Body>
          <h3>Account balance:{balance}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group md="8">
              <Form.Label>withdraw:</Form.Label>
              <Form.Control type="number" placeholder="Enter the withdraw amount" required onChange={handleChange} />
            </Form.Group>
            <Button style={{ marginTop:"10px" }} type="submit">withdraw</Button>
          </Form>
        </Card.Body>
      </Card>
    )
}

export default Withdraw;