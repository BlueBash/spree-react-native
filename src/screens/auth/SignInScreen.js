import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'
import { ChevronLeft, Eye } from '../../library/icons'
import { colors } from '../../res/palette'
import { Button, Input } from 'react-native-elements'
import { AuthContext } from '../../library/utils/context'
import { styles } from './styles'

const SignInScreen = ({ navigation }) => {
  const [secureTextEntryToggle, setSecureTextEntryToggle] = React.useState(true)
  const [inputEmailBorder, setInputEmailBorder] = React.useState(false)
  const [inputPasswordBorder, setInputPasswordBorder] = React.useState(false)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  return (
    <View style={globalStyles.container}>
      <ChevronLeft size={24} style={styles.backButton}
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.mainContainer}>
        <Input
          placeholder="Email" 
          keyboardType="email-address"
          onFocus={() => setInputEmailBorder(true)}
          onBlur={() => setInputEmailBorder(false)}
          containerStyle={[styles.inputMainContainer, {borderWidth: inputEmailBorder ? 1 : 0}]}
          inputStyle={styles.inputStyle}
          inputContainerStyle={[ styles.inputContainerStyle, { paddingTop: 5 }]}
          onChangeText={setEmail}
          // onEndEditing={() => console.log(email)}
        />
        <Input
          placeholder="Password" 
          secureTextEntry={secureTextEntryToggle}
          onFocus={() => setInputPasswordBorder(true)}
          onBlur={() => setInputPasswordBorder(false)}
          containerStyle={[styles.inputMainContainer, {borderWidth: inputPasswordBorder ? 1 : 0}]}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          rightIcon={<Eye size={24} style={{color: colors.gray}} onPress={() => setSecureTextEntryToggle(!secureTextEntryToggle)} />}
          onChangeText={setPassword}
          // onEndEditing={() => console.log(password)}
        />
        <Button 
          title="Password help ?"
          type="clear"
          containerStyle={{alignSelf: 'flex-end'}}
          titleStyle={[globalStyles.descriptionText, { color: colors.primary }]}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Button
          title="Login to Shopit"
          buttonStyle={styles.buttonBlockStyle}
          titleStyle={[globalStyles.subhead]}
          onPress={() => signIn(email, password)}
        />
        <View style={styles.footer}>
          <Text style={{color: colors.gray, fontSize: 16}}>Don't have an account ? </Text>
          <Text
            style={[globalStyles.descriptionText, {color: colors.primary, fontSize: 16}]}
            onPress={() => navigation.navigate('SignUp')}
          >Signup</Text>
        </View>
      </View>
    </View>
  )
}

export default SignInScreen
