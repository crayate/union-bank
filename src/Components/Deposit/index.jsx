import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { OperationContext } from '../../context/operationsContext';

const Deposit = () => {
  const {balance, setBalance, transactions, setTransactions} = useContext(OperationContext);
  const [deposit, setDeposit] = useState(0);

  const handleChange = (event) => {
    event.target.value < 0 ? alert("deposit amount can't be negative") : setDeposit(event.target.value);
  }

  const handleSubmit = (event) => {
    setBalance(+balance + +deposit);
    setTransactions([  ...transactions, deposit ]);
    console.log(`transactions: ${transactions} /// balance: ${balance}`);
    alert('Your deposit was processed');
    event.preventDefault();
  }
    
  return (
    <Card className='text-center' style={{ maxWidth: '60vw', margin:"20px", padding:"0"}}>
      <Card.Header>Make a Deposit</Card.Header>
      <Card.Body>
        <h3>Account balance:{balance}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group md="8">
            <Form.Label>Deposit:</Form.Label>
            <Form.Control type="number" placeholder="Enter the deposit amount" required onChange={handleChange} />
          </Form.Group>
          <Button style={{ marginTop:"10px" }} type="submit" >Deposit</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Deposit;