import React, { useContext } from 'react'
import { Card, Table } from 'react-bootstrap';
import { OperationContext } from '../../context/operationsContext';

const Balance = () => {
  const { balance, transactions } = useContext(OperationContext);
  return (
    <Card className='text-center' style={{ width: '40rem', margin:"20px", padding:"0"}}>
      <Card.Header>Transactions history</Card.Header>
      <Card.Body>
        <h3>Transactions history</h3>
        <Table>
          <thead>
            <tr>
              <th>Transactions:</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(arrayData=>{
            return(
            <tr>
              <td>{arrayData}</td>
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