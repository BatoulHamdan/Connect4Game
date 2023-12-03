import React, {useState} from "react";
import GameCircle from "./GameCircle";
import '../game.css';
import Header from "./Header";
import { Footer } from "./Footer";

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(NO_CIRCLES).fill(NO_PLAYER));
    console.log(gameBoard);

    //initial player is player 1
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const circleClicked = (id) => {
        console.log('Circle clicked: ' + id);

        //copy of array and updating it
        // const board = [...gameBoard];
        // gameBoard[id] = currentPlayer;
        // setGameBoard(gameBoard);

        //better way than above for updating array of states
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === 1 ? PLAYER_2 : PLAYER_1);
        console.log(gameBoard);
    }

    const renderCircle = id => {
        return <GameCircle 
                    key={id} 
                    id={id} 
                    className={`player_${gameBoard[id]}`} 
                    onCircleClicked={circleClicked} 
                />
    }

    const initBoard = () => {
        // setCurrentPlayer(PLAYER_1);
        // setGameBoard(Array(16).fill(NO_PLAYER));

        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    return (
        <>
            <Header />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer />
        </>
    )
}

export default GameBoard;