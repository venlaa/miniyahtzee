import { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native'
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT} from '../constants/Game';
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import style from '../style/style';

let board = [];

export default Gameboard = ({route}) => {

  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
  const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
  const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));
  const [totalPoints, setTotalPoints] = useState(0); 

  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, []);

  const startNewGame = () => {
    setNbrOfThrowsLeft(NBR_OF_THROWS);
    setStatus('');
    setGameEndStatus(false);
    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    setDiceSpots(new Array(NBR_OF_DICES).fill(0));
    setSelectedDicePoints(new Array(MAX_SPOT).fill(false));
    setDicePointsTotal(new Array(MAX_SPOT).fill(0));
    setTotalPoints(0);
    board = [];
  };

  useEffect(() => {
    if (nbrOfThrowsLeft < 0) {
      setNbrOfThrowsLeft(NBR_OF_THROWS - 1);
    }
  }, [nbrOfThrowsLeft]);
 
  useEffect(() => {
    const total = dicePointsTotal.reduce((sum, points) => sum + points, 0);

  setTotalPoints(total);
    if (selectedDicePoints.every((point) => point)) {
      setStatus(`Game Over! You scored ${total} points!`);
      setGameEndStatus(true); 
    }
  }, [dicePointsTotal, selectedDicePoints]);

  const row = [];
  for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    row.push(
      <Col key={"dice" + dice} style={style.flex}>
        <Pressable 
          onPress={() => selectDice(dice)}>
          <MaterialCommunityIcons
            name={board[dice]}
            size={50} 
            color={getDiceColor(dice)}>
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Col key={"pointsRow" + spot} style={style.flex}>
        <Text>{getSpotTotal(spot)}</Text>
      </Col>
    );
  }

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
      <Col key={"buttonsRow" + diceButton} style={style.flex}>
        <Pressable 
          onPress={() => selectDicePoints(diceButton)}>
          <MaterialCommunityIcons 
            name={"numeric-" + (diceButton + 1) + "-circle"}
            size={35} 
            color={getDicePointsColor(diceButton)}>
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const selectDice = (i) => {
    let dices = [...selectedDices];
    dices[i] = !selectedDices[i];
    setSelectedDices(dices);
  };

  function getDiceColor(i) {
    return selectedDices[i] ? "#2D4332" : "#8AA38A";
  }

  function getDicePointsColor(i) {
    return selectedDicePoints[i] ? "#2D4332" : "#8AA38A";
  }

  const selectDicePoints = (i) => {
    if (nbrOfThrowsLeft === 0) {
      let selectedPoints = [...selectedDicePoints];
      let points = [...dicePointsTotal];
      if (!selectedPoints[i]) {
        selectedPoints[i] = true;
        let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1 : total), 0);
        points[i] = nbrOfDices * (i + 1);
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        setNbrOfThrowsLeft(NBR_OF_THROWS);
      } else {
        setStatus('You already selected points for ' + (i + 1));
      }
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      setDiceSpots(new Array(NBR_OF_DICES).fill(0));
    } else {
      setStatus("Throw " + NBR_OF_THROWS + " times before setting points.");
    }
  };

  const throwDices = () => {
    if (gameEndStatus) return;

    
    if (nbrOfThrowsLeft === 0) {
        setStatus("Select your points before the next throw.");
        return;
    }

    if (nbrOfThrowsLeft === NBR_OF_THROWS) {
        setStatus(""); 
        setSelectedDices(new Array(NBR_OF_DICES).fill(false)); 
    }
    let spots = [...diceSpots];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
        spots[i] = randomNumber;
        board[i] = 'dice-' + randomNumber;
      }
    }
    setDiceSpots(spots);
    setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
  };
  
  function getSpotTotal(i) {
    return dicePointsTotal[i];
  }

  useEffect(() => {
    const total = dicePointsTotal.reduce((sum, points) => sum + points, 0);
    setTotalPoints(total);
  }, [dicePointsTotal]);

  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        {nbrOfThrowsLeft === NBR_OF_THROWS ? ( 
          <MaterialCommunityIcons name="dice-multiple" size={50} color="#8AA38A" />
        ) : (
          <Row style={style.diceRow}>{row}</Row> 
        )}
      </Container>
        <Text style={style.playText}>Throws left: {nbrOfThrowsLeft}</Text>
        <Text style={style.playText}>{status}</Text>
        <Pressable style={style.button} onPress={() => throwDices()}>
          <Text style={style.buttonText}>THROW DICES</Text>
        </Pressable>
        <Pressable style={style.newGameButton} onPress={startNewGame}>
            <Text style={style.newGameButtonText}>NEW GAME</Text>
          </Pressable>
        <Text style={style.totalPointsText}>Total Points: {totalPoints}</Text>
        <Container>
          <Row style={style.pointsRow}>{pointsRow}</Row>
        </Container>
        <Container>
          <Row>{pointsToSelectRow}</Row>
        </Container>
        <Text style={style.player}>Player: {playerName}</Text>
      </View>
      <Footer />
    </>
  );
}