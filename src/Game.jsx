import React, {useState} from "react";
import Board from "./Board";
import './index.css';

const Game = () => {
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null)
        }
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const handleClick = (i) => {
        const historys = history.slice(0, stepNumber + 1);
        const current = historys[historys.length - 1];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return;
        }
        
        squares[i] = xIsNext ? `X` : `O`;
        setHistory(history.concat([{squares: squares,}]));
        setXIsNext(!xIsNext);
        setStepNumber(historys.length);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_, index) => {
        const desc = index ?
            `Go to move # ${index}` : `Go to game start`;
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
            </li>
        )
    });

    let status;
    if (winner === `X`){
        status = `Winner: X`;
    }
    else if(winner === `O`){
        status = `Winner: O`;
    }
    else{
        status = `Next player: ${xIsNext ? `X` : `O`}`;
    }


    return (
    <div className="game">
        <div className="game-board">
            <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
        </div>
        <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
    </div>
    );
    
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;