import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#6C21DF',
    width: '100%',
    height: '100%'  
  },
  
  logo: {
    position: 'absolute',
    width: 156,
    height: 136,
    left: 102,
    top: 100
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },

  iconInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    height: 48,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 30
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 20,
  },

  icon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  label: {
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10
  },

  loginButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00DA9F',
    borderWidth: 0.5,
    borderColor: '#00DA9F',
    height: 48,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20
  },

  disabledButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#75A090',
    borderWidth: 0.5,
    borderColor: '#75A090',
    height: 48,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20
  },

  loginText: {
    flex:1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  disabledLoginText: {
    flex:1,
    textAlign: 'center',
    color: '#D0D8D5',
    fontSize: 20,
    fontWeight: 'bold'
  }

});


