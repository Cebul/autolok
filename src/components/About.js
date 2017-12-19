import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-3">O Nas</h3>
        <p className="lead">Autolok to marka specjalizująca sie w profesjonalnym monitoringu GPS , nasze działania poparte są latami doświadczeń w branży oraz potrzebami klientów które zbieraliśmy przez ostanie lata. Urządzenia które używamy do monitoringu produkowane są w Polsce i posiadają wszelkie homologacje dzięki którym zawsze możesz być  pewny, że urządzenia nie zrobią nic złego z pojazdami w których są montowane.</p>
        <hr className="my-2" />
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Example
