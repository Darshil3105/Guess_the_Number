import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './contants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber = {userNumber} roundsNumber = {guessRounds} onStartNewGame = {startNewGameHandler} />
  }

  return(
    <>
      <StatusBar barStyle='light-content' backgroundColor = {colors.primary600} />
      <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  }
});

export default App;
