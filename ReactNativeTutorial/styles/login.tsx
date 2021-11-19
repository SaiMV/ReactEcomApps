import { StyleSheet } from "react-native";
const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height:150
  },
  loginText: {
    fontSize: 16,
    color: "#fed",
  },
  box: {
    backgroundColor: "#353637",
    color: "#fff",
    fontSize: 16,
    width: 250,
    margin: 8,
    padding: 8,
    borderRadius: 5,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  loginLabel: {
    fontSize: 34,
  },
  loginBtn: {
    width: 250,
    borderRadius: 5,
    height: 50,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#003f5c",
  },
  inlineButtonContainer:{
    flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        width: 250,
  },
  inlineButton: {
    height: 30,
    width: 100,
    marginBottom: 5,
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#f2f1ed",
    flexDirection:'column'
  },
  singupButton:{
    width: 100,
  },
  forgotButton:{
    width: 140,
    marginLeft:10,
    paddingLeft:10,
    paddingRight:10
  },
  inlineButtonText: {
    color: "green",
  }
});
export default loginStyle;
