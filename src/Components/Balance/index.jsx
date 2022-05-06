import React, { useContext } from 'react'
import { Card, Table } from 'react-bootstrap';
import { OperationContext } from '../../context/operationsContext';

const Balance = () => {
  const { balance, transactions } = useContext(OperationContext);
  return (
    <Card className='text-center' style={{ maxWidth: '60vw', margin:"20px", padding:"0" }}>
      <Card.Header>Transactions history</Card.Header>
      <Card.Body>
        <h3>Transactions history</h3>
        <Table style={{ maxWidth: '60vw', margin:"20px", padding:"0" }} striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index)=>{
            return(
            <tr key={index}>
              <td>{index}</td>
              <td style={transaction < 0 ? {color:"red"} : {color:"green"} }>{transaction}</td>
            </tr>
            )
            }
            )}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="text-muted">Total balance on your account: {balance}</Card.Footer>
    </Card>
  )
}

export default Balance