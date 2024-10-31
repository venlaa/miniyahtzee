import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#D1DBBD',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#D1DBBD',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 16
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#D1DBBD",
    width: 140,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"black",
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Courier New',
    textAlign: 'center'
    
  }, 
  pointsRow: {
    flexDirection: 'row',      
    alignItems: 'center',       
    justifyContent: 'center',    
    marginHorizontal: -20,
    marginLeft: 1
  }, 
  playButton: {
    margin: 30,
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    backgroundColor: "#D1DBBD",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  playText: {
    fontWeight: 'bold',
    fontFamily: 'Courier New'
  },
  rules: {
    color:"black",
    fontFamily: 'Courier New',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  }, 
  instructionsText: {
    textAlign: 'center',  
    padding: 10,          
    lineHeight: 20,    
    color: "black", 
    fontFamily: 'Courier New'      
  },
  totalPointsText: {
    color:"black",
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Courier New',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  diceRow: {
    marginBottom: 20
  },
  okText: {
    color:"black",
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Courier New',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    fontFamily: 'Courier New', 
    fontSize: 18,
    color: '#333', 
    backgroundColor: '#ffffff', 
    padding: 10,
    width: '80%', 
    borderRadius: 8,
    borderColor: '#58725D', 
    borderWidth: 1,
    marginBottom: 15,
    textAlign: 'center'
  },
  newGameButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#D1DBBD",
    width: 140,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20

  },
  newGameButtonText: {
    color: '#fff',
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  },
  player: {
    color: "black",
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    marginTop: 20
  },
  bonusText: {
    color: "black",
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    marginBottom: 20
  }
});