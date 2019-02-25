var React = require('react');


const GameListEntry = ({ game, onClick }) => (
  <div className="game-list-entry">
    <div className="game-body">
        <div className="game-list-detail" key={game.homeTeam} onClick={() => { onClick(game) }}>
      <table is='table'>
      <tbody>
        <tr id="row">
          <td id='cell0'>
            <img src={game.homeTeam} />
          </td>
          <td id='cell5'> </td>
          <td id='cell1'>
                <h1>VS</h1>
          </td>
              <td id='cell6'> </td>
          <td id='cell2'>
              <img src={game.awayTeam} />
          </td> 
              <td id='cell7'> </td>
              <td id='cell3'>
                <h2> on {game.date}</h2>
              </td>       
        </tr>
      </tbody>
      </table>
        </div>
    </div>
  </div>
);

export default GameListEntry;
