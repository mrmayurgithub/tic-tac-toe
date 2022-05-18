import React, { ReactElement, useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import Toast from "react-native-simple-toast";
import { boxProps, Props, cardProps } from "../../global/types";
import styles from "../../global/styles";
import Card from "../../components/turnCard";
import Box from "../../components/box";
import { players, winningWays } from "../constants";
import Header from "../../components/header";

function GameScreen({}: Props): ReactElement {
  // [turn] -> who's turn is this?
  const [turn, setTurn] = useState(players[0].id);
  // [gameOver] -> is game over yet?
  const [isGameOver, setgameOver] = useState(false);
  const [boxes, setboxes] = useState<Array<boxProps>>([
    // [value] null means, that no player has selected that box
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null },
  ]);

  const nextMove = () => {
    setTurn(turn === 1 ? 2 : 1);
  };

  // Show Alert box whenever someone wins the game.
  const showGameOverAlert = (desc: string) => {
    Alert.alert(
      "Game Over",
      desc,
      [
        {
          text: "Ok",
          onPress: () => resetGame(),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  // Called when a user taps on one of the boxes
  const boxClicked = (id: number) => {
    if (isGameOver) {
      showGameOverAlert("");
      return;
    }

    // [isValidMove] stores true if the user has tapped on a null valued box
    let isValidMove = false;
    const temp = boxes.map((box) => {
      if (box.id === id) {
        if (box.value) {
          Toast.show("This box is already chosen!");
        } else {
          box.value = turn;
          isValidMove = true;
        }
      }
      return box;
    });
    // Update the state of the boxes, whenever there's a valid move
    setboxes(temp);
    if (isValidMove) nextMove();
  };

  // This func checks whether there's any winner till now by checking if there's a valid move to win.
  const contains = (set: Array<any>, subset: Array<any>) => {
    let newSet = new Set([...set, ...subset]);
    return newSet.size == set.length;
  };

  // Resetting all the box's value to null, and so, resetting the game.
  const resetGame = () => {
    Toast.show("Resetting the Game");
    setTurn(players[0].id);
    setgameOver(false);
    let newBoxes = [...boxes];
    newBoxes.forEach((ele) => (ele.value = null));
    setboxes(newBoxes);
    // Toast.show("Done");
  };

  const isGameDraw = () => {
    //checking if game is over and no one won
    if (!isGameOver) {
      let draw = boxes.every((sq) => sq.value);
      if (draw) {
        setgameOver(true);
        showGameOverAlert("No one Won.");
      }
    }
  };

  const showWinAlert = (isThereAnyWinner: Boolean) => {
    if (isThereAnyWinner) {
      setgameOver(true);
      showGameOverAlert(`Player ${turn === 1 ? 2 : 1} Won!`);
    }
  };

  // This [useEffect] is kind of a listener
  // This will be called whenever there's a change in boxes list.
  useEffect(() => {
    const checkGame = () => {
      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const nBoxesvalue = boxes.filter((sq) => sq.value === player.id);
        if (nBoxesvalue.length < 3) continue;
        let isThereAnyWinner = false;
        winningWays.forEach((way) => {
          let candidateWay = nBoxesvalue.map((sel) => sel.id);
          if (contains(candidateWay, way)) {
            isThereAnyWinner = true;
          }
        });
        showWinAlert(isThereAnyWinner);
      }
      isGameDraw();
    };
    checkGame();
  }, [boxes]);

  // Main Game Screen View
  return (
    <View style={mainStyle.fullScreen}>
      <Header title="Tic Tac Toe" />
      <View style={styles.board}>
        <Card title={`Player ${turn}'s turn`} />
        <View style={styles.board}>
          {boxes.map((ele) => {
            return (
              <React.Fragment key={ele.id}>
                <Box onClick={boxClicked} {...ele}></Box>
              </React.Fragment>
            );
          })}
        </View>
        <View style={mainStyle.bottom}>
          <View style={styles.newGameButton}>
            <Text style={styles.newGameText} onPress={resetGame}>
              New Game
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const mainStyle = StyleSheet.create({
  fullScreen: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  bottom: {
    flexDirection: "column",
  },
});

export default GameScreen;
